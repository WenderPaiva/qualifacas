// FacasFlow Enterprise (Dark Crimson Bento Edition) - Compiled ESM Bundle
import * as ReactNamespace from 'https://esm.sh/react@19.0.0';
import { createRoot } from 'https://esm.sh/react-dom@19.0.0/client';
import * as LucideIcons from 'https://esm.sh/lucide-react@0.468.0?deps=react@19.0.0';

const React = ReactNamespace.default || ReactNamespace;
const __externalModules = {
  'react': Object.assign({ default: React }, ReactNamespace),
  'react-dom/client': { createRoot, default: { createRoot } },
  'lucide-react': LucideIcons
};

const __moduleFactories = {};
const __moduleCache = {};

function __resolvePath(baseDir, request) {
  if (!request.startsWith('.')) return request;
  const parts = (baseDir + '/' + request).split('/');
  const resolved = [];
  for (const part of parts) {
    if (part === '' || part === '.') continue;
    if (part === '..') resolved.pop();
    else resolved.push(part);
  }
  return './' + resolved.join('/').replace(/\.(tsx|ts|js)$/, '');
}

function __require(baseDir, request) {
  if (__externalModules[request]) {
    return __externalModules[request];
  }
  const resolvedId = __resolvePath(baseDir, request);
  if (__moduleCache[resolvedId]) {
    return __moduleCache[resolvedId].exports;
  }
  const factory = __moduleFactories[resolvedId];
  if (!factory) {
    throw new Error('Module not found in FacasFlow bundle: ' + request + ' (resolved: ' + resolvedId + ')');
  }
  const moduleObj = { exports: {} };
  __moduleCache[resolvedId] = moduleObj;
  factory(moduleObj, moduleObj.exports, (req) => __require(factory.dir, req));
  return moduleObj.exports;
}


__moduleFactories["./types/order"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

  },
  { dir: "./types" }
);

__moduleFactories["./utils/financeEngine"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RETURN_STATUS_META = exports.DELIVERY_METHOD_META = exports.PAYMENT_MODALITY_META = exports.PRODUCTION_STAGES = void 0;
exports.formatBRL = formatBRL;
exports.toISODate = toISODate;
exports.nowTimestampBR = nowTimestampBR;
exports.addDays = addDays;
exports.formatDateBR = formatDateBR;
exports.getDaysDiff = getDaysDiff;
exports.getNextStage = getNextStage;
exports.getPrevStage = getPrevStage;
exports.normalizeOrderPaymentStatus = normalizeOrderPaymentStatus;
exports.computeFinancialBreakdown = computeFinancialBreakdown;
exports.buildPixClipboardSnippet = buildPixClipboardSnippet;
exports.buildWhatsAppBillingUrl = buildWhatsAppBillingUrl;
exports.PRODUCTION_STAGES = [
    {
        id: 'arquivo_recebido',
        step: 1,
        label: 'Arquivo Recebido',
        shortLabel: '1. Arquivo',
        subtitle: 'CAD / PDF / Amostra na triagem',
        accentColor: 'border-zinc-700',
        dotClass: 'bg-zinc-400',
    },
    {
        id: 'desenho_produzido',
        step: 2,
        label: 'Desenho Produzido',
        shortLabel: '2. Desenho CAD',
        subtitle: 'EngView / Projeto técnico pronto',
        accentColor: 'border-rose-900/60',
        dotClass: 'bg-rose-400',
    },
    {
        id: 'faca_serrada',
        step: 3,
        label: 'Faca Serrada',
        shortLabel: '3. Serrada / Laser',
        subtitle: 'Madeira cortada e calada',
        accentColor: 'border-amber-500/40',
        dotClass: 'bg-amber-400',
    },
    {
        id: 'faca_dobrada',
        step: 4,
        label: 'Faca Dobrada',
        shortLabel: '4. Lâmina Dobrada',
        subtitle: 'Lâminas de corte e vinco conformadas',
        accentColor: 'border-orange-500/40',
        dotClass: 'bg-orange-400',
    },
    {
        id: 'faca_ajustada',
        step: 5,
        label: 'Faca Ajustada',
        shortLabel: '5. Ajustada / Borracha',
        subtitle: 'Cravação, esquadro e emborrachamento',
        accentColor: 'border-rose-600/50',
        dotClass: 'bg-rose-500',
    },
    {
        id: 'faca_pronta',
        step: 6,
        label: 'Faca Pronta',
        shortLabel: '6. Faca Pronta',
        subtitle: 'Liberada para expedição / entrega',
        accentColor: 'border-emerald-500/50',
        dotClass: 'bg-emerald-500',
    },
];
exports.PAYMENT_MODALITY_META = {
    pix: {
        label: 'PIX',
        short: 'PIX',
        colorHex: '#10b981', // emerald-500
        badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        defaultDays: 0,
    },
    a_prazo: {
        label: 'A Prazo - 30/60d',
        short: 'A Prazo 30/60d',
        colorHex: '#e11d48', // crimson / rose-600
        badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        defaultDays: 30,
    },
    dinheiro: {
        label: 'Dinheiro',
        short: 'Dinheiro',
        colorHex: '#22c55e', // green-500
        badgeClass: 'bg-green-500/15 text-green-400 border-green-500/30',
        defaultDays: 0,
    },
    cartao: {
        label: 'Cartão',
        short: 'Cartão',
        colorHex: '#f59e0b', // amber-500
        badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        defaultDays: 2,
    },
    cortesia: {
        label: 'Cortesia / Não Paga',
        short: 'Cortesia / Garantia',
        colorHex: '#71717a', // zinc-500
        badgeClass: 'bg-zinc-800 text-zinc-400 border-zinc-700',
        defaultDays: 0,
    },
};
exports.DELIVERY_METHOD_META = {
    cliente_buscou: {
        label: 'Cliente Veio Buscar',
        badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    },
    uber_flash: {
        label: 'Enviado por Uber Flash',
        badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    },
    entregador_proprio: {
        label: 'Entregador Próprio',
        badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
    portador: {
        label: 'Retirado por Portador',
        badgeClass: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    },
};
exports.RETURN_STATUS_META = {
    em_analise: {
        label: 'Em Análise',
        badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        dotClass: 'bg-amber-400',
        next: 'em_ajuste',
    },
    em_ajuste: {
        label: 'Em Ajuste de Bancada',
        badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
        dotClass: 'bg-rose-500',
        next: 'liberado',
    },
    liberado: {
        label: 'Liberado Novamente',
        badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
        dotClass: 'bg-emerald-500',
    },
};
function formatBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(Number.isFinite(value) ? value : 0);
}
function toISODate(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
function nowTimestampBR(date = new Date()) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${d}/${m} às ${h}:${min}`;
}
function addDays(baseIso, days) {
    const clean = (baseIso || toISODate()).slice(0, 10);
    const [y, m, d] = clean.split('-').map(Number);
    const dt = new Date(y, (m || 1) - 1, d || 1, 12, 0, 0);
    dt.setDate(dt.getDate() + days);
    return toISODate(dt);
}
function formatDateBR(isoDate) {
    if (!isoDate)
        return '—';
    const clean = isoDate.slice(0, 10);
    const parts = clean.split('-');
    if (parts.length !== 3)
        return isoDate;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
function getDaysDiff(dueDate, refIso) {
    const today = (refIso || toISODate()).slice(0, 10);
    const due = (dueDate || today).slice(0, 10);
    const [ty, tm, td] = today.split('-').map(Number);
    const [dy, dm, dd] = due.split('-').map(Number);
    const tDate = new Date(ty, tm - 1, td, 12, 0, 0);
    const dDate = new Date(dy, dm - 1, dd, 12, 0, 0);
    return Math.round((dDate.getTime() - tDate.getTime()) / 86400000);
}
function getNextStage(current) {
    const idx = exports.PRODUCTION_STAGES.findIndex((s) => s.id === current);
    if (idx === -1 || idx >= exports.PRODUCTION_STAGES.length - 1)
        return null;
    return exports.PRODUCTION_STAGES[idx + 1].id;
}
function getPrevStage(current) {
    const idx = exports.PRODUCTION_STAGES.findIndex((s) => s.id === current);
    if (idx <= 0)
        return null;
    return exports.PRODUCTION_STAGES[idx - 1].id;
}
function normalizeOrderPaymentStatus(order) {
    if (order.paymentModality === 'cortesia') {
        return { ...order, paymentStatus: 'cortesia' };
    }
    if (order.paymentStatus === 'pago' || order.paymentStatus === 'sem_nota') {
        return order;
    }
    const diff = getDaysDiff(order.dueDate);
    const nextStatus = diff < 0 ? 'vencido' : 'a_receber';
    if (nextStatus === order.paymentStatus)
        return order;
    return { ...order, paymentStatus: nextStatus };
}
function computeFinancialBreakdown(orders) {
    let receivable30d = 0;
    let receivableCount = 0;
    let overdueTotal = 0;
    let overdueCount = 0;
    let unbilledTotal = 0;
    let unbilledCount = 0;
    let paidTotal = 0;
    let paidCount = 0;
    let totalVolume = 0;
    const modalityTotals = {
        pix: { amount: 0, count: 0 },
        a_prazo: { amount: 0, count: 0 },
        dinheiro: { amount: 0, count: 0 },
        cartao: { amount: 0, count: 0 },
        cortesia: { amount: 0, count: 0 },
    };
    for (const raw of orders) {
        const o = normalizeOrderPaymentStatus(raw);
        const val = o.amount || 0;
        totalVolume += val;
        if (modalityTotals[o.paymentModality]) {
            modalityTotals[o.paymentModality].amount += val;
            modalityTotals[o.paymentModality].count += 1;
        }
        switch (o.paymentStatus) {
            case 'pago':
                paidTotal += val;
                paidCount += 1;
                break;
            case 'vencido':
                overdueTotal += val;
                overdueCount += 1;
                break;
            case 'sem_nota':
                unbilledTotal += val;
                unbilledCount += 1;
                break;
            case 'a_receber':
                receivable30d += val;
                receivableCount += 1;
                break;
        }
    }
    const safeTotal = totalVolume > 0 ? totalVolume : 1;
    const byModality = Object.keys(exports.PAYMENT_MODALITY_META).map((mod) => {
        const meta = exports.PAYMENT_MODALITY_META[mod];
        const stats = modalityTotals[mod];
        return {
            modality: mod,
            label: meta.label,
            colorHex: meta.colorHex,
            totalAmount: stats.amount,
            count: stats.count,
            percentage: Math.round((stats.amount / safeTotal) * 100),
        };
    });
    return {
        receivable30d,
        receivableCount,
        overdueTotal,
        overdueCount,
        unbilledTotal,
        unbilledCount,
        paidTotal,
        paidCount,
        totalVolume,
        byModality,
    };
}
function buildPixClipboardSnippet(order) {
    return (`QUALIFACAS CORTE E VINCO - ${order.id}\n` +
        `Empresa: ${order.companyName}\n` +
        `Ferramenta: ${order.toolDescription}\n` +
        `Valor: ${formatBRL(order.amount)} (${exports.PAYMENT_MODALITY_META[order.paymentModality]?.short})\n` +
        `Vencimento: ${formatDateBR(order.dueDate)}\n` +
        `Chave PIX (CNPJ): 14.528.910/0001-42`);
}
function buildWhatsAppBillingUrl(order) {
    const digits = (order.companyPhone || '11999990000').replace(/\D/g, '');
    const phone = digits.startsWith('55') ? digits : `55${digits}`;
    const valor = formatBRL(order.amount);
    const venc = formatDateBR(order.dueDate);
    const mod = exports.PAYMENT_MODALITY_META[order.paymentModality]?.label || '';
    let msg = '';
    if (order.paymentStatus === 'vencido') {
        msg =
            `Olá, pessoal da *${order.companyName}*, tudo bem?\n\n` +
                `Consta em aberto no nosso sistema a *${order.id} (${order.toolDescription})*, no valor de *${valor}* (vencimento em ${venc}).\n\n` +
                `Para pagamento via PIX, nossa chave CNPJ é: *14.528.910/0001-42*.\n` +
                `Caso já tenham efetuado a baixa, por gentileza desconsiderem. Obrigado!`;
    }
    else if (order.paymentStatus === 'sem_nota') {
        msg =
            `Olá, pessoal da *${order.companyName}*!\n\n` +
                `Referente à faca entregue *${order.id} - ${order.toolDescription}* (*${valor}*), estamos gerando o fechamento financeiro.\n\n` +
                `Confirmam o faturamento na modalidade *${mod}* ou preferem PIX (*14.528.910/0001-42*)? Obrigado!`;
    }
    else {
        msg =
            `Olá, pessoal da *${order.companyName}*!\n\n` +
                `Segue o resumo da *${order.id} - ${order.toolDescription}*:\n` +
                `• *Valor:* ${valor}\n` +
                `• *Modalidade:* ${mod}\n` +
                `• *Vencimento:* ${venc}\n` +
                `• *Chave PIX (CNPJ):* 14.528.910/0001-42\n\n` +
                `Qualquer dúvida estamos à disposição!`;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

  },
  { dir: "./utils" }
);

__moduleFactories["./data/seedOrders"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TENANT_ACCOUNTS = void 0;
exports.createEnterpriseSeedDatabase = createEnterpriseSeedDatabase;
exports.DEFAULT_TENANT_ACCOUNTS = [
    {
        company_id: 'tenant_qualifacas',
        companyName: 'Qualifacas',
        ownerName: 'Wender Paiva',
        email: 'contato@qualifacas.com',
        password: '123456',
        createdAt: '2026-11-10',
    },
    {
        company_id: 'tenant_francisco',
        companyName: 'Facaria do Francisco',
        ownerName: 'Francisco',
        email: 'francisco@facaria.com',
        password: '123456',
        createdAt: '2026-11-10',
    },
];
function createEnterpriseSeedDatabase(company_id = 'tenant_qualifacas') {
    return {
        version: 5,
        company_id,
        companies: [],
        orders: [],
        deliveries: [],
        returns: [],
    };
}

  },
  { dir: "./data" }
);

__moduleFactories["./services/storageAdapter"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTenantAccounts = getTenantAccounts;
exports.getActiveSession = getActiveSession;
exports.saveActiveSession = saveActiveSession;
exports.clearActiveSession = clearActiveSession;
exports.authenticateTenant = authenticateTenant;
exports.registerNewTenant = registerNewTenant;
exports.loadEnterpriseDatabase = loadEnterpriseDatabase;
exports.saveEnterpriseDatabase = saveEnterpriseDatabase;
exports.getNextOrderId = getNextOrderId;
exports.getNextDeliveryId = getNextDeliveryId;
exports.getNextReturnId = getNextReturnId;
const seedOrders_1 = require("../data/seedOrders");
const financeEngine_1 = require("../utils/financeEngine");
const TENANTS_REGISTRY_KEY = 'facasflow_saas_tenants_v1';
const ACTIVE_SESSION_KEY = 'facasflow_active_session_v1';
const LEGACY_SINGLE_PROD_KEY = 'facasflow_production_v1';
const LEGACY_DEMO_KEYS = [
    'facasflow_orders_v1',
    'facasflow_lean_v2',
    'facasflow_enterprise_bento_v3',
];
function getTenantDbStorageKey(company_id) {
    return `facasflow_tenant_db_${company_id}`;
}
/**
 * Load all registered SaaS tenant accounts (Qualifacas, Facaria do Francisco, + any newly registered)
 */
function getTenantAccounts() {
    try {
        const raw = window.localStorage.getItem(TENANTS_REGISTRY_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                // Ensure default tenants are always present
                const existingIds = new Set(parsed.map((t) => t.company_id));
                const merged = [...parsed];
                for (const def of seedOrders_1.DEFAULT_TENANT_ACCOUNTS) {
                    if (!existingIds.has(def.company_id)) {
                        merged.push(def);
                    }
                }
                return merged;
            }
        }
    }
    catch {
        // fallback
    }
    try {
        window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(seedOrders_1.DEFAULT_TENANT_ACCOUNTS));
    }
    catch {
        // ignore
    }
    return seedOrders_1.DEFAULT_TENANT_ACCOUNTS;
}
/**
 * Get current persisted session so page refresh stays logged in
 */
function getActiveSession() {
    try {
        const raw = window.localStorage.getItem(ACTIVE_SESSION_KEY);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.company_id && parsed.companyName && parsed.email) {
            return parsed;
        }
        return null;
    }
    catch {
        return null;
    }
}
/**
 * Save active session on login
 */
function saveActiveSession(session) {
    try {
        window.localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
    }
    catch {
        // ignore
    }
}
/**
 * Logout and clear active session
 */
function clearActiveSession() {
    try {
        window.localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
    catch {
        // ignore
    }
}
function buildDeterministicCompanyId(email) {
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
 * Authenticate a tenant by email & password (with mobile keyboard normalization)
 */
function authenticateTenant(emailInput, passwordInput) {
    const email = emailInput.trim().toLowerCase();
    const password = passwordInput.trim();
    if (!email || !password) {
        return {
            error: 'Preencha seu e-mail e senha para entrar.',
        };
    }
    const accounts = getTenantAccounts();
    const existingByEmail = accounts.find((acc) => acc.email.trim().toLowerCase() === email);
    if (existingByEmail) {
        const storedPass = existingByEmail.password.trim();
        const isPasswordMatch = storedPass === password ||
            storedPass.toLowerCase() === password.toLowerCase();
        if (!isPasswordMatch) {
            return {
                error: 'E-mail ou senha inválidos. Verifique suas credenciais.',
            };
        }
        const session = {
            company_id: existingByEmail.company_id,
            companyName: existingByEmail.companyName,
            ownerName: existingByEmail.ownerName,
            email: existingByEmail.email.trim().toLowerCase(),
            loggedInAt: new Date().toISOString(),
        };
        saveActiveSession(session);
        return { session };
    }
    // Cross-device / mobile login support: if the account was created on another device
    // (e.g. Desktop) and is not yet in this mobile browser's localStorage, provision it
    // deterministically from the normalized email so mobile login works seamlessly.
    if (email.includes('@') && password.length >= 1) {
        const company_id = buildDeterministicCompanyId(email);
        const localPrefix = email.split('@')[0] || 'Facaria';
        const formattedName = localPrefix.charAt(0).toUpperCase() + localPrefix.slice(1);
        const syncedAccount = {
            company_id,
            companyName: formattedName,
            ownerName: formattedName,
            email,
            password,
            createdAt: new Date().toISOString().slice(0, 10),
        };
        const updatedAccounts = [...accounts, syncedAccount];
        try {
            window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(updatedAccounts));
        }
        catch {
            // ignore
        }
        const session = {
            company_id: syncedAccount.company_id,
            companyName: syncedAccount.companyName,
            ownerName: syncedAccount.ownerName,
            email: syncedAccount.email,
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
 * Register a new tenant (Facaria) and automatically sign in
 */
function registerNewTenant(payload) {
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
    const company_id = buildDeterministicCompanyId(email);
    const newAccount = {
        company_id,
        companyName,
        ownerName,
        email,
        password,
        createdAt: new Date().toISOString().slice(0, 10),
    };
    const updatedAccounts = [...accounts, newAccount];
    try {
        window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(updatedAccounts));
    }
    catch {
        // ignore
    }
    // Initialize isolated empty database for this new tenant
    saveEnterpriseDatabase((0, seedOrders_1.createEnterpriseSeedDatabase)(company_id));
    const session = {
        company_id: newAccount.company_id,
        companyName: newAccount.companyName,
        ownerName: newAccount.ownerName,
        email: newAccount.email,
        loggedInAt: new Date().toISOString(),
    };
    saveActiveSession(session);
    return { session };
}
function normalizeDb(db, company_id) {
    return {
        version: 5,
        company_id,
        companies: (Array.isArray(db.companies) ? db.companies : [])
            .filter((c) => !c.company_id || c.company_id === company_id)
            .map((c) => ({ ...c, company_id })),
        orders: (Array.isArray(db.orders) ? db.orders : [])
            .filter((o) => !o.company_id || o.company_id === company_id)
            .map((o) => (0, financeEngine_1.normalizeOrderPaymentStatus)({ ...o, company_id }))
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
function loadEnterpriseDatabase(company_id = 'tenant_qualifacas') {
    try {
        for (const oldKey of LEGACY_DEMO_KEYS) {
            window.localStorage.removeItem(oldKey);
        }
        const tenantKey = getTenantDbStorageKey(company_id);
        const raw = window.localStorage.getItem(tenantKey);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.companies) && Array.isArray(parsed.orders)) {
                return normalizeDb(parsed, company_id);
            }
        }
        // One-time migration for Qualifacas if legacy production key exists
        if (company_id === 'tenant_qualifacas') {
            const legacyRaw = window.localStorage.getItem(LEGACY_SINGLE_PROD_KEY);
            if (legacyRaw) {
                const legacyParsed = JSON.parse(legacyRaw);
                if (legacyParsed && Array.isArray(legacyParsed.orders)) {
                    const migrated = normalizeDb(legacyParsed, company_id);
                    saveEnterpriseDatabase(migrated);
                    return migrated;
                }
            }
        }
    }
    catch {
        // Fallback to empty isolated tenant database
    }
    const emptyDb = normalizeDb((0, seedOrders_1.createEnterpriseSeedDatabase)(company_id), company_id);
    saveEnterpriseDatabase(emptyDb);
    return emptyDb;
}
/**
 * Save database strictly isolated under `facasflow_tenant_db_${db.company_id}`
 */
function saveEnterpriseDatabase(db) {
    const company_id = db.company_id || 'tenant_qualifacas';
    const normalized = normalizeDb(db, company_id);
    const tenantKey = getTenantDbStorageKey(company_id);
    try {
        window.localStorage.setItem(tenantKey, JSON.stringify(normalized));
    }
    catch {
        // ignore quota issues
    }
    if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
        fetch(`/api/orders?company_id=${encodeURIComponent(company_id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(normalized),
        }).catch(() => { });
    }
    return normalized;
}
function getNextOrderId(db) {
    let max = 0;
    for (const o of db.orders) {
        const num = parseInt(o.id.replace(/\D/g, ''), 10);
        if (!Number.isNaN(num) && num > max)
            max = num;
    }
    return `OS-${String(max + 1).padStart(3, '0')}`;
}
function getNextDeliveryId(db) {
    let max = 0;
    for (const d of db.deliveries) {
        const num = parseInt(d.id.replace(/\D/g, ''), 10);
        if (!Number.isNaN(num) && num > max)
            max = num;
    }
    return `ENT-${String(max + 1).padStart(3, '0')}`;
}
function getNextReturnId(db) {
    let max = 0;
    for (const r of db.returns) {
        const num = parseInt(r.id.replace(/\D/g, ''), 10);
        if (!Number.isNaN(num) && num > max)
            max = num;
    }
    return `RET-${String(max + 1).padStart(3, '0')}`;
}

  },
  { dir: "./services" }
);

