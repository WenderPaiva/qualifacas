import {
  createEnterpriseSeedDatabase,
  DEFAULT_TENANT_ACCOUNTS,
} from '../data/seedOrders';
import {
  AuthSession,
  EnterpriseDatabase,
  TenantAccount,
  UserRole,
} from '../types/order';
import { normalizeOrderPaymentStatus } from '../utils/financeEngine';

const TENANTS_REGISTRY_KEY = 'facasflow_saas_tenants_v1';
const ACTIVE_SESSION_KEY = 'facasflow_active_session_v1';
const LEGACY_SINGLE_PROD_KEY = 'facasflow_production_v1';
const LEGACY_DEMO_KEYS = [
  'facasflow_orders_v1',
  'facasflow_lean_v2',
  'facasflow_enterprise_bento_v3',
];

function getTenantDbStorageKey(company_id: string): string {
  return `facasflow_tenant_db_${company_id}`;
}

function normalizeAccount(acc: TenantAccount): TenantAccount {
  return {
    ...acc,
    id: acc.id || `USR-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    email: acc.email.trim().toLowerCase(),
    role: acc.role === 'operador' ? 'operador' : 'admin',
    jobTitle:
      acc.jobTitle ||
      (acc.role === 'operador'
        ? 'Operador de Produção'
        : 'Administrador / Proprietário'),
  };
}

/**
 * Check URL for employee invite sync token (?emp_sync=...) so mobile devices can import employee credentials & RBAC role
 */
export function checkAndImportInviteFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('emp_sync');
    if (!encoded) return;

    const jsonStr = decodeURIComponent(escape(window.atob(encoded)));
    const imported = JSON.parse(jsonStr) as TenantAccount;
    if (imported && imported.email && imported.company_id && imported.role) {
      const accounts = getTenantAccounts();
      const cleanEmail = imported.email.trim().toLowerCase();
      const filtered = accounts.filter(
        (a) => a.email.trim().toLowerCase() !== cleanEmail
      );
      const updated = [...filtered, normalizeAccount(imported)];
      window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(updated));

      // Clean URL parameter without reloading
      const url = new URL(window.location.href);
      url.searchParams.delete('emp_sync');
      window.history.replaceState({}, '', url.toString());
    }
  } catch {
    // ignore invalid token
  }
}

/**
 * Load all registered SaaS tenant & employee accounts
 */
export function getTenantAccounts(): TenantAccount[] {
  try {
    const raw = window.localStorage.getItem(TENANTS_REGISTRY_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as TenantAccount[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existingEmails = new Set(
          parsed.map((t) => t.email.trim().toLowerCase())
        );
        const merged = parsed.map(normalizeAccount);
        for (const def of DEFAULT_TENANT_ACCOUNTS) {
          if (!existingEmails.has(def.email.trim().toLowerCase())) {
            merged.push(normalizeAccount(def));
          }
        }
        return merged;
      }
    }
  } catch {
    // fallback
  }

  const defaults = DEFAULT_TENANT_ACCOUNTS.map(normalizeAccount);
  try {
    window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(defaults));
  } catch {
    // ignore
  }
  return defaults;
}

export function saveTenantAccounts(accounts: TenantAccount[]): TenantAccount[] {
  const normalized = accounts.map(normalizeAccount);
  try {
    window.localStorage.setItem(
      TENANTS_REGISTRY_KEY,
      JSON.stringify(normalized)
    );
  } catch {
    // ignore
  }
  return normalized;
}

/**
 * Get all users/employees belonging strictly to a specific `company_id`
 */
export function getCompanyEmployees(company_id: string): TenantAccount[] {
  const all = getTenantAccounts();
  return all.filter((acc) => acc.company_id === company_id);
}

/**
 * Register a new employee under the current Admin's `company_id`
 */
export function registerEmployeeForCompany(payload: {
  company_id: string;
  companyName: string;
  ownerName: string;
  email: string;
  password: string;
  role: UserRole;
  jobTitle: string;
}): { employee?: TenantAccount; error?: string } {
  const email = payload.email.trim().toLowerCase();
  const ownerName = payload.ownerName.trim();
  const password = payload.password.trim();
  const jobTitle =
    payload.jobTitle.trim() ||
    (payload.role === 'operador' ? 'Operador de Produção' : 'Administrador');

  if (!ownerName || !email || !password) {
    return { error: 'Preencha nome, e-mail e senha do funcionário.' };
  }

  const accounts = getTenantAccounts();
  if (accounts.some((a) => a.email.trim().toLowerCase() === email)) {
    return { error: 'Já existe um usuário cadastrado com este e-mail.' };
  }

  const companyUsers = accounts.filter(
    (a) => a.company_id === payload.company_id
  );
  const nextId = `USR-${String(companyUsers.length + 1).padStart(3, '0')}`;

  const newEmployee: TenantAccount = {
    id: nextId,
    company_id: payload.company_id,
    companyName: payload.companyName,
    ownerName,
    email,
    password,
    role: payload.role,
    jobTitle,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  const updated = [...accounts, newEmployee];
  saveTenantAccounts(updated);

  return { employee: newEmployee };
}

/**
 * Update an employee's role ('admin' | 'operador') within the same company
 */
export function updateEmployeeRoleInCompany(
  email: string,
  company_id: string,
  nextRole: UserRole
): TenantAccount[] {
  const cleanEmail = email.trim().toLowerCase();
  const accounts = getTenantAccounts();
  const updated = accounts.map((acc) => {
    if (
      acc.company_id === company_id &&
      acc.email.trim().toLowerCase() === cleanEmail
    ) {
      return {
        ...acc,
        role: nextRole,
        jobTitle:
          nextRole === 'operador'
            ? acc.jobTitle === 'Administrador / Proprietário'
              ? 'Operador de Produção'
              : acc.jobTitle
            : acc.jobTitle,
      };
    }
    return acc;
  });
  saveTenantAccounts(updated);
  return updated.filter((a) => a.company_id === company_id);
}

/**
 * Delete an employee account from a company
 */
export function deleteEmployeeFromCompany(
  email: string,
  company_id: string
): TenantAccount[] {
  const cleanEmail = email.trim().toLowerCase();
  const accounts = getTenantAccounts();
  const updated = accounts.filter(
    (acc) =>
      !(
        acc.company_id === company_id &&
        acc.email.trim().toLowerCase() === cleanEmail
      )
  );
  saveTenantAccounts(updated);
  return updated.filter((a) => a.company_id === company_id);
}

/**
 * Get current persisted session so page refresh stays logged in
 */
export function getActiveSession(): AuthSession | null {
  try {
    checkAndImportInviteFromUrl();
    const raw = window.localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthSession;
    if (parsed && parsed.company_id && parsed.companyName && parsed.email) {
      return {
        ...parsed,
        role: parsed.role === 'operador' ? 'operador' : 'admin',
      };
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Save active session on login
 */
export function saveActiveSession(session: AuthSession): void {
  try {
    window.localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }
}

/**
 * Logout and clear active session
 */
export function clearActiveSession(): void {
  try {
    window.localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch {
    // ignore
  }
}

function buildDeterministicCompanyId(email: string): string {
  const clean = email
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
  return `tenant_${clean}`;
}

/**
 * Authenticate a user (Admin or Operador) by email & password
 */
export function authenticateTenant(
  emailInput: string,
  passwordInput: string
): { session?: AuthSession; error?: string } {
  const email = emailInput.trim().toLowerCase();
  const password = passwordInput.trim();

  if (!email || !password) {
    return {
      error: 'Preencha seu e-mail e senha para entrar.',
    };
  }

  const accounts = getTenantAccounts();

  // Also check if any tenant database on this device has this employee inside its `employees` list
  let existingByEmail = accounts.find(
    (acc) => acc.email.trim().toLowerCase() === email
  );

  if (!existingByEmail) {
    try {
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key && key.startsWith('facasflow_tenant_db_')) {
          const rawDb = window.localStorage.getItem(key);
          if (rawDb) {
            const parsedDb = JSON.parse(rawDb) as EnterpriseDatabase;
            if (Array.isArray(parsedDb.employees)) {
              const foundEmp = parsedDb.employees.find(
                (e) => e.email.trim().toLowerCase() === email
              );
              if (foundEmp) {
                existingByEmail = normalizeAccount(foundEmp);
                saveTenantAccounts([...accounts, existingByEmail]);
                break;
              }
            }
          }
        }
      }
    } catch {
      // ignore
    }
  }

  if (existingByEmail) {
    const storedPass = existingByEmail.password.trim();
    const isPasswordMatch =
      storedPass === password ||
      storedPass.toLowerCase() === password.toLowerCase();

    if (!isPasswordMatch) {
      return {
        error: 'E-mail ou senha inválidos. Verifique suas credenciais.',
      };
    }

    const session: AuthSession = {
      userId: existingByEmail.id,
      company_id: existingByEmail.company_id,
      companyName: existingByEmail.companyName,
      ownerName: existingByEmail.ownerName,
      email: existingByEmail.email.trim().toLowerCase(),
      role: existingByEmail.role === 'operador' ? 'operador' : 'admin',
      jobTitle: existingByEmail.jobTitle,
      loggedInAt: new Date().toISOString(),
    };

    saveActiveSession(session);
    return { session };
  }

  // Cross-device fallback for newly registered company owners
  if (email.includes('@') && password.length >= 1) {
    const company_id = buildDeterministicCompanyId(email);
    const localPrefix = email.split('@')[0] || 'Facaria';
    const formattedName =
      localPrefix.charAt(0).toUpperCase() + localPrefix.slice(1);

    const syncedAccount: TenantAccount = {
      id: 'USR-001',
      company_id,
      companyName: formattedName,
      ownerName: formattedName,
      email,
      password,
      role: 'admin',
      jobTitle: 'Administrador / Proprietário',
      createdAt: new Date().toISOString().slice(0, 10),
    };

    saveTenantAccounts([...accounts, syncedAccount]);

    const session: AuthSession = {
      userId: syncedAccount.id,
      company_id: syncedAccount.company_id,
      companyName: syncedAccount.companyName,
      ownerName: syncedAccount.ownerName,
      email: syncedAccount.email,
      role: 'admin',
      jobTitle: syncedAccount.jobTitle,
      loggedInAt: new Date().toISOString(),
    };

    saveActiveSession(session);
    return { session };
  }

  return {
    error: 'E-mail ou senha inválidos. Verifique suas credenciais.',
  };
}

/**
 * Register a new tenant (Facaria) as Admin/Owner and automatically sign in
 */
export function registerNewTenant(payload: {
  companyName: string;
  ownerName: string;
  email: string;
  password: string;
}): { session?: AuthSession; error?: string } {
  const email = payload.email.trim().toLowerCase();
  const companyName = payload.companyName.trim();
  const ownerName = payload.ownerName.trim() || companyName;
  const password = payload.password.trim();

  if (!companyName || !email || !password) {
    return { error: 'Preencha todos os campos obrigatórios.' };
  }

  const accounts = getTenantAccounts();
  if (accounts.some((a) => a.email.trim().toLowerCase() === email)) {
    return { error: 'Já existe uma conta cadastrada com este e-mail.' };
  }

  const company_id = buildDeterministicCompanyId(email);

  const newAccount: TenantAccount = {
    id: 'USR-001',
    company_id,
    companyName,
    ownerName,
    email,
    password,
    role: 'admin',
    jobTitle: 'Administrador / Proprietário',
    createdAt: new Date().toISOString().slice(0, 10),
  };

  saveTenantAccounts([...accounts, newAccount]);

  // Initialize isolated database for this new tenant including the owner in employees
  const initialDb = createEnterpriseSeedDatabase(company_id);
  initialDb.employees = [newAccount];
  saveEnterpriseDatabase(initialDb);

  const session: AuthSession = {
    userId: newAccount.id,
    company_id: newAccount.company_id,
    companyName: newAccount.companyName,
    ownerName: newAccount.ownerName,
    email: newAccount.email,
    role: 'admin',
    jobTitle: newAccount.jobTitle,
    loggedInAt: new Date().toISOString(),
  };

  saveActiveSession(session);
  return { session };
}

function normalizeDb(
  db: EnterpriseDatabase,
  company_id: string
): EnterpriseDatabase {
  const registryEmployees = getCompanyEmployees(company_id);
  const dbEmployees = Array.isArray(db.employees) ? db.employees : [];

  // Merge employees from registry and db so Realtime sync propagates employee list too
  const mergedEmpMap = new Map<string, TenantAccount>();
  for (const emp of [...registryEmployees, ...dbEmployees]) {
    if (emp && emp.email && emp.company_id === company_id) {
      mergedEmpMap.set(emp.email.trim().toLowerCase(), normalizeAccount(emp));
    }
  }
  const mergedEmployees = Array.from(mergedEmpMap.values());

  // Sync merged employees back into global tenant registry on this client
  if (mergedEmployees.length > 0) {
    try {
      const allAccounts = getTenantAccounts();
      const others = allAccounts.filter((a) => a.company_id !== company_id);
      window.localStorage.setItem(
        TENANTS_REGISTRY_KEY,
        JSON.stringify([...others, ...mergedEmployees])
      );
    } catch {
      // ignore
    }
  }

  return {
    version: 6,
    company_id,
    companies: (Array.isArray(db.companies) ? db.companies : [])
      .filter((c) => !c.company_id || c.company_id === company_id)
      .map((c) => ({ ...c, company_id })),
    orders: (Array.isArray(db.orders) ? db.orders : [])
      .filter((o) => !o.company_id || o.company_id === company_id)
      .map((o) => normalizeOrderPaymentStatus({ ...o, company_id }))
      .sort((a, b) => {
        const nA = parseInt(a.id.replace(/\D/g, ''), 10) || 0;
        const nB = parseInt(b.id.replace(/\D/g, ''), 10) || 0;
        return nB - nA;
      }),
    deliveries: (Array.isArray(db.deliveries) ? db.deliveries : [])
      .filter((d) => !d.company_id || d.company_id === company_id)
      .map((d) => ({ ...d, company_id })),
    returns: (Array.isArray(db.returns) ? db.returns : [])
      .filter((r) => !r.company_id || r.company_id === company_id)
      .map((r) => ({ ...r, company_id })),
    employees: mergedEmployees,
  };
}

/**
 * Load database strictly isolated for the given tenant `company_id`
 */
export function loadEnterpriseDatabase(
  company_id: string = 'tenant_qualifacas'
): EnterpriseDatabase {
  try {
    for (const oldKey of LEGACY_DEMO_KEYS) {
      window.localStorage.removeItem(oldKey);
    }

    const tenantKey = getTenantDbStorageKey(company_id);
    const raw = window.localStorage.getItem(tenantKey);
    if (raw) {
      const parsed = JSON.parse(raw) as EnterpriseDatabase;
      if (parsed && Array.isArray(parsed.companies) && Array.isArray(parsed.orders)) {
        return normalizeDb(parsed, company_id);
      }
    }

    // One-time migration for Qualifacas if legacy production key exists
    if (company_id === 'tenant_qualifacas') {
      const legacyRaw = window.localStorage.getItem(LEGACY_SINGLE_PROD_KEY);
      if (legacyRaw) {
        const legacyParsed = JSON.parse(legacyRaw) as EnterpriseDatabase;
        if (legacyParsed && Array.isArray(legacyParsed.orders)) {
          const migrated = normalizeDb(legacyParsed, company_id);
          saveEnterpriseDatabase(migrated);
          return migrated;
        }
      }
    }
  } catch {
    // Fallback to empty isolated tenant database
  }

  const emptyDb = normalizeDb(
    createEnterpriseSeedDatabase(company_id),
    company_id
  );
  saveEnterpriseDatabase(emptyDb);
  return emptyDb;
}

/**
 * Save database strictly isolated under `facasflow_tenant_db_${db.company_id}`
 */
export function saveEnterpriseDatabase(
  db: EnterpriseDatabase
): EnterpriseDatabase {
  const company_id = db.company_id || 'tenant_qualifacas';
  const normalized = normalizeDb(db, company_id);
  const tenantKey = getTenantDbStorageKey(company_id);

  try {
    window.localStorage.setItem(tenantKey, JSON.stringify(normalized));
  } catch {
    // ignore quota issues
  }

  if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
    fetch(`/api/orders?company_id=${encodeURIComponent(company_id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(normalized),
    }).catch(() => {});
  }

  return normalized;
}

export function getNextOrderId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const o of db.orders) {
    const num = parseInt(o.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `OS-${String(max + 1).padStart(3, '0')}`;
}

export function getNextDeliveryId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const d of db.deliveries) {
    const num = parseInt(d.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `ENT-${String(max + 1).padStart(3, '0')}`;
}

export function getNextReturnId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const r of db.returns) {
    const num = parseInt(r.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `RET-${String(max + 1).padStart(3, '0')}`;
}
