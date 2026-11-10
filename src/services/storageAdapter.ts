import {
  createEnterpriseSeedDatabase,
  DEFAULT_TENANT_ACCOUNTS,
} from '../data/seedOrders';
import {
  AuthSession,
  EnterpriseDatabase,
  TenantAccount,
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

/**
 * Load all registered SaaS tenant accounts (Qualifacas, Facaria do Francisco, + any newly registered)
 */
export function getTenantAccounts(): TenantAccount[] {
  try {
    const raw = window.localStorage.getItem(TENANTS_REGISTRY_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as TenantAccount[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure default tenants are always present
        const existingIds = new Set(parsed.map((t) => t.company_id));
        const merged = [...parsed];
        for (const def of DEFAULT_TENANT_ACCOUNTS) {
          if (!existingIds.has(def.company_id)) {
            merged.push(def);
          }
        }
        return merged;
      }
    }
  } catch {
    // fallback
  }

  try {
    window.localStorage.setItem(
      TENANTS_REGISTRY_KEY,
      JSON.stringify(DEFAULT_TENANT_ACCOUNTS)
    );
  } catch {
    // ignore
  }
  return DEFAULT_TENANT_ACCOUNTS;
}

/**
 * Get current persisted session so page refresh stays logged in
 */
export function getActiveSession(): AuthSession | null {
  try {
    const raw = window.localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthSession;
    if (parsed && parsed.company_id && parsed.companyName && parsed.email) {
      return parsed;
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

/**
 * Authenticate a tenant by email & password
 */
export function authenticateTenant(
  emailInput: string,
  passwordInput: string
): { session?: AuthSession; error?: string } {
  const email = emailInput.trim().toLowerCase();
  const password = passwordInput.trim();
  const accounts = getTenantAccounts();

  const match = accounts.find(
    (acc) => acc.email.trim().toLowerCase() === email && acc.password === password
  );

  if (!match) {
    return {
      error: 'E-mail ou senha inválidos. Verifique suas credenciais.',
    };
  }

  const session: AuthSession = {
    company_id: match.company_id,
    companyName: match.companyName,
    ownerName: match.ownerName,
    email: match.email,
    loggedInAt: new Date().toISOString(),
  };

  saveActiveSession(session);
  return { session };
}

/**
 * Register a new tenant (Facaria) and automatically sign in
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
    return { error: 'Já existe uma facaria cadastrada com este e-mail.' };
  }

  const slug = companyName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');

  const company_id = `tenant_${slug}_${Date.now().toString().slice(-4)}`;

  const newAccount: TenantAccount = {
    company_id,
    companyName,
    ownerName,
    email,
    password,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  const updatedAccounts = [...accounts, newAccount];
  try {
    window.localStorage.setItem(
      TENANTS_REGISTRY_KEY,
      JSON.stringify(updatedAccounts)
    );
  } catch {
    // ignore
  }

  // Initialize isolated empty database for this new tenant
  saveEnterpriseDatabase(createEnterpriseSeedDatabase(company_id));

  const session: AuthSession = {
    company_id: newAccount.company_id,
    companyName: newAccount.companyName,
    ownerName: newAccount.ownerName,
    email: newAccount.email,
    loggedInAt: new Date().toISOString(),
  };

  saveActiveSession(session);
  return { session };
}

function normalizeDb(
  db: EnterpriseDatabase,
  company_id: string
): EnterpriseDatabase {
  return {
    version: 5,
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