__moduleFactories["./components/AuthLoginScreen"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginScreen = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const storageAdapter_1 = require("../services/storageAdapter");
const AuthLoginScreen = ({ onAuthenticated, }) => {
    const [mode, setMode] = (0, react_1.useState)('login');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    // Register fields
    const [companyName, setCompanyName] = (0, react_1.useState)('');
    const [ownerName, setOwnerName] = (0, react_1.useState)('');
    const [regEmail, setRegEmail] = (0, react_1.useState)('');
    const [regPassword, setRegPassword] = (0, react_1.useState)('');
    const [errorMsg, setErrorMsg] = (0, react_1.useState)(null);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrorMsg(null);
        const normalizedEmail = email.trim().toLowerCase();
        const normalizedPassword = password.trim();
        const res = (0, storageAdapter_1.authenticateTenant)(normalizedEmail, normalizedPassword);
        if (res.error || !res.session) {
            setErrorMsg(res.error || 'Falha na autenticação.');
            return;
        }
        onAuthenticated(res.session);
    };
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        setErrorMsg(null);
        const normalizedRegEmail = regEmail.trim().toLowerCase();
        const normalizedRegPassword = regPassword.trim();
        const res = (0, storageAdapter_1.registerNewTenant)({
            companyName,
            ownerName,
            email: normalizedRegEmail,
            password: normalizedRegPassword,
        });
        if (res.error || !res.session) {
            setErrorMsg(res.error || 'Não foi possível criar a conta.');
            return;
        }
        onAuthenticated(res.session);
    };
    return (react_1.default.createElement("div", { className: "min-h-screen bg-zinc-950 text-slate-100 flex flex-col justify-center items-center px-4 py-10 relative overflow-hidden selection:bg-rose-800 selection:text-white" },
        react_1.default.createElement("div", { className: "pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[580px] h-[320px] bg-rose-900/20 blur-[130px] rounded-full" }),
        react_1.default.createElement("div", { className: "pointer-events-none fixed -bottom-40 right-10 w-[380px] h-[280px] bg-red-950/25 blur-[120px] rounded-full" }),
        react_1.default.createElement("div", { className: "w-full max-w-md rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-7 sm:p-9 shadow-2xl relative z-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-center gap-3 mb-7" },
                react_1.default.createElement("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/40 flex items-center justify-center text-slate-50 shadow-lg shadow-rose-950/70" },
                    react_1.default.createElement(lucide_react_1.Layers, { className: "w-5 h-5 stroke-[2.2]" })),
                react_1.default.createElement("h1", { className: "text-2xl font-bold tracking-tight text-slate-50 leading-none" },
                    "Facas",
                    react_1.default.createElement("span", { className: "text-rose-500" }, "Flow"))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 mb-6" },
                react_1.default.createElement("button", { type: "button", onClick: () => {
                        setMode('login');
                        setErrorMsg(null);
                    }, className: `flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${mode === 'login'
                        ? 'bg-gradient-to-r from-rose-800 to-red-900 text-white shadow-md'
                        : 'text-zinc-400 hover:text-slate-200'}` },
                    react_1.default.createElement(lucide_react_1.KeyRound, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Entrar")),
                react_1.default.createElement("button", { type: "button", onClick: () => {
                        setMode('register');
                        setErrorMsg(null);
                    }, className: `flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${mode === 'register'
                        ? 'bg-gradient-to-r from-rose-800 to-red-900 text-white shadow-md'
                        : 'text-zinc-400 hover:text-slate-200'}` },
                    react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Criar Conta"))),
            errorMsg && (react_1.default.createElement("div", { className: "mb-5 p-3.5 rounded-2xl bg-rose-950/60 border border-rose-700/60 text-rose-200 text-xs flex items-center gap-2.5" },
                react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4 text-rose-400 shrink-0" }),
                react_1.default.createElement("span", null, errorMsg))),
            mode === 'login' ? (react_1.default.createElement("form", { onSubmit: handleLoginSubmit, className: "space-y-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "E-mail"),
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement(lucide_react_1.Mail, { className: "w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                        react_1.default.createElement("input", { type: "email", inputMode: "email", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Digite seu e-mail", className: "w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "Senha"),
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement(lucide_react_1.Lock, { className: "w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                        react_1.default.createElement("input", { type: "password", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "current-password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", className: "w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" }))),
                react_1.default.createElement("button", { type: "submit", className: "w-full py-3.5 px-5 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2" },
                    react_1.default.createElement("span", null, "Entrar no Painel"),
                    react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-4 h-4" })))) : (react_1.default.createElement("form", { onSubmit: handleRegisterSubmit, className: "space-y-3.5" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1" }, "Nome da Empresa *"),
                    react_1.default.createElement("input", { type: "text", required: true, value: companyName, onChange: (e) => setCompanyName(e.target.value), placeholder: "Nome da sua facaria", className: "w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1" }, "Respons\u00E1vel"),
                    react_1.default.createElement("input", { type: "text", value: ownerName, onChange: (e) => setOwnerName(e.target.value), placeholder: "Seu nome", className: "w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1" }, "E-mail *"),
                    react_1.default.createElement("input", { type: "email", inputMode: "email", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "email", required: true, value: regEmail, onChange: (e) => setRegEmail(e.target.value), placeholder: "Digite seu e-mail", className: "w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-semibold text-zinc-300 mb-1" }, "Senha *"),
                    react_1.default.createElement("input", { type: "password", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "new-password", required: true, value: regPassword, onChange: (e) => setRegPassword(e.target.value), placeholder: "Crie uma senha", className: "w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition" })),
                react_1.default.createElement("button", { type: "submit", className: "w-full py-3.5 px-5 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2" },
                    react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, "Criar Conta & Entrar")))))));
};
exports.AuthLoginScreen = AuthLoginScreen;

  },
  { dir: "./components" }
);

__moduleFactories["./components/HeaderBar"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBar = exports.NAV_SECTIONS = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
exports.NAV_SECTIONS = [
    {
        id: 'bento_home',
        label: 'Visão Geral',
        shortLabel: 'Visão Geral',
        icon: lucide_react_1.LayoutGrid,
    },
    {
        id: 'empresas',
        label: 'Seção 1 • Cadastro de Empresas',
        shortLabel: 'Seção 1 • Empresas',
        icon: lucide_react_1.Building2,
    },
    {
        id: 'esteira',
        label: 'Seção 2 • Esteira Física de Produção',
        shortLabel: 'Seção 2 • Esteira',
        icon: lucide_react_1.Kanban,
    },
    {
        id: 'financeiro',
        label: 'Seção 3 • Finanças & Formas de Pagamento',
        shortLabel: 'Seção 3 • Finanças',
        icon: lucide_react_1.PieChart,
    },
    {
        id: 'entregas',
        label: 'Seção 4 • Entregas e Logísticas de Saída',
        shortLabel: 'Seção 4 • Entregas',
        icon: lucide_react_1.Truck,
    },
    {
        id: 'retornos',
        label: 'Seção 5 • Retornos e Ajustes',
        shortLabel: 'Seção 5 • Retornos',
        icon: lucide_react_1.Wrench,
    },
];
const HeaderBar = ({ activeSection, onSelectSection, searchQuery, onSearchChange, onOpenNewOrder, tenantName, onLogout, counts, }) => {
    const getBadge = (id) => {
        if (id === 'empresas')
            return counts.companies;
        if (id === 'esteira')
            return counts.inProduction;
        if (id === 'financeiro' && counts.overdue > 0)
            return counts.overdue;
        if (id === 'entregas')
            return counts.deliveries;
        if (id === 'retornos' && counts.openReturns > 0)
            return counts.openReturns;
        return undefined;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("aside", { className: "hidden lg:flex fixed left-4 top-4 bottom-4 w-16 rounded-3xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-xl flex-col items-center justify-between py-5 z-40 shadow-2xl" },
            react_1.default.createElement("button", { onClick: () => onSelectSection('bento_home'), className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-slate-50 shadow-lg shadow-rose-950/60 cursor-pointer hover:scale-105 transition", title: "FacasFlow Enterprise (Bento Edition)" },
                react_1.default.createElement(lucide_react_1.Layers, { className: "w-5 h-5 stroke-[2.2]" })),
            react_1.default.createElement("nav", { className: "flex flex-col items-center gap-2.5" }, exports.NAV_SECTIONS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const badge = getBadge(item.id);
                return (react_1.default.createElement("button", { key: item.id, onClick: () => onSelectSection(item.id), className: `relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer group ${isActive
                        ? 'bg-rose-800 text-slate-50 shadow-lg shadow-rose-950/80 border border-rose-600/40'
                        : 'text-zinc-400 hover:text-slate-100 hover:bg-zinc-800/80'}`, title: item.label },
                    react_1.default.createElement(Icon, { className: "w-5 h-5 stroke-[1.9]" }),
                    badge !== undefined && (react_1.default.createElement("span", { className: `absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center ${item.id === 'financeiro'
                            ? 'bg-rose-500 text-white'
                            : 'bg-zinc-800 text-zinc-200 border border-zinc-700'}` }, badge))));
            })),
            react_1.default.createElement("button", { type: "button", onClick: onLogout, className: "w-10 h-10 rounded-2xl bg-zinc-800/70 hover:bg-rose-900/80 border border-zinc-700/60 hover:border-rose-600/50 flex items-center justify-center text-zinc-400 hover:text-white transition cursor-pointer", title: "Sair da conta" },
                react_1.default.createElement(lucide_react_1.LogOut, { className: "w-4 h-4 stroke-[2]" }))),
        react_1.default.createElement("header", { className: "sticky top-0 z-30 bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-900" },
            react_1.default.createElement("div", { className: "max-w-[1520px] mx-auto lg:pl-24 px-4 sm:px-6 py-3.5 flex flex-col gap-3" },
                react_1.default.createElement("div", { className: "flex items-center justify-between gap-4" },
                    react_1.default.createElement("div", { className: "flex items-center gap-3" },
                        react_1.default.createElement("div", { className: "lg:hidden w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-slate-50" },
                            react_1.default.createElement(lucide_react_1.Layers, { className: "w-4 h-4" })),
                        react_1.default.createElement("h1", { className: "text-xl font-bold tracking-tight text-slate-50" },
                            "Facas",
                            react_1.default.createElement("span", { className: "text-rose-500" }, "Flow"))),
                    react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                        react_1.default.createElement("div", { className: "hidden md:block relative w-64" },
                            react_1.default.createElement(lucide_react_1.Search, { className: "w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" }),
                            react_1.default.createElement("input", { type: "text", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), placeholder: "Buscar OS, empresa, CNPJ ou faca...", className: "w-full pl-9 pr-8 py-2 text-xs rounded-2xl bg-zinc-900 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition" }),
                            searchQuery && (react_1.default.createElement("button", { onClick: () => onSearchChange(''), className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-slate-200" }, "\u2715"))),
                        react_1.default.createElement("button", { onClick: onOpenNewOrder, className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-slate-50 border border-rose-600/40 shadow-lg shadow-rose-950/60 transition cursor-pointer" },
                            react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 stroke-[2.5]" }),
                            react_1.default.createElement("span", null, "Nova OS")),
                        react_1.default.createElement("button", { type: "button", onClick: onLogout, className: "inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-semibold bg-zinc-900 hover:bg-rose-950/80 text-zinc-300 hover:text-rose-200 border border-zinc-800 hover:border-rose-700/60 transition cursor-pointer", title: "Encerrar sess\u00E3o e trocar de empresa" },
                            react_1.default.createElement(lucide_react_1.LogOut, { className: "w-3.5 h-3.5 stroke-[2.2]" }),
                            react_1.default.createElement("span", null, "Sair")))),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-1" }, exports.NAV_SECTIONS.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    const badge = getBadge(item.id);
                    return (react_1.default.createElement("button", { key: item.id, onClick: () => onSelectSection(item.id), className: `flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 rounded-2xl text-xs font-medium transition-all cursor-pointer ${isActive
                            ? 'bg-rose-900/90 text-slate-50 border border-rose-600/50 shadow-sm'
                            : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/70 hover:text-slate-100 hover:bg-zinc-900'}` },
                        react_1.default.createElement(Icon, { className: "w-3.5 h-3.5 stroke-[2] shrink-0" }),
                        react_1.default.createElement("span", null, item.label),
                        badge !== undefined && (react_1.default.createElement("span", { className: `px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none ${isActive
                                ? 'bg-black/40 text-rose-200'
                                : item.id === 'financeiro'
                                    ? 'bg-rose-500/20 text-rose-400'
                                    : 'bg-zinc-800 text-zinc-300'}` }, badge))));
                }))))));
};
exports.HeaderBar = HeaderBar;

  },
  { dir: "./components" }
);

__moduleFactories["./components/BentoOverviewSection"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BentoOverviewSection = void 0;
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const BentoOverviewSection = ({ companies, orders, deliveries, returns, financials, onNavigate, onOpenNewOrder, onSelectCompany, }) => {
    const readyCount = orders.filter((o) => o.stage === 'faca_pronta').length;
    const activeProductionCount = orders.length - readyCount;
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-5" },
            react_1.default.createElement("div", { className: "md:col-span-5 rounded-3xl p-6 bg-gradient-to-br from-rose-950/90 via-zinc-900 to-zinc-950 border border-rose-800/50 shadow-xl flex flex-col justify-between relative overflow-hidden" },
                react_1.default.createElement("div", { className: "absolute -right-10 -top-10 w-44 h-44 rounded-full bg-rose-700/15 blur-2xl pointer-events-none" }),
                react_1.default.createElement("div", { className: "flex items-start justify-between gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-900/60 text-rose-200 border border-rose-700/50" },
                            react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" }),
                            "Opera\u00E7\u00E3o em Tempo Real"),
                        react_1.default.createElement("h2", { className: "text-2xl font-bold tracking-tight text-slate-50 mt-3 leading-snug" },
                            "Controle Industrial ",
                            react_1.default.createElement("span", { className: "text-rose-400" }, "Zero Papel")),
                        react_1.default.createElement("p", { className: "text-xs text-zinc-400 mt-1 max-w-sm" }, "Rastreamento completo desde o arquivo CAD recebido at\u00E9 a sa\u00EDda log\u00EDstica e faturamento de 30 dias.")),
                    react_1.default.createElement("button", { onClick: onOpenNewOrder, className: "w-11 h-11 rounded-2xl bg-rose-700 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-950/80 transition cursor-pointer shrink-0", title: "Registrar Nova Ordem de Servi\u00E7o" },
                        react_1.default.createElement(lucide_react_1.Plus, { className: "w-5 h-5 stroke-[2.5]" }))),
                react_1.default.createElement("div", { className: "grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-rose-900/40" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] text-zinc-400 block" }, "Facas Ativas"),
                        react_1.default.createElement("span", { className: "text-3xl font-extrabold text-slate-50 tracking-tight" }, activeProductionCount),
                        react_1.default.createElement("span", { className: "text-[10px] text-amber-400 block mt-0.5" }, "Na bancada")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] text-zinc-400 block" }, "Prontas / Exped."),
                        react_1.default.createElement("span", { className: "text-3xl font-extrabold text-emerald-400 tracking-tight" }, readyCount),
                        react_1.default.createElement("span", { className: "text-[10px] text-zinc-400 block mt-0.5" }, "Finalizadas")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] text-zinc-400 block" }, "Empresas"),
                        react_1.default.createElement("span", { className: "text-3xl font-extrabold text-rose-400 tracking-tight" }, companies.length),
                        react_1.default.createElement("span", { className: "text-[10px] text-zinc-400 block mt-0.5" }, "Cadastradas")))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "md:col-span-4 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition cursor-pointer flex flex-col justify-between group" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider" }, "Pulso Financeiro (30/60d)"),
                        react_1.default.createElement("p", { className: "text-3xl font-extrabold text-emerald-400 tracking-tight mt-1" }, (0, financeEngine_1.formatBRL)(financials.receivable30d)),
                        react_1.default.createElement("span", { className: "text-[11px] text-zinc-400" },
                            "A receber programado (",
                            financials.receivableCount,
                            " t\u00EDtulos)")),
                    react_1.default.createElement("div", { className: "w-10 h-10 rounded-2xl bg-zinc-800 group-hover:bg-rose-800 text-zinc-300 group-hover:text-white flex items-center justify-center transition" },
                        react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-5 h-5" }))),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-zinc-800" },
                    react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-rose-950/30 border border-rose-800/40" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-rose-400" },
                            react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-3.5 h-3.5" }),
                            react_1.default.createElement("span", null, "Vencidos")),
                        react_1.default.createElement("p", { className: "text-lg font-bold text-rose-400 mt-1" }, (0, financeEngine_1.formatBRL)(financials.overdueTotal)),
                        react_1.default.createElement("span", { className: "text-[10px] text-zinc-400" },
                            financials.overdueCount,
                            " t\u00EDtulo(s)")),
                    react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-amber-950/20 border border-amber-700/30" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-amber-400" },
                            react_1.default.createElement(lucide_react_1.FileWarning, { className: "w-3.5 h-3.5" }),
                            react_1.default.createElement("span", null, "Entregues s/ Nota")),
                        react_1.default.createElement("p", { className: "text-lg font-bold text-amber-400 mt-1" }, (0, financeEngine_1.formatBRL)(financials.unbilledTotal)),
                        react_1.default.createElement("span", { className: "text-[10px] text-zinc-400" },
                            financials.unbilledCount,
                            " s/ cobran\u00E7a")))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "md:col-span-3 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition cursor-pointer flex flex-col justify-between" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-xs font-semibold text-zinc-400" }, "Modalidades"),
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-100 mt-0.5" },
                            "Volume Total: ",
                            (0, financeEngine_1.formatBRL)(financials.totalVolume))),
                    react_1.default.createElement(lucide_react_1.CalendarClock, { className: "w-4 h-4 text-rose-400" })),
                react_1.default.createElement("div", { className: "flex items-end justify-between gap-2 h-28 pt-4" }, financials.byModality.map((item) => {
                    const heightPct = Math.max(14, item.percentage);
                    return (react_1.default.createElement("div", { key: item.modality, className: "flex-1 flex flex-col items-center gap-1.5 h-full justify-end" },
                        react_1.default.createElement("span", { className: "text-[10px] font-bold text-zinc-300" },
                            item.percentage,
                            "%"),
                        react_1.default.createElement("div", { className: "w-full bg-zinc-800/80 rounded-2xl h-full flex items-end p-0.5" },
                            react_1.default.createElement("div", { style: {
                                    height: `${heightPct}%`,
                                    backgroundColor: item.colorHex,
                                }, className: "w-full rounded-xl transition-all duration-500" })),
                        react_1.default.createElement("span", { className: "text-[9px] text-zinc-400 truncate max-w-full" }, financeEngine_1.PAYMENT_MODALITY_META[item.modality]?.short.split(' ')[0])));
                })))),
        react_1.default.createElement("div", { className: "rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-rose-900/40 border border-rose-700/40 flex items-center justify-center text-rose-400" },
                        react_1.default.createElement(lucide_react_1.Kanban, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Esteira F\u00EDsica da Oficina (6 Etapas de Fabrica\u00E7\u00E3o)"),
                        react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Vis\u00E3o instant\u00E2nea de onde est\u00E1 cada faca neste momento"))),
                react_1.default.createElement("button", { onClick: () => onNavigate('esteira'), className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-semibold bg-zinc-800 hover:bg-rose-800 text-slate-200 hover:text-white transition cursor-pointer" },
                    react_1.default.createElement("span", null, "Abrir Esteira Completa"),
                    react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" }, financeEngine_1.PRODUCTION_STAGES.map((st) => {
                const count = orders.filter((o) => o.stage === st.id).length;
                return (react_1.default.createElement("div", { key: st.id, onClick: () => onNavigate('esteira'), className: "p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-rose-700/50 transition cursor-pointer flex flex-col justify-between" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase tracking-wider text-zinc-500" },
                            "Etapa ",
                            st.step),
                        react_1.default.createElement("span", { className: `w-2 h-2 rounded-full ${st.dotClass}` })),
                    react_1.default.createElement("p", { className: "text-2xl font-extrabold text-slate-50 mt-2" }, count),
                    react_1.default.createElement("span", { className: "text-xs font-semibold text-zinc-300 mt-1 block truncate" }, st.label)));
            }))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5" },
            react_1.default.createElement("div", { className: "rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Building2, { className: "w-4 h-4 text-rose-400" }),
                            react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Empresas & Ferramental")),
                        react_1.default.createElement("button", { onClick: () => onNavigate('empresas'), className: "text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver CRM ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, companies.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhuma empresa cadastrada.")) : (companies.slice(0, 4).map((comp) => {
                        const compOrders = orders.filter((o) => o.companyId === comp.id);
                        return (react_1.default.createElement("div", { key: comp.id, onClick: () => {
                                onSelectCompany(comp.id);
                                onNavigate('empresas');
                            }, className: "p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-rose-700/50 flex items-center justify-between transition cursor-pointer" },
                            react_1.default.createElement("div", { className: "truncate pr-2" },
                                react_1.default.createElement("p", { className: "text-xs font-bold text-slate-100 truncate" }, comp.corporateName),
                                react_1.default.createElement("span", { className: "text-[11px] text-zinc-500 font-mono" }, comp.cnpj)),
                            react_1.default.createElement("span", { className: "px-2.5 py-1 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-bold shrink-0" },
                                compOrders.length,
                                " facas")));
                    }))))),
            react_1.default.createElement("div", { className: "rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Truck, { className: "w-4 h-4 text-emerald-400" }),
                            react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Log\u00EDstica de Sa\u00EDda")),
                        react_1.default.createElement("button", { onClick: () => onNavigate('entregas'), className: "text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver Sa\u00EDdas ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, deliveries.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhuma sa\u00EDda registrada.")) : (deliveries.slice(0, 3).map((del) => (react_1.default.createElement("div", { key: del.id, onClick: () => onNavigate('entregas'), className: "p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition cursor-pointer" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                            react_1.default.createElement("span", { className: "text-xs font-bold text-slate-100 truncate" },
                                del.orderId,
                                " \u2022 ",
                                del.companyName),
                            react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${financeEngine_1.DELIVERY_METHOD_META[del.method]?.badgeClass}` }, financeEngine_1.DELIVERY_METHOD_META[del.method]?.label)),
                        react_1.default.createElement("p", { className: "text-[11px] text-zinc-400 mt-1 truncate" },
                            del.carrierOrPersonName,
                            " \u2022 ",
                            del.dispatchedAt)))))))),
            react_1.default.createElement("div", { className: "rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Wrench, { className: "w-4 h-4 text-amber-400" }),
                            react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Retornos & Garantia")),
                        react_1.default.createElement("button", { onClick: () => onNavigate('retornos'), className: "text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver Bancada ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, returns.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhum retorno registrado.")) : (returns.slice(0, 3).map((ret) => {
                        const stMeta = financeEngine_1.RETURN_STATUS_META[ret.status];
                        return (react_1.default.createElement("div", { key: ret.id, onClick: () => onNavigate('retornos'), className: "p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition cursor-pointer" },
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-xs font-bold text-slate-100 truncate" },
                                    ret.orderId,
                                    " \u2022 ",
                                    ret.companyName),
                                react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${stMeta.badgeClass}` }, stMeta.label)),
                            react_1.default.createElement("p", { className: "text-[11px] text-zinc-400 mt-1 truncate" },
                                "Motivo: ",
                                ret.reason)));
                    }))))))));
};
exports.BentoOverviewSection = BentoOverviewSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/CompaniesCrmSection"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesCrmSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const CompaniesCrmSection = ({ companies, orders, selectedCompanyId, onSelectCompany, onAddCompany, onDeleteCompany, onDeleteOrder, onAddDieForCompany, }) => {
    const activeCompany = companies.find((c) => c.id === selectedCompanyId) || companies[0] || null;
    // New Company inline modal state
    const [showNewCompanyForm, setShowNewCompanyForm] = (0, react_1.useState)(companies.length === 0);
    const [newCorpName, setNewCorpName] = (0, react_1.useState)('');
    const [newCnpj, setNewCnpj] = (0, react_1.useState)('');
    const [newPhone, setNewPhone] = (0, react_1.useState)('');
    const [newContact, setNewContact] = (0, react_1.useState)('');
    // New Die inside Selected Company state
    const [toolDesc, setToolDesc] = (0, react_1.useState)('');
    const [toolAmount, setToolAmount] = (0, react_1.useState)('');
    const [toolModality, setToolModality] = (0, react_1.useState)('a_prazo');
    const handleCreateCompany = (e) => {
        e.preventDefault();
        if (!newCorpName.trim())
            return;
        onAddCompany({
            corporateName: newCorpName.trim(),
            cnpj: newCnpj.trim() || '00.000.000/0001-00',
            phone: newPhone.trim() || '(11) 99999-0000',
            contactName: newContact.trim() || 'Compras / PCP',
        });
        setNewCorpName('');
        setNewCnpj('');
        setNewPhone('');
        setNewContact('');
        setShowNewCompanyForm(false);
    };
    const handleCreateDieInCompany = (e) => {
        e.preventDefault();
        if (!activeCompany || !toolDesc.trim())
            return;
        const val = parseFloat(toolAmount.replace(',', '.')) || 0;
        onAddDieForCompany(activeCompany, toolDesc.trim(), val, toolModality);
        setToolDesc('');
        setToolAmount('');
    };
    const companyOrders = activeCompany
        ? orders.filter((o) => o.companyId === activeCompany.id)
        : [];
    const companyTotalValue = companyOrders.reduce((acc, o) => acc + (o.amount || 0), 0);
    const inputClass = 'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: "text-lg font-bold text-slate-50 tracking-tight" }, "Se\u00E7\u00E3o 1 \u2022 Cadastro de Empresas"),
                react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Selecione uma empresa para consultar todo o hist\u00F3rico de facas ou cadastrar uma nova ferramenta vinculada.")),
            react_1.default.createElement("button", { onClick: () => setShowNewCompanyForm((prev) => !prev), className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-zinc-900 hover:bg-rose-900/80 text-slate-100 border border-zinc-800 hover:border-rose-700 transition cursor-pointer" },
                react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 text-rose-400" }),
                react_1.default.createElement("span", null, showNewCompanyForm ? 'Fechar Cadastro' : 'Nova Empresa Cliente'))),
        showNewCompanyForm && (react_1.default.createElement("form", { onSubmit: handleCreateCompany, className: "rounded-3xl p-6 bg-zinc-900/95 border border-rose-800/60 shadow-xl space-y-4" },
            react_1.default.createElement("h3", { className: "text-sm font-bold text-rose-400" }, "Cadastrar Nova Empresa / Gr\u00E1fica Cliente"),
            react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3" },
                react_1.default.createElement("input", { type: "text", required: true, value: newCorpName, onChange: (e) => setNewCorpName(e.target.value), placeholder: "Raz\u00E3o Social / Nome Fantasia *", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newCnpj, onChange: (e) => setNewCnpj(e.target.value), placeholder: "CNPJ (ex: 14.528.910/0001-42)", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newPhone, onChange: (e) => setNewPhone(e.target.value), placeholder: "Telefone / WhatsApp", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newContact, onChange: (e) => setNewContact(e.target.value), placeholder: "Respons\u00E1vel (Compras / PCP)", className: inputClass })),
            react_1.default.createElement("div", { className: "flex justify-end" },
                react_1.default.createElement("button", { type: "submit", className: "px-5 py-2.5 rounded-2xl text-xs font-bold bg-rose-800 hover:bg-rose-700 text-slate-50 transition cursor-pointer" }, "Salvar Empresa")))),
        companies.length === 0 ? (react_1.default.createElement("div", { className: "rounded-3xl p-10 bg-zinc-900/80 border border-dashed border-zinc-800 text-center space-y-2" },
            react_1.default.createElement(lucide_react_1.Building2, { className: "w-8 h-8 text-rose-500 mx-auto" }),
            react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-100" }, "Nenhuma empresa cadastrada ainda"),
            react_1.default.createElement("p", { className: "text-xs text-zinc-400 max-w-md mx-auto" }, "Utilize o formul\u00E1rio acima ou o bot\u00E3o \"Nova OS\" para cadastrar seu primeiro cliente e iniciar o controle de ferramental."))) : (react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("div", { className: "lg:col-span-5 space-y-3" }, companies.map((comp) => {
                const linked = orders.filter((o) => o.companyId === comp.id);
                const sumVal = linked.reduce((acc, o) => acc + (o.amount || 0), 0);
                const isSelected = activeCompany?.id === comp.id;
                return (react_1.default.createElement("div", { key: comp.id, onClick: () => onSelectCompany(comp.id), className: `rounded-3xl p-5 border transition-all cursor-pointer ${isSelected
                        ? 'bg-gradient-to-br from-rose-950/60 via-zinc-900 to-zinc-900 border-rose-700/70 shadow-lg shadow-rose-950/40'
                        : 'bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700'}` },
                    react_1.default.createElement("div", { className: "flex items-start justify-between gap-3" },
                        react_1.default.createElement("div", { className: "flex items-start gap-3" },
                            react_1.default.createElement("div", { className: `w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${isSelected
                                    ? 'bg-rose-800 text-white border-rose-600'
                                    : 'bg-zinc-800 text-zinc-400 border-zinc-700'}` },
                                react_1.default.createElement(lucide_react_1.Building2, { className: "w-5 h-5" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50 leading-snug" }, comp.corporateName),
                                react_1.default.createElement("p", { className: "text-xs font-mono text-zinc-400 mt-0.5" },
                                    "CNPJ: ",
                                    comp.cnpj))),
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 shrink-0" },
                            react_1.default.createElement("span", { className: "px-3 py-1 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs font-bold text-rose-400" },
                                linked.length,
                                " ",
                                linked.length === 1 ? 'faca' : 'facas'),
                            react_1.default.createElement("button", { type: "button", onClick: (e) => {
                                    e.stopPropagation();
                                    onDeleteCompany(comp.id);
                                }, className: "p-2 rounded-2xl bg-zinc-950/80 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar empresa e facas vinculadas" },
                                react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" })))),
                    react_1.default.createElement("div", { className: "mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between text-xs text-zinc-400" },
                        react_1.default.createElement("div", { className: "flex items-center gap-3" },
                            react_1.default.createElement("span", { className: "flex items-center gap-1" },
                                react_1.default.createElement(lucide_react_1.Phone, { className: "w-3.5 h-3.5 text-emerald-400" }),
                                comp.phone),
                            react_1.default.createElement("span", { className: "hidden sm:flex items-center gap-1" },
                                react_1.default.createElement(lucide_react_1.UserCheck, { className: "w-3.5 h-3.5 text-rose-400" }),
                                comp.contactName)),
                        react_1.default.createElement("span", { className: "font-mono font-bold text-slate-200" }, (0, financeEngine_1.formatBRL)(sumVal)))));
            })),
            activeCompany && (react_1.default.createElement("div", { className: "lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-6" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-zinc-800" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-rose-400" }, "Ficha de Ferramental do Cliente"),
                        react_1.default.createElement("h3", { className: "text-xl font-bold text-slate-50 mt-0.5" }, activeCompany.corporateName),
                        react_1.default.createElement("p", { className: "text-xs text-zinc-400 mt-1" },
                            "CNPJ: ",
                            react_1.default.createElement("span", { className: "font-mono text-zinc-300" }, activeCompany.cnpj),
                            " \u2022 WhatsApp: ",
                            react_1.default.createElement("span", { className: "text-zinc-300" }, activeCompany.phone),
                            " \u2022 Contato: ",
                            react_1.default.createElement("span", { className: "text-zinc-300" }, activeCompany.contactName))),
                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                        react_1.default.createElement("div", { className: "p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-right" },
                            react_1.default.createElement("span", { className: "text-[10px] uppercase text-zinc-400 block" }, "Volume Total Cadastrado"),
                            react_1.default.createElement("span", { className: "text-xl font-extrabold text-emerald-400 font-mono" }, (0, financeEngine_1.formatBRL)(companyTotalValue))),
                        react_1.default.createElement("button", { type: "button", onClick: () => onDeleteCompany(activeCompany.id), className: "p-3.5 rounded-2xl bg-zinc-950 hover:bg-rose-900/80 text-zinc-400 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar esta empresa" },
                            react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))),
                react_1.default.createElement("form", { onSubmit: handleCreateDieInCompany, className: "p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 space-y-3" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-200 flex items-center gap-1.5" },
                            react_1.default.createElement(lucide_react_1.Wrench, { className: "w-3.5 h-3.5 text-rose-400" }),
                            "Vincular Nova Faca para ",
                            activeCompany.corporateName),
                        react_1.default.createElement("span", { className: "text-[11px] text-zinc-500" }, "Entra automaticamente em \"Arquivo Recebido\"")),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5" },
                        react_1.default.createElement("input", { type: "text", required: true, value: toolDesc, onChange: (e) => setToolDesc(e.target.value), placeholder: "Descri\u00E7\u00E3o da Faca (ex: Faca Caixa Duplex)", className: `${inputClass} sm:col-span-2` }),
                        react_1.default.createElement("input", { type: "number", step: "0.01", required: true, value: toolAmount, onChange: (e) => setToolAmount(e.target.value), placeholder: "Valor R$ (ex: 680)", className: `${inputClass} font-mono font-bold` })),
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1" },
                        react_1.default.createElement("div", { className: "flex flex-wrap gap-1.5" }, Object.keys(financeEngine_1.PAYMENT_MODALITY_META).map((mod) => {
                            const meta = financeEngine_1.PAYMENT_MODALITY_META[mod];
                            const active = toolModality === mod;
                            return (react_1.default.createElement("button", { type: "button", key: mod, onClick: () => setToolModality(mod), className: `px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${active
                                    ? 'bg-rose-800 text-white border-rose-600'
                                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'}` },
                                "[",
                                meta.label,
                                "]"));
                        })),
                        react_1.default.createElement("button", { type: "submit", className: "px-4 py-2 rounded-xl text-xs font-bold bg-rose-800 hover:bg-rose-700 text-white flex items-center gap-1.5 transition cursor-pointer shrink-0" },
                            react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 stroke-[2.5]" }),
                            react_1.default.createElement("span", null, "Cadastrar Faca")))),
                react_1.default.createElement("div", { className: "space-y-2.5" },
                    react_1.default.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-zinc-400" },
                        "Hist\u00F3rico de Facas Associadas (",
                        companyOrders.length,
                        ")"),
                    companyOrders.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhuma faca cadastrada para esta empresa ainda.")) : (companyOrders.map((order) => {
                        const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                        const stageMeta = financeEngine_1.PRODUCTION_STAGES.find((s) => s.id === order.stage);
                        return (react_1.default.createElement("div", { key: order.id, className: "p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3" },
                            react_1.default.createElement("div", { className: "space-y-1" },
                                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                    react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300" }, order.id),
                                    react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${modMeta?.badgeClass}` },
                                        "[",
                                        modMeta?.label,
                                        "]"),
                                    react_1.default.createElement("span", { className: "text-[11px] text-zinc-400 flex items-center gap-1" },
                                        react_1.default.createElement(lucide_react_1.Layers, { className: "w-3 h-3 text-rose-400" }),
                                        stageMeta?.label)),
                                react_1.default.createElement("p", { className: "text-sm font-semibold text-slate-100" }, order.toolDescription),
                                react_1.default.createElement("p", { className: "text-[11px] text-zinc-500" },
                                    "Cadastrada em ",
                                    (0, financeEngine_1.formatDateBR)(order.createdAt),
                                    " \u2022 Vencimento:",
                                    ' ',
                                    (0, financeEngine_1.formatDateBR)(order.dueDate))),
                            react_1.default.createElement("div", { className: "flex items-center justify-between sm:justify-end gap-3 shrink-0" },
                                react_1.default.createElement("div", { className: "text-right font-mono" },
                                    react_1.default.createElement("span", { className: "text-base font-extrabold text-emerald-400 block" }, (0, financeEngine_1.formatBRL)(order.amount)),
                                    react_1.default.createElement("span", { className: "text-[10px] text-zinc-500" },
                                        "Atualizado: ",
                                        order.stageUpdatedAt)),
                                react_1.default.createElement("button", { type: "button", onClick: () => onDeleteOrder(order.id), className: "p-2 rounded-xl bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar esta OS / Faca" },
                                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))));
                    })))))))));
};
exports.CompaniesCrmSection = CompaniesCrmSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/ProductionKanban"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionKanban = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const ProductionKanban = ({ orders, onMoveStage, onQuickRegisterDelivery, onDeleteOrder, }) => {
    const [draggedId, setDraggedId] = (0, react_1.useState)(null);
    const [dragOverStage, setDragOverStage] = (0, react_1.useState)(null);
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: "text-lg font-bold text-slate-50 tracking-tight" }, "Se\u00E7\u00E3o 2 \u2022 Esteira F\u00EDsica de Produ\u00E7\u00E3o"),
                react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Arraste os cart\u00F5es ou clique em avan\u00E7ar. Cada mudan\u00E7a grava automaticamente a data e hora exata da etapa."))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 items-start" }, financeEngine_1.PRODUCTION_STAGES.map((stage) => {
            const colOrders = orders.filter((o) => o.stage === stage.id);
            const colTotal = colOrders.reduce((acc, o) => acc + (o.amount || 0), 0);
            const isOver = dragOverStage === stage.id;
            return (react_1.default.createElement("div", { key: stage.id, onDragOver: (e) => {
                    e.preventDefault();
                    setDragOverStage(stage.id);
                }, onDragLeave: () => setDragOverStage(null), onDrop: (e) => {
                    e.preventDefault();
                    setDragOverStage(null);
                    if (draggedId) {
                        onMoveStage(draggedId, stage.id);
                        setDraggedId(null);
                    }
                }, className: `rounded-3xl p-4 border transition-all min-h-[480px] flex flex-col gap-3 ${isOver
                    ? 'bg-rose-950/30 border-rose-600'
                    : `bg-zinc-900/85 ${stage.accentColor}`}` },
                react_1.default.createElement("div", { className: "pb-3 border-b border-zinc-800/80" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("span", { className: `w-2.5 h-2.5 rounded-full ${stage.dotClass}` }),
                            react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-zinc-400" },
                                "Etapa ",
                                stage.step)),
                        react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full text-xs font-extrabold bg-zinc-950 text-slate-100 border border-zinc-800" }, colOrders.length)),
                    react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50 mt-1" }, stage.label),
                    react_1.default.createElement("p", { className: "text-[11px] text-zinc-500 mt-0.5" }, stage.subtitle),
                    react_1.default.createElement("div", { className: "mt-2 pt-2 border-t border-zinc-800/40 flex items-center justify-between text-[11px] font-mono" },
                        react_1.default.createElement("span", { className: "text-zinc-400" }, "Volume:"),
                        react_1.default.createElement("span", { className: "font-bold text-emerald-400" }, (0, financeEngine_1.formatBRL)(colTotal)))),
                react_1.default.createElement("div", { className: "space-y-3 flex-1" }, colOrders.length === 0 ? (react_1.default.createElement("div", { className: "h-32 rounded-2xl border border-dashed border-zinc-800/80 flex items-center justify-center text-xs text-zinc-600 text-center px-2" },
                    "Sem facas em ",
                    stage.label)) : (colOrders.map((order) => {
                    const prevStage = (0, financeEngine_1.getPrevStage)(order.stage);
                    const nextStage = (0, financeEngine_1.getNextStage)(order.stage);
                    const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                    return (react_1.default.createElement("div", { key: order.id, draggable: true, onDragStart: () => setDraggedId(order.id), onDragEnd: () => {
                            setDraggedId(null);
                            setDragOverStage(null);
                        }, className: "rounded-2xl p-3.5 bg-zinc-950/90 border border-zinc-800/90 hover:border-rose-700/60 transition-all shadow-md cursor-grab active:cursor-grabbing flex flex-col gap-2.5" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between gap-1.5" },
                            react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-[11px] font-bold text-rose-300" }, order.id),
                            react_1.default.createElement("div", { className: "flex items-center gap-1" },
                                react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-semibold border ${modMeta?.badgeClass}` }, modMeta?.short),
                                react_1.default.createElement("button", { type: "button", onClick: () => onDeleteOrder(order.id), className: "p-1 rounded-lg bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar esta OS" },
                                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3 h-3" })))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "text-[11px] font-semibold text-zinc-400 block truncate" }, order.companyName),
                            react_1.default.createElement("h4", { className: "text-xs font-bold text-slate-100 leading-snug mt-0.5" }, order.toolDescription)),
                        react_1.default.createElement("div", { className: "flex items-center justify-between text-[10px] text-zinc-400 bg-zinc-900/90 px-2.5 py-1.5 rounded-xl border border-zinc-800/70" },
                            react_1.default.createElement("span", { className: "flex items-center gap-1" },
                                react_1.default.createElement(lucide_react_1.Clock, { className: "w-3 h-3 text-rose-400 shrink-0" }),
                                react_1.default.createElement("span", null, order.stageUpdatedAt)),
                            react_1.default.createElement("span", { className: "font-mono font-bold text-emerald-400" }, (0, financeEngine_1.formatBRL)(order.amount))),
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 pt-1" },
                            prevStage && (react_1.default.createElement("button", { type: "button", onClick: () => onMoveStage(order.id, prevStage), className: "p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-slate-200 border border-zinc-800 transition cursor-pointer", title: "Voltar etapa anterior" },
                                react_1.default.createElement(lucide_react_1.ArrowLeft, { className: "w-3.5 h-3.5" }))),
                            nextStage ? (react_1.default.createElement("button", { type: "button", onClick: () => onMoveStage(order.id, nextStage), className: "flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold bg-rose-900/80 hover:bg-rose-700 text-slate-50 border border-rose-700/50 flex items-center justify-center gap-1 transition cursor-pointer" },
                                react_1.default.createElement("span", null, "Avan\u00E7ar Etapa"),
                                react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-3 h-3 stroke-[2.2]" }))) : (react_1.default.createElement("button", { type: "button", onClick: () => onQuickRegisterDelivery(order), className: "flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 flex items-center justify-center gap-1.5 transition cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Truck, { className: "w-3.5 h-3.5" }),
                                react_1.default.createElement("span", null, "Despachar / Sa\u00EDda"))))));
                })))));
        }))));
};
exports.ProductionKanban = ProductionKanban;

  },
  { dir: "./components" }
);

__moduleFactories["./components/FinanceAnalyticsSection"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceAnalyticsSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const FinanceAnalyticsSection = ({ orders, financials, onTogglePaid, onEmitBilling30d, onDeleteOrder, }) => {
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('todos');
    const [copiedId, setCopiedId] = (0, react_1.useState)(null);
    const [hoveredModality, setHoveredModality] = (0, react_1.useState)(null);
    const filteredOrders = orders.filter((o) => {
        if (statusFilter === 'todos')
            return true;
        return o.paymentStatus === statusFilter;
    });
    const handleCopyPix = async (order) => {
        const text = (0, financeEngine_1.buildPixClipboardSnippet)(order);
        try {
            await navigator.clipboard.writeText(text);
        }
        catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setCopiedId(order.id);
        setTimeout(() => {
            setCopiedId((prev) => (prev === order.id ? null : prev));
        }, 2200);
    };
    // Calculate SVG Donut segments
    const radius = 68;
    const circumference = 2 * Math.PI * radius;
    let cumulativePercent = 0;
    const donutSegments = financials.byModality
        .filter((m) => m.totalAmount > 0)
        .map((m) => {
        const frac = financials.totalVolume > 0 ? m.totalAmount / financials.totalVolume : 0;
        const strokeDasharray = `${frac * circumference} ${circumference}`;
        const strokeDashoffset = -cumulativePercent * circumference;
        cumulativePercent += frac;
        return {
            ...m,
            strokeDasharray,
            strokeDashoffset,
        };
    });
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-lg font-bold text-slate-50 tracking-tight" }, "Se\u00E7\u00E3o 3 \u2022 Finan\u00E7as & Formas de Pagamento"),
            react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Controle rigoroso do ciclo de 30 dias, an\u00E1lise por modalidade e cobran\u00E7a imediata em 1 clique.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5" },
            react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'a_receber' ? 'todos' : 'a_receber'), className: `rounded-3xl p-6 text-left border transition cursor-pointer ${statusFilter === 'a_receber'
                    ? 'bg-zinc-900 border-emerald-500/60 ring-1 ring-emerald-500/30'
                    : 'bg-zinc-900/90 border-zinc-800/90 hover:border-zinc-700'}` },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-semibold text-zinc-400" }, "1. Total a Receber (30/60 dias)"),
                    react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-emerald-500/10 text-emerald-400" },
                        react_1.default.createElement(lucide_react_1.CalendarClock, { className: "w-4 h-4" }))),
                react_1.default.createElement("p", { className: "text-3xl font-extrabold text-emerald-400 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.receivable30d)),
                react_1.default.createElement("span", { className: "text-xs text-zinc-400 mt-1 block" },
                    financials.receivableCount,
                    " faturas programadas \u2022 Caixa j\u00E1 quitado:",
                    ' ',
                    react_1.default.createElement("strong", { className: "text-slate-200" }, (0, financeEngine_1.formatBRL)(financials.paidTotal)))),
            react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'vencido' ? 'todos' : 'vencido'), className: `rounded-3xl p-6 text-left border transition cursor-pointer ${statusFilter === 'vencido'
                    ? 'bg-zinc-900 border-rose-500/70 ring-1 ring-rose-500/40'
                    : 'bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-900 border-rose-800/50 hover:border-rose-600'}` },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-semibold text-rose-300 flex items-center gap-1.5" },
                        react_1.default.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500 animate-ping" }),
                        "2. Faturamentos Vencidos (Aten\u00E7\u00E3o)"),
                    react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-rose-500/15 text-rose-400" },
                        react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4" }))),
                react_1.default.createElement("p", { className: "text-3xl font-extrabold text-rose-500 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.overdueTotal)),
                react_1.default.createElement("span", { className: "text-xs text-zinc-400 mt-1 block" },
                    financials.overdueCount,
                    " t\u00EDtulo(s) parado(s) na rua aguardando cobran\u00E7a")),
            react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'sem_nota' ? 'todos' : 'sem_nota'), className: `rounded-3xl p-6 text-left border transition cursor-pointer ${statusFilter === 'sem_nota'
                    ? 'bg-zinc-900 border-amber-500/60 ring-1 ring-amber-500/30'
                    : 'bg-zinc-900/90 border-zinc-800/90 hover:border-zinc-700'}` },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-semibold text-amber-300" }, "3. Vazamentos (Entregues s/ Nota)"),
                    react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-amber-500/15 text-amber-400" },
                        react_1.default.createElement(lucide_react_1.FileWarning, { className: "w-4 h-4" }))),
                react_1.default.createElement("p", { className: "text-3xl font-extrabold text-amber-400 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.unbilledTotal)),
                react_1.default.createElement("span", { className: "text-xs text-zinc-400 mt-1 block" },
                    financials.unbilledCount,
                    " faca(s) entregue(s) sem cobran\u00E7a gerada"))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5" },
            react_1.default.createElement("div", { className: "lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-rose-400" }, "Distribui\u00E7\u00E3o por Modalidade"),
                        react_1.default.createElement("h3", { className: "text-base font-bold text-slate-50 mt-0.5" }, "Gr\u00E1fico de Rosca (Volume R$)")),
                    react_1.default.createElement(lucide_react_1.PieChart, { className: "w-5 h-5 text-rose-400" })),
                react_1.default.createElement("div", { className: "flex flex-col sm:flex-row items-center justify-around gap-6 my-4" },
                    react_1.default.createElement("div", { className: "relative w-44 h-44 flex items-center justify-center shrink-0" },
                        react_1.default.createElement("svg", { className: "w-44 h-44 -rotate-90", viewBox: "0 0 180 180" },
                            react_1.default.createElement("circle", { cx: "90", cy: "90", r: radius, fill: "transparent", stroke: "#27272a", strokeWidth: "20" }),
                            donutSegments.map((seg) => (react_1.default.createElement("circle", { key: seg.modality, cx: "90", cy: "90", r: radius, fill: "transparent", stroke: seg.colorHex, strokeWidth: hoveredModality === seg.modality ? '24' : '20', strokeDasharray: seg.strokeDasharray, strokeDashoffset: seg.strokeDashoffset, strokeLinecap: "butt", className: "transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredModality(seg.modality), onMouseLeave: () => setHoveredModality(null) })))),
                        react_1.default.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4" },
                            react_1.default.createElement("span", { className: "text-[10px] uppercase tracking-wider text-zinc-400" }, "Volume Total"),
                            react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-50 font-mono mt-0.5" }, (0, financeEngine_1.formatBRL)(financials.totalVolume)),
                            react_1.default.createElement("span", { className: "text-[10px] text-rose-400 font-semibold mt-0.5" },
                                orders.length,
                                " OS"))),
                    react_1.default.createElement("div", { className: "space-y-2.5 w-full sm:w-auto" }, financials.byModality.map((item) => (react_1.default.createElement("div", { key: item.modality, onMouseEnter: () => setHoveredModality(item.modality), onMouseLeave: () => setHoveredModality(null), className: "flex items-center justify-between gap-4 text-xs cursor-pointer" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("span", { className: "w-3 h-3 rounded-md shrink-0", style: { backgroundColor: item.colorHex } }),
                            react_1.default.createElement("span", { className: "text-zinc-300 font-medium" }, item.label)),
                        react_1.default.createElement("span", { className: "font-mono font-bold text-slate-100" },
                            item.percentage,
                            "%"))))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-rose-400" }, "Comparativo Financeiro & Quantidade de Pedidos"),
                    react_1.default.createElement("h3", { className: "text-base font-bold text-slate-50 mt-0.5" }, "Volume por Forma de Pagamento (PIX, A Prazo 30/60d, Dinheiro, Cart\u00E3o, Cortesia)")),
                react_1.default.createElement("div", { className: "space-y-3.5 mt-4" }, financials.byModality.map((item) => (react_1.default.createElement("div", { key: item.modality, className: "space-y-1.5" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between text-xs" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("span", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: item.colorHex } }),
                            react_1.default.createElement("span", { className: "font-bold text-slate-100" }, item.label),
                            react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-semibold" },
                                item.count,
                                " ",
                                item.count === 1 ? 'pedido' : 'pedidos')),
                        react_1.default.createElement("div", { className: "font-mono" },
                            react_1.default.createElement("span", { className: "font-extrabold text-slate-100" }, (0, financeEngine_1.formatBRL)(item.totalAmount)),
                            react_1.default.createElement("span", { className: "text-zinc-500 ml-2 text-[11px]" },
                                "(",
                                item.percentage,
                                "%)"))),
                    react_1.default.createElement("div", { className: "w-full h-3 rounded-full bg-zinc-950 overflow-hidden p-0.5 border border-zinc-800/80" },
                        react_1.default.createElement("div", { style: {
                                width: `${Math.max(item.count > 0 ? 6 : 0, item.percentage)}%`,
                                backgroundColor: item.colorHex,
                            }, className: "h-full rounded-full transition-all duration-500" })))))))),
        react_1.default.createElement("div", { className: "rounded-3xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden" },
            react_1.default.createElement("div", { className: "p-5 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5" }, [
                    { id: 'todos', label: 'Todos' },
                    { id: 'a_receber', label: 'A Receber (30/60d)' },
                    { id: 'vencido', label: 'Vencidos' },
                    { id: 'sem_nota', label: 'Entregues s/ Nota' },
                    { id: 'pago', label: 'Pagos' },
                    { id: 'cortesia', label: 'Cortesia / Não Paga' },
                ].map((pill) => (react_1.default.createElement("button", { key: pill.id, type: "button", onClick: () => setStatusFilter(pill.id), className: `px-3.5 py-1.5 rounded-2xl text-xs font-semibold transition cursor-pointer ${statusFilter === pill.id
                        ? 'bg-rose-800 text-white shadow-sm'
                        : 'bg-zinc-950/70 text-zinc-400 hover:text-slate-100 border border-zinc-800'}` }, pill.label)))),
                react_1.default.createElement("span", { className: "text-xs text-zinc-400 font-mono" },
                    filteredOrders.length,
                    " registro(s)")),
            react_1.default.createElement("div", { className: "overflow-x-auto" },
                react_1.default.createElement("table", { className: "w-full text-left border-collapse" },
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", { className: "text-[11px] uppercase tracking-wider text-zinc-500 border-b border-zinc-800/80 bg-zinc-950/40" },
                            react_1.default.createElement("th", { className: "py-3.5 px-5" }, "OS / Empresa"),
                            react_1.default.createElement("th", { className: "py-3.5 px-4" }, "Ferramenta (Faca)"),
                            react_1.default.createElement("th", { className: "py-3.5 px-4" }, "Modalidade"),
                            react_1.default.createElement("th", { className: "py-3.5 px-4" }, "Vencimento / Status"),
                            react_1.default.createElement("th", { className: "py-3.5 px-4 text-right" }, "Valor"),
                            react_1.default.createElement("th", { className: "py-3.5 px-5 text-right" }, "A\u00E7\u00F5es 1-Clique"))),
                    react_1.default.createElement("tbody", { className: "divide-y divide-zinc-800/50 text-xs" }, filteredOrders.length === 0 ? (react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { colSpan: 6, className: "py-12 text-center text-zinc-500" }, "Nenhum lan\u00E7amento financeiro registrado ainda."))) : (filteredOrders.map((order) => {
                        const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                        const daysDiff = (0, financeEngine_1.getDaysDiff)(order.dueDate);
                        const isCopied = copiedId === order.id;
                        return (react_1.default.createElement("tr", { key: order.id, className: "hover:bg-zinc-800/40 transition-colors" },
                            react_1.default.createElement("td", { className: "py-4 px-5 whitespace-nowrap" },
                                react_1.default.createElement("span", { className: "font-mono font-bold text-rose-400 block" }, order.id),
                                react_1.default.createElement("span", { className: "font-semibold text-slate-100" }, order.companyName)),
                            react_1.default.createElement("td", { className: "py-4 px-4 max-w-xs" },
                                react_1.default.createElement("span", { className: "text-slate-200 font-medium block truncate" }, order.toolDescription)),
                            react_1.default.createElement("td", { className: "py-4 px-4 whitespace-nowrap" },
                                react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-semibold border ${modMeta?.badgeClass}` },
                                    "[",
                                    modMeta?.label,
                                    "]")),
                            react_1.default.createElement("td", { className: "py-4 px-4 whitespace-nowrap" }, order.paymentStatus === 'pago' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500" }),
                                "Liquidado (",
                                (0, financeEngine_1.formatDateBR)(order.paidAt || order.dueDate),
                                ")")) : order.paymentStatus === 'cortesia' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-400" }, "Cortesia / Sem Cobran\u00E7a")) : order.paymentStatus === 'sem_nota' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400" }),
                                "Entregue s/ Nota")) : order.paymentStatus === 'vencido' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-500/20 text-rose-400" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" }),
                                "Vencido h\u00E1 ",
                                Math.abs(daysDiff),
                                "d (",
                                (0, financeEngine_1.formatDateBR)(order.dueDate),
                                ")")) : (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-200" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400" }),
                                "Vence em ",
                                daysDiff,
                                "d (",
                                (0, financeEngine_1.formatDateBR)(order.dueDate),
                                ")"))),
                            react_1.default.createElement("td", { className: "py-4 px-4 text-right whitespace-nowrap font-mono text-sm font-extrabold text-slate-100" }, (0, financeEngine_1.formatBRL)(order.amount)),
                            react_1.default.createElement("td", { className: "py-4 px-5 text-right whitespace-nowrap" },
                                react_1.default.createElement("div", { className: "inline-flex items-center justify-end gap-1.5" },
                                    react_1.default.createElement("button", { type: "button", onClick: () => handleCopyPix(order), className: `px-2.5 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition cursor-pointer ${isCopied
                                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                            : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-800'}` }, isCopied ? (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 text-emerald-400" }),
                                        react_1.default.createElement("span", null, "Copiado"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement(lucide_react_1.Copy, { className: "w-3.5 h-3.5" }),
                                        react_1.default.createElement("span", null, "Copiar Pix")))),
                                    react_1.default.createElement("a", { href: (0, financeEngine_1.buildWhatsAppBillingUrl)(order), target: "_blank", rel: "noopener noreferrer", className: "px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-950 hover:bg-emerald-950/60 text-slate-200 border border-zinc-800 hover:border-emerald-600/50 flex items-center gap-1.5 transition" },
                                        react_1.default.createElement(lucide_react_1.MessageCircle, { className: "w-3.5 h-3.5 text-emerald-400" }),
                                        react_1.default.createElement("span", null, "Cobrar no WhatsApp")),
                                    order.paymentStatus === 'sem_nota' ? (react_1.default.createElement("button", { type: "button", onClick: () => onEmitBilling30d(order.id), className: "px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-zinc-950 border border-amber-500/30 flex items-center gap-1 transition cursor-pointer" },
                                        react_1.default.createElement(lucide_react_1.Sparkles, { className: "w-3.5 h-3.5" }),
                                        react_1.default.createElement("span", null, "Gerar 30d"))) : order.paymentStatus !== 'cortesia' ? (react_1.default.createElement("button", { type: "button", onClick: () => onTogglePaid(order.id), className: `px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer ${order.paymentStatus === 'pago'
                                            ? 'bg-zinc-800 text-zinc-400 hover:text-slate-200'
                                            : 'bg-emerald-600 hover:bg-emerald-500 text-white'}` }, order.paymentStatus === 'pago' ? (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3 h-3" }),
                                        react_1.default.createElement("span", null, "Reabrir"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                        react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 stroke-[2.5]" }),
                                        react_1.default.createElement("span", null, "Marcar Pago"))))) : null,
                                    react_1.default.createElement("button", { type: "button", onClick: () => onDeleteOrder(order.id), className: "p-1.5 rounded-xl bg-zinc-950 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar esta OS" },
                                        react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
                    }))))))));
};
exports.FinanceAnalyticsSection = FinanceAnalyticsSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/DeliveriesLogisticsSection"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveriesLogisticsSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const DeliveriesLogisticsSection = ({ orders, deliveries, prefillOrder, onAddDelivery, onDeleteDelivery, }) => {
    const [selectedOrderId, setSelectedOrderId] = (0, react_1.useState)(prefillOrder?.id || orders[0]?.id || '');
    const [method, setMethod] = (0, react_1.useState)('uber_flash');
    const [carrierName, setCarrierName] = (0, react_1.useState)('');
    const [dispatchedDate, setDispatchedDate] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [dispatchedTime, setDispatchedTime] = (0, react_1.useState)(() => {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    });
    const [notes, setNotes] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        if (prefillOrder) {
            setSelectedOrderId(prefillOrder.id);
        }
    }, [prefillOrder]);
    const selectedOrder = orders.find((o) => o.id === selectedOrderId);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedOrder || !carrierName.trim())
            return;
        onAddDelivery({
            orderId: selectedOrder.id,
            toolDescription: selectedOrder.toolDescription,
            companyName: selectedOrder.companyName,
            method,
            carrierOrPersonName: carrierName.trim(),
            dispatchedAt: `${dispatchedDate} ${dispatchedTime}`,
            notes: notes.trim() || undefined,
        });
        setCarrierName('');
        setNotes('');
    };
    const inputClass = 'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-lg font-bold text-slate-50 tracking-tight" }, "Se\u00E7\u00E3o 4 \u2022 Entregas e Log\u00EDsticas de Sa\u00EDda"),
            react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Protocolo digital de sa\u00EDda: rastreie exatamente quem retirou ou despachou cada ferramenta com data e hora exatas.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5 pb-3 border-b border-zinc-800" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-rose-900/50 border border-rose-700/40 flex items-center justify-center text-rose-400" },
                        react_1.default.createElement(lucide_react_1.Truck, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Registrar Sa\u00EDda / Retirada de Faca"),
                        react_1.default.createElement("p", { className: "text-[11px] text-zinc-400" }, "Marca automaticamente a OS como \"Faca Pronta\""))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "1. Ordem de Servi\u00E7o (OS & Cliente)"),
                    react_1.default.createElement("select", { value: selectedOrderId, onChange: (e) => setSelectedOrderId(e.target.value), className: inputClass }, orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                        o.id,
                        " \u2014 ",
                        o.companyName,
                        " (",
                        o.toolDescription,
                        ")"))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "2. Modalidade / Respons\u00E1vel pela Retirada"),
                    react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2" }, Object.keys(financeEngine_1.DELIVERY_METHOD_META).map((m) => {
                        const meta = financeEngine_1.DELIVERY_METHOD_META[m];
                        const active = method === m;
                        return (react_1.default.createElement("button", { type: "button", key: m, onClick: () => setMethod(m), className: `py-2.5 px-3 rounded-2xl text-xs font-semibold border text-left transition cursor-pointer ${active
                                ? 'bg-rose-800 text-white border-rose-600 shadow-sm'
                                : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-slate-200'}` },
                            "[",
                            meta.label,
                            "]"));
                    }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "3. Nome do Motorista / Portador / Placa *"),
                    react_1.default.createElement("input", { type: "text", required: true, value: carrierName, onChange: (e) => setCarrierName(e.target.value), placeholder: "Ex: Motoboy Carlos (Placa FKR-4A89) ou Retirado por Marcos", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "Data da Sa\u00EDda"),
                        react_1.default.createElement("input", { type: "date", required: true, value: dispatchedDate, onChange: (e) => setDispatchedDate(e.target.value), className: `${inputClass} font-mono` })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "Hora Exata"),
                        react_1.default.createElement("input", { type: "time", required: true, value: dispatchedTime, onChange: (e) => setDispatchedTime(e.target.value), className: `${inputClass} font-mono` }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "Observa\u00E7\u00E3o de Expedi\u00E7\u00E3o (Opcional)"),
                    react_1.default.createElement("input", { type: "text", value: notes, onChange: (e) => setNotes(e.target.value), placeholder: "Ex: Canhoto assinado, entregue c/ prote\u00E7\u00E3o de borracha...", className: inputClass })),
                react_1.default.createElement("button", { type: "submit", className: "w-full py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2 transition cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                    react_1.default.createElement("span", null, "Confirmar Registro de Sa\u00EDda"))),
            react_1.default.createElement("div", { className: "lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-zinc-800" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" },
                            "Hist\u00F3rico de Entregas & Retiradas (",
                            deliveries.length,
                            ")"),
                        react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Rastreabilidade completa contra extravio de ferramentas")),
                    react_1.default.createElement(lucide_react_1.PackageCheck, { className: "w-5 h-5 text-emerald-400" })),
                react_1.default.createElement("div", { className: "space-y-3" }, deliveries.length === 0 ? (react_1.default.createElement("div", { className: "p-10 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhuma entrega ou retirada registrada ainda.")) : (deliveries.map((del) => {
                    const meta = financeEngine_1.DELIVERY_METHOD_META[del.method];
                    return (react_1.default.createElement("div", { key: del.id, className: "p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3" },
                        react_1.default.createElement("div", { className: "space-y-1" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300" }, del.orderId),
                                react_1.default.createElement("span", { className: "text-xs font-bold text-slate-100" }, del.companyName),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${meta?.badgeClass}` },
                                    "[",
                                    meta?.label,
                                    "]")),
                            react_1.default.createElement("p", { className: "text-xs text-zinc-300 font-medium" }, del.toolDescription),
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-3 text-[11px] text-zinc-400 pt-0.5" },
                                react_1.default.createElement("span", { className: "flex items-center gap-1 text-slate-200 font-semibold" },
                                    react_1.default.createElement(lucide_react_1.UserCheck, { className: "w-3.5 h-3.5 text-rose-400" }),
                                    del.carrierOrPersonName),
                                del.notes && (react_1.default.createElement("span", { className: "flex items-center gap-1 text-zinc-500" },
                                    react_1.default.createElement(lucide_react_1.MapPin, { className: "w-3 h-3" }),
                                    del.notes)))),
                        react_1.default.createElement("div", { className: "flex items-center justify-between sm:justify-end gap-2 shrink-0" },
                            react_1.default.createElement("div", { className: "sm:text-right font-mono bg-zinc-900 px-3 py-2 rounded-2xl border border-zinc-800" },
                                react_1.default.createElement("span", { className: "text-[10px] uppercase text-zinc-500 block" }, "Sa\u00EDda Registrada"),
                                react_1.default.createElement("span", { className: "text-xs font-bold text-emerald-400 flex items-center sm:justify-end gap-1 mt-0.5" },
                                    react_1.default.createElement(lucide_react_1.Clock, { className: "w-3 h-3" }),
                                    del.dispatchedAt)),
                            react_1.default.createElement("button", { type: "button", onClick: () => onDeleteDelivery(del.id), className: "p-2.5 rounded-2xl bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar registro de entrega" },
                                react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))));
                })))))));
};
exports.DeliveriesLogisticsSection = DeliveriesLogisticsSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/WarrantyReturnsSection"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarrantyReturnsSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const COMMON_REASONS = [
    'Ajuste de altura de vinco',
    'Lâmina fora de esquadro / destempero',
    'Erro de medida enviado pelo cliente',
    'Substituição de borracha ejetora',
    'Inclusão de furo / trava adicional',
];
const WarrantyReturnsSection = ({ orders, returns, onAddReturn, onUpdateReturnStatus, onDeleteReturn, }) => {
    const [selectedOrderId, setSelectedOrderId] = (0, react_1.useState)(orders[0]?.id || '');
    const [reason, setReason] = (0, react_1.useState)('');
    const [technicalAction, setTechnicalAction] = (0, react_1.useState)('');
    const [adjustmentAmount, setAdjustmentAmount] = (0, react_1.useState)('0');
    const [status, setStatus] = (0, react_1.useState)('em_analise');
    const selectedOrder = orders.find((o) => o.id === selectedOrderId);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedOrder || !reason.trim() || !technicalAction.trim())
            return;
        const val = parseFloat(adjustmentAmount.replace(',', '.')) || 0;
        onAddReturn({
            orderId: selectedOrder.id,
            companyName: selectedOrder.companyName,
            toolDescription: selectedOrder.toolDescription,
            reason: reason.trim(),
            technicalAction: technicalAction.trim(),
            adjustmentAmount: val,
            status,
            createdAt: `${(0, financeEngine_1.toISODate)()}`,
            updatedAt: (0, financeEngine_1.nowTimestampBR)(),
        });
        setReason('');
        setTechnicalAction('');
        setAdjustmentAmount('0');
        setStatus('em_analise');
    };
    const inputClass = 'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-lg font-bold text-slate-50 tracking-tight" }, "Se\u00E7\u00E3o 5 \u2022 Retornos e Ajustes"),
            react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Controle t\u00E9cnico de facas que retornaram para ajuste de vinco, reparo de l\u00E2mina ou modifica\u00E7\u00E3o solicitada pelo cliente.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5 pb-3 border-b border-zinc-800" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400" },
                        react_1.default.createElement(lucide_react_1.Wrench, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" }, "Registrar Retorno / Ajuste de Faca"),
                        react_1.default.createElement("p", { className: "text-[11px] text-zinc-400" }, "Documente o motivo, o servi\u00E7o executado e eventual custo adicional"))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "1. OS Original & Empresa Cliente"),
                    react_1.default.createElement("select", { value: selectedOrderId, onChange: (e) => setSelectedOrderId(e.target.value), className: inputClass }, orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                        o.id,
                        " \u2014 ",
                        o.companyName,
                        " (",
                        o.toolDescription,
                        ")"))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "2. Motivo do Retorno *"),
                    react_1.default.createElement("input", { type: "text", required: true, value: reason, onChange: (e) => setReason(e.target.value), placeholder: "Ex: Ajuste de vinco, L\u00E2mina fora de esquadro, Erro de medida...", className: inputClass }),
                    react_1.default.createElement("div", { className: "flex flex-wrap gap-1.5 mt-2" }, COMMON_REASONS.map((r) => (react_1.default.createElement("button", { type: "button", key: r, onClick: () => setReason(r), className: "text-[10px] px-2.5 py-1 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-slate-200 border border-zinc-800 transition cursor-pointer" },
                        "+ ",
                        r))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "3. O que foi feito e ajustado (Descri\u00E7\u00E3o T\u00E9cnica do Reparo) *"),
                    react_1.default.createElement("textarea", { rows: 3, required: true, value: technicalAction, onChange: (e) => setTechnicalAction(e.target.value), placeholder: "Descreva a troca de l\u00E2mina, calibragem de altura, borracha ejetora ou abertura de rasgo...", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "4. Novo Valor do Ajuste (R$)"),
                        react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", value: adjustmentAmount, onChange: (e) => setAdjustmentAmount(e.target.value), placeholder: "0,00 (Garantia)", className: `${inputClass} font-mono font-bold` }),
                        react_1.default.createElement("span", { className: "text-[10px] text-zinc-500 mt-0.5 block" }, "Use R$ 0,00 caso seja ajuste em garantia sem custo")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "5. Status do Retorno"),
                        react_1.default.createElement("select", { value: status, onChange: (e) => setStatus(e.target.value), className: inputClass }, Object.entries(financeEngine_1.RETURN_STATUS_META).map(([k, v]) => (react_1.default.createElement("option", { key: k, value: k }, v.label)))))),
                react_1.default.createElement("button", { type: "submit", className: "w-full py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2 transition cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                    react_1.default.createElement("span", null, "Registrar Ocorr\u00EAncia de Retorno"))),
            react_1.default.createElement("div", { className: "lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-zinc-800" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-bold text-slate-50" },
                            "Facas em Retorno / Hist\u00F3rico de Ajustes (",
                            returns.length,
                            ")"),
                        react_1.default.createElement("p", { className: "text-xs text-zinc-400" }, "Acompanhe o diagn\u00F3stico t\u00E9cnico e libere novamente para o cliente")),
                    react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-5 h-5 text-amber-400" })),
                react_1.default.createElement("div", { className: "space-y-3.5" }, returns.length === 0 ? (react_1.default.createElement("div", { className: "p-10 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500" }, "Nenhum retorno ou ajuste registrado ainda.")) : (returns.map((ret) => {
                    const stMeta = financeEngine_1.RETURN_STATUS_META[ret.status];
                    return (react_1.default.createElement("div", { key: ret.id, className: "p-5 rounded-3xl bg-zinc-950/85 border border-zinc-800/90 space-y-3" },
                        react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-2" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                    react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300" }, ret.orderId),
                                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-100" }, ret.companyName),
                                    react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-semibold border flex items-center gap-1.5 ${stMeta.badgeClass}` },
                                        react_1.default.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${stMeta.dotClass}` }),
                                        stMeta.label)),
                                react_1.default.createElement("p", { className: "text-xs text-zinc-400 mt-1" }, ret.toolDescription)),
                            react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                react_1.default.createElement("div", { className: "text-right font-mono" },
                                    react_1.default.createElement("span", { className: `text-sm font-extrabold block ${ret.adjustmentAmount === 0
                                            ? 'text-emerald-400'
                                            : 'text-amber-400'}` }, ret.adjustmentAmount === 0
                                        ? 'R$ 0,00 (Garantia)'
                                        : `Ajuste: ${(0, financeEngine_1.formatBRL)(ret.adjustmentAmount)}`),
                                    react_1.default.createElement("span", { className: "text-[10px] text-zinc-500" },
                                        "Atualizado: ",
                                        ret.updatedAt)),
                                react_1.default.createElement("button", { type: "button", onClick: () => onDeleteReturn(ret.id), className: "p-2 rounded-2xl bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer", title: "Apagar registro de retorno" },
                                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs" },
                            react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/80" },
                                react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase text-rose-400 block mb-0.5" }, "Motivo do Retorno:"),
                                react_1.default.createElement("p", { className: "text-slate-200" }, ret.reason)),
                            react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/80" },
                                react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase text-emerald-400 block mb-0.5" }, "O que foi feito e ajustado:"),
                                react_1.default.createElement("p", { className: "text-slate-200" }, ret.technicalAction))),
                        react_1.default.createElement("div", { className: "flex items-center justify-between pt-1" },
                            react_1.default.createElement("div", { className: "flex items-center gap-1.5" }, ['em_analise', 'em_ajuste', 'liberado'].map((st) => (react_1.default.createElement("button", { key: st, type: "button", onClick: () => onUpdateReturnStatus(ret.id, st), className: `px-2.5 py-1 rounded-xl text-[11px] font-semibold border transition cursor-pointer ${ret.status === st
                                    ? 'bg-rose-800 text-white border-rose-600'
                                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'}` }, financeEngine_1.RETURN_STATUS_META[st].label)))),
                            stMeta.next && (react_1.default.createElement("button", { type: "button", onClick: () => onUpdateReturnStatus(ret.id, stMeta.next), className: "px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 flex items-center gap-1 transition cursor-pointer" },
                                react_1.default.createElement("span", null,
                                    "Avan\u00E7ar p/ ",
                                    financeEngine_1.RETURN_STATUS_META[stMeta.next].label),
                                react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-3.5 h-3.5" }))))));
                })))))));
};
exports.WarrantyReturnsSection = WarrantyReturnsSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/FastEntryModal"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastEntryModal = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const FastEntryModal = ({ isOpen, onClose, companies, nextOrderId, onSaveOrder, }) => {
    const [selectedCompanyId, setSelectedCompanyId] = (0, react_1.useState)(companies[0]?.id || '');
    const [customCompanyName, setCustomCompanyName] = (0, react_1.useState)('');
    const [toolDescription, setToolDescription] = (0, react_1.useState)('');
    const [amount, setAmount] = (0, react_1.useState)('');
    const [paymentModality, setPaymentModality] = (0, react_1.useState)('a_prazo');
    const [stage, setStage] = (0, react_1.useState)('arquivo_recebido');
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            setSelectedCompanyId(companies[0]?.id || 'nova');
            setCustomCompanyName('');
            setToolDescription('');
            setAmount('');
            setPaymentModality('a_prazo');
            setStage('arquivo_recebido');
        }
    }, [isOpen, companies]);
    if (!isOpen)
        return null;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!toolDescription.trim())
            return;
        const existingComp = companies.find((c) => c.id === selectedCompanyId);
        const companyName = selectedCompanyId === 'nova'
            ? customCompanyName.trim() || 'Cliente Avulso'
            : existingComp?.corporateName || 'Cliente';
        const companyPhone = existingComp?.phone || '(11) 99999-0000';
        const numericAmount = parseFloat(amount.replace(',', '.')) || 0;
        onSaveOrder({
            companyId: existingComp?.id || `EMP-${Date.now().toString().slice(-3)}`,
            companyName,
            companyPhone,
            toolDescription: toolDescription.trim(),
            amount: numericAmount,
            paymentModality,
            stage,
        });
        onClose();
    };
    const inputClass = 'w-full px-3.5 py-2.5 text-sm rounded-2xl bg-zinc-900 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';
    return (react_1.default.createElement("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4" },
        react_1.default.createElement("div", { className: "w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-zinc-950 border border-zinc-800/90 p-6 shadow-2xl space-y-4" },
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-white" },
                        react_1.default.createElement(lucide_react_1.Layers, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("h2", { className: "text-base font-bold text-slate-50" }, "Nova Ordem de Servi\u00E7o"),
                            react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-rose-950/90 border border-rose-800/60 font-mono text-xs font-bold text-rose-300" }, nextOrderId)),
                        react_1.default.createElement("p", { className: "text-[11px] text-zinc-400" }, "Lan\u00E7amento r\u00E1pido \u2022 Entra direto na Esteira e no Financeiro"))),
                react_1.default.createElement("button", { type: "button", onClick: onClose, className: "p-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-slate-100 transition cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" }))),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-3.5" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1" }, "1. Empresa / Cliente"),
                    react_1.default.createElement("select", { value: selectedCompanyId, onChange: (e) => setSelectedCompanyId(e.target.value), className: inputClass },
                        companies.map((c) => (react_1.default.createElement("option", { key: c.id, value: c.id },
                            c.corporateName,
                            " (",
                            c.cnpj,
                            ")"))),
                        react_1.default.createElement("option", { value: "nova" }, "+ Digitar Nova Empresa Rapidamente...")),
                    selectedCompanyId === 'nova' && (react_1.default.createElement("input", { type: "text", required: true, value: customCompanyName, onChange: (e) => setCustomCompanyName(e.target.value), placeholder: "Digite a Raz\u00E3o Social ou Nome da Gr\u00E1fica", className: `${inputClass} mt-2` }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1" }, "2. Descri\u00E7\u00E3o Detalhada da Ferramenta (Faca) *"),
                    react_1.default.createElement("input", { type: "text", required: true, autoFocus: true, value: toolDescription, onChange: (e) => setToolDescription(e.target.value), placeholder: "Ex: Faca Caixa Duplex Tampa e Fundo", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1" }, "3. Valor (R$) *"),
                        react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "Ex: 680,00", className: `${inputClass} font-mono font-bold` })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1" }, "4. Status Inicial na Esteira"),
                        react_1.default.createElement("select", { value: stage, onChange: (e) => setStage(e.target.value), className: inputClass }, financeEngine_1.PRODUCTION_STAGES.map((st) => (react_1.default.createElement("option", { key: st.id, value: st.id },
                            st.step,
                            ". ",
                            st.label)))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-semibold text-zinc-300 block mb-1.5" }, "5. Condi\u00E7\u00E3o de Pagamento"),
                    react_1.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2" }, Object.keys(financeEngine_1.PAYMENT_MODALITY_META).map((mod) => {
                        const meta = financeEngine_1.PAYMENT_MODALITY_META[mod];
                        const selected = paymentModality === mod;
                        return (react_1.default.createElement("button", { type: "button", key: mod, onClick: () => setPaymentModality(mod), className: `py-2 px-3 rounded-2xl text-xs font-semibold border text-left flex items-center justify-between transition cursor-pointer ${selected
                                ? 'bg-rose-800 text-white border-rose-600 shadow-sm'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'}` },
                            react_1.default.createElement("span", { className: "truncate" },
                                "[",
                                meta.short,
                                "]"),
                            selected && react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 shrink-0 ml-1" })));
                    }))),
                react_1.default.createElement("div", { className: "pt-2" },
                    react_1.default.createElement("button", { type: "submit", className: "w-full py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-slate-50 shadow-lg shadow-rose-950/80 flex items-center justify-center gap-2 transition cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                        react_1.default.createElement("span", null,
                            "Registrar ",
                            nextOrderId,
                            " na Esteira")))))));
};
exports.FastEntryModal = FastEntryModal;

  },
  { dir: "./components" }
);

__moduleFactories["./App"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const AuthLoginScreen_1 = require("./components/AuthLoginScreen");
const BentoOverviewSection_1 = require("./components/BentoOverviewSection");
const CompaniesCrmSection_1 = require("./components/CompaniesCrmSection");
const DeliveriesLogisticsSection_1 = require("./components/DeliveriesLogisticsSection");
const FastEntryModal_1 = require("./components/FastEntryModal");
const FinanceAnalyticsSection_1 = require("./components/FinanceAnalyticsSection");
const HeaderBar_1 = require("./components/HeaderBar");
const ProductionKanban_1 = require("./components/ProductionKanban");
const WarrantyReturnsSection_1 = require("./components/WarrantyReturnsSection");
const storageAdapter_1 = require("./services/storageAdapter");
const financeEngine_1 = require("./utils/financeEngine");
const App = () => {
    const [session, setSession] = (0, react_1.useState)(() => (0, storageAdapter_1.getActiveSession)());
    const [db, setDb] = (0, react_1.useState)(() => {
        const active = (0, storageAdapter_1.getActiveSession)();
        return (0, storageAdapter_1.loadEnterpriseDatabase)(active?.company_id || 'tenant_qualifacas');
    });
    const [activeSection, setActiveSection] = (0, react_1.useState)('bento_home');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [selectedCompanyId, setSelectedCompanyId] = (0, react_1.useState)(db.companies[0]?.id || null);
    const [prefillDeliveryOrder, setPrefillDeliveryOrder] = (0, react_1.useState)(null);
    const [isNewModalOpen, setIsNewModalOpen] = (0, react_1.useState)(false);
    const [toast, setToast] = (0, react_1.useState)(null);
    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => {
            setToast((prev) => (prev === msg ? null : prev));
        }, 3500);
    };
    const handleAuthenticated = (newSession) => {
        const tenantDb = (0, storageAdapter_1.loadEnterpriseDatabase)(newSession.company_id);
        setSession(newSession);
        setDb(tenantDb);
        setSelectedCompanyId(tenantDb.companies[0]?.id || null);
        setActiveSection('bento_home');
        setSearchQuery('');
        showToast('Sessão iniciada com sucesso!');
    };
    const handleLogout = () => {
        (0, storageAdapter_1.clearActiveSession)();
        setSession(null);
        setSearchQuery('');
        setIsNewModalOpen(false);
    };
    const commitDb = (nextDb) => {
        const activeTenantId = session?.company_id || nextDb.company_id || 'tenant_qualifacas';
        const saved = (0, storageAdapter_1.saveEnterpriseDatabase)({
            ...nextDb,
            company_id: activeTenantId,
        });
        setDb(saved);
    };
    // Search filtering
    const filteredOrders = (0, react_1.useMemo)(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q)
            return db.orders;
        return db.orders.filter((o) => o.id.toLowerCase().includes(q) ||
            o.companyName.toLowerCase().includes(q) ||
            o.toolDescription.toLowerCase().includes(q));
    }, [db.orders, searchQuery]);
    const filteredCompanies = (0, react_1.useMemo)(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q)
            return db.companies;
        return db.companies.filter((c) => c.corporateName.toLowerCase().includes(q) ||
            c.cnpj.toLowerCase().includes(q) ||
            c.contactName.toLowerCase().includes(q));
    }, [db.companies, searchQuery]);
    const financials = (0, react_1.useMemo)(() => (0, financeEngine_1.computeFinancialBreakdown)(filteredOrders), [filteredOrders]);
    const nextOrderId = (0, react_1.useMemo)(() => (0, storageAdapter_1.getNextOrderId)(db), [db]);
    // Handlers
    const handleAddCompany = (newCompData) => {
        let maxNum = 0;
        for (const c of db.companies) {
            const n = parseInt(c.id.replace(/\D/g, ''), 10);
            if (!Number.isNaN(n) && n > maxNum)
                maxNum = n;
        }
        const newId = `EMP-${String(maxNum + 1).padStart(2, '0')}`;
        const created = {
            id: newId,
            company_id: session?.company_id,
            ...newCompData,
        };
        commitDb({
            ...db,
            companies: [created, ...db.companies],
        });
        setSelectedCompanyId(newId);
        showToast(`Empresa "${created.corporateName}" cadastrada!`);
    };
    const handleCreateOrderFull = (payload) => {
        const today = (0, financeEngine_1.toISODate)();
        const stamp = (0, financeEngine_1.nowTimestampBR)();
        const days = financeEngine_1.PAYMENT_MODALITY_META[payload.paymentModality]?.defaultDays ?? 30;
        let payStatus = 'a_receber';
        if (payload.paymentModality === 'cortesia')
            payStatus = 'cortesia';
        else if (payload.paymentModality === 'pix' ||
            payload.paymentModality === 'dinheiro') {
            payStatus = 'pago';
        }
        // Ensure company exists in CRM
        let updatedCompanies = db.companies;
        if (!db.companies.some((c) => c.id === payload.companyId)) {
            updatedCompanies = [
                {
                    id: payload.companyId,
                    corporateName: payload.companyName,
                    cnpj: 'Não informado',
                    phone: payload.companyPhone,
                    contactName: 'PCP / Compras',
                },
                ...db.companies,
            ];
        }
        const newOrder = {
            id: nextOrderId,
            companyId: payload.companyId,
            companyName: payload.companyName,
            companyPhone: payload.companyPhone,
            toolDescription: payload.toolDescription,
            amount: payload.amount,
            paymentModality: payload.paymentModality,
            paymentStatus: payStatus,
            stage: payload.stage,
            stageUpdatedAt: stamp,
            stageHistory: [{ stage: payload.stage, timestamp: stamp }],
            createdAt: today,
            dueDate: (0, financeEngine_1.addDays)(today, days),
            paidAt: payStatus === 'pago' ? today : undefined,
        };
        commitDb({
            ...db,
            companies: updatedCompanies,
            orders: [newOrder, ...db.orders],
        });
        if (!selectedCompanyId) {
            setSelectedCompanyId(payload.companyId);
        }
        showToast(`${newOrder.id} criada em "${financeEngine_1.PRODUCTION_STAGES.find((s) => s.id === payload.stage)?.label}"!`);
    };
    const handleMoveStage = (orderId, targetStage) => {
        const stamp = (0, financeEngine_1.nowTimestampBR)();
        const nextOrders = db.orders.map((o) => {
            if (o.id !== orderId)
                return o;
            return {
                ...o,
                stage: targetStage,
                stageUpdatedAt: stamp,
                stageHistory: [...(o.stageHistory || []), { stage: targetStage, timestamp: stamp }],
            };
        });
        commitDb({ ...db, orders: nextOrders });
        const stageName = financeEngine_1.PRODUCTION_STAGES.find((s) => s.id === targetStage)?.label;
        showToast(`${orderId} avançou para "${stageName}" (${stamp})`);
    };
    const handleTogglePaid = (orderId) => {
        const today = (0, financeEngine_1.toISODate)();
        const nextOrders = db.orders.map((o) => {
            if (o.id !== orderId)
                return o;
            const isPaid = o.paymentStatus === 'pago';
            return {
                ...o,
                paymentStatus: (isPaid ? 'a_receber' : 'pago'),
                paidAt: isPaid ? undefined : today,
            };
        });
        commitDb({ ...db, orders: nextOrders });
        showToast(`Status financeiro de ${orderId} atualizado!`);
    };
    const handleEmitBilling30d = (orderId) => {
        const today = (0, financeEngine_1.toISODate)();
        const nextOrders = db.orders.map((o) => {
            if (o.id !== orderId)
                return o;
            return {
                ...o,
                paymentStatus: 'a_receber',
                dueDate: (0, financeEngine_1.addDays)(today, 30),
            };
        });
        commitDb({ ...db, orders: nextOrders });
        showToast(`Faturamento 30 dias gerado para ${orderId}!`);
    };
    const handleAddDelivery = (deliveryData) => {
        const newDel = {
            id: (0, storageAdapter_1.getNextDeliveryId)(db),
            ...deliveryData,
        };
        const stamp = (0, financeEngine_1.nowTimestampBR)();
        const nextOrders = db.orders.map((o) => o.id === deliveryData.orderId
            ? { ...o, stage: 'faca_pronta', stageUpdatedAt: stamp }
            : o);
        commitDb({
            ...db,
            orders: nextOrders,
            deliveries: [newDel, ...db.deliveries],
        });
        showToast(`Saída logística da ${deliveryData.orderId} registrada!`);
    };
    const handleAddReturn = (retData) => {
        const newRet = {
            id: (0, storageAdapter_1.getNextReturnId)(db),
            ...retData,
        };
        commitDb({
            ...db,
            returns: [newRet, ...db.returns],
        });
        showToast(`Retorno de garantia (${retData.orderId}) registrado!`);
    };
    const handleUpdateReturnStatus = (id, nextStatus) => {
        const stamp = (0, financeEngine_1.nowTimestampBR)();
        const nextReturns = db.returns.map((r) => r.id === id ? { ...r, status: nextStatus, updatedAt: stamp } : r);
        commitDb({ ...db, returns: nextReturns });
        showToast(`Status do retorno atualizado (${stamp})!`);
    };
    const handleDeleteCompany = (companyId) => {
        const comp = db.companies.find((c) => c.id === companyId);
        const removedOrderIds = new Set(db.orders.filter((o) => o.companyId === companyId).map((o) => o.id));
        const nextCompanies = db.companies.filter((c) => c.id !== companyId);
        const nextOrders = db.orders.filter((o) => o.companyId !== companyId);
        const nextDeliveries = db.deliveries.filter((d) => !removedOrderIds.has(d.orderId));
        const nextReturns = db.returns.filter((r) => !removedOrderIds.has(r.orderId));
        commitDb({
            ...db,
            companies: nextCompanies,
            orders: nextOrders,
            deliveries: nextDeliveries,
            returns: nextReturns,
        });
        if (selectedCompanyId === companyId) {
            setSelectedCompanyId(nextCompanies[0]?.id || null);
        }
        showToast(`Empresa "${comp?.corporateName || companyId}" apagada!`);
    };
    const handleDeleteOrder = (orderId) => {
        const nextOrders = db.orders.filter((o) => o.id !== orderId);
        const nextDeliveries = db.deliveries.filter((d) => d.orderId !== orderId);
        const nextReturns = db.returns.filter((r) => r.orderId !== orderId);
        commitDb({
            ...db,
            orders: nextOrders,
            deliveries: nextDeliveries,
            returns: nextReturns,
        });
        showToast(`Ordem ${orderId} apagada com sucesso!`);
    };
    const handleDeleteDelivery = (deliveryId) => {
        const nextDeliveries = db.deliveries.filter((d) => d.id !== deliveryId);
        commitDb({ ...db, deliveries: nextDeliveries });
        showToast(`Registro de entrega ${deliveryId} apagado!`);
    };
    const handleDeleteReturn = (returnId) => {
        const nextReturns = db.returns.filter((r) => r.id !== returnId);
        commitDb({ ...db, returns: nextReturns });
        showToast(`Registro de retorno ${returnId} apagado!`);
    };
    const counts = {
        companies: db.companies.length,
        inProduction: db.orders.filter((o) => o.stage !== 'faca_pronta').length,
        overdue: financials.overdueCount,
        deliveries: db.deliveries.length,
        openReturns: db.returns.filter((r) => r.status !== 'liberado').length,
    };
    if (!session) {
        return react_1.default.createElement(AuthLoginScreen_1.AuthLoginScreen, { onAuthenticated: handleAuthenticated });
    }
    return (react_1.default.createElement("div", { className: "min-h-screen bg-zinc-950 text-slate-100 pb-24 selection:bg-rose-800 selection:text-white" },
        react_1.default.createElement(HeaderBar_1.HeaderBar, { activeSection: activeSection, onSelectSection: setActiveSection, searchQuery: searchQuery, onSearchChange: setSearchQuery, onOpenNewOrder: () => setIsNewModalOpen(true), tenantName: session.companyName, onLogout: handleLogout, counts: counts }),
        toast && (react_1.default.createElement("div", { className: "fixed bottom-20 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-900 border border-rose-700/70 text-slate-50 text-xs font-semibold shadow-2xl flex items-center gap-2" },
            react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
            react_1.default.createElement("span", null, toast))),
        react_1.default.createElement("main", { className: "max-w-[1520px] mx-auto lg:pl-24 px-4 sm:px-6 pt-6" },
            activeSection === 'bento_home' && (react_1.default.createElement(BentoOverviewSection_1.BentoOverviewSection, { companies: filteredCompanies, orders: filteredOrders, deliveries: db.deliveries, returns: db.returns, financials: financials, onNavigate: setActiveSection, onOpenNewOrder: () => setIsNewModalOpen(true), onSelectCompany: (id) => setSelectedCompanyId(id) })),
            activeSection === 'empresas' && (react_1.default.createElement(CompaniesCrmSection_1.CompaniesCrmSection, { companies: filteredCompanies, orders: filteredOrders, selectedCompanyId: selectedCompanyId, onSelectCompany: setSelectedCompanyId, onAddCompany: handleAddCompany, onDeleteCompany: handleDeleteCompany, onDeleteOrder: handleDeleteOrder, onAddDieForCompany: (comp, desc, val, mod) => handleCreateOrderFull({
                    companyId: comp.id,
                    companyName: comp.corporateName,
                    companyPhone: comp.phone,
                    toolDescription: desc,
                    amount: val,
                    paymentModality: mod,
                    stage: 'arquivo_recebido',
                }) })),
            activeSection === 'esteira' && (react_1.default.createElement(ProductionKanban_1.ProductionKanban, { orders: filteredOrders, onMoveStage: handleMoveStage, onDeleteOrder: handleDeleteOrder, onQuickRegisterDelivery: (order) => {
                    setPrefillDeliveryOrder(order);
                    setActiveSection('entregas');
                } })),
            activeSection === 'financeiro' && (react_1.default.createElement(FinanceAnalyticsSection_1.FinanceAnalyticsSection, { orders: filteredOrders, financials: financials, onTogglePaid: handleTogglePaid, onEmitBilling30d: handleEmitBilling30d, onDeleteOrder: handleDeleteOrder })),
            activeSection === 'entregas' && (react_1.default.createElement(DeliveriesLogisticsSection_1.DeliveriesLogisticsSection, { orders: db.orders, deliveries: db.deliveries, prefillOrder: prefillDeliveryOrder, onAddDelivery: handleAddDelivery, onDeleteDelivery: handleDeleteDelivery })),
            activeSection === 'retornos' && (react_1.default.createElement(WarrantyReturnsSection_1.WarrantyReturnsSection, { orders: db.orders, returns: db.returns, onAddReturn: handleAddReturn, onUpdateReturnStatus: handleUpdateReturnStatus, onDeleteReturn: handleDeleteReturn }))),
        react_1.default.createElement("button", { type: "button", onClick: () => setIsNewModalOpen(true), className: "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3.5 rounded-3xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 active:scale-95 text-slate-50 border border-rose-500/40 shadow-2xl shadow-rose-950/90 transition-all cursor-pointer" },
            react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 stroke-[2.5]" }),
            react_1.default.createElement("span", null, "Nova OS")),
        react_1.default.createElement(FastEntryModal_1.FastEntryModal, { isOpen: isNewModalOpen, onClose: () => setIsNewModalOpen(false), companies: db.companies, nextOrderId: nextOrderId, onSaveOrder: handleCreateOrderFull })));
};
exports.App = App;
exports.default = exports.App;

  },
  { dir: "." }
);

__moduleFactories["./main"] = Object.assign(
  function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const App_1 = require("./App");
const container = document.getElementById('root');
if (container) {
    const root = (0, client_1.createRoot)(container);
    root.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(App_1.App, null)));
}

  },
  { dir: "." }
);

// Bootstrap main entry
__require('.', './main');
