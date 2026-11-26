// FacasFlow Enterprise (Dark Crimson Bento Edition) - Compiled ESM Bundle
import * as ReactNamespace from 'https://esm.sh/react@19.0.0';
import { createRoot } from 'https://esm.sh/react-dom@19.0.0/client';
import * as LucideIcons from 'https://esm.sh/lucide-react@0.468.0?deps=react@19.0.0';
import * as SupabaseJs from 'https://esm.sh/@supabase/supabase-js@2.47.10';

const React = ReactNamespace.default || ReactNamespace;
const __externalModules = {
  'react': Object.assign({ default: React }, ReactNamespace),
  'react-dom/client': { createRoot, default: { createRoot } },
  'lucide-react': LucideIcons,
  '@supabase/supabase-js': Object.assign({ default: SupabaseJs }, SupabaseJs)
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
exports.RETURN_STATUS_META = exports.DELIVERY_METHOD_META = exports.INVESTMENT_TYPE_META = exports.EXPENSE_STATUS_META = exports.EXPENSE_PAYMENT_META = exports.EXPENSE_CATEGORY_MAP = exports.EXPENSE_CATEGORIES = exports.PAYMENT_MODALITY_META = exports.PRODUCTION_STAGES = void 0;
exports.normalizeInvestmentType = normalizeInvestmentType;
exports.createEmptyExpensesMap = createEmptyExpensesMap;
exports.formatCurrencyMask = formatCurrencyMask;
exports.parseCurrencyMask = parseCurrencyMask;
exports.formatBRL = formatBRL;
exports.getTodayGoiasISO = getTodayGoiasISO;
exports.formatDateTimeGoiasBR = formatDateTimeGoiasBR;
exports.toISODate = toISODate;
exports.roundCurrencyBRL = roundCurrencyBRL;
exports.formatDecimalBR = formatDecimalBR;
exports.computeExpenseEffectiveStatus = computeExpenseEffectiveStatus;
exports.getExpensePeriodRange = getExpensePeriodRange;
exports.validateExpenseInput = validateExpenseInput;
exports.computeExpensesSummary = computeExpensesSummary;
exports.buildExpensesCsvContent = buildExpensesCsvContent;
exports.nowTimestampBR = nowTimestampBR;
exports.addDays = addDays;
exports.formatDateBR = formatDateBR;
exports.getDaysDiff = getDaysDiff;
exports.getNextStage = getNextStage;
exports.getPrevStage = getPrevStage;
exports.migratePaymentModality = migratePaymentModality;
exports.normalizeOrderPaymentStatus = normalizeOrderPaymentStatus;
exports.computeFinancialBreakdown = computeFinancialBreakdown;
exports.buildPixClipboardSnippet = buildPixClipboardSnippet;
exports.buildWhatsAppBillingUrl = buildWhatsAppBillingUrl;
exports.formatCnpjMask = formatCnpjMask;
exports.isValidCNPJ = isValidCNPJ;
exports.formatPhoneMask = formatPhoneMask;
exports.formatCpfCnpjMask = formatCpfCnpjMask;
exports.isValidCPF = isValidCPF;
exports.isValidCpfOrCnpj = isValidCpfOrCnpj;
exports.formatQuantityBR = formatQuantityBR;
exports.PRODUCTION_STAGES = [
    {
        id: 'arquivo_recebido',
        step: 1,
        label: 'Arquivo Recebido',
        shortLabel: '1. Arquivo',
        subtitle: 'CAD / PDF / Amostra na triagem',
        accentColor: 'border-white/70',
        dotClass: 'bg-slate-400',
    },
    {
        id: 'desenho_produzido',
        step: 2,
        label: 'Desenho Produzido',
        shortLabel: '2. Desenho CAD',
        subtitle: 'EngView / Projeto técnico pronto',
        accentColor: 'border-indigo-300/70',
        dotClass: 'bg-indigo-500',
    },
    {
        id: 'faca_serrada',
        step: 3,
        label: 'Faca Serrada',
        shortLabel: '3. Serrada / Laser',
        subtitle: 'Madeira cortada e calada',
        accentColor: 'border-sky-300/70',
        dotClass: 'bg-sky-500',
    },
    {
        id: 'faca_dobrada',
        step: 4,
        label: 'Faca Dobrada',
        shortLabel: '4. Lâmina Dobrada',
        subtitle: 'Lâminas de corte e vinco conformadas',
        accentColor: 'border-purple-300/70',
        dotClass: 'bg-purple-500',
    },
    {
        id: 'faca_ajustada',
        step: 5,
        label: 'Faca Ajustada',
        shortLabel: '5. Ajustada / Borracha',
        subtitle: 'Cravação, esquadro e emborrachamento',
        accentColor: 'border-amber-300/70',
        dotClass: 'bg-amber-500',
    },
    {
        id: 'faca_pronta',
        step: 6,
        label: 'Faca Pronta',
        shortLabel: '6. Faca Pronta',
        subtitle: 'Liberada para expedição / entrega',
        accentColor: 'border-emerald-300/70',
        dotClass: 'bg-emerald-500',
    },
];
exports.PAYMENT_MODALITY_META = {
    pix: {
        label: 'Pix',
        short: 'Pix',
        colorHex: '#10b981', // verde-água
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-400/50',
        defaultDays: 0,
    },
    boleto: {
        label: 'Boleto (15/30)',
        short: 'Boleto (15/30)',
        colorHex: '#4f46e5', // azul
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-400/50',
        defaultDays: 30,
    },
    dinheiro: {
        label: 'Dinheiro',
        short: 'Dinheiro',
        colorHex: '#22c55e', // verde
        badgeClass: 'bg-green-500/15 text-green-800 border-green-400/50',
        defaultDays: 0,
    },
    cartao: {
        label: 'Cartão',
        short: 'Cartão',
        colorHex: '#f59e0b', // laranja
        badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-400/50',
        defaultDays: 2,
    },
    nao_pago: {
        label: 'Não Pago',
        short: 'Não Pago',
        colorHex: '#64748b', // cinza
        badgeClass: 'bg-white/60 text-slate-700 border-white/80',
        defaultDays: 0,
    },
};
exports.EXPENSE_CATEGORIES = [
    { key: 'aluguel', label: 'Aluguel', colorHex: '#4f46e5', badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60' },
    { key: 'agua', label: 'Água', colorHex: '#0ea5e9', badgeClass: 'bg-sky-500/15 text-sky-800 border-sky-300/60' },
    { key: 'energia', label: 'Energia', colorHex: '#eab308', badgeClass: 'bg-yellow-500/15 text-yellow-800 border-yellow-300/60' },
    { key: 'internet', label: 'Internet', colorHex: '#06b6d4', badgeClass: 'bg-cyan-500/15 text-cyan-800 border-cyan-300/60' },
    { key: 'alimentacao', label: 'Alimentação', colorHex: '#f97316', badgeClass: 'bg-orange-500/15 text-orange-800 border-orange-300/60' },
    { key: 'combustivel', label: 'Combustível', colorHex: '#ef4444', badgeClass: 'bg-red-500/15 text-red-800 border-red-300/60' },
    { key: 'manutencao', label: 'Manutenção', colorHex: '#8b5cf6', badgeClass: 'bg-violet-500/15 text-violet-800 border-violet-300/60' },
    { key: 'contador', label: 'Contador', colorHex: '#6366f1', badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60' },
    { key: 'marketing', label: 'Marketing', colorHex: '#ec4899', badgeClass: 'bg-pink-500/15 text-pink-800 border-pink-300/60' },
    { key: 'financiamento', label: 'Financiamento', colorHex: '#64748b', badgeClass: 'bg-slate-500/15 text-slate-800 border-slate-300/60' },
    { key: 'laminas', label: 'Lâminas', colorHex: '#14b8a6', badgeClass: 'bg-teal-500/15 text-teal-800 border-teal-300/60' },
    { key: 'madeira', label: 'Madeira', colorHex: '#d97706', badgeClass: 'bg-amber-500/15 text-amber-900 border-amber-300/60' },
    { key: 'seguros', label: 'Seguros', colorHex: '#2563eb', badgeClass: 'bg-blue-500/15 text-blue-800 border-blue-300/60' },
    { key: 'impostos', label: 'Impostos', colorHex: '#dc2626', badgeClass: 'bg-rose-500/15 text-rose-800 border-rose-300/60' },
    { key: 'flow_dashboard', label: 'Flow Dashboard', colorHex: '#4338ca', badgeClass: 'bg-indigo-500/15 text-indigo-900 border-indigo-400/60' },
    { key: 'taxas_bancarias', label: 'Taxas Bancárias', colorHex: '#0f766e', badgeClass: 'bg-teal-500/15 text-teal-900 border-teal-400/60' },
    { key: 'outros', label: 'Outros', colorHex: '#71717a', badgeClass: 'bg-zinc-500/15 text-zinc-800 border-zinc-300/60' },
];
exports.EXPENSE_CATEGORY_MAP = Object.fromEntries(exports.EXPENSE_CATEGORIES.map((c) => [c.key, c]));
exports.EXPENSE_PAYMENT_META = {
    pix: { label: 'Pix', short: 'Pix' },
    boleto_15: { label: 'Boleto 15 dias', short: 'Boleto 15d' },
    boleto_30: { label: 'Boleto 30 dias', short: 'Boleto 30d' },
    dinheiro: { label: 'Dinheiro', short: 'Dinheiro' },
    cartao: { label: 'Cartão', short: 'Cartão' },
    nao_pago: { label: 'Não Pago', short: 'Não Pago' },
};
exports.EXPENSE_STATUS_META = {
    pago: {
        label: 'Pago',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-400/60',
        dotClass: 'bg-emerald-600',
    },
    pendente: {
        label: 'Pendente',
        badgeClass: 'bg-amber-500/15 text-amber-900 border-amber-400/60',
        dotClass: 'bg-amber-500',
    },
    atrasado: {
        label: 'Atrasado',
        badgeClass: 'bg-rose-500/20 text-rose-800 border-rose-500/70',
        dotClass: 'bg-rose-600',
    },
    cancelado: {
        label: 'Cancelado',
        badgeClass: 'bg-slate-500/15 text-slate-600 border-slate-300/70',
        dotClass: 'bg-slate-400',
    },
};
exports.INVESTMENT_TYPE_META = {
    aplicacao: {
        label: 'Aplicação',
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60',
    },
    consorcio: {
        label: 'Consórcio',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60',
    },
    outros: {
        label: 'Outros',
        badgeClass: 'bg-slate-500/15 text-slate-800 border-slate-300/60',
    },
};
function normalizeInvestmentType(raw) {
    if (raw === 'consorcio')
        return 'consorcio';
    if (raw === 'outros' || raw === 'outro')
        return 'outros';
    return 'aplicacao';
}
function createEmptyExpensesMap() {
    return {
        aluguel: 0,
        agua: 0,
        energia: 0,
        internet: 0,
        alimentacao: 0,
        combustivel: 0,
        manutencao: 0,
        contador: 0,
        marketing: 0,
        financiamento: 0,
        laminas: 0,
        madeira: 0,
        seguros: 0,
        impostos: 0,
        flow_dashboard: 0,
        taxas_bancarias: 0,
        outros: 0,
    };
}
function formatCurrencyMask(value) {
    const safe = Number.isFinite(value) ? Math.max(0, value) : 0;
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(safe);
}
function parseCurrencyMask(rawInput) {
    const digits = rawInput.replace(/\D/g, '');
    if (!digits)
        return 0;
    return Number(digits) / 100;
}
exports.DELIVERY_METHOD_META = {
    cliente_buscou: {
        label: 'Cliente Veio Buscar',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-400/50',
    },
    uber_flash: {
        label: 'Enviado por Uber Flash',
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-400/50',
    },
    entregador_proprio: {
        label: 'Entregador Próprio',
        badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-400/50',
    },
    portador: {
        label: 'Retirado por Portador',
        badgeClass: 'bg-white/60 text-slate-700 border-white/80',
    },
};
exports.RETURN_STATUS_META = {
    em_analise: {
        label: 'Em Análise',
        badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-400/50',
        dotClass: 'bg-amber-500',
        next: 'em_ajuste',
    },
    em_ajuste: {
        label: 'Em Ajuste de Bancada',
        badgeClass: 'bg-rose-500/15 text-rose-800 border-rose-400/50',
        dotClass: 'bg-rose-500',
        next: 'liberado',
    },
    liberado: {
        label: 'Liberado Novamente',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-400/50',
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
function getTodayGoiasISO(date = new Date()) {
    try {
        return new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date);
    }
    catch {
        const goiasMs = date.getTime() - 3 * 3600 * 1000;
        return new Date(goiasMs).toISOString().slice(0, 10);
    }
}
function formatDateTimeGoiasBR(isoDateOrTs) {
    if (!isoDateOrTs)
        return '—';
    const dt = new Date(isoDateOrTs);
    if (Number.isNaN(dt.getTime()))
        return isoDateOrTs;
    try {
        return new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(dt);
    }
    catch {
        return isoDateOrTs;
    }
}
function toISODate(date = new Date()) {
    return getTodayGoiasISO(date);
}
function roundCurrencyBRL(value) {
    const safe = Number(value);
    if (!Number.isFinite(safe) || safe <= 0)
        return 0;
    return Math.round(safe * 100) / 100;
}
function formatDecimalBR(value) {
    const safe = Number.isFinite(value) ? roundCurrencyBRL(value) : 0;
    return safe.toFixed(2).replace('.', ',');
}
function computeExpenseEffectiveStatus(expense, todayGoiasIso = getTodayGoiasISO()) {
    if (expense.status === 'pendente' &&
        expense.data_vencimento &&
        expense.data_vencimento.slice(0, 10) < todayGoiasIso.slice(0, 10)) {
        return 'atrasado';
    }
    return expense.status;
}
function getExpensePeriodRange(preset, customStart, customEnd, todayGoiasIso = getTodayGoiasISO()) {
    const [y, m] = todayGoiasIso.slice(0, 10).split('-').map(Number);
    const lastDayOfMonth = (yr, mo) => String(new Date(yr, mo, 0).getDate()).padStart(2, '0');
    const pad = (n) => String(n).padStart(2, '0');
    if (preset === 'mes_atual') {
        return {
            start: `${y}-${pad(m)}-01`,
            end: `${y}-${pad(m)}-${lastDayOfMonth(y, m)}`,
        };
    }
    if (preset === 'mes_anterior') {
        const prevY = m === 1 ? y - 1 : y;
        const prevM = m === 1 ? 12 : m - 1;
        return {
            start: `${prevY}-${pad(prevM)}-01`,
            end: `${prevY}-${pad(prevM)}-${lastDayOfMonth(prevY, prevM)}`,
        };
    }
    if (preset === 'trimestre') {
        const qStartMonth = Math.floor((m - 1) / 3) * 3 + 1;
        const qEndMonth = qStartMonth + 2;
        return {
            start: `${y}-${pad(qStartMonth)}-01`,
            end: `${y}-${pad(qEndMonth)}-${lastDayOfMonth(y, qEndMonth)}`,
        };
    }
    if (preset === 'ano') {
        return {
            start: `${y}-01-01`,
            end: `${y}-12-31`,
        };
    }
    return {
        start: (customStart || `${y}-${pad(m)}-01`).slice(0, 10),
        end: (customEnd || todayGoiasIso).slice(0, 10),
    };
}
function validateExpenseInput(input) {
    const errors = {};
    const val = roundCurrencyBRL(input.valor);
    if (!Number.isFinite(val) || val <= 0) {
        errors.valor = 'Informe um valor maior que R$ 0,00.';
    }
    if (!input.data_competencia || !/^\d{4}-\d{2}-\d{2}$/.test(input.data_competencia.slice(0, 10))) {
        errors.data_competencia = 'Informe a data de competência válida.';
    }
    if (input.categoria === 'outros' && input.descricao.trim().length < 3) {
        errors.descricao = 'Para a categoria "Outros", a descrição é obrigatória (mínimo 3 caracteres).';
    }
    return errors;
}
function computeExpensesSummary(expenses, todayGoiasIso = getTodayGoiasISO()) {
    let totalPeriodo = 0;
    let totalPago = 0;
    let totalPendente = 0;
    let totalAtrasado = 0;
    let countAtrasado = 0;
    let countAtivos = 0;
    const catTotals = new Map();
    for (const exp of expenses) {
        if (exp.deleted_at || exp.status === 'cancelado')
            continue;
        const val = roundCurrencyBRL(exp.valor);
        countAtivos += 1;
        totalPeriodo = roundCurrencyBRL(totalPeriodo + val);
        const eff = computeExpenseEffectiveStatus(exp, todayGoiasIso);
        if (eff === 'pago') {
            totalPago = roundCurrencyBRL(totalPago + val);
        }
        else if (eff === 'atrasado') {
            totalPendente = roundCurrencyBRL(totalPendente + val);
            totalAtrasado = roundCurrencyBRL(totalAtrasado + val);
            countAtrasado += 1;
        }
        else {
            totalPendente = roundCurrencyBRL(totalPendente + val);
        }
        const cur = catTotals.get(exp.categoria) || { amount: 0, count: 0 };
        catTotals.set(exp.categoria, {
            amount: roundCurrencyBRL(cur.amount + val),
            count: cur.count + 1,
        });
    }
    const byCategory = exports.EXPENSE_CATEGORIES.map((cat) => {
        const stats = catTotals.get(cat.key) || { amount: 0, count: 0 };
        return {
            key: cat.key,
            label: cat.label,
            colorHex: cat.colorHex,
            amount: stats.amount,
            count: stats.count,
            percentage: totalPeriodo > 0 ? Math.round((stats.amount / totalPeriodo) * 1000) / 10 : 0,
        };
    })
        .filter((c) => c.count > 0)
        .sort((a, b) => b.amount - a.amount);
    return {
        totalPeriodo,
        totalPago,
        totalPendente,
        totalAtrasado,
        countAtrasado,
        countAtivos,
        topCategory: byCategory[0]
            ? {
                key: byCategory[0].key,
                label: byCategory[0].label,
                colorHex: byCategory[0].colorHex,
                amount: byCategory[0].amount,
                percentage: byCategory[0].percentage,
            }
            : null,
        byCategory,
    };
}
function buildExpensesCsvContent(expenses, todayGoiasIso = getTodayGoiasISO()) {
    const esc = (raw) => {
        const s = String(raw ?? '').replace(/"/g, '""');
        return `"${s}"`;
    };
    const header = [
        'Data Competência',
        'Categoria',
        'Descrição',
        'Fornecedor',
        'Valor (R$)',
        'Forma de Pagamento',
        'Status',
        'Vencimento',
        'Pagamento',
        'Observação',
    ].join(';');
    const rows = expenses.map((exp) => {
        const eff = computeExpenseEffectiveStatus(exp, todayGoiasIso);
        const catLabel = exports.EXPENSE_CATEGORY_MAP[exp.categoria]?.label || exp.categoria;
        const payLabel = exports.EXPENSE_PAYMENT_META[exp.forma_pagamento]?.label || exp.forma_pagamento;
        const statusLabel = exports.EXPENSE_STATUS_META[eff]?.label || eff;
        return [
            esc(formatDateBR(exp.data_competencia)),
            esc(catLabel),
            esc(exp.descricao),
            esc(exp.fornecedor || ''),
            esc(formatDecimalBR(exp.valor)),
            esc(payLabel),
            esc(statusLabel),
            esc(exp.data_vencimento ? formatDateBR(exp.data_vencimento) : ''),
            esc(exp.data_pagamento ? formatDateBR(exp.data_pagamento) : ''),
            esc(exp.observacao || ''),
        ].join(';');
    });
    return '\uFEFF' + [header, ...rows].join('\r\n');
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
function migratePaymentModality(raw) {
    const normalized = String(raw || '').trim().toLowerCase();
    if (normalized === 'pix')
        return 'pix';
    if (normalized === 'a_prazo' || normalized === 'a prazo' || normalized === 'boleto') {
        return 'boleto';
    }
    if (normalized === 'dinheiro')
        return 'dinheiro';
    if (normalized === 'cartao' || normalized === 'cartão')
        return 'cartao';
    if (normalized === 'cortesia' ||
        normalized === 'nao_pago' ||
        normalized === 'não pago') {
        return 'nao_pago';
    }
    return 'boleto';
}
function normalizeOrderPaymentStatus(order) {
    const rawMod = String(order.paymentModality || '');
    const isLegacyCortesiaWithValue = rawMod.trim().toLowerCase() === 'cortesia' && (Number(order.amount) || 0) > 0;
    if (isLegacyCortesiaWithValue) {
        console.warn(`[FacasFlow Migration] Registro de cortesia com valor detectado (${order.id}: ${order.amount}); migração automática ignorada para revisão manual.`);
        return order;
    }
    const migratedModality = migratePaymentModality(rawMod);
    const migratedStatus = String(order.paymentStatus || '').toLowerCase() === 'cortesia'
        ? 'nao_pago'
        : order.paymentStatus;
    // Regra 5.1: pedidos pagos permanecem pagos; pedidos marcados como nao_pago permanecem nao_pago
    // independentemente da forma de pagamento escolhida até o usuário clicar em "Marcar como pago".
    if (migratedStatus === 'pago' ||
        migratedStatus === 'nao_pago' ||
        migratedStatus === 'sem_nota') {
        return {
            ...order,
            paymentModality: migratedModality,
            paymentStatus: migratedStatus,
        };
    }
    const diff = getDaysDiff(order.dueDate);
    const nextStatus = diff < 0 ? 'vencido' : 'a_receber';
    return {
        ...order,
        paymentModality: migratedModality,
        paymentStatus: nextStatus,
    };
}
function computeFinancialBreakdown(orders) {
    let receivable30d = 0;
    let receivableCount = 0;
    let unpaidTotal = 0;
    let unpaidCount = 0;
    let overdueTotal = 0;
    let overdueCount = 0;
    let unbilledTotal = 0;
    let unbilledCount = 0;
    let paidTotal = 0;
    let paidCount = 0;
    let totalVolume = 0;
    const modalityTotals = {
        pix: { amount: 0, count: 0 },
        boleto: { amount: 0, count: 0 },
        dinheiro: { amount: 0, count: 0 },
        cartao: { amount: 0, count: 0 },
        nao_pago: { amount: 0, count: 0 },
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
            case 'nao_pago':
                unpaidTotal += val;
                unpaidCount += 1;
                receivable30d += val;
                receivableCount += 1;
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
        unpaidTotal,
        unpaidCount,
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
        `Valor: ${formatBRL(order.amount)} - ${exports.PAYMENT_MODALITY_META[order.paymentModality]?.short}\n` +
        `Vencimento: ${formatDateBR(order.dueDate)}\n` +
        `Chave Pix CNPJ: 14.528.910/0001-42`);
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
function formatCnpjMask(raw) {
    const digits = String(raw || '').replace(/\D/g, '').slice(0, 14);
    if (digits.length <= 2)
        return digits;
    if (digits.length <= 5)
        return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    if (digits.length <= 8) {
        return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    }
    if (digits.length <= 12) {
        return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    }
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
}
function isValidCNPJ(raw) {
    const digits = String(raw || '').replace(/\D/g, '');
    if (digits.length !== 14)
        return false;
    if (/^(\d)\1{13}$/.test(digits))
        return false;
    const calcDigit = (slice, weights) => {
        let sum = 0;
        for (let i = 0; i < weights.length; i += 1) {
            sum += Number(slice[i]) * weights[i];
        }
        const rem = sum % 11;
        return rem < 2 ? 0 : 11 - rem;
    };
    const d1 = calcDigit(digits.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    if (d1 !== Number(digits[12]))
        return false;
    const d2 = calcDigit(digits.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    return d2 === Number(digits[13]);
}
function formatPhoneMask(raw) {
    const digits = String(raw || '').replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0)
        return '';
    if (digits.length <= 2)
        return `(${digits}`;
    if (digits.length <= 6)
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
function formatCpfCnpjMask(raw) {
    const digits = String(raw || '').replace(/\D/g, '').slice(0, 14);
    if (digits.length <= 11) {
        if (digits.length <= 3)
            return digits;
        if (digits.length <= 6)
            return `${digits.slice(0, 3)}.${digits.slice(3)}`;
        if (digits.length <= 9) {
            return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
        }
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
    }
    return formatCnpjMask(digits);
}
function isValidCPF(raw) {
    const digits = String(raw || '').replace(/\D/g, '');
    if (digits.length !== 11)
        return false;
    if (/^(\d)\1{10}$/.test(digits))
        return false;
    const calc = (len) => {
        let sum = 0;
        for (let i = 0; i < len; i += 1) {
            sum += Number(digits[i]) * (len + 1 - i);
        }
        const rem = (sum * 10) % 11;
        return rem === 10 ? 0 : rem;
    };
    return calc(9) === Number(digits[9]) && calc(10) === Number(digits[10]);
}
function isValidCpfOrCnpj(raw) {
    const digits = String(raw || '').replace(/\D/g, '');
    if (digits.length === 11)
        return isValidCPF(digits);
    if (digits.length === 14)
        return isValidCNPJ(digits);
    return false;
}
function formatQuantityBR(value) {
    const safe = Number.isFinite(value) ? value : 0;
    if (Number.isInteger(safe))
        return String(safe);
    return safe.toLocaleString('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
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
        id: 'USR-001',
        company_id: 'tenant_qualifacas',
        companyName: 'Qualifacas',
        ownerName: 'Wender Paiva',
        email: 'contato@qualifacas.com',
        password: '123456',
        role: 'admin',
        jobTitle: 'Administrador / Proprietário',
        createdAt: '2026-11-10',
    },
    {
        id: 'USR-002',
        company_id: 'tenant_francisco',
        companyName: 'Facaria do Francisco',
        ownerName: 'Francisco',
        email: 'francisco@facaria.com',
        password: '123456',
        role: 'admin',
        jobTitle: 'Administrador / Proprietário',
        createdAt: '2026-11-10',
    },
];
function createEnterpriseSeedDatabase(company_id = 'tenant_qualifacas') {
    return {
        version: 6,
        company_id,
        companies: [],
        orders: [],
        deliveries: [],
        returns: [],
        stock: [],
        notas: [],
        noteSequence: 0,
        expenses: [],
        serviceProviders: [],
        payrollEmployees: [],
        investments: [],
        employees: [],
    };
}

  },
  { dir: "./data" }
);

__moduleFactories["./services/supabaseClient"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SUPABASE_PUBLISHABLE_KEY = exports.DEFAULT_SUPABASE_URL = void 0;
exports.getResolvedSupabaseCredentials = getResolvedSupabaseCredentials;
exports.getSupabaseClient = getSupabaseClient;
const supabase_js_1 = require("@supabase/supabase-js");
exports.DEFAULT_SUPABASE_URL = 'https://apnityirmkfuuokcpbpm.supabase.co';
exports.DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_tZAalUZ5CmjuxULkFHEX-g_PIDuZMmp';
const SUPABASE_CONFIG_KEY = 'facasflow_supabase_config_v1';
function isServiceRoleKey(key) {
    try {
        const parts = key.split('.');
        if (parts.length !== 3)
            return false;
        const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
        return payload?.role === 'service_role';
    }
    catch {
        return false;
    }
}
function getResolvedSupabaseCredentials() {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const raw = window.localStorage.getItem(SUPABASE_CONFIG_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed?.enabled &&
                    parsed.url?.trim() &&
                    parsed.anonKey?.trim() &&
                    !isServiceRoleKey(parsed.anonKey.trim())) {
                    return {
                        url: parsed.url.trim().replace(/\/+$/, ''),
                        key: parsed.anonKey.trim(),
                    };
                }
            }
        }
    }
    catch {
        // ignore invalid localStorage override
    }
    return {
        url: exports.DEFAULT_SUPABASE_URL,
        key: exports.DEFAULT_SUPABASE_PUBLISHABLE_KEY,
    };
}
let cachedClient = null;
let cachedEndpointSig = '';
function getSupabaseClient() {
    const { url, key } = getResolvedSupabaseCredentials();
    const sig = `${url}|${key}`;
    if (!cachedClient || cachedEndpointSig !== sig) {
        cachedEndpointSig = sig;
        cachedClient = (0, supabase_js_1.createClient)(url, key, {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true,
                storageKey: 'facasflow_sb_auth_v2',
            },
            realtime: {
                params: { eventsPerSecond: 20 },
            },
        });
    }
    return cachedClient;
}

  },
  { dir: "./services" }
);

__moduleFactories["./services/supabaseDataService"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFriendlySupabaseError = toFriendlySupabaseError;
exports.restoreSupabaseSession = restoreSupabaseSession;
exports.signInWithSupabase = signInWithSupabase;
exports.signUpWithSupabase = signUpWithSupabase;
exports.signOutSupabase = signOutSupabase;
exports.loadCompanyDatabaseFromSupabase = loadCompanyDatabaseFromSupabase;
exports.dbCreateCompany = dbCreateCompany;
exports.dbSoftDeleteCompany = dbSoftDeleteCompany;
exports.dbBulkSoftDeleteOrders = dbBulkSoftDeleteOrders;
exports.dbBulkSoftDeleteDeliveries = dbBulkSoftDeleteDeliveries;
exports.dbBulkSoftDeleteReturns = dbBulkSoftDeleteReturns;
exports.dbCreateOrder = dbCreateOrder;
exports.dbMoveOrderStage = dbMoveOrderStage;
exports.dbUpdateOrderPayment = dbUpdateOrderPayment;
exports.dbSoftDeleteOrder = dbSoftDeleteOrder;
exports.dbCreateDelivery = dbCreateDelivery;
exports.dbSoftDeleteDelivery = dbSoftDeleteDelivery;
exports.dbCreateReturn = dbCreateReturn;
exports.dbUpdateReturnStatus = dbUpdateReturnStatus;
exports.dbSoftDeleteReturn = dbSoftDeleteReturn;
exports.dbCreateStockItem = dbCreateStockItem;
exports.dbUpdateStockItem = dbUpdateStockItem;
exports.dbSoftDeleteStockItem = dbSoftDeleteStockItem;
exports.dbRegisterStockMovement = dbRegisterStockMovement;
exports.dbRevertStockMovement = dbRevertStockMovement;
exports.dbSaveNote = dbSaveNote;
exports.dbUpdateNoteStatus = dbUpdateNoteStatus;
exports.dbSoftDeleteNote = dbSoftDeleteNote;
exports.dbCreateExpense = dbCreateExpense;
exports.dbUpdateExpense = dbUpdateExpense;
exports.dbSoftDeleteExpense = dbSoftDeleteExpense;
exports.dbCreateProvider = dbCreateProvider;
exports.dbUpdateProvider = dbUpdateProvider;
exports.dbSoftDeleteProvider = dbSoftDeleteProvider;
exports.dbCreatePayrollEmployee = dbCreatePayrollEmployee;
exports.dbUpdatePayrollEmployee = dbUpdatePayrollEmployee;
exports.dbSoftDeletePayrollEmployee = dbSoftDeletePayrollEmployee;
exports.dbCreateInvestment = dbCreateInvestment;
exports.dbUpdateInvestment = dbUpdateInvestment;
exports.dbSoftDeleteInvestment = dbSoftDeleteInvestment;
exports.invokeManageTeam = invokeManageTeam;
exports.dbLoadSettingsAndBackups = dbLoadSettingsAndBackups;
exports.dbUpdateCompanySettings = dbUpdateCompanySettings;
exports.dbDismissBackupAlert = dbDismissBackupAlert;
exports.invokeBackupEngine = invokeBackupEngine;
const financeEngine_1 = require("../utils/financeEngine");
const supabaseClient_1 = require("./supabaseClient");
function toExpensePayment(mod) {
    if (mod === 'boleto')
        return 'boleto_30';
    return mod;
}
function fromExpensePayment(pm) {
    if (pm === 'boleto_15' || pm === 'boleto_30')
        return 'boleto';
    if (pm === 'pix' || pm === 'dinheiro' || pm === 'cartao' || pm === 'nao_pago') {
        return pm;
    }
    return 'pix';
}
function toFriendlySupabaseError(err, fallback) {
    const code = String(err?.code || '').trim().toUpperCase();
    const raw = String(err?.message || err || '').trim();
    const lower = raw.toLowerCase();
    if (code === 'P0001' && raw && !lower.includes('constraint') && !lower.includes('relation')) {
        return raw;
    }
    if (lower.includes('ordens_servico_empresa_id_numero_os_key') || (code === '23505' && lower.includes('numero_os'))) {
        return 'Conflito na numeração automática da OS. Tente novamente em instantes.';
    }
    if (code === '23505' || lower.includes('duplicate key') || lower.includes('unique constraint')) {
        return 'Já existe um registro com este identificador ou código.';
    }
    if (code === '23503' || lower.includes('foreign key')) {
        return 'O registro vinculado não foi encontrado ou já foi removido.';
    }
    if (code === '23514' || lower.includes('check constraint')) {
        return 'Um dos valores informados está fora das regras permitidas.';
    }
    if (code === '42501' ||
        lower.includes('row-level security') ||
        lower.includes('permission denied')) {
        return 'Você não tem permissão para executar esta operação.';
    }
    if (code === 'PGRST116' || lower.includes('0 rows')) {
        return 'Registro não encontrado ou sem permissão de acesso.';
    }
    if (lower.includes('jwt expired') || lower.includes('not authenticated') || lower.includes('invalid jwt')) {
        return 'Sua sessão expirou. Entre novamente para continuar.';
    }
    if (lower.includes('failed to fetch') || lower.includes('networkerror') || lower.includes('fetch failed')) {
        return 'Falha de conexão com o servidor. Verifique sua internet e tente novamente.';
    }
    return fallback;
}
function generateUuid() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
async function resolveProfileSession(userId, email) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data: perfil, error: pErr } = await sb
        .from('perfis')
        .select('id, empresa_id, nome, email, role, cargo, ativo, deleted_at, is_super_admin')
        .eq('id', userId)
        .is('deleted_at', null)
        .eq('ativo', true)
        .maybeSingle();
    if (pErr || !perfil) {
        throw new Error(toFriendlySupabaseError(pErr, 'Perfil de empresa não localizado para este usuário.'));
    }
    const { data: empresa } = await sb
        .from('empresas')
        .select('id, nome')
        .eq('id', perfil.empresa_id)
        .is('deleted_at', null)
        .maybeSingle();
    const resolvedEmail = String(perfil.email || email).trim().toLowerCase();
    const isSuperAdmin = Boolean(perfil.is_super_admin) &&
        resolvedEmail === 'wenderautomation@gmail.com';
    return {
        userId: perfil.id,
        company_id: perfil.empresa_id,
        empresaId: perfil.empresa_id,
        companyName: empresa?.nome || 'Facaria',
        ownerName: perfil.nome || email.split('@')[0],
        email: perfil.email || email,
        role: perfil.role === 'admin'
            ? 'admin'
            : perfil.role === 'operador'
                ? 'operador'
                : 'cliente',
        isSuperAdmin,
        jobTitle: perfil.cargo || undefined,
        loggedInAt: new Date().toISOString(),
    };
}
async function restoreSupabaseSession() {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb.auth.getSession();
    if (error || !data?.session?.user) {
        return null;
    }
    try {
        return await resolveProfileSession(data.session.user.id, data.session.user.email || '');
    }
    catch {
        return null;
    }
}
async function signInWithSupabase(emailInput, passwordInput) {
    const email = emailInput.trim().toLowerCase();
    const password = passwordInput.trim();
    if (!email || !password) {
        return { error: 'Preencha seu e-mail e senha para entrar.' };
    }
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    let { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error && String(error.message || '').toLowerCase().includes('email not confirmed')) {
        const retryConfirm = await sb.auth.signUp({ email, password });
        if (retryConfirm.data?.session && retryConfirm.data?.user) {
            data = { user: retryConfirm.data.user, session: retryConfirm.data.session };
            error = null;
        }
    }
    if (error || !data?.user) {
        const msg = String(error?.message || '').toLowerCase();
        if (msg.includes('email not confirmed')) {
            return { error: 'Confirme seu e-mail antes de acessar o painel.' };
        }
        if (msg.includes('invalid login credentials')) {
            return { error: 'E-mail ou senha inválidos. Verifique suas credenciais.' };
        }
        return { error: toFriendlySupabaseError(error, 'Não foi possível autenticar.') };
    }
    try {
        const session = await resolveProfileSession(data.user.id, data.user.email || email);
        return { session };
    }
    catch (err) {
        return { error: toFriendlySupabaseError(err, 'Erro ao carregar perfil da empresa.') };
    }
}
async function signUpWithSupabase(payload) {
    const email = payload.email.trim().toLowerCase();
    const companyName = payload.companyName.trim();
    const ownerName = payload.ownerName.trim() || companyName;
    const password = payload.password.trim();
    if (!companyName || !email || password.length < 6) {
        return {
            error: 'Preencha empresa, e-mail válido e senha com no mínimo 6 caracteres.',
        };
    }
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: {
            data: {
                company_name: companyName,
                owner_name: ownerName,
            },
        },
    });
    if (error) {
        return { error: toFriendlySupabaseError(error, 'Não foi possível criar a conta.') };
    }
    if (!data.session && data.user) {
        // Attempt immediate sign-in in case auto-confirm completed asynchronously
        const retry = await sb.auth.signInWithPassword({ email, password });
        if (retry.data?.session && retry.data?.user) {
            const session = await resolveProfileSession(retry.data.user.id, email);
            return { session };
        }
        return {
            needsEmailConfirmation: true,
            error: 'Conta criada! Verifique sua caixa de entrada para confirmar o e-mail e fazer login.',
        };
    }
    if (data.user) {
        try {
            const session = await resolveProfileSession(data.user.id, email);
            return { session };
        }
        catch (err) {
            return { error: toFriendlySupabaseError(err, 'Conta criada, mas perfil não carregou.') };
        }
    }
    return { error: 'Não foi possível concluir o cadastro.' };
}
async function signOutSupabase() {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    await sb.auth.signOut();
}
async function loadCompanyDatabaseFromSupabase(empresaId, role) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const [companiesRes, ordersRes, deliveriesRes, returnsRes, stockRes, stockMovRes, notasRes, notaItensRes, despesasRes, providersRes, payrollRes, investmentsRes, perfisRes,] = await Promise.all([
        sb
            .from('clientes_empresas')
            .select('*')
            .eq('empresa_id', empresaId)
            .is('deleted_at', null)
            .order('created_at', { ascending: false }),
        sb
            .from('ordens_servico')
            .select('*')
            .eq('empresa_id', empresaId)
            .is('deleted_at', null)
            .order('created_at', { ascending: false }),
        sb
            .from('entregas')
            .select('*')
            .eq('empresa_id', empresaId)
            .is('deleted_at', null)
            .order('created_at', { ascending: false }),
        sb
            .from('retornos')
            .select('*')
            .eq('empresa_id', empresaId)
            .is('deleted_at', null)
            .order('created_at', { ascending: false }),
        role !== 'cliente'
            ? sb
                .from('estoque_itens')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role !== 'cliente'
            ? sb
                .from('estoque_movimentacoes')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false })
                .limit(100)
            : Promise.resolve({ data: [], error: null }),
        role !== 'cliente'
            ? sb
                .from('notas')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('numero', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role !== 'cliente'
            ? sb
                .from('nota_itens')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
            : Promise.resolve({ data: [], error: null }),
        role === 'admin'
            ? sb
                .from('despesas')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('data_competencia', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role === 'admin'
            ? sb
                .from('prestadores_servico')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role === 'admin'
            ? sb
                .from('funcionarios_folha')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role === 'admin'
            ? sb
                .from('investimentos')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .order('created_at', { ascending: false })
            : Promise.resolve({ data: [], error: null }),
        role === 'admin'
            ? sb
                .from('perfis')
                .select('*')
                .eq('empresa_id', empresaId)
                .is('deleted_at', null)
                .eq('ativo', true)
                .order('created_at', { ascending: true })
            : Promise.resolve({ data: [], error: null }),
    ]);
    const queryErrors = [
        ['clientes_empresas', companiesRes.error],
        ['ordens_servico', ordersRes.error],
        ['entregas', deliveriesRes.error],
        ['retornos', returnsRes.error],
        ['estoque_itens', stockRes.error],
        ['estoque_movimentacoes', stockMovRes.error],
        ['notas', notasRes.error],
        ['nota_itens', notaItensRes.error],
        ['despesas', despesasRes.error],
        ['prestadores_servico', providersRes.error],
        ['funcionarios_folha', payrollRes.error],
        ['investimentos', investmentsRes.error],
        ['perfis', perfisRes.error],
    ].filter(([, err]) => Boolean(err));
    if (queryErrors.length > 0) {
        const firstMsg = toFriendlySupabaseError(queryErrors[0][1], 'Verifique sua conexão e tente novamente.');
        throw new Error(`Falha ao carregar dados (${queryErrors.length} consulta(s)): ${firstMsg}`);
    }
    const companies = (companiesRes.data || []).map((c) => ({
        id: c.codigo_legado || c.id,
        dbUuid: c.id,
        company_id: c.empresa_id,
        corporateName: c.razao_social,
        cnpj: c.cnpj || '',
        phone: c.telefone || '',
        contactName: c.contato_nome || '',
        city: c.cidade || undefined,
    }));
    const orders = (ordersRes.data || []).map((o) => ({
        id: o.numero_os,
        dbUuid: o.id,
        company_id: o.empresa_id,
        companyId: o.cliente_codigo_legado || o.cliente_empresa_id || '',
        companyUuid: o.cliente_empresa_id || undefined,
        companyName: o.cliente_nome,
        companyPhone: o.cliente_telefone || '',
        toolDescription: o.descricao_ferramenta,
        bladeMeters: o.blade_meters != null ? Number(o.blade_meters) : undefined,
        woodMm: o.wood_mm || undefined,
        amount: Number(o.valor) || 0,
        paymentModality: o.forma_pagamento,
        paymentStatus: o.status_pagamento,
        stage: o.etapa,
        stageUpdatedAt: o.etapa_atualizada_em || '',
        stageHistory: Array.isArray(o.historico_etapas) ? o.historico_etapas : [],
        version: Number(o.version) || 1,
        updatedAt: o.updated_at || o.created_at,
        createdAt: String(o.created_at || '').slice(0, 10),
        dueDate: String(o.data_vencimento || '').slice(0, 10),
        paidAt: o.data_pagamento ? String(o.data_pagamento).slice(0, 10) : undefined,
    }));
    const deliveries = (deliveriesRes.data || []).map((d) => ({
        id: d.codigo_legado || d.id,
        dbUuid: d.id,
        company_id: d.empresa_id,
        orderId: d.numero_os,
        toolDescription: d.descricao_ferramenta,
        companyName: d.cliente_nome,
        method: d.metodo,
        carrierOrPersonName: d.responsavel,
        dispatchedAt: d.despachado_em,
        notes: d.observacao || undefined,
    }));
    const returns = (returnsRes.data || []).map((r) => ({
        id: r.codigo_legado || r.id,
        dbUuid: r.id,
        company_id: r.empresa_id,
        orderId: r.numero_os,
        companyName: r.cliente_nome,
        toolDescription: r.descricao_ferramenta,
        reason: r.motivo,
        technicalAction: r.acao_tecnica,
        adjustmentAmount: Number(r.valor_ajuste) || 0,
        status: r.status,
        createdAt: r.data_retorno || String(r.created_at || '').slice(0, 10),
        updatedAt: String(r.updated_at || ''),
    }));
    const stock = (stockRes.data || []).map((s) => ({
        id: s.codigo_legado || s.id,
        dbUuid: s.id,
        company_id: s.empresa_id,
        category: s.categoria === 'laminas' ? 'laminas' : 'madeiras',
        name: s.nome,
        quantity: Number(s.quantidade) || 0,
        unit: s.unidade,
        minStock: Number(s.estoque_minimo) || 0,
        supplier: s.fornecedor || 'Não informado',
        unitCost: Number(s.custo_unitario) || 0,
        entryDate: String(s.data_entrada || '').slice(0, 10),
        updatedAt: String(s.updated_at || ''),
    }));
    const stockMovements = (stockMovRes.data || []).map((m) => ({
        id: m.id,
        empresa_id: m.empresa_id,
        stockItemUuid: m.estoque_item_id,
        itemCode: m.item_codigo || '',
        itemName: m.item_nome,
        category: m.categoria === 'laminas' ? 'laminas' : 'madeiras',
        unit: m.unidade || 'un',
        type: m.tipo,
        quantity: Number(m.quantidade) || 0,
        previousBalance: Number(m.saldo_anterior) || 0,
        newBalance: Number(m.saldo_posterior) || 0,
        actorName: m.responsavel_nome || 'Equipe',
        note: m.observacao || undefined,
        revertedAt: m.estornado_em || null,
        createdAt: m.created_at || '',
    }));
    const itemsByNota = new Map();
    for (const row of notaItensRes.data || []) {
        const arr = itemsByNota.get(row.nota_id) || [];
        arr.push({
            id: row.id,
            descricao: row.descricao,
            quantidade: Number(row.quantidade) || 1,
            precoUnitario: Number(row.preco_unitario) || 0,
            total: Number(row.total) || 0,
        });
        itemsByNota.set(row.nota_id, arr);
    }
    const notas = (notasRes.data || []).map((n) => ({
        id: n.id,
        company_id: n.empresa_id,
        numero: Number(n.numero) || 1,
        data: String(n.data || '').slice(0, 10),
        dataSaida: n.data_saida ? String(n.data_saida).slice(0, 10) : undefined,
        empresaId: n.cliente_empresa_id || undefined,
        clienteNome: n.cliente_nome,
        cnpj: n.cnpj || '',
        inscricao: n.inscricao || undefined,
        contato: n.contato || '',
        endereco: n.endereco || undefined,
        entreguePor: n.entregue_por || undefined,
        osId: n.os_numero || undefined,
        status: n.status,
        items: itemsByNota.get(n.id) || [],
        total: Number(n.total) || 0,
        criadoPor: n.criado_por || '',
        criadoEm: n.created_at || '',
    }));
    const despesas = (despesasRes.data || []).map((d) => ({
        id: d.id,
        empresa_id: d.empresa_id,
        categoria: d.categoria,
        descricao: d.descricao || '',
        valor: (0, financeEngine_1.roundCurrencyBRL)(Number(d.valor) || 0),
        data_competencia: String(d.data_competencia || '').slice(0, 10),
        data_vencimento: d.data_vencimento ? String(d.data_vencimento).slice(0, 10) : undefined,
        data_pagamento: d.data_pagamento ? String(d.data_pagamento).slice(0, 10) : undefined,
        status: d.status,
        forma_pagamento: d.forma_pagamento,
        fornecedor: d.fornecedor || undefined,
        observacao: d.observacao || undefined,
        created_by: d.created_by,
        updated_by: d.updated_by,
        created_at: d.created_at,
        updated_at: d.updated_at,
        deleted_at: d.deleted_at,
    }));
    const serviceProviders = (providersRes.data || []).map((p) => ({
        id: p.codigo_legado || p.id,
        dbUuid: p.id,
        company_id: p.empresa_id,
        name: p.nome,
        service: p.servico,
        amount: Number(p.valor) || 0,
        paymentModality: fromExpensePayment(p.forma_pagamento),
        dueDate: String(p.data_vencimento || '').slice(0, 10),
        status: p.status,
        updatedAt: String(p.updated_at || ''),
    }));
    const payrollEmployees = (payrollRes.data || []).map((e) => ({
        id: e.codigo_legado || e.id,
        dbUuid: e.id,
        company_id: e.empresa_id,
        name: e.nome,
        roleTitle: e.cargo,
        salary: Number(e.salario) || 0,
        admissionDate: String(e.data_admissao || '').slice(0, 10),
        updatedAt: String(e.updated_at || ''),
    }));
    const investments = (investmentsRes.data || []).map((i) => ({
        id: i.codigo_legado || i.id,
        dbUuid: i.id,
        company_id: i.empresa_id,
        assetName: i.nome_ativo,
        description: i.descricao || undefined,
        assetType: (0, financeEngine_1.normalizeInvestmentType)(i.categoria || i.tipo_ativo),
        appliedDate: String(i.data_aplicacao || '').slice(0, 10),
        investedAmount: Number(i.valor_aplicado) || 0,
        currentAmount: Number(i.valor_atual) || 0,
        updatedAt: String(i.updated_at || ''),
    }));
    const employees = (perfisRes.data || []).map((pf) => ({
        id: pf.id,
        company_id: pf.empresa_id,
        companyName: '',
        ownerName: pf.nome,
        email: pf.email,
        password: '',
        role: pf.role,
        jobTitle: pf.cargo || '',
        createdAt: String(pf.created_at || '').slice(0, 10),
    }));
    const noteSequence = notas.reduce((mx, n) => Math.max(mx, Number(n.numero) || 0), 0);
    return {
        version: 6,
        company_id: empresaId,
        companies,
        orders,
        deliveries,
        returns,
        stock,
        stockMovements,
        notas,
        noteSequence,
        despesas,
        expenses: [],
        serviceProviders,
        payrollEmployees,
        investments,
        employees,
    };
}
// ============================================================================
// Direct CRUD Operations to Supabase (Soft Delete + Audit Triggers)
// ============================================================================
async function dbCreateCompany(empresaId, codigoLegado, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const id = generateUuid();
    const { data, error } = await sb
        .from('clientes_empresas')
        .insert({
        id,
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        razao_social: payload.corporateName,
        cnpj: payload.cnpj,
        telefone: payload.phone,
        contato_nome: payload.contactName,
        cidade: payload.city || null,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao cadastrar empresa cliente.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        corporateName: data.razao_social,
        cnpj: data.cnpj,
        phone: data.telefone,
        contactName: data.contato_nome,
        city: data.cidade || undefined,
    };
}
async function dbSoftDeleteCompany(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('clientes_empresas')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir empresa cliente.'));
}
async function dbBulkSoftDeleteOrders(empresaId, dbUuids) {
    if (dbUuids.length === 0)
        return;
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('ordens_servico')
        .update({ deleted_at: new Date().toISOString() })
        .eq('empresa_id', empresaId)
        .in('id', dbUuids)
        .is('deleted_at', null);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir ordens vinculadas.'));
}
async function dbBulkSoftDeleteDeliveries(empresaId, dbUuids) {
    if (dbUuids.length === 0)
        return;
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('entregas')
        .update({ deleted_at: new Date().toISOString() })
        .eq('empresa_id', empresaId)
        .in('id', dbUuids)
        .is('deleted_at', null);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir entregas vinculadas.'));
}
async function dbBulkSoftDeleteReturns(empresaId, dbUuids) {
    if (dbUuids.length === 0)
        return;
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('retornos')
        .update({ deleted_at: new Date().toISOString() })
        .eq('empresa_id', empresaId)
        .in('id', dbUuids)
        .is('deleted_at', null);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir retornos vinculados.'));
}
async function dbCreateOrder(empresaId, numeroOs, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const today = (0, financeEngine_1.toISODate)();
    const days = financeEngine_1.PAYMENT_MODALITY_META[payload.paymentModality]?.defaultDays ?? 30;
    // Regra 5.1: Toda OS nasce obrigatoriamente como "Não Pago", independentemente
    // da forma de pagamento selecionada. Só muda para "Pago" ao clicar em "Marcar como pago".
    const payStatus = 'nao_pago';
    const dueDate = (0, financeEngine_1.addDays)(today, days);
    const paidAt = null;
    const hist = [{ stage: payload.stage, timestamp: payload.stageUpdatedAt }];
    const { data, error } = await sb
        .from('ordens_servico')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        numero_os: numeroOs || 'AUTO',
        cliente_empresa_id: payload.companyUuid || null,
        cliente_codigo_legado: payload.companyId,
        cliente_nome: payload.companyName,
        cliente_telefone: payload.companyPhone,
        descricao_ferramenta: payload.toolDescription,
        valor: (0, financeEngine_1.roundCurrencyBRL)(payload.amount),
        forma_pagamento: payload.paymentModality,
        status_pagamento: payStatus,
        etapa: payload.stage,
        etapa_atualizada_em: payload.stageUpdatedAt,
        historico_etapas: hist,
        version: 1,
        data_vencimento: dueDate,
        data_pagamento: paidAt,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao registrar Ordem de Serviço.'));
    return {
        id: data.numero_os,
        dbUuid: data.id,
        company_id: data.empresa_id,
        companyId: data.cliente_codigo_legado || payload.companyId,
        companyUuid: data.cliente_empresa_id || undefined,
        companyName: data.cliente_nome,
        companyPhone: data.cliente_telefone,
        toolDescription: data.descricao_ferramenta,
        amount: Number(data.valor) || 0,
        paymentModality: data.forma_pagamento,
        paymentStatus: data.status_pagamento,
        stage: data.etapa,
        stageUpdatedAt: data.etapa_atualizada_em,
        stageHistory: data.historico_etapas || hist,
        version: Number(data.version) || 1,
        updatedAt: data.updated_at,
        createdAt: String(data.created_at || today).slice(0, 10),
        dueDate: String(data.data_vencimento || dueDate).slice(0, 10),
        paidAt: data.data_pagamento ? String(data.data_pagamento).slice(0, 10) : undefined,
    };
}
async function dbMoveOrderStage(ordemUuid, targetStage, stamp) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb.rpc('mover_faca_v2', {
        p_ordem_id: ordemUuid,
        p_etapa: targetStage,
        p_etapa_atualizada_em: stamp,
    });
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao mover faca na esteira.'));
    return {
        version: Number(data?.version) || 1,
        updatedAt: data?.updated_at || new Date().toISOString(),
    };
}
async function dbUpdateOrderPayment(empresaId, ordemUuid, updates) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('ordens_servico')
        .update({
        status_pagamento: updates.status_pagamento,
        data_pagamento: updates.data_pagamento ?? null,
        ...(updates.data_vencimento ? { data_vencimento: updates.data_vencimento } : {}),
        version: updates.version,
    })
        .eq('id', ordemUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar pagamento da OS.'));
}
async function dbSoftDeleteOrder(empresaId, ordemUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('ordens_servico')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', ordemUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir Ordem de Serviço.'));
}
async function dbCreateDelivery(empresaId, codigoLegado, payload, ordemUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('entregas')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        ordem_id: ordemUuid || null,
        numero_os: payload.orderId,
        cliente_nome: payload.companyName,
        descricao_ferramenta: payload.toolDescription,
        metodo: payload.method,
        responsavel: payload.carrierOrPersonName,
        despachado_em: payload.dispatchedAt,
        observacao: payload.notes || null,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao registrar entrega.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        orderId: data.numero_os,
        toolDescription: data.descricao_ferramenta,
        companyName: data.cliente_nome,
        method: data.metodo,
        carrierOrPersonName: data.responsavel,
        dispatchedAt: data.despachado_em,
        notes: data.observacao || undefined,
    };
}
async function dbSoftDeleteDelivery(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('entregas')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir entrega.'));
}
async function dbCreateReturn(empresaId, codigoLegado, payload, ordemUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('retornos')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        ordem_id: ordemUuid || null,
        numero_os: payload.orderId,
        cliente_nome: payload.companyName,
        descricao_ferramenta: payload.toolDescription,
        motivo: payload.reason,
        acao_tecnica: payload.technicalAction,
        valor_ajuste: (0, financeEngine_1.roundCurrencyBRL)(payload.adjustmentAmount),
        status: payload.status,
        data_retorno: payload.createdAt,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao registrar retorno.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        orderId: data.numero_os,
        companyName: data.cliente_nome,
        toolDescription: data.descricao_ferramenta,
        reason: data.motivo,
        technicalAction: data.acao_tecnica,
        adjustmentAmount: Number(data.valor_ajuste) || 0,
        status: data.status,
        createdAt: data.data_retorno,
        updatedAt: data.updated_at,
    };
}
async function dbUpdateReturnStatus(empresaId, dbUuid, status) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('retornos')
        .update({ status })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar status do retorno.'));
}
async function dbSoftDeleteReturn(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('retornos')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir retorno.'));
}
// ESTOQUE (preserva todas as regras de negócio; persistência real + soft delete no Supabase)
async function dbCreateStockItem(empresaId, codigoLegado, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('estoque_itens')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        categoria: payload.category,
        nome: payload.name,
        quantidade: payload.quantity,
        unidade: payload.unit,
        estoque_minimo: payload.minStock,
        fornecedor: payload.supplier,
        custo_unitario: payload.unitCost,
        data_entrada: payload.entryDate || (0, financeEngine_1.toISODate)(),
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao cadastrar item de estoque.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        category: data.categoria,
        name: data.nome,
        quantity: Number(data.quantidade) || 0,
        unit: data.unidade,
        minStock: Number(data.estoque_minimo) || 0,
        supplier: data.fornecedor,
        unitCost: Number(data.custo_unitario) || 0,
        entryDate: String(data.data_entrada || '').slice(0, 10),
        updatedAt: data.updated_at,
    };
}
async function dbUpdateStockItem(empresaId, dbUuid, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('estoque_itens')
        .update({
        categoria: payload.category,
        nome: payload.name,
        quantidade: payload.quantity,
        unidade: payload.unit,
        estoque_minimo: payload.minStock,
        fornecedor: payload.supplier,
        custo_unitario: payload.unitCost,
        data_entrada: payload.entryDate || (0, financeEngine_1.toISODate)(),
    })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar item de estoque.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        category: data.categoria,
        name: data.nome,
        quantity: Number(data.quantidade) || 0,
        unit: data.unidade,
        minStock: Number(data.estoque_minimo) || 0,
        supplier: data.fornecedor,
        unitCost: Number(data.custo_unitario) || 0,
        entryDate: String(data.data_entrada || '').slice(0, 10),
        updatedAt: data.updated_at,
    };
}
async function dbSoftDeleteStockItem(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('estoque_itens')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir item de estoque.'));
}
async function dbRegisterStockMovement(empresaId, item, delta, actorName, note) {
    if (!item.dbUuid) {
        throw new Error('Item de estoque sem identificador no Supabase.');
    }
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const previousBalance = Number(item.quantity) || 0;
    const nextBalance = Math.max(0, Number((previousBalance + delta).toFixed(2)));
    const movedQty = Math.abs(Number((nextBalance - previousBalance).toFixed(2)));
    if (movedQty <= 0) {
        throw new Error('Saldo já está zerado para este insumo.');
    }
    const movementType = delta < 0 ? 'consumo' : 'reposicao';
    const { data: stockRow, error: upErr } = await sb
        .from('estoque_itens')
        .update({ quantidade: nextBalance })
        .eq('id', item.dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (upErr)
        throw new Error(toFriendlySupabaseError(upErr, 'Erro ao atualizar saldo do estoque.'));
    const { data: movRow, error: movErr } = await sb
        .from('estoque_movimentacoes')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        estoque_item_id: item.dbUuid,
        item_codigo: item.id,
        item_nome: item.name,
        categoria: item.category,
        unidade: item.unit,
        tipo: movementType,
        quantidade: movedQty,
        saldo_anterior: previousBalance,
        saldo_posterior: nextBalance,
        responsavel_nome: actorName,
        observacao: note || null,
    })
        .select('*')
        .single();
    if (movErr)
        throw new Error(toFriendlySupabaseError(movErr, 'Erro ao registrar movimentação de estoque.'));
    return {
        updatedItem: {
            id: stockRow.codigo_legado || stockRow.id,
            dbUuid: stockRow.id,
            company_id: stockRow.empresa_id,
            category: stockRow.categoria === 'laminas' ? 'laminas' : 'madeiras',
            name: stockRow.nome,
            quantity: Number(stockRow.quantidade) || 0,
            unit: stockRow.unidade,
            minStock: Number(stockRow.estoque_minimo) || 0,
            supplier: stockRow.fornecedor,
            unitCost: Number(stockRow.custo_unitario) || 0,
            entryDate: String(stockRow.data_entrada || '').slice(0, 10),
            updatedAt: stockRow.updated_at,
        },
        movement: {
            id: movRow.id,
            empresa_id: movRow.empresa_id,
            stockItemUuid: movRow.estoque_item_id,
            itemCode: movRow.item_codigo || item.id,
            itemName: movRow.item_nome,
            category: (movRow.categoria === 'laminas' ? 'laminas' : 'madeiras'),
            unit: movRow.unidade,
            type: movRow.tipo,
            quantity: Number(movRow.quantidade) || movedQty,
            previousBalance: Number(movRow.saldo_anterior) || previousBalance,
            newBalance: Number(movRow.saldo_posterior) || nextBalance,
            actorName: movRow.responsavel_nome || actorName,
            note: movRow.observacao || undefined,
            revertedAt: movRow.estornado_em || null,
            createdAt: movRow.created_at,
        },
    };
}
async function dbRevertStockMovement(empresaId, movement, currentItem, actorName) {
    if (!currentItem.dbUuid) {
        throw new Error('Item de estoque não localizado para estorno.');
    }
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const prevBalance = Number(currentItem.quantity) || 0;
    const reverseDelta = movement.type === 'consumo' ? movement.quantity : -movement.quantity;
    const nextBalance = Math.max(0, Number((prevBalance + reverseDelta).toFixed(2)));
    const nowIso = new Date().toISOString();
    const { data: stockRow, error: upErr } = await sb
        .from('estoque_itens')
        .update({ quantidade: nextBalance })
        .eq('id', currentItem.dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (upErr)
        throw new Error(toFriendlySupabaseError(upErr, 'Erro ao estornar saldo do estoque.'));
    const { error: markErr } = await sb
        .from('estoque_movimentacoes')
        .update({ estornado_em: nowIso })
        .eq('id', movement.id)
        .eq('empresa_id', empresaId);
    if (markErr)
        throw new Error(toFriendlySupabaseError(markErr, 'Erro ao marcar movimentação como estornada.'));
    const { data: estRow, error: estErr } = await sb
        .from('estoque_movimentacoes')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        estoque_item_id: currentItem.dbUuid,
        item_codigo: currentItem.id,
        item_nome: currentItem.name,
        categoria: currentItem.category,
        unidade: currentItem.unit,
        tipo: 'estorno',
        quantidade: movement.quantity,
        saldo_anterior: prevBalance,
        saldo_posterior: nextBalance,
        responsavel_nome: actorName,
        observacao: `Estorno de ${movement.type === 'consumo' ? 'baixa' : 'reposição'}`,
    })
        .select('*')
        .single();
    if (estErr)
        throw new Error(toFriendlySupabaseError(estErr, 'Erro ao registrar estorno de estoque.'));
    return {
        updatedItem: {
            id: stockRow.codigo_legado || stockRow.id,
            dbUuid: stockRow.id,
            company_id: stockRow.empresa_id,
            category: stockRow.categoria === 'laminas' ? 'laminas' : 'madeiras',
            name: stockRow.nome,
            quantity: Number(stockRow.quantidade) || 0,
            unit: stockRow.unidade,
            minStock: Number(stockRow.estoque_minimo) || 0,
            supplier: stockRow.fornecedor,
            unitCost: Number(stockRow.custo_unitario) || 0,
            entryDate: String(stockRow.data_entrada || '').slice(0, 10),
            updatedAt: stockRow.updated_at,
        },
        revertedAt: nowIso,
        estornoMovement: {
            id: estRow.id,
            empresa_id: estRow.empresa_id,
            stockItemUuid: estRow.estoque_item_id,
            itemCode: estRow.item_codigo || currentItem.id,
            itemName: estRow.item_nome,
            category: (estRow.categoria === 'laminas' ? 'laminas' : 'madeiras'),
            unit: estRow.unidade,
            type: 'estorno',
            quantity: Number(estRow.quantidade) || movement.quantity,
            previousBalance: Number(estRow.saldo_anterior) || prevBalance,
            newBalance: Number(estRow.saldo_posterior) || nextBalance,
            actorName: estRow.responsavel_nome || actorName,
            note: estRow.observacao || undefined,
            revertedAt: null,
            createdAt: estRow.created_at,
        },
    };
}
// NOTAS (server-side total + soft delete)
async function dbSaveNote(empresaId, actorName, payload, editingId) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const noteId = editingId || generateUuid();
    if (editingId) {
        const { error: upErr } = await sb
            .from('notas')
            .update({
            data: payload.data,
            data_saida: payload.dataSaida || null,
            cliente_nome: payload.clienteNome,
            cnpj: payload.cnpj || '',
            inscricao: payload.inscricao || null,
            contato: payload.contato || '',
            endereco: payload.endereco || null,
            entregue_por: payload.entreguePor || null,
            os_numero: payload.osId || null,
            status: payload.status,
        })
            .eq('id', editingId)
            .eq('empresa_id', empresaId);
        if (upErr)
            throw new Error(toFriendlySupabaseError(upErr, 'Erro ao atualizar nota/pedido.'));
        // Soft-delete previous items cleanly
        const { error: delItemsErr } = await sb
            .from('nota_itens')
            .update({ deleted_at: new Date().toISOString() })
            .eq('nota_id', editingId)
            .eq('empresa_id', empresaId)
            .is('deleted_at', null);
        if (delItemsErr) {
            throw new Error(toFriendlySupabaseError(delItemsErr, 'Erro ao atualizar itens da nota.'));
        }
    }
    else {
        const { error: insErr } = await sb.from('notas').insert({
            id: noteId,
            empresa_id: empresaId,
            numero: 0, // assigned atomically per company by trg_notas_prepare
            data: payload.data,
            data_saida: payload.dataSaida || null,
            cliente_nome: payload.clienteNome,
            cnpj: payload.cnpj || '',
            inscricao: payload.inscricao || null,
            contato: payload.contato || '',
            endereco: payload.endereco || null,
            entregue_por: payload.entreguePor || null,
            os_numero: payload.osId || null,
            status: payload.status,
            criado_por: actorName,
        });
        if (insErr)
            throw new Error(toFriendlySupabaseError(insErr, 'Erro ao criar nota/pedido.'));
    }
    const itemRows = payload.items.map((it) => ({
        id: generateUuid(),
        empresa_id: empresaId,
        nota_id: noteId,
        descricao: it.descricao,
        quantidade: it.quantidade,
        preco_unitario: it.precoUnitario,
    }));
    if (itemRows.length > 0) {
        const { error: itemErr } = await sb.from('nota_itens').insert(itemRows);
        if (itemErr)
            throw new Error(toFriendlySupabaseError(itemErr, 'Erro ao salvar itens da nota.'));
    }
    const { data: savedNote, error: fetchErr } = await sb
        .from('notas')
        .select('*')
        .eq('id', noteId)
        .eq('empresa_id', empresaId)
        .single();
    if (fetchErr || !savedNote) {
        throw new Error(toFriendlySupabaseError(fetchErr, 'Erro ao recarregar nota salva.'));
    }
    const { data: savedItems, error: savedItemsErr } = await sb
        .from('nota_itens')
        .select('*')
        .eq('nota_id', noteId)
        .eq('empresa_id', empresaId)
        .is('deleted_at', null);
    if (savedItemsErr) {
        throw new Error(toFriendlySupabaseError(savedItemsErr, 'Erro ao recarregar itens da nota.'));
    }
    return {
        id: savedNote.id,
        company_id: savedNote.empresa_id,
        numero: Number(savedNote.numero),
        data: String(savedNote.data).slice(0, 10),
        dataSaida: savedNote.data_saida ? String(savedNote.data_saida).slice(0, 10) : undefined,
        empresaId: savedNote.cliente_empresa_id || undefined,
        clienteNome: savedNote.cliente_nome,
        cnpj: savedNote.cnpj || '',
        inscricao: savedNote.inscricao || undefined,
        contato: savedNote.contato || '',
        endereco: savedNote.endereco || undefined,
        entreguePor: savedNote.entregue_por || undefined,
        osId: savedNote.os_numero || undefined,
        status: savedNote.status,
        items: (savedItems || []).map((it) => ({
            id: it.id,
            descricao: it.descricao,
            quantidade: Number(it.quantidade),
            precoUnitario: Number(it.preco_unitario),
            total: Number(it.total),
        })),
        total: Number(savedNote.total) || 0,
        criadoPor: savedNote.criado_por || actorName,
        criadoEm: savedNote.created_at,
    };
}
async function dbUpdateNoteStatus(empresaId, noteId, status) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('notas')
        .update({ status })
        .eq('id', noteId)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar status da nota.'));
}
async function dbSoftDeleteNote(empresaId, noteId) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const stamp = new Date().toISOString();
    const { error: itemsErr } = await sb
        .from('nota_itens')
        .update({ deleted_at: stamp })
        .eq('nota_id', noteId)
        .eq('empresa_id', empresaId)
        .is('deleted_at', null);
    if (itemsErr)
        throw new Error(toFriendlySupabaseError(itemsErr, 'Erro ao excluir itens da nota.'));
    const { error } = await sb
        .from('notas')
        .update({ deleted_at: stamp })
        .eq('id', noteId)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir nota/pedido.'));
}
async function dbCreateExpense(empresaId, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const roundedVal = (0, financeEngine_1.roundCurrencyBRL)(payload.valor);
    const { data, error } = await sb
        .from('despesas')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        categoria: payload.categoria,
        descricao: payload.descricao.trim() || null,
        valor: roundedVal,
        data_competencia: payload.data_competencia,
        data_vencimento: payload.data_vencimento || null,
        data_pagamento: payload.data_pagamento || null,
        status: payload.status,
        forma_pagamento: payload.forma_pagamento,
        fornecedor: payload.fornecedor?.trim() || null,
        observacao: payload.observacao?.trim() || null,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao cadastrar despesa.'));
    return {
        ...data,
        descricao: data.descricao || '',
        valor: (0, financeEngine_1.roundCurrencyBRL)(Number(data.valor)),
        data_competencia: String(data.data_competencia).slice(0, 10),
        data_vencimento: data.data_vencimento ? String(data.data_vencimento).slice(0, 10) : undefined,
        data_pagamento: data.data_pagamento ? String(data.data_pagamento).slice(0, 10) : undefined,
        fornecedor: data.fornecedor || undefined,
        observacao: data.observacao || undefined,
    };
}
async function dbUpdateExpense(empresaId, expenseId, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const roundedVal = (0, financeEngine_1.roundCurrencyBRL)(payload.valor);
    const { data, error } = await sb
        .from('despesas')
        .update({
        categoria: payload.categoria,
        descricao: payload.descricao.trim() || null,
        valor: roundedVal,
        data_competencia: payload.data_competencia,
        data_vencimento: payload.data_vencimento || null,
        data_pagamento: payload.data_pagamento || null,
        status: payload.status,
        forma_pagamento: payload.forma_pagamento,
        fornecedor: payload.fornecedor?.trim() || null,
        observacao: payload.observacao?.trim() || null,
    })
        .eq('id', expenseId)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar despesa.'));
    return {
        ...data,
        descricao: data.descricao || '',
        valor: (0, financeEngine_1.roundCurrencyBRL)(Number(data.valor)),
        data_competencia: String(data.data_competencia).slice(0, 10),
        data_vencimento: data.data_vencimento ? String(data.data_vencimento).slice(0, 10) : undefined,
        data_pagamento: data.data_pagamento ? String(data.data_pagamento).slice(0, 10) : undefined,
        fornecedor: data.fornecedor || undefined,
        observacao: data.observacao || undefined,
    };
}
async function dbSoftDeleteExpense(empresaId, expenseId) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('despesas')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', expenseId)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir despesa.'));
}
// PRESTADORES, FUNCIONÁRIOS FOLHA, INVESTIMENTOS
async function dbCreateProvider(empresaId, codigoLegado, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('prestadores_servico')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        nome: payload.name,
        servico: payload.service,
        valor: (0, financeEngine_1.roundCurrencyBRL)(payload.amount),
        forma_pagamento: toExpensePayment(payload.paymentModality),
        data_vencimento: payload.dueDate || (0, financeEngine_1.toISODate)(),
        status: payload.status,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao cadastrar prestador.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        name: data.nome,
        service: data.servico,
        amount: Number(data.valor),
        paymentModality: fromExpensePayment(data.forma_pagamento),
        dueDate: String(data.data_vencimento).slice(0, 10),
        status: data.status,
        updatedAt: data.updated_at,
    };
}
async function dbUpdateProvider(empresaId, dbUuid, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('prestadores_servico')
        .update({
        nome: payload.name,
        servico: payload.service,
        valor: (0, financeEngine_1.roundCurrencyBRL)(payload.amount),
        forma_pagamento: toExpensePayment(payload.paymentModality),
        data_vencimento: payload.dueDate || (0, financeEngine_1.toISODate)(),
        status: payload.status,
    })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar prestador.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        name: data.nome,
        service: data.servico,
        amount: Number(data.valor),
        paymentModality: fromExpensePayment(data.forma_pagamento),
        dueDate: String(data.data_vencimento).slice(0, 10),
        status: data.status,
        updatedAt: data.updated_at,
    };
}
async function dbSoftDeleteProvider(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('prestadores_servico')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir prestador.'));
}
async function dbCreatePayrollEmployee(empresaId, codigoLegado, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('funcionarios_folha')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        nome: payload.name,
        cargo: payload.roleTitle,
        salario: (0, financeEngine_1.roundCurrencyBRL)(payload.salary),
        data_admissao: payload.admissionDate || (0, financeEngine_1.toISODate)(),
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao cadastrar colaborador na folha.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        name: data.nome,
        roleTitle: data.cargo,
        salary: Number(data.salario),
        admissionDate: String(data.data_admissao).slice(0, 10),
        updatedAt: data.updated_at,
    };
}
async function dbUpdatePayrollEmployee(empresaId, dbUuid, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('funcionarios_folha')
        .update({
        nome: payload.name,
        cargo: payload.roleTitle,
        salario: (0, financeEngine_1.roundCurrencyBRL)(payload.salary),
        data_admissao: payload.admissionDate || (0, financeEngine_1.toISODate)(),
    })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar colaborador na folha.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        name: data.nome,
        roleTitle: data.cargo,
        salary: Number(data.salario),
        admissionDate: String(data.data_admissao).slice(0, 10),
        updatedAt: data.updated_at,
    };
}
async function dbSoftDeletePayrollEmployee(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('funcionarios_folha')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir colaborador da folha.'));
}
async function dbCreateInvestment(empresaId, codigoLegado, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const normalizedCat = (0, financeEngine_1.normalizeInvestmentType)(payload.assetType);
    const appliedVal = (0, financeEngine_1.roundCurrencyBRL)(payload.investedAmount);
    const currentVal = (0, financeEngine_1.roundCurrencyBRL)(payload.currentAmount > 0 ? payload.currentAmount : payload.investedAmount);
    const { data, error } = await sb
        .from('investimentos')
        .insert({
        id: generateUuid(),
        empresa_id: empresaId,
        codigo_legado: codigoLegado,
        nome_ativo: payload.assetName,
        descricao: payload.description?.trim() || null,
        tipo_ativo: 'outro',
        categoria: normalizedCat,
        data_aplicacao: payload.appliedDate || (0, financeEngine_1.toISODate)(),
        valor_aplicado: appliedVal,
        valor_atual: currentVal,
    })
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao registrar investimento.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        assetName: data.nome_ativo,
        description: data.descricao || undefined,
        assetType: (0, financeEngine_1.normalizeInvestmentType)(data.categoria || data.tipo_ativo),
        appliedDate: String(data.data_aplicacao).slice(0, 10),
        investedAmount: Number(data.valor_aplicado),
        currentAmount: Number(data.valor_atual),
        updatedAt: data.updated_at,
    };
}
async function dbUpdateInvestment(empresaId, dbUuid, payload) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const normalizedCat = (0, financeEngine_1.normalizeInvestmentType)(payload.assetType);
    const appliedVal = (0, financeEngine_1.roundCurrencyBRL)(payload.investedAmount);
    const currentVal = (0, financeEngine_1.roundCurrencyBRL)(payload.currentAmount > 0 ? payload.currentAmount : payload.investedAmount);
    const { data, error } = await sb
        .from('investimentos')
        .update({
        nome_ativo: payload.assetName,
        descricao: payload.description?.trim() || null,
        tipo_ativo: 'outro',
        categoria: normalizedCat,
        data_aplicacao: payload.appliedDate || (0, financeEngine_1.toISODate)(),
        valor_aplicado: appliedVal,
        valor_atual: currentVal,
    })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId)
        .select('*')
        .single();
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar investimento.'));
    return {
        id: data.codigo_legado || data.id,
        dbUuid: data.id,
        company_id: data.empresa_id,
        assetName: data.nome_ativo,
        description: data.descricao || undefined,
        assetType: (0, financeEngine_1.normalizeInvestmentType)(data.categoria || data.tipo_ativo),
        appliedDate: String(data.data_aplicacao).slice(0, 10),
        investedAmount: Number(data.valor_aplicado),
        currentAmount: Number(data.valor_atual),
        updatedAt: data.updated_at,
    };
}
async function dbSoftDeleteInvestment(empresaId, dbUuid) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('investimentos')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', dbUuid)
        .eq('empresa_id', empresaId);
    if (error)
        throw new Error(toFriendlySupabaseError(error, 'Erro ao excluir investimento.'));
}
// ============================================================================
// EQUIPE (Edge Function manage-team - sem service_role no frontend)
// ============================================================================
async function invokeManageTeam(body) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data: sessionData } = await sb.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token)
        throw new Error('Sessão expirada. Entre novamente.');
    const { data, error } = await sb.functions.invoke('manage-team', {
        body,
        headers: { Authorization: `Bearer ${token}` },
    });
    if (error) {
        let errMsg = error.message || 'Erro ao gerenciar equipe.';
        try {
            const ctx = error.context;
            if (ctx && typeof ctx.json === 'function') {
                const parsed = await ctx.json();
                if (parsed?.error)
                    errMsg = parsed.error;
            }
        }
        catch {
            // ignore parse fallback
        }
        throw new Error(errMsg);
    }
    if (data?.error)
        throw new Error(data.error);
    return data;
}
// ============================================================================
// CONFIGURAÇÕES & BACKUPS (Admin Only)
// ============================================================================
async function dbLoadSettingsAndBackups(empresaId) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const [cfgRes, bkpRes, logsRes] = await Promise.all([
        sb
            .from('configuracoes_empresa')
            .select('*')
            .eq('empresa_id', empresaId)
            .maybeSingle(),
        sb
            .from('backups')
            .select('id, empresa_id, tipo, schema_version, storage_path, resumo_tabelas, tamanho_bytes, sha256, criado_por, created_at, expira_em')
            .eq('empresa_id', empresaId)
            .order('created_at', { ascending: false })
            .limit(100),
        sb
            .from('backup_logs')
            .select('*')
            .eq('empresa_id', empresaId)
            .order('created_at', { ascending: false })
            .limit(50),
    ]);
    return {
        settings: {
            empresa_id: empresaId,
            retencao_diaria: cfgRes.data?.retencao_diaria ?? 30,
            retencao_mensal: cfgRes.data?.retencao_mensal ?? 12,
            backup_automatico: cfgRes.data?.backup_automatico ?? true,
            updated_at: cfgRes.data?.updated_at,
        },
        backups: (bkpRes.data || []),
        logs: (logsRes.data || []),
    };
}
async function dbUpdateCompanySettings(empresaId, updates) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data, error } = await sb
        .from('configuracoes_empresa')
        .upsert({
        empresa_id: empresaId,
        retencao_diaria: updates.retencao_diaria,
        retencao_mensal: updates.retencao_mensal,
        backup_automatico: updates.backup_automatico,
    }, { onConflict: 'empresa_id' })
        .select('*')
        .single();
    if (error) {
        throw new Error(toFriendlySupabaseError(error, 'Erro ao atualizar configurações de backup.'));
    }
    return data;
}
async function dbDismissBackupAlert(empresaId, logId) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { error } = await sb
        .from('backup_logs')
        .update({ alerta_dispensado: true })
        .eq('id', logId)
        .eq('empresa_id', empresaId);
    if (error) {
        throw new Error(toFriendlySupabaseError(error, 'Erro ao dispensar alerta de backup.'));
    }
}
async function invokeBackupEngine(body) {
    const sb = (0, supabaseClient_1.getSupabaseClient)();
    const { data: sessionData } = await sb.auth.getSession();
    const token = sessionData?.session?.access_token;
    if (!token)
        throw new Error('Sessão expirada. Faça login novamente.');
    const { data, error } = await sb.functions.invoke('backup-engine', {
        body,
        headers: { Authorization: `Bearer ${token}` },
    });
    if (error) {
        let errMsg = error.message || 'Erro no serviço de backup.';
        try {
            const ctx = error.context;
            if (ctx && typeof ctx.json === 'function') {
                const parsed = await ctx.json();
                if (parsed?.error)
                    errMsg = parsed.error;
            }
        }
        catch {
            // ignore parse fallback
        }
        throw new Error(errMsg);
    }
    if (data?.error)
        throw new Error(data.error);
    return data;
}

  },
  { dir: "./services" }
);

__moduleFactories["./services/storageAdapter"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAndImportInviteFromUrl = checkAndImportInviteFromUrl;
exports.getTenantAccounts = getTenantAccounts;
exports.saveTenantAccounts = saveTenantAccounts;
exports.getCompanyEmployees = getCompanyEmployees;
exports.registerEmployeeForCompany = registerEmployeeForCompany;
exports.updateEmployeeRoleInCompany = updateEmployeeRoleInCompany;
exports.deleteEmployeeFromCompany = deleteEmployeeFromCompany;
exports.getActiveSession = getActiveSession;
exports.saveActiveSession = saveActiveSession;
exports.clearActiveSession = clearActiveSession;
exports.authenticateTenant = authenticateTenant;
exports.registerNewTenant = registerNewTenant;
exports.loadEnterpriseDatabase = loadEnterpriseDatabase;
exports.fetchEnterpriseDatabaseFromServer = fetchEnterpriseDatabaseFromServer;
exports.authenticateTenantWithServerFallback = authenticateTenantWithServerFallback;
exports.saveEnterpriseDatabaseLocalOnly = saveEnterpriseDatabaseLocalOnly;
exports.saveEnterpriseDatabase = saveEnterpriseDatabase;
exports.moveOrderStageOnServer = moveOrderStageOnServer;
exports.getNextCompanyCode = getNextCompanyCode;
exports.getNextOrderId = getNextOrderId;
exports.getNextDeliveryId = getNextDeliveryId;
exports.getNextReturnId = getNextReturnId;
exports.getNextStockId = getNextStockId;
exports.getNextProviderId = getNextProviderId;
exports.getNextPayrollEmployeeId = getNextPayrollEmployeeId;
exports.getNextInvestmentId = getNextInvestmentId;
exports.getNextNoteNumber = getNextNoteNumber;
const seedOrders_1 = require("../data/seedOrders");
const financeEngine_1 = require("../utils/financeEngine");
const realtimeEngine_1 = require("./realtimeEngine");
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
function normalizeAccount(acc) {
    return {
        ...acc,
        id: acc.id || `USR-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
        email: acc.email.trim().toLowerCase(),
        role: acc.role === 'operador' ? 'operador' : 'admin',
        jobTitle: acc.jobTitle ||
            (acc.role === 'operador'
                ? 'Operador de Produção'
                : 'Administrador / Proprietário'),
    };
}
/**
 * Check URL for employee invite sync token (?emp_sync=...) so mobile devices can import employee credentials & RBAC role
 */
function checkAndImportInviteFromUrl() {
    if (typeof window === 'undefined')
        return;
    try {
        const params = new URLSearchParams(window.location.search);
        const encoded = params.get('emp_sync');
        if (!encoded)
            return;
        const jsonStr = decodeURIComponent(escape(window.atob(encoded)));
        const imported = JSON.parse(jsonStr);
        if (imported && imported.email && imported.company_id && imported.role) {
            const accounts = getTenantAccounts();
            const cleanEmail = imported.email.trim().toLowerCase();
            const filtered = accounts.filter((a) => a.email.trim().toLowerCase() !== cleanEmail);
            const updated = [...filtered, normalizeAccount(imported)];
            window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(updated));
            // Clean URL parameter without reloading
            const url = new URL(window.location.href);
            url.searchParams.delete('emp_sync');
            window.history.replaceState({}, '', url.toString());
        }
    }
    catch {
        // ignore invalid token
    }
}
/**
 * Load all registered SaaS tenant & employee accounts
 */
function getTenantAccounts() {
    try {
        const raw = window.localStorage.getItem(TENANTS_REGISTRY_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const existingEmails = new Set(parsed.map((t) => t.email.trim().toLowerCase()));
                const merged = parsed.map(normalizeAccount);
                for (const def of seedOrders_1.DEFAULT_TENANT_ACCOUNTS) {
                    if (!existingEmails.has(def.email.trim().toLowerCase())) {
                        merged.push(normalizeAccount(def));
                    }
                }
                return merged;
            }
        }
    }
    catch {
        // fallback
    }
    const defaults = seedOrders_1.DEFAULT_TENANT_ACCOUNTS.map(normalizeAccount);
    try {
        window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(defaults));
    }
    catch {
        // ignore
    }
    return defaults;
}
function saveTenantAccounts(accounts) {
    const normalized = accounts.map(normalizeAccount);
    try {
        window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify(normalized));
    }
    catch {
        // ignore
    }
    return normalized;
}
/**
 * Get all users/employees belonging strictly to a specific `company_id`
 */
function getCompanyEmployees(company_id) {
    const all = getTenantAccounts();
    return all.filter((acc) => acc.company_id === company_id);
}
/**
 * Register a new employee under the current Admin's `company_id`
 */
function registerEmployeeForCompany(payload) {
    const email = payload.email.trim().toLowerCase();
    const ownerName = payload.ownerName.trim();
    const password = payload.password.trim();
    const jobTitle = payload.jobTitle.trim() ||
        (payload.role === 'operador' ? 'Operador de Produção' : 'Administrador');
    if (!ownerName || !email || !password) {
        return { error: 'Preencha nome, e-mail e senha do funcionário.' };
    }
    const accounts = getTenantAccounts();
    if (accounts.some((a) => a.email.trim().toLowerCase() === email)) {
        return { error: 'Já existe um usuário cadastrado com este e-mail.' };
    }
    const companyUsers = accounts.filter((a) => a.company_id === payload.company_id);
    const nextId = `USR-${String(companyUsers.length + 1).padStart(3, '0')}`;
    const newEmployee = {
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
function updateEmployeeRoleInCompany(email, company_id, nextRole) {
    const cleanEmail = email.trim().toLowerCase();
    const accounts = getTenantAccounts();
    const updated = accounts.map((acc) => {
        if (acc.company_id === company_id &&
            acc.email.trim().toLowerCase() === cleanEmail) {
            return {
                ...acc,
                role: nextRole,
                jobTitle: nextRole === 'operador'
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
function deleteEmployeeFromCompany(email, company_id) {
    const cleanEmail = email.trim().toLowerCase();
    const accounts = getTenantAccounts();
    const updated = accounts.filter((acc) => !(acc.company_id === company_id &&
        acc.email.trim().toLowerCase() === cleanEmail));
    saveTenantAccounts(updated);
    return updated.filter((a) => a.company_id === company_id);
}
/**
 * Get current persisted session so page refresh stays logged in
 */
function getActiveSession() {
    try {
        checkAndImportInviteFromUrl();
        const raw = window.localStorage.getItem(ACTIVE_SESSION_KEY);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.company_id && parsed.companyName && parsed.email) {
            return {
                ...parsed,
                role: parsed.role === 'operador' ? 'operador' : 'admin',
            };
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
 * Authenticate a user (Admin or Operador) by email & password
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
    // Also check if any tenant database on this device has this employee inside its `employees` list
    let existingByEmail = accounts.find((acc) => acc.email.trim().toLowerCase() === email);
    if (!existingByEmail) {
        try {
            for (let i = 0; i < window.localStorage.length; i++) {
                const key = window.localStorage.key(i);
                if (key && key.startsWith('facasflow_tenant_db_')) {
                    const rawDb = window.localStorage.getItem(key);
                    if (rawDb) {
                        const parsedDb = JSON.parse(rawDb);
                        if (Array.isArray(parsedDb.employees)) {
                            const foundEmp = parsedDb.employees.find((e) => e.email.trim().toLowerCase() === email);
                            if (foundEmp) {
                                existingByEmail = normalizeAccount(foundEmp);
                                saveTenantAccounts([...accounts, existingByEmail]);
                                break;
                            }
                        }
                    }
                }
            }
        }
        catch {
            // ignore
        }
    }
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
        const formattedName = localPrefix.charAt(0).toUpperCase() + localPrefix.slice(1);
        const syncedAccount = {
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
        const session = {
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
        return { error: 'Já existe uma conta cadastrada com este e-mail.' };
    }
    const company_id = buildDeterministicCompanyId(email);
    const newAccount = {
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
    const initialDb = (0, seedOrders_1.createEnterpriseSeedDatabase)(company_id);
    initialDb.employees = [newAccount];
    saveEnterpriseDatabase(initialDb);
    const session = {
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
function normalizeDb(db, company_id) {
    const registryEmployees = getCompanyEmployees(company_id);
    const dbEmployees = Array.isArray(db.employees) ? db.employees : [];
    // Merge employees from registry and db so Realtime sync propagates employee list too
    const mergedEmpMap = new Map();
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
            window.localStorage.setItem(TENANTS_REGISTRY_KEY, JSON.stringify([...others, ...mergedEmployees]));
        }
        catch {
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
            .map((o) => {
            const normalizedOrder = (0, financeEngine_1.normalizeOrderPaymentStatus)({ ...o, company_id });
            return {
                ...normalizedOrder,
                version: Number(normalizedOrder.version) || 1,
                updatedAt: normalizedOrder.updatedAt ||
                    normalizedOrder.createdAt ||
                    new Date().toISOString(),
            };
        })
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
        stock: (Array.isArray(db.stock) ? db.stock : [])
            .filter((s) => !s.company_id || s.company_id === company_id)
            .map((s) => ({
            ...s,
            company_id,
            category: s.category === 'laminas' ? 'laminas' : 'madeiras',
            quantity: Number(s.quantity) || 0,
            minStock: Number(s.minStock) || 0,
            unitCost: Number(s.unitCost) || 0,
        })),
        notas: (Array.isArray(db.notas) ? db.notas : [])
            .filter((n) => !n.company_id || n.company_id === company_id)
            .map((n) => {
            const items = (Array.isArray(n.items) ? n.items : []).map((it) => {
                const quantidade = Math.max(0, Number(it.quantidade) || 0);
                const precoUnitario = Math.max(0, Number(it.precoUnitario) || 0);
                return {
                    ...it,
                    quantidade,
                    precoUnitario,
                    total: Math.round(quantidade * precoUnitario * 100) / 100,
                };
            });
            const recomputedTotal = Math.round(items.reduce((sum, it) => sum + it.total, 0) * 100) / 100;
            return {
                ...n,
                company_id,
                numero: Number(n.numero) || 1,
                items,
                total: recomputedTotal,
            };
        })
            .sort((a, b) => b.numero - a.numero),
        noteSequence: Math.max(Number(db.noteSequence) || 0, ...(Array.isArray(db.notas) ? db.notas.map((n) => Number(n.numero) || 0) : [0])),
        expenses: (Array.isArray(db.expenses) ? db.expenses : []).map((exp) => ({
            ...exp,
            month: String(exp.month || ''),
            values: exp.values || {},
        })),
        serviceProviders: (Array.isArray(db.serviceProviders) ? db.serviceProviders : [])
            .filter((p) => !p.company_id || p.company_id === company_id)
            .map((p) => ({
            ...p,
            company_id,
            amount: Number(p.amount) || 0,
            paymentModality: (0, financeEngine_1.migratePaymentModality)(String(p.paymentModality || 'pix')),
        })),
        payrollEmployees: (Array.isArray(db.payrollEmployees) ? db.payrollEmployees : [])
            .filter((e) => !e.company_id || e.company_id === company_id)
            .map((e) => ({
            ...e,
            company_id,
            salary: Number(e.salary) || 0,
        })),
        investments: (Array.isArray(db.investments) ? db.investments : [])
            .filter((inv) => !inv.company_id || inv.company_id === company_id)
            .map((inv) => ({
            ...inv,
            company_id,
            investedAmount: Number(inv.investedAmount) || 0,
            currentAmount: Number(inv.currentAmount) || 0,
        })),
        employees: mergedEmployees,
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
                    if (migrated.orders.length > 0) {
                        saveEnterpriseDatabase(migrated);
                    }
                    else {
                        saveEnterpriseDatabaseLocalOnly(migrated);
                    }
                    return migrated;
                }
            }
        }
    }
    catch {
        // Fallback to empty isolated tenant database
    }
    const emptyDb = normalizeDb((0, seedOrders_1.createEnterpriseSeedDatabase)(company_id), company_id);
    // IMPORTANT: Never PUT an empty seed to the server on first boot / empty tab!
    return saveEnterpriseDatabaseLocalOnly(emptyDb);
}
/**
 * Fetch latest authoritative database snapshot from server.cjs (when running behind FacasFlow HTTP server).
 */
async function fetchEnterpriseDatabaseFromServer(company_id) {
    if (typeof window === 'undefined' || !window.location.protocol.startsWith('http')) {
        return null;
    }
    try {
        const active = getActiveSession();
        const res = await fetch(`/api/orders?company_id=${encodeURIComponent(company_id)}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'X-FacasFlow-Role': active?.role || 'admin',
                'X-FacasFlow-Email': active?.email || '',
                'X-FacasFlow-Client-Id': realtimeEngine_1.CLIENT_INSTANCE_ID,
            },
        });
        if (!res.ok)
            return null;
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json'))
            return null;
        const parsed = (await res.json());
        if (!parsed || !Array.isArray(parsed.orders))
            return null;
        return normalizeDb(parsed, company_id);
    }
    catch {
        return null;
    }
}
/**
 * Cross-browser / LAN authentication backed by server.cjs disk registry with local fallback.
 */
async function authenticateTenantWithServerFallback(emailInput, passwordInput) {
    const email = emailInput.trim().toLowerCase();
    const password = passwordInput.trim();
    if (!email || !password) {
        return { error: 'Preencha seu e-mail e senha para entrar.' };
    }
    if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const isFacasServer = res.headers.get('X-FacasFlow-Server') === 'true';
            if (isFacasServer) {
                if (res.ok) {
                    const data = await res.json();
                    if (data?.session) {
                        saveActiveSession(data.session);
                        return { session: data.session };
                    }
                }
                else if (res.status === 401 || res.status === 400) {
                    const errData = await res.json().catch(() => ({}));
                    return {
                        error: errData?.error ||
                            'E-mail ou senha inválidos. Verifique suas credenciais.',
                    };
                }
            }
        }
        catch {
            // Static hosting or offline: fall back to localStorage auth
        }
    }
    return authenticateTenant(email, password);
}
/**
 * Update ONLY the local browser cache (never triggers HTTP PUT or SSE broadcast).
 */
function saveEnterpriseDatabaseLocalOnly(db) {
    const company_id = db.company_id || 'tenant_qualifacas';
    const normalized = normalizeDb(db, company_id);
    const tenantKey = getTenantDbStorageKey(company_id);
    try {
        window.localStorage.setItem(tenantKey, JSON.stringify(normalized));
    }
    catch {
        // ignore quota issues
    }
    return normalized;
}
/**
 * Save database strictly isolated under `facasflow_tenant_db_${db.company_id}`
 */
function saveEnterpriseDatabase(db) {
    const company_id = db.company_id || 'tenant_qualifacas';
    const normalized = saveEnterpriseDatabaseLocalOnly(db);
    if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
        const active = getActiveSession();
        fetch(`/api/orders?company_id=${encodeURIComponent(company_id)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-FacasFlow-Role': active?.role || 'admin',
                'X-FacasFlow-Email': active?.email || '',
                'X-FacasFlow-Client-Id': realtimeEngine_1.CLIENT_INSTANCE_ID,
            },
            body: JSON.stringify(normalized),
        }).catch(() => { });
    }
    return normalized;
}
/**
 * Atomic single-card stage move endpoint (mirrors Postgres RPC mover_faca).
 */
async function moveOrderStageOnServer(params) {
    if (typeof window === 'undefined' || !window.location.protocol.startsWith('http')) {
        return null;
    }
    const active = getActiveSession();
    const res = await fetch(`/api/orders/move?company_id=${encodeURIComponent(params.company_id)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-FacasFlow-Role': active?.role || 'admin',
            'X-FacasFlow-Email': active?.email || '',
            'X-FacasFlow-Client-Id': realtimeEngine_1.CLIENT_INSTANCE_ID,
        },
        body: JSON.stringify({
            company_id: params.company_id,
            orderId: params.orderId,
            stage: params.targetStage,
            stageUpdatedAt: params.stageUpdatedAt,
            orderSnapshot: params.orderSnapshot,
        }),
    });
    const isFacasServer = res.headers.get('X-FacasFlow-Server') === 'true';
    if (!res.ok) {
        // On static hosts (e.g. GitHub Pages) there is no /api/orders/move backend
        if (!isFacasServer && (res.status === 404 || res.status === 405)) {
            return null;
        }
        throw new Error(`Move stage failed with HTTP ${res.status}`);
    }
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        return null;
    }
    const data = await res.json();
    return data?.order || null;
}
function getNextPrefixedCode(items, prefix, padLength = 3) {
    const escaped = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matcher = new RegExp(`^${escaped}-(\\d+)$`, 'i');
    let max = 0;
    for (const item of items || []) {
        const idStr = String(item?.id || '').trim();
        const match = matcher.exec(idStr);
        if (match) {
            const num = parseInt(match[1], 10);
            if (!Number.isNaN(num) && num > max)
                max = num;
        }
    }
    return `${prefix}-${String(max + 1).padStart(padLength, '0')}`;
}
function getNextCompanyCode(companies) {
    return getNextPrefixedCode(companies, 'EMP', 3);
}
function getNextOrderId(db) {
    return getNextPrefixedCode(db.orders, 'OS', 3);
}
function getNextDeliveryId(db) {
    return getNextPrefixedCode(db.deliveries, 'ENT', 3);
}
function getNextReturnId(db) {
    return getNextPrefixedCode(db.returns, 'RET', 3);
}
function getNextStockId(db) {
    return getNextPrefixedCode(db.stock, 'EST', 3);
}
function getNextProviderId(db) {
    return getNextPrefixedCode(db.serviceProviders, 'PST', 3);
}
function getNextPayrollEmployeeId(db) {
    return getNextPrefixedCode(db.payrollEmployees, 'FUN', 3);
}
function getNextInvestmentId(db) {
    return getNextPrefixedCode(db.investments, 'INV', 3);
}
function getNextNoteNumber(db) {
    let max = Number(db.noteSequence) || 0;
    for (const n of db.notas || []) {
        if (Number(n.numero) > max)
            max = Number(n.numero);
    }
    return max + 1;
}

  },
  { dir: "./services" }
);

__moduleFactories["./services/realtimeEngine"] = Object.assign(
  function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_INSTANCE_ID = void 0;
exports.getSupabaseConfig = getSupabaseConfig;
exports.saveSupabaseConfig = saveSupabaseConfig;
exports.getActiveRealtimeChannelCount = getActiveRealtimeChannelCount;
exports.isSupabaseCloudActive = isSupabaseCloudActive;
exports.moveOrderStageViaRpc = moveOrderStageViaRpc;
exports.publishRealtimeUpdate = publishRealtimeUpdate;
exports.subscribeToCompanyRealtime = subscribeToCompanyRealtime;
exports.broadcastEmployeeRegistryUpdate = broadcastEmployeeRegistryUpdate;
const supabaseClient_1 = require("./supabaseClient");
const SUPABASE_CONFIG_KEY = 'facasflow_supabase_config_v1';
exports.CLIENT_INSTANCE_ID = `client_${Math.random().toString(36).slice(2, 10)}`;
function getSupabaseConfig() {
    try {
        const raw = window.localStorage.getItem(SUPABASE_CONFIG_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed.url === 'string' && typeof parsed.anonKey === 'string') {
                return parsed;
            }
        }
    }
    catch {
        // ignore
    }
    return { url: '', anonKey: '', enabled: false };
}
function saveSupabaseConfig(config) {
    try {
        window.localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify(config));
    }
    catch {
        // ignore
    }
}
let activeSupabaseChannel = null;
let activeSupabaseClient = null;
let activeBroadcastChannel = null;
let activeSubscriptionCount = 0;
let supabaseChannelChain = Promise.resolve();
function getActiveRealtimeChannelCount() {
    return activeSubscriptionCount;
}
function isSupabaseCloudActive() {
    return Boolean(activeSupabaseClient && activeSupabaseChannel);
}
/**
 * Call Postgres RPC mover_faca(p_id, p_etapa, p_stage_updated_at) when Supabase is connected
 * and migrations/Auth are deployed. Gracefully returns null if schema/RPC is not yet deployed
 * so Broadcast + server sync still succeeds cleanly without breaking card moves.
 */
async function moveOrderStageViaRpc(orderId, targetStage, stageUpdatedAt) {
    if (!activeSupabaseClient)
        return null;
    try {
        const { data, error } = await activeSupabaseClient.rpc('mover_faca', {
            p_id: orderId,
            p_etapa: targetStage,
            p_stage_updated_at: stageUpdatedAt,
        });
        if (error) {
            const code = String(error.code || '');
            const msg = String(error.message || '').toLowerCase();
            const isMissingSetup = code === 'PGRST202' ||
                code === 'PGRST205' ||
                code === 'PGRST301' ||
                code === '42883' ||
                code === '42P01' ||
                msg.includes('could not find') ||
                msg.includes('does not exist') ||
                msg.includes('não encontrada') ||
                msg.includes('sem permissão') ||
                msg.includes('permission denied') ||
                msg.includes('jwt');
            if (isMissingSetup) {
                return null;
            }
            throw error;
        }
        return data || null;
    }
    catch (err) {
        const msg = String(err?.message || '').toLowerCase();
        if (msg.includes('could not find') ||
            msg.includes('does not exist') ||
            msg.includes('404')) {
            return null;
        }
        throw err;
    }
}
/**
 * Publish a real-time update across BroadcastChannel, localStorage event, and Supabase Broadcast.
 * Does NOT write to REST API.
 */
function publishRealtimeUpdate(params) {
    const event = {
        eventId: `rt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        senderInstanceId: exports.CLIENT_INSTANCE_ID,
        company_id: params.company_id,
        section: params.section,
        actionLabel: params.actionLabel,
        actorName: params.actorName,
        actorRole: params.actorRole,
        timestamp: new Date().toISOString(),
        order: params.order,
        deletedOrderUuid: params.deletedOrderUuid,
        deletedOrderId: params.deletedOrderId,
        deletedOrderUuids: params.deletedOrderUuids,
        deletedOrderIds: params.deletedOrderIds,
        db: params.db,
    };
    // 1. Native BroadcastChannel (Instant cross-tab sync)
    try {
        if (activeBroadcastChannel) {
            activeBroadcastChannel.postMessage(event);
        }
        else if (typeof BroadcastChannel !== 'undefined') {
            const ch = new BroadcastChannel(`facasflow_rt_${params.company_id}`);
            ch.postMessage(event);
            ch.close();
        }
    }
    catch {
        // ignore
    }
    // 2. LocalStorage Realtime Event key (triggers 'storage' event in other tabs only)
    try {
        window.localStorage.setItem(`facasflow_rt_event_${params.company_id}`, JSON.stringify(event));
    }
    catch {
        // ignore
    }
    // 3. Supabase Broadcast (real-time event across devices)
    try {
        if (activeSupabaseChannel) {
            activeSupabaseChannel.send({
                type: 'broadcast',
                event: 'facasflow_sync',
                payload: event,
            });
        }
    }
    catch {
        // ignore
    }
}
/**
 * Subscribe to real-time updates for a specific `company_id`.
 * Strictly read-only listener: updates local UI state only, never writes back to DB.
 */
function subscribeToCompanyRealtime(company_id, onRemoteUpdate, onConnectionStatusChange, getLocalSnapshotForPeer) {
    let isDisposed = false;
    const seenEvents = new Set();
    const repliedRequesters = new Set();
    let localBroadcast = null;
    let localSupabaseClient = null;
    let localSupabaseChannel = null;
    activeSubscriptionCount += 1;
    const handleIncoming = (rawEvent) => {
        if (isDisposed || !rawEvent)
            return;
        if (rawEvent.senderInstanceId && rawEvent.senderInstanceId === exports.CLIENT_INSTANCE_ID) {
            return;
        }
        if (rawEvent.company_id !== company_id)
            return;
        if (rawEvent.eventId) {
            if (seenEvents.has(rawEvent.eventId))
                return;
            seenEvents.add(rawEvent.eventId);
            if (seenEvents.size > 200) {
                const first = seenEvents.values().next().value;
                if (first)
                    seenEvents.delete(first);
            }
        }
        const hasDeletePayload = Boolean(rawEvent.deletedOrderUuid) ||
            Boolean(rawEvent.deletedOrderId) ||
            (Array.isArray(rawEvent.deletedOrderUuids) && rawEvent.deletedOrderUuids.length > 0) ||
            (Array.isArray(rawEvent.deletedOrderIds) && rawEvent.deletedOrderIds.length > 0);
        if (!rawEvent.order && !hasDeletePayload && (!rawEvent.db || !Array.isArray(rawEvent.db.orders))) {
            return;
        }
        onRemoteUpdate(rawEvent);
    };
    // 1. BroadcastChannel
    if (typeof BroadcastChannel !== 'undefined') {
        try {
            if (activeBroadcastChannel) {
                activeBroadcastChannel.close();
            }
            localBroadcast = new BroadcastChannel(`facasflow_rt_${company_id}`);
            localBroadcast.onmessage = (msg) => {
                handleIncoming(msg.data);
            };
            activeBroadcastChannel = localBroadcast;
            onConnectionStatusChange?.('connected');
        }
        catch {
            // ignore
        }
    }
    // 2. StorageEvent (fires only in OTHER tabs)
    const storageHandler = (e) => {
        if (!e.newValue)
            return;
        if (e.key === `facasflow_rt_event_${company_id}`) {
            try {
                handleIncoming(JSON.parse(e.newValue));
            }
            catch {
                // ignore
            }
        }
    };
    window.addEventListener('storage', storageHandler);
    // 3. Server-Sent Events (SSE) for localhost / LAN server.cjs
    let sseSource = null;
    const host = typeof window !== 'undefined' ? window.location.hostname : '';
    const canUseSse = typeof EventSource !== 'undefined' &&
        Boolean(host) &&
        !host.endsWith('github.io') &&
        (host === 'localhost' ||
            host === '127.0.0.1' ||
            /^(\d{1,3}\.){3}\d{1,3}$/.test(host) ||
            Boolean(window.location.port));
    if (canUseSse) {
        try {
            sseSource = new EventSource(`/api/realtime?company_id=${encodeURIComponent(company_id)}`);
            sseSource.onopen = () => {
                if (!isDisposed) {
                    onConnectionStatusChange?.('connected');
                }
            };
            sseSource.onmessage = (evt) => {
                try {
                    handleIncoming(JSON.parse(evt.data));
                }
                catch {
                    // ignore
                }
            };
            sseSource.onerror = () => {
                sseSource?.close();
                sseSource = null;
            };
        }
        catch {
            // ignore
        }
    }
    // 4. Supabase Realtime Channel (ordens_servico changes + broadcast)
    supabaseChannelChain = supabaseChannelChain
        .then(async () => {
        if (isDisposed)
            return;
        try {
            const client = (0, supabaseClient_1.getSupabaseClient)();
            localSupabaseClient = client;
            activeSupabaseClient = client;
            if (activeSupabaseChannel) {
                const prevChannel = activeSupabaseChannel;
                activeSupabaseChannel = null;
                try {
                    await client.removeChannel(prevChannel);
                }
                catch {
                    // ignore
                }
            }
            if (isDisposed)
                return;
            const channel = client
                .channel(`facasflow_company_${company_id}`, {
                config: { broadcast: { self: false } },
            })
                .on('broadcast', { event: 'facasflow_sync' }, (payload) => {
                if (payload?.payload) {
                    handleIncoming(payload.payload);
                }
            })
                .on('broadcast', { event: 'facasflow_sync_request' }, (payload) => {
                if (isDisposed || !getLocalSnapshotForPeer)
                    return;
                const req = payload?.payload;
                const requesterId = req?.requesterId;
                if (!requesterId ||
                    requesterId === exports.CLIENT_INSTANCE_ID ||
                    req?.company_id !== company_id ||
                    repliedRequesters.has(requesterId)) {
                    return;
                }
                repliedRequesters.add(requesterId);
                if (repliedRequesters.size > 50) {
                    const first = repliedRequesters.values().next().value;
                    if (first)
                        repliedRequesters.delete(first);
                }
                const snap = getLocalSnapshotForPeer();
                if (snap && Array.isArray(snap.orders) && snap.orders.length > 0) {
                    channel.send({
                        type: 'broadcast',
                        event: 'facasflow_sync',
                        payload: {
                            eventId: `peer_sync_${exports.CLIENT_INSTANCE_ID}_${requesterId}`,
                            senderInstanceId: exports.CLIENT_INSTANCE_ID,
                            company_id,
                            section: 'all',
                            actionLabel: '',
                            actorName: '',
                            actorRole: 'admin',
                            timestamp: new Date().toISOString(),
                            db: snap,
                        },
                    });
                }
            })
                .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'ordens_servico',
                filter: `empresa_id=eq.${company_id}`,
            }, (change) => {
                const row = change?.new;
                const oldRow = change?.old;
                if (change?.eventType === 'DELETE' || row?.deleted_at) {
                    const deletedUuid = row?.id || oldRow?.id;
                    if (deletedUuid) {
                        handleIncoming({
                            eventId: `pg_order_del_${deletedUuid}_${Date.now()}`,
                            company_id,
                            section: 'esteira',
                            actionLabel: '',
                            actorName: '',
                            actorRole: 'operador',
                            timestamp: row?.deleted_at || new Date().toISOString(),
                            deletedOrderUuid: deletedUuid,
                            deletedOrderId: row?.numero_os || oldRow?.numero_os,
                        });
                    }
                    return;
                }
                if (row && row.id && row.etapa && !row.deleted_at) {
                    handleIncoming({
                        eventId: `pg_order_${row.id}_v${row.version || row.updated_at || Date.now()}`,
                        company_id,
                        section: 'esteira',
                        actionLabel: '',
                        actorName: '',
                        actorRole: 'operador',
                        timestamp: row.updated_at || new Date().toISOString(),
                        order: {
                            id: row.numero_os || row.id,
                            dbUuid: row.id,
                            company_id: row.empresa_id,
                            companyId: row.cliente_codigo_legado || row.cliente_empresa_id || '',
                            companyUuid: row.cliente_empresa_id || undefined,
                            companyName: row.cliente_nome || '',
                            companyPhone: row.cliente_telefone || '',
                            toolDescription: row.descricao_ferramenta || '',
                            bladeMeters: row.blade_meters != null ? Number(row.blade_meters) : undefined,
                            woodMm: row.wood_mm || undefined,
                            amount: Number(row.valor) || 0,
                            paymentModality: row.forma_pagamento,
                            paymentStatus: row.status_pagamento,
                            stage: row.etapa,
                            stageUpdatedAt: row.etapa_atualizada_em || '',
                            stageHistory: Array.isArray(row.historico_etapas) ? row.historico_etapas : [],
                            version: Number(row.version) || 1,
                            updatedAt: row.updated_at || new Date().toISOString(),
                            createdAt: String(row.created_at || '').slice(0, 10),
                            dueDate: String(row.data_vencimento || '').slice(0, 10),
                            paidAt: row.data_pagamento ? String(row.data_pagamento).slice(0, 10) : undefined,
                        },
                    });
                }
            })
                .subscribe((status) => {
                if (status === 'SUBSCRIBED' && !isDisposed) {
                    onConnectionStatusChange?.('supabase_live');
                }
            });
            localSupabaseChannel = channel;
            activeSupabaseChannel = channel;
        }
        catch {
            // Fallback to local BroadcastChannel / SSE
        }
    })
        .catch(() => {
        // ignore chain rejection
    });
    return () => {
        isDisposed = true;
        activeSubscriptionCount = Math.max(0, activeSubscriptionCount - 1);
        window.removeEventListener('storage', storageHandler);
        if (sseSource) {
            sseSource.close();
            sseSource = null;
        }
        if (localBroadcast) {
            localBroadcast.close();
            if (activeBroadcastChannel === localBroadcast) {
                activeBroadcastChannel = null;
            }
            localBroadcast = null;
        }
        const clientToClose = localSupabaseClient;
        const chanToClose = localSupabaseChannel;
        if (chanToClose && activeSupabaseChannel === chanToClose) {
            activeSupabaseChannel = null;
        }
        localSupabaseChannel = null;
        if (clientToClose && chanToClose) {
            supabaseChannelChain = supabaseChannelChain
                .then(async () => {
                try {
                    await clientToClose.removeChannel(chanToClose);
                }
                catch {
                    // ignore
                }
            })
                .catch(() => {
                // ignore
            });
        }
    };
}
function broadcastEmployeeRegistryUpdate(accounts) {
    try {
        window.localStorage.setItem('facasflow_saas_tenants_v1', JSON.stringify(accounts));
    }
    catch {
        // ignore
    }
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
const supabaseDataService_1 = require("../services/supabaseDataService");
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
    const [infoMsg, setInfoMsg] = (0, react_1.useState)(null);
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting)
            return;
        setErrorMsg(null);
        setInfoMsg(null);
        setIsSubmitting(true);
        try {
            const normalizedEmail = email.trim().toLowerCase();
            const res = await (0, supabaseDataService_1.signInWithSupabase)(normalizedEmail, password);
            if (res.error || !res.session) {
                setErrorMsg(res.error || 'Falha na autenticação.');
                return;
            }
            await onAuthenticated(res.session);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting)
            return;
        setErrorMsg(null);
        setInfoMsg(null);
        setIsSubmitting(true);
        try {
            const normalizedRegEmail = regEmail.trim().toLowerCase();
            const res = await (0, supabaseDataService_1.signUpWithSupabase)({
                companyName,
                ownerName,
                email: normalizedRegEmail,
                password: regPassword,
            });
            if (res.needsEmailConfirmation) {
                setInfoMsg(res.error ||
                    'Conta criada! Confirme seu e-mail para fazer login no FacasFlow.');
                setMode('login');
                setEmail(normalizedRegEmail);
                return;
            }
            if (res.error || !res.session) {
                setErrorMsg(res.error || 'Não foi possível criar a conta.');
                return;
            }
            await onAuthenticated(res.session);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (react_1.default.createElement("div", { className: "min-h-[100dvh] text-slate-900 flex flex-col justify-center items-center px-4 py-8 pt-[calc(2rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] relative selection:bg-indigo-500 selection:text-white" },
        react_1.default.createElement("div", { className: "w-full max-w-md rounded-[32px] liquid-glass p-6 sm:p-9 shadow-2xl relative z-10 min-w-0" },
            react_1.default.createElement("div", { className: "flex items-center justify-center gap-3 mb-7" },
                react_1.default.createElement("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1.5px] shadow-md shadow-indigo-500/25 flex items-center justify-center shrink-0" },
                    react_1.default.createElement("div", { className: "w-full h-full bg-white/90 rounded-[10px] flex items-center justify-center" },
                        react_1.default.createElement(lucide_react_1.Layers, { className: "w-5 h-5 text-indigo-600 stroke-[2.2]" }))),
                react_1.default.createElement("h1", { className: "text-2xl font-extrabold tracking-tight text-slate-900 leading-none frosted-text-depth" },
                    "Facas",
                    react_1.default.createElement("span", { className: "text-indigo-600" }, "Flow"))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2 p-1.5 rounded-full liquid-glass-subtle mb-6" },
                react_1.default.createElement("button", { type: "button", onClick: () => {
                        setMode('login');
                        setErrorMsg(null);
                    }, className: `min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${mode === 'login'
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'text-slate-700 hover:text-indigo-700'}` },
                    react_1.default.createElement(lucide_react_1.KeyRound, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, "Entrar")),
                react_1.default.createElement("button", { type: "button", onClick: () => {
                        setMode('register');
                        setErrorMsg(null);
                    }, className: `min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${mode === 'register'
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'text-slate-700 hover:text-indigo-700'}` },
                    react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, "Criar Conta"))),
            infoMsg && (react_1.default.createElement("div", { className: "mb-5 p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/70 text-emerald-900 text-xs font-semibold flex items-center gap-2.5" },
                react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-4 h-4 text-emerald-700 shrink-0" }),
                react_1.default.createElement("span", null, infoMsg))),
            errorMsg && (react_1.default.createElement("div", { className: "mb-5 p-3.5 rounded-2xl bg-rose-500/15 border border-rose-300/70 text-rose-800 text-xs font-semibold flex items-center gap-2.5" },
                react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4 text-rose-600 shrink-0" }),
                react_1.default.createElement("span", null, errorMsg))),
            mode === 'login' ? (react_1.default.createElement("form", { onSubmit: handleLoginSubmit, className: "space-y-4" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "E-mail"),
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement(lucide_react_1.Mail, { className: "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                        react_1.default.createElement("input", { type: "email", inputMode: "email", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Digite seu e-mail", className: "liquid-glass-pill w-full min-h-[44px] pl-10 pr-4 py-3 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "Senha"),
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement(lucide_react_1.Lock, { className: "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                        react_1.default.createElement("input", { type: "password", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "current-password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", className: "liquid-glass-pill w-full min-h-[44px] pl-10 pr-4 py-3 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" }))),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full min-h-[48px] py-3.5 px-5 rounded-full font-bold text-sm bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white border border-white/40 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer mt-2 active:scale-95 disabled:opacity-60" },
                    isSubmitting ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : (react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-4 h-4" })),
                    react_1.default.createElement("span", null, isSubmitting ? 'Autenticando...' : 'Entrar no Painel')))) : (react_1.default.createElement("form", { onSubmit: handleRegisterSubmit, className: "space-y-3.5" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Nome da Empresa *"),
                    react_1.default.createElement("input", { type: "text", required: true, value: companyName, onChange: (e) => setCompanyName(e.target.value), placeholder: "Nome da sua facaria", className: "liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Respons\u00E1vel"),
                    react_1.default.createElement("input", { type: "text", value: ownerName, onChange: (e) => setOwnerName(e.target.value), placeholder: "Seu nome", className: "liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "E-mail *"),
                    react_1.default.createElement("input", { type: "email", inputMode: "email", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "email", required: true, value: regEmail, onChange: (e) => setRegEmail(e.target.value), placeholder: "Digite seu e-mail", className: "liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Senha *"),
                    react_1.default.createElement("input", { type: "password", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, autoComplete: "new-password", required: true, minLength: 6, value: regPassword, onChange: (e) => setRegPassword(e.target.value), placeholder: "M\u00EDnimo 6 caracteres", className: "liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" })),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full min-h-[48px] py-3.5 px-5 rounded-full font-bold text-sm bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white border border-white/40 shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer mt-2 active:scale-95 disabled:opacity-60" },
                    isSubmitting ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : (react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-4 h-4" })),
                    react_1.default.createElement("span", null, isSubmitting ? 'Criando conta...' : 'Criar Conta e Entrar')))))));
};
exports.AuthLoginScreen = AuthLoginScreen;

  },
  { dir: "./components" }
);

__moduleFactories["./components/HeaderBar"] = Object.assign(
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
exports.HeaderBar = exports.LiquidSidebar = exports.NAV_SECTIONS = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
exports.NAV_SECTIONS = [
    {
        id: 'bento_home',
        label: 'Visão Geral',
        shortLabel: 'Visão Geral',
        group: 'primary',
        roles: ['admin'],
        icon: lucide_react_1.LayoutGrid,
    },
    {
        id: 'esteira',
        label: 'Esteira de Produção',
        shortLabel: 'Esteira',
        group: 'operacao',
        roles: ['admin', 'operador'],
        icon: lucide_react_1.Kanban,
    },
    {
        id: 'empresas',
        label: 'Cadastro de Empresas',
        shortLabel: 'Empresas',
        group: 'operacao',
        roles: ['admin'],
        icon: lucide_react_1.Building2,
    },
    {
        id: 'entregas',
        label: 'Entregas & Logística',
        shortLabel: 'Entregas',
        group: 'operacao',
        roles: ['admin', 'operador'],
        icon: lucide_react_1.Truck,
    },
    {
        id: 'retornos',
        label: 'Retornos & Ajustes',
        shortLabel: 'Retornos',
        group: 'operacao',
        roles: ['admin', 'operador'],
        icon: lucide_react_1.Wrench,
    },
    {
        id: 'estoque',
        label: 'Estoque',
        shortLabel: 'Estoque',
        group: 'operacao',
        roles: ['admin', 'operador'],
        icon: lucide_react_1.Package,
    },
    {
        id: 'notas',
        label: 'Notas',
        shortLabel: 'Notas',
        group: 'operacao',
        roles: ['admin', 'operador'],
        icon: lucide_react_1.FileText,
    },
    {
        id: 'financeiro',
        label: 'Finanças 30/60d',
        shortLabel: 'Finanças',
        group: 'gestao',
        roles: ['admin'],
        icon: lucide_react_1.PieChart,
    },
    {
        id: 'equipe',
        label: 'Gestão de Equipe',
        shortLabel: 'Equipe',
        group: 'gestao',
        roles: ['admin'],
        icon: lucide_react_1.Users,
    },
    {
        id: 'configuracoes',
        label: 'Configurações & Backups',
        shortLabel: 'Configurações',
        group: 'gestao',
        roles: ['admin'],
        superAdminOnly: true,
        icon: lucide_react_1.Settings,
    },
];
function getBadgeCount(id, counts) {
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
    if (id === 'estoque')
        return counts.stock;
    if (id === 'notas')
        return counts.notas;
    if (id === 'equipe')
        return counts.employees;
    if (id === 'configuracoes' && (counts.backupAlerts || 0) > 0) {
        return counts.backupAlerts;
    }
    return undefined;
}
const SidebarBody = ({ activeSection, onSelectSection, tenantName, userRole, isSuperAdmin = false, userName, onLogout, counts, onCloseMobile, }) => {
    const visibleSections = exports.NAV_SECTIONS.filter((item) => item.roles.includes(userRole) && (!item.superAdminOnly || isSuperAdmin));
    const primaryItem = visibleSections.find((s) => s.group === 'primary');
    const operacaoItems = visibleSections.filter((s) => s.group === 'operacao');
    const gestaoItems = visibleSections.filter((s) => s.group === 'gestao');
    const selectAndClose = (section) => {
        onSelectSection(section);
        if (onCloseMobile)
            onCloseMobile();
    };
    const renderNavItem = (item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        const badge = getBadgeCount(item.id, counts);
        const isAlertBadge = item.id === 'financeiro' || item.id === 'configuracoes';
        return (react_1.default.createElement("button", { key: item.id, type: "button", onClick: () => selectAndClose(item.id), className: `w-full min-h-[44px] flex items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${isActive
                ? 'bg-gradient-to-r from-indigo-600/90 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 border border-white/40'
                : 'text-slate-800 hover:text-indigo-700 hover:bg-white/45'}` },
            react_1.default.createElement("span", { className: "flex items-center gap-3 min-w-0" },
                react_1.default.createElement(Icon, { className: `w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-600'}` }),
                react_1.default.createElement("span", { className: "truncate" }, item.shortLabel)),
            badge !== undefined && (react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-extrabold leading-none shrink-0 ${isActive
                    ? 'bg-white/25 text-white'
                    : isAlertBadge
                        ? 'bg-rose-500/20 text-rose-700 border border-rose-300/60'
                        : 'bg-white/60 text-slate-700 border border-white/70'}` }, badge))));
    };
    return (react_1.default.createElement("div", { className: "flex flex-col justify-between h-full gap-5" },
        react_1.default.createElement("div", { className: "space-y-5 overflow-y-auto pr-0.5" },
            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                react_1.default.createElement("button", { type: "button", onClick: () => selectAndClose(userRole === 'operador' ? 'esteira' : 'bento_home'), className: "flex items-center gap-3 px-2 py-1.5 min-h-[44px] cursor-pointer group text-left min-w-0", "data-purpose": "brand-header" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1.5px] shadow-md shadow-indigo-500/25 flex items-center justify-center group-hover:scale-105 transition shrink-0" },
                        react_1.default.createElement("div", { className: "w-full h-full bg-white/90 backdrop-blur-md rounded-[10px] flex items-center justify-center" },
                            react_1.default.createElement(lucide_react_1.Layers, { className: "w-5 h-5 text-indigo-600 stroke-[2.2]" }))),
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-center" },
                            react_1.default.createElement("span", { className: "font-extrabold text-lg tracking-tight text-slate-900 frosted-text-depth" }, "Facas"),
                            react_1.default.createElement("span", { className: "font-black text-lg text-indigo-600 ml-0.5 drop-shadow-[0_1px_8px_rgba(99,102,241,0.35)]" }, "Flow")),
                        react_1.default.createElement("p", { className: "text-[10px] font-bold text-slate-600 truncate" }, tenantName))),
                onCloseMobile && (react_1.default.createElement("button", { type: "button", onClick: onCloseMobile, "aria-label": "Fechar menu", className: "lg:hidden min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill flex items-center justify-center text-slate-700 cursor-pointer shrink-0" },
                    react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5" })))),
            primaryItem && react_1.default.createElement("div", null, renderNavItem(primaryItem)),
            operacaoItems.length > 0 && (react_1.default.createElement("div", { className: "space-y-1" },
                react_1.default.createElement("div", { className: "px-3 text-[11px] font-bold tracking-wider text-slate-600/90 uppercase frosted-text-depth" }, "Opera\u00E7\u00E3o"),
                react_1.default.createElement("nav", { className: "space-y-1" }, operacaoItems.map(renderNavItem)))),
            gestaoItems.length > 0 && (react_1.default.createElement("div", { className: "space-y-1" },
                react_1.default.createElement("div", { className: "px-3 text-[11px] font-bold tracking-wider text-slate-600/90 uppercase frosted-text-depth" }, "Gest\u00E3o & Finan\u00E7as"),
                react_1.default.createElement("nav", { className: "space-y-1" }, gestaoItems.map(renderNavItem))))),
        react_1.default.createElement("div", { className: "pt-4 border-t border-white/60 flex items-center justify-between gap-2 shrink-0", "data-purpose": "user-profile" },
            react_1.default.createElement("div", { className: "flex items-center gap-2.5 min-w-0" },
                react_1.default.createElement("div", { className: "relative shrink-0" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold text-xs flex items-center justify-center ring-2 ring-white/90 shadow-md" }, userName
                        .split(' ')
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()),
                    react_1.default.createElement("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white shadow-sm" })),
                react_1.default.createElement("div", { className: "text-left leading-tight min-w-0" },
                    react_1.default.createElement("p", { className: "text-xs font-bold text-slate-900 frosted-text-depth truncate" }, userName),
                    react_1.default.createElement("p", { className: "text-[11px] text-slate-600 font-semibold truncate" }, userRole === 'operador'
                        ? 'Produção'
                        : userRole === 'cliente'
                            ? 'Cliente'
                            : 'Administrador'))),
            react_1.default.createElement("button", { type: "button", onClick: () => {
                    if (onCloseMobile)
                        onCloseMobile();
                    onLogout();
                }, "aria-label": "Encerrar sess\u00E3o", className: "min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 hover:text-rose-600 rounded-full hover:bg-white/50 transition cursor-pointer shrink-0", title: "Encerrar sess\u00E3o" },
                react_1.default.createElement(lucide_react_1.LogOut, { className: "w-4 h-4 stroke-[2.2]" })))));
};
const LiquidSidebar = (props) => {
    return (react_1.default.createElement("aside", { className: "w-[248px] shrink-0 liquid-glass rounded-[28px] p-5 flex-col justify-between hidden lg:flex sticky top-6 self-start min-h-[calc(100dvh-3.5rem)]", "data-purpose": "sidebar" },
        react_1.default.createElement(SidebarBody, { ...props })));
};
exports.LiquidSidebar = LiquidSidebar;
const HeaderBar = ({ activeSection, onSelectSection, searchQuery, onSearchChange, onOpenNewOrder, tenantName, userRole, isSuperAdmin = false, userName, onLogout, counts, }) => {
    const [drawerOpen, setDrawerOpen] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (typeof window === 'undefined' || !window.matchMedia)
            return;
        const mq = window.matchMedia('(min-width: 1024px)');
        const onChange = (e) => {
            if (e.matches)
                setDrawerOpen(false);
        };
        onChange(mq);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", { className: "sticky lg:static top-0 z-20 flex flex-col gap-2.5 pt-[env(safe-area-inset-top)] pb-2 lg:pb-0 lg:pt-0 bg-gradient-to-b from-white/55 to-transparent lg:bg-none backdrop-blur-md lg:backdrop-blur-none -mx-3 px-3 sm:-mx-5 sm:px-5 lg:mx-0 lg:px-0 min-w-0", "data-purpose": "top-navigation-bar" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 sm:gap-3 min-w-0" },
                react_1.default.createElement("div", { className: "flex items-center gap-2 sm:gap-3 flex-1 min-w-0" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setDrawerOpen(true), "aria-label": "Abrir menu de navega\u00E7\u00E3o", className: "lg:hidden min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill flex items-center justify-center text-slate-800 hover:text-indigo-700 cursor-pointer shrink-0" },
                        react_1.default.createElement(lucide_react_1.Menu, { className: "w-5 h-5 stroke-[2.2]" })),
                    react_1.default.createElement("button", { type: "button", onClick: () => onSelectSection(userRole === 'operador' ? 'esteira' : 'bento_home'), "aria-label": "In\u00EDcio FacasFlow", className: "lg:hidden min-h-[44px] min-w-[44px] rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1.5px] shadow-md flex items-center justify-center shrink-0 cursor-pointer" },
                        react_1.default.createElement("div", { className: "w-full h-full bg-white/90 rounded-[10px] flex items-center justify-center" },
                            react_1.default.createElement(lucide_react_1.Layers, { className: "w-4 h-4 text-indigo-600" }))),
                    react_1.default.createElement("div", { className: "relative flex-1 min-w-0 max-w-xl" },
                        react_1.default.createElement("div", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500" },
                            react_1.default.createElement(lucide_react_1.Search, { className: "w-4 h-4 stroke-[2.2]" })),
                        react_1.default.createElement("input", { type: "text", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), placeholder: "Buscar OS, empresa, CNPJ ou faca...", className: "liquid-glass-pill w-full min-h-[44px] pl-10 pr-10 py-2 rounded-full text-base text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition" }),
                        searchQuery && (react_1.default.createElement("button", { type: "button", onClick: () => onSearchChange(''), "aria-label": "Limpar busca", className: "absolute right-1.5 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer" }, "\u2715")))),
                react_1.default.createElement("div", { className: "flex items-center gap-2 shrink-0" },
                    userRole === 'admin' && (react_1.default.createElement("button", { type: "button", onClick: onOpenNewOrder, className: "min-h-[44px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm rounded-full px-4 sm:px-5 py-2 flex items-center gap-2 shadow-lg shadow-indigo-600/30 border border-white/40 transition-all duration-200 active:scale-95 cursor-pointer" },
                        react_1.default.createElement("span", null, "Nova OS"))),
                    react_1.default.createElement("button", { type: "button", onClick: onLogout, "aria-label": "Sair", className: "lg:hidden liquid-glass-pill min-h-[44px] min-w-[44px] rounded-full px-3 py-2 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800 hover:text-rose-600 cursor-pointer", title: "Sair" },
                        react_1.default.createElement(lucide_react_1.LogOut, { className: "w-4 h-4" }),
                        react_1.default.createElement("span", { className: "hidden sm:inline" }, "Sair"))))),
        drawerOpen && (react_1.default.createElement("div", { className: "fixed inset-0 z-[70] lg:hidden flex", role: "dialog", "aria-modal": "true", "aria-label": "Menu de navega\u00E7\u00E3o" },
            react_1.default.createElement("div", { onClick: () => setDrawerOpen(false), className: "fixed inset-0 bg-slate-900/45 backdrop-blur-sm" }),
            react_1.default.createElement("div", { className: "relative z-10 w-[280px] max-w-[85vw] h-[100dvh] liquid-glass p-5 rounded-r-[28px] shadow-2xl border-r border-white/75 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-[calc(1.25rem+env(safe-area-inset-bottom))]" },
                react_1.default.createElement(SidebarBody, { activeSection: activeSection, onSelectSection: onSelectSection, tenantName: tenantName, userRole: userRole, isSuperAdmin: isSuperAdmin, userName: userName, onLogout: onLogout, counts: counts, onCloseMobile: () => setDrawerOpen(false) }))))));
};
exports.HeaderBar = HeaderBar;

  },
  { dir: "./components" }
);

__moduleFactories["./components/BentoOverviewSection"] = Object.assign(
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
exports.BentoOverviewSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const BentoOverviewSection = ({ companies, orders, deliveries, returns, stock, financials, onNavigate, onOpenNewOrder, onSelectCompany, }) => {
    const { readyCount, activeProductionCount, stageCounts, companyOrderCounts } = (0, react_1.useMemo)(() => {
        let ready = 0;
        const stages = {};
        const compCounts = {};
        for (const o of orders) {
            if (o.stage === 'faca_pronta')
                ready += 1;
            stages[o.stage] = (stages[o.stage] || 0) + 1;
            compCounts[o.companyId] = (compCounts[o.companyId] || 0) + 1;
        }
        return {
            readyCount: ready,
            activeProductionCount: orders.length - ready,
            stageCounts: stages,
            companyOrderCounts: compCounts,
        };
    }, [orders]);
    const openReturnsCount = (0, react_1.useMemo)(() => returns.filter((r) => r.status !== 'liberado').length, [returns]);
    const { madeirasStock, laminasStock, lowMadeiras, lowLaminas } = (0, react_1.useMemo)(() => {
        const madeiras = [];
        const laminas = [];
        const lowM = [];
        const lowL = [];
        for (const s of stock) {
            if (s.category === 'madeiras') {
                madeiras.push(s);
                if (s.quantity <= s.minStock)
                    lowM.push(s);
            }
            else {
                laminas.push(s);
                if (s.quantity <= s.minStock)
                    lowL.push(s);
            }
        }
        return {
            madeirasStock: madeiras,
            laminasStock: laminas,
            lowMadeiras: lowM,
            lowLaminas: lowL,
        };
    }, [stock]);
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("section", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4", "data-purpose": "kpi-metrics-row" },
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between gap-1" },
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "Volume Total"),
                        react_1.default.createElement("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-800 border border-emerald-300/60 backdrop-blur-md" },
                            react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                            "Live")),
                    react_1.default.createElement("div", { className: "text-xl font-black text-slate-900 mt-2 tracking-tight" }, (0, financeEngine_1.formatBRL)(financials.totalVolume)),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-emerald-700 mt-1" },
                        orders.length,
                        " OS registradas")),
                react_1.default.createElement("div", { className: "mt-3 h-12 w-full relative" },
                    react_1.default.createElement("svg", { className: "w-full h-full overflow-visible drop-shadow-md", preserveAspectRatio: "none", viewBox: "0 0 180 50" },
                        react_1.default.createElement("defs", null,
                            react_1.default.createElement("linearGradient", { id: "revGrad", x1: "0%", x2: "100%", y1: "0%", y2: "0%" },
                                react_1.default.createElement("stop", { offset: "0%", stopColor: "#818cf8" }),
                                react_1.default.createElement("stop", { offset: "50%", stopColor: "#38bdf8" }),
                                react_1.default.createElement("stop", { offset: "100%", stopColor: "#06b6d4" }))),
                        react_1.default.createElement("path", { d: "M 0,35 Q 25,10 50,28 T 100,20 T 140,32 T 180,15", fill: "none", stroke: "url(#revGrad)", strokeDasharray: "3,3", strokeWidth: "2.5" }),
                        react_1.default.createElement("path", { d: "M 0,42 Q 30,25 60,35 T 115,15 T 150,28 T 180,22", fill: "none", opacity: "0.6", stroke: "url(#revGrad)", strokeDasharray: "2,3", strokeWidth: "1.8" })))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "A Receber 30/60d"),
                    react_1.default.createElement("div", { className: "text-xl font-black text-slate-900 mt-2 tracking-tight" }, (0, financeEngine_1.formatBRL)(financials.receivable30d)),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-emerald-700 mt-1" },
                        financials.receivableCount,
                        " t\u00EDtulo(s) ativos")),
                react_1.default.createElement("div", { className: "mt-3 h-12 -mx-4 -mb-4 overflow-hidden" },
                    react_1.default.createElement("svg", { className: "w-full h-full", preserveAspectRatio: "none", viewBox: "0 0 160 50" },
                        react_1.default.createElement("defs", null,
                            react_1.default.createElement("linearGradient", { id: "mrrGrad", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                react_1.default.createElement("stop", { offset: "0%", stopColor: "#10b981", stopOpacity: "0.55" }),
                                react_1.default.createElement("stop", { offset: "100%", stopColor: "#34d399", stopOpacity: "0.05" }))),
                        react_1.default.createElement("path", { d: "M 0,45 Q 40,40 70,22 T 120,28 T 160,10 L 160,50 L 0,50 Z", fill: "url(#mrrGrad)" }),
                        react_1.default.createElement("path", { d: "M 0,45 Q 40,40 70,22 T 120,28 T 160,10", fill: "none", stroke: "#059669", strokeLinecap: "round", strokeWidth: "2.5" })))),
            react_1.default.createElement("div", { onClick: () => onNavigate('esteira'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "Facas na Bancada"),
                    react_1.default.createElement("div", { className: "text-2xl font-black text-slate-900 mt-2 tracking-tight" }, activeProductionCount),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-indigo-700 mt-1" }, "Em produ\u00E7\u00E3o ativa")),
                react_1.default.createElement("div", { className: "mt-3 h-12 flex items-center justify-center" },
                    react_1.default.createElement("svg", { className: "w-full h-10 drop-shadow-sm", viewBox: "0 0 160 40" },
                        react_1.default.createElement("g", { fill: "#6366f1", opacity: "0.8" }, [10, 28, 46, 64, 82, 100, 118, 136, 150].map((cx) => [8, 19, 30].map((cy) => (react_1.default.createElement("circle", { key: `${cx}-${cy}`, cx: cx, cy: cy, r: "2.2" })))))))),
            react_1.default.createElement("div", { onClick: () => onNavigate('entregas'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "Prontas / Exped."),
                    react_1.default.createElement("div", { className: "text-2xl font-black text-emerald-700 mt-2 tracking-tight" }, readyCount),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-slate-600 mt-1" },
                        deliveries.length,
                        " sa\u00EDda(s) log\u00EDsticas")),
                react_1.default.createElement("div", { className: "mt-3 h-12 -mx-4 -mb-4 overflow-hidden" },
                    react_1.default.createElement("svg", { className: "w-full h-full", preserveAspectRatio: "none", viewBox: "0 0 160 50" },
                        react_1.default.createElement("defs", null,
                            react_1.default.createElement("linearGradient", { id: "readyGrad", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                react_1.default.createElement("stop", { offset: "0%", stopColor: "#6366f1", stopOpacity: "0.45" }),
                                react_1.default.createElement("stop", { offset: "100%", stopColor: "#818cf8", stopOpacity: "0.05" }))),
                        react_1.default.createElement("path", { d: "M 0,42 Q 35,34 68,26 T 118,16 T 160,12 L 160,50 L 0,50 Z", fill: "url(#readyGrad)" }),
                        react_1.default.createElement("path", { d: "M 0,42 Q 35,34 68,26 T 118,16 T 160,12", fill: "none", stroke: "#4f46e5", strokeLinecap: "round", strokeWidth: "2.5" })))),
            react_1.default.createElement("div", { onClick: () => onNavigate('empresas'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "Empresas Ativas"),
                    react_1.default.createElement("div", { className: "text-2xl font-black text-slate-900 mt-2 tracking-tight" }, companies.length),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-indigo-700 mt-1" }, "Base CRM cadastrada")),
                react_1.default.createElement("div", { className: "mt-3 flex items-center gap-1.5" },
                    react_1.default.createElement("span", { className: "h-2 flex-1 rounded-full bg-indigo-500/75" }),
                    react_1.default.createElement("span", { className: "h-2 w-8 rounded-full bg-sky-400/75" }),
                    react_1.default.createElement("span", { className: "h-2 w-5 rounded-full bg-purple-400/75" }))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "liquid-glass rounded-[26px] p-4 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 frosted-text-depth" }, "Alertas & Retornos"),
                    react_1.default.createElement("div", { className: "text-2xl font-black text-indigo-700 mt-2 tracking-tight" }, financials.overdueCount + openReturnsCount),
                    react_1.default.createElement("div", { className: "text-[11px] font-bold text-slate-600 mt-1" },
                        financials.overdueCount,
                        " vencido(s) \u2022 ",
                        openReturnsCount,
                        " ajuste(s)")),
                react_1.default.createElement("div", { className: "mt-3 flex items-center gap-1.5" },
                    react_1.default.createElement("span", { className: "px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60" }, (0, financeEngine_1.formatBRL)(financials.overdueTotal))))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-5" },
            react_1.default.createElement("div", { className: "md:col-span-5 liquid-glass rounded-[28px] p-6 flex flex-col justify-between relative overflow-hidden" },
                react_1.default.createElement("div", { className: "flex items-start justify-between gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60 backdrop-blur-md" },
                            react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" }),
                            "Opera\u00E7\u00E3o em Tempo Real"),
                        react_1.default.createElement("h2", { className: "text-2xl font-extrabold tracking-tight text-slate-900 mt-3 leading-snug frosted-text-depth" }, "Controle Industrial"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700 mt-1.5 max-w-sm leading-relaxed" }, "Rastreamento completo desde o arquivo CAD recebido at\u00E9 a sa\u00EDda log\u00EDstica e faturamento."))),
                react_1.default.createElement("div", { className: "grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/60" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-600 block" }, "Facas Ativas"),
                        react_1.default.createElement("span", { className: "text-3xl font-black text-slate-900 tracking-tight" }, activeProductionCount),
                        react_1.default.createElement("span", { className: "text-[10px] font-bold text-indigo-700 block mt-0.5" }, "Na bancada")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-600 block" }, "Prontas"),
                        react_1.default.createElement("span", { className: "text-3xl font-black text-emerald-700 tracking-tight" }, readyCount),
                        react_1.default.createElement("span", { className: "text-[10px] font-bold text-slate-600 block mt-0.5" }, "Finalizadas")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-600 block" }, "Empresas"),
                        react_1.default.createElement("span", { className: "text-3xl font-black text-indigo-700 tracking-tight" }, companies.length),
                        react_1.default.createElement("span", { className: "text-[10px] font-bold text-slate-600 block mt-0.5" }, "Cadastradas")))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "md:col-span-4 liquid-glass rounded-[28px] p-6 cursor-pointer flex flex-col justify-between group hover:-translate-y-0.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider" }, "Pulso Financeiro"),
                        react_1.default.createElement("p", { className: "text-3xl font-black text-emerald-700 tracking-tight mt-1" }, (0, financeEngine_1.formatBRL)(financials.receivable30d)),
                        react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-600" },
                            "A receber programado \u2022 ",
                            financials.receivableCount,
                            " t\u00EDtulos")),
                    react_1.default.createElement("div", { className: "w-10 h-10 rounded-full liquid-glass-pill group-hover:bg-indigo-600 text-slate-700 group-hover:text-indigo-700 flex items-center justify-center transition" },
                        react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-5 h-5" }))),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/60" },
                    react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-indigo-500/10 border border-indigo-300/60 backdrop-blur-md" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 text-[11px] font-bold text-indigo-700" },
                            react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-3.5 h-3.5" }),
                            react_1.default.createElement("span", null, "Vencidos")),
                        react_1.default.createElement("p", { className: "text-lg font-black text-slate-900 mt-1" }, (0, financeEngine_1.formatBRL)(financials.overdueTotal)),
                        react_1.default.createElement("span", { className: "text-[10px] font-semibold text-slate-600" },
                            financials.overdueCount,
                            " t\u00EDtulo(s)")),
                    react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-amber-500/10 border border-amber-300/60 backdrop-blur-md" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 text-[11px] font-bold text-amber-800" },
                            react_1.default.createElement(lucide_react_1.FileWarning, { className: "w-3.5 h-3.5" }),
                            react_1.default.createElement("span", null, "Entregues s/ Nota")),
                        react_1.default.createElement("p", { className: "text-lg font-black text-amber-800 mt-1" }, (0, financeEngine_1.formatBRL)(financials.unbilledTotal)),
                        react_1.default.createElement("span", { className: "text-[10px] font-semibold text-slate-600" },
                            financials.unbilledCount,
                            " s/ cobran\u00E7a")))),
            react_1.default.createElement("div", { onClick: () => onNavigate('financeiro'), className: "md:col-span-3 liquid-glass rounded-[28px] p-6 cursor-pointer flex flex-col justify-between hover:-translate-y-0.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-600" }, "Modalidades"),
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 mt-0.5" }, (0, financeEngine_1.formatBRL)(financials.totalVolume))),
                    react_1.default.createElement(lucide_react_1.CalendarClock, { className: "w-4 h-4 text-indigo-600" })),
                react_1.default.createElement("div", { className: "flex items-end justify-between gap-2 h-28 pt-4" }, financials.byModality.map((item) => {
                    const heightPct = Math.max(14, item.percentage);
                    return (react_1.default.createElement("div", { key: item.modality, className: "flex-1 min-w-0 flex flex-col items-center gap-1.5 h-full justify-end" },
                        react_1.default.createElement("span", { className: "text-[10px] font-extrabold text-slate-800" },
                            item.percentage,
                            "%"),
                        react_1.default.createElement("div", { className: "w-full bg-white/45 border border-white/70 rounded-2xl h-full flex items-end p-0.5 shadow-inner" },
                            react_1.default.createElement("div", { style: {
                                    height: `${heightPct}%`,
                                    backgroundColor: item.colorHex,
                                }, className: "w-full rounded-xl transition-all duration-500 shadow-sm" })),
                        react_1.default.createElement("span", { className: "text-[9px] font-bold text-slate-700 truncate max-w-full" }, financeEngine_1.PAYMENT_MODALITY_META[item.modality]?.short.split(' ')[0])));
                })))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" },
                        react_1.default.createElement(lucide_react_1.Kanban, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 frosted-text-depth" }, "Esteira F\u00EDsica da Oficina"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "Vis\u00E3o instant\u00E2nea de onde est\u00E1 cada faca neste momento"))),
                react_1.default.createElement("button", { type: "button", onClick: () => onNavigate('esteira'), className: "liquid-glass-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-800 hover:text-indigo-700 cursor-pointer" },
                    react_1.default.createElement("span", null, "Abrir Esteira Completa"),
                    react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" }, financeEngine_1.PRODUCTION_STAGES.map((st) => {
                const count = stageCounts[st.id] || 0;
                return (react_1.default.createElement("div", { key: st.id, onClick: () => onNavigate('esteira'), className: "p-4 rounded-2xl liquid-glass-subtle hover:bg-white/45 transition cursor-pointer flex flex-col justify-between" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-600" },
                            "Etapa ",
                            st.step),
                        react_1.default.createElement("span", { className: `w-2.5 h-2.5 rounded-full ${st.dotClass}` })),
                    react_1.default.createElement("p", { className: "text-2xl font-black text-slate-900 mt-2" }, count),
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700 mt-1 block truncate" }, st.label)));
            }))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Building2, { className: "w-4 h-4 text-indigo-600" }),
                            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Empresas & Ferramental")),
                        react_1.default.createElement("button", { type: "button", onClick: () => onNavigate('empresas'), className: "text-xs font-bold text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver CRM ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, companies.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhuma empresa cadastrada.")) : (companies.slice(0, 4).map((comp) => {
                        const compCount = companyOrderCounts[comp.id] || 0;
                        return (react_1.default.createElement("div", { key: comp.id, onClick: () => {
                                onSelectCompany(comp.id);
                                onNavigate('empresas');
                            }, className: "p-3 rounded-2xl liquid-glass-subtle hover:bg-white/45 flex items-center justify-between transition cursor-pointer" },
                            react_1.default.createElement("div", { className: "truncate pr-2" },
                                react_1.default.createElement("p", { className: "text-xs font-bold text-slate-900 truncate" }, comp.corporateName),
                                react_1.default.createElement("span", { className: "text-[11px] text-slate-600 font-mono" }, comp.cnpj)),
                            react_1.default.createElement("span", { className: "px-2.5 py-1 rounded-full bg-white/65 border border-white/80 text-slate-800 text-xs font-extrabold shrink-0" },
                                compCount,
                                " facas")));
                    }))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Truck, { className: "w-4 h-4 text-emerald-600" }),
                            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Log\u00EDstica de Sa\u00EDda")),
                        react_1.default.createElement("button", { type: "button", onClick: () => onNavigate('entregas'), className: "text-xs font-bold text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver Sa\u00EDdas ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, deliveries.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhuma sa\u00EDda registrada.")) : (deliveries.slice(0, 3).map((del) => (react_1.default.createElement("div", { key: del.id, onClick: () => onNavigate('entregas'), className: "p-3 rounded-2xl liquid-glass-subtle hover:bg-white/45 transition cursor-pointer" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                            react_1.default.createElement("span", { className: "text-xs font-bold text-slate-900 truncate" },
                                del.orderId,
                                " \u2022 ",
                                del.companyName),
                            react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${financeEngine_1.DELIVERY_METHOD_META[del.method]?.badgeClass}` }, financeEngine_1.DELIVERY_METHOD_META[del.method]?.label)),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-1 truncate" },
                            del.carrierOrPersonName,
                            " \u2022 ",
                            del.dispatchedAt)))))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Wrench, { className: "w-4 h-4 text-amber-600" }),
                            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Retornos & Garantia")),
                        react_1.default.createElement("button", { type: "button", onClick: () => onNavigate('retornos'), className: "text-xs font-bold text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver Bancada ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" }, returns.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhum retorno registrado.")) : (returns.slice(0, 3).map((ret) => {
                        const stMeta = financeEngine_1.RETURN_STATUS_META[ret.status];
                        return (react_1.default.createElement("div", { key: ret.id, onClick: () => onNavigate('retornos'), className: "p-3 rounded-2xl liquid-glass-subtle hover:bg-white/45 transition cursor-pointer" },
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-xs font-bold text-slate-900 truncate" },
                                    ret.orderId,
                                    " \u2022 ",
                                    ret.companyName),
                                react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${stMeta.badgeClass}` }, stMeta.label)),
                            react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-1 truncate" },
                                "Motivo: ",
                                ret.reason)));
                    }))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center justify-between mb-4" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement(lucide_react_1.Package, { className: "w-4 h-4 text-indigo-600" }),
                            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Estoque em Falta")),
                        react_1.default.createElement("button", { type: "button", onClick: () => onNavigate('estoque'), className: "text-xs font-bold text-indigo-700 hover:underline flex items-center gap-0.5 cursor-pointer" },
                            "Ver Estoque ",
                            react_1.default.createElement(lucide_react_1.ArrowUpRight, { className: "w-3.5 h-3.5" }))),
                    react_1.default.createElement("div", { className: "space-y-2.5" },
                        react_1.default.createElement("div", { onClick: () => onNavigate('estoque'), className: `p-3.5 rounded-2xl liquid-glass-subtle hover:bg-white/45 transition cursor-pointer ${lowMadeiras.length > 0 ? 'ring-1 ring-amber-400/70' : ''}` },
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, "1. Madeiras"),
                                lowMadeiras.length > 0 ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-900 border border-amber-400/70" },
                                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3 h-3 text-amber-700" }),
                                    lowMadeiras.length,
                                    " em falta")) : (react_1.default.createElement("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60" }, "0 em falta"))),
                            react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-1 truncate" }, lowMadeiras.length > 0
                                ? `Repor: ${lowMadeiras.map((i) => i.name).join(', ')}`
                                : `${madeirasStock.length} item(ns) cadastrado(s)`)),
                        react_1.default.createElement("div", { onClick: () => onNavigate('estoque'), className: `p-3.5 rounded-2xl liquid-glass-subtle hover:bg-white/45 transition cursor-pointer ${lowLaminas.length > 0 ? 'ring-1 ring-amber-400/70' : ''}` },
                            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                                react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, "2. L\u00E2minas"),
                                lowLaminas.length > 0 ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-900 border border-amber-400/70" },
                                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3 h-3 text-amber-700" }),
                                    lowLaminas.length,
                                    " em falta")) : (react_1.default.createElement("span", { className: "px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60" }, "0 em falta"))),
                            react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-1 truncate" }, lowLaminas.length > 0
                                ? `Repor: ${lowLaminas.map((i) => i.name).join(', ')}`
                                : `${laminasStock.length} item(ns) cadastrado(s)`))))))));
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
    const [showNewCompanyForm, setShowNewCompanyForm] = (0, react_1.useState)(companies.length === 0);
    const [newCorpName, setNewCorpName] = (0, react_1.useState)('');
    const [newCnpj, setNewCnpj] = (0, react_1.useState)('');
    const [newPhone, setNewPhone] = (0, react_1.useState)('');
    const [newContact, setNewContact] = (0, react_1.useState)('');
    const [toolDesc, setToolDesc] = (0, react_1.useState)('');
    const [toolAmount, setToolAmount] = (0, react_1.useState)('');
    const [toolModality, setToolModality] = (0, react_1.useState)('boleto');
    const [isCreatingCompany, setIsCreatingCompany] = (0, react_1.useState)(false);
    const [isCreatingDie, setIsCreatingDie] = (0, react_1.useState)(false);
    const [deletingKey, setDeletingKey] = (0, react_1.useState)(null);
    const ordersByCompanyId = (0, react_1.useMemo)(() => {
        const map = new Map();
        for (const o of orders) {
            const list = map.get(o.companyId);
            if (list)
                list.push(o);
            else
                map.set(o.companyId, [o]);
        }
        return map;
    }, [orders]);
    const handleCreateCompany = async (e) => {
        e.preventDefault();
        if (isCreatingCompany || !newCorpName.trim())
            return;
        setIsCreatingCompany(true);
        try {
            const ok = await onAddCompany({
                corporateName: newCorpName.trim(),
                cnpj: newCnpj.trim() || '00.000.000/0001-00',
                phone: newPhone.trim() || '(11) 99999-0000',
                contactName: newContact.trim() || 'Compras / PCP',
            });
            if (ok !== false) {
                setNewCorpName('');
                setNewCnpj('');
                setNewPhone('');
                setNewContact('');
                setShowNewCompanyForm(false);
            }
        }
        finally {
            setIsCreatingCompany(false);
        }
    };
    const handleCreateDieInCompany = async (e) => {
        e.preventDefault();
        if (isCreatingDie || !activeCompany || !toolDesc.trim())
            return;
        const val = parseFloat(toolAmount.replace(',', '.')) || 0;
        setIsCreatingDie(true);
        try {
            const ok = await onAddDieForCompany(activeCompany, toolDesc.trim(), val, toolModality);
            if (ok !== false) {
                setToolDesc('');
                setToolAmount('');
            }
        }
        finally {
            setIsCreatingDie(false);
        }
    };
    const handleDeleteComp = async (companyId) => {
        const key = `comp:${companyId}`;
        if (deletingKey)
            return;
        setDeletingKey(key);
        try {
            await onDeleteCompany(companyId);
        }
        finally {
            setDeletingKey(null);
        }
    };
    const handleDeleteOrd = async (orderId) => {
        const key = `ord:${orderId}`;
        if (deletingKey)
            return;
        setDeletingKey(key);
        try {
            await onDeleteOrder(orderId);
        }
        finally {
            setDeletingKey(null);
        }
    };
    const companyOrders = (0, react_1.useMemo)(() => (activeCompany ? ordersByCompanyId.get(activeCompany.id) || [] : []), [activeCompany, ordersByCompanyId]);
    const companyTotalValue = (0, react_1.useMemo)(() => companyOrders.reduce((acc, o) => acc + (o.amount || 0), 0), [companyOrders]);
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Cadastro de Empresas"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Selecione uma empresa para consultar todo o hist\u00F3rico de facas ou cadastrar uma nova ferramenta vinculada.")),
            react_1.default.createElement("button", { type: "button", onClick: () => setShowNewCompanyForm((prev) => !prev), className: "liquid-glass-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-slate-900 hover:text-indigo-700 transition cursor-pointer" },
                react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 text-indigo-600" }),
                react_1.default.createElement("span", null, showNewCompanyForm ? 'Fechar Cadastro' : 'Nova Empresa Cliente'))),
        showNewCompanyForm && (react_1.default.createElement("form", { onSubmit: handleCreateCompany, className: "liquid-glass rounded-[28px] p-6 space-y-4 ring-2 ring-indigo-400/40" },
            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-indigo-700" }, "Cadastrar Nova Empresa / Gr\u00E1fica Cliente"),
            react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3" },
                react_1.default.createElement("input", { type: "text", required: true, value: newCorpName, onChange: (e) => setNewCorpName(e.target.value), placeholder: "Raz\u00E3o Social / Nome Fantasia *", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newCnpj, onChange: (e) => setNewCnpj(e.target.value), placeholder: "CNPJ (ex: 14.528.910/0001-42)", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newPhone, onChange: (e) => setNewPhone(e.target.value), placeholder: "Telefone / WhatsApp", className: inputClass }),
                react_1.default.createElement("input", { type: "text", value: newContact, onChange: (e) => setNewContact(e.target.value), placeholder: "Respons\u00E1vel (Compras / PCP)", className: inputClass })),
            react_1.default.createElement("div", { className: "flex justify-end" },
                react_1.default.createElement("button", { type: "submit", disabled: isCreatingCompany, className: "px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-md inline-flex items-center gap-1.5 transition cursor-pointer" }, isCreatingCompany ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin" }),
                    react_1.default.createElement("span", null, "Salvando..."))) : (react_1.default.createElement("span", null, "Salvar Empresa")))))),
        companies.length === 0 ? (react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-10 border-dashed text-center space-y-2" },
            react_1.default.createElement(lucide_react_1.Building2, { className: "w-8 h-8 text-indigo-600 mx-auto" }),
            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Nenhuma empresa cadastrada ainda"),
            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 max-w-md mx-auto" }, "Utilize o formul\u00E1rio acima ou o bot\u00E3o \"Nova OS\" para cadastrar seu primeiro cliente e iniciar o controle de ferramental."))) : (react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("div", { className: "lg:col-span-5 space-y-3" }, companies.map((comp) => {
                const linked = ordersByCompanyId.get(comp.id) || [];
                const sumVal = linked.reduce((acc, o) => acc + (o.amount || 0), 0);
                const isSelected = activeCompany?.id === comp.id;
                const isDeletingThis = deletingKey === `comp:${comp.id}`;
                return (react_1.default.createElement("div", { key: comp.id, onClick: () => onSelectCompany(comp.id), className: `liquid-glass rounded-[26px] p-5 transition-all cursor-pointer ${isSelected
                        ? 'ring-2 ring-indigo-500/70 bg-white/45'
                        : 'hover:bg-white/35'}` },
                    react_1.default.createElement("div", { className: "flex items-start justify-between gap-3" },
                        react_1.default.createElement("div", { className: "flex items-start gap-3" },
                            react_1.default.createElement("div", { className: `w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${isSelected
                                    ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white border-white/40 shadow-md'
                                    : 'bg-white/65 text-indigo-600 border-white/80'}` },
                                react_1.default.createElement(lucide_react_1.Building2, { className: "w-5 h-5" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 leading-snug" }, comp.corporateName),
                                react_1.default.createElement("p", { className: "text-xs font-mono text-slate-600 mt-0.5" },
                                    "CNPJ: ",
                                    comp.cnpj))),
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 shrink-0" },
                            react_1.default.createElement("span", { className: "px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-300/60 text-xs font-bold text-indigo-800" },
                                linked.length,
                                " ",
                                linked.length === 1 ? 'faca' : 'facas'),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingKey), onClick: (e) => {
                                    e.stopPropagation();
                                    void handleDeleteComp(comp.id);
                                }, className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir empresa e facas vinculadas", "aria-label": "Excluir empresa" }, isDeletingThis ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))),
                    react_1.default.createElement("div", { className: "mt-4 pt-3 border-t border-white/55 flex items-center justify-between text-xs text-slate-700" },
                        react_1.default.createElement("div", { className: "flex items-center gap-3" },
                            react_1.default.createElement("span", { className: "flex items-center gap-1 font-medium" },
                                react_1.default.createElement(lucide_react_1.Phone, { className: "w-3.5 h-3.5 text-emerald-600" }),
                                comp.phone),
                            react_1.default.createElement("span", { className: "hidden sm:flex items-center gap-1 font-medium" },
                                react_1.default.createElement(lucide_react_1.UserCheck, { className: "w-3.5 h-3.5 text-indigo-600" }),
                                comp.contactName)),
                        react_1.default.createElement("span", { className: "font-mono font-extrabold text-slate-900" }, (0, financeEngine_1.formatBRL)(sumVal)))));
            })),
            activeCompany && (react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-6" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/60" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-indigo-700" }, "Ficha de Ferramental do Cliente"),
                        react_1.default.createElement("h3", { className: "text-xl font-extrabold text-slate-900 mt-0.5 frosted-text-depth" }, activeCompany.corporateName),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 mt-1" },
                            "CNPJ: ",
                            react_1.default.createElement("span", { className: "font-mono text-slate-800" }, activeCompany.cnpj),
                            " \u2022 WhatsApp: ",
                            react_1.default.createElement("span", { className: "text-slate-800" }, activeCompany.phone),
                            " \u2022 Contato: ",
                            react_1.default.createElement("span", { className: "text-slate-800" }, activeCompany.contactName))),
                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                        react_1.default.createElement("div", { className: "p-3.5 rounded-2xl liquid-glass-subtle text-right" },
                            react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase text-slate-600 block" }, "Volume Total Cadastrado"),
                            react_1.default.createElement("span", { className: "text-xl font-black text-emerald-700 font-mono" }, (0, financeEngine_1.formatBRL)(companyTotalValue))),
                        react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingKey), onClick: () => void handleDeleteComp(activeCompany.id), className: "btn-compact w-10 h-10 rounded-2xl liquid-glass-pill disabled:opacity-50 text-slate-600 hover:text-rose-700 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir esta empresa", "aria-label": "Excluir empresa" }, deletingKey === `comp:${activeCompany.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" }))))),
                react_1.default.createElement("form", { onSubmit: handleCreateDieInCompany, className: "p-4 rounded-2xl liquid-glass-subtle space-y-3" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900 flex items-center gap-1.5" },
                            react_1.default.createElement(lucide_react_1.Wrench, { className: "w-3.5 h-3.5 text-indigo-600" }),
                            "Vincular Nova Faca para ",
                            activeCompany.corporateName),
                        react_1.default.createElement("span", { className: "text-[11px] font-medium text-slate-600" }, "Entra em \"Arquivo Recebido\"")),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5" },
                        react_1.default.createElement("input", { type: "text", required: true, value: toolDesc, onChange: (e) => setToolDesc(e.target.value), placeholder: "Descri\u00E7\u00E3o da Faca (ex: Faca Caixa Duplex)", className: `${inputClass} sm:col-span-2` }),
                        react_1.default.createElement("input", { type: "number", step: "0.01", required: true, value: toolAmount, onChange: (e) => setToolAmount(e.target.value), placeholder: "Valor R$ (ex: 680)", className: `${inputClass} font-mono font-bold` })),
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1" },
                        react_1.default.createElement("div", { className: "flex flex-wrap gap-1.5" }, Object.keys(financeEngine_1.PAYMENT_MODALITY_META).map((mod) => {
                            const meta = financeEngine_1.PAYMENT_MODALITY_META[mod];
                            const active = toolModality === mod;
                            return (react_1.default.createElement("button", { type: "button", key: mod, onClick: () => setToolModality(mod), className: `px-3 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${active
                                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-sm'
                                    : 'liquid-glass-pill text-slate-700'}` }, meta.label));
                        })),
                        react_1.default.createElement("button", { type: "submit", disabled: isCreatingDie, className: "px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-md flex items-center gap-1.5 transition cursor-pointer shrink-0" }, isCreatingDie ? (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin" }),
                            react_1.default.createElement("span", null, "Cadastrando..."))) : (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 stroke-[2.5]" }),
                            react_1.default.createElement("span", null, "Cadastrar Faca")))))),
                react_1.default.createElement("div", { className: "space-y-2.5" },
                    react_1.default.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-600" },
                        "Hist\u00F3rico de Facas Associadas \u2022 ",
                        companyOrders.length),
                    companyOrders.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhuma faca cadastrada para esta empresa ainda.")) : (companyOrders.map((order) => {
                        const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                        const stageMeta = financeEngine_1.PRODUCTION_STAGES.find((s) => s.id === order.stage);
                        const isDeletingOrder = deletingKey === `ord:${order.id}`;
                        return (react_1.default.createElement("div", { key: order.id, className: "p-4 rounded-2xl liquid-glass-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3" },
                            react_1.default.createElement("div", { className: "space-y-1" },
                                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                    react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-300/60 font-mono text-xs font-bold text-indigo-800" }, order.id),
                                    react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${modMeta?.badgeClass}` }, modMeta?.label),
                                    react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-700 flex items-center gap-1" },
                                        react_1.default.createElement(lucide_react_1.Layers, { className: "w-3 h-3 text-indigo-600" }),
                                        stageMeta?.label)),
                                react_1.default.createElement("p", { className: "text-sm font-extrabold text-slate-900" }, order.toolDescription),
                                react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" },
                                    "Cadastrada em ",
                                    (0, financeEngine_1.formatDateBR)(order.createdAt),
                                    " \u2022 Vencimento:",
                                    ' ',
                                    (0, financeEngine_1.formatDateBR)(order.dueDate))),
                            react_1.default.createElement("div", { className: "flex items-center justify-between sm:justify-end gap-3 shrink-0" },
                                react_1.default.createElement("div", { className: "text-right font-mono" },
                                    react_1.default.createElement("span", { className: "text-base font-black text-emerald-700 block" }, (0, financeEngine_1.formatBRL)(order.amount)),
                                    react_1.default.createElement("span", { className: "text-[10px] font-medium text-slate-600" },
                                        "Atualizado: ",
                                        order.stageUpdatedAt)),
                                react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingKey), onClick: () => void handleDeleteOrd(order.id), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir esta OS / Faca", "aria-label": "Excluir ordem de servi\u00E7o" }, isDeletingOrder ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
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
const ACTIVE_PRODUCTION_STAGES = financeEngine_1.PRODUCTION_STAGES.filter((s) => s.id !== 'faca_pronta');
const OrderKanbanCard = react_1.default.memo(({ order, userRole, isPending, isExpanded, onToggleExpand, onDragStart, onDragEnd, onMoveStage, onQuickRegisterDelivery, onDeleteOrder, }) => {
    const prevStage = (0, financeEngine_1.getPrevStage)(order.stage);
    const nextStage = (0, financeEngine_1.getNextStage)(order.stage);
    const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
    const isFinalizingStep = nextStage === 'faca_pronta';
    const canDeleteOrder = userRole !== 'operador' && userRole !== 'cliente';
    return (react_1.default.createElement("div", { draggable: !isPending, onDragStart: () => onDragStart(order.id), onDragEnd: onDragEnd, className: `rounded-2xl p-3 liquid-glass-subtle hover:bg-white/45 transition-colors cursor-grab active:cursor-grabbing flex flex-col gap-2 overflow-hidden min-w-0 ${isPending ? 'opacity-75 ring-1 ring-indigo-400/70' : ''}` },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-1 min-w-0" },
            react_1.default.createElement("div", { className: "flex items-center gap-1 min-w-0 flex-wrap" },
                react_1.default.createElement("span", { className: "px-1.5 py-0.5 rounded-md bg-indigo-500/15 border border-indigo-300/60 font-mono text-[10px] font-bold text-indigo-800 shrink-0" }, order.id),
                react_1.default.createElement("span", { className: `px-1.5 py-0.5 rounded-full text-[9px] font-bold border truncate max-w-[92px] ${modMeta?.badgeClass}`, title: modMeta?.label }, modMeta?.short)),
            react_1.default.createElement("div", { className: "flex items-center gap-1 shrink-0" },
                react_1.default.createElement("button", { type: "button", onClick: () => onToggleExpand(order.id), className: "btn-compact w-6 h-6 rounded-lg bg-white/65 hover:bg-white/95 text-slate-600 hover:text-indigo-700 border border-white/80 flex items-center justify-center transition-colors cursor-pointer shrink-0", title: isExpanded ? 'Recolher detalhes' : 'Exibir mais detalhes', "aria-label": isExpanded ? 'Recolher detalhes' : 'Exibir mais detalhes' }, isExpanded ? (react_1.default.createElement(lucide_react_1.ChevronUp, { className: "w-3 h-3" })) : (react_1.default.createElement(lucide_react_1.ChevronDown, { className: "w-3 h-3" }))),
                canDeleteOrder && (react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onDeleteOrder(order.id), className: "btn-compact w-6 h-6 rounded-lg bg-white/65 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/80 flex items-center justify-center transition-colors cursor-pointer shrink-0", title: "Excluir esta OS", "aria-label": "Excluir esta OS" },
                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3 h-3" }))))),
        react_1.default.createElement("div", { className: "min-w-0" },
            react_1.default.createElement("span", { className: "text-[11px] font-bold text-slate-600 block truncate" }, order.companyName),
            react_1.default.createElement("h4", { className: "text-xs font-extrabold text-slate-900 leading-snug mt-0.5 break-words" }, order.toolDescription)),
        isExpanded && (react_1.default.createElement("div", { className: "p-2 rounded-xl bg-white/60 border border-white/80 text-[10px] space-y-1 text-slate-700" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("strong", null, "Vencimento:"),
                " ",
                (0, financeEngine_1.formatDateBR)(order.dueDate)),
            react_1.default.createElement("div", null,
                react_1.default.createElement("strong", null, "Telefone:"),
                " ",
                order.companyPhone || 'Não informado'),
            react_1.default.createElement("div", null,
                react_1.default.createElement("strong", null, "Pagamento:"),
                ' ',
                order.paymentStatus === 'pago' ? 'Pago' : 'Não Pago'))),
        react_1.default.createElement("div", { className: "flex items-center justify-between gap-1 text-[10px] text-slate-700 bg-white/55 px-2 py-1.5 rounded-xl border border-white/70 min-w-0" },
            react_1.default.createElement("span", { className: "flex items-center gap-1 font-semibold truncate min-w-0" },
                react_1.default.createElement(lucide_react_1.Clock, { className: "w-3 h-3 text-indigo-600 shrink-0" }),
                react_1.default.createElement("span", { className: "truncate" }, isPending ? 'Salvando...' : order.stageUpdatedAt)),
            react_1.default.createElement("span", { className: "font-mono font-extrabold text-emerald-700 shrink-0" }, (0, financeEngine_1.formatBRL)(order.amount))),
        react_1.default.createElement("div", { className: "flex items-center gap-1 pt-0.5 min-w-0" },
            prevStage && (react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onMoveStage(order.id, prevStage), className: "btn-compact w-7 h-7 rounded-xl bg-white/65 hover:bg-white/95 disabled:opacity-50 text-slate-700 border border-white/80 flex items-center justify-center transition-colors cursor-pointer shrink-0", title: "Voltar etapa anterior", "aria-label": "Voltar etapa anterior" },
                react_1.default.createElement(lucide_react_1.ArrowLeft, { className: "w-3.5 h-3.5" }))),
            nextStage ? (react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onMoveStage(order.id, nextStage), className: `btn-compact flex-1 min-w-0 py-1.5 px-2 rounded-xl text-[10px] font-bold disabled:opacity-50 text-white border border-white/40 shadow-sm flex items-center justify-center gap-1 transition-colors cursor-pointer ${isFinalizingStep
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600'
                    : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600'}`, title: isFinalizingStep
                    ? 'Concluir e mover para Facas Prontas'
                    : 'Avançar para a próxima etapa' },
                react_1.default.createElement("span", { className: "truncate" }, isFinalizingStep ? 'Concluir Faca' : 'Avançar'),
                isFinalizingStep ? (react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-3 h-3 shrink-0" })) : (react_1.default.createElement(lucide_react_1.ArrowRight, { className: "w-3 h-3 stroke-[2.2] shrink-0" })))) : (react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onQuickRegisterDelivery(order), className: "btn-compact flex-1 min-w-0 py-1.5 px-2 rounded-xl text-[10px] font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white border border-white/40 shadow-sm flex items-center justify-center gap-1 transition-colors cursor-pointer" },
                react_1.default.createElement(lucide_react_1.Truck, { className: "w-3 h-3 shrink-0" }),
                react_1.default.createElement("span", { className: "truncate" }, "Despachar"))))));
});
const ProductionKanban = ({ orders, userRole, pendingOrderIds = [], moveError, onMoveStage, onQuickRegisterDelivery, onDeleteOrder, }) => {
    const [activeView, setActiveView] = (0, react_1.useState)('producao');
    const [draggedId, setDraggedId] = (0, react_1.useState)(null);
    const [dragOverStage, setDragOverStage] = (0, react_1.useState)(null);
    const [expandedOrderIds, setExpandedOrderIds] = (0, react_1.useState)(() => new Set());
    const pendingSet = (0, react_1.useMemo)(() => new Set(pendingOrderIds), [pendingOrderIds]);
    const canDeleteOrder = userRole !== 'operador' && userRole !== 'cliente';
    const activeOrders = (0, react_1.useMemo)(() => orders.filter((o) => o.stage !== 'faca_pronta'), [orders]);
    const readyOrders = (0, react_1.useMemo)(() => orders.filter((o) => o.stage === 'faca_pronta'), [orders]);
    const readyTotalVolume = (0, react_1.useMemo)(() => readyOrders.reduce((acc, o) => acc + (o.amount || 0), 0), [readyOrders]);
    const handleToggleExpand = (0, react_1.useCallback)((orderId) => {
        setExpandedOrderIds((prev) => {
            const next = new Set(prev);
            if (next.has(orderId))
                next.delete(orderId);
            else
                next.add(orderId);
            return next;
        });
    }, []);
    const handleDragEnd = (0, react_1.useCallback)(() => {
        setDraggedId(null);
        setDragOverStage(null);
    }, []);
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Esteira de Produ\u00E7\u00E3o"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Arraste os cart\u00F5es ou avance etapas. Facas finalizadas v\u00E3o automaticamente para a aba Facas Prontas.")),
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                react_1.default.createElement("button", { type: "button", onClick: () => setActiveView('producao'), className: `min-h-[40px] px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 transition cursor-pointer ${activeView === 'producao'
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'liquid-glass-pill text-slate-700'}` },
                    react_1.default.createElement(lucide_react_1.Kanban, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Em Produ\u00E7\u00E3o"),
                    react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeView === 'producao'
                            ? 'bg-white/25 text-white'
                            : 'bg-white/65 text-slate-800'}` }, activeOrders.length)),
                react_1.default.createElement("button", { type: "button", onClick: () => setActiveView('prontas'), onDragOver: (e) => {
                        e.preventDefault();
                        if (dragOverStage !== 'faca_pronta') {
                            setDragOverStage('faca_pronta');
                        }
                    }, onDragLeave: () => setDragOverStage(null), onDrop: (e) => {
                        e.preventDefault();
                        setDragOverStage(null);
                        if (draggedId) {
                            const draggedOrder = orders.find((o) => o.id === draggedId);
                            if (draggedOrder && draggedOrder.stage !== 'faca_pronta') {
                                onMoveStage(draggedId, 'faca_pronta');
                            }
                            setDraggedId(null);
                        }
                    }, className: `min-h-[40px] px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 transition cursor-pointer ${activeView === 'prontas'
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-md border border-white/40'
                        : dragOverStage === 'faca_pronta'
                            ? 'bg-emerald-500/25 text-emerald-900 ring-2 ring-emerald-500 border border-emerald-400'
                            : 'liquid-glass-pill text-slate-700'}`, title: "Clique para abrir ou arraste uma faca aqui para concluir" },
                    react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Facas Prontas"),
                    react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-extrabold ${activeView === 'prontas'
                            ? 'bg-white/25 text-white'
                            : 'bg-emerald-500/15 text-emerald-800 border border-emerald-300/60'}` }, readyOrders.length)))),
        moveError && (react_1.default.createElement("div", { className: "px-4 py-2.5 rounded-2xl bg-rose-500/15 border border-rose-300/70 text-xs font-bold text-rose-800" }, moveError)),
        activeView === 'producao' ? (
        /* 5-Column Active Production Kanban (keeps active flow clean) */
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 items-start" }, ACTIVE_PRODUCTION_STAGES.map((stage) => {
            const colOrders = activeOrders.filter((o) => o.stage === stage.id);
            const colTotal = colOrders.reduce((acc, o) => acc + (o.amount || 0), 0);
            const isOver = dragOverStage === stage.id;
            return (react_1.default.createElement("div", { key: stage.id, onDragOver: (e) => {
                    e.preventDefault();
                    if (dragOverStage !== stage.id) {
                        setDragOverStage(stage.id);
                    }
                }, onDragLeave: () => setDragOverStage(null), onDrop: (e) => {
                    e.preventDefault();
                    setDragOverStage(null);
                    if (draggedId) {
                        const draggedOrder = orders.find((o) => o.id === draggedId);
                        if (draggedOrder && draggedOrder.stage !== stage.id) {
                            onMoveStage(draggedId, stage.id);
                        }
                        setDraggedId(null);
                    }
                }, className: `liquid-glass rounded-[26px] p-3.5 transition-colors min-h-[460px] flex flex-col gap-3 min-w-0 ${isOver ? 'ring-2 ring-indigo-500/70' : ''}` },
                react_1.default.createElement("div", { className: "pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("span", { className: `w-2.5 h-2.5 rounded-full ${stage.dotClass}` }),
                            react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-600" },
                                "Etapa ",
                                stage.step)),
                        react_1.default.createElement("span", { className: "px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-white/70 text-slate-900 border border-white/80 shadow-xs" }, colOrders.length)),
                    react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 mt-1.5 frosted-text-depth" }, stage.label),
                    react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-0.5" }, stage.subtitle),
                    react_1.default.createElement("div", { className: "mt-2 pt-2 border-t border-white/45 flex items-center justify-between text-[11px] font-mono" },
                        react_1.default.createElement("span", { className: "text-slate-600 font-semibold" }, "Volume:"),
                        react_1.default.createElement("span", { className: "font-extrabold text-emerald-700" }, (0, financeEngine_1.formatBRL)(colTotal)))),
                react_1.default.createElement("div", { className: "space-y-2.5 flex-1 min-w-0" }, colOrders.length === 0 ? (react_1.default.createElement("div", { className: "h-32 rounded-2xl border border-dashed border-white/75 bg-white/20 flex items-center justify-center text-xs font-medium text-slate-600 text-center px-2" },
                    "Sem facas em ",
                    stage.label)) : (colOrders.map((order) => (react_1.default.createElement(OrderKanbanCard, { key: order.id, order: order, userRole: userRole, isPending: pendingSet.has(order.id), isExpanded: expandedOrderIds.has(order.id), onToggleExpand: handleToggleExpand, onDragStart: setDraggedId, onDragEnd: handleDragEnd, onMoveStage: onMoveStage, onQuickRegisterDelivery: onQuickRegisterDelivery, onDeleteOrder: onDeleteOrder })))))));
        }))) : (
        /* Subseção Dedicada: Facas Prontas / Concluídas */
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-4 min-w-0" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/60" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-300/60 flex items-center justify-center text-emerald-700 shrink-0" },
                        react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-5 h-5" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-base font-extrabold text-slate-900" },
                            "Facas Prontas / Conclu\u00EDdas (",
                            readyOrders.length,
                            ")"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "Ferramentas finalizadas e liberadas para retirada ou despacho log\u00EDstico."))),
                react_1.default.createElement("div", { className: "liquid-glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-800" },
                    "Volume Conclu\u00EDdo:",
                    ' ',
                    react_1.default.createElement("strong", { className: "font-mono text-emerald-700" }, (0, financeEngine_1.formatBRL)(readyTotalVolume)))),
            readyOrders.length === 0 ? (react_1.default.createElement("div", { className: "p-10 rounded-2xl border border-dashed border-white/75 bg-white/20 text-center space-y-1" },
                react_1.default.createElement("p", { className: "text-sm font-bold text-slate-700" }, "Nenhuma faca conclu\u00EDda ainda."),
                react_1.default.createElement("p", { className: "text-xs text-slate-600" }, "Ao clicar em \"Concluir Faca\" na etapa Faca Ajustada, o pedido aparecer\u00E1 automaticamente aqui."))) : (react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" }, readyOrders.map((order) => {
                const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                const isPending = pendingSet.has(order.id);
                const isExpanded = expandedOrderIds.has(order.id);
                return (react_1.default.createElement("div", { key: order.id, className: `rounded-2xl p-4 liquid-glass-subtle hover:bg-white/45 transition flex flex-col justify-between gap-3 overflow-hidden min-w-0 ${isPending ? 'opacity-75 ring-1 ring-emerald-400/70' : ''}` },
                    react_1.default.createElement("div", { className: "space-y-2.5 min-w-0" },
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-1.5 min-w-0" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5 min-w-0" },
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-emerald-500/15 border border-emerald-300/60 font-mono text-[11px] font-bold text-emerald-800 shrink-0" }, order.id),
                                react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold border ${modMeta?.badgeClass}` }, modMeta?.short),
                                react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-bold border ${order.paymentStatus === 'pago'
                                        ? 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60'
                                        : 'bg-white/70 text-slate-700 border-white/80'}` }, order.paymentStatus === 'pago' ? 'Pago' : 'Não Pago')),
                            react_1.default.createElement("div", { className: "flex items-center gap-1 shrink-0" },
                                react_1.default.createElement("button", { type: "button", onClick: () => handleToggleExpand(order.id), className: "btn-compact w-7 h-7 rounded-lg bg-white/65 hover:bg-white/95 text-slate-600 hover:text-indigo-700 border border-white/80 flex items-center justify-center transition cursor-pointer shrink-0", title: isExpanded ? 'Recolher detalhes' : 'Exibir mais detalhes', "aria-label": isExpanded ? 'Recolher detalhes' : 'Exibir mais detalhes' }, isExpanded ? (react_1.default.createElement(lucide_react_1.ChevronUp, { className: "w-3.5 h-3.5" })) : (react_1.default.createElement(lucide_react_1.ChevronDown, { className: "w-3.5 h-3.5" }))),
                                canDeleteOrder && (react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onDeleteOrder(order.id), className: "btn-compact w-7 h-7 rounded-lg bg-white/65 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/80 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir esta OS", "aria-label": "Excluir esta OS" },
                                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))),
                        react_1.default.createElement("div", { className: "min-w-0" },
                            react_1.default.createElement("span", { className: "text-xs font-bold text-slate-600 block truncate" }, order.companyName),
                            react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900 leading-snug mt-0.5 break-words" }, order.toolDescription)),
                        isExpanded && (react_1.default.createElement("div", { className: "p-2.5 rounded-xl bg-white/60 border border-white/80 text-[11px] space-y-1 text-slate-700" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("strong", null, "Cadastro:"),
                                " ",
                                (0, financeEngine_1.formatDateBR)(order.createdAt)),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("strong", null, "Vencimento:"),
                                " ",
                                (0, financeEngine_1.formatDateBR)(order.dueDate)),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("strong", null, "Telefone:"),
                                " ",
                                order.companyPhone || 'Não informado'))),
                        react_1.default.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-700 bg-white/55 px-2.5 py-1.5 rounded-xl border border-white/70" },
                            react_1.default.createElement("span", { className: "flex items-center gap-1 font-semibold truncate" },
                                react_1.default.createElement(lucide_react_1.Clock, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
                                react_1.default.createElement("span", { className: "truncate" },
                                    "Conclu\u00EDda: ",
                                    order.stageUpdatedAt)),
                            react_1.default.createElement("span", { className: "font-mono font-extrabold text-emerald-700 shrink-0" }, (0, financeEngine_1.formatBRL)(order.amount)))),
                    react_1.default.createElement("div", { className: "flex items-center gap-2 pt-1" },
                        react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onMoveStage(order.id, 'faca_ajustada'), className: "btn-compact px-3 py-2 rounded-xl text-[11px] font-bold bg-white/70 hover:bg-white text-slate-700 border border-white/80 inline-flex items-center justify-center gap-1 transition cursor-pointer shrink-0", title: "Retornar para Faca Ajustada" },
                            react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3.5 h-3.5" }),
                            react_1.default.createElement("span", null, "Reabrir")),
                        react_1.default.createElement("button", { type: "button", disabled: isPending, onClick: () => onQuickRegisterDelivery(order), className: "btn-compact flex-1 py-2 px-3 rounded-xl text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white border border-white/40 shadow-sm inline-flex items-center justify-center gap-1.5 transition cursor-pointer" },
                            react_1.default.createElement(lucide_react_1.Truck, { className: "w-3.5 h-3.5 shrink-0" }),
                            react_1.default.createElement("span", null, "Despachar / Sa\u00EDda")))));
            })))))));
};
exports.ProductionKanban = ProductionKanban;

  },
  { dir: "./components" }
);

__moduleFactories["./components/ResponsiveCategoryChart"] = Object.assign(
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
exports.ResponsiveCategoryChart = void 0;
const react_1 = __importStar(require("react"));
const financeEngine_1 = require("../utils/financeEngine");
const ResponsiveCategoryChart = ({ items, total, }) => {
    const containerRef = (0, react_1.useRef)(null);
    const [width, setWidth] = (0, react_1.useState)(640);
    (0, react_1.useEffect)(() => {
        const el = containerRef.current;
        if (!el || typeof ResizeObserver === 'undefined')
            return;
        const update = () => {
            const next = Math.max(260, Math.round(el.getBoundingClientRect().width));
            setWidth(next);
        };
        update();
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const w = Math.round(entry.contentRect.width);
                if (w > 0)
                    setWidth(Math.max(260, w));
            }
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    if (items.length === 0 || total <= 0) {
        return (react_1.default.createElement("div", { ref: containerRef, className: "w-full min-w-0" },
            react_1.default.createElement("div", { className: "rounded-2xl bg-white/40 border border-white/60 p-6 text-center text-sm text-slate-600 font-medium" }, "Sem despesas ativas no per\u00EDodo para exibir no gr\u00E1fico por categoria.")));
    }
    const isCompact = width < 640;
    const maxAmount = Math.max(...items.map((i) => i.amount), 1);
    const svgWidth = Math.max(260, isCompact ? width - 16 : Math.min(540, Math.round(width * 0.56)));
    const barHeight = 22;
    const rowGap = 14;
    const topPad = 8;
    const svgHeight = topPad * 2 + items.length * (barHeight + rowGap) - rowGap;
    return (react_1.default.createElement("div", { ref: containerRef, className: "w-full min-w-0 flex flex-col md:flex-row md:items-start gap-5" },
        react_1.default.createElement("div", { className: "w-full md:w-[58%] min-w-0" },
            react_1.default.createElement("svg", { width: "100%", height: svgHeight, viewBox: `0 0 ${svgWidth} ${svgHeight}`, role: "img", "aria-label": "Gr\u00E1fico de despesas por categoria", className: "overflow-visible block" }, items.map((item, idx) => {
                const y = topPad + idx * (barHeight + rowGap);
                const trackW = Math.max(80, svgWidth - 8);
                const barW = Math.max(6, Math.round((item.amount / maxAmount) * trackW));
                return (react_1.default.createElement("g", { key: item.key },
                    react_1.default.createElement("title", null, `${item.label}: ${(0, financeEngine_1.formatBRL)(item.amount)} (${item.percentage.toFixed(1)}%)`),
                    react_1.default.createElement("rect", { x: 0, y: y, width: trackW, height: barHeight, rx: 11, fill: "rgba(255,255,255,0.65)", stroke: "rgba(255,255,255,0.9)", strokeWidth: 1 }),
                    react_1.default.createElement("rect", { x: 0, y: y, width: barW, height: barHeight, rx: 11, fill: item.colorHex }),
                    react_1.default.createElement("text", { x: barW > 74 ? 10 : barW + 8, y: y + 15, fontSize: 11, fontWeight: 700, fill: barW > 74 ? '#ffffff' : '#1e293b', style: { fontFamily: 'ui-sans-serif, system-ui, sans-serif' } },
                        item.percentage.toFixed(1),
                        "%")));
            }))),
        react_1.default.createElement("div", { className: "w-full md:w-[42%] min-w-0 space-y-2" }, items.map((item) => (react_1.default.createElement("div", { key: item.key, title: `${item.label} — ${item.count} lançamento(s)`, className: "flex items-center justify-between gap-2 px-3 py-2 rounded-2xl bg-white/55 border border-white/75 min-w-0" },
            react_1.default.createElement("div", { className: "flex items-center gap-2 min-w-0" },
                react_1.default.createElement("span", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: item.colorHex } }),
                react_1.default.createElement("span", { className: "text-xs font-bold text-slate-900 truncate" }, item.label),
                react_1.default.createElement("span", { className: "text-[11px] font-semibold text-slate-500 shrink-0" },
                    "(",
                    item.count,
                    ")")),
            react_1.default.createElement("div", { className: "text-right shrink-0" },
                react_1.default.createElement("span", { className: "text-xs font-mono font-extrabold text-slate-900 block" }, (0, financeEngine_1.formatBRL)(item.amount)),
                react_1.default.createElement("span", { className: "text-[10px] font-bold text-slate-600" },
                    item.percentage.toFixed(1),
                    "%"))))))));
};
exports.ResponsiveCategoryChart = ResponsiveCategoryChart;

  },
  { dir: "./components" }
);

__moduleFactories["./components/ExpensesSection"] = Object.assign(
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
exports.ExpensesSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const ResponsiveCategoryChart_1 = require("./ResponsiveCategoryChart");
const makeInitialFormState = (todayIso) => ({
    categoria: 'laminas',
    descricao: '',
    valorDisplay: '0,00',
    valorNum: 0,
    data_competencia: todayIso,
    data_vencimento: todayIso,
    data_pagamento: '',
    status: 'pendente',
    forma_pagamento: 'pix',
    fornecedor: '',
    observacao: '',
});
const ExpensesSection = ({ expenses, canEdit, onCreateExpense, onUpdateExpense, onDeleteExpense, }) => {
    const todayGoiasIso = (0, financeEngine_1.getTodayGoiasISO)();
    const [periodPreset, setPeriodPreset] = (0, react_1.useState)('mes_atual');
    const [customStart, setCustomStart] = (0, react_1.useState)(`${todayGoiasIso.slice(0, 7)}-01`);
    const [customEnd, setCustomEnd] = (0, react_1.useState)(todayGoiasIso);
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('todas');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('todos');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [sortField, setSortField] = (0, react_1.useState)('data_competencia');
    const [sortDir, setSortDir] = (0, react_1.useState)('desc');
    // Form modal / bottom-sheet state
    const [formOpen, setFormOpen] = (0, react_1.useState)(false);
    const [editingId, setEditingId] = (0, react_1.useState)(null);
    const [formState, setFormState] = (0, react_1.useState)(() => makeInitialFormState(todayGoiasIso));
    const [formErrors, setFormErrors] = (0, react_1.useState)({});
    const [networkError, setNetworkError] = (0, react_1.useState)(null);
    const [saving, setSaving] = (0, react_1.useState)(false);
    const [formSuccessNote, setFormSuccessNote] = (0, react_1.useState)(null);
    // Delete confirmation modal
    const [deleteTarget, setDeleteTarget] = (0, react_1.useState)(null);
    const [deleting, setDeleting] = (0, react_1.useState)(false);
    const [deleteError, setDeleteError] = (0, react_1.useState)(null);
    const periodRange = (0, react_1.useMemo)(() => (0, financeEngine_1.getExpensePeriodRange)(periodPreset, customStart, customEnd, todayGoiasIso), [periodPreset, customStart, customEnd, todayGoiasIso]);
    // Filter by selected period first (for summary & chart per Seção 3.4)
    const periodExpenses = (0, react_1.useMemo)(() => {
        return expenses.filter((exp) => {
            if (exp.deleted_at)
                return false;
            const comp = (exp.data_competencia || '').slice(0, 10);
            return comp >= periodRange.start && comp <= periodRange.end;
        });
    }, [expenses, periodRange]);
    const summary = (0, react_1.useMemo)(() => (0, financeEngine_1.computeExpensesSummary)(periodExpenses, todayGoiasIso), [periodExpenses, todayGoiasIso]);
    // Apply category, status & search filters for table & CSV export
    const filteredExpenses = (0, react_1.useMemo)(() => {
        const q = searchQuery.trim().toLowerCase();
        const list = periodExpenses.filter((exp) => {
            if (categoryFilter !== 'todas' && exp.categoria !== categoryFilter) {
                return false;
            }
            const eff = (0, financeEngine_1.computeExpenseEffectiveStatus)(exp, todayGoiasIso);
            if (statusFilter !== 'todos' && eff !== statusFilter) {
                return false;
            }
            if (q) {
                const desc = (exp.descricao || '').toLowerCase();
                const forn = (exp.fornecedor || '').toLowerCase();
                const obs = (exp.observacao || '').toLowerCase();
                const cat = (financeEngine_1.EXPENSE_CATEGORY_MAP[exp.categoria]?.label || '').toLowerCase();
                if (!desc.includes(q) &&
                    !forn.includes(q) &&
                    !obs.includes(q) &&
                    !cat.includes(q)) {
                    return false;
                }
            }
            return true;
        });
        const sorted = [...list].sort((a, b) => {
            let cmp = 0;
            if (sortField === 'valor') {
                cmp = (0, financeEngine_1.roundCurrencyBRL)(a.valor) - (0, financeEngine_1.roundCurrencyBRL)(b.valor);
            }
            else if (sortField === 'status') {
                const sa = (0, financeEngine_1.computeExpenseEffectiveStatus)(a, todayGoiasIso);
                const sb = (0, financeEngine_1.computeExpenseEffectiveStatus)(b, todayGoiasIso);
                cmp = sa.localeCompare(sb, 'pt-BR');
            }
            else {
                const va = String(a[sortField] || '');
                const vb = String(b[sortField] || '');
                cmp = va.localeCompare(vb, 'pt-BR');
            }
            return sortDir === 'asc' ? cmp : -cmp;
        });
        return sorted;
    }, [
        periodExpenses,
        categoryFilter,
        statusFilter,
        searchQuery,
        sortField,
        sortDir,
        todayGoiasIso,
    ]);
    const toggleSort = (field) => {
        if (sortField === field) {
            setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        }
        else {
            setSortField(field);
            setSortDir(field === 'valor' || field === 'data_competencia' ? 'desc' : 'asc');
        }
    };
    const openCreateModal = () => {
        setEditingId(null);
        setFormState(makeInitialFormState(todayGoiasIso));
        setFormErrors({});
        setNetworkError(null);
        setFormSuccessNote(null);
        setFormOpen(true);
    };
    const openEditModal = (exp) => {
        setEditingId(exp.id);
        const val = (0, financeEngine_1.roundCurrencyBRL)(exp.valor);
        setFormState({
            categoria: exp.categoria,
            descricao: exp.descricao || '',
            valorDisplay: (0, financeEngine_1.formatCurrencyMask)(val),
            valorNum: val,
            data_competencia: (exp.data_competencia || todayGoiasIso).slice(0, 10),
            data_vencimento: (exp.data_vencimento || '').slice(0, 10),
            data_pagamento: (exp.data_pagamento || '').slice(0, 10),
            status: exp.status,
            forma_pagamento: exp.forma_pagamento || 'pix',
            fornecedor: exp.fornecedor || '',
            observacao: exp.observacao || '',
        });
        setFormErrors({});
        setNetworkError(null);
        setFormSuccessNote(null);
        setFormOpen(true);
    };
    const handleSave = async (keepOpenAfterCreate) => {
        setNetworkError(null);
        setFormSuccessNote(null);
        const roundedValor = (0, financeEngine_1.roundCurrencyBRL)(formState.valorNum);
        const validation = (0, financeEngine_1.validateExpenseInput)({
            categoria: formState.categoria,
            descricao: formState.descricao,
            valor: roundedValor,
            data_competencia: formState.data_competencia,
        });
        if (Object.keys(validation).length > 0) {
            setFormErrors(validation);
            return;
        }
        const payload = {
            categoria: formState.categoria,
            descricao: formState.descricao.trim(),
            valor: roundedValor,
            data_competencia: formState.data_competencia.slice(0, 10),
            data_vencimento: formState.data_vencimento
                ? formState.data_vencimento.slice(0, 10)
                : undefined,
            data_pagamento: formState.status === 'pago'
                ? (formState.data_pagamento || todayGoiasIso).slice(0, 10)
                : formState.data_pagamento
                    ? formState.data_pagamento.slice(0, 10)
                    : undefined,
            status: formState.status,
            forma_pagamento: formState.forma_pagamento,
            fornecedor: formState.fornecedor.trim() || undefined,
            observacao: formState.observacao.trim() || undefined,
        };
        setSaving(true);
        try {
            if (editingId) {
                await onUpdateExpense(editingId, payload);
                setFormOpen(false);
            }
            else {
                await onCreateExpense(payload);
                if (keepOpenAfterCreate) {
                    setFormState((prev) => ({
                        ...makeInitialFormState(prev.data_competencia || todayGoiasIso),
                        categoria: prev.categoria,
                    }));
                    setFormErrors({});
                    setFormSuccessNote('Despesa salva! Você pode lançar a próxima abaixo.');
                }
                else {
                    setFormOpen(false);
                }
            }
        }
        catch (err) {
            setNetworkError(err?.message ||
                'Não foi possível salvar a despesa por falha de conexão. Seus dados no formulário foram mantidos.');
        }
        finally {
            setSaving(false);
        }
    };
    const handleConfirmDelete = async () => {
        if (!deleteTarget)
            return;
        setDeleteError(null);
        setDeleting(true);
        try {
            await onDeleteExpense(deleteTarget.id);
            setDeleteTarget(null);
        }
        catch (err) {
            setDeleteError(err?.message || 'Erro de rede ao excluir despesa. Tente novamente.');
        }
        finally {
            setDeleting(false);
        }
    };
    const handleExportCsv = () => {
        const csv = (0, financeEngine_1.buildExpensesCsvContent)(filteredExpenses, todayGoiasIso);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `despesas_${periodRange.start}_a_${periodRange.end}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-4 sm:p-6 space-y-4 min-w-0" },
            react_1.default.createElement("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 min-w-0" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("div", { className: "flex items-center gap-2 text-indigo-700 mb-1" },
                        react_1.default.createElement(lucide_react_1.Receipt, { className: "w-4 h-4 shrink-0" }),
                        react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider" }, "Monitoramento de Gastos")),
                    react_1.default.createElement("h3", { className: "text-lg sm:text-xl font-extrabold text-slate-900" }, "Despesas Operacionais e Insumos"),
                    react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 mt-0.5" },
                        "Per\u00EDodo: ",
                        (0, financeEngine_1.formatDateBR)(periodRange.start),
                        " a ",
                        (0, financeEngine_1.formatDateBR)(periodRange.end),
                        " (Hor\u00E1rio de Goi\u00E1s)")),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: handleExportCsv, className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 inline-flex items-center gap-2 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Download, { className: "w-4 h-4 text-indigo-600 shrink-0" }),
                        react_1.default.createElement("span", null, "Exportar CSV")),
                    canEdit && (react_1.default.createElement("button", { type: "button", onClick: openCreateModal, className: "min-h-[44px] px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2 transition cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4 shrink-0" }),
                        react_1.default.createElement("span", null, "Nova Despesa"))))),
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-2 border-t border-white/50" },
                react_1.default.createElement("div", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 mr-1" },
                    react_1.default.createElement(lucide_react_1.CalendarRange, { className: "w-4 h-4 text-indigo-600" }),
                    react_1.default.createElement("span", null, "Per\u00EDodo:")),
                [
                    { id: 'mes_atual', label: 'Mês Atual' },
                    { id: 'mes_anterior', label: 'Mês Anterior' },
                    { id: 'trimestre', label: 'Trimestre' },
                    { id: 'ano', label: 'Ano' },
                    { id: 'personalizado', label: 'Personalizado' },
                ].map((p) => (react_1.default.createElement("button", { key: p.id, type: "button", onClick: () => setPeriodPreset(p.id), className: `min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${periodPreset === p.id
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'liquid-glass-pill text-slate-700'}` }, p.label))),
                periodPreset === 'personalizado' && (react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto mt-1 sm:mt-0" },
                    react_1.default.createElement("input", { type: "date", value: customStart, onChange: (e) => setCustomStart(e.target.value), "aria-label": "Data inicial", className: "liquid-glass-input min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" }),
                    react_1.default.createElement("span", { className: "text-xs font-bold text-slate-600" }, "at\u00E9"),
                    react_1.default.createElement("input", { type: "date", value: customEnd, onChange: (e) => setCustomEnd(e.target.value), "aria-label": "Data final", className: "liquid-glass-input min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" }))))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] p-5 min-w-0" },
                react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block" }, "Total do Per\u00EDodo"),
                react_1.default.createElement("p", { className: "text-2xl font-mono font-black text-slate-900 mt-1.5" }, (0, financeEngine_1.formatBRL)(summary.totalPeriodo)),
                react_1.default.createElement("span", { className: "text-xs font-semibold text-slate-600 mt-1 block" },
                    summary.countAtivos,
                    " lan\u00E7amento(s) ativo(s)")),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] p-5 min-w-0" },
                react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block" }, "Pago vs Pendente"),
                react_1.default.createElement("p", { className: "text-lg font-mono font-black text-emerald-700 mt-1.5" },
                    "Pago: ",
                    (0, financeEngine_1.formatBRL)(summary.totalPago)),
                react_1.default.createElement("p", { className: "text-sm font-mono font-bold text-amber-800 mt-0.5" },
                    "Pendente: ",
                    (0, financeEngine_1.formatBRL)(summary.totalPendente))),
            react_1.default.createElement("div", { className: `rounded-[24px] p-5 min-w-0 border transition ${summary.totalAtrasado > 0
                    ? 'bg-rose-500/15 border-rose-500/70 shadow-md'
                    : 'liquid-glass'}` },
                react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                    react_1.default.createElement("span", { className: `text-[11px] font-extrabold uppercase tracking-wider ${summary.totalAtrasado > 0 ? 'text-rose-800' : 'text-slate-600'}` }, "Total Atrasado"),
                    summary.totalAtrasado > 0 && (react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-4 h-4 text-rose-700 shrink-0" }))),
                react_1.default.createElement("p", { className: `text-2xl font-mono font-black mt-1.5 ${summary.totalAtrasado > 0 ? 'text-rose-800' : 'text-slate-900'}` }, (0, financeEngine_1.formatBRL)(summary.totalAtrasado)),
                react_1.default.createElement("span", { className: `text-xs font-semibold mt-1 block ${summary.totalAtrasado > 0 ? 'text-rose-800' : 'text-slate-600'}` },
                    summary.countAtrasado,
                    " despesa(s) vencida(s)")),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] p-5 min-w-0" },
                react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-600 block" }, "Maior Gasto"),
                summary.topCategory ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("p", { className: "text-lg font-extrabold text-slate-900 mt-1.5 truncate" }, summary.topCategory.label),
                    react_1.default.createElement("p", { className: "text-sm font-mono font-bold text-indigo-700 mt-0.5" },
                        (0, financeEngine_1.formatBRL)(summary.topCategory.amount),
                        " (",
                        summary.topCategory.percentage.toFixed(1),
                        "%)"))) : (react_1.default.createElement("p", { className: "text-sm font-semibold text-slate-500 mt-2" }, "Sem lan\u00E7amentos ativos")))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-4 sm:p-6 space-y-4 min-w-0" },
            react_1.default.createElement("div", { className: "flex items-center justify-between gap-2 flex-wrap" },
                react_1.default.createElement("div", { className: "flex items-center gap-2 min-w-0" },
                    react_1.default.createElement(lucide_react_1.BarChart3, { className: "w-4 h-4 text-indigo-600 shrink-0" }),
                    react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900 uppercase tracking-wider" }, "Distribui\u00E7\u00E3o por Categoria (Exclui Cancelados)")),
                react_1.default.createElement("span", { className: "text-xs font-bold text-slate-600" },
                    summary.byCategory.length,
                    " categoria(s) com gasto no per\u00EDodo")),
            react_1.default.createElement(ResponsiveCategoryChart_1.ResponsiveCategoryChart, { items: summary.byCategory, total: summary.totalPeriodo })),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] overflow-hidden min-w-0" },
            react_1.default.createElement("div", { className: "p-4 sm:p-5 border-b border-white/60 space-y-3" },
                react_1.default.createElement("div", { className: "flex flex-col md:flex-row gap-3 min-w-0" },
                    react_1.default.createElement("div", { className: "relative flex-1 min-w-0" },
                        react_1.default.createElement(lucide_react_1.Search, { className: "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                        react_1.default.createElement("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Buscar por descri\u00E7\u00E3o ou fornecedor...", className: "liquid-glass-input w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl text-base text-slate-900" })),
                    react_1.default.createElement("div", { className: "flex flex-col sm:flex-row gap-2 sm:items-center min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5 min-w-0" },
                            react_1.default.createElement(lucide_react_1.Filter, { className: "w-4 h-4 text-slate-500 shrink-0 hidden sm:block" }),
                            react_1.default.createElement("select", { value: categoryFilter, onChange: (e) => setCategoryFilter(e.target.value), "aria-label": "Filtrar por categoria", className: "liquid-glass-input min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-slate-900 w-full sm:w-auto" },
                                react_1.default.createElement("option", { value: "todas" }, "Todas as categorias"),
                                financeEngine_1.EXPENSE_CATEGORIES.map((cat) => (react_1.default.createElement("option", { key: cat.key, value: cat.key }, cat.label))))),
                        react_1.default.createElement("select", { value: statusFilter, onChange: (e) => setStatusFilter(e.target.value), "aria-label": "Filtrar por status", className: "liquid-glass-input min-h-[44px] px-3 py-2 rounded-xl text-base font-semibold text-slate-900 w-full sm:w-auto" },
                            react_1.default.createElement("option", { value: "todos" }, "Todos os status"),
                            react_1.default.createElement("option", { value: "pendente" }, "Pendente"),
                            react_1.default.createElement("option", { value: "atrasado" }, "Atrasado"),
                            react_1.default.createElement("option", { value: "pago" }, "Pago"),
                            react_1.default.createElement("option", { value: "cancelado" }, "Cancelado")))),
                react_1.default.createElement("div", { className: "flex items-center justify-between text-xs font-bold text-slate-600" },
                    react_1.default.createElement("span", null, "Lan\u00E7amentos filtrados"),
                    react_1.default.createElement("span", { className: "font-mono text-slate-900" },
                        filteredExpenses.length,
                        " registro(s)"))),
            filteredExpenses.length === 0 ? (react_1.default.createElement("div", { className: "p-8 text-center space-y-3" },
                react_1.default.createElement("p", { className: "text-sm font-bold text-slate-700" }, "Nenhuma despesa encontrada para os filtros selecionados."),
                react_1.default.createElement("p", { className: "text-xs text-slate-600" }, "Ajuste o per\u00EDodo/filtros acima ou cadastre um novo lan\u00E7amento para monitorar os custos."),
                canEdit && (react_1.default.createElement("button", { type: "button", onClick: openCreateModal, className: "min-h-[44px] px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold inline-flex items-center gap-2 cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, "Cadastrar Primeira Despesa"))))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "md:hidden divide-y divide-white/55" }, filteredExpenses.map((exp) => {
                    const eff = (0, financeEngine_1.computeExpenseEffectiveStatus)(exp, todayGoiasIso);
                    const statusMeta = financeEngine_1.EXPENSE_STATUS_META[eff];
                    const catMeta = financeEngine_1.EXPENSE_CATEGORY_MAP[exp.categoria];
                    const payMeta = financeEngine_1.EXPENSE_PAYMENT_META[exp.forma_pagamento];
                    return (react_1.default.createElement("div", { key: exp.id, className: "p-4 space-y-2.5 min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-start justify-between gap-2 min-w-0" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5 min-w-0" },
                                react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${catMeta?.badgeClass}` }, catMeta?.label || exp.categoria),
                                react_1.default.createElement("span", { className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${statusMeta?.badgeClass}` },
                                    react_1.default.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${statusMeta?.dotClass}` }),
                                    statusMeta?.label)),
                            react_1.default.createElement("span", { className: "font-mono text-base font-black text-slate-900 shrink-0" }, (0, financeEngine_1.formatBRL)(exp.valor))),
                        react_1.default.createElement("div", { className: "grid grid-cols-2 gap-x-3 gap-y-1 text-xs min-w-0" },
                            react_1.default.createElement("div", { className: "min-w-0" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Compet\u00EAncia"),
                                react_1.default.createElement("span", { className: "font-bold text-slate-800" }, (0, financeEngine_1.formatDateBR)(exp.data_competencia))),
                            react_1.default.createElement("div", { className: "min-w-0" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Pagamento"),
                                react_1.default.createElement("span", { className: "font-bold text-slate-800" }, payMeta?.label || exp.forma_pagamento)),
                            exp.descricao && (react_1.default.createElement("div", { className: "col-span-2 min-w-0" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Descri\u00E7\u00E3o"),
                                react_1.default.createElement("span", { className: "font-semibold text-slate-900 break-words" }, exp.descricao))),
                            exp.fornecedor && (react_1.default.createElement("div", { className: "col-span-2 min-w-0" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Fornecedor"),
                                react_1.default.createElement("span", { className: "font-semibold text-slate-800 break-words" }, exp.fornecedor))),
                            exp.data_vencimento && (react_1.default.createElement("div", { className: "min-w-0" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Vencimento"),
                                react_1.default.createElement("span", { className: "font-semibold text-slate-800" }, (0, financeEngine_1.formatDateBR)(exp.data_vencimento))))),
                        canEdit && (react_1.default.createElement("div", { className: "flex items-center justify-end gap-2 pt-1" },
                            react_1.default.createElement("button", { type: "button", onClick: () => openEditModal(exp), className: "liquid-glass-pill min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Edit3, { className: "w-4 h-4 text-indigo-600" }),
                                react_1.default.createElement("span", null, "Editar")),
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    setDeleteError(null);
                                    setDeleteTarget(exp);
                                }, className: "min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-full bg-rose-500/15 hover:bg-rose-500/25 border border-rose-300/70 text-xs font-bold text-rose-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Excluir"))))));
                })),
                react_1.default.createElement("div", { className: "hidden md:block overflow-x-auto" },
                    react_1.default.createElement("table", { className: "w-full text-left border-collapse" },
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "text-[11px] uppercase tracking-wider text-slate-600 border-b border-white/60 bg-white/30" },
                                [
                                    ['data_competencia', 'Competência'],
                                    ['categoria', 'Categoria'],
                                    ['descricao', 'Descrição'],
                                    ['fornecedor', 'Fornecedor'],
                                    ['valor', 'Valor'],
                                    ['forma_pagamento', 'Pagamento'],
                                    ['status', 'Status'],
                                ].map(([field, label]) => (react_1.default.createElement("th", { key: field, className: "py-3 px-3.5 font-extrabold" },
                                    react_1.default.createElement("button", { type: "button", onClick: () => toggleSort(field), className: "inline-flex items-center gap-1 hover:text-indigo-700 cursor-pointer min-h-[32px]" },
                                        react_1.default.createElement("span", null, label),
                                        react_1.default.createElement(lucide_react_1.ArrowDownUp, { className: "w-3 h-3 opacity-60" }))))),
                                react_1.default.createElement("th", { className: "py-3 px-4 text-right font-extrabold" }, "A\u00E7\u00F5es"))),
                        react_1.default.createElement("tbody", { className: "divide-y divide-white/45 text-xs" }, filteredExpenses.map((exp) => {
                            const eff = (0, financeEngine_1.computeExpenseEffectiveStatus)(exp, todayGoiasIso);
                            const statusMeta = financeEngine_1.EXPENSE_STATUS_META[eff];
                            const catMeta = financeEngine_1.EXPENSE_CATEGORY_MAP[exp.categoria];
                            const payMeta = financeEngine_1.EXPENSE_PAYMENT_META[exp.forma_pagamento];
                            return (react_1.default.createElement("tr", { key: exp.id, className: "hover:bg-white/35 transition-colors" },
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 whitespace-nowrap font-mono font-bold text-slate-800" },
                                    (0, financeEngine_1.formatDateBR)(exp.data_competencia),
                                    exp.data_vencimento && (react_1.default.createElement("span", { className: "block text-[10px] font-normal text-slate-500" },
                                        "Venc: ",
                                        (0, financeEngine_1.formatDateBR)(exp.data_vencimento)))),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${catMeta?.badgeClass}` }, catMeta?.label || exp.categoria)),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 max-w-[240px]" },
                                    react_1.default.createElement("span", { title: exp.descricao || '—', className: "font-semibold text-slate-900 block truncate" }, exp.descricao || '—'),
                                    exp.observacao && (react_1.default.createElement("span", { title: exp.observacao, className: "text-[10px] text-slate-500 block truncate" }, exp.observacao))),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 max-w-[160px]" },
                                    react_1.default.createElement("span", { title: exp.fornecedor || '—', className: "font-medium text-slate-700 block truncate" }, exp.fornecedor || '—')),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 whitespace-nowrap font-mono font-black text-slate-900" }, (0, financeEngine_1.formatBRL)(exp.valor)),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 whitespace-nowrap font-semibold text-slate-700" }, payMeta?.short || exp.forma_pagamento),
                                react_1.default.createElement("td", { className: "py-3.5 px-3.5 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${statusMeta?.badgeClass}` },
                                        react_1.default.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${statusMeta?.dotClass}` }),
                                        statusMeta?.label)),
                                react_1.default.createElement("td", { className: "py-3.5 px-4 text-right whitespace-nowrap" }, canEdit ? (react_1.default.createElement("div", { className: "inline-flex items-center justify-end gap-1.5" },
                                    react_1.default.createElement("button", { type: "button", onClick: () => openEditModal(exp), "aria-label": "Editar despesa", title: "Editar despesa", className: "min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-indigo-500/15 text-slate-700 hover:text-indigo-700 border border-white/80 cursor-pointer" },
                                        react_1.default.createElement(lucide_react_1.Edit3, { className: "w-4 h-4" })),
                                    react_1.default.createElement("button", { type: "button", onClick: () => {
                                            setDeleteError(null);
                                            setDeleteTarget(exp);
                                        }, "aria-label": "Excluir despesa", title: "Excluir despesa", className: "min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full bg-white/70 hover:bg-rose-500/20 text-slate-600 hover:text-rose-700 border border-white/80 cursor-pointer" },
                                        react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))) : (react_1.default.createElement("span", { className: "text-[11px] text-slate-400" }, "Somente leitura")))));
                        }))))))),
        formOpen && (react_1.default.createElement("div", { className: "fixed inset-0 z-[60] bg-slate-900/45 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4" },
            react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": editingId ? 'Editar despesa' : 'Nova despesa', className: "liquid-glass w-full md:max-w-2xl max-h-[92dvh] rounded-t-[28px] md:rounded-[28px] flex flex-col overflow-hidden shadow-2xl border border-white/80" },
                react_1.default.createElement("div", { className: "px-5 py-4 border-b border-white/60 flex items-center justify-between gap-2 shrink-0" },
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("h4", { className: "text-base sm:text-lg font-extrabold text-slate-900" }, editingId ? 'Editar Despesa' : 'Lançar Nova Despesa'),
                        react_1.default.createElement("p", { className: "text-xs text-slate-600" }, "Campos marcados com * s\u00E3o obrigat\u00F3rios.")),
                    react_1.default.createElement("button", { type: "button", onClick: () => setFormOpen(false), "aria-label": "Fechar modal", className: "min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill inline-flex items-center justify-center text-slate-700 cursor-pointer shrink-0" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
                react_1.default.createElement("div", { className: "p-5 overflow-y-auto space-y-4 flex-1" },
                    networkError && (react_1.default.createElement("div", { className: "rounded-2xl bg-rose-500/15 border border-rose-500/60 p-3.5 text-xs font-bold text-rose-900 flex items-start gap-2" },
                        react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-4 h-4 text-rose-700 shrink-0 mt-0.5" }),
                        react_1.default.createElement("span", null, networkError))),
                    formSuccessNote && (react_1.default.createElement("div", { className: "rounded-2xl bg-emerald-500/15 border border-emerald-500/60 p-3.5 text-xs font-bold text-emerald-900" }, formSuccessNote)),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Categoria *"),
                            react_1.default.createElement("select", { value: formState.categoria, onChange: (e) => {
                                    const nextCat = e.target.value;
                                    setFormState((prev) => ({ ...prev, categoria: nextCat }));
                                    setFormErrors((prev) => {
                                        const copy = { ...prev };
                                        if (nextCat !== 'outros')
                                            delete copy.descricao;
                                        return copy;
                                    });
                                }, className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" }, financeEngine_1.EXPENSE_CATEGORIES.map((cat) => (react_1.default.createElement("option", { key: cat.key, value: cat.key }, cat.label))))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Valor (R$) *"),
                            react_1.default.createElement("div", { className: "relative" },
                                react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500" }, "R$"),
                                react_1.default.createElement("input", { type: "text", inputMode: "numeric", value: formState.valorDisplay, onChange: (e) => {
                                        const parsed = (0, financeEngine_1.parseCurrencyMask)(e.target.value);
                                        setFormState((prev) => ({
                                            ...prev,
                                            valorNum: parsed,
                                            valorDisplay: (0, financeEngine_1.formatCurrencyMask)(parsed),
                                        }));
                                        setFormErrors((prev) => ({ ...prev, valor: '' }));
                                    }, "aria-label": "Valor em reais", className: "liquid-glass-input w-full min-h-[44px] pl-10 pr-3.5 py-2 rounded-xl text-base font-mono font-bold text-slate-900" })),
                            formErrors.valor && (react_1.default.createElement("p", { className: "text-xs font-bold text-rose-700 mt-1" }, formErrors.valor))),
                        react_1.default.createElement("div", { className: "sm:col-span-2" },
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" },
                                "Descri\u00E7\u00E3o",
                                ' ',
                                formState.categoria === 'outros' ? (react_1.default.createElement("span", { className: "text-rose-700" }, "* (obrigat\u00F3ria para Outros)")) : (react_1.default.createElement("span", { className: "text-slate-500 font-semibold" }, "(opcional)"))),
                            react_1.default.createElement("input", { type: "text", value: formState.descricao, onChange: (e) => {
                                    setFormState((prev) => ({ ...prev, descricao: e.target.value }));
                                    setFormErrors((prev) => ({ ...prev, descricao: '' }));
                                }, placeholder: formState.categoria === 'outros'
                                    ? 'Descreva o gasto (mínimo 3 caracteres)...'
                                    : 'Ex.: Reposição de lâminas 2pt, conta mensal...', className: `liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base text-slate-900 ${formErrors.descricao ? 'ring-2 ring-rose-500' : ''}` }),
                            formErrors.descricao && (react_1.default.createElement("p", { className: "text-xs font-bold text-rose-700 mt-1" }, formErrors.descricao))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Data de Compet\u00EAncia *"),
                            react_1.default.createElement("input", { type: "date", value: formState.data_competencia, onChange: (e) => {
                                    setFormState((prev) => ({
                                        ...prev,
                                        data_competencia: e.target.value,
                                    }));
                                    setFormErrors((prev) => ({ ...prev, data_competencia: '' }));
                                }, className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" }),
                            formErrors.data_competencia && (react_1.default.createElement("p", { className: "text-xs font-bold text-rose-700 mt-1" }, formErrors.data_competencia))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Data de Vencimento"),
                            react_1.default.createElement("input", { type: "date", value: formState.data_vencimento, onChange: (e) => setFormState((prev) => ({
                                    ...prev,
                                    data_vencimento: e.target.value,
                                })), className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Status *"),
                            react_1.default.createElement("select", { value: formState.status, onChange: (e) => {
                                    const nextStatus = e.target.value;
                                    setFormState((prev) => ({
                                        ...prev,
                                        status: nextStatus,
                                        data_pagamento: nextStatus === 'pago' && !prev.data_pagamento
                                            ? todayGoiasIso
                                            : prev.data_pagamento,
                                    }));
                                }, className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" },
                                react_1.default.createElement("option", { value: "pendente" }, "Pendente"),
                                react_1.default.createElement("option", { value: "pago" }, "Pago"),
                                react_1.default.createElement("option", { value: "cancelado" }, "Cancelado"))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Forma de Pagamento *"),
                            react_1.default.createElement("select", { value: formState.forma_pagamento, onChange: (e) => setFormState((prev) => ({
                                    ...prev,
                                    forma_pagamento: e.target.value,
                                })), className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" }, Object.keys(financeEngine_1.EXPENSE_PAYMENT_META).map((pm) => (react_1.default.createElement("option", { key: pm, value: pm }, financeEngine_1.EXPENSE_PAYMENT_META[pm].label))))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Data de Pagamento"),
                            react_1.default.createElement("input", { type: "date", value: formState.data_pagamento, onChange: (e) => setFormState((prev) => ({
                                    ...prev,
                                    data_pagamento: e.target.value,
                                })), className: "liquid-glass-input w-full min-h-[44px] px-3 py-2 rounded-xl text-base text-slate-900" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Fornecedor"),
                            react_1.default.createElement("input", { type: "text", value: formState.fornecedor, onChange: (e) => setFormState((prev) => ({ ...prev, fornecedor: e.target.value })), placeholder: "Nome do fornecedor...", className: "liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base text-slate-900" })),
                        react_1.default.createElement("div", { className: "sm:col-span-2" },
                            react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1.5" }, "Observa\u00E7\u00E3o"),
                            react_1.default.createElement("textarea", { rows: 2, value: formState.observacao, onChange: (e) => setFormState((prev) => ({ ...prev, observacao: e.target.value })), placeholder: "Notas adicionais (opcional)...", className: "liquid-glass-input w-full px-3.5 py-2.5 rounded-xl text-base text-slate-900" })))),
                react_1.default.createElement("div", { className: "px-5 py-4 border-t border-white/60 bg-white/50 flex flex-wrap items-center justify-end gap-2 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]" },
                    react_1.default.createElement("button", { type: "button", disabled: saving, onClick: () => setFormOpen(false), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-sm font-bold text-slate-700 cursor-pointer" }, "Cancelar"),
                    !editingId && (react_1.default.createElement("button", { type: "button", disabled: saving, onClick: () => handleSave(true), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-sm font-bold text-indigo-800 inline-flex items-center gap-1.5 cursor-pointer" },
                        saving && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Salvar e adicionar outro"))),
                    react_1.default.createElement("button", { type: "button", disabled: saving, onClick: () => handleSave(false), className: "min-h-[44px] px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-md inline-flex items-center gap-1.5 cursor-pointer" },
                        saving && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Salvar")))))),
        deleteTarget && (react_1.default.createElement("div", { className: "fixed inset-0 z-[60] bg-slate-900/45 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4" },
            react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": "Confirmar exclus\u00E3o de despesa", className: "liquid-glass w-full md:max-w-md rounded-t-[28px] md:rounded-[28px] p-6 space-y-4 shadow-2xl border border-white/80 pb-[calc(1.5rem+env(safe-area-inset-bottom))]" },
                react_1.default.createElement("div", { className: "flex items-start gap-3" },
                    react_1.default.createElement("div", { className: "w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0" },
                        react_1.default.createElement(lucide_react_1.Trash2, { className: "w-5 h-5 text-rose-700" })),
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("h4", { className: "text-base font-extrabold text-slate-900" }, "Excluir Despesa"),
                        react_1.default.createElement("p", { className: "text-xs text-slate-700 mt-1" },
                            "Tem certeza que deseja excluir o lan\u00E7amento",
                            ' ',
                            react_1.default.createElement("strong", null, financeEngine_1.EXPENSE_CATEGORY_MAP[deleteTarget.categoria]?.label),
                            ' ',
                            "no valor de ",
                            react_1.default.createElement("strong", null, (0, financeEngine_1.formatBRL)(deleteTarget.valor)),
                            "?"))),
                deleteError && (react_1.default.createElement("div", { className: "rounded-xl bg-rose-500/15 border border-rose-500/60 p-3 text-xs font-bold text-rose-900" }, deleteError)),
                react_1.default.createElement("div", { className: "flex items-center justify-end gap-2" },
                    react_1.default.createElement("button", { type: "button", disabled: deleting, onClick: () => setDeleteTarget(null), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-sm font-bold text-slate-700 cursor-pointer" }, "Cancelar"),
                    react_1.default.createElement("button", { type: "button", disabled: deleting, onClick: handleConfirmDelete, className: "min-h-[44px] px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold inline-flex items-center gap-1.5 cursor-pointer" },
                        deleting && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Excluir"))))))));
};
exports.ExpensesSection = ExpensesSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/ExpensesSubsection"] = Object.assign(
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
exports.ExpensesSubsection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const ExpensesSubsection = ({ expenses, onUpsertMonthExpenses, }) => {
    const [selectedMonth, setSelectedMonth] = (0, react_1.useState)(() => new Date().toISOString().slice(0, 7));
    const [draftValues, setDraftValues] = (0, react_1.useState)(() => (0, financeEngine_1.createEmptyExpensesMap)());
    (0, react_1.useEffect)(() => {
        const existing = expenses.find((e) => e.month === selectedMonth);
        setDraftValues({
            ...(0, financeEngine_1.createEmptyExpensesMap)(),
            ...(existing?.values || {}),
        });
    }, [selectedMonth, expenses]);
    const monthTotal = financeEngine_1.EXPENSE_CATEGORIES.reduce((sum, cat) => sum + (draftValues[cat.key] || 0), 0);
    const handleAmountChange = (key, rawInput) => {
        const parsed = (0, financeEngine_1.parseCurrencyMask)(rawInput);
        const next = {
            ...draftValues,
            [key]: parsed,
        };
        setDraftValues(next);
        onUpsertMonthExpenses(selectedMonth, next);
    };
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 flex flex-wrap items-center justify-between gap-4" },
            react_1.default.createElement("div", { className: "flex items-center gap-3" },
                react_1.default.createElement("div", { className: "w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" },
                    react_1.default.createElement(lucide_react_1.Receipt, { className: "w-5 h-5" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-600 block" }, "Total de Despesas do M\u00EAs"),
                    react_1.default.createElement("p", { className: "text-3xl font-black text-slate-900 font-mono tracking-tight" }, (0, financeEngine_1.formatBRL)(monthTotal)))),
            react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                react_1.default.createElement("label", { htmlFor: "expense-ref-month", className: "text-xs font-bold text-slate-700 flex items-center gap-1.5" },
                    react_1.default.createElement(lucide_react_1.Calendar, { className: "w-4 h-4 text-indigo-600" }),
                    react_1.default.createElement("span", null, "M\u00EAs de Refer\u00EAncia")),
                react_1.default.createElement("input", { id: "expense-ref-month", type: "month", value: selectedMonth, onChange: (e) => setSelectedMonth(e.target.value), className: "liquid-glass-pill px-4 py-2 rounded-full text-xs font-bold font-mono text-slate-900 focus:ring-2 focus:ring-indigo-500/50 outline-none" }))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 space-y-3" },
            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 pb-2 border-b border-white/60" }, "Despesas Fixas e Operacionais"),
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, financeEngine_1.EXPENSE_CATEGORIES.map((cat) => {
                const val = draftValues[cat.key] || 0;
                return (react_1.default.createElement("div", { key: cat.key, className: "p-3.5 rounded-2xl liquid-glass-subtle flex items-center justify-between gap-3" },
                    react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, cat.label),
                    react_1.default.createElement("div", { className: "relative w-44" },
                        react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 pointer-events-none" }, "R$"),
                        react_1.default.createElement("input", { type: "text", inputMode: "numeric", "aria-label": cat.label, value: (0, financeEngine_1.formatCurrencyMask)(val), onChange: (e) => handleAmountChange(cat.key, e.target.value), className: "liquid-glass-pill w-full pl-9 pr-3.5 py-2 rounded-2xl text-right text-xs font-mono font-extrabold text-slate-900 focus:ring-2 focus:ring-indigo-500/50 outline-none" }))));
            })))));
};
exports.ExpensesSubsection = ExpensesSubsection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/CollaboratorsSubsection"] = Object.assign(
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
exports.CollaboratorsSubsection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const PROVIDER_STATUS_META = {
    pendente: {
        label: 'Pendente',
        badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-300/60',
    },
    pago: {
        label: 'Pago',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60',
    },
    atrasado: {
        label: 'Atrasado',
        badgeClass: 'bg-rose-500/15 text-rose-800 border-rose-300/60',
    },
};
const CollaboratorsSubsection = ({ providers, payrollEmployees, onAddProvider, onUpdateProvider, onDeleteProvider, onAddPayrollEmployee, onUpdatePayrollEmployee, onDeletePayrollEmployee, }) => {
    const [activeTab, setActiveTab] = (0, react_1.useState)('prestadores');
    // Providers Form State
    const [editProvId, setEditProvId] = (0, react_1.useState)(null);
    const [provName, setProvName] = (0, react_1.useState)('');
    const [provService, setProvService] = (0, react_1.useState)('');
    const [provAmount, setProvAmount] = (0, react_1.useState)(0);
    const [provModality, setProvModality] = (0, react_1.useState)('pix');
    const [provDueDate, setProvDueDate] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [provStatus, setProvStatus] = (0, react_1.useState)('pendente');
    const [isSubmittingProv, setIsSubmittingProv] = (0, react_1.useState)(false);
    // Payroll Employees Form State
    const [editEmpId, setEditEmpId] = (0, react_1.useState)(null);
    const [empName, setEmpName] = (0, react_1.useState)('');
    const [empRoleTitle, setEmpRoleTitle] = (0, react_1.useState)('');
    const [empSalary, setEmpSalary] = (0, react_1.useState)(0);
    const [empAdmissionDate, setEmpAdmissionDate] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [isSubmittingEmp, setIsSubmittingEmp] = (0, react_1.useState)(false);
    const [deletingKey, setDeletingKey] = (0, react_1.useState)(null);
    const totalProviders = providers.reduce((sum, p) => sum + (p.amount || 0), 0);
    const totalPayroll = payrollEmployees.reduce((sum, e) => sum + (e.salary || 0), 0);
    const resetProviderForm = () => {
        setEditProvId(null);
        setProvName('');
        setProvService('');
        setProvAmount(0);
        setProvModality('pix');
        setProvDueDate((0, financeEngine_1.toISODate)());
        setProvStatus('pendente');
    };
    const resetEmployeeForm = () => {
        setEditEmpId(null);
        setEmpName('');
        setEmpRoleTitle('');
        setEmpSalary(0);
        setEmpAdmissionDate((0, financeEngine_1.toISODate)());
    };
    const handleProviderSubmit = async (e) => {
        e.preventDefault();
        if (isSubmittingProv || !provName.trim() || !provService.trim())
            return;
        const payload = {
            name: provName.trim(),
            service: provService.trim(),
            amount: provAmount,
            paymentModality: provModality,
            dueDate: provDueDate || (0, financeEngine_1.toISODate)(),
            status: provStatus,
        };
        setIsSubmittingProv(true);
        try {
            const ok = editProvId
                ? await onUpdateProvider(editProvId, payload)
                : await onAddProvider(payload);
            if (ok !== false) {
                resetProviderForm();
            }
        }
        finally {
            setIsSubmittingProv(false);
        }
    };
    const handleEmployeeSubmit = async (e) => {
        e.preventDefault();
        if (isSubmittingEmp || !empName.trim() || !empRoleTitle.trim())
            return;
        const payload = {
            name: empName.trim(),
            roleTitle: empRoleTitle.trim(),
            salary: empSalary,
            admissionDate: empAdmissionDate || (0, financeEngine_1.toISODate)(),
        };
        setIsSubmittingEmp(true);
        try {
            const ok = editEmpId
                ? await onUpdatePayrollEmployee(editEmpId, payload)
                : await onAddPayrollEmployee(payload);
            if (ok !== false) {
                resetEmployeeForm();
            }
        }
        finally {
            setIsSubmittingEmp(false);
        }
    };
    const handleDeleteProv = async (id) => {
        if (deletingKey)
            return;
        setDeletingKey(`prov:${id}`);
        try {
            await onDeleteProvider(id);
            if (editProvId === id)
                resetProviderForm();
        }
        finally {
            setDeletingKey(null);
        }
    };
    const handleDeleteEmp = async (id) => {
        if (deletingKey)
            return;
        setDeletingKey(`emp:${id}`);
        try {
            await onDeletePayrollEmployee(id);
            if (editEmpId === id)
                resetEmployeeForm();
        }
        finally {
            setDeletingKey(null);
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 flex flex-wrap items-center justify-between gap-4" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                react_1.default.createElement("button", { type: "button", onClick: () => setActiveTab('prestadores'), className: `px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 transition cursor-pointer ${activeTab === 'prestadores'
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'liquid-glass-pill text-slate-700'}` },
                    react_1.default.createElement(lucide_react_1.Briefcase, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Prestadores de Servi\u00E7o"),
                    react_1.default.createElement("span", { className: "px-1.5 py-0.5 rounded-full bg-white/25 text-[10px]" }, providers.length)),
                react_1.default.createElement("button", { type: "button", onClick: () => setActiveTab('funcionarios'), className: `px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 transition cursor-pointer ${activeTab === 'funcionarios'
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'liquid-glass-pill text-slate-700'}` },
                    react_1.default.createElement(lucide_react_1.Users, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, "Funcion\u00E1rios"),
                    react_1.default.createElement("span", { className: "px-1.5 py-0.5 rounded-full bg-white/25 text-[10px]" }, payrollEmployees.length))),
            react_1.default.createElement("div", { className: "text-right" },
                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block" }, activeTab === 'prestadores'
                    ? 'Total Prestadores de Serviço'
                    : 'Total Folha de Funcionários'),
                react_1.default.createElement("span", { className: "text-2xl font-black text-emerald-700 font-mono" }, (0, financeEngine_1.formatBRL)(activeTab === 'prestadores' ? totalProviders : totalPayroll)))),
        activeTab === 'prestadores' ? (react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleProviderSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-3.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, editProvId
                        ? `Editar Prestador ${editProvId}`
                        : 'Cadastrar Prestador de Serviço'),
                    editProvId && (react_1.default.createElement("button", { type: "button", onClick: resetProviderForm, className: "p-1.5 rounded-full liquid-glass-pill text-slate-600 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" })))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Nome"),
                    react_1.default.createElement("input", { type: "text", required: true, value: provName, onChange: (e) => setProvName(e.target.value), placeholder: "Nome do prestador", className: inputClass })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Servi\u00E7o"),
                    react_1.default.createElement("input", { type: "text", required: true, value: provService, onChange: (e) => setProvService(e.target.value), placeholder: "Ex: Afia\u00E7\u00E3o, Frete, Manuten\u00E7\u00E3o Laser", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Valor em R$"),
                        react_1.default.createElement("div", { className: "relative" },
                            react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600" }, "R$"),
                            react_1.default.createElement("input", { type: "text", inputMode: "numeric", required: true, value: (0, financeEngine_1.formatCurrencyMask)(provAmount), onChange: (e) => setProvAmount((0, financeEngine_1.parseCurrencyMask)(e.target.value)), className: `${inputClass} pl-9 text-right font-mono font-bold` }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Vencimento"),
                        react_1.default.createElement("input", { type: "date", required: true, value: provDueDate, onChange: (e) => setProvDueDate(e.target.value), className: `${inputClass} font-mono` }))),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Forma de Pagamento"),
                        react_1.default.createElement("select", { value: provModality, onChange: (e) => setProvModality(e.target.value), className: inputClass }, Object.keys(financeEngine_1.PAYMENT_MODALITY_META).map((mod) => (react_1.default.createElement("option", { key: mod, value: mod }, financeEngine_1.PAYMENT_MODALITY_META[mod].label))))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Status"),
                        react_1.default.createElement("select", { value: provStatus, onChange: (e) => setProvStatus(e.target.value), className: inputClass }, Object.entries(PROVIDER_STATUS_META).map(([k, v]) => (react_1.default.createElement("option", { key: k, value: k }, v.label)))))),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmittingProv, className: "w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-md flex items-center justify-center gap-2 cursor-pointer" }, isSubmittingProv ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, editProvId ? 'Salvando...' : 'Adicionando...'))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, editProvId ? 'Salvar Prestador' : 'Adicionar Prestador'))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-3" },
                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 pb-2 border-b border-white/60" }, "Prestadores Cadastrados"),
                providers.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhum prestador de servi\u00E7o cadastrado.")) : (providers.map((p) => {
                    const st = PROVIDER_STATUS_META[p.status];
                    const mod = financeEngine_1.PAYMENT_MODALITY_META[p.paymentModality];
                    return (react_1.default.createElement("div", { key: p.id, className: "p-4 rounded-2xl liquid-glass-subtle flex flex-wrap items-center justify-between gap-3" },
                        react_1.default.createElement("div", { className: "space-y-1" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-900" }, p.name),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${st.badgeClass}` }, st.label),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${mod?.badgeClass}` }, mod?.label)),
                            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" },
                                p.service,
                                " \u2022 Vencimento ",
                                (0, financeEngine_1.formatDateBR)(p.dueDate))),
                        react_1.default.createElement("div", { className: "flex items-center gap-2" },
                            react_1.default.createElement("span", { className: "text-sm font-black font-mono text-slate-900 mr-1" }, (0, financeEngine_1.formatBRL)(p.amount)),
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    setEditProvId(p.id);
                                    setProvName(p.name);
                                    setProvService(p.service);
                                    setProvAmount(p.amount);
                                    setProvModality(p.paymentModality);
                                    setProvDueDate(p.dueDate);
                                    setProvStatus(p.status);
                                }, className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-indigo-500/20 text-slate-600 hover:text-indigo-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Editar prestador", "aria-label": "Editar prestador" },
                                react_1.default.createElement(lucide_react_1.Edit3, { className: "w-3.5 h-3.5" })),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingKey), onClick: () => void handleDeleteProv(p.id), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir prestador", "aria-label": "Excluir prestador" }, deletingKey === `prov:${p.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
                }))))) : (react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleEmployeeSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-3.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, editEmpId
                        ? `Editar Funcionário ${editEmpId}`
                        : 'Cadastrar Funcionário'),
                    editEmpId && (react_1.default.createElement("button", { type: "button", onClick: resetEmployeeForm, className: "p-1.5 rounded-full liquid-glass-pill text-slate-600 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" })))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Nome"),
                    react_1.default.createElement("input", { type: "text", required: true, value: empName, onChange: (e) => setEmpName(e.target.value), placeholder: "Nome completo", className: inputClass })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Cargo"),
                    react_1.default.createElement("input", { type: "text", required: true, value: empRoleTitle, onChange: (e) => setEmpRoleTitle(e.target.value), placeholder: "Ex: Serrador, Dobrador, Emborrachador", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Sal\u00E1rio em R$"),
                        react_1.default.createElement("div", { className: "relative" },
                            react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600" }, "R$"),
                            react_1.default.createElement("input", { type: "text", inputMode: "numeric", required: true, value: (0, financeEngine_1.formatCurrencyMask)(empSalary), onChange: (e) => setEmpSalary((0, financeEngine_1.parseCurrencyMask)(e.target.value)), className: `${inputClass} pl-9 text-right font-mono font-bold` }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Data de Admiss\u00E3o"),
                        react_1.default.createElement("input", { type: "date", required: true, value: empAdmissionDate, onChange: (e) => setEmpAdmissionDate(e.target.value), className: `${inputClass} font-mono` }))),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmittingEmp, className: "w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-md flex items-center justify-center gap-2 cursor-pointer" }, isSubmittingEmp ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, editEmpId ? 'Salvando...' : 'Adicionando...'))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, editEmpId ? 'Salvar Funcionário' : 'Adicionar Funcionário'))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-3" },
                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 pb-2 border-b border-white/60" }, "Quadro de Funcion\u00E1rios"),
                payrollEmployees.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhum funcion\u00E1rio cadastrado.")) : (payrollEmployees.map((emp) => (react_1.default.createElement("div", { key: emp.id, className: "p-4 rounded-2xl liquid-glass-subtle flex flex-wrap items-center justify-between gap-3" },
                    react_1.default.createElement("div", { className: "space-y-1" },
                        react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-900 block" }, emp.name),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" },
                            emp.roleTitle,
                            " \u2022 Admiss\u00E3o ",
                            (0, financeEngine_1.formatDateBR)(emp.admissionDate))),
                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                        react_1.default.createElement("span", { className: "text-sm font-black font-mono text-slate-900 mr-1" }, (0, financeEngine_1.formatBRL)(emp.salary)),
                        react_1.default.createElement("button", { type: "button", onClick: () => {
                                setEditEmpId(emp.id);
                                setEmpName(emp.name);
                                setEmpRoleTitle(emp.roleTitle);
                                setEmpSalary(emp.salary);
                                setEmpAdmissionDate(emp.admissionDate);
                            }, className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-indigo-500/20 text-slate-600 hover:text-indigo-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Editar funcion\u00E1rio", "aria-label": "Editar funcion\u00E1rio" },
                            react_1.default.createElement(lucide_react_1.Edit3, { className: "w-3.5 h-3.5" })),
                        react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingKey), onClick: () => void handleDeleteEmp(emp.id), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir funcion\u00E1rio", "aria-label": "Excluir funcion\u00E1rio" }, deletingKey === `emp:${emp.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" })))))))))))));
};
exports.CollaboratorsSubsection = CollaboratorsSubsection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/InvestmentsSubsection"] = Object.assign(
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
exports.InvestmentsSubsection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const INVESTMENT_CATEGORIES = [
    'aplicacao',
    'consorcio',
    'outros',
];
const InvestmentsSubsection = ({ investments, onAddInvestment, onUpdateInvestment, onDeleteInvestment, }) => {
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('todos');
    const [editId, setEditId] = (0, react_1.useState)(null);
    const [assetName, setAssetName] = (0, react_1.useState)('');
    const [description, setDescription] = (0, react_1.useState)('');
    const [assetType, setAssetType] = (0, react_1.useState)('aplicacao');
    const [appliedDate, setAppliedDate] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [investedAmount, setInvestedAmount] = (0, react_1.useState)(0);
    const [currentAmount, setCurrentAmount] = (0, react_1.useState)(0);
    const [customCurrentTouched, setCustomCurrentTouched] = (0, react_1.useState)(false);
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const [deletingId, setDeletingId] = (0, react_1.useState)(null);
    const filteredInvestments = (0, react_1.useMemo)(() => {
        if (categoryFilter === 'todos')
            return investments;
        return investments.filter((inv) => inv.assetType === categoryFilter);
    }, [investments, categoryFilter]);
    const totalInvested = investments.reduce((sum, inv) => sum + (inv.investedAmount || 0), 0);
    const totalsByCategory = (0, react_1.useMemo)(() => {
        return {
            aplicacao: investments
                .filter((i) => i.assetType === 'aplicacao')
                .reduce((s, i) => s + (i.investedAmount || 0), 0),
            consorcio: investments
                .filter((i) => i.assetType === 'consorcio')
                .reduce((s, i) => s + (i.investedAmount || 0), 0),
            outros: investments
                .filter((i) => i.assetType === 'outros')
                .reduce((s, i) => s + (i.investedAmount || 0), 0),
        };
    }, [investments]);
    const resetForm = () => {
        setEditId(null);
        setAssetName('');
        setDescription('');
        setAssetType('aplicacao');
        setAppliedDate((0, financeEngine_1.toISODate)());
        setInvestedAmount(0);
        setCurrentAmount(0);
        setCustomCurrentTouched(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting || !assetName.trim() || investedAmount <= 0)
            return;
        const resolvedCurrent = customCurrentTouched && currentAmount > 0 ? currentAmount : investedAmount;
        const payload = {
            assetName: assetName.trim(),
            description: description.trim() || undefined,
            assetType,
            appliedDate: appliedDate || (0, financeEngine_1.toISODate)(),
            investedAmount,
            currentAmount: resolvedCurrent,
        };
        setIsSubmitting(true);
        try {
            const ok = editId
                ? await onUpdateInvestment(editId, payload)
                : await onAddInvestment(payload);
            if (ok !== false) {
                resetForm();
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleDelete = async (id) => {
        if (deletingId)
            return;
        setDeletingId(id);
        try {
            await onDeleteInvestment(id);
            if (editId === id)
                resetForm();
        }
        finally {
            setDeletingId(null);
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5" },
                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block" }, "Total em Investimentos"),
                react_1.default.createElement("p", { className: "text-2xl font-black text-slate-900 font-mono mt-1.5" }, (0, financeEngine_1.formatBRL)(totalInvested)),
                react_1.default.createElement("span", { className: "text-xs font-semibold text-slate-600 mt-0.5 block" },
                    investments.length,
                    " lan\u00E7amento(s)")),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5" },
                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-indigo-700 block" }, "Aplica\u00E7\u00E3o"),
                react_1.default.createElement("p", { className: "text-2xl font-black text-indigo-700 font-mono mt-1.5" }, (0, financeEngine_1.formatBRL)(totalsByCategory.aplicacao))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5" },
                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-emerald-700 block" }, "Cons\u00F3rcio"),
                react_1.default.createElement("p", { className: "text-2xl font-black text-emerald-700 font-mono mt-1.5" }, (0, financeEngine_1.formatBRL)(totalsByCategory.consorcio))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5" },
                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-600 block" }, "Outros"),
                react_1.default.createElement("p", { className: "text-2xl font-black text-slate-800 font-mono mt-1.5" }, (0, financeEngine_1.formatBRL)(totalsByCategory.outros)))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", { className: "flex items-center gap-2" },
                        react_1.default.createElement(lucide_react_1.TrendingUp, { className: "w-4 h-4 text-indigo-600" }),
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, editId ? `Editar Lançamento (${editId})` : 'Novo Lançamento de Investimento')),
                    editId && (react_1.default.createElement("button", { type: "button", onClick: resetForm, className: "btn-compact w-8 h-8 rounded-full liquid-glass-pill text-slate-600 flex items-center justify-center cursor-pointer", title: "Cancelar edi\u00E7\u00E3o", "aria-label": "Cancelar edi\u00E7\u00E3o" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" })))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Categoria *"),
                    react_1.default.createElement("div", { className: "grid grid-cols-3 gap-2" }, INVESTMENT_CATEGORIES.map((cat) => {
                        const active = assetType === cat;
                        return (react_1.default.createElement("button", { key: cat, type: "button", onClick: () => setAssetType(cat), className: `min-h-[42px] px-3 py-2 rounded-2xl text-xs font-bold border transition cursor-pointer ${active
                                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-md'
                                : 'liquid-glass-pill text-slate-700'}` }, financeEngine_1.INVESTMENT_TYPE_META[cat].label));
                    }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Descri\u00E7\u00E3o do Lan\u00E7amento *"),
                    react_1.default.createElement("input", { type: "text", required: true, value: assetName, onChange: (e) => setAssetName(e.target.value), placeholder: "Ex: CDB Reserva de Caixa, Parcela Cons\u00F3rcio Laser, Aporte Extra", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Valor (R$) *"),
                        react_1.default.createElement("div", { className: "relative" },
                            react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600" }, "R$"),
                            react_1.default.createElement("input", { type: "text", inputMode: "numeric", required: true, value: (0, financeEngine_1.formatCurrencyMask)(investedAmount), onChange: (e) => {
                                    const parsed = (0, financeEngine_1.parseCurrencyMask)(e.target.value);
                                    setInvestedAmount(parsed);
                                    if (!customCurrentTouched) {
                                        setCurrentAmount(parsed);
                                    }
                                }, className: `${inputClass} pl-9 text-right font-mono font-bold` }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Data *"),
                        react_1.default.createElement("input", { type: "date", required: true, value: appliedDate, onChange: (e) => setAppliedDate(e.target.value), className: `${inputClass} font-mono` }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" },
                        "Saldo Atualizado (R$)",
                        ' ',
                        react_1.default.createElement("span", { className: "font-medium text-slate-500" }, "(opcional)")),
                    react_1.default.createElement("div", { className: "relative" },
                        react_1.default.createElement("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600" }, "R$"),
                        react_1.default.createElement("input", { type: "text", inputMode: "numeric", value: (0, financeEngine_1.formatCurrencyMask)(currentAmount), onChange: (e) => {
                                setCustomCurrentTouched(true);
                                setCurrentAmount((0, financeEngine_1.parseCurrencyMask)(e.target.value));
                            }, className: `${inputClass} pl-9 text-right font-mono font-bold` }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" },
                        "Observa\u00E7\u00F5es",
                        ' ',
                        react_1.default.createElement("span", { className: "font-medium text-slate-500" }, "(opcional)")),
                    react_1.default.createElement("input", { type: "text", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Detalhes adicionais, banco, cota ou refer\u00EAncia...", className: inputClass })),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full min-h-[44px] py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-md flex items-center justify-center gap-2 cursor-pointer" }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, editId ? 'Salvando...' : 'Registrando...'))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, editId ? 'Salvar Alterações' : 'Registrar Investimento'))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/60" },
                    react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" },
                        "Lan\u00E7amentos de Investimentos (",
                        filteredInvestments.length,
                        ")"),
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5" }, ['todos', ...INVESTMENT_CATEGORIES].map((cat) => (react_1.default.createElement("button", { key: cat, type: "button", onClick: () => setCategoryFilter(cat), className: `btn-compact px-3 py-1.5 rounded-full text-[11px] font-bold transition cursor-pointer ${categoryFilter === cat
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'liquid-glass-pill text-slate-700'}` }, cat === 'todos' ? 'Todos' : financeEngine_1.INVESTMENT_TYPE_META[cat].label))))),
                filteredInvestments.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhum lan\u00E7amento de investimento nesta categoria.")) : (react_1.default.createElement("div", { className: "space-y-3" }, filteredInvestments.map((inv) => {
                    const catMeta = financeEngine_1.INVESTMENT_TYPE_META[inv.assetType];
                    const diffBRL = inv.currentAmount - inv.investedAmount;
                    return (react_1.default.createElement("div", { key: inv.id, className: "p-4 rounded-2xl liquid-glass-subtle flex flex-wrap items-center justify-between gap-3" },
                        react_1.default.createElement("div", { className: "space-y-1 min-w-0" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-900" }, inv.assetName),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${catMeta?.badgeClass}` }, catMeta?.label)),
                            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" },
                                "Data: ",
                                react_1.default.createElement("span", { className: "font-mono" }, (0, financeEngine_1.formatDateBR)(inv.appliedDate)),
                                inv.description && react_1.default.createElement(react_1.default.Fragment, null,
                                    " \u2022 ",
                                    inv.description))),
                        react_1.default.createElement("div", { className: "flex items-center gap-2.5 shrink-0" },
                            react_1.default.createElement("div", { className: "text-right font-mono" },
                                react_1.default.createElement("span", { className: "text-sm font-black text-slate-900 block" }, (0, financeEngine_1.formatBRL)(inv.investedAmount)),
                                Math.abs(diffBRL) > 0.01 && (react_1.default.createElement("span", { className: `text-[10px] font-extrabold ${diffBRL >= 0 ? 'text-emerald-700' : 'text-rose-700'}` },
                                    "Atual: ",
                                    (0, financeEngine_1.formatBRL)(inv.currentAmount)))),
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    setEditId(inv.id);
                                    setAssetName(inv.assetName);
                                    setDescription(inv.description || '');
                                    setAssetType(inv.assetType);
                                    setAppliedDate(inv.appliedDate);
                                    setInvestedAmount(inv.investedAmount);
                                    setCurrentAmount(inv.currentAmount);
                                    setCustomCurrentTouched(Math.abs(inv.currentAmount - inv.investedAmount) > 0.01);
                                }, className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-indigo-500/20 text-slate-600 hover:text-indigo-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Editar investimento", "aria-label": "Editar investimento" },
                                react_1.default.createElement(lucide_react_1.Edit3, { className: "w-3.5 h-3.5" })),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingId), onClick: () => void handleDelete(inv.id), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir investimento", "aria-label": "Excluir investimento" }, deletingId === inv.id ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
                })))))));
};
exports.InvestmentsSubsection = InvestmentsSubsection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/MonthlyReportSubsection"] = Object.assign(
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
exports.MonthlyReportSubsection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const MONTH_NAMES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
function getMonthKey(year, monthIndex0) {
    return `${year}-${String(monthIndex0 + 1).padStart(2, '0')}`;
}
const MonthlyReportSubsection = ({ orders, despesas, serviceProviders, payrollEmployees, investments, }) => {
    const todayIso = (0, financeEngine_1.getTodayGoiasISO)();
    const initialYear = Number(todayIso.slice(0, 4)) || new Date().getFullYear();
    const initialMonth = Math.max(0, Math.min(11, (Number(todayIso.slice(5, 7)) || 1) - 1));
    const [selectedYear, setSelectedYear] = (0, react_1.useState)(initialYear);
    const [selectedMonth, setSelectedMonth] = (0, react_1.useState)(initialMonth);
    const selectedMonthKey = getMonthKey(selectedYear, selectedMonth);
    const selectedMonthEnd = `${selectedMonthKey}-31`;
    const availableYears = (0, react_1.useMemo)(() => {
        const years = new Set([initialYear - 1, initialYear, initialYear + 1]);
        orders.forEach((o) => {
            const y = Number((o.paidAt || o.createdAt || '').slice(0, 4));
            if (y > 2000)
                years.add(y);
        });
        despesas.forEach((d) => {
            const y = Number((d.data_competencia || '').slice(0, 4));
            if (y > 2000)
                years.add(y);
        });
        return Array.from(years).sort((a, b) => b - a);
    }, [orders, despesas, initialYear]);
    const groupedByMonth = (0, react_1.useMemo)(() => {
        const paidOrdersMap = new Map();
        const unpaidOrdersMap = new Map();
        const expensesMap = new Map();
        const providersMap = new Map();
        const investmentsMap = new Map();
        for (const o of orders) {
            if (o.paymentStatus === 'pago') {
                const key = (o.paidAt || o.createdAt || '').slice(0, 7);
                const arr = paidOrdersMap.get(key);
                if (arr)
                    arr.push(o);
                else
                    paidOrdersMap.set(key, [o]);
            }
            else {
                const key = (o.createdAt || '').slice(0, 7);
                const arr = unpaidOrdersMap.get(key);
                if (arr)
                    arr.push(o);
                else
                    unpaidOrdersMap.set(key, [o]);
            }
        }
        for (const d of despesas) {
            if (d.deleted_at || d.status === 'cancelado')
                continue;
            const key = (d.data_competencia || '').slice(0, 7);
            const arr = expensesMap.get(key);
            if (arr)
                arr.push(d);
            else
                expensesMap.set(key, [d]);
        }
        for (const p of serviceProviders) {
            const key = (p.dueDate || '').slice(0, 7);
            const arr = providersMap.get(key);
            if (arr)
                arr.push(p);
            else
                providersMap.set(key, [p]);
        }
        for (const inv of investments) {
            const key = (inv.appliedDate || '').slice(0, 7);
            const arr = investmentsMap.get(key);
            if (arr)
                arr.push(inv);
            else
                investmentsMap.set(key, [inv]);
        }
        return {
            paidOrdersMap,
            unpaidOrdersMap,
            expensesMap,
            providersMap,
            investmentsMap,
        };
    }, [orders, despesas, serviceProviders, investments]);
    const computeMonthTotals = (monthKey) => {
        const monthEnd = `${monthKey}-31`;
        const paidOrders = groupedByMonth.paidOrdersMap.get(monthKey) || [];
        const unpaidOrdersInMonth = groupedByMonth.unpaidOrdersMap.get(monthKey) || [];
        const totalEntradas = (0, financeEngine_1.roundCurrencyBRL)(paidOrders.reduce((sum, o) => sum + (Number(o.amount) || 0), 0));
        const totalNaoPagoMes = (0, financeEngine_1.roundCurrencyBRL)(unpaidOrdersInMonth.reduce((sum, o) => sum + (Number(o.amount) || 0), 0));
        const monthExpenses = groupedByMonth.expensesMap.get(monthKey) || [];
        const totalDespesas = (0, financeEngine_1.roundCurrencyBRL)(monthExpenses.reduce((sum, d) => sum + (Number(d.valor) || 0), 0));
        const monthProviders = groupedByMonth.providersMap.get(monthKey) || [];
        const totalPrestadores = (0, financeEngine_1.roundCurrencyBRL)(monthProviders.reduce((sum, p) => sum + (Number(p.amount) || 0), 0));
        // Saídas: Folha de funcionários admitidos até o mês selecionado
        const activePayroll = payrollEmployees.filter((emp) => !emp.admissionDate || emp.admissionDate.slice(0, 10) <= monthEnd);
        const totalFolha = (0, financeEngine_1.roundCurrencyBRL)(activePayroll.reduce((sum, emp) => sum + (Number(emp.salary) || 0), 0));
        // Investimentos lançados no mês (informativo + detalhamento)
        const monthInvestments = groupedByMonth.investmentsMap.get(monthKey) || [];
        const totalInvestimentos = (0, financeEngine_1.roundCurrencyBRL)(monthInvestments.reduce((sum, inv) => sum + (Number(inv.investedAmount) || 0), 0));
        const totalSaidas = (0, financeEngine_1.roundCurrencyBRL)(totalDespesas + totalPrestadores + totalFolha);
        const saldoLiquido = Math.round((totalEntradas - totalSaidas) * 100) / 100;
        return {
            paidOrders,
            unpaidOrdersInMonth,
            totalEntradas,
            totalNaoPagoMes,
            monthExpenses,
            totalDespesas,
            monthProviders,
            totalPrestadores,
            activePayroll,
            totalFolha,
            monthInvestments,
            totalInvestimentos,
            totalSaidas,
            saldoLiquido,
        };
    };
    const report = (0, react_1.useMemo)(() => computeMonthTotals(selectedMonthKey), [selectedMonthKey, groupedByMonth, payrollEmployees]);
    // Últimos 6 meses comparativos
    const last6Months = (0, react_1.useMemo)(() => {
        const list = [];
        for (let offset = 5; offset >= 0; offset -= 1) {
            const dt = new Date(selectedYear, selectedMonth - offset, 1);
            const key = getMonthKey(dt.getFullYear(), dt.getMonth());
            const calc = computeMonthTotals(key);
            list.push({
                key,
                label: `${MONTH_NAMES[dt.getMonth()].slice(0, 3)}/${String(dt.getFullYear()).slice(-2)}`,
                entradas: calc.totalEntradas,
                saidas: calc.totalSaidas,
                saldo: calc.saldoLiquido,
            });
        }
        return list;
    }, [selectedYear, selectedMonth, groupedByMonth, payrollEmployees]);
    const maxBarValue = (0, react_1.useMemo)(() => {
        const m = last6Months.reduce((acc, row) => Math.max(acc, row.entradas, row.saidas), 0);
        return m > 0 ? m : 1;
    }, [last6Months]);
    const expensesByCategory = (0, react_1.useMemo)(() => {
        const map = new Map();
        for (const exp of report.monthExpenses) {
            const meta = financeEngine_1.EXPENSE_CATEGORY_MAP[exp.categoria];
            const key = exp.categoria;
            const cur = map.get(key) || {
                label: meta?.label || key,
                colorHex: meta?.colorHex || '#6366f1',
                total: 0,
                count: 0,
            };
            cur.total = (0, financeEngine_1.roundCurrencyBRL)(cur.total + (Number(exp.valor) || 0));
            cur.count += 1;
            map.set(key, cur);
        }
        return Array.from(map.values()).sort((a, b) => b.total - a.total);
    }, [report.monthExpenses]);
    const handleShiftMonth = (delta) => {
        const dt = new Date(selectedYear, selectedMonth + delta, 1);
        setSelectedYear(dt.getFullYear());
        setSelectedMonth(dt.getMonth());
    };
    const handleExportCsv = () => {
        const esc = (raw) => `"${String(raw ?? '').replace(/"/g, '""')}"`;
        const lines = [
            `Fechamento Mensal de Caixa;${MONTH_NAMES[selectedMonth]}/${selectedYear}`,
            '',
            'RESUMO CONSOLIDADO;VALOR (R$)',
            `Total de Entradas (OS Pagas);${esc((0, financeEngine_1.formatDecimalBR)(report.totalEntradas))}`,
            `Despesas Operacionais;${esc((0, financeEngine_1.formatDecimalBR)(report.totalDespesas))}`,
            `Prestadores de Serviço;${esc((0, financeEngine_1.formatDecimalBR)(report.totalPrestadores))}`,
            `Folha de Funcionários;${esc((0, financeEngine_1.formatDecimalBR)(report.totalFolha))}`,
            `Total de Saídas;${esc((0, financeEngine_1.formatDecimalBR)(report.totalSaidas))}`,
            `Saldo Líquido;${esc((0, financeEngine_1.formatDecimalBR)(report.saldoLiquido))}`,
            `Aportes em Investimentos (Informativo);${esc((0, financeEngine_1.formatDecimalBR)(report.totalInvestimentos))}`,
            `OS em Aberto no Mês (Não Pago);${esc((0, financeEngine_1.formatDecimalBR)(report.totalNaoPagoMes))}`,
            '',
            'ENTRADAS REALIZADAS (OS PAGAS)',
            'OS;Cliente;Ferramenta;Forma Pagamento;Data Pagamento;Valor (R$)',
            ...report.paidOrders.map((o) => [
                esc(o.id),
                esc(o.companyName),
                esc(o.toolDescription),
                esc(financeEngine_1.PAYMENT_MODALITY_META[o.paymentModality]?.label || o.paymentModality),
                esc((0, financeEngine_1.formatDateBR)(o.paidAt || o.createdAt)),
                esc((0, financeEngine_1.formatDecimalBR)(o.amount)),
            ].join(';')),
            '',
            'SAÍDAS — DESPESAS DO MÊS',
            'Data;Categoria;Descrição;Fornecedor;Status;Valor (R$)',
            ...report.monthExpenses.map((d) => [
                esc((0, financeEngine_1.formatDateBR)(d.data_competencia)),
                esc(financeEngine_1.EXPENSE_CATEGORY_MAP[d.categoria]?.label || d.categoria),
                esc(d.descricao || ''),
                esc(d.fornecedor || ''),
                esc(d.status),
                esc((0, financeEngine_1.formatDecimalBR)(d.valor)),
            ].join(';')),
        ];
        const csv = '\uFEFF' + lines.join('\r\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `relatorio_mensal_${selectedMonthKey}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const marginPct = report.totalEntradas > 0
        ? (report.saldoLiquido / report.totalEntradas) * 100
        : 0;
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "flex items-center gap-2 text-indigo-700 mb-1" },
                    react_1.default.createElement(lucide_react_1.Calendar, { className: "w-4 h-4 shrink-0" }),
                    react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider" }, "Fechamento de Caixa Mensal")),
                react_1.default.createElement("h3", { className: "text-lg font-extrabold text-slate-900" },
                    "Relat\u00F3rio Mensal \u2014 ",
                    MONTH_NAMES[selectedMonth],
                    " de ",
                    selectedYear),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 mt-0.5" }, "Consolida\u00E7\u00E3o autom\u00E1tica de entradas liquidadas, sa\u00EDdas operacionais e saldo l\u00EDquido do per\u00EDodo.")),
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                react_1.default.createElement("button", { type: "button", onClick: () => handleShiftMonth(-1), "aria-label": "M\u00EAs anterior", className: "btn-compact w-10 h-10 rounded-full liquid-glass-pill text-slate-700 hover:text-indigo-700 flex items-center justify-center cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "w-4 h-4" })),
                react_1.default.createElement("select", { value: selectedMonth, onChange: (e) => setSelectedMonth(Number(e.target.value)), "aria-label": "Selecionar m\u00EAs", className: "liquid-glass-pill min-h-[40px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-900 outline-none" }, MONTH_NAMES.map((name, idx) => (react_1.default.createElement("option", { key: name, value: idx }, name)))),
                react_1.default.createElement("select", { value: selectedYear, onChange: (e) => setSelectedYear(Number(e.target.value)), "aria-label": "Selecionar ano", className: "liquid-glass-pill min-h-[40px] px-3.5 py-2 rounded-full text-xs font-bold font-mono text-slate-900 outline-none" }, availableYears.map((yr) => (react_1.default.createElement("option", { key: yr, value: yr }, yr)))),
                react_1.default.createElement("button", { type: "button", onClick: () => handleShiftMonth(1), "aria-label": "Pr\u00F3ximo m\u00EAs", className: "btn-compact w-10 h-10 rounded-full liquid-glass-pill text-slate-700 hover:text-indigo-700 flex items-center justify-center cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "w-4 h-4" })),
                react_1.default.createElement("button", { type: "button", onClick: handleExportCsv, className: "min-h-[40px] px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold shadow-md inline-flex items-center gap-1.5 cursor-pointer" },
                    react_1.default.createElement(lucide_react_1.Download, { className: "w-4 h-4" }),
                    react_1.default.createElement("span", null, "Exportar CSV")))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-600" }, "Total de Entradas"),
                    react_1.default.createElement("span", { className: "w-9 h-9 rounded-2xl bg-emerald-500/15 text-emerald-700 border border-emerald-300/60 flex items-center justify-center" },
                        react_1.default.createElement(lucide_react_1.ArrowUpCircle, { className: "w-5 h-5" }))),
                react_1.default.createElement("p", { className: "text-3xl font-black text-emerald-700 font-mono mt-3" }, (0, financeEngine_1.formatBRL)(report.totalEntradas)),
                react_1.default.createElement("p", { className: "text-xs font-semibold text-slate-600 mt-1" },
                    report.paidOrders.length,
                    " OS paga(s) no m\u00EAs",
                    report.totalNaoPagoMes > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                        ' ',
                        "\u2022",
                        ' ',
                        react_1.default.createElement("span", { className: "text-amber-800" },
                            (0, financeEngine_1.formatBRL)(report.totalNaoPagoMes),
                            " em aberto"))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6" },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-600" }, "Total de Sa\u00EDdas"),
                    react_1.default.createElement("span", { className: "w-9 h-9 rounded-2xl bg-rose-500/15 text-rose-700 border border-rose-300/60 flex items-center justify-center" },
                        react_1.default.createElement(lucide_react_1.ArrowDownCircle, { className: "w-5 h-5" }))),
                react_1.default.createElement("p", { className: "text-3xl font-black text-rose-700 font-mono mt-3" }, (0, financeEngine_1.formatBRL)(report.totalSaidas)),
                react_1.default.createElement("p", { className: "text-xs font-semibold text-slate-600 mt-1" },
                    "Despesas ",
                    (0, financeEngine_1.formatBRL)(report.totalDespesas),
                    " \u2022 Equipe/Prest.",
                    ' ',
                    (0, financeEngine_1.formatBRL)(report.totalFolha + report.totalPrestadores))),
            react_1.default.createElement("div", { className: `rounded-[28px] p-6 border ${report.saldoLiquido >= 0
                    ? 'liquid-glass ring-1 ring-emerald-400/60'
                    : 'bg-rose-500/15 border-rose-400/70'}` },
                react_1.default.createElement("div", { className: "flex items-center justify-between" },
                    react_1.default.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-700" }, "Saldo L\u00EDquido"),
                    react_1.default.createElement("span", { className: `w-9 h-9 rounded-2xl border flex items-center justify-center ${report.saldoLiquido >= 0
                            ? 'bg-indigo-500/15 text-indigo-700 border-indigo-300/60'
                            : 'bg-rose-500/20 text-rose-700 border-rose-400/60'}` },
                        react_1.default.createElement(lucide_react_1.Scale, { className: "w-5 h-5" }))),
                react_1.default.createElement("p", { className: `text-3xl font-black font-mono mt-3 ${report.saldoLiquido >= 0 ? 'text-slate-900' : 'text-rose-800'}` },
                    report.saldoLiquido >= 0 ? '+' : '',
                    (0, financeEngine_1.formatBRL)(report.saldoLiquido)),
                react_1.default.createElement("p", { className: "text-xs font-semibold text-slate-600 mt-1" },
                    report.totalEntradas > 0
                        ? `Margem líquida: ${marginPct.toFixed(1)}%`
                        : 'Sem entradas realizadas no período',
                    report.totalInvestimentos > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                        ' ',
                        "\u2022 Investido:",
                        ' ',
                        react_1.default.createElement("strong", { className: "text-indigo-700" }, (0, financeEngine_1.formatBRL)(report.totalInvestimentos))))))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-4" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900" }, "Comparativo dos \u00DAltimos 6 Meses (Entradas \u00D7 Sa\u00EDdas)"),
                    react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "Clique em um m\u00EAs para visualizar o detalhamento completo do fechamento.")),
                react_1.default.createElement("div", { className: "flex items-center gap-3 text-[11px] font-bold" },
                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 text-emerald-800" },
                        react_1.default.createElement("span", { className: "w-2.5 h-2.5 rounded-sm bg-emerald-500" }),
                        "Entradas"),
                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 text-rose-800" },
                        react_1.default.createElement("span", { className: "w-2.5 h-2.5 rounded-sm bg-rose-500" }),
                        "Sa\u00EDdas"))),
            react_1.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" }, last6Months.map((item) => {
                const isSelected = item.key === selectedMonthKey;
                const inPct = Math.round((item.entradas / maxBarValue) * 100);
                const outPct = Math.round((item.saidas / maxBarValue) * 100);
                const [yrStr, moStr] = item.key.split('-');
                return (react_1.default.createElement("button", { key: item.key, type: "button", onClick: () => {
                        setSelectedYear(Number(yrStr));
                        setSelectedMonth(Number(moStr) - 1);
                    }, className: `p-3.5 rounded-2xl text-left transition cursor-pointer flex flex-col justify-between gap-2.5 ${isSelected
                        ? 'bg-white/75 ring-2 ring-indigo-500/80 shadow-md'
                        : 'liquid-glass-subtle hover:bg-white/55'}` },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, item.label),
                        react_1.default.createElement("span", { className: `text-[10px] font-mono font-bold ${item.saldo >= 0 ? 'text-emerald-700' : 'text-rose-700'}` },
                            item.saldo >= 0 ? '+' : '',
                            (0, financeEngine_1.formatBRL)(item.saldo))),
                    react_1.default.createElement("div", { className: "h-20 flex items-end gap-2 pt-2" },
                        react_1.default.createElement("div", { className: "flex-1 h-full bg-white/50 rounded-xl flex items-end p-0.5" },
                            react_1.default.createElement("div", { style: { height: `${Math.max(item.entradas > 0 ? 10 : 0, inPct)}%` }, className: "w-full rounded-lg bg-emerald-500 transition-all duration-300", title: `Entradas: ${(0, financeEngine_1.formatBRL)(item.entradas)}` })),
                        react_1.default.createElement("div", { className: "flex-1 h-full bg-white/50 rounded-xl flex items-end p-0.5" },
                            react_1.default.createElement("div", { style: { height: `${Math.max(item.saidas > 0 ? 10 : 0, outPct)}%` }, className: "w-full rounded-lg bg-rose-500 transition-all duration-300", title: `Saídas: ${(0, financeEngine_1.formatBRL)(item.saidas)}` }))),
                    react_1.default.createElement("div", { className: "text-[10px] font-mono text-slate-600 space-y-0.5" },
                        react_1.default.createElement("div", { className: "truncate text-emerald-700 font-bold" },
                            "E: ",
                            (0, financeEngine_1.formatBRL)(item.entradas)),
                        react_1.default.createElement("div", { className: "truncate text-rose-700 font-bold" },
                            "S: ",
                            (0, financeEngine_1.formatBRL)(item.saidas)))));
            }))),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-5 items-start" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-3.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900" },
                        "Entradas Realizadas (",
                        report.paidOrders.length,
                        ")"),
                    react_1.default.createElement("span", { className: "font-mono text-sm font-black text-emerald-700" }, (0, financeEngine_1.formatBRL)(report.totalEntradas))),
                report.paidOrders.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/75 text-center text-xs font-medium text-slate-600" }, "Nenhuma entrada marcada como paga neste m\u00EAs.")) : (react_1.default.createElement("div", { className: "space-y-2 max-h-[380px] overflow-y-auto pr-1" }, report.paidOrders.map((order) => (react_1.default.createElement("div", { key: order.id, className: "p-3 rounded-2xl liquid-glass-subtle flex items-center justify-between gap-3 text-xs" },
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-center gap-1.5" },
                            react_1.default.createElement("span", { className: "font-mono font-bold text-indigo-700" }, order.id),
                            react_1.default.createElement("span", { className: "font-bold text-slate-900 truncate" }, order.companyName)),
                        react_1.default.createElement("p", { className: "text-[11px] text-slate-600 truncate mt-0.5" },
                            order.toolDescription,
                            " \u2022 Pago em",
                            ' ',
                            (0, financeEngine_1.formatDateBR)(order.paidAt || order.createdAt))),
                    react_1.default.createElement("span", { className: "font-mono font-extrabold text-emerald-700 shrink-0" },
                        "+",
                        (0, financeEngine_1.formatBRL)(order.amount)))))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-3.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900" }, "Composi\u00E7\u00E3o das Sa\u00EDdas"),
                    react_1.default.createElement("span", { className: "font-mono text-sm font-black text-rose-700" }, (0, financeEngine_1.formatBRL)(report.totalSaidas))),
                react_1.default.createElement("div", { className: "space-y-2.5 text-xs" },
                    expensesByCategory.map((cat) => (react_1.default.createElement("div", { key: cat.label, className: "p-3 rounded-2xl liquid-glass-subtle flex items-center justify-between gap-2" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2 min-w-0" },
                            react_1.default.createElement("span", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { backgroundColor: cat.colorHex } }),
                            react_1.default.createElement("span", { className: "font-bold text-slate-900 truncate" }, cat.label),
                            react_1.default.createElement("span", { className: "text-[10px] font-semibold text-slate-500" },
                                "(",
                                cat.count,
                                " lan\u00E7.)")),
                        react_1.default.createElement("span", { className: "font-mono font-extrabold text-rose-700 shrink-0" },
                            "-",
                            (0, financeEngine_1.formatBRL)(cat.total))))),
                    report.totalPrestadores > 0 && (react_1.default.createElement("div", { className: "p-3 rounded-2xl liquid-glass-subtle flex items-center justify-between gap-2" },
                        react_1.default.createElement("span", { className: "font-bold text-slate-900" },
                            "Prestadores de Servi\u00E7o (",
                            report.monthProviders.length,
                            ")"),
                        react_1.default.createElement("span", { className: "font-mono font-extrabold text-rose-700 shrink-0" },
                            "-",
                            (0, financeEngine_1.formatBRL)(report.totalPrestadores)))),
                    report.totalFolha > 0 && (react_1.default.createElement("div", { className: "p-3 rounded-2xl liquid-glass-subtle flex items-center justify-between gap-2" },
                        react_1.default.createElement("span", { className: "font-bold text-slate-900" },
                            "Folha de Funcion\u00E1rios (",
                            report.activePayroll.length,
                            ")"),
                        react_1.default.createElement("span", { className: "font-mono font-extrabold text-rose-700 shrink-0" },
                            "-",
                            (0, financeEngine_1.formatBRL)(report.totalFolha)))),
                    report.totalSaidas === 0 && (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/75 text-center text-xs font-medium text-slate-600" }, "Nenhuma sa\u00EDda registrada para este m\u00EAs.")),
                    report.monthInvestments.length > 0 && (react_1.default.createElement("div", { className: "pt-2 mt-2 border-t border-white/60 space-y-2" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-indigo-700" },
                            react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5" },
                                react_1.default.createElement(lucide_react_1.TrendingUp, { className: "w-3.5 h-3.5" }),
                                "Aportes em Investimentos no M\u00EAs"),
                            react_1.default.createElement("span", { className: "font-mono" }, (0, financeEngine_1.formatBRL)(report.totalInvestimentos))),
                        report.monthInvestments.map((inv) => (react_1.default.createElement("div", { key: inv.id, className: "p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-300/50 flex items-center justify-between gap-2 text-[11px]" },
                            react_1.default.createElement("span", { className: "font-bold text-slate-800 truncate" },
                                inv.assetName,
                                " (",
                                financeEngine_1.INVESTMENT_TYPE_META[inv.assetType]?.label,
                                ")"),
                            react_1.default.createElement("span", { className: "font-mono font-extrabold text-indigo-800 shrink-0" }, (0, financeEngine_1.formatBRL)(inv.investedAmount))))))))))));
};
exports.MonthlyReportSubsection = MonthlyReportSubsection;

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
const CollaboratorsSubsection_1 = require("./CollaboratorsSubsection");
const ExpensesSection_1 = require("./ExpensesSection");
const InvestmentsSubsection_1 = require("./InvestmentsSubsection");
const MonthlyReportSubsection_1 = require("./MonthlyReportSubsection");
const FinanceAnalyticsSection = ({ orders, financials, despesas, canEditDespesas, serviceProviders, payrollEmployees, investments, onTogglePaid, onEmitBilling30d, onDeleteOrder, onCreateExpense, onUpdateExpense, onDeleteExpense, onAddProvider, onUpdateProvider, onDeleteProvider, onAddPayrollEmployee, onUpdatePayrollEmployee, onDeletePayrollEmployee, onAddInvestment, onUpdateInvestment, onDeleteInvestment, }) => {
    const [activeTab, setActiveTab] = (0, react_1.useState)('visao');
    const [statusFilter, setStatusFilter] = (0, react_1.useState)('todos');
    const [copiedId, setCopiedId] = (0, react_1.useState)(null);
    const [hoveredModality, setHoveredModality] = (0, react_1.useState)(null);
    const [busyOrderAction, setBusyOrderAction] = (0, react_1.useState)(null);
    const copiedTimerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        return () => {
            if (copiedTimerRef.current) {
                window.clearTimeout(copiedTimerRef.current);
            }
        };
    }, []);
    const filteredOrders = (0, react_1.useMemo)(() => {
        if (statusFilter === 'todos')
            return orders;
        return orders.filter((o) => o.paymentStatus === statusFilter);
    }, [orders, statusFilter]);
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
        if (copiedTimerRef.current)
            window.clearTimeout(copiedTimerRef.current);
        copiedTimerRef.current = window.setTimeout(() => {
            setCopiedId((prev) => (prev === order.id ? null : prev));
        }, 2200);
    };
    const runOrderAction = async (key, fn) => {
        if (busyOrderAction)
            return;
        setBusyOrderAction(key);
        try {
            await fn();
        }
        finally {
            setBusyOrderAction(null);
        }
    };
    const radius = 68;
    const circumference = 2 * Math.PI * radius;
    const donutSegments = (0, react_1.useMemo)(() => {
        let cumulativePercent = 0;
        return financials.byModality
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
    }, [financials, circumference]);
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 min-w-0" },
            react_1.default.createElement("div", { className: "min-w-0" },
                react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Finan\u00E7as e Formas de Pagamento"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Controle do ciclo financeiro, despesas operacionais, colaboradores e investimentos.")),
            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" }, [
                { id: 'visao', label: 'Recebimentos e OS', icon: lucide_react_1.PieChart },
                { id: 'despesas', label: 'Despesas', icon: lucide_react_1.Receipt },
                { id: 'colaboradores', label: 'Colaboradores', icon: lucide_react_1.Users },
                { id: 'investimentos', label: 'Investimentos', icon: lucide_react_1.TrendingUp },
                { id: 'relatorio_mensal', label: 'Relatório Mensal', icon: lucide_react_1.BarChart3 },
            ].map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (react_1.default.createElement("button", { key: tab.id, type: "button", onClick: () => setActiveTab(tab.id), className: `min-h-[44px] px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer ${active
                        ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                        : 'liquid-glass-pill text-slate-700'}` },
                    react_1.default.createElement(Icon, { className: "w-3.5 h-3.5" }),
                    react_1.default.createElement("span", null, tab.label)));
            }))),
        activeTab === 'relatorio_mensal' && (react_1.default.createElement(MonthlyReportSubsection_1.MonthlyReportSubsection, { orders: orders, despesas: despesas, serviceProviders: serviceProviders, payrollEmployees: payrollEmployees, investments: investments })),
        activeTab === 'despesas' && (react_1.default.createElement(ExpensesSection_1.ExpensesSection, { expenses: despesas, canEdit: canEditDespesas, onCreateExpense: onCreateExpense, onUpdateExpense: onUpdateExpense, onDeleteExpense: onDeleteExpense })),
        activeTab === 'colaboradores' && (react_1.default.createElement(CollaboratorsSubsection_1.CollaboratorsSubsection, { providers: serviceProviders, payrollEmployees: payrollEmployees, onAddProvider: onAddProvider, onUpdateProvider: onUpdateProvider, onDeleteProvider: onDeleteProvider, onAddPayrollEmployee: onAddPayrollEmployee, onUpdatePayrollEmployee: onUpdatePayrollEmployee, onDeletePayrollEmployee: onDeletePayrollEmployee })),
        activeTab === 'investimentos' && (react_1.default.createElement(InvestmentsSubsection_1.InvestmentsSubsection, { investments: investments, onAddInvestment: onAddInvestment, onUpdateInvestment: onUpdateInvestment, onDeleteInvestment: onDeleteInvestment })),
        activeTab === 'visao' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5" },
                react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'a_receber' ? 'todos' : 'a_receber'), className: `liquid-glass rounded-[28px] p-6 text-left transition cursor-pointer ${statusFilter === 'a_receber' ? 'ring-2 ring-emerald-500/70' : ''}` },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700" }, "1. Total a Receber"),
                        react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-emerald-500/15 text-emerald-700 border border-emerald-300/60" },
                            react_1.default.createElement(lucide_react_1.CalendarClock, { className: "w-4 h-4" }))),
                    react_1.default.createElement("p", { className: "text-3xl font-black text-emerald-700 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.receivable30d)),
                    react_1.default.createElement("span", { className: "text-xs font-medium text-slate-600 mt-1 block" },
                        financials.receivableCount,
                        " faturas programadas \u2022 Caixa quitado",
                        ' ',
                        react_1.default.createElement("strong", { className: "text-slate-900" }, (0, financeEngine_1.formatBRL)(financials.paidTotal)))),
                react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'vencido' ? 'todos' : 'vencido'), className: `liquid-glass rounded-[28px] p-6 text-left transition cursor-pointer ${statusFilter === 'vencido' ? 'ring-2 ring-indigo-500/70' : ''}` },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-800 flex items-center gap-1.5" },
                            react_1.default.createElement("span", { className: "w-2 h-2 rounded-full bg-amber-500 animate-ping" }),
                            "2. Faturamentos Vencidos"),
                        react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-amber-500/15 text-amber-700 border border-amber-300/60" },
                            react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4" }))),
                    react_1.default.createElement("p", { className: "text-3xl font-black text-slate-900 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.overdueTotal)),
                    react_1.default.createElement("span", { className: "text-xs font-medium text-slate-600 mt-1 block" },
                        financials.overdueCount,
                        " t\u00EDtulos aguardando cobran\u00E7a")),
                react_1.default.createElement("button", { type: "button", onClick: () => setStatusFilter(statusFilter === 'sem_nota' ? 'todos' : 'sem_nota'), className: `liquid-glass rounded-[28px] p-6 text-left transition cursor-pointer ${statusFilter === 'sem_nota' ? 'ring-2 ring-amber-500/70' : ''}` },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("span", { className: "text-xs font-bold text-slate-700" }, "3. Entregues sem Nota"),
                        react_1.default.createElement("span", { className: "p-2 rounded-2xl bg-indigo-500/15 text-indigo-700 border border-indigo-300/60" },
                            react_1.default.createElement(lucide_react_1.FileWarning, { className: "w-4 h-4" }))),
                    react_1.default.createElement("p", { className: "text-3xl font-black text-indigo-700 tracking-tight mt-3" }, (0, financeEngine_1.formatBRL)(financials.unbilledTotal)),
                    react_1.default.createElement("span", { className: "text-xs font-medium text-slate-600 mt-1 block" },
                        financials.unbilledCount,
                        " facas entregues sem cobran\u00E7a"))),
            react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 min-w-0" },
                react_1.default.createElement("div", { className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 flex flex-col justify-between min-w-0" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-indigo-700" }, "Distribui\u00E7\u00E3o por Modalidade"),
                            react_1.default.createElement("h3", { className: "text-base font-extrabold text-slate-900 mt-0.5" }, "Gr\u00E1fico de Rosca")),
                        react_1.default.createElement(lucide_react_1.PieChart, { className: "w-5 h-5 text-indigo-600" })),
                    react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center justify-around gap-6 my-4" },
                        react_1.default.createElement("div", { className: "relative w-44 h-44 flex items-center justify-center shrink-0" },
                            react_1.default.createElement("svg", { className: "w-44 h-44 -rotate-90", viewBox: "0 0 180 180" },
                                react_1.default.createElement("circle", { cx: "90", cy: "90", r: radius, fill: "transparent", stroke: "rgba(255,255,255,0.55)", strokeWidth: "20" }),
                                donutSegments.map((seg) => (react_1.default.createElement("circle", { key: seg.modality, cx: "90", cy: "90", r: radius, fill: "transparent", stroke: seg.colorHex, strokeWidth: hoveredModality === seg.modality ? '24' : '20', strokeDasharray: seg.strokeDasharray, strokeDashoffset: seg.strokeDashoffset, strokeLinecap: "butt", className: "transition-all duration-300 cursor-pointer", onMouseEnter: () => setHoveredModality(seg.modality), onMouseLeave: () => setHoveredModality(null) })))),
                            react_1.default.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-4" },
                                react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-600" }, "Volume Total"),
                                react_1.default.createElement("span", { className: "text-sm font-black text-slate-900 font-mono mt-0.5" }, (0, financeEngine_1.formatBRL)(financials.totalVolume)),
                                react_1.default.createElement("span", { className: "text-[10px] text-indigo-700 font-bold mt-0.5" },
                                    orders.length,
                                    " OS"))),
                        react_1.default.createElement("div", { className: "space-y-2.5 w-full sm:w-auto" }, financials.byModality.map((item) => (react_1.default.createElement("div", { key: item.modality, onMouseEnter: () => setHoveredModality(item.modality), onMouseLeave: () => setHoveredModality(null), className: "flex items-center justify-between gap-4 text-xs cursor-pointer" },
                            react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                react_1.default.createElement("span", { className: "w-3 h-3 rounded-md shrink-0", style: { backgroundColor: item.colorHex } }),
                                react_1.default.createElement("span", { className: "text-slate-700 font-semibold" }, item.label)),
                            react_1.default.createElement("span", { className: "font-mono font-extrabold text-slate-900" },
                                item.percentage,
                                "%"))))))),
                react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-indigo-700" }, "Comparativo Financeiro e Quantidade de Pedidos"),
                        react_1.default.createElement("h3", { className: "text-base font-extrabold text-slate-900 mt-0.5" }, "Volume por Forma de Pagamento")),
                    react_1.default.createElement("div", { className: "space-y-3.5 mt-4" }, financials.byModality.map((item) => (react_1.default.createElement("div", { key: item.modality, className: "space-y-1.5" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between text-xs" },
                            react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                react_1.default.createElement("span", { className: "w-2.5 h-2.5 rounded-full", style: { backgroundColor: item.colorHex } }),
                                react_1.default.createElement("span", { className: "font-bold text-slate-900" }, item.label),
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full bg-white/60 border border-white/80 text-slate-700 text-[10px] font-bold" },
                                    item.count,
                                    " ",
                                    item.count === 1 ? 'pedido' : 'pedidos')),
                            react_1.default.createElement("div", { className: "font-mono" },
                                react_1.default.createElement("span", { className: "font-extrabold text-slate-900" }, (0, financeEngine_1.formatBRL)(item.totalAmount)),
                                react_1.default.createElement("span", { className: "text-slate-600 ml-2 text-[11px] font-semibold" },
                                    item.percentage,
                                    "%"))),
                        react_1.default.createElement("div", { className: "w-full h-3 rounded-full bg-white/50 overflow-hidden p-0.5 border border-white/75 shadow-inner" },
                            react_1.default.createElement("div", { style: {
                                    width: `${Math.max(item.count > 0 ? 6 : 0, item.percentage)}%`,
                                    backgroundColor: item.colorHex,
                                }, className: "h-full rounded-full transition-all duration-500" })))))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] overflow-hidden" },
                react_1.default.createElement("div", { className: "p-5 border-b border-white/60 flex flex-wrap items-center justify-between gap-3" },
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5" }, [
                        { id: 'todos', label: 'Todos' },
                        { id: 'a_receber', label: 'A Receber' },
                        { id: 'vencido', label: 'Vencidos' },
                        { id: 'sem_nota', label: 'Entregues sem Nota' },
                        { id: 'pago', label: 'Pagos' },
                        { id: 'nao_pago', label: 'Não Pago' },
                    ].map((pill) => (react_1.default.createElement("button", { key: pill.id, type: "button", onClick: () => setStatusFilter(pill.id), className: `min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold transition cursor-pointer ${statusFilter === pill.id
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                            : 'liquid-glass-pill text-slate-700'}` }, pill.label)))),
                    react_1.default.createElement("span", { className: "text-xs text-slate-700 font-mono font-bold" },
                        filteredOrders.length,
                        " registros")),
                react_1.default.createElement("div", { className: "md:hidden divide-y divide-white/55" }, filteredOrders.length === 0 ? (react_1.default.createElement("div", { className: "py-10 px-4 text-center font-medium text-xs text-slate-600" }, "Nenhum lan\u00E7amento financeiro registrado ainda.")) : (filteredOrders.map((order) => {
                    const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                    const daysDiff = (0, financeEngine_1.getDaysDiff)(order.dueDate);
                    const isCopied = copiedId === order.id;
                    return (react_1.default.createElement("div", { key: order.id, className: "p-4 space-y-2.5 text-xs min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-start justify-between gap-2 min-w-0" },
                            react_1.default.createElement("div", { className: "min-w-0" },
                                react_1.default.createElement("span", { className: "font-mono font-extrabold text-indigo-700 block" }, order.id),
                                react_1.default.createElement("span", { className: "font-bold text-slate-900 break-words" }, order.companyName)),
                            react_1.default.createElement("span", { className: "font-mono text-base font-black text-slate-900 shrink-0" }, (0, financeEngine_1.formatBRL)(order.amount))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Ferramenta"),
                            react_1.default.createElement("span", { className: "text-slate-800 font-semibold break-words" }, order.toolDescription)),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                            react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${modMeta?.badgeClass}` }, modMeta?.label),
                            order.paymentStatus === 'pago' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-600" }),
                                "Liquidado \u2022 ",
                                (0, financeEngine_1.formatDateBR)(order.paidAt || order.dueDate))) : order.paymentStatus === 'nao_pago' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/60 text-slate-700 border border-white/80" }, "N\u00E3o Pago")) : order.paymentStatus === 'sem_nota' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-800 border border-amber-300/60" },
                                react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-500" }),
                                "Entregue sem Nota")) : order.paymentStatus === 'vencido' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-900 border border-amber-400/70" },
                                "Vencido h\u00E1 ",
                                Math.abs(daysDiff),
                                "d \u2022 ",
                                (0, financeEngine_1.formatDateBR)(order.dueDate))) : (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60" },
                                "Vence em ",
                                daysDiff,
                                "d \u2022 ",
                                (0, financeEngine_1.formatDateBR)(order.dueDate)))),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-1" },
                            react_1.default.createElement("button", { type: "button", onClick: () => handleCopyPix(order), className: `min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold border inline-flex items-center gap-1.5 cursor-pointer ${isCopied
                                    ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-800'
                                    : 'liquid-glass-pill text-slate-800'}` },
                                isCopied ? react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }) : react_1.default.createElement(lucide_react_1.Copy, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, isCopied ? 'Copiado' : 'Copiar Pix')),
                            react_1.default.createElement("a", { href: (0, financeEngine_1.buildWhatsAppBillingUrl)(order), target: "_blank", rel: "noopener noreferrer", className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5" },
                                react_1.default.createElement(lucide_react_1.MessageCircle, { className: "w-4 h-4 text-emerald-600" }),
                                react_1.default.createElement("span", null, "WhatsApp")),
                            order.paymentStatus === 'sem_nota' && (react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`bill:${order.id}`, () => onEmitBilling30d(order.id)), className: "min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold bg-amber-500 disabled:opacity-60 text-white inline-flex items-center gap-1 cursor-pointer" },
                                busyOrderAction === `bill:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : (react_1.default.createElement(lucide_react_1.Sparkles, { className: "w-4 h-4" })),
                                react_1.default.createElement("span", null, "Gerar 30d"))),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`paid:${order.id}`, () => onTogglePaid(order.id)), className: `min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1 disabled:opacity-60 cursor-pointer ${order.paymentStatus === 'pago'
                                    ? 'liquid-glass-pill text-slate-700'
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'}` }, busyOrderAction === `paid:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : order.paymentStatus === 'pago' ? (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Reabrir"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Marcar como pago")))),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`del:${order.id}`, () => onDeleteOrder(order.id)), "aria-label": "Excluir esta OS", className: "btn-compact w-9 h-9 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0" }, busyOrderAction === `del:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" }))))));
                }))),
                react_1.default.createElement("div", { className: "hidden md:block overflow-x-auto" },
                    react_1.default.createElement("table", { className: "w-full text-left border-collapse" },
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "text-[11px] uppercase tracking-wider text-slate-600 border-b border-white/60 bg-white/30" },
                                react_1.default.createElement("th", { className: "py-3.5 px-5 font-extrabold" }, "OS / Empresa"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Ferramenta"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Modalidade"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Vencimento / Status"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 text-right font-extrabold" }, "Valor"),
                                react_1.default.createElement("th", { className: "py-3.5 px-5 text-right font-extrabold" }, "A\u00E7\u00F5es"))),
                        react_1.default.createElement("tbody", { className: "divide-y divide-white/45 text-xs" }, filteredOrders.length === 0 ? (react_1.default.createElement("tr", null,
                            react_1.default.createElement("td", { colSpan: 6, className: "py-12 text-center font-medium text-slate-600" }, "Nenhum lan\u00E7amento financeiro registrado ainda."))) : (filteredOrders.map((order) => {
                            const modMeta = financeEngine_1.PAYMENT_MODALITY_META[order.paymentModality];
                            const daysDiff = (0, financeEngine_1.getDaysDiff)(order.dueDate);
                            const isCopied = copiedId === order.id;
                            return (react_1.default.createElement("tr", { key: order.id, className: "hover:bg-white/35 transition-colors" },
                                react_1.default.createElement("td", { className: "py-4 px-5 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: "font-mono font-extrabold text-indigo-700 block" }, order.id),
                                    react_1.default.createElement("span", { className: "font-bold text-slate-900" }, order.companyName)),
                                react_1.default.createElement("td", { className: "py-4 px-4 max-w-xs" },
                                    react_1.default.createElement("span", { className: "text-slate-800 font-semibold block truncate" }, order.toolDescription)),
                                react_1.default.createElement("td", { className: "py-4 px-4 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${modMeta?.badgeClass}` }, modMeta?.label)),
                                react_1.default.createElement("td", { className: "py-4 px-4 whitespace-nowrap" }, order.paymentStatus === 'pago' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60" },
                                    react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-600" }),
                                    "Liquidado \u2022 ",
                                    (0, financeEngine_1.formatDateBR)(order.paidAt || order.dueDate))) : order.paymentStatus === 'nao_pago' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/60 text-slate-700 border border-white/80" }, "N\u00E3o Pago")) : order.paymentStatus === 'sem_nota' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-800 border border-amber-300/60" },
                                    react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-500" }),
                                    "Entregue sem Nota")) : order.paymentStatus === 'vencido' ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-900 border border-amber-400/70" },
                                    react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping" }),
                                    "Vencido h\u00E1 ",
                                    Math.abs(daysDiff),
                                    "d \u2022 ",
                                    (0, financeEngine_1.formatDateBR)(order.dueDate))) : (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60" },
                                    react_1.default.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-600" }),
                                    "Vence em ",
                                    daysDiff,
                                    "d \u2022 ",
                                    (0, financeEngine_1.formatDateBR)(order.dueDate)))),
                                react_1.default.createElement("td", { className: "py-4 px-4 text-right whitespace-nowrap font-mono text-sm font-black text-slate-900" }, (0, financeEngine_1.formatBRL)(order.amount)),
                                react_1.default.createElement("td", { className: "py-4 px-5 text-right whitespace-nowrap" },
                                    react_1.default.createElement("div", { className: "inline-flex items-center justify-end gap-1.5" },
                                        react_1.default.createElement("button", { type: "button", onClick: () => handleCopyPix(order), className: `px-2.5 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 transition cursor-pointer ${isCopied
                                                ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-800'
                                                : 'liquid-glass-pill text-slate-800'}` }, isCopied ? (react_1.default.createElement(react_1.default.Fragment, null,
                                            react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 text-emerald-600" }),
                                            react_1.default.createElement("span", null, "Copiado"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                            react_1.default.createElement(lucide_react_1.Copy, { className: "w-3.5 h-3.5" }),
                                            react_1.default.createElement("span", null, "Copiar Pix")))),
                                        react_1.default.createElement("a", { href: (0, financeEngine_1.buildWhatsAppBillingUrl)(order), target: "_blank", rel: "noopener noreferrer", className: "liquid-glass-pill px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-1.5 transition" },
                                            react_1.default.createElement(lucide_react_1.MessageCircle, { className: "w-3.5 h-3.5 text-emerald-600" }),
                                            react_1.default.createElement("span", null, "Cobrar no WhatsApp")),
                                        order.paymentStatus === 'sem_nota' && (react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`bill:${order.id}`, () => onEmitBilling30d(order.id)), className: "px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white shadow-sm flex items-center gap-1 transition cursor-pointer" },
                                            busyOrderAction === `bill:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin" })) : (react_1.default.createElement(lucide_react_1.Sparkles, { className: "w-3.5 h-3.5" })),
                                            react_1.default.createElement("span", null, "Gerar 30d"))),
                                        react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`paid:${order.id}`, () => onTogglePaid(order.id)), className: `px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 disabled:opacity-60 transition cursor-pointer ${order.paymentStatus === 'pago'
                                                ? 'liquid-glass-pill text-slate-700'
                                                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'}` }, busyOrderAction === `paid:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin" })) : order.paymentStatus === 'pago' ? (react_1.default.createElement(react_1.default.Fragment, null,
                                            react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3 h-3" }),
                                            react_1.default.createElement("span", null, "Reabrir"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                            react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 stroke-[2.5]" }),
                                            react_1.default.createElement("span", null, "Marcar como pago")))),
                                        react_1.default.createElement("button", { type: "button", disabled: Boolean(busyOrderAction), onClick: () => void runOrderAction(`del:${order.id}`, () => onDeleteOrder(order.id)), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir esta OS", "aria-label": "Excluir esta OS" }, busyOrderAction === `del:${order.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" })))))));
                        }))))))))));
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
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const [deletingId, setDeletingId] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (prefillOrder) {
            setSelectedOrderId(prefillOrder.id);
        }
    }, [prefillOrder]);
    (0, react_1.useEffect)(() => {
        if (orders.length > 0 && !orders.some((o) => o.id === selectedOrderId)) {
            const validPrefill = prefillOrder && orders.some((o) => o.id === prefillOrder.id)
                ? prefillOrder.id
                : orders[0].id;
            setSelectedOrderId(validPrefill);
        }
    }, [orders, selectedOrderId, prefillOrder]);
    const selectedOrder = orders.find((o) => o.id === selectedOrderId);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting || !selectedOrder || !carrierName.trim())
            return;
        setIsSubmitting(true);
        try {
            const ok = await onAddDelivery({
                orderId: selectedOrder.id,
                toolDescription: selectedOrder.toolDescription,
                companyName: selectedOrder.companyName,
                method,
                carrierOrPersonName: carrierName.trim(),
                dispatchedAt: `${dispatchedDate} ${dispatchedTime}`,
                notes: notes.trim() || undefined,
            });
            if (ok !== false) {
                setCarrierName('');
                setNotes('');
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleDelete = async (deliveryId) => {
        if (deletingId)
            return;
        setDeletingId(deliveryId);
        try {
            await onDeleteDelivery(deliveryId);
        }
        finally {
            setDeletingId(null);
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Entregas e Log\u00EDstica de Sa\u00EDda"),
            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Protocolo digital de sa\u00EDda para rastrear quem retirou ou despachou cada ferramenta com data e hora.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5 pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" },
                        react_1.default.createElement(lucide_react_1.Truck, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Registrar Sa\u00EDda / Retirada de Faca"),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Marca automaticamente a OS como \"Faca Pronta\""))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "1. Ordem de Servi\u00E7o"),
                    react_1.default.createElement("select", { value: selectedOrderId, onChange: (e) => setSelectedOrderId(e.target.value), className: inputClass }, orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                        o.id,
                        " - ",
                        o.companyName,
                        " - ",
                        o.toolDescription))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "2. Modalidade e Respons\u00E1vel pela Retirada"),
                    react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2" }, Object.keys(financeEngine_1.DELIVERY_METHOD_META).map((m) => {
                        const meta = financeEngine_1.DELIVERY_METHOD_META[m];
                        const active = method === m;
                        return (react_1.default.createElement("button", { type: "button", key: m, onClick: () => setMethod(m), className: `py-2.5 px-3 rounded-2xl text-xs font-bold border text-left transition cursor-pointer ${active
                                ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-md'
                                : 'liquid-glass-pill text-slate-700'}` }, meta.label));
                    }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "3. Nome do Motorista, Portador ou Placa"),
                    react_1.default.createElement("input", { type: "text", required: true, value: carrierName, onChange: (e) => setCarrierName(e.target.value), placeholder: "Ex: Motoboy Carlos, Placa FKR-4A89 ou Retirado por Marcos", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Data da Sa\u00EDda"),
                        react_1.default.createElement("input", { type: "date", required: true, value: dispatchedDate, onChange: (e) => setDispatchedDate(e.target.value), className: `${inputClass} font-mono` })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Hora Exata"),
                        react_1.default.createElement("input", { type: "time", required: true, value: dispatchedTime, onChange: (e) => setDispatchedTime(e.target.value), className: `${inputClass} font-mono` }))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Observa\u00E7\u00E3o de Expedi\u00E7\u00E3o"),
                    react_1.default.createElement("input", { type: "text", value: notes, onChange: (e) => setNotes(e.target.value), placeholder: "Ex: Canhoto assinado, entregue com prote\u00E7\u00E3o de borracha", className: inputClass })),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmitting || !selectedOrder, className: "w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer active:scale-95" }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, "Registrando Sa\u00EDda..."))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                    react_1.default.createElement("span", null, "Confirmar Registro de Sa\u00EDda"))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Hist\u00F3rico de Entregas e Retiradas"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "Rastreabilidade completa contra extravio de ferramentas")),
                    react_1.default.createElement("span", { className: "px-2.5 py-1 rounded-full bg-white/65 border border-white/80 text-xs font-extrabold text-slate-800" }, deliveries.length)),
                react_1.default.createElement("div", { className: "space-y-3" }, deliveries.length === 0 ? (react_1.default.createElement("div", { className: "p-10 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhuma entrega ou retirada registrada ainda.")) : (deliveries.map((del) => {
                    const meta = financeEngine_1.DELIVERY_METHOD_META[del.method];
                    const isDeleting = deletingId === del.id;
                    return (react_1.default.createElement("div", { key: del.id, className: "p-4 rounded-2xl liquid-glass-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3" },
                        react_1.default.createElement("div", { className: "space-y-1" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-300/60 font-mono text-xs font-bold text-indigo-800" }, del.orderId),
                                react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, del.companyName),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${meta?.badgeClass}` }, meta?.label)),
                            react_1.default.createElement("p", { className: "text-xs text-slate-800 font-semibold" }, del.toolDescription),
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-3 text-[11px] text-slate-600 pt-0.5" },
                                react_1.default.createElement("span", { className: "flex items-center gap-1 text-slate-900 font-bold" },
                                    react_1.default.createElement(lucide_react_1.UserCheck, { className: "w-3.5 h-3.5 text-indigo-600" }),
                                    del.carrierOrPersonName),
                                del.notes && (react_1.default.createElement("span", { className: "flex items-center gap-1 text-slate-600" },
                                    react_1.default.createElement(lucide_react_1.MapPin, { className: "w-3 h-3" }),
                                    del.notes)))),
                        react_1.default.createElement("div", { className: "flex items-center justify-between sm:justify-end gap-2 shrink-0" },
                            react_1.default.createElement("div", { className: "sm:text-right font-mono bg-white/55 px-3 py-2 rounded-2xl border border-white/75" },
                                react_1.default.createElement("span", { className: "text-[10px] uppercase font-bold text-slate-600 block" }, "Sa\u00EDda Registrada"),
                                react_1.default.createElement("span", { className: "text-xs font-extrabold text-emerald-700 flex items-center sm:justify-end gap-1 mt-0.5" },
                                    react_1.default.createElement(lucide_react_1.Clock, { className: "w-3 h-3" }),
                                    del.dispatchedAt)),
                            react_1.default.createElement("button", { type: "button", disabled: Boolean(deletingId), onClick: () => void handleDelete(del.id), className: "btn-compact w-9 h-9 rounded-2xl bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir registro de entrega", "aria-label": "Excluir registro de entrega" }, isDeleting ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" }))))));
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
const WarrantyReturnsSection = ({ orders, returns, onAddReturn, onUpdateReturnStatus, onDeleteReturn, }) => {
    const [selectedOrderId, setSelectedOrderId] = (0, react_1.useState)(orders[0]?.id || '');
    const [reason, setReason] = (0, react_1.useState)('');
    const [technicalAction, setTechnicalAction] = (0, react_1.useState)('');
    const [adjustmentAmount, setAdjustmentAmount] = (0, react_1.useState)('0');
    const [status, setStatus] = (0, react_1.useState)('em_analise');
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const [busyKey, setBusyKey] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (orders.length > 0 && !orders.some((o) => o.id === selectedOrderId)) {
            setSelectedOrderId(orders[0].id);
        }
    }, [orders, selectedOrderId]);
    const selectedOrder = orders.find((o) => o.id === selectedOrderId);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting || !selectedOrder || !reason.trim() || !technicalAction.trim())
            return;
        const val = parseFloat(adjustmentAmount.replace(',', '.')) || 0;
        setIsSubmitting(true);
        try {
            const ok = await onAddReturn({
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
            if (ok !== false) {
                setReason('');
                setTechnicalAction('');
                setAdjustmentAmount('0');
                setStatus('em_analise');
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleStatusChange = async (id, nextStatus) => {
        if (busyKey)
            return;
        setBusyKey(`st:${id}`);
        try {
            await onUpdateReturnStatus(id, nextStatus);
        }
        finally {
            setBusyKey(null);
        }
    };
    const handleDelete = async (id) => {
        if (busyKey)
            return;
        setBusyKey(`del:${id}`);
        try {
            await onDeleteReturn(id);
        }
        finally {
            setBusyKey(null);
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Retornos e Ajustes"),
            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Controle t\u00E9cnico de facas que retornaram para ajuste de vinco, reparo de l\u00E2mina ou modifica\u00E7\u00E3o solicitada pelo cliente.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5 pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-amber-500/15 border border-amber-300/60 flex items-center justify-center text-amber-700" },
                        react_1.default.createElement(lucide_react_1.Wrench, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Registrar Retorno / Ajuste de Faca"),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Documente o motivo, o servi\u00E7o executado e eventual custo adicional"))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "1. OS Original e Empresa Cliente"),
                    react_1.default.createElement("select", { value: selectedOrderId, onChange: (e) => setSelectedOrderId(e.target.value), className: inputClass }, orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                        o.id,
                        " - ",
                        o.companyName,
                        " - ",
                        o.toolDescription))))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "2. Motivo do Retorno"),
                    react_1.default.createElement("input", { type: "text", required: true, value: reason, onChange: (e) => setReason(e.target.value), placeholder: "Ex: Ajuste de vinco, L\u00E2mina fora de esquadro, Erro de medida", className: inputClass })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "3. Descri\u00E7\u00E3o T\u00E9cnica do Reparo"),
                    react_1.default.createElement("textarea", { rows: 3, required: true, value: technicalAction, onChange: (e) => setTechnicalAction(e.target.value), placeholder: "Descreva a troca de l\u00E2mina, calibragem de altura, borracha ejetora ou abertura de rasgo", className: inputClass })),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "4. Valor do Ajuste em R$"),
                        react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", value: adjustmentAmount, onChange: (e) => setAdjustmentAmount(e.target.value), placeholder: "0,00", className: `${inputClass} font-mono font-bold` }),
                        react_1.default.createElement("span", { className: "text-[10px] font-medium text-slate-600 mt-0.5 block" }, "Use R$ 0,00 para ajuste em garantia sem custo")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "5. Status do Retorno"),
                        react_1.default.createElement("select", { value: status, onChange: (e) => setStatus(e.target.value), className: inputClass }, Object.entries(financeEngine_1.RETURN_STATUS_META).map(([k, v]) => (react_1.default.createElement("option", { key: k, value: k }, v.label)))))),
                react_1.default.createElement("button", { type: "submit", disabled: isSubmitting || !selectedOrder, className: "w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer active:scale-95" }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, "Registrando Retorno..."))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                    react_1.default.createElement("span", null, "Registrar Ocorr\u00EAncia de Retorno"))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 space-y-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between pb-3 border-b border-white/60" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" },
                            "Facas em Retorno / Hist\u00F3rico de Ajustes (",
                            returns.length,
                            ")"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "Acompanhe o diagn\u00F3stico t\u00E9cnico e libere novamente para o cliente")),
                    react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-5 h-5 text-amber-600" })),
                react_1.default.createElement("div", { className: "space-y-3.5" }, returns.length === 0 ? (react_1.default.createElement("div", { className: "p-10 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" }, "Nenhum retorno ou ajuste registrado ainda.")) : (returns.map((ret) => {
                    const stMeta = financeEngine_1.RETURN_STATUS_META[ret.status];
                    const isRowBusy = busyKey === `st:${ret.id}` || busyKey === `del:${ret.id}`;
                    return (react_1.default.createElement("div", { key: ret.id, className: "p-5 rounded-3xl liquid-glass-subtle space-y-3" },
                        react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-2" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                    react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-300/60 font-mono text-xs font-bold text-indigo-800" }, ret.orderId),
                                    react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, ret.companyName),
                                    react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[11px] font-bold border flex items-center gap-1.5 ${stMeta.badgeClass}` },
                                        react_1.default.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${stMeta.dotClass}` }),
                                        stMeta.label)),
                                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700 mt-1" }, ret.toolDescription)),
                            react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                react_1.default.createElement("div", { className: "text-right font-mono" },
                                    react_1.default.createElement("span", { className: `text-sm font-black block ${ret.adjustmentAmount === 0
                                            ? 'text-emerald-700'
                                            : 'text-amber-700'}` }, ret.adjustmentAmount === 0
                                        ? 'R$ 0,00 Garantia'
                                        : `Ajuste: ${(0, financeEngine_1.formatBRL)(ret.adjustmentAmount)}`),
                                    react_1.default.createElement("span", { className: "text-[10px] font-medium text-slate-600" },
                                        "Atualizado: ",
                                        ret.updatedAt)),
                                react_1.default.createElement("button", { type: "button", disabled: Boolean(busyKey), onClick: () => void handleDelete(ret.id), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-50 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir registro de retorno", "aria-label": "Excluir registro de retorno" }, busyKey === `del:${ret.id}` ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-3.5 h-3.5 animate-spin text-rose-600" })) : (react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs" },
                            react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-white/55 border border-white/75" },
                                react_1.default.createElement("span", { className: "text-[10px] font-extrabold uppercase text-indigo-700 block mb-0.5" }, "Motivo do Retorno:"),
                                react_1.default.createElement("p", { className: "text-slate-800 font-medium" }, ret.reason)),
                            react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-white/55 border border-white/75" },
                                react_1.default.createElement("span", { className: "text-[10px] font-extrabold uppercase text-emerald-700 block mb-0.5" }, "O que foi feito e ajustado:"),
                                react_1.default.createElement("p", { className: "text-slate-800 font-medium" }, ret.technicalAction))),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 pt-1" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5" }, ['em_analise', 'em_ajuste', 'liberado'].map((st) => (react_1.default.createElement("button", { key: st, type: "button", disabled: isRowBusy, onClick: () => void handleStatusChange(ret.id, st), className: `px-2.5 py-1 rounded-full text-[11px] font-bold border disabled:opacity-60 transition cursor-pointer ${ret.status === st
                                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-sm'
                                    : 'liquid-glass-pill text-slate-700'}` }, financeEngine_1.RETURN_STATUS_META[st].label)))),
                            stMeta.next && (react_1.default.createElement("button", { type: "button", disabled: isRowBusy, onClick: () => void handleStatusChange(ret.id, stMeta.next), className: "px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white border border-white/40 shadow-sm flex items-center gap-1 transition cursor-pointer" },
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

__moduleFactories["./components/StockSection"] = Object.assign(
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
exports.StockSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const CATEGORY_META = {
    madeiras: {
        label: '1. Madeiras',
        shortLabel: 'Madeiras',
        description: 'Compensados 15mm, 18mm, 22mm e bases estruturais',
        defaultUnit: 'chapa',
        unitPresets: ['chapa', 'un', 'm²', 'placa'],
        badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-300/60',
    },
    laminas: {
        label: '2. Lâminas',
        shortLabel: 'Lâminas',
        description: 'Lâminas de corte, vinco, picote e serrilha',
        defaultUnit: 'cx',
        unitPresets: ['cx', 'm', 'rolo', 'un'],
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60',
    },
};
const StockSection = ({ userRole, items, movements, globalSearchQuery, onAddItem, onUpdateItem, onDeleteItem, onQuickConsume, onQuickReplenish, onRevertMovement, }) => {
    const isOperator = userRole === 'operador';
    const [categoryFilter, setCategoryFilter] = (0, react_1.useState)('todos');
    const [onlyLowStock, setOnlyLowStock] = (0, react_1.useState)(false);
    const [localSearch, setLocalSearch] = (0, react_1.useState)('');
    // Quick Consumption State
    const [selectedConsumeId, setSelectedConsumeId] = (0, react_1.useState)('');
    const [customConsumeQty, setCustomConsumeQty] = (0, react_1.useState)('1');
    const [consumeNote, setConsumeNote] = (0, react_1.useState)('');
    const [busyItemId, setBusyItemId] = (0, react_1.useState)(null);
    const [busyMoveId, setBusyMoveId] = (0, react_1.useState)(null);
    const [showFullHistory, setShowFullHistory] = (0, react_1.useState)(false);
    // Form state (Create / Edit)
    const [editingId, setEditingId] = (0, react_1.useState)(null);
    const [category, setCategory] = (0, react_1.useState)('madeiras');
    const [name, setName] = (0, react_1.useState)('');
    const [quantity, setQuantity] = (0, react_1.useState)('');
    const [unit, setUnit] = (0, react_1.useState)('chapa');
    const [minStock, setMinStock] = (0, react_1.useState)('5');
    const [supplier, setSupplier] = (0, react_1.useState)('');
    const [unitCost, setUnitCost] = (0, react_1.useState)('');
    const [entryDate, setEntryDate] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const resetForm = (nextCat = 'madeiras') => {
        setEditingId(null);
        setCategory(nextCat);
        setName('');
        setQuantity('');
        setUnit(CATEGORY_META[nextCat].defaultUnit);
        setMinStock('5');
        setSupplier('');
        setUnitCost('');
        setEntryDate((0, financeEngine_1.toISODate)());
    };
    const handleSelectFormCategory = (cat) => {
        setCategory(cat);
        if (!editingId) {
            setUnit(CATEGORY_META[cat].defaultUnit);
        }
    };
    const handleStartEdit = (item) => {
        setEditingId(item.id);
        setCategory(item.category);
        setName(item.name);
        setQuantity(String(item.quantity));
        setUnit(item.unit);
        setMinStock(String(item.minStock));
        setSupplier(item.supplier);
        setUnitCost(String(item.unitCost));
        setEntryDate(item.entryDate);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim())
            return;
        const payload = {
            category,
            name: name.trim(),
            quantity: Math.max(0, parseFloat(quantity.replace(',', '.')) || 0),
            unit: unit.trim() || CATEGORY_META[category].defaultUnit,
            minStock: Math.max(0, parseFloat(minStock.replace(',', '.')) || 0),
            supplier: supplier.trim() || 'Não informado',
            unitCost: Math.max(0, parseFloat(unitCost.replace(',', '.')) || 0),
            entryDate: entryDate || (0, financeEngine_1.toISODate)(),
        };
        if (editingId) {
            onUpdateItem(editingId, payload);
        }
        else {
            onAddItem(payload);
        }
        resetForm(category);
    };
    const handleTriggerConsume = async (item, qty, note) => {
        if (busyItemId || qty <= 0 || item.quantity <= 0)
            return;
        setBusyItemId(item.id);
        try {
            await onQuickConsume(item, qty, note);
        }
        finally {
            setBusyItemId(null);
        }
    };
    const handleTriggerReplenish = async (item, qty) => {
        if (busyItemId || qty <= 0)
            return;
        setBusyItemId(item.id);
        try {
            await onQuickReplenish(item, qty, 'Reposição rápida');
        }
        finally {
            setBusyItemId(null);
        }
    };
    const handleCustomConsumeSubmit = async (e) => {
        e.preventDefault();
        const targetItem = items.find((i) => i.id === selectedConsumeId) || items[0];
        if (!targetItem)
            return;
        const qty = Math.max(0.01, parseFloat(customConsumeQty.replace(',', '.')) || 1);
        await handleTriggerConsume(targetItem, qty, consumeNote.trim() || undefined);
        setCustomConsumeQty('1');
        setConsumeNote('');
    };
    const handleUndo = async (mov) => {
        if (busyMoveId || mov.revertedAt || mov.type === 'estorno')
            return;
        setBusyMoveId(mov.id);
        try {
            await onRevertMovement(mov);
        }
        finally {
            setBusyMoveId(null);
        }
    };
    // Highlighted quick-action items: prioritize primary Madeira & primary Lâmina first, then up to 6 total
    const quickActionItems = (0, react_1.useMemo)(() => {
        const madeiras = items.filter((i) => i.category === 'madeiras');
        const laminas = items.filter((i) => i.category === 'laminas');
        const ordered = [];
        if (madeiras[0])
            ordered.push(madeiras[0]);
        if (laminas[0])
            ordered.push(laminas[0]);
        for (const item of [...madeiras.slice(1), ...laminas.slice(1)]) {
            if (ordered.length >= 6)
                break;
            ordered.push(item);
        }
        return ordered;
    }, [items]);
    const combinedQuery = (localSearch || globalSearchQuery).trim().toLowerCase();
    const filteredItems = (0, react_1.useMemo)(() => {
        return items.filter((item) => {
            if (categoryFilter !== 'todos' && item.category !== categoryFilter) {
                return false;
            }
            if (onlyLowStock && item.quantity > item.minStock) {
                return false;
            }
            if (!combinedQuery)
                return true;
            return (item.id.toLowerCase().includes(combinedQuery) ||
                item.name.toLowerCase().includes(combinedQuery) ||
                item.supplier.toLowerCase().includes(combinedQuery) ||
                item.unit.toLowerCase().includes(combinedQuery) ||
                CATEGORY_META[item.category].shortLabel
                    .toLowerCase()
                    .includes(combinedQuery));
        });
    }, [items, categoryFilter, onlyLowStock, combinedQuery]);
    const madeirasItems = filteredItems.filter((i) => i.category === 'madeiras');
    const laminasItems = filteredItems.filter((i) => i.category === 'laminas');
    const totalMadeirasCount = items.filter((i) => i.category === 'madeiras').length;
    const totalLaminasCount = items.filter((i) => i.category === 'laminas').length;
    const lowMadeirasCount = items.filter((i) => i.category === 'madeiras' && i.quantity <= i.minStock).length;
    const lowLaminasCount = items.filter((i) => i.category === 'laminas' && i.quantity <= i.minStock).length;
    const totalStockValue = items.reduce((sum, item) => sum + (item.quantity || 0) * (item.unitCost || 0), 0);
    const visibleMovements = showFullHistory ? movements : movements.slice(0, 6);
    const inputClass = 'liquid-glass-pill w-full px-3.5 py-2.5 text-xs rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    const renderCategoryBlock = (catKey, catItems) => {
        const meta = CATEGORY_META[catKey];
        const catLowCount = catItems.filter((i) => i.quantity <= i.minStock).length;
        return (react_1.default.createElement("div", { key: catKey, className: "liquid-glass rounded-[28px] p-6 space-y-4" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/60" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" }, catKey === 'madeiras' ? (react_1.default.createElement(lucide_react_1.Layers, { className: "w-4 h-4" })) : (react_1.default.createElement(lucide_react_1.Boxes, { className: "w-4 h-4" }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" },
                            meta.label,
                            " (",
                            catItems.length,
                            ")"),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, meta.description))),
                catLowCount > 0 && (react_1.default.createElement("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/20 text-amber-900 border border-amber-400/70" },
                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3.5 h-3.5 text-amber-700" }),
                    catLowCount,
                    " em falta / m\u00EDnimo"))),
            catItems.length === 0 ? (react_1.default.createElement("div", { className: "p-8 rounded-2xl border border-dashed border-white/70 text-center text-xs font-medium text-slate-600" },
                "Nenhum item encontrado em ",
                meta.shortLabel,
                ".")) : (react_1.default.createElement("div", { className: "space-y-3" }, catItems.map((item) => {
                const isLow = item.quantity <= item.minStock;
                const isBeingEdited = editingId === item.id;
                const totalValue = item.quantity * item.unitCost;
                const isBusy = busyItemId === item.id;
                return (react_1.default.createElement("div", { key: item.id, className: `p-4 rounded-2xl liquid-glass-subtle transition flex flex-col gap-3 ${isLow
                        ? 'ring-2 ring-amber-400/80 bg-amber-500/10'
                        : ''} ${isBeingEdited ? 'ring-2 ring-indigo-500/80' : ''}` },
                    react_1.default.createElement("div", { className: "flex flex-wrap items-start justify-between gap-3" },
                        react_1.default.createElement("div", { className: "space-y-1 min-w-0" },
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-300/60 font-mono text-[11px] font-bold text-indigo-800" }, item.id),
                                react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${meta.badgeClass}` }, meta.shortLabel),
                                isLow ? (react_1.default.createElement("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/25 text-amber-900 border border-amber-400/70" },
                                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3 h-3 text-amber-700" }),
                                    "Estoque Baixo (\u2264 ",
                                    item.minStock,
                                    " ",
                                    item.unit,
                                    ")")) : (react_1.default.createElement("span", { className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60" }, "OK"))),
                            react_1.default.createElement("h4", { className: "text-sm font-extrabold text-slate-900 leading-snug" }, item.name),
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-slate-700" },
                                react_1.default.createElement("span", null,
                                    "Fornecedor:",
                                    ' ',
                                    react_1.default.createElement("strong", { className: "text-slate-900" }, item.supplier)),
                                react_1.default.createElement("span", null, "\u2022"),
                                react_1.default.createElement("span", null,
                                    "Entrada:",
                                    ' ',
                                    react_1.default.createElement("strong", { className: "font-mono text-slate-900" }, (0, financeEngine_1.formatDateBR)(item.entryDate))),
                                react_1.default.createElement("span", null, "\u2022"),
                                react_1.default.createElement("span", null,
                                    "Custo unit.:",
                                    ' ',
                                    react_1.default.createElement("strong", { className: "font-mono text-emerald-700" },
                                        (0, financeEngine_1.formatBRL)(item.unitCost),
                                        "/",
                                        item.unit)))),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 shrink-0" },
                            react_1.default.createElement("div", { className: "flex items-center gap-1.5 bg-white/60 border border-white/80 rounded-2xl px-2.5 py-1.5" },
                                react_1.default.createElement("button", { type: "button", disabled: isBusy || item.quantity <= 0, onClick: () => handleTriggerConsume(item, 1, 'Baixa rápida na lista'), className: "btn-compact w-7 h-7 rounded-full bg-white/85 hover:bg-rose-600 disabled:opacity-40 text-slate-700 hover:text-white flex items-center justify-center transition cursor-pointer", title: "Dar baixa de 1 unidade", "aria-label": "Dar baixa de 1 unidade" },
                                    react_1.default.createElement(lucide_react_1.Minus, { className: "w-3.5 h-3.5" })),
                                react_1.default.createElement("div", { className: "px-2 text-center min-w-[68px]" },
                                    react_1.default.createElement("span", { className: `text-sm font-black font-mono block leading-none ${isLow ? 'text-amber-800' : 'text-slate-900'}` },
                                        item.quantity,
                                        " ",
                                        item.unit),
                                    react_1.default.createElement("span", { className: "text-[10px] font-semibold text-slate-600" },
                                        "M\u00EDn: ",
                                        item.minStock)),
                                react_1.default.createElement("button", { type: "button", disabled: isBusy, onClick: () => handleTriggerReplenish(item, 1), className: "btn-compact w-7 h-7 rounded-full bg-white/85 hover:bg-emerald-600 disabled:opacity-40 text-slate-700 hover:text-white flex items-center justify-center transition cursor-pointer", title: "Adicionar 1 unidade", "aria-label": "Adicionar 1 unidade" },
                                    react_1.default.createElement(lucide_react_1.Plus, { className: "w-3.5 h-3.5" }))),
                            react_1.default.createElement("div", { className: "text-right font-mono px-2" },
                                react_1.default.createElement("span", { className: "text-[10px] font-bold uppercase text-slate-600 block" }, "Subtotal"),
                                react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900" }, (0, financeEngine_1.formatBRL)(totalValue))),
                            react_1.default.createElement("button", { type: "button", onClick: () => handleStartEdit(item), className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-indigo-500/20 text-slate-600 hover:text-indigo-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Editar item", "aria-label": "Editar item" },
                                react_1.default.createElement(lucide_react_1.Edit3, { className: "w-3.5 h-3.5" })),
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    if (editingId === item.id)
                                        resetForm(category);
                                    onDeleteItem(item.id);
                                }, className: "btn-compact w-8 h-8 rounded-full bg-white/60 hover:bg-rose-500/20 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir item", "aria-label": "Excluir item" },
                                react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
            })))));
    };
    return (react_1.default.createElement("div", { className: "space-y-5" },
        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Estoque de Madeiras e L\u00E2minas"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, isOperator
                    ? 'Registre rapidamente o consumo de insumos na produção e acompanhe o histórico recente.'
                    : 'Controle de insumos com baixa rápida de consumo, histórico auditável e alertas de estoque mínimo.')),
            !isOperator && (react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                react_1.default.createElement("span", { className: "liquid-glass-pill px-3.5 py-2 rounded-full text-xs font-bold text-slate-800" },
                    "Itens: ",
                    react_1.default.createElement("strong", { className: "text-indigo-700" }, items.length)),
                react_1.default.createElement("span", { className: "liquid-glass-pill px-3.5 py-2 rounded-full text-xs font-bold text-slate-800" },
                    "Valor em Estoque:",
                    ' ',
                    react_1.default.createElement("strong", { className: "text-emerald-700 font-mono" }, (0, financeEngine_1.formatBRL)(totalStockValue))),
                lowMadeirasCount + lowLaminasCount > 0 && (react_1.default.createElement("span", { className: "px-3.5 py-2 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-900 border border-amber-400/70 inline-flex items-center gap-1.5" },
                    react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3.5 h-3.5 text-amber-700" }),
                    lowMadeirasCount + lowLaminasCount,
                    " em alerta"))))),
        react_1.default.createElement("section", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-4 ring-1 ring-indigo-400/40" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/60" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                    react_1.default.createElement("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-300/60 flex items-center justify-center text-rose-700 shrink-0" },
                        react_1.default.createElement(lucide_react_1.PackageMinus, { className: "w-5 h-5" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-base font-extrabold text-slate-900" }, "Registro R\u00E1pido de Consumo"),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600" }, "D\u00EA baixa direta no saldo com 1 clique. Toda movimenta\u00E7\u00E3o registra data, hora e colaborador com op\u00E7\u00E3o de desfazer."))),
                react_1.default.createElement("span", { className: "px-3 py-1 rounded-full text-[11px] font-bold bg-white/65 border border-white/80 text-slate-700 inline-flex items-center gap-1.5" },
                    react_1.default.createElement(lucide_react_1.History, { className: "w-3.5 h-3.5 text-indigo-600" }),
                    movements.length,
                    " movimenta\u00E7\u00E3o(\u00F5es)")),
            items.length === 0 ? (react_1.default.createElement("div", { className: "p-6 rounded-2xl border border-dashed border-white/75 bg-white/25 text-center text-xs font-medium text-slate-600" }, isOperator
                ? 'Nenhum insumo cadastrado ainda. Solicite ao administrador o cadastro dos materiais no estoque.'
                : 'Cadastre seus primeiros insumos abaixo (ex.: Chapa de Madeira, Caixa de Lâmina) para liberar os botões de baixa rápida.')) : (react_1.default.createElement("div", { className: "space-y-4" },
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3" }, quickActionItems.map((item) => {
                    const isLow = item.quantity <= item.minStock;
                    const isBusy = busyItemId === item.id;
                    const unitLabel = item.category === 'madeiras' && item.unit.toLowerCase() === 'chapa'
                        ? 'Chapa'
                        : item.category === 'laminas' &&
                            (item.unit.toLowerCase() === 'cx' ||
                                item.unit.toLowerCase() === 'caixa')
                            ? 'Caixa'
                            : item.unit;
                    return (react_1.default.createElement("button", { key: item.id, type: "button", disabled: isBusy || item.quantity <= 0, onClick: () => handleTriggerConsume(item, 1, 'Consumo rápido de produção'), className: `group p-3.5 rounded-2xl border text-left transition flex items-center justify-between gap-3 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${isLow
                            ? 'bg-amber-500/15 border-amber-400/70 hover:bg-amber-500/25'
                            : 'bg-white/55 border-white/80 hover:bg-white/80 hover:border-rose-300/80'}` },
                        react_1.default.createElement("div", { className: "min-w-0" },
                            react_1.default.createElement("div", { className: "flex items-center gap-1.5" },
                                react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-600 text-white shadow-xs shrink-0" },
                                    "- 1 ",
                                    unitLabel),
                                react_1.default.createElement("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${CATEGORY_META[item.category].badgeClass}` }, CATEGORY_META[item.category].shortLabel)),
                            react_1.default.createElement("p", { className: "text-xs font-extrabold text-slate-900 mt-1.5 truncate" }, item.name),
                            react_1.default.createElement("p", { className: "text-[11px] font-semibold text-slate-600 mt-0.5 font-mono" },
                                "Saldo atual:",
                                ' ',
                                react_1.default.createElement("strong", { className: isLow ? 'text-amber-900' : 'text-slate-900' },
                                    item.quantity,
                                    " ",
                                    item.unit))),
                        react_1.default.createElement("span", { className: "btn-compact w-9 h-9 rounded-xl bg-rose-500/15 group-hover:bg-rose-600 text-rose-700 group-hover:text-white border border-rose-300/60 flex items-center justify-center transition shrink-0" },
                            react_1.default.createElement(lucide_react_1.Minus, { className: "w-4 h-4 stroke-[2.5]" }))));
                })),
                react_1.default.createElement("form", { onSubmit: handleCustomConsumeSubmit, className: "p-3.5 rounded-2xl bg-white/45 border border-white/75 grid grid-cols-1 md:grid-cols-12 gap-2.5 items-end" },
                    react_1.default.createElement("div", { className: "md:col-span-5" },
                        react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-700 block mb-1" }, "Outro Insumo Cadastrado"),
                        react_1.default.createElement("select", { value: selectedConsumeId || items[0]?.id || '', onChange: (e) => setSelectedConsumeId(e.target.value), className: inputClass }, items.map((it) => (react_1.default.createElement("option", { key: it.id, value: it.id },
                            it.name,
                            " (Saldo: ",
                            it.quantity,
                            " ",
                            it.unit,
                            ")"))))),
                    react_1.default.createElement("div", { className: "md:col-span-2" },
                        react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-700 block mb-1" }, "Quantidade"),
                        react_1.default.createElement("input", { type: "number", step: "0.01", min: "0.01", required: true, value: customConsumeQty, onChange: (e) => setCustomConsumeQty(e.target.value), className: `${inputClass} font-mono font-bold` })),
                    react_1.default.createElement("div", { className: "md:col-span-3" },
                        react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-700 block mb-1" }, "Observa\u00E7\u00E3o (opcional)"),
                        react_1.default.createElement("input", { type: "text", value: consumeNote, onChange: (e) => setConsumeNote(e.target.value), placeholder: "Ex.: OS-042 / Bancada", className: inputClass })),
                    react_1.default.createElement("div", { className: "md:col-span-2" },
                        react_1.default.createElement("button", { type: "submit", disabled: Boolean(busyItemId), className: "w-full min-h-[44px] px-4 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 disabled:opacity-50 text-white shadow-md inline-flex items-center justify-center gap-1.5 transition cursor-pointer" },
                            react_1.default.createElement(lucide_react_1.PackageMinus, { className: "w-4 h-4 shrink-0" }),
                            react_1.default.createElement("span", null, "Dar Baixa")))),
                react_1.default.createElement("div", { className: "space-y-2.5 pt-1" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                        react_1.default.createElement("h4", { className: "text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5" },
                            react_1.default.createElement(lucide_react_1.History, { className: "w-3.5 h-3.5 text-indigo-600" }),
                            react_1.default.createElement("span", null, "Hist\u00F3rico Recente de Consumo e Movimenta\u00E7\u00F5es")),
                        movements.length > 6 && (react_1.default.createElement("button", { type: "button", onClick: () => setShowFullHistory((p) => !p), className: "btn-compact text-xs font-bold text-indigo-700 hover:underline cursor-pointer" }, showFullHistory
                            ? 'Mostrar menos'
                            : `Ver todas (${movements.length})`))),
                    visibleMovements.length === 0 ? (react_1.default.createElement("div", { className: "p-4 rounded-2xl border border-dashed border-white/75 text-center text-xs font-medium text-slate-600" }, "Nenhuma movimenta\u00E7\u00E3o registrada ainda. Clique em um bot\u00E3o acima para dar baixa.")) : (react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2.5" }, visibleMovements.map((mov) => {
                        const isConsumo = mov.type === 'consumo';
                        const isEstorno = mov.type === 'estorno';
                        const isReverted = Boolean(mov.revertedAt);
                        return (react_1.default.createElement("div", { key: mov.id, className: `p-3 rounded-2xl bg-white/55 border border-white/80 flex items-center justify-between gap-2.5 text-xs ${isReverted ? 'opacity-65' : ''}` },
                            react_1.default.createElement("div", { className: "min-w-0 space-y-0.5" },
                                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-1.5" },
                                    react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${isEstorno
                                            ? 'bg-slate-500/15 text-slate-700 border-slate-300/70'
                                            : isConsumo
                                                ? 'bg-rose-500/15 text-rose-800 border-rose-300/60'
                                                : 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60'}` }, isEstorno
                                        ? 'Estorno'
                                        : isConsumo
                                            ? `- ${mov.quantity} ${mov.unit}`
                                            : `+ ${mov.quantity} ${mov.unit}`),
                                    react_1.default.createElement("span", { className: "font-extrabold text-slate-900 truncate" }, mov.itemName),
                                    isReverted && (react_1.default.createElement("span", { className: "px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-200 text-slate-600" }, "Desfeito"))),
                                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[10px] font-medium text-slate-600" },
                                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1" },
                                        react_1.default.createElement(lucide_react_1.User, { className: "w-3 h-3 text-indigo-600" }),
                                        mov.actorName),
                                    react_1.default.createElement("span", { className: "inline-flex items-center gap-1 font-mono" },
                                        react_1.default.createElement(lucide_react_1.Clock, { className: "w-3 h-3 text-slate-500" }),
                                        (0, financeEngine_1.formatDateTimeGoiasBR)(mov.createdAt)),
                                    react_1.default.createElement("span", { className: "font-mono" },
                                        "Saldo: ",
                                        mov.previousBalance,
                                        " \u2192 ",
                                        react_1.default.createElement("strong", null, mov.newBalance)))),
                            !isEstorno && !isReverted && (react_1.default.createElement("button", { type: "button", disabled: busyMoveId === mov.id, onClick: () => handleUndo(mov), className: "btn-compact px-2.5 py-1.5 rounded-full text-[11px] font-bold bg-white/80 hover:bg-indigo-600 text-slate-700 hover:text-white border border-white/90 inline-flex items-center justify-center gap-1 transition cursor-pointer shrink-0", title: "Desfazer esta movimenta\u00E7\u00E3o" },
                                react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3 h-3" }),
                                react_1.default.createElement("span", null, "Desfazer")))));
                    }))))))),
        !isOperator && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] p-4 flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setCategoryFilter('todos'), className: `px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${categoryFilter === 'todos'
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                            : 'liquid-glass-pill text-slate-700'}` },
                        "Todas (",
                        items.length,
                        ")"),
                    react_1.default.createElement("button", { type: "button", onClick: () => setCategoryFilter('madeiras'), className: `px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${categoryFilter === 'madeiras'
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                            : 'liquid-glass-pill text-slate-700'}` },
                        "1. Madeiras (",
                        totalMadeirasCount,
                        ")"),
                    react_1.default.createElement("button", { type: "button", onClick: () => setCategoryFilter('laminas'), className: `px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${categoryFilter === 'laminas'
                            ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md border border-white/40'
                            : 'liquid-glass-pill text-slate-700'}` },
                        "2. L\u00E2minas (",
                        totalLaminasCount,
                        ")"),
                    react_1.default.createElement("button", { type: "button", onClick: () => setOnlyLowStock((prev) => !prev), className: `px-3.5 py-2 rounded-full text-xs font-bold border transition cursor-pointer inline-flex items-center gap-1.5 ${onlyLowStock
                            ? 'bg-amber-500 text-white border-white/40 shadow-md'
                            : 'liquid-glass-pill text-amber-800'}` },
                        react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-3.5 h-3.5" }),
                        react_1.default.createElement("span", null,
                            "Em falta (",
                            lowMadeirasCount + lowLaminasCount,
                            ")"))),
                react_1.default.createElement("div", { className: "relative w-full sm:w-72" },
                    react_1.default.createElement(lucide_react_1.Search, { className: "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
                    react_1.default.createElement("input", { type: "text", value: localSearch, onChange: (e) => setLocalSearch(e.target.value), placeholder: "Filtrar insumo, fornecedor...", className: "liquid-glass-pill w-full pl-10 pr-8 py-2 rounded-full text-xs text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none" }),
                    localSearch && (react_1.default.createElement("button", { type: "button", onClick: () => setLocalSearch(''), className: "btn-compact absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-900 cursor-pointer" }, "\u2715")))),
            react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start" },
                react_1.default.createElement("form", { onSubmit: handleSubmit, className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 space-y-4" },
                    react_1.default.createElement("div", { className: "flex items-center justify-between gap-2 pb-3 border-b border-white/60" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                            react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" },
                                react_1.default.createElement(lucide_react_1.Package, { className: "w-4 h-4" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, editingId
                                    ? `Editar Item (${editingId})`
                                    : 'Cadastrar Item no Estoque'),
                                react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Madeiras e L\u00E2minas com controle de m\u00EDnimo"))),
                        editingId && (react_1.default.createElement("button", { type: "button", onClick: () => resetForm(category), className: "btn-compact w-8 h-8 rounded-full liquid-glass-pill text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer", title: "Cancelar edi\u00E7\u00E3o", "aria-label": "Cancelar edi\u00E7\u00E3o" },
                            react_1.default.createElement(lucide_react_1.X, { className: "w-4 h-4" })))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "1. Categoria *"),
                        react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2" }, ['madeiras', 'laminas'].map((cat) => {
                            const active = category === cat;
                            return (react_1.default.createElement("button", { type: "button", key: cat, onClick: () => handleSelectFormCategory(cat), className: `py-2.5 px-3 rounded-2xl text-xs font-bold border transition cursor-pointer ${active
                                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-md'
                                    : 'liquid-glass-pill text-slate-700'}` }, CATEGORY_META[cat].label));
                        }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "2. Nome / Tipo do Material *"),
                        react_1.default.createElement("input", { type: "text", required: true, value: name, onChange: (e) => setName(e.target.value), placeholder: category === 'madeiras'
                                ? 'Ex: Chapa de Madeira Naval 18mm'
                                : 'Ex: Caixa de Lâmina Corte 2pt 23.8mm', className: inputClass })),
                    react_1.default.createElement("div", { className: "grid grid-cols-3 gap-2.5" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Quantidade *"),
                            react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: quantity, onChange: (e) => setQuantity(e.target.value), placeholder: "Ex: 12", className: `${inputClass} font-mono font-bold` })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "Unidade *"),
                            react_1.default.createElement("input", { type: "text", required: true, value: unit, onChange: (e) => setUnit(e.target.value), placeholder: "chapa / cx", className: inputClass })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "M\u00EDnimo *"),
                            react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: minStock, onChange: (e) => setMinStock(e.target.value), placeholder: "Ex: 5", className: `${inputClass} font-mono font-bold` }))),
                    react_1.default.createElement("div", { className: "flex flex-wrap gap-1.5" }, CATEGORY_META[category].unitPresets.map((preset) => (react_1.default.createElement("button", { type: "button", key: preset, onClick: () => setUnit(preset), className: `btn-compact px-2.5 py-1 rounded-full text-[10px] font-bold transition cursor-pointer ${unit === preset
                            ? 'bg-indigo-600 text-white'
                            : 'liquid-glass-pill text-slate-700'}` }, preset)))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "4. Fornecedor *"),
                        react_1.default.createElement("input", { type: "text", required: true, value: supplier, onChange: (e) => setSupplier(e.target.value), placeholder: "Ex: Madeireira Brasil / A\u00E7oCut", className: inputClass })),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "5. Custo Unit\u00E1rio (R$) *"),
                            react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: unitCost, onChange: (e) => setUnitCost(e.target.value), placeholder: "Ex: 145,00", className: `${inputClass} font-mono font-bold` })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "6. Data de Entrada *"),
                            react_1.default.createElement("input", { type: "date", required: true, value: entryDate, onChange: (e) => setEntryDate(e.target.value), className: `${inputClass} font-mono` }))),
                    react_1.default.createElement("button", { type: "submit", className: "w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white border border-white/40 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer active:scale-95" },
                        react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                        react_1.default.createElement("span", null, editingId ? `Salvar Alterações (${editingId})` : 'Adicionar ao Estoque'))),
                react_1.default.createElement("div", { className: "lg:col-span-7 space-y-5" },
                    (categoryFilter === 'todos' || categoryFilter === 'madeiras') &&
                        renderCategoryBlock('madeiras', madeirasItems),
                    (categoryFilter === 'todos' || categoryFilter === 'laminas') &&
                        renderCategoryBlock('laminas', laminasItems)))))));
};
exports.StockSection = StockSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/NotesSection"] = Object.assign(
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
exports.NotesSection = exports.PedidoA5Sheet = exports.DEFAULT_EMITTER_PROFILE = exports.PEDIDO_A5_ROWS = void 0;
exports.loadPedidoEmitterProfile = loadPedidoEmitterProfile;
exports.savePedidoEmitterProfile = savePedidoEmitterProfile;
exports.formatPedidoNumber = formatPedidoNumber;
exports.chunkNoteItems = chunkNoteItems;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
exports.PEDIDO_A5_ROWS = 15;
exports.DEFAULT_EMITTER_PROFILE = {
    monogram: 'QF',
    brandName: 'QUALIFACAS',
    subtitle: 'FACAS DE CORTE E VINCO',
    phone: '(62) 9 8143-2096',
    specialtiesLine1: 'FACAS P/ MEIO CORTE, ENVELOPES, TAGS',
    specialtiesLine2: 'E CARTONAGEM EM GERAL',
    email: 'qualifacas@hotmail.com',
    website: '',
    address: 'Av. Independência N° 1507 - St. L. Vila Nova - Goiânia - GO',
};
const EMITTER_STORAGE_PREFIX = 'facasflow_pedido_a5_emitter_v2_';
function loadPedidoEmitterProfile(tenantKey) {
    try {
        if (typeof window === 'undefined' || !window.localStorage) {
            return exports.DEFAULT_EMITTER_PROFILE;
        }
        const raw = window.localStorage.getItem(`${EMITTER_STORAGE_PREFIX}${tenantKey || 'default'}`);
        if (!raw)
            return exports.DEFAULT_EMITTER_PROFILE;
        const parsed = JSON.parse(raw);
        return {
            ...exports.DEFAULT_EMITTER_PROFILE,
            ...(parsed && typeof parsed === 'object' ? parsed : {}),
        };
    }
    catch {
        return exports.DEFAULT_EMITTER_PROFILE;
    }
}
function savePedidoEmitterProfile(tenantKey, profile) {
    try {
        if (typeof window === 'undefined' || !window.localStorage)
            return;
        window.localStorage.setItem(`${EMITTER_STORAGE_PREFIX}${tenantKey || 'default'}`, JSON.stringify(profile));
    }
    catch {
        // non-blocking
    }
}
function formatPedidoNumber(numero) {
    return String(Math.max(1, Math.floor(Number(numero) || 1))).padStart(5, '0');
}
function chunkNoteItems(items, size = exports.PEDIDO_A5_ROWS) {
    if (!items || items.length === 0)
        return [[]];
    const safeSize = Math.max(1, size);
    const chunks = [];
    for (let i = 0; i < items.length; i += safeSize) {
        chunks.push(items.slice(i, i + safeSize));
    }
    return chunks;
}
const NOTE_STATUS_META = {
    rascunho: {
        label: 'Rascunho',
        badgeClass: 'bg-white/60 text-slate-700 border-white/80',
    },
    emitida: {
        label: 'Emitida',
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60',
    },
    impressa: {
        label: 'Impressa',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60',
    },
    cancelada: {
        label: 'Cancelada',
        badgeClass: 'bg-rose-500/15 text-rose-800 border-rose-300/60',
    },
};
const PedidoBrandMark = ({ monogram }) => {
    const letters = (monogram || 'QF').trim().slice(0, 3).toUpperCase();
    if (letters === 'QF') {
        return (react_1.default.createElement("svg", { viewBox: "0 0 116 74", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
                width: 'calc(26 * var(--u))',
                height: 'calc(16.6 * var(--u))',
                display: 'block',
            }, "aria-hidden": "true" },
            react_1.default.createElement("path", { d: "M36 6C19.5 6 6 19.2 6 35.8C6 52.4 19.5 65.6 36 65.6C43.2 65.6 49.8 63.1 55 58.9L63.5 67.2L69.5 61.4L61.2 53.3C64.4 48.2 66.2 42.2 66.2 35.8C66.2 19.2 52.6 6 36 6ZM36 14.2C48.1 14.2 57.6 23.7 57.6 35.8C57.6 40.2 56.3 44.3 54 47.7L46.5 40.4L40.6 46.2L48.1 53.4C44.6 56 40.5 57.4 36 57.4C23.9 57.4 14.4 47.9 14.4 35.8C14.4 23.7 23.9 14.2 36 14.2Z", fill: "#ffffff", stroke: "#C8102E", strokeWidth: "2.4", strokeLinejoin: "round" }),
            react_1.default.createElement("path", { d: "M71 8H109V16.5H80.2V31.5H104.5V39.8H80.2V64.5H71V8Z", fill: "#ffffff", stroke: "#C8102E", strokeWidth: "2.4", strokeLinejoin: "round" })));
    }
    return (react_1.default.createElement("svg", { viewBox: "0 0 110 66", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: {
            width: 'calc(24 * var(--u))',
            height: 'calc(15 * var(--u))',
            display: 'block',
        }, "aria-hidden": "true" },
        react_1.default.createElement("text", { x: "55", y: "50", textAnchor: "middle", fill: "#ffffff", stroke: "#C8102E", strokeWidth: "2.6", fontFamily: "Inter, Plus Jakarta Sans, Arial, sans-serif", fontWeight: "900", fontSize: "48", letterSpacing: "2" }, letters)));
};
const PedidoA5Sheet = ({ note, itemsChunk, pageIndex, totalPages, emitter = exports.DEFAULT_EMITTER_PROFILE, isPrintMode = false, }) => {
    const formattedNum = formatPedidoNumber(note.numero);
    const pageTotal = (0, financeEngine_1.roundCurrencyBRL)(itemsChunk.reduce((sum, it) => sum + (Number(it.total) || 0), 0));
    const grandTotal = (0, financeEngine_1.roundCurrencyBRL)(note.items.reduce((sum, it) => sum + (Number(it.total) || 0), 0));
    const displayTotal = totalPages > 1 && pageIndex < totalPages - 1 ? pageTotal : grandTotal;
    const totalBoxLabel = totalPages > 1 && pageIndex < totalPages - 1 ? 'SUBTOTAL' : 'TOTAL';
    const rowSlots = Array.from({ length: exports.PEDIDO_A5_ROWS }, (_, i) => {
        return itemsChunk[i] || null;
    });
    const thinBorder = 'calc(0.32 * var(--u)) solid #000000';
    const innerRule = 'calc(0.24 * var(--u)) solid #000000';
    const radius = 'calc(2.4 * var(--u))';
    const sheetBody = (react_1.default.createElement("div", { className: `pedido-a5-doc${isPrintMode ? ' pedido-a5-print' : ''}`, "data-pedido-sheet": "a5", "data-pedido-numero": formattedNum },
        react_1.default.createElement("div", { style: {
                display: 'flex',
                alignItems: 'stretch',
                gap: 'calc(1.4 * var(--u))',
                height: 'calc(31.5 * var(--u))',
                flexShrink: 0,
            } },
            react_1.default.createElement("div", { style: {
                    flex: 1,
                    minWidth: 0,
                    border: thinBorder,
                    borderRadius: radius,
                    padding: 'calc(1.8 * var(--u)) calc(2.4 * var(--u))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'calc(2.2 * var(--u))',
                    backgroundColor: '#ffffff',
                } },
                react_1.default.createElement("div", { style: {
                        width: 'calc(30 * var(--u))',
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'calc(0.5 * var(--u))',
                    } },
                    react_1.default.createElement(PedidoBrandMark, { monogram: emitter.monogram }),
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(3.1 * var(--u))',
                            fontWeight: 900,
                            color: '#C8102E',
                            lineHeight: 1.05,
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        } }, emitter.brandName),
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(1.75 * var(--u))',
                            fontWeight: 800,
                            color: '#C8102E',
                            lineHeight: 1.05,
                            letterSpacing: '0.02em',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        } }, emitter.subtitle)),
                react_1.default.createElement("div", { style: {
                        flex: 1,
                        minWidth: 0,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        textAlign: 'center',
                        paddingTop: 'calc(0.2 * var(--u))',
                        paddingBottom: 'calc(0.2 * var(--u))',
                    } },
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(3.85 * var(--u))',
                            fontWeight: 800,
                            color: '#C8102E',
                            lineHeight: 1.1,
                            letterSpacing: '0.01em',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        } }, emitter.phone),
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(2.15 * var(--u))',
                            fontWeight: 800,
                            color: '#000000',
                            lineHeight: 1.25,
                            textTransform: 'uppercase',
                        } },
                        react_1.default.createElement("div", null, emitter.specialtiesLine1),
                        react_1.default.createElement("div", null, emitter.specialtiesLine2)),
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(2.45 * var(--u))',
                            fontWeight: 700,
                            color: '#C8102E',
                            lineHeight: 1.18,
                            maxWidth: '100%',
                        } },
                        react_1.default.createElement("div", { style: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            } }, emitter.email),
                        emitter.website && (react_1.default.createElement("div", { style: {
                                fontSize: 'calc(2.05 * var(--u))',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            } }, emitter.website))),
                    react_1.default.createElement("div", { style: {
                            fontSize: 'calc(2.0 * var(--u))',
                            fontWeight: 600,
                            color: '#111111',
                            lineHeight: 1.2,
                            maxWidth: '100%',
                        } }, emitter.address))),
            react_1.default.createElement("div", { style: {
                    width: 'calc(36 * var(--u))',
                    flexShrink: 0,
                    border: thinBorder,
                    borderRadius: radius,
                    padding: 'calc(2.6 * var(--u)) calc(2 * var(--u))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff',
                } },
                react_1.default.createElement("div", { style: {
                        fontSize: 'calc(5.2 * var(--u))',
                        fontWeight: 900,
                        color: '#000000',
                        letterSpacing: '0.05em',
                        lineHeight: 1.05,
                        textTransform: 'uppercase',
                    } }, "PEDIDO"),
                react_1.default.createElement("div", { style: {
                        fontSize: 'calc(5.0 * var(--u))',
                        fontWeight: 800,
                        color: '#C8102E',
                        fontVariantNumeric: 'tabular-nums',
                        letterSpacing: '0.06em',
                        lineHeight: 1.05,
                        marginBottom: totalPages > 1 ? 'calc(0.4 * var(--u))' : 'calc(2.8 * var(--u))',
                    } }, formattedNum),
                totalPages > 1 && (react_1.default.createElement("div", { style: {
                        fontSize: 'calc(1.85 * var(--u))',
                        fontWeight: 700,
                        color: '#000000',
                        lineHeight: 1,
                    } },
                    "FOLHA ",
                    pageIndex + 1,
                    "/",
                    totalPages)))),
        react_1.default.createElement("div", { style: {
                marginTop: 'calc(1.2 * var(--u))',
                border: thinBorder,
                borderRadius: radius,
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#ffffff',
            } },
            react_1.default.createElement("div", { style: {
                    height: 'calc(6.4 * var(--u))',
                    padding: '0 calc(2.2 * var(--u))',
                    borderBottom: innerRule,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'calc(2 * var(--u))',
                } },
                react_1.default.createElement("div", { style: {
                        width: '62%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "CLIENTE:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.65 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                        } }, note.clienteNome)),
                react_1.default.createElement("div", { style: {
                        width: '38%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "FONE:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                        } }, note.contato))),
            react_1.default.createElement("div", { style: {
                    height: 'calc(6.4 * var(--u))',
                    padding: '0 calc(2.2 * var(--u))',
                    borderBottom: innerRule,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'calc(1.2 * var(--u))',
                    minWidth: 0,
                } },
                react_1.default.createElement("span", { style: {
                        fontSize: 'calc(2.2 * var(--u))',
                        fontWeight: 700,
                        color: '#27272a',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                    } }, "ENDERE\u00C7O:"),
                react_1.default.createElement("span", { style: {
                        fontSize: 'calc(2.6 * var(--u))',
                        fontWeight: 500,
                        color: '#09090b',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        minWidth: 0,
                    } }, note.endereco || '')),
            react_1.default.createElement("div", { style: {
                    height: 'calc(6.4 * var(--u))',
                    padding: '0 calc(2.2 * var(--u))',
                    borderBottom: innerRule,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'calc(2 * var(--u))',
                } },
                react_1.default.createElement("div", { style: {
                        width: '62%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "CNPJ/CPF:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            fontVariantNumeric: 'tabular-nums',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                        } }, note.cnpj)),
                react_1.default.createElement("div", { style: {
                        width: '38%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "INSCRI\u00C7\u00C3O:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            minWidth: 0,
                        } }, note.inscricao || ''))),
            react_1.default.createElement("div", { style: {
                    height: 'calc(6.4 * var(--u))',
                    padding: '0 calc(2.2 * var(--u))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'calc(2 * var(--u))',
                } },
                react_1.default.createElement("div", { style: {
                        width: '62%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "DATA ENTRADA:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                        } }, note.data ? (0, financeEngine_1.formatDateBR)(note.data) : ''),
                    note.osId && (react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.05 * var(--u))',
                            fontWeight: 700,
                            color: '#52525b',
                            marginLeft: 'calc(2 * var(--u))',
                            whiteSpace: 'nowrap',
                        } },
                        "(",
                        note.osId,
                        ")"))),
                react_1.default.createElement("div", { style: {
                        width: '38%',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'calc(1.2 * var(--u))',
                        minWidth: 0,
                    } },
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.2 * var(--u))',
                            fontWeight: 700,
                            color: '#27272a',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        } }, "DATA SA\u00CDDA:"),
                    react_1.default.createElement("span", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            fontVariantNumeric: 'tabular-nums',
                            whiteSpace: 'nowrap',
                        } }, note.dataSaida ? (0, financeEngine_1.formatDateBR)(note.dataSaida) : '')))),
        react_1.default.createElement("div", { style: {
                marginTop: 'calc(1.2 * var(--u))',
                flex: 1,
                minHeight: 0,
                border: thinBorder,
                borderRadius: radius,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
            } },
            react_1.default.createElement("table", { className: "pedido-a5-table" },
                react_1.default.createElement("colgroup", null,
                    react_1.default.createElement("col", { style: { width: '10.5%' } }),
                    react_1.default.createElement("col", { style: { width: '67.5%' } }),
                    react_1.default.createElement("col", { style: { width: '22%' } })),
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", { style: {
                            height: 'calc(6.2 * var(--u))',
                            borderBottom: thinBorder,
                            backgroundColor: '#fafafa',
                        } },
                        react_1.default.createElement("th", { style: {
                                borderRight: thinBorder,
                                fontSize: 'calc(2.2 * var(--u))',
                                fontWeight: 700,
                                color: '#27272a',
                                textAlign: 'center',
                                padding: '0 calc(0.8 * var(--u))',
                                letterSpacing: '0.02em',
                            } }, "QUANT."),
                        react_1.default.createElement("th", { style: {
                                borderRight: thinBorder,
                                fontSize: 'calc(2.25 * var(--u))',
                                fontWeight: 700,
                                color: '#27272a',
                                textAlign: 'center',
                                padding: '0 calc(1.5 * var(--u))',
                                letterSpacing: '0.03em',
                            } }, "DESCRI\u00C7\u00C3O DOS SERVI\u00C7OS"),
                        react_1.default.createElement("th", { style: {
                                fontSize: 'calc(2.25 * var(--u))',
                                fontWeight: 700,
                                color: '#27272a',
                                textAlign: 'center',
                                padding: '0 calc(1.5 * var(--u))',
                                letterSpacing: '0.03em',
                            } }, "VALOR"))),
                react_1.default.createElement("tbody", null, rowSlots.map((item, idx) => (react_1.default.createElement("tr", { key: item ? item.id : `empty-row-${idx}`, style: {
                        height: `${100 / exports.PEDIDO_A5_ROWS}%`,
                        borderBottom: idx < exports.PEDIDO_A5_ROWS - 1 ? innerRule : 'none',
                    } },
                    react_1.default.createElement("td", { style: {
                            borderRight: thinBorder,
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            textAlign: 'center',
                            fontVariantNumeric: 'tabular-nums',
                            padding: '0 calc(1 * var(--u))',
                            whiteSpace: 'nowrap',
                        } }, item ? (0, financeEngine_1.formatQuantityBR)(item.quantidade) : '\u00A0'),
                    react_1.default.createElement("td", { style: {
                            borderRight: thinBorder,
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 500,
                            color: '#09090b',
                            textAlign: 'left',
                            padding: '0 calc(2 * var(--u))',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        } }, item ? item.descricao : '\u00A0'),
                    react_1.default.createElement("td", { style: {
                            fontSize: 'calc(2.6 * var(--u))',
                            fontWeight: 600,
                            color: '#09090b',
                            textAlign: 'right',
                            fontVariantNumeric: 'tabular-nums',
                            padding: '0 calc(2 * var(--u))',
                            whiteSpace: 'nowrap',
                        } }, item ? (0, financeEngine_1.formatBRL)(item.total) : '\u00A0'))))))),
        react_1.default.createElement("div", { style: {
                marginTop: 'calc(1.8 * var(--u))',
                height: 'calc(10.4 * var(--u))',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'flex-end',
            } },
            react_1.default.createElement("div", { style: {
                    width: '78%',
                    paddingRight: 'calc(3 * var(--u))',
                    paddingBottom: 'calc(0.4 * var(--u))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                } },
                react_1.default.createElement("div", { style: {
                        width: '82%',
                        borderBottom: 'calc(0.32 * var(--u)) solid #000000',
                        marginBottom: 'calc(1 * var(--u))',
                    } }),
                react_1.default.createElement("span", { style: {
                        fontSize: 'calc(2.15 * var(--u))',
                        fontWeight: 800,
                        color: '#000000',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                    } }, "ASSINATURA DO CLIENTE")),
            react_1.default.createElement("div", { style: {
                    width: '22%',
                    height: 'calc(9.4 * var(--u))',
                    border: thinBorder,
                    borderRadius: 'calc(2 * var(--u))',
                    padding: 'calc(0.9 * var(--u)) calc(1.8 * var(--u))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff',
                }, "data-pedido-total-box": "true" },
                react_1.default.createElement("span", { style: {
                        fontSize: 'calc(1.7 * var(--u))',
                        fontWeight: 800,
                        color: '#000000',
                        letterSpacing: '0.05em',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                    } }, totalBoxLabel),
                react_1.default.createElement("span", { style: {
                        fontSize: 'calc(3.1 * var(--u))',
                        fontWeight: 900,
                        color: '#000000',
                        textAlign: 'right',
                        fontVariantNumeric: 'tabular-nums',
                        lineHeight: 1.05,
                        whiteSpace: 'nowrap',
                    } }, (0, financeEngine_1.formatBRL)(displayTotal))))));
    if (isPrintMode) {
        return sheetBody;
    }
    return react_1.default.createElement("div", { className: "pedido-a5-screen-frame" }, sheetBody);
};
exports.PedidoA5Sheet = PedidoA5Sheet;
const NotesSection = ({ notas, companies, orders, nextNoteNumber, tenantKey, globalSearchQuery, onSaveNote, onMarkNotePrinted, onDeleteNote, onTriggerPrint, onSyncPrintPreview, }) => {
    const [viewMode, setViewMode] = (0, react_1.useState)('list');
    const [editingId, setEditingId] = (0, react_1.useState)(undefined);
    const [previewNoteId, setPreviewNoteId] = (0, react_1.useState)(null);
    const [isSaving, setIsSaving] = (0, react_1.useState)(false);
    // Emitter header profile (defaults to QUALIFACAS official profile)
    const [emitter, setEmitter] = (0, react_1.useState)(() => loadPedidoEmitterProfile(tenantKey));
    const [showEmitterPanel, setShowEmitterPanel] = (0, react_1.useState)(false);
    // Form states
    const [numero, setNumero] = (0, react_1.useState)(nextNoteNumber);
    const [dataEntrada, setDataEntrada] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [dataSaida, setDataSaida] = (0, react_1.useState)(() => (0, financeEngine_1.toISODate)());
    const [selectedCompanyId, setSelectedCompanyId] = (0, react_1.useState)('manual');
    const [selectedOrderId, setSelectedOrderId] = (0, react_1.useState)('');
    const [clienteNome, setClienteNome] = (0, react_1.useState)('');
    const [cnpjCpf, setCnpjCpf] = (0, react_1.useState)('');
    const [inscricao, setInscricao] = (0, react_1.useState)('');
    const [fone, setFone] = (0, react_1.useState)('');
    const [endereco, setEndereco] = (0, react_1.useState)('');
    const [status, setStatus] = (0, react_1.useState)('emitida');
    const [items, setItems] = (0, react_1.useState)([
        { id: 'IT-1', descricao: '', quantidade: 1, precoUnitario: 0, total: 0 },
    ]);
    const [formError, setFormError] = (0, react_1.useState)(null);
    const updateEmitterField = (field, value) => {
        setEmitter((prev) => {
            const next = { ...prev, [field]: value };
            savePedidoEmitterProfile(tenantKey, next);
            return next;
        });
    };
    const resetEmitterToDefault = () => {
        setEmitter(exports.DEFAULT_EMITTER_PROFILE);
        savePedidoEmitterProfile(tenantKey, exports.DEFAULT_EMITTER_PROFILE);
    };
    const openNewForm = () => {
        setEditingId(undefined);
        setNumero(nextNoteNumber);
        const today = (0, financeEngine_1.toISODate)();
        setDataEntrada(today);
        setDataSaida(today);
        setSelectedCompanyId('manual');
        setSelectedOrderId('');
        setClienteNome('');
        setCnpjCpf('');
        setInscricao('');
        setFone('');
        setEndereco('');
        setStatus('emitida');
        setItems([
            {
                id: `IT-${Date.now()}`,
                descricao: '',
                quantidade: 1,
                precoUnitario: 0,
                total: 0,
            },
        ]);
        setFormError(null);
        setViewMode('form');
    };
    const openEditForm = (note) => {
        setEditingId(note.id);
        setNumero(note.numero);
        setDataEntrada(note.data || (0, financeEngine_1.toISODate)());
        setDataSaida(note.dataSaida || '');
        setSelectedCompanyId(note.empresaId || 'manual');
        setSelectedOrderId(note.osId || '');
        setClienteNome(note.clienteNome);
        setCnpjCpf((0, financeEngine_1.formatCpfCnpjMask)(note.cnpj));
        setInscricao(note.inscricao || '');
        setFone(note.contato || '');
        setEndereco(note.endereco || '');
        setStatus(note.status);
        setItems(note.items.length > 0
            ? note.items.map((it) => ({ ...it }))
            : [
                {
                    id: `IT-${Date.now()}`,
                    descricao: '',
                    quantidade: 1,
                    precoUnitario: 0,
                    total: 0,
                },
            ]);
        setFormError(null);
        setViewMode('form');
    };
    const sanitizeImportedDoc = (raw) => {
        const digits = String(raw || '').replace(/\D/g, '');
        if (!digits || /^0+$/.test(digits) || digits === '00000000000100') {
            return '';
        }
        return (0, financeEngine_1.formatCpfCnpjMask)(digits);
    };
    const handleCompanySelect = (compId) => {
        setSelectedCompanyId(compId);
        if (compId === 'manual')
            return;
        const comp = companies.find((c) => c.id === compId);
        if (comp) {
            setClienteNome(comp.corporateName);
            setCnpjCpf(sanitizeImportedDoc(comp.cnpj));
            setFone((0, financeEngine_1.formatPhoneMask)(comp.phone));
            if (comp.city && !endereco.trim()) {
                setEndereco(comp.city);
            }
        }
    };
    const handleImportFromOrder = (orderId) => {
        setSelectedOrderId(orderId);
        if (!orderId)
            return;
        const ord = orders.find((o) => o.id === orderId);
        if (!ord)
            return;
        const comp = companies.find((c) => c.id === ord.companyId);
        if (comp) {
            setSelectedCompanyId(comp.id);
            setClienteNome(comp.corporateName);
            setCnpjCpf(sanitizeImportedDoc(comp.cnpj));
            setFone((0, financeEngine_1.formatPhoneMask)(comp.phone || ord.companyPhone));
            setEndereco(comp.city || '');
        }
        else {
            setSelectedCompanyId('manual');
            setClienteNome(ord.companyName);
            setFone((0, financeEngine_1.formatPhoneMask)(ord.companyPhone));
        }
        const entryDate = ord.createdAt && /^\d{4}-\d{2}-\d{2}/.test(ord.createdAt)
            ? ord.createdAt.slice(0, 10)
            : (0, financeEngine_1.toISODate)();
        const exitDate = ord.dueDate && /^\d{4}-\d{2}-\d{2}/.test(ord.dueDate)
            ? ord.dueDate.slice(0, 10)
            : (0, financeEngine_1.toISODate)();
        setDataEntrada(entryDate);
        setDataSaida(exitDate);
        const amount = (0, financeEngine_1.roundCurrencyBRL)(ord.amount || 0);
        setItems([
            {
                id: `IT-${Date.now()}`,
                descricao: ord.toolDescription,
                quantidade: 1,
                precoUnitario: amount,
                total: amount,
            },
        ]);
        setFormError(null);
    };
    const handleAppendOrderAsItem = (orderId) => {
        if (!orderId)
            return;
        const ord = orders.find((o) => o.id === orderId);
        if (!ord)
            return;
        const amount = (0, financeEngine_1.roundCurrencyBRL)(ord.amount || 0);
        setItems((prev) => {
            const cleaned = prev.filter((r) => r.descricao.trim() !== '' || r.precoUnitario > 0);
            return [
                ...cleaned,
                {
                    id: `IT-${Date.now()}-${cleaned.length + 1}`,
                    descricao: `${ord.id} — ${ord.toolDescription}`,
                    quantidade: 1,
                    precoUnitario: amount,
                    total: amount,
                },
            ];
        });
    };
    const updateRow = (idx, field, value) => {
        setItems((prev) => prev.map((row, i) => {
            if (i !== idx)
                return row;
            const nextQty = field === 'quantidade'
                ? Math.max(0, parseFloat(value.replace(',', '.')) || 0)
                : row.quantidade;
            const nextPrice = field === 'precoUnitario'
                ? Math.max(0, parseFloat(value.replace(',', '.')) || 0)
                : row.precoUnitario;
            const nextDesc = field === 'descricao' ? value : row.descricao;
            return {
                ...row,
                descricao: nextDesc,
                quantidade: nextQty,
                precoUnitario: nextPrice,
                total: (0, financeEngine_1.roundCurrencyBRL)(nextQty * nextPrice),
            };
        }));
    };
    const handleAddRow = () => {
        setItems((prev) => [
            ...prev,
            {
                id: `IT-${Date.now()}-${prev.length + 1}`,
                descricao: '',
                quantidade: 1,
                precoUnitario: 0,
                total: 0,
            },
        ]);
    };
    const handleRemoveRow = (idx) => {
        setItems((prev) => prev.length <= 1 ? prev : prev.filter((_, i) => i !== idx));
    };
    const tableTotal = (0, financeEngine_1.roundCurrencyBRL)(items.reduce((sum, it) => sum + (it.total || 0), 0));
    // Live draft note used for instant A5 preview while editing the form
    const liveDraftNote = (0, react_1.useMemo)(() => ({
        id: editingId || '__draft__',
        numero,
        data: dataEntrada || (0, financeEngine_1.toISODate)(),
        dataSaida: dataSaida || undefined,
        empresaId: selectedCompanyId !== 'manual' ? selectedCompanyId : undefined,
        clienteNome: clienteNome.trim(),
        cnpj: cnpjCpf.trim(),
        inscricao: inscricao.trim() || undefined,
        contato: fone.trim(),
        endereco: endereco.trim() || undefined,
        osId: selectedOrderId || undefined,
        status,
        items: items.filter((it) => it.descricao.trim() !== '' || it.total > 0),
        total: tableTotal,
        criadoPor: '',
        criadoEm: '',
    }), [
        editingId,
        numero,
        dataEntrada,
        dataSaida,
        selectedCompanyId,
        clienteNome,
        cnpjCpf,
        inscricao,
        fone,
        endereco,
        selectedOrderId,
        status,
        items,
        tableTotal,
    ]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        if (!clienteNome.trim()) {
            setFormError('Informe o nome do cliente.');
            return;
        }
        const docDigits = cnpjCpf.replace(/\D/g, '');
        if (docDigits.length > 0 && docDigits.length !== 11 && docDigits.length !== 14) {
            setFormError('CNPJ/CPF incompleto. Informe 11 dígitos (CPF) ou 14 dígitos (CNPJ), ou deixe em branco.');
            return;
        }
        const validItems = items.filter((it) => it.descricao.trim() && it.quantidade > 0);
        if (validItems.length === 0) {
            setFormError('Adicione pelo menos 1 serviço com descrição e quantidade maior que zero.');
            return;
        }
        const normalizedItems = validItems.map((it) => ({
            ...it,
            descricao: it.descricao.trim(),
            total: (0, financeEngine_1.roundCurrencyBRL)(it.quantidade * it.precoUnitario),
        }));
        const computedTotal = (0, financeEngine_1.roundCurrencyBRL)(normalizedItems.reduce((s, it) => s + it.total, 0));
        setIsSaving(true);
        try {
            const saved = await onSaveNote({
                numero,
                data: dataEntrada || (0, financeEngine_1.toISODate)(),
                dataSaida: dataSaida || undefined,
                empresaId: selectedCompanyId !== 'manual' ? selectedCompanyId : undefined,
                clienteNome: clienteNome.trim(),
                cnpj: docDigits.length > 0 ? (0, financeEngine_1.formatCpfCnpjMask)(cnpjCpf) : '',
                inscricao: inscricao.trim() || undefined,
                contato: fone.trim(),
                endereco: endereco.trim() || undefined,
                osId: selectedOrderId || undefined,
                status,
                items: normalizedItems,
                total: computedTotal,
            }, editingId);
            if (saved) {
                setPreviewNoteId(saved.id);
                setViewMode('preview');
            }
            else {
                setFormError('Não foi possível salvar a nota no banco de dados. Verifique sua conexão e tente novamente.');
            }
        }
        finally {
            setIsSaving(false);
        }
    };
    const filteredNotas = (0, react_1.useMemo)(() => {
        const q = globalSearchQuery.trim().toLowerCase();
        if (!q)
            return notas;
        return notas.filter((n) => formatPedidoNumber(n.numero).includes(q) ||
            String(n.numero).includes(q) ||
            n.clienteNome.toLowerCase().includes(q) ||
            n.cnpj.toLowerCase().includes(q) ||
            (n.osId || '').toLowerCase().includes(q));
    }, [notas, globalSearchQuery]);
    const previewNote = notas.find((n) => n.id === previewNoteId) || null;
    (0, react_1.useEffect)(() => {
        if (!onSyncPrintPreview)
            return;
        if (viewMode === 'preview' && previewNote) {
            onSyncPrintPreview({ note: previewNote, emitter });
        }
        else if (viewMode === 'form') {
            onSyncPrintPreview({ note: liveDraftNote, emitter });
        }
    }, [viewMode, previewNote, liveDraftNote, emitter, onSyncPrintPreview]);
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        viewMode === 'list' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 tracking-tight frosted-text-depth" }, "Notas e Pedidos (A5)"),
                    react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Pedido imprim\u00EDvel em A5 retrato (148\u00D7210 mm), 15 linhas, preenchimento direto da OS e soma autom\u00E1tica.")),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setShowEmitterPanel((v) => !v), className: `liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer ${showEmitterPanel
                            ? 'ring-2 ring-indigo-500/60 text-indigo-800'
                            : 'text-slate-800'}` },
                        react_1.default.createElement(lucide_react_1.Settings2, { className: "w-4 h-4 text-indigo-600" }),
                        react_1.default.createElement("span", null, "Cabe\u00E7alho")),
                    react_1.default.createElement("button", { type: "button", onClick: openNewForm, className: "min-h-[44px] bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm rounded-full px-5 py-2.5 inline-flex items-center gap-2 shadow-lg shadow-indigo-600/30 border border-white/40 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4" }),
                        react_1.default.createElement("span", null, "Novo Pedido")))),
            showEmitterPanel && (react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 space-y-4" },
                react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Dados do Cabe\u00E7alho do Pedido"),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Personalize a marca, contatos e endere\u00E7o exibidos na impress\u00E3o A5.")),
                    react_1.default.createElement("button", { type: "button", onClick: resetEmitterToDefault, className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-700 inline-flex items-center gap-1.5 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.RotateCcw, { className: "w-3.5 h-3.5" }),
                        react_1.default.createElement("span", null, "Restaurar Padr\u00E3o"))),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Sigla do Logo (at\u00E9 3 letras)"),
                        react_1.default.createElement("input", { type: "text", maxLength: 3, value: emitter.monogram, onChange: (e) => updateEmitterField('monogram', e.target.value), className: `${inputClass} uppercase font-bold` })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Nome da Empresa"),
                        react_1.default.createElement("input", { type: "text", value: emitter.brandName, onChange: (e) => updateEmitterField('brandName', e.target.value), className: inputClass })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Subt\u00EDtulo"),
                        react_1.default.createElement("input", { type: "text", value: emitter.subtitle, onChange: (e) => updateEmitterField('subtitle', e.target.value), className: inputClass }))),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Telefones"),
                        react_1.default.createElement("input", { type: "text", value: emitter.phone, onChange: (e) => updateEmitterField('phone', e.target.value), className: inputClass })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "E-mail"),
                        react_1.default.createElement("input", { type: "text", value: emitter.email, onChange: (e) => updateEmitterField('email', e.target.value), className: inputClass })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Site"),
                        react_1.default.createElement("input", { type: "text", value: emitter.website, onChange: (e) => updateEmitterField('website', e.target.value), className: inputClass }))),
                react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Descri\u00E7\u00E3o (Linha 1)"),
                        react_1.default.createElement("input", { type: "text", value: emitter.specialtiesLine1, onChange: (e) => updateEmitterField('specialtiesLine1', e.target.value), className: inputClass })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Descri\u00E7\u00E3o (Linha 2)"),
                        react_1.default.createElement("input", { type: "text", value: emitter.specialtiesLine2, onChange: (e) => updateEmitterField('specialtiesLine2', e.target.value), className: inputClass })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Endere\u00E7o"),
                        react_1.default.createElement("input", { type: "text", value: emitter.address, onChange: (e) => updateEmitterField('address', e.target.value), className: inputClass }))))),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] overflow-hidden min-w-0" },
                react_1.default.createElement("div", { className: "md:hidden divide-y divide-white/55" }, filteredNotas.length === 0 ? (react_1.default.createElement("div", { className: "py-10 px-4 text-center space-y-3" },
                    react_1.default.createElement("p", { className: "font-medium text-xs text-slate-600" },
                        "Nenhum pedido emitido ainda. Clique em",
                        ' ',
                        react_1.default.createElement("strong", null, "Novo Pedido"),
                        " para preencher com dados da OS."),
                    react_1.default.createElement("div", { className: "flex items-center justify-center pt-1" },
                        react_1.default.createElement("button", { type: "button", onClick: openNewForm, className: "min-h-[44px] px-5 py-2 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer" },
                            react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4" }),
                            react_1.default.createElement("span", null, "Novo Pedido"))))) : (filteredNotas.map((note) => {
                    const stMeta = NOTE_STATUS_META[note.status];
                    return (react_1.default.createElement("div", { key: note.id, className: "p-4 space-y-2.5 text-xs min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-start justify-between gap-2 min-w-0" },
                            react_1.default.createElement("div", { className: "min-w-0" },
                                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                                    react_1.default.createElement("span", { className: "font-mono font-extrabold text-rose-700" },
                                        "PEDIDO ",
                                        formatPedidoNumber(note.numero)),
                                    note.osId && (react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60" }, note.osId))),
                                react_1.default.createElement("span", { className: "font-bold text-slate-900 break-words block mt-0.5" }, note.clienteNome)),
                            react_1.default.createElement("span", { className: "font-mono font-black text-base text-slate-900 shrink-0" }, (0, financeEngine_1.formatBRL)(note.total))),
                        react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Entrada / Sa\u00EDda"),
                                react_1.default.createElement("span", { className: "font-mono text-slate-800" },
                                    (0, financeEngine_1.formatDateBR)(note.data),
                                    note.dataSaida
                                        ? ` → ${(0, financeEngine_1.formatDateBR)(note.dataSaida)}`
                                        : '')),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Status"),
                                react_1.default.createElement("span", { className: `inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${stMeta.badgeClass}` }, stMeta.label)),
                            note.cnpj && (react_1.default.createElement("div", { className: "col-span-2" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "CNPJ/CPF"),
                                react_1.default.createElement("span", { className: "font-mono text-slate-700" }, note.cnpj)))),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-1" },
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    setPreviewNoteId(note.id);
                                    setViewMode('preview');
                                }, className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Eye, { className: "w-4 h-4 text-indigo-600" }),
                                react_1.default.createElement("span", null, "Visualizar")),
                            react_1.default.createElement("button", { type: "button", onClick: () => openEditForm(note), className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Edit3, { className: "w-4 h-4 text-indigo-600" }),
                                react_1.default.createElement("span", null, "Editar")),
                            react_1.default.createElement("button", { type: "button", onClick: () => {
                                    onMarkNotePrinted(note.id);
                                    onTriggerPrint(note, emitter);
                                }, className: "min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Printer, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Imprimir A5")),
                            react_1.default.createElement("button", { type: "button", onClick: () => onDeleteNote(note.id), "aria-label": "Excluir pedido", className: "min-h-[44px] min-w-[44px] rounded-full bg-white/60 hover:bg-rose-500/20 text-slate-500 hover:text-rose-700 border border-white/75 inline-flex items-center justify-center cursor-pointer", title: "Excluir pedido" },
                                react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))));
                }))),
                react_1.default.createElement("div", { className: "hidden md:block overflow-x-auto" },
                    react_1.default.createElement("table", { className: "w-full text-left border-collapse" },
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "text-[11px] uppercase tracking-wider text-slate-600 border-b border-white/60 bg-white/30" },
                                react_1.default.createElement("th", { className: "py-3.5 px-5 font-extrabold" }, "Pedido"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Cliente"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Entrada / Sa\u00EDda"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 text-right font-extrabold" }, "Total"),
                                react_1.default.createElement("th", { className: "py-3.5 px-4 font-extrabold" }, "Status"),
                                react_1.default.createElement("th", { className: "py-3.5 px-5 text-right font-extrabold" }, "A\u00E7\u00F5es"))),
                        react_1.default.createElement("tbody", { className: "divide-y divide-white/45 text-xs" }, filteredNotas.length === 0 ? (react_1.default.createElement("tr", null,
                            react_1.default.createElement("td", { colSpan: 6, className: "py-12 px-6 text-center space-y-3" },
                                react_1.default.createElement("p", { className: "font-medium text-slate-600" },
                                    "Nenhum pedido emitido ainda. Clique em",
                                    ' ',
                                    react_1.default.createElement("strong", null, "Novo Pedido"),
                                    " para preencher com dados da OS."),
                                react_1.default.createElement("div", { className: "flex items-center justify-center pt-1" },
                                    react_1.default.createElement("button", { type: "button", onClick: openNewForm, className: "min-h-[44px] px-5 py-2 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer" },
                                        react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4" }),
                                        react_1.default.createElement("span", null, "Novo Pedido")))))) : (filteredNotas.map((note) => {
                            const stMeta = NOTE_STATUS_META[note.status];
                            return (react_1.default.createElement("tr", { key: note.id, className: "hover:bg-white/35 transition-colors" },
                                react_1.default.createElement("td", { className: "py-4 px-5 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: "font-mono font-extrabold text-rose-700 block" },
                                        "N\u00BA ",
                                        formatPedidoNumber(note.numero)),
                                    note.osId && (react_1.default.createElement("span", { className: "text-[10px] font-bold text-indigo-700" }, note.osId))),
                                react_1.default.createElement("td", { className: "py-4 px-4" },
                                    react_1.default.createElement("span", { className: "font-bold text-slate-900 block" }, note.clienteNome),
                                    react_1.default.createElement("span", { className: "text-[11px] font-mono text-slate-600" }, note.cnpj || note.contato || '—')),
                                react_1.default.createElement("td", { className: "py-4 px-4 font-mono text-slate-800 whitespace-nowrap" },
                                    react_1.default.createElement("div", null, (0, financeEngine_1.formatDateBR)(note.data)),
                                    note.dataSaida && (react_1.default.createElement("div", { className: "text-[11px] text-slate-500" },
                                        "Sa\u00EDda: ",
                                        (0, financeEngine_1.formatDateBR)(note.dataSaida)))),
                                react_1.default.createElement("td", { className: "py-4 px-4 text-right font-mono font-black text-slate-900 whitespace-nowrap" }, (0, financeEngine_1.formatBRL)(note.total)),
                                react_1.default.createElement("td", { className: "py-4 px-4 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${stMeta.badgeClass}` }, stMeta.label)),
                                react_1.default.createElement("td", { className: "py-4 px-5 text-right whitespace-nowrap" },
                                    react_1.default.createElement("div", { className: "inline-flex items-center gap-1.5" },
                                        react_1.default.createElement("button", { type: "button", onClick: () => {
                                                setPreviewNoteId(note.id);
                                                setViewMode('preview');
                                            }, className: "liquid-glass-pill min-h-[38px] px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.Eye, { className: "w-3.5 h-3.5 text-indigo-600" }),
                                            react_1.default.createElement("span", null, "Visualizar")),
                                        react_1.default.createElement("button", { type: "button", onClick: () => openEditForm(note), className: "liquid-glass-pill min-h-[38px] px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.Edit3, { className: "w-3.5 h-3.5 text-indigo-600" }),
                                            react_1.default.createElement("span", null, "Editar")),
                                        react_1.default.createElement("button", { type: "button", onClick: () => {
                                                onMarkNotePrinted(note.id);
                                                onTriggerPrint(note, emitter);
                                            }, className: "min-h-[38px] px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.Printer, { className: "w-3.5 h-3.5" }),
                                            react_1.default.createElement("span", null, "Imprimir A5")),
                                        react_1.default.createElement("button", { type: "button", onClick: () => onDeleteNote(note.id), className: "btn-compact w-9 h-9 rounded-full bg-white/60 hover:bg-rose-500/20 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir pedido", "aria-label": "Excluir pedido" },
                                            react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))));
                        })))))))),
        viewMode === 'form' && (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-5 min-w-0" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "flex items-center gap-3 min-w-0" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setViewMode('list'), className: "liquid-glass-pill min-h-[44px] min-w-[44px] rounded-full text-slate-800 inline-flex items-center justify-center cursor-pointer shrink-0", "aria-label": "Voltar para lista" },
                        react_1.default.createElement(lucide_react_1.ArrowLeft, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900 frosted-text-depth truncate" }, editingId
                            ? `Editar Pedido Nº ${formatPedidoNumber(numero)}`
                            : `Novo Pedido Nº ${formatPedidoNumber(numero)}`),
                        react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Importe os dados direto de uma OS ou preencha os campos do pedido A5 (148\u00D7210 mm)."))),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 w-full sm:w-auto" },
                    react_1.default.createElement("select", { value: selectedOrderId, onChange: (e) => handleImportFromOrder(e.target.value), "aria-label": "Importar de OS existente", className: `${inputClass} sm:w-72` },
                        react_1.default.createElement("option", { value: "" }, "Importar de OS existente..."),
                        orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                            o.id,
                            " \u2014 ",
                            o.companyName,
                            " \u2014 ",
                            (0, financeEngine_1.formatBRL)(o.amount))))))),
            formError && (react_1.default.createElement("div", { className: "p-3.5 rounded-2xl bg-rose-500/15 border border-rose-300/70 text-rose-800 text-xs font-bold flex items-center gap-2" },
                react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4 shrink-0" }),
                react_1.default.createElement("span", null, formError))),
            react_1.default.createElement("div", { className: "grid grid-cols-1 xl:grid-cols-12 gap-5 items-start min-w-0" },
                react_1.default.createElement("div", { className: "xl:col-span-6 space-y-5 min-w-0" },
                    react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-4" },
                        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "N\u00BA do Pedido (Auto)"),
                                react_1.default.createElement("input", { type: "text", readOnly: true, value: formatPedidoNumber(numero), className: `${inputClass} font-mono font-extrabold text-rose-700 bg-white/60` })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Empresa Cadastrada"),
                                react_1.default.createElement("select", { value: selectedCompanyId, onChange: (e) => handleCompanySelect(e.target.value), className: inputClass },
                                    react_1.default.createElement("option", { value: "manual" }, "Preenchimento manual"),
                                    companies.map((c) => (react_1.default.createElement("option", { key: c.id, value: c.id }, c.corporateName))))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Status"),
                                react_1.default.createElement("select", { value: status, onChange: (e) => setStatus(e.target.value), className: inputClass }, Object.entries(NOTE_STATUS_META).map(([k, v]) => (react_1.default.createElement("option", { key: k, value: k }, v.label)))))),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-3" },
                            react_1.default.createElement("div", { className: "sm:col-span-7" },
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Cliente *"),
                                react_1.default.createElement("input", { type: "text", required: true, value: clienteNome, onChange: (e) => setClienteNome(e.target.value), placeholder: "Nome ou raz\u00E3o social do cliente", className: inputClass })),
                            react_1.default.createElement("div", { className: "sm:col-span-5" },
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Fone"),
                                react_1.default.createElement("input", { type: "text", value: fone, onChange: (e) => setFone((0, financeEngine_1.formatPhoneMask)(e.target.value)), placeholder: "(00) 00000-0000", className: `${inputClass} font-mono` }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Endere\u00E7o"),
                            react_1.default.createElement("input", { type: "text", value: endereco, onChange: (e) => setEndereco(e.target.value), placeholder: "Rua, n\u00FAmero, bairro, cidade - UF", className: inputClass })),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "CNPJ/CPF"),
                                react_1.default.createElement("input", { type: "text", value: cnpjCpf, onChange: (e) => setCnpjCpf((0, financeEngine_1.formatCpfCnpjMask)(e.target.value)), placeholder: "00.000.000/0000-00 ou 000.000.000-00", className: `${inputClass} font-mono` })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Inscri\u00E7\u00E3o"),
                                react_1.default.createElement("input", { type: "text", value: inscricao, onChange: (e) => setInscricao(e.target.value), placeholder: "Inscri\u00E7\u00E3o Estadual ou ISENTO", className: inputClass }))),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Data entrada *"),
                                react_1.default.createElement("input", { type: "date", required: true, value: dataEntrada, onChange: (e) => setDataEntrada(e.target.value), className: `${inputClass} font-mono` })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "Data sa\u00EDda"),
                                react_1.default.createElement("input", { type: "date", value: dataSaida, onChange: (e) => setDataSaida(e.target.value), className: `${inputClass} font-mono` })))),
                    react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-5 sm:p-6 space-y-4" },
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" },
                                    "Servi\u00E7os do Pedido (",
                                    items.length,
                                    "/",
                                    exports.PEDIDO_A5_ROWS,
                                    ' ',
                                    "linhas)"),
                                react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "A folha A5 exibe 15 linhas fixas com soma autom\u00E1tica no canto inferior direito.")),
                            react_1.default.createElement("button", { type: "button", onClick: handleAddRow, className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs font-bold text-indigo-700 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Plus, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Adicionar linha"))),
                        orders.length > 0 && (react_1.default.createElement("div", null,
                            react_1.default.createElement("select", { value: "", onChange: (e) => {
                                    handleAppendOrderAsItem(e.target.value);
                                }, className: inputClass, "aria-label": "Adicionar outra OS como linha de servi\u00E7o" },
                                react_1.default.createElement("option", { value: "" }, "+ Incluir servi\u00E7o de outra OS na tabela..."),
                                orders.map((o) => (react_1.default.createElement("option", { key: o.id, value: o.id },
                                    "+ ",
                                    o.id,
                                    " \u2014 ",
                                    o.toolDescription,
                                    " (",
                                    (0, financeEngine_1.formatBRL)(o.amount),
                                    ")")))))),
                        items.length > exports.PEDIDO_A5_ROWS && (react_1.default.createElement("div", { className: "p-3 rounded-2xl bg-indigo-500/10 border border-indigo-300/60 text-xs font-bold text-indigo-800" },
                            "Este pedido possui ",
                            items.length,
                            " itens e ser\u00E1 paginado automaticamente em",
                            ' ',
                            Math.ceil(items.length / exports.PEDIDO_A5_ROWS),
                            " folhas A5 na impress\u00E3o.")),
                        react_1.default.createElement("div", { className: "space-y-2.5" }, items.map((row, idx) => (react_1.default.createElement("div", { key: row.id, className: "grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center p-3 rounded-2xl liquid-glass-subtle" },
                            react_1.default.createElement("div", { className: "sm:col-span-2" },
                                react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-600 block mb-0.5 sm:hidden" }, "Quant."),
                                react_1.default.createElement("input", { type: "number", step: "0.01", min: "0.01", required: true, value: row.quantidade, onChange: (e) => updateRow(idx, 'quantidade', e.target.value), placeholder: "Qtd.", title: "Quantidade", className: `${inputClass} font-mono text-right` })),
                            react_1.default.createElement("div", { className: "sm:col-span-5" },
                                react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-600 block mb-0.5 sm:hidden" }, "Descri\u00E7\u00E3o dos servi\u00E7os"),
                                react_1.default.createElement("input", { type: "text", required: true, value: row.descricao, onChange: (e) => updateRow(idx, 'descricao', e.target.value), placeholder: "Descri\u00E7\u00E3o do servi\u00E7o / faca", className: inputClass })),
                            react_1.default.createElement("div", { className: "sm:col-span-3" },
                                react_1.default.createElement("label", { className: "text-[11px] font-bold text-slate-600 block mb-0.5 sm:hidden" }, "Valor unit. (R$)"),
                                react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: row.precoUnitario, onChange: (e) => updateRow(idx, 'precoUnitario', e.target.value), placeholder: "Valor R$", title: "Valor unit\u00E1rio (R$)", className: `${inputClass} font-mono text-right` })),
                            react_1.default.createElement("div", { className: "sm:col-span-2 flex items-center justify-between sm:justify-end gap-2" },
                                react_1.default.createElement("span", { className: "font-mono text-xs font-extrabold text-slate-900 whitespace-nowrap", title: "Total da linha" }, (0, financeEngine_1.formatBRL)(row.total)),
                                react_1.default.createElement("button", { type: "button", onClick: () => handleRemoveRow(idx), disabled: items.length <= 1, className: "min-h-[40px] min-w-[40px] rounded-full bg-white/60 hover:bg-rose-500/20 disabled:opacity-40 text-slate-500 hover:text-rose-700 inline-flex items-center justify-center cursor-pointer shrink-0", title: "Remover linha", "aria-label": "Remover linha" },
                                    react_1.default.createElement(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }))))))),
                        react_1.default.createElement("div", { className: "pt-3 border-t border-white/60 flex flex-wrap items-center justify-between gap-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { className: "text-[11px] font-bold uppercase text-slate-500 block" }, "Total Autom\u00E1tico"),
                                react_1.default.createElement("span", { className: "text-base font-black text-slate-900 font-mono" }, (0, financeEngine_1.formatBRL)(tableTotal))),
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                react_1.default.createElement("button", { type: "button", onClick: () => onTriggerPrint(liveDraftNote, emitter), className: "liquid-glass-pill min-h-[44px] px-4 py-2.5 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                    react_1.default.createElement(lucide_react_1.Printer, { className: "w-4 h-4 text-indigo-600" }),
                                    react_1.default.createElement("span", null, "Imprimir Pr\u00E9via")),
                                react_1.default.createElement("button", { type: "submit", disabled: isSaving, className: "min-h-[44px] px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 text-white border border-white/40 shadow-lg inline-flex items-center gap-2 cursor-pointer" },
                                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                                    react_1.default.createElement("span", null, isSaving
                                        ? 'Salvando...'
                                        : editingId
                                            ? 'Salvar Pedido'
                                            : 'Emitir Pedido')))))),
                react_1.default.createElement("div", { className: "xl:col-span-6 space-y-3 min-w-0 xl:sticky xl:top-5" },
                    react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] px-4 py-3 flex items-center justify-between gap-2" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2 min-w-0" },
                            react_1.default.createElement(lucide_react_1.FileText, { className: "w-4 h-4 text-indigo-600 shrink-0" }),
                            react_1.default.createElement("span", { className: "text-xs font-extrabold text-slate-900 truncate" }, "Pr\u00E9via em Tempo Real \u2014 A5 Retrato (148\u00D7210 mm)")),
                        react_1.default.createElement("span", { className: "text-[11px] font-mono font-bold text-rose-700 shrink-0" },
                            "N\u00BA ",
                            formatPedidoNumber(numero))),
                    react_1.default.createElement("div", { className: "space-y-4" }, chunkNoteItems(liveDraftNote.items, exports.PEDIDO_A5_ROWS).map((chunk, idx, arr) => (react_1.default.createElement(exports.PedidoA5Sheet, { key: `live-a5-${idx}`, note: liveDraftNote, itemsChunk: chunk, pageIndex: idx, totalPages: arr.length, emitter: emitter })))))))),
        viewMode === 'preview' && previewNote && (react_1.default.createElement("div", { className: "space-y-4 min-w-0" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[24px] p-4 flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "flex items-center gap-3 min-w-0" },
                    react_1.default.createElement("button", { type: "button", onClick: () => {
                            setViewMode('list');
                        }, className: "liquid-glass-pill min-h-[44px] min-w-[44px] rounded-full text-slate-800 inline-flex items-center justify-center cursor-pointer shrink-0", "aria-label": "Voltar" },
                        react_1.default.createElement(lucide_react_1.ArrowLeft, { className: "w-4 h-4" })),
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 flex items-center gap-2 flex-wrap" },
                            react_1.default.createElement(lucide_react_1.FileText, { className: "w-4 h-4 text-indigo-600 shrink-0" }),
                            react_1.default.createElement("span", null,
                                "Pedido N\u00BA ",
                                formatPedidoNumber(previewNote.numero))),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" },
                            "Formato A5 Retrato (148 \u00D7 210 mm) \u2022 15 linhas \u2022 Total autom\u00E1tico (",
                            (0, financeEngine_1.formatBRL)(previewNote.total),
                            ")"))),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: () => openEditForm(previewNote), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Edit3, { className: "w-4 h-4 text-indigo-600" }),
                        react_1.default.createElement("span", null, "Editar")),
                    react_1.default.createElement("button", { type: "button", onClick: () => {
                            onMarkNotePrinted(previewNote.id);
                            onTriggerPrint(previewNote, emitter);
                        }, className: "min-h-[44px] px-5 py-2 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md inline-flex items-center gap-1.5 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Printer, { className: "w-4 h-4" }),
                        react_1.default.createElement("span", null, "Imprimir A5")))),
            react_1.default.createElement("div", { className: "space-y-5 pb-4" }, chunkNoteItems(previewNote.items, exports.PEDIDO_A5_ROWS).map((chunk, idx, arr) => (react_1.default.createElement(exports.PedidoA5Sheet, { key: `${previewNote.id}-a5-${idx}`, note: previewNote, itemsChunk: chunk, pageIndex: idx, totalPages: arr.length, emitter: emitter }))))))));
};
exports.NotesSection = NotesSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/TeamManagementSection"] = Object.assign(
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
exports.TeamManagementSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const TeamManagementSection = ({ session, employees, onAddEmployee, onToggleEmployeeRole, onDeleteEmployee, }) => {
    const [ownerName, setOwnerName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [jobTitle, setJobTitle] = (0, react_1.useState)('');
    const [role, setRole] = (0, react_1.useState)('operador');
    const [formError, setFormError] = (0, react_1.useState)(null);
    const [submitting, setSubmitting] = (0, react_1.useState)(false);
    const [busyId, setBusyId] = (0, react_1.useState)(null);
    const [confirmDeleteId, setConfirmDeleteId] = (0, react_1.useState)(null);
    const [copiedEmail, setCopiedEmail] = (0, react_1.useState)(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting)
            return;
        setFormError(null);
        setSubmitting(true);
        try {
            const res = await onAddEmployee({
                ownerName: ownerName.trim(),
                email: email.trim().toLowerCase(),
                password: password.trim(),
                role,
                jobTitle: jobTitle.trim() ||
                    (role === 'operador' ? 'Operador de Produção' : 'Administrador'),
            });
            if (res.error) {
                setFormError(res.error);
                return;
            }
            setOwnerName('');
            setEmail('');
            setPassword('');
            setJobTitle('');
            setRole('operador');
        }
        finally {
            setSubmitting(false);
        }
    };
    const handleCopyAccessInfo = async (emp) => {
        try {
            const baseUrl = `${window.location.origin}${window.location.pathname}`;
            const text = `FacasFlow — Acesso (${session.companyName})\nURL: ${baseUrl}\nE-mail: ${emp.email}`;
            await navigator.clipboard.writeText(text);
            setCopiedEmail(emp.email);
            setTimeout(() => setCopiedEmail(null), 2500);
        }
        catch {
            // ignore clipboard restriction
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 rounded-2xl text-base text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "space-y-6" },
        react_1.default.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6" },
            react_1.default.createElement("div", { className: "lg:col-span-5 liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex items-center gap-2.5 mb-5" },
                        react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-indigo-500/15 border border-indigo-300/60 flex items-center justify-center text-indigo-700" },
                            react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-4 h-4" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" }, "Cadastrar Novo Funcion\u00E1rio"),
                            react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Vinculado automaticamente \u00E0 sua empresa"))),
                    formError && (react_1.default.createElement("div", { className: "mb-4 p-3 rounded-2xl bg-rose-500/15 border border-rose-300/60 text-rose-800 text-xs font-semibold flex items-center gap-2" },
                        react_1.default.createElement(lucide_react_1.AlertCircle, { className: "w-4 h-4 text-rose-600 shrink-0" }),
                        react_1.default.createElement("span", null, formError))),
                    react_1.default.createElement("form", { onSubmit: handleSubmit, className: "space-y-3.5" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Nome do Funcion\u00E1rio *"),
                            react_1.default.createElement("input", { type: "text", required: true, value: ownerName, onChange: (e) => setOwnerName(e.target.value), placeholder: "Ex: Carlos Montador", className: inputClass })),
                        react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "E-mail de Login *"),
                                react_1.default.createElement("div", { className: "relative" },
                                    react_1.default.createElement(lucide_react_1.Mail, { className: "w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" }),
                                    react_1.default.createElement("input", { type: "email", inputMode: "email", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "carlos@facaria.com", className: "liquid-glass-pill w-full pl-9 pr-3 py-2.5 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" }))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Senha de Acesso *"),
                                react_1.default.createElement("div", { className: "relative" },
                                    react_1.default.createElement(lucide_react_1.Lock, { className: "w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" }),
                                    react_1.default.createElement("input", { type: "text", autoCapitalize: "none", autoCorrect: "off", spellCheck: false, required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Ex: 123456", className: "liquid-glass-pill w-full pl-9 pr-3 py-2.5 rounded-2xl text-xs text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition" })))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1" }, "Cargo / Fun\u00E7\u00E3o na F\u00E1brica"),
                            react_1.default.createElement("input", { type: "text", value: jobTitle, onChange: (e) => setJobTitle(e.target.value), placeholder: "Ex: Serrador, Dobrador, Expedi\u00E7\u00E3o...", className: inputClass })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "block text-xs font-bold text-slate-700 mb-1.5" }, "N\u00EDvel de Permiss\u00E3o (Perfil de Acesso) *"),
                            react_1.default.createElement("div", { className: "grid grid-cols-1 gap-2" },
                                react_1.default.createElement("button", { type: "button", onClick: () => setRole('operador'), className: `p-3 rounded-2xl border text-left transition cursor-pointer flex items-start gap-3 ${role === 'operador'
                                        ? 'bg-indigo-500/15 border-indigo-400/70 ring-1 ring-indigo-400/50'
                                        : 'liquid-glass-subtle hover:bg-white/40'}` },
                                    react_1.default.createElement(lucide_react_1.Wrench, { className: `w-4 h-4 mt-0.5 shrink-0 ${role === 'operador' ? 'text-indigo-700' : 'text-slate-600'}` }),
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement("div", { className: "text-xs font-extrabold text-slate-900" }, "Operador / Produ\u00E7\u00E3o"),
                                        react_1.default.createElement("div", { className: "text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed" },
                                            "Libera acesso apenas para",
                                            ' ',
                                            react_1.default.createElement("span", { className: "text-indigo-700 font-bold" }, "Esteira, Entregas, Retornos, Estoque e Notas"),
                                            ". Oculta Finan\u00E7as, Empresas e Vis\u00E3o Geral."))),
                                react_1.default.createElement("button", { type: "button", onClick: () => setRole('admin'), className: `p-3 rounded-2xl border text-left transition cursor-pointer flex items-start gap-3 ${role === 'admin'
                                        ? 'bg-indigo-500/15 border-indigo-400/70 ring-1 ring-indigo-400/50'
                                        : 'liquid-glass-subtle hover:bg-white/40'}` },
                                    react_1.default.createElement(lucide_react_1.Shield, { className: `w-4 h-4 mt-0.5 shrink-0 ${role === 'admin' ? 'text-indigo-700' : 'text-slate-600'}` }),
                                    react_1.default.createElement("div", null,
                                        react_1.default.createElement("div", { className: "text-xs font-extrabold text-slate-900" }, "Administrador"),
                                        react_1.default.createElement("div", { className: "text-[11px] font-medium text-slate-700 mt-0.5 leading-relaxed" }, "Acesso irrestrito a todas as se\u00E7\u00F5es, financeiro, cadastro de empresas e gest\u00E3o de equipe."))))),
                        react_1.default.createElement("button", { type: "submit", disabled: submitting, className: "w-full min-h-[44px] py-3 px-4 rounded-full font-bold text-xs bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white border border-white/40 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer mt-2 active:scale-95 disabled:opacity-60" },
                            submitting ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : (react_1.default.createElement(lucide_react_1.UserPlus, { className: "w-4 h-4" })),
                            react_1.default.createElement("span", null, submitting
                                ? 'Cadastrando no Supabase...'
                                : 'Cadastrar Funcionário na Empresa'))))),
            react_1.default.createElement("div", { className: "lg:col-span-7 liquid-glass rounded-[28px] p-6 flex flex-col justify-between" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-5" },
                        react_1.default.createElement("div", { className: "flex items-center gap-2.5" },
                            react_1.default.createElement("div", { className: "w-9 h-9 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-center text-indigo-700" },
                                react_1.default.createElement(lucide_react_1.Users, { className: "w-4 h-4" })),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900" },
                                    "Usu\u00E1rios & Funcion\u00E1rios da Empresa (",
                                    employees.length,
                                    ")"),
                                react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Gerencie cargos, teste a vis\u00E3o de operador ou envie o link de acesso para o celular do funcion\u00E1rio")))),
                    react_1.default.createElement("div", { className: "space-y-3" }, employees.map((emp) => {
                        const isSelf = emp.email.trim().toLowerCase() ===
                            session.email.trim().toLowerCase();
                        const isOperador = emp.role === 'operador';
                        return (react_1.default.createElement("div", { key: emp.email, className: "p-4 rounded-2xl liquid-glass-subtle transition flex flex-col sm:flex-row sm:items-center justify-between gap-4" },
                            react_1.default.createElement("div", { className: "space-y-1 min-w-0" },
                                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                                    react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-900" }, emp.ownerName),
                                    isSelf && (react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-full bg-white/70 border border-white/80 text-slate-700 text-[10px] font-bold" }, "Voc\u00EA")),
                                    react_1.default.createElement("span", { className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${isOperador
                                            ? 'bg-amber-500/15 text-amber-800 border-amber-300/60'
                                            : 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60'}` }, isOperador
                                        ? 'Operador • Fábrica'
                                        : 'Administrador Total')),
                                react_1.default.createElement("div", { className: "text-xs font-medium text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1" },
                                    react_1.default.createElement("span", null,
                                        "Cargo:",
                                        ' ',
                                        react_1.default.createElement("strong", { className: "text-slate-900" }, emp.jobTitle ||
                                            (isOperador ? 'Operador de Produção' : 'Administrador'))),
                                    react_1.default.createElement("span", null, "\u2022"),
                                    react_1.default.createElement("span", null,
                                        "E-mail:",
                                        ' ',
                                        react_1.default.createElement("code", { className: "text-slate-900 font-mono font-bold break-all" }, emp.email)))),
                            react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 shrink-0" },
                                react_1.default.createElement("button", { type: "button", onClick: () => handleCopyAccessInfo(emp), className: "liquid-glass-pill min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-slate-800 text-xs font-bold transition cursor-pointer", title: "Copiar endere\u00E7o e e-mail de acesso" }, copiedEmail === emp.email ? (react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 text-emerald-600" }),
                                    react_1.default.createElement("span", { className: "text-emerald-700" }, "Copiado!"))) : (react_1.default.createElement(react_1.default.Fragment, null,
                                    react_1.default.createElement(lucide_react_1.Copy, { className: "w-4 h-4 text-slate-600" }),
                                    react_1.default.createElement("span", null, "Copiar Acesso")))),
                                !isSelf && emp.id && (react_1.default.createElement("button", { type: "button", disabled: busyId === emp.id, onClick: async () => {
                                        const memberId = emp.id;
                                        if (!memberId)
                                            return;
                                        setBusyId(memberId);
                                        try {
                                            await onToggleEmployeeRole(memberId, isOperador ? 'admin' : 'operador');
                                        }
                                        finally {
                                            setBusyId(null);
                                        }
                                    }, className: "liquid-glass-pill min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-slate-700 text-xs font-bold transition cursor-pointer", title: "Alternar entre Operador e Administrador" },
                                    react_1.default.createElement(lucide_react_1.UserCheck, { className: "w-4 h-4 text-indigo-600" }),
                                    react_1.default.createElement("span", null, isOperador ? 'Tornar Admin' : 'Tornar Operador'))),
                                !isSelf &&
                                    emp.id &&
                                    (confirmDeleteId === emp.id ? (react_1.default.createElement("div", { className: "inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-300/70 rounded-full px-3 py-1" },
                                        react_1.default.createElement("button", { type: "button", disabled: busyId === emp.id, onClick: async () => {
                                                const memberId = emp.id;
                                                if (!memberId)
                                                    return;
                                                setBusyId(memberId);
                                                try {
                                                    await onDeleteEmployee(memberId);
                                                    setConfirmDeleteId(null);
                                                }
                                                finally {
                                                    setBusyId(null);
                                                }
                                            }, className: "min-h-[36px] text-xs font-bold text-rose-800 hover:text-rose-950 px-2 cursor-pointer" }, "Confirmar"),
                                        react_1.default.createElement("button", { type: "button", onClick: () => setConfirmDeleteId(null), "aria-label": "Cancelar exclus\u00E3o", className: "min-h-[36px] min-w-[36px] text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer" }, "\u2715"))) : (react_1.default.createElement("button", { type: "button", onClick: () => setConfirmDeleteId(emp.id || null), "aria-label": "Excluir funcion\u00E1rio", className: "btn-compact w-9 h-9 rounded-full bg-white/60 hover:bg-rose-500/20 text-slate-500 hover:text-rose-700 border border-white/75 flex items-center justify-center transition cursor-pointer shrink-0", title: "Excluir funcion\u00E1rio" },
                                        react_1.default.createElement(lucide_react_1.Trash2, { className: "w-4 h-4" })))))));
                    }))),
                react_1.default.createElement("div", { className: "mt-6 pt-4 border-t border-white/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium text-slate-600" },
                    react_1.default.createElement("span", { className: "flex items-center gap-1.5" },
                        react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-3.5 h-3.5 text-indigo-600" }),
                        "Operadores acessam apenas Esteira, Entregas, Retornos, Estoque e Notas."),
                    react_1.default.createElement("span", null, "As permiss\u00F5es s\u00E3o aplicadas em tempo real no painel e no banco de dados."))))));
};
exports.TeamManagementSection = TeamManagementSection;

  },
  { dir: "./components" }
);

__moduleFactories["./components/SettingsBackupsSection"] = Object.assign(
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
exports.SettingsBackupsSection = void 0;
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const financeEngine_1 = require("../utils/financeEngine");
const supabaseDataService_1 = require("../services/supabaseDataService");
const BACKUP_TYPE_META = {
    automatico: {
        label: 'Automático',
        badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60',
    },
    manual: {
        label: 'Manual',
        badgeClass: 'bg-emerald-500/15 text-emerald-800 border-emerald-300/60',
    },
    pre_restauracao: {
        label: 'Pré-Restauração',
        badgeClass: 'bg-amber-500/15 text-amber-900 border-amber-300/60',
    },
};
const TABLE_LABELS = {
    clientes_empresas: 'Clientes / Empresas',
    ordens_servico: 'Ordens de Serviço',
    entregas: 'Entregas',
    retornos: 'Retornos / Garantia',
    estoque_itens: 'Itens de Estoque',
    notas: 'Notas / Canhotos',
    nota_itens: 'Itens de Notas',
    despesas: 'Despesas',
    prestadores_servico: 'Prestadores de Serviço',
    funcionarios_folha: 'Colaboradores CLT',
    investimentos: 'Investimentos',
};
function formatBytes(bytes) {
    const safe = Number(bytes) || 0;
    if (safe < 1024)
        return `${safe} B`;
    if (safe < 1024 * 1024)
        return `${(safe / 1024).toFixed(1)} KB`;
    return `${(safe / (1024 * 1024)).toFixed(2)} MB`;
}
const SettingsBackupsSection = ({ empresaId, companyName, settings, backups, logs, loading, onRefresh, onUpdateSettings, onDismissAlert, onRestored, }) => {
    const [retDaily, setRetDaily] = (0, react_1.useState)(settings.retencao_diaria || 30);
    const [retMonthly, setRetMonthly] = (0, react_1.useState)(settings.retencao_mensal || 12);
    const [autoEnabled, setAutoEnabled] = (0, react_1.useState)(settings.backup_automatico ?? true);
    const [savingSettings, setSavingSettings] = (0, react_1.useState)(false);
    const [creatingManual, setCreatingManual] = (0, react_1.useState)(false);
    const [actionMsg, setActionMsg] = (0, react_1.useState)(null);
    const [downloadingId, setDownloadingId] = (0, react_1.useState)(null);
    // Preview & Restore state
    const [previewOpen, setPreviewOpen] = (0, react_1.useState)(false);
    const [previewLoading, setPreviewLoading] = (0, react_1.useState)(false);
    const [previewData, setPreviewData] = (0, react_1.useState)(null);
    const [previewError, setPreviewError] = (0, react_1.useState)(null);
    const [confirmRestoreText, setConfirmRestoreText] = (0, react_1.useState)('');
    const [restoring, setRestoring] = (0, react_1.useState)(false);
    // Import JSON state
    const [importOpen, setImportOpen] = (0, react_1.useState)(false);
    const [importFileName, setImportFileName] = (0, react_1.useState)('');
    const [importSnapshot, setImportSnapshot] = (0, react_1.useState)(null);
    const [importError, setImportError] = (0, react_1.useState)(null);
    const [confirmImportText, setConfirmImportText] = (0, react_1.useState)('');
    const [importing, setImporting] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setRetDaily(settings.retencao_diaria || 30);
        setRetMonthly(settings.retencao_mensal || 12);
        setAutoEnabled(settings.backup_automatico ?? true);
    }, [settings]);
    const activeAlerts = logs.filter((l) => l.status === 'erro' && !l.alerta_dispensado);
    const handleSaveSettings = async (e) => {
        e.preventDefault();
        setSavingSettings(true);
        setActionMsg(null);
        try {
            await onUpdateSettings({
                retencao_diaria: Math.max(1, Math.min(365, Number(retDaily) || 30)),
                retencao_mensal: Math.max(1, Math.min(120, Number(retMonthly) || 12)),
                backup_automatico: autoEnabled,
            });
            setActionMsg({ type: 'ok', text: 'Política de retenção atualizada com sucesso.' });
        }
        catch (err) {
            setActionMsg({
                type: 'err',
                text: err?.message || 'Erro ao salvar configurações.',
            });
        }
        finally {
            setSavingSettings(false);
        }
    };
    const handleCreateManualBackup = async () => {
        setCreatingManual(true);
        setActionMsg(null);
        try {
            await (0, supabaseDataService_1.invokeBackupEngine)({ action: 'snapshot_company', tipo: 'manual' });
            await onRefresh();
            setActionMsg({
                type: 'ok',
                text: 'Snapshot manual gerado e gravado em bucket privado com SHA-256.',
            });
        }
        catch (err) {
            await onRefresh().catch(() => { });
            setActionMsg({
                type: 'err',
                text: err?.message || 'Falha ao gerar backup manual.',
            });
        }
        finally {
            setCreatingManual(false);
        }
    };
    const handleSignedDownload = async (backupId) => {
        setDownloadingId(backupId);
        setActionMsg(null);
        try {
            const res = await (0, supabaseDataService_1.invokeBackupEngine)({ action: 'signed_url', backupId });
            if (res?.signedUrl) {
                window.open(res.signedUrl, '_blank', 'noopener,noreferrer');
                setActionMsg({
                    type: 'ok',
                    text: 'URL assinada gerada (válida por 5 minutos).',
                });
            }
        }
        catch (err) {
            setActionMsg({
                type: 'err',
                text: err?.message || 'Não foi possível gerar a URL assinada.',
            });
        }
        finally {
            setDownloadingId(null);
        }
    };
    const handleExportJson = async (backupId) => {
        setDownloadingId(backupId);
        setActionMsg(null);
        try {
            const res = await (0, supabaseDataService_1.invokeBackupEngine)({ action: 'download_json', backupId });
            if (res?.snapshot) {
                const blob = new Blob([JSON.stringify(res.snapshot, null, 2)], {
                    type: 'application/json;charset=utf-8;',
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `facasflow_backup_${empresaId.slice(0, 8)}_${backupId.slice(0, 8)}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        }
        catch (err) {
            setActionMsg({
                type: 'err',
                text: err?.message || 'Erro ao exportar JSON verificado.',
            });
        }
        finally {
            setDownloadingId(null);
        }
    };
    const handleOpenPreview = async (backupId) => {
        setPreviewOpen(true);
        setPreviewLoading(true);
        setPreviewData(null);
        setPreviewError(null);
        setConfirmRestoreText('');
        try {
            const res = await (0, supabaseDataService_1.invokeBackupEngine)({ action: 'preview_backup', backupId });
            setPreviewData(res);
        }
        catch (err) {
            setPreviewError(err?.message || 'Falha ao carregar pré-visualização do backup.');
        }
        finally {
            setPreviewLoading(false);
        }
    };
    const handleConfirmRestore = async () => {
        if (!previewData || !previewData.integrityOk)
            return;
        setRestoring(true);
        setPreviewError(null);
        try {
            await (0, supabaseDataService_1.invokeBackupEngine)({
                action: 'restore_backup',
                backupId: previewData.backupId,
                confirmText: confirmRestoreText.trim().toUpperCase(),
            });
            setPreviewOpen(false);
            await onRestored();
            setActionMsg({
                type: 'ok',
                text: 'Restauração concluída em transação! Um backup pré-restauração (90 dias) foi salvo automaticamente.',
            });
        }
        catch (err) {
            setPreviewError(err?.message || 'Erro ao restaurar backup.');
        }
        finally {
            setRestoring(false);
        }
    };
    const handleSelectImportFile = (e) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const parsed = JSON.parse(String(reader.result || '{}'));
                if (!parsed || typeof parsed !== 'object' || (!parsed.tables && !parsed.orders && !parsed.ordens_servico)) {
                    setImportError('Arquivo JSON não possui estrutura válida de backup FacasFlow.');
                    setImportSnapshot(null);
                }
                else {
                    setImportSnapshot(parsed);
                    setImportError(null);
                }
                setImportFileName(file.name);
                setConfirmImportText('');
                setImportOpen(true);
            }
            catch {
                setImportError('Não foi possível ler o JSON selecionado.');
                setImportFileName(file.name);
                setImportSnapshot(null);
                setImportOpen(true);
            }
        };
        reader.onerror = () => {
            setImportError('Erro ao ler o arquivo JSON do dispositivo.');
            setImportFileName(file.name);
            setImportSnapshot(null);
            setImportOpen(true);
        };
        reader.readAsText(file, 'utf-8');
    };
    const handleConfirmImport = async () => {
        if (!importSnapshot)
            return;
        setImporting(true);
        setImportError(null);
        try {
            await (0, supabaseDataService_1.invokeBackupEngine)({
                action: 'import_backup',
                snapshot: importSnapshot,
                confirmText: confirmImportText.trim().toUpperCase(),
            });
            setImportOpen(false);
            await onRestored();
            setActionMsg({
                type: 'ok',
                text: 'Importação JSON aplicada com sucesso após snapshot pré-restauração.',
            });
        }
        catch (err) {
            setImportError(err?.message || 'Erro ao importar JSON.');
        }
        finally {
            setImporting(false);
        }
    };
    return (react_1.default.createElement("div", { className: "space-y-5 min-w-0" },
        activeAlerts.length > 0 && (react_1.default.createElement("div", { className: "rounded-[24px] bg-rose-500/15 border border-rose-500/70 p-4 sm:p-5 space-y-3 min-w-0" },
            react_1.default.createElement("div", { className: "flex items-center gap-2 text-rose-900" },
                react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-5 h-5 text-rose-700 shrink-0" }),
                react_1.default.createElement("h3", { className: "text-sm font-extrabold uppercase tracking-wider" },
                    "Alerta de Falha de Backup (",
                    activeAlerts.length,
                    ")")),
            react_1.default.createElement("div", { className: "space-y-2" }, activeAlerts.map((al) => (react_1.default.createElement("div", { key: al.id, className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/70 rounded-2xl p-3 border border-rose-300/70 text-xs" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("span", { className: "font-bold text-rose-900 block break-words" }, al.mensagem),
                    react_1.default.createElement("span", { className: "text-[11px] text-slate-600" },
                        (0, financeEngine_1.formatDateTimeGoiasBR)(al.created_at),
                        " \u2022 ",
                        BACKUP_TYPE_META[al.tipo]?.label || al.tipo)),
                react_1.default.createElement("button", { type: "button", onClick: () => onDismissAlert(al.id), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs font-bold text-slate-800 shrink-0 cursor-pointer" }, "Dispensar alerta"))))))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-4 sm:p-6 space-y-5 min-w-0" },
            react_1.default.createElement("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-w-0" },
                react_1.default.createElement("div", { className: "min-w-0" },
                    react_1.default.createElement("div", { className: "flex items-center gap-2 text-indigo-700 mb-1" },
                        react_1.default.createElement(lucide_react_1.DatabaseBackup, { className: "w-4 h-4 shrink-0" }),
                        react_1.default.createElement("span", { className: "text-[11px] font-extrabold uppercase tracking-wider" }, "Configura\u00E7\u00F5es & Backups por Empresa")),
                    react_1.default.createElement("h2", { className: "text-lg sm:text-xl font-extrabold text-slate-900 break-words" }, companyName),
                    react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 mt-0.5" },
                        "Backups isolados em bucket privado (",
                        react_1.default.createElement("code", { className: "font-mono" }, "facasflow-backups"),
                        ") com integridade SHA-256 e reten\u00E7\u00E3o configur\u00E1vel.")),
                react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: onRefresh, disabled: loading, className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 inline-flex items-center gap-2 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.RefreshCw, { className: `w-4 h-4 ${loading ? 'animate-spin' : ''}` }),
                        react_1.default.createElement("span", null, "Atualizar")),
                    react_1.default.createElement("label", { className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 inline-flex items-center gap-2 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Upload, { className: "w-4 h-4 text-indigo-600" }),
                        react_1.default.createElement("span", null, "Importar JSON"),
                        react_1.default.createElement("input", { type: "file", accept: ".json,application/json", onChange: handleSelectImportFile, className: "sr-only" })),
                    react_1.default.createElement("button", { type: "button", onClick: handleCreateManualBackup, disabled: creatingManual, className: "min-h-[44px] px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2 cursor-pointer" },
                        creatingManual ? (react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : (react_1.default.createElement(lucide_react_1.HardDriveDownload, { className: "w-4 h-4" })),
                        react_1.default.createElement("span", null, "Gerar Backup Manual")))),
            actionMsg && (react_1.default.createElement("div", { className: `rounded-2xl p-3.5 text-xs font-bold border flex items-start gap-2 ${actionMsg.type === 'ok'
                    ? 'bg-emerald-500/15 border-emerald-400/60 text-emerald-900'
                    : 'bg-rose-500/15 border-rose-400/60 text-rose-900'}` },
                actionMsg.type === 'ok' ? (react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-4 h-4 text-emerald-700 shrink-0 mt-0.5" })) : (react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-4 h-4 text-rose-700 shrink-0 mt-0.5" })),
                react_1.default.createElement("span", null, actionMsg.text))),
            react_1.default.createElement("form", { onSubmit: handleSaveSettings, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/60 items-end" },
                react_1.default.createElement("div", { className: "flex items-center justify-between sm:justify-start gap-3 min-h-[44px] px-3.5 py-2 rounded-2xl bg-white/50 border border-white/75" },
                    react_1.default.createElement("label", { htmlFor: "chk-auto-bkp", className: "text-xs font-bold text-slate-800 cursor-pointer" }, "Backup autom\u00E1tico ativo"),
                    react_1.default.createElement("input", { id: "chk-auto-bkp", type: "checkbox", checked: autoEnabled, onChange: (e) => setAutoEnabled(e.target.checked), className: "w-5 h-5 accent-indigo-600 cursor-pointer" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1" }, "Reten\u00E7\u00E3o Di\u00E1ria (dias)"),
                    react_1.default.createElement("input", { type: "number", min: 1, max: 365, value: retDaily, onChange: (e) => setRetDaily(Number(e.target.value)), className: "liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base text-slate-900" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-800 block mb-1" }, "Reten\u00E7\u00E3o Mensal (meses)"),
                    react_1.default.createElement("input", { type: "number", min: 1, max: 120, value: retMonthly, onChange: (e) => setRetMonthly(Number(e.target.value)), className: "liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base text-slate-900" })),
                react_1.default.createElement("button", { type: "submit", disabled: savingSettings, className: "liquid-glass-pill min-h-[44px] px-5 py-2 rounded-full text-sm font-bold text-indigo-800 inline-flex items-center justify-center gap-2 cursor-pointer" },
                    savingSettings && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                    react_1.default.createElement("span", null, "Salvar Pol\u00EDtica"))),
            react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600" }, "Backups pr\u00E9-restaura\u00E7\u00E3o s\u00E3o mantidos por 90 dias. A rotina autom\u00E1tica di\u00E1ria nunca apaga o backup mais recente da empresa.")),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] overflow-hidden min-w-0" },
            react_1.default.createElement("div", { className: "p-4 sm:p-5 border-b border-white/60 flex items-center justify-between gap-2" },
                react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 uppercase tracking-wider" },
                    "Backups Dispon\u00EDveis (",
                    backups.length,
                    ")"),
                react_1.default.createElement("span", { className: "text-xs font-semibold text-slate-600" }, "Fuso: Goi\u00E1s (UTC-3)")),
            backups.length === 0 ? (react_1.default.createElement("div", { className: "p-8 text-center text-sm font-medium text-slate-600" }, "Nenhum backup registrado ainda. Clique em \"Gerar Backup Manual\" para criar o primeiro snapshot.")) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "md:hidden divide-y divide-white/55" }, backups.map((b) => {
                    const tMeta = BACKUP_TYPE_META[b.tipo] || BACKUP_TYPE_META.manual;
                    const totalRegs = Object.values(b.resumo_tabelas || {}).reduce((acc, n) => acc + (Number(n) || 0), 0);
                    return (react_1.default.createElement("div", { key: b.id, className: "p-4 space-y-2.5 text-xs min-w-0" },
                        react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                            react_1.default.createElement("span", { className: `px-2.5 py-1 rounded-full text-[11px] font-bold border ${tMeta.badgeClass}` }, tMeta.label),
                            react_1.default.createElement("span", { className: "font-mono font-bold text-slate-700" }, formatBytes(b.tamanho_bytes))),
                        react_1.default.createElement("div", { className: "grid grid-cols-2 gap-2" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Data"),
                                react_1.default.createElement("span", { className: "font-bold text-slate-900" }, (0, financeEngine_1.formatDateTimeGoiasBR)(b.created_at))),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "Registros"),
                                react_1.default.createElement("span", { className: "font-bold text-slate-900" },
                                    totalRegs,
                                    " itens")),
                            react_1.default.createElement("div", { className: "col-span-2" },
                                react_1.default.createElement("span", { className: "text-slate-500 font-semibold block" }, "SHA-256"),
                                react_1.default.createElement("span", { className: "font-mono text-[11px] text-emerald-800 font-bold break-all" },
                                    b.sha256.slice(0, 24),
                                    "..."))),
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2 pt-1" },
                            react_1.default.createElement("button", { type: "button", onClick: () => handleOpenPreview(b.id), className: "min-h-[44px] px-4 py-2 rounded-full bg-indigo-600 text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.Eye, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Visualizar / Restaurar")),
                            react_1.default.createElement("button", { type: "button", onClick: () => handleExportJson(b.id), disabled: downloadingId === b.id, className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.FileJson, { className: "w-4 h-4 text-indigo-600" }),
                                react_1.default.createElement("span", null, "JSON")),
                            b.storage_path && (react_1.default.createElement("button", { type: "button", onClick: () => handleSignedDownload(b.id), disabled: downloadingId === b.id, className: "liquid-glass-pill min-h-[44px] px-3.5 py-2 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.ExternalLink, { className: "w-4 h-4 text-emerald-600" }),
                                react_1.default.createElement("span", null, "URL 5m"))))));
                })),
                react_1.default.createElement("div", { className: "hidden md:block overflow-x-auto" },
                    react_1.default.createElement("table", { className: "w-full text-left border-collapse" },
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "text-[11px] uppercase tracking-wider text-slate-600 border-b border-white/60 bg-white/30" },
                                react_1.default.createElement("th", { className: "py-3 px-4 font-extrabold" }, "Data (Goi\u00E1s)"),
                                react_1.default.createElement("th", { className: "py-3 px-4 font-extrabold" }, "Tipo"),
                                react_1.default.createElement("th", { className: "py-3 px-4 font-extrabold" }, "Tamanho"),
                                react_1.default.createElement("th", { className: "py-3 px-4 font-extrabold" }, "Integridade SHA-256"),
                                react_1.default.createElement("th", { className: "py-3 px-4 text-right font-extrabold" }, "A\u00E7\u00F5es"))),
                        react_1.default.createElement("tbody", { className: "divide-y divide-white/45 text-xs" }, backups.map((b) => {
                            const tMeta = BACKUP_TYPE_META[b.tipo] || BACKUP_TYPE_META.manual;
                            const totalRegs = Object.values(b.resumo_tabelas || {}).reduce((acc, n) => acc + (Number(n) || 0), 0);
                            return (react_1.default.createElement("tr", { key: b.id, className: "hover:bg-white/35 transition-colors" },
                                react_1.default.createElement("td", { className: "py-3 px-3 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: "font-bold text-slate-900 block" }, (0, financeEngine_1.formatDateTimeGoiasBR)(b.created_at)),
                                    react_1.default.createElement("span", { className: "text-[10px] text-slate-500" },
                                        totalRegs,
                                        " registros \u2022 v",
                                        b.schema_version)),
                                react_1.default.createElement("td", { className: "py-3 px-3 whitespace-nowrap" },
                                    react_1.default.createElement("span", { className: `px-2 py-0.5 rounded-full text-[11px] font-bold border ${tMeta.badgeClass}` }, tMeta.label)),
                                react_1.default.createElement("td", { className: "py-3 px-3 whitespace-nowrap font-mono font-bold text-slate-800" }, formatBytes(b.tamanho_bytes)),
                                react_1.default.createElement("td", { className: "py-3 px-3 whitespace-nowrap" },
                                    react_1.default.createElement("span", { title: b.sha256, className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 border border-emerald-300/60 font-mono text-[11px] font-bold" },
                                        react_1.default.createElement(lucide_react_1.ShieldCheck, { className: "w-3.5 h-3.5 shrink-0" }),
                                        b.sha256.slice(0, 10),
                                        "...")),
                                react_1.default.createElement("td", { className: "py-3 px-3 text-right" },
                                    react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-end gap-1.5" },
                                        b.storage_path && (react_1.default.createElement("button", { type: "button", onClick: () => handleSignedDownload(b.id), disabled: downloadingId === b.id, className: "liquid-glass-pill min-h-[44px] px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.Download, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
                                            react_1.default.createElement("span", null, "GZ"))),
                                        react_1.default.createElement("button", { type: "button", onClick: () => handleExportJson(b.id), disabled: downloadingId === b.id, className: "liquid-glass-pill min-h-[44px] px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-800 inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.FileJson, { className: "w-3.5 h-3.5 text-indigo-600 shrink-0" }),
                                            react_1.default.createElement("span", null, "JSON")),
                                        react_1.default.createElement("button", { type: "button", onClick: () => handleOpenPreview(b.id), className: "min-h-[44px] px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer" },
                                            react_1.default.createElement(lucide_react_1.Eye, { className: "w-3.5 h-3.5 shrink-0" }),
                                            react_1.default.createElement("span", null, "Visualizar / Restaurar"))))));
                        }))))))),
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-4 sm:p-5 space-y-3 min-w-0" },
            react_1.default.createElement("h3", { className: "text-sm font-extrabold text-slate-900 uppercase tracking-wider" },
                "Hist\u00F3rico de Execu\u00E7\u00F5es (",
                logs.length,
                ")"),
            logs.length === 0 ? (react_1.default.createElement("p", { className: "text-xs text-slate-600" }, "Sem registros recentes.")) : (react_1.default.createElement("div", { className: "space-y-2 max-h-64 overflow-y-auto pr-1" }, logs.slice(0, 20).map((log) => (react_1.default.createElement("div", { key: log.id, className: "flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white/50 border border-white/75 text-xs" },
                react_1.default.createElement("div", { className: "flex items-start sm:items-center gap-2 min-w-0" },
                    react_1.default.createElement("span", { className: `w-2 h-2 rounded-full shrink-0 mt-1 sm:mt-0 ${log.status === 'sucesso' ? 'bg-emerald-600' : 'bg-rose-600'}` }),
                    react_1.default.createElement("span", { className: "font-semibold text-slate-900 break-words" }, log.mensagem)),
                react_1.default.createElement("span", { className: "text-[11px] font-mono text-slate-600 shrink-0" }, (0, financeEngine_1.formatDateTimeGoiasBR)(log.created_at)))))))),
        previewOpen && (react_1.default.createElement("div", { className: "fixed inset-0 z-[60] bg-slate-900/45 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4" },
            react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": "Visualizar e Restaurar Backup", className: "liquid-glass w-full md:max-w-2xl max-h-[92dvh] rounded-t-[28px] md:rounded-[28px] flex flex-col overflow-hidden shadow-2xl border border-white/80" },
                react_1.default.createElement("div", { className: "px-5 py-4 border-b border-white/60 flex items-center justify-between gap-2 shrink-0" },
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("h4", { className: "text-base sm:text-lg font-extrabold text-slate-900" }, "Visualizar Antes de Restaurar"),
                        react_1.default.createElement("p", { className: "text-xs text-slate-600" }, "Compara\u00E7\u00E3o entre registros no backup e o estado atual do banco.")),
                    react_1.default.createElement("button", { type: "button", onClick: () => setPreviewOpen(false), "aria-label": "Fechar pr\u00E9-visualiza\u00E7\u00E3o", className: "min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill inline-flex items-center justify-center cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
                react_1.default.createElement("div", { className: "p-5 overflow-y-auto space-y-4 flex-1" }, previewLoading ? (react_1.default.createElement("div", { className: "py-10 flex flex-col items-center gap-2 text-xs font-bold text-slate-700" },
                    react_1.default.createElement(lucide_react_1.Loader2, { className: "w-6 h-6 animate-spin text-indigo-600" }),
                    react_1.default.createElement("span", null, "Verificando integridade SHA-256 e comparando tabelas..."))) : previewError ? (react_1.default.createElement("div", { className: "rounded-2xl bg-rose-500/15 border border-rose-500/60 p-4 text-xs font-bold text-rose-900" }, previewError)) : previewData ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `rounded-2xl p-4 border text-xs font-bold flex items-start gap-2.5 ${previewData.integrityOk
                            ? 'bg-emerald-500/15 border-emerald-400/60 text-emerald-900'
                            : 'bg-rose-500/20 border-rose-500/70 text-rose-900'}` },
                        previewData.integrityOk ? (react_1.default.createElement(lucide_react_1.ShieldCheck, { className: "w-5 h-5 text-emerald-700 shrink-0" })) : (react_1.default.createElement(lucide_react_1.ShieldAlert, { className: "w-5 h-5 text-rose-700 shrink-0" })),
                        react_1.default.createElement("div", { className: "min-w-0 space-y-1" },
                            react_1.default.createElement("span", { className: "block" }, previewData.integrityOk
                                ? `Integridade SHA-256 verificada (Schema v${previewData.schemaVersion}).`
                                : 'RESTAURAÇÃO BLOQUEADA: SHA-256 não confere com o snapshot original.'),
                            react_1.default.createElement("span", { className: "font-mono text-[11px] block break-all opacity-85" },
                                "Esperado: ",
                                previewData.expectedSha256),
                            !previewData.integrityOk && (react_1.default.createElement("span", { className: "font-mono text-[11px] block break-all" },
                                "Obtido: ",
                                previewData.actualSha256)))),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs" }, Object.keys(TABLE_LABELS).map((tbl) => {
                        const bCount = previewData.backupCounts?.[tbl] ?? 0;
                        const cCount = previewData.currentCounts?.[tbl] ?? 0;
                        const changed = bCount !== cCount;
                        return (react_1.default.createElement("div", { key: tbl, className: `flex items-center justify-between gap-2 min-w-0 px-3.5 py-2.5 rounded-2xl border ${changed
                                ? 'bg-amber-500/10 border-amber-400/50'
                                : 'bg-white/55 border-white/75'}` },
                            react_1.default.createElement("span", { className: "font-bold text-slate-800 truncate" }, TABLE_LABELS[tbl]),
                            react_1.default.createElement("span", { className: "font-mono font-extrabold text-slate-900 shrink-0" },
                                "Backup: ",
                                bCount,
                                " / Atual: ",
                                cCount)));
                    })),
                    previewData.integrityOk && (react_1.default.createElement("div", { className: "space-y-2 pt-2 border-t border-white/60" },
                        react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-900 block" },
                            "Para confirmar a restaura\u00E7\u00E3o transacional (criar\u00E1 backup",
                            ' ',
                            react_1.default.createElement("code", { className: "font-mono" }, "pre_restauracao"),
                            " antes), digite",
                            ' ',
                            react_1.default.createElement("strong", { className: "text-rose-700" }, "RESTAURAR"),
                            ":"),
                        react_1.default.createElement("input", { type: "text", value: confirmRestoreText, onChange: (e) => setConfirmRestoreText(e.target.value), placeholder: "RESTAURAR", className: "liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base font-mono uppercase text-slate-900" }))))) : null),
                react_1.default.createElement("div", { className: "px-5 py-4 border-t border-white/60 bg-white/50 flex flex-wrap items-center justify-end gap-2 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setPreviewOpen(false), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-sm font-bold text-slate-700 cursor-pointer" }, "Fechar"),
                    previewData?.integrityOk && (react_1.default.createElement("button", { type: "button", disabled: restoring || confirmRestoreText.trim().toUpperCase() !== 'RESTAURAR', onClick: handleConfirmRestore, className: "min-h-[44px] px-5 py-2 rounded-full bg-rose-600 disabled:bg-rose-300 text-white text-sm font-bold inline-flex items-center gap-2 cursor-pointer" },
                        restoring && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Confirmar Restaura\u00E7\u00E3o"))))))),
        importOpen && (react_1.default.createElement("div", { className: "fixed inset-0 z-[60] bg-slate-900/45 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4" },
            react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": "Importar Backup JSON", className: "liquid-glass w-full md:max-w-lg rounded-t-[28px] md:rounded-[28px] p-5 space-y-4 shadow-2xl border border-white/80 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" },
                react_1.default.createElement("div", { className: "flex items-center justify-between gap-2" },
                    react_1.default.createElement("h4", { className: "text-base font-extrabold text-slate-900" }, "Importar Backup JSON"),
                    react_1.default.createElement("button", { type: "button", onClick: () => setImportOpen(false), className: "min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill inline-flex items-center justify-center cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
                react_1.default.createElement("p", { className: "text-xs text-slate-700 break-all" },
                    "Arquivo: ",
                    react_1.default.createElement("strong", null, importFileName)),
                importError && (react_1.default.createElement("div", { className: "rounded-xl bg-rose-500/15 border border-rose-500/60 p-3 text-xs font-bold text-rose-900" }, importError)),
                importSnapshot && (react_1.default.createElement("div", { className: "space-y-2" },
                    react_1.default.createElement("label", { className: "text-xs font-extrabold text-slate-900 block" },
                        "Um snapshot ",
                        react_1.default.createElement("code", { className: "font-mono" }, "pre_restauracao"),
                        " ser\u00E1 criado automaticamente antes de importar. Digite",
                        ' ',
                        react_1.default.createElement("strong", { className: "text-rose-700" }, "IMPORTAR"),
                        " para prosseguir:"),
                    react_1.default.createElement("input", { type: "text", value: confirmImportText, onChange: (e) => setConfirmImportText(e.target.value), placeholder: "IMPORTAR", className: "liquid-glass-input w-full min-h-[44px] px-3.5 py-2 rounded-xl text-base font-mono uppercase text-slate-900" }))),
                react_1.default.createElement("div", { className: "flex items-center justify-end gap-2" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setImportOpen(false), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full text-sm font-bold text-slate-700 cursor-pointer" }, "Cancelar"),
                    importSnapshot && (react_1.default.createElement("button", { type: "button", disabled: importing || confirmImportText.trim().toUpperCase() !== 'IMPORTAR', onClick: handleConfirmImport, className: "min-h-[44px] px-5 py-2 rounded-full bg-indigo-600 disabled:bg-indigo-300 text-white text-sm font-bold inline-flex items-center gap-2 cursor-pointer" },
                        importing && react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Importar Agora")))))))));
};
exports.SettingsBackupsSection = SettingsBackupsSection;

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
    const [paymentModality, setPaymentModality] = (0, react_1.useState)('boleto');
    const [stage, setStage] = (0, react_1.useState)('arquivo_recebido');
    const [isSubmitting, setIsSubmitting] = (0, react_1.useState)(false);
    const wasOpenRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (isOpen && !wasOpenRef.current) {
            setSelectedCompanyId(companies[0]?.id || 'nova');
            setCustomCompanyName('');
            setToolDescription('');
            setAmount('');
            setPaymentModality('boleto');
            setStage('arquivo_recebido');
            setIsSubmitting(false);
        }
        wasOpenRef.current = isOpen;
    }, [isOpen, companies]);
    if (!isOpen)
        return null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting || !toolDescription.trim())
            return;
        const existingComp = companies.find((c) => c.id === selectedCompanyId);
        const companyName = selectedCompanyId === 'nova'
            ? customCompanyName.trim() || 'Cliente Avulso'
            : existingComp?.corporateName || 'Cliente';
        const companyPhone = existingComp?.phone || '(11) 99999-0000';
        const numericAmount = parseFloat(amount.replace(',', '.')) || 0;
        setIsSubmitting(true);
        try {
            const ok = await onSaveOrder({
                companyId: existingComp?.id || '__new__',
                companyName,
                companyPhone,
                toolDescription: toolDescription.trim(),
                amount: numericAmount,
                paymentModality,
                stage,
            });
            if (ok !== false) {
                onClose();
            }
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const inputClass = 'liquid-glass-pill w-full min-h-[44px] px-3.5 py-2.5 text-base rounded-2xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition';
    return (react_1.default.createElement("div", { className: "fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-slate-900/35 backdrop-blur-md p-0 md:p-4" },
        react_1.default.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": "Nova Ordem de Servi\u00E7o", className: "w-full md:max-w-lg max-h-[92dvh] rounded-t-[28px] md:rounded-[30px] liquid-glass bg-white/70 shadow-2xl flex flex-col overflow-hidden" },
            react_1.default.createElement("div", { className: "px-5 pt-5 pb-3 border-b border-white/60 flex items-center justify-between gap-2 shrink-0" },
                react_1.default.createElement("div", { className: "flex items-center gap-2.5 min-w-0" },
                    react_1.default.createElement("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-[1.5px] shadow-md flex items-center justify-center shrink-0" },
                        react_1.default.createElement("div", { className: "w-full h-full bg-white/90 rounded-[10px] flex items-center justify-center" },
                            react_1.default.createElement(lucide_react_1.Layers, { className: "w-4 h-4 text-indigo-600" }))),
                    react_1.default.createElement("div", { className: "min-w-0" },
                        react_1.default.createElement("div", { className: "flex flex-wrap items-center gap-2" },
                            react_1.default.createElement("h2", { className: "text-base font-extrabold text-slate-900" }, "Nova Ordem de Servi\u00E7o"),
                            react_1.default.createElement("span", { className: "px-2 py-0.5 rounded-lg bg-indigo-500/15 border border-indigo-300/60 font-mono text-xs font-bold text-indigo-800" }, nextOrderId)),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 truncate" }, "Lan\u00E7amento r\u00E1pido \u2022 Entra direto na Esteira e no Financeiro"))),
                react_1.default.createElement("button", { type: "button", onClick: onClose, "aria-label": "Fechar modal", className: "min-h-[44px] min-w-[44px] rounded-full liquid-glass-pill text-slate-700 hover:text-slate-950 transition inline-flex items-center justify-center cursor-pointer shrink-0" },
                    react_1.default.createElement(lucide_react_1.X, { className: "w-5 h-5" }))),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "flex flex-col flex-1 min-h-0" },
                react_1.default.createElement("div", { className: "p-5 space-y-3.5 overflow-y-auto flex-1" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "1. Empresa / Cliente"),
                        react_1.default.createElement("select", { value: selectedCompanyId, onChange: (e) => setSelectedCompanyId(e.target.value), className: inputClass },
                            companies.map((c) => (react_1.default.createElement("option", { key: c.id, value: c.id },
                                c.corporateName,
                                " (",
                                c.cnpj,
                                ")"))),
                            react_1.default.createElement("option", { value: "nova" }, "+ Digitar Nova Empresa Rapidamente...")),
                        selectedCompanyId === 'nova' && (react_1.default.createElement("input", { type: "text", required: true, value: customCompanyName, onChange: (e) => setCustomCompanyName(e.target.value), placeholder: "Digite a Raz\u00E3o Social ou Nome da Gr\u00E1fica", className: `${inputClass} mt-2` }))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "2. Descri\u00E7\u00E3o Detalhada da Ferramenta"),
                        react_1.default.createElement("input", { type: "text", required: true, autoFocus: true, value: toolDescription, onChange: (e) => setToolDescription(e.target.value), placeholder: "Ex: Faca Caixa Duplex Tampa e Fundo", className: inputClass })),
                    react_1.default.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "3. Valor em R$"),
                            react_1.default.createElement("input", { type: "number", step: "0.01", min: "0", required: true, value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "Ex: 680,00", className: `${inputClass} font-mono font-bold` })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1" }, "4. Status Inicial na Esteira"),
                            react_1.default.createElement("select", { value: stage, onChange: (e) => setStage(e.target.value), className: inputClass }, financeEngine_1.PRODUCTION_STAGES.map((st) => (react_1.default.createElement("option", { key: st.id, value: st.id },
                                st.step,
                                ". ",
                                st.label)))))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", { className: "text-xs font-bold text-slate-700 block mb-1.5" }, "5. Condi\u00E7\u00E3o de Pagamento"),
                        react_1.default.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2" }, Object.keys(financeEngine_1.PAYMENT_MODALITY_META).map((mod) => {
                            const meta = financeEngine_1.PAYMENT_MODALITY_META[mod];
                            const selected = paymentModality === mod;
                            return (react_1.default.createElement("button", { type: "button", key: mod, onClick: () => setPaymentModality(mod), className: `min-h-[44px] py-2 px-3 rounded-2xl text-xs font-bold border text-left flex items-center justify-between transition cursor-pointer ${selected
                                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-white/40 shadow-md'
                                    : 'liquid-glass-pill text-slate-700'}` },
                                react_1.default.createElement("span", { className: "truncate" }, meta.short),
                                selected && react_1.default.createElement(lucide_react_1.Check, { className: "w-3.5 h-3.5 shrink-0 ml-1" })));
                        })),
                        react_1.default.createElement("p", { className: "text-[11px] font-medium text-slate-600 mt-1.5" },
                            "Toda OS entra automaticamente com status ",
                            react_1.default.createElement("strong", null, "N\u00E3o Pago"),
                            " at\u00E9 confirma\u00E7\u00E3o manual em \"Marcar como pago\"."))),
                react_1.default.createElement("div", { className: "px-5 py-4 border-t border-white/60 bg-white/45 shrink-0 pb-[calc(1rem+env(safe-area-inset-bottom))]" },
                    react_1.default.createElement("button", { type: "submit", disabled: isSubmitting, className: "w-full min-h-[48px] py-3 rounded-full text-sm font-bold bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white border border-white/40 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition cursor-pointer active:scale-95" }, isSubmitting ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" }),
                        react_1.default.createElement("span", null, "Registrando na Esteira..."))) : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4 stroke-[2.5]" }),
                        react_1.default.createElement("span", null,
                            "Registrar ",
                            nextOrderId,
                            " na Esteira")))))))));
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
const NotesSection_1 = require("./components/NotesSection");
const ProductionKanban_1 = require("./components/ProductionKanban");
const SettingsBackupsSection_1 = require("./components/SettingsBackupsSection");
const StockSection_1 = require("./components/StockSection");
const TeamManagementSection_1 = require("./components/TeamManagementSection");
const WarrantyReturnsSection_1 = require("./components/WarrantyReturnsSection");
const realtimeEngine_1 = require("./services/realtimeEngine");
const supabaseClient_1 = require("./services/supabaseClient");
const supabaseDataService_1 = require("./services/supabaseDataService");
const storageAdapter_1 = require("./services/storageAdapter");
const financeEngine_1 = require("./utils/financeEngine");
const OPERATOR_ALLOWED_SECTIONS = [
    'esteira',
    'entregas',
    'retornos',
    'estoque',
    'notas',
];
function createEmptyDb(companyId = '') {
    return {
        version: 6,
        company_id: companyId,
        companies: [],
        orders: [],
        deliveries: [],
        returns: [],
        stock: [],
        stockMovements: [],
        notas: [],
        noteSequence: 0,
        despesas: [],
        expenses: [],
        serviceProviders: [],
        payrollEmployees: [],
        investments: [],
        employees: [],
    };
}
const App = () => {
    const [authChecking, setAuthChecking] = (0, react_1.useState)(true);
    const [session, setSession] = (0, react_1.useState)(null);
    const [db, setDb] = (0, react_1.useState)(() => createEmptyDb());
    const [dbLoading, setDbLoading] = (0, react_1.useState)(false);
    const [dbError, setDbError] = (0, react_1.useState)(null);
    const [activeSection, setActiveSection] = (0, react_1.useState)('bento_home');
    const [realtimeStatus, setRealtimeStatus] = (0, react_1.useState)('connected');
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [selectedCompanyId, setSelectedCompanyId] = (0, react_1.useState)(null);
    const [prefillDeliveryOrder, setPrefillDeliveryOrder] = (0, react_1.useState)(null);
    const [isNewModalOpen, setIsNewModalOpen] = (0, react_1.useState)(false);
    const [printJob, setPrintJob] = (0, react_1.useState)(null);
    // Settings & Backups (Admin Only)
    const [settingsState, setSettingsState] = (0, react_1.useState)({
        settings: {
            empresa_id: '',
            retencao_diaria: 30,
            retencao_mensal: 12,
            backup_automatico: true,
        },
        backups: [],
        logs: [],
        loading: false,
    });
    const [pendingOrderIds, setPendingOrderIds] = (0, react_1.useState)([]);
    const pendingOrderIdsRef = (0, react_1.useRef)(new Set());
    const dbRef = (0, react_1.useRef)(db);
    dbRef.current = db;
    const sessionRef = (0, react_1.useRef)(session);
    sessionRef.current = session;
    const autoBackupTimerRef = (0, react_1.useRef)(null);
    const hydrationSeqRef = (0, react_1.useRef)(0);
    const moveErrorTimerRef = (0, react_1.useRef)(null);
    const printTimerRef = (0, react_1.useRef)(null);
    const [moveError, setMoveError] = (0, react_1.useState)(null);
    const [toast, setToast] = (0, react_1.useState)(null);
    const toastTimerRef = (0, react_1.useRef)(null);
    const showToast = (0, react_1.useCallback)((message, variant = 'ok', action) => {
        if (toastTimerRef.current) {
            window.clearTimeout(toastTimerRef.current);
        }
        setToast({
            message,
            variant,
            actionLabel: action?.label,
            onAction: action?.onClick,
        });
        toastTimerRef.current = window.setTimeout(() => {
            setToast((prev) => (prev?.message === message ? null : prev));
        }, action ? 7000 : 3800);
    }, []);
    const refreshSettingsAndBackups = (0, react_1.useCallback)(async (empresaId, isSuperAdmin) => {
        if (!isSuperAdmin || !empresaId)
            return;
        setSettingsState((prev) => ({ ...prev, loading: true }));
        try {
            const res = await (0, supabaseDataService_1.dbLoadSettingsAndBackups)(empresaId);
            if (!sessionRef.current?.isSuperAdmin)
                return;
            setSettingsState({
                settings: res.settings,
                backups: res.backups,
                logs: res.logs,
                loading: false,
            });
        }
        catch {
            setSettingsState((prev) => ({ ...prev, loading: false }));
        }
    }, []);
    const hydrateFromSupabase = (0, react_1.useCallback)(async (activeSession) => {
        if (activeSession.role === 'cliente') {
            hydrationSeqRef.current += 1;
            setDb(createEmptyDb());
            setDbError(null);
            setDbLoading(false);
            return;
        }
        const targetEmpresaId = activeSession.empresaId || activeSession.company_id;
        const seq = ++hydrationSeqRef.current;
        setDbLoading(true);
        setDbError(null);
        try {
            const loaded = await (0, supabaseDataService_1.loadCompanyDatabaseFromSupabase)(targetEmpresaId, activeSession.role);
            if (seq !== hydrationSeqRef.current)
                return;
            setDb(loaded);
            setSelectedCompanyId((prev) => prev && loaded.companies.some((c) => c.id === prev)
                ? prev
                : loaded.companies[0]?.id || null);
            if (activeSession.isSuperAdmin) {
                await refreshSettingsAndBackups(targetEmpresaId, activeSession.isSuperAdmin);
            }
        }
        catch (err) {
            if (seq !== hydrationSeqRef.current)
                return;
            setDbError(err?.message ||
                'Não foi possível carregar os dados da empresa no Supabase.');
        }
        finally {
            if (seq === hydrationSeqRef.current) {
                setDbLoading(false);
            }
        }
    }, [refreshSettingsAndBackups]);
    // Schedule debounced automatic snapshot after data changes (~15s idle, 1h server throttle)
    const scheduleAutoBackup = (0, react_1.useCallback)(() => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        if (settingsState.settings.backup_automatico === false)
            return;
        if (autoBackupTimerRef.current) {
            window.clearTimeout(autoBackupTimerRef.current);
        }
        autoBackupTimerRef.current = window.setTimeout(async () => {
            const latest = sessionRef.current;
            if (!latest || latest.role !== 'admin')
                return;
            const empresaId = latest.empresaId || latest.company_id;
            try {
                await (0, supabaseDataService_1.invokeBackupEngine)({
                    action: 'snapshot_company',
                    tipo: 'automatico',
                    debounced: true,
                });
                if (sessionRef.current?.isSuperAdmin) {
                    await refreshSettingsAndBackups(empresaId, true);
                }
            }
            catch {
                if (sessionRef.current?.isSuperAdmin) {
                    await refreshSettingsAndBackups(empresaId, true);
                }
            }
        }, 15000);
    }, [settingsState.settings.backup_automatico, refreshSettingsAndBackups]);
    // Restore active Supabase session on mount & listen for auth changes (never wipes data!)
    (0, react_1.useEffect)(() => {
        let mounted = true;
        const sb = (0, supabaseClient_1.getSupabaseClient)();
        (0, supabaseDataService_1.restoreSupabaseSession)()
            .then(async (restored) => {
            if (!mounted)
                return;
            if (restored) {
                setSession(restored);
                setActiveSection(restored.role === 'admin' ? 'bento_home' : 'esteira');
                await hydrateFromSupabase(restored);
            }
        })
            .finally(() => {
            if (mounted)
                setAuthChecking(false);
        });
        const { data: authListener } = sb.auth.onAuthStateChange((event) => {
            if (!mounted)
                return;
            if (event === 'SIGNED_OUT') {
                hydrationSeqRef.current += 1;
                if (autoBackupTimerRef.current) {
                    window.clearTimeout(autoBackupTimerRef.current);
                }
                if (toastTimerRef.current) {
                    window.clearTimeout(toastTimerRef.current);
                }
                if (moveErrorTimerRef.current) {
                    window.clearTimeout(moveErrorTimerRef.current);
                }
                if (printTimerRef.current) {
                    window.clearTimeout(printTimerRef.current);
                }
                pendingOrderIdsRef.current.clear();
                setPendingOrderIds([]);
                setSession(null);
                setDb(createEmptyDb());
            }
        });
        return () => {
            mounted = false;
            authListener?.subscription?.unsubscribe();
            if (autoBackupTimerRef.current) {
                window.clearTimeout(autoBackupTimerRef.current);
            }
            if (toastTimerRef.current) {
                window.clearTimeout(toastTimerRef.current);
            }
            if (moveErrorTimerRef.current) {
                window.clearTimeout(moveErrorTimerRef.current);
            }
            if (printTimerRef.current) {
                window.clearTimeout(printTimerRef.current);
            }
        };
    }, [hydrateFromSupabase]);
    const isNewerOrder = (incoming, local) => {
        if (!local)
            return true;
        const incVer = Number(incoming.version) || 0;
        const locVer = Number(local.version) || 0;
        if (incVer > locVer)
            return true;
        if (incVer < locVer)
            return false;
        return (incoming.updatedAt || '') > (local.updatedAt || '');
    };
    // Realtime listener (read-only UI sync per empresa_id; no ping-pong writebacks)
    (0, react_1.useEffect)(() => {
        window.__facasflowChannelCount = realtimeEngine_1.getActiveRealtimeChannelCount;
        const targetEmpresaId = session?.empresaId || session?.company_id;
        if (!targetEmpresaId || session?.role === 'cliente')
            return;
        const unsubscribe = (0, realtimeEngine_1.subscribeToCompanyRealtime)(targetEmpresaId, (remoteEvent) => {
            setDb((prev) => {
                const delUuids = new Set(remoteEvent.deletedOrderUuids || []);
                if (remoteEvent.deletedOrderUuid)
                    delUuids.add(remoteEvent.deletedOrderUuid);
                const delIds = new Set(remoteEvent.deletedOrderIds || []);
                if (remoteEvent.deletedOrderId)
                    delIds.add(remoteEvent.deletedOrderId);
                if (delUuids.size > 0 || delIds.size > 0) {
                    const removedIds = new Set(delIds);
                    for (const o of prev.orders) {
                        if (o.dbUuid && delUuids.has(o.dbUuid))
                            removedIds.add(o.id);
                    }
                    return {
                        ...prev,
                        orders: prev.orders.filter((o) => !((o.dbUuid && delUuids.has(o.dbUuid)) || removedIds.has(o.id))),
                        deliveries: prev.deliveries.filter((d) => !removedIds.has(d.orderId)),
                        returns: prev.returns.filter((r) => !removedIds.has(r.orderId)),
                    };
                }
                if (remoteEvent.order) {
                    const incoming = remoteEvent.order;
                    if (pendingOrderIdsRef.current.has(incoming.id)) {
                        return prev;
                    }
                    const existing = prev.orders.find((o) => incoming.dbUuid && o.dbUuid ? o.dbUuid === incoming.dbUuid : o.id === incoming.id);
                    if (existing && !isNewerOrder(incoming, existing)) {
                        return prev;
                    }
                    const nextOrders = existing
                        ? prev.orders.map((o) => (incoming.dbUuid && o.dbUuid ? o.dbUuid === incoming.dbUuid : o.id === incoming.id)
                            ? { ...o, ...incoming }
                            : o)
                        : [incoming, ...prev.orders.filter((o) => o.id !== incoming.id)];
                    return { ...prev, orders: nextOrders };
                }
                return prev;
            });
        }, (status) => {
            setRealtimeStatus(status);
        }, () => dbRef.current);
        return () => {
            unsubscribe();
        };
    }, [session?.empresaId, session?.company_id, session?.role]);
    const handleAuthenticated = async (newSession) => {
        setSession(newSession);
        setSelectedCompanyId(null);
        setActiveSection(newSession.role === 'admin' ? 'bento_home' : 'esteira');
        setSearchQuery('');
        await hydrateFromSupabase(newSession);
        showToast(newSession.role === 'operador'
            ? `Acesso de Produção liberado (${newSession.ownerName})`
            : 'Sessão iniciada com sucesso!');
    };
    const handleLogout = (0, react_1.useCallback)(async () => {
        hydrationSeqRef.current += 1;
        if (autoBackupTimerRef.current) {
            window.clearTimeout(autoBackupTimerRef.current);
        }
        if (toastTimerRef.current) {
            window.clearTimeout(toastTimerRef.current);
        }
        if (moveErrorTimerRef.current) {
            window.clearTimeout(moveErrorTimerRef.current);
        }
        if (printTimerRef.current) {
            window.clearTimeout(printTimerRef.current);
        }
        pendingOrderIdsRef.current.clear();
        setPendingOrderIds([]);
        setMoveError(null);
        setToast(null);
        try {
            await (0, supabaseDataService_1.signOutSupabase)();
        }
        catch {
            // ignore signout error, clear client state only (remote data remains untouched!)
        }
        setSession(null);
        setDb(createEmptyDb());
        setSearchQuery('');
        setIsNewModalOpen(false);
        setSettingsState({
            settings: {
                empresa_id: '',
                retencao_diaria: 30,
                retencao_mensal: 12,
                backup_automatico: true,
            },
            backups: [],
            logs: [],
            loading: false,
        });
    }, []);
    const handleSelectSection = (0, react_1.useCallback)((target) => {
        const currentSession = sessionRef.current;
        if (!currentSession || currentSession.role === 'cliente') {
            return;
        }
        if (target === 'configuracoes' && !currentSession.isSuperAdmin) {
            setActiveSection(currentSession.role === 'operador' ? 'esteira' : 'bento_home');
            return;
        }
        if (currentSession.role === 'operador' &&
            !OPERATOR_ALLOWED_SECTIONS.includes(target)) {
            setActiveSection('esteira');
            return;
        }
        setActiveSection(target);
    }, []);
    const empresaId = session?.empresaId || session?.company_id || '';
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
    const financials = (0, react_1.useMemo)(() => (0, financeEngine_1.computeFinancialBreakdown)(db.orders), [db.orders]);
    const nextOrderId = (0, react_1.useMemo)(() => (0, storageAdapter_1.getNextOrderId)(db), [db]);
    // CRUD Handlers — Direct Supabase Persistence (Soft Delete)
    const handleAddCompany = async (newCompData) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        try {
            const newCode = (0, storageAdapter_1.getNextCompanyCode)(dbRef.current.companies);
            const created = await (0, supabaseDataService_1.dbCreateCompany)(empresaId, newCode, newCompData);
            setDb((prev) => ({
                ...prev,
                companies: [created, ...prev.companies],
            }));
            setSelectedCompanyId(created.id);
            scheduleAutoBackup();
            showToast(`Empresa "${created.corporateName}" cadastrada!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao cadastrar empresa.', 'err');
            return false;
        }
    };
    const handleDeleteCompany = async (companyId) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const targetEmpresaId = active.empresaId || active.company_id;
        const snap = dbRef.current;
        const comp = snap.companies.find((c) => c.id === companyId);
        if (!comp?.dbUuid)
            return;
        try {
            const removedOrders = snap.orders.filter((o) => o.companyId === companyId);
            const removedOrderIds = new Set(removedOrders.map((o) => o.id));
            const returnUuids = snap.returns
                .filter((r) => removedOrderIds.has(r.orderId) && r.dbUuid)
                .map((r) => r.dbUuid);
            const deliveryUuids = snap.deliveries
                .filter((d) => removedOrderIds.has(d.orderId) && d.dbUuid)
                .map((d) => d.dbUuid);
            const orderUuids = removedOrders
                .filter((o) => o.dbUuid)
                .map((o) => o.dbUuid);
            await Promise.all([
                (0, supabaseDataService_1.dbBulkSoftDeleteReturns)(targetEmpresaId, returnUuids),
                (0, supabaseDataService_1.dbBulkSoftDeleteDeliveries)(targetEmpresaId, deliveryUuids),
                (0, supabaseDataService_1.dbBulkSoftDeleteOrders)(targetEmpresaId, orderUuids),
            ]);
            await (0, supabaseDataService_1.dbSoftDeleteCompany)(targetEmpresaId, comp.dbUuid);
            setDb((prev) => {
                const nextCompanies = prev.companies.filter((c) => c.id !== companyId);
                return {
                    ...prev,
                    companies: nextCompanies,
                    orders: prev.orders.filter((o) => o.companyId !== companyId),
                    deliveries: prev.deliveries.filter((d) => !removedOrderIds.has(d.orderId)),
                    returns: prev.returns.filter((r) => !removedOrderIds.has(r.orderId)),
                };
            });
            setSelectedCompanyId((prev) => (prev === companyId ? null : prev));
            setPrefillDeliveryOrder((prev) => prev && removedOrderIds.has(prev.id) ? null : prev);
            if (removedOrders.length > 0) {
                (0, realtimeEngine_1.publishRealtimeUpdate)({
                    company_id: targetEmpresaId,
                    section: 'esteira',
                    actionLabel: '',
                    actorName: active.ownerName,
                    actorRole: active.role,
                    deletedOrderUuids: orderUuids,
                    deletedOrderIds: Array.from(removedOrderIds),
                });
            }
            scheduleAutoBackup();
            showToast(`Empresa "${comp.corporateName}" apagada!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover empresa.', 'err');
        }
    };
    const handleCreateOrderFull = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin') {
            showToast('Apenas administradores podem cadastrar novas OS.', 'err');
            return false;
        }
        try {
            const stamp = (0, financeEngine_1.nowTimestampBR)();
            const snap = dbRef.current;
            let existingComp = payload.companyId && payload.companyId !== '__new__'
                ? snap.companies.find((c) => c.id === payload.companyId)
                : undefined;
            let newCompCreated = null;
            if (!existingComp) {
                const compCode = (0, storageAdapter_1.getNextCompanyCode)(snap.companies);
                newCompCreated = await (0, supabaseDataService_1.dbCreateCompany)(empresaId, compCode, {
                    corporateName: payload.companyName,
                    cnpj: 'Não informado',
                    phone: payload.companyPhone,
                    contactName: 'PCP / Compras',
                });
                existingComp = newCompCreated;
            }
            const createdOrder = await (0, supabaseDataService_1.dbCreateOrder)(empresaId, 'AUTO', {
                companyId: existingComp.id,
                companyUuid: existingComp.dbUuid,
                companyName: existingComp.corporateName,
                companyPhone: existingComp.phone || payload.companyPhone,
                toolDescription: payload.toolDescription,
                amount: payload.amount,
                paymentModality: payload.paymentModality,
                stage: payload.stage,
                stageUpdatedAt: stamp,
            });
            setDb((prev) => ({
                ...prev,
                companies: newCompCreated
                    ? [newCompCreated, ...prev.companies]
                    : prev.companies,
                orders: [createdOrder, ...prev.orders],
            }));
            setSelectedCompanyId((prev) => prev || existingComp.id);
            (0, realtimeEngine_1.publishRealtimeUpdate)({
                company_id: empresaId,
                section: 'esteira',
                actionLabel: '',
                actorName: active.ownerName,
                actorRole: active.role,
                order: createdOrder,
            });
            const stageLabel = financeEngine_1.PRODUCTION_STAGES.find((s) => s.id === payload.stage)?.label ||
                payload.stage;
            scheduleAutoBackup();
            showToast(`${createdOrder.id} criada em "${stageLabel}"!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao criar Ordem de Serviço.', 'err');
            return false;
        }
    };
    // Seção 2 • Esteira Física de Produção (Optimistic single card + RPC mover_faca_v2)
    const handleMoveStage = (0, react_1.useCallback)(async (orderId, targetStage) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        const currentOrder = dbRef.current.orders.find((o) => o.id === orderId);
        if (!currentOrder || currentOrder.stage === targetStage)
            return;
        if (!currentOrder.dbUuid)
            return;
        if (pendingOrderIdsRef.current.has(orderId))
            return;
        const stamp = (0, financeEngine_1.nowTimestampBR)();
        const nowIso = new Date().toISOString();
        const previousStageState = {
            stage: currentOrder.stage,
            stageUpdatedAt: currentOrder.stageUpdatedAt,
            stageHistory: currentOrder.stageHistory,
            version: currentOrder.version,
            updatedAt: currentOrder.updatedAt,
        };
        const optimisticOrder = {
            ...currentOrder,
            stage: targetStage,
            stageUpdatedAt: stamp,
            stageHistory: [
                ...(currentOrder.stageHistory || []),
                { stage: targetStage, timestamp: stamp },
            ],
            version: (Number(currentOrder.version) || 1) + 1,
            updatedAt: nowIso,
        };
        pendingOrderIdsRef.current.add(orderId);
        setPendingOrderIds(Array.from(pendingOrderIdsRef.current));
        setMoveError(null);
        setDb((prev) => ({
            ...prev,
            orders: prev.orders.map((o) => (o.id === orderId ? optimisticOrder : o)),
        }));
        try {
            const rpcRes = await (0, supabaseDataService_1.dbMoveOrderStage)(currentOrder.dbUuid, targetStage, stamp);
            const authoritativeOrder = {
                ...optimisticOrder,
                version: rpcRes.version ?? optimisticOrder.version,
                updatedAt: rpcRes.updatedAt ?? optimisticOrder.updatedAt,
            };
            pendingOrderIdsRef.current.delete(orderId);
            setPendingOrderIds(Array.from(pendingOrderIdsRef.current));
            setDb((prev) => ({
                ...prev,
                orders: prev.orders.map((o) => o.id === orderId ? { ...o, ...authoritativeOrder } : o),
            }));
            (0, realtimeEngine_1.publishRealtimeUpdate)({
                company_id: empresaId,
                section: 'esteira',
                actionLabel: '',
                actorName: active.ownerName,
                actorRole: active.role,
                order: authoritativeOrder,
            });
            scheduleAutoBackup();
        }
        catch (err) {
            pendingOrderIdsRef.current.delete(orderId);
            setPendingOrderIds(Array.from(pendingOrderIdsRef.current));
            setDb((prev) => ({
                ...prev,
                orders: prev.orders.map((o) => o.id === orderId ? { ...o, ...previousStageState } : o),
            }));
            setMoveError(err?.message || `Não foi possível mover ${orderId}. Estado restaurado.`);
            if (moveErrorTimerRef.current) {
                window.clearTimeout(moveErrorTimerRef.current);
            }
            moveErrorTimerRef.current = window.setTimeout(() => setMoveError(null), 4000);
        }
    }, [empresaId, scheduleAutoBackup]);
    const handleTogglePaid = async (orderId) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const order = dbRef.current.orders.find((o) => o.id === orderId);
        if (!order?.dbUuid)
            return;
        const today = (0, financeEngine_1.toISODate)();
        const isPaid = order.paymentStatus === 'pago';
        const nextStatus = isPaid ? 'nao_pago' : 'pago';
        const nextPaidAt = isPaid ? null : today;
        const nextVersion = (Number(order.version) || 1) + 1;
        try {
            await (0, supabaseDataService_1.dbUpdateOrderPayment)(empresaId, order.dbUuid, {
                status_pagamento: nextStatus,
                data_pagamento: nextPaidAt,
                version: nextVersion,
            });
            setDb((prev) => ({
                ...prev,
                orders: prev.orders.map((o) => o.id === orderId
                    ? {
                        ...o,
                        paymentStatus: nextStatus,
                        paidAt: nextPaidAt || undefined,
                        version: nextVersion,
                        updatedAt: new Date().toISOString(),
                    }
                    : o),
            }));
            scheduleAutoBackup();
            showToast(nextStatus === 'pago'
                ? `${orderId} marcada como paga!`
                : `${orderId} reaberta como Não Pago.`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar pagamento.', 'err');
        }
    };
    const handleEmitBilling30d = async (orderId) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const order = dbRef.current.orders.find((o) => o.id === orderId);
        if (!order?.dbUuid)
            return;
        const today = (0, financeEngine_1.toISODate)();
        const nextDue = (0, financeEngine_1.addDays)(today, 30);
        const nextVersion = (Number(order.version) || 1) + 1;
        try {
            await (0, supabaseDataService_1.dbUpdateOrderPayment)(empresaId, order.dbUuid, {
                status_pagamento: 'a_receber',
                data_vencimento: nextDue,
                version: nextVersion,
            });
            setDb((prev) => ({
                ...prev,
                orders: prev.orders.map((o) => o.id === orderId
                    ? {
                        ...o,
                        paymentStatus: 'a_receber',
                        dueDate: nextDue,
                        version: nextVersion,
                        updatedAt: new Date().toISOString(),
                    }
                    : o),
            }));
            scheduleAutoBackup();
            showToast(`Faturamento 30 dias gerado para ${orderId}!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao gerar faturamento.', 'err');
        }
    };
    const handleDeleteOrder = (0, react_1.useCallback)(async (orderId) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        if (pendingOrderIdsRef.current.has(orderId))
            return;
        const targetEmpresaId = active.empresaId || active.company_id;
        const snap = dbRef.current;
        const target = snap.orders.find((o) => o.id === orderId);
        if (!target?.dbUuid)
            return;
        pendingOrderIdsRef.current.add(orderId);
        setPendingOrderIds(Array.from(pendingOrderIdsRef.current));
        try {
            const deliveryUuids = snap.deliveries
                .filter((d) => d.orderId === orderId && d.dbUuid)
                .map((d) => d.dbUuid);
            const returnUuids = snap.returns
                .filter((r) => r.orderId === orderId && r.dbUuid)
                .map((r) => r.dbUuid);
            await Promise.all([
                (0, supabaseDataService_1.dbBulkSoftDeleteDeliveries)(targetEmpresaId, deliveryUuids),
                (0, supabaseDataService_1.dbBulkSoftDeleteReturns)(targetEmpresaId, returnUuids),
            ]);
            await (0, supabaseDataService_1.dbSoftDeleteOrder)(targetEmpresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                orders: prev.orders.filter((o) => o.id !== orderId),
                deliveries: prev.deliveries.filter((d) => d.orderId !== orderId),
                returns: prev.returns.filter((r) => r.orderId !== orderId),
            }));
            setPrefillDeliveryOrder((prev) => (prev?.id === orderId ? null : prev));
            (0, realtimeEngine_1.publishRealtimeUpdate)({
                company_id: targetEmpresaId,
                section: 'esteira',
                actionLabel: '',
                actorName: active.ownerName,
                actorRole: active.role,
                deletedOrderUuid: target.dbUuid,
                deletedOrderId: target.id,
            });
            scheduleAutoBackup();
            showToast(`Ordem ${orderId} removida com sucesso!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao apagar OS.', 'err');
        }
        finally {
            pendingOrderIdsRef.current.delete(orderId);
            setPendingOrderIds(Array.from(pendingOrderIdsRef.current));
        }
    }, [scheduleAutoBackup, showToast]);
    const handleQuickRegisterDelivery = (0, react_1.useCallback)((order) => {
        setPrefillDeliveryOrder(order);
        handleSelectSection('entregas');
    }, [handleSelectSection]);
    // Seção 4 • Entregas
    const handleAddDelivery = async (deliveryData) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return false;
        try {
            const snap = dbRef.current;
            const code = (0, storageAdapter_1.getNextDeliveryId)(snap);
            const ord = snap.orders.find((o) => o.id === deliveryData.orderId);
            const created = await (0, supabaseDataService_1.dbCreateDelivery)(empresaId, code, deliveryData, ord?.dbUuid);
            setDb((prev) => ({
                ...prev,
                deliveries: [created, ...prev.deliveries],
            }));
            let stageWarning = null;
            if (ord?.dbUuid && ord.stage !== 'faca_pronta') {
                const stamp = (0, financeEngine_1.nowTimestampBR)();
                try {
                    const rpcRes = await (0, supabaseDataService_1.dbMoveOrderStage)(ord.dbUuid, 'faca_pronta', stamp);
                    const updatedOrder = {
                        ...ord,
                        stage: 'faca_pronta',
                        stageUpdatedAt: stamp,
                        stageHistory: [
                            ...(ord.stageHistory || []),
                            { stage: 'faca_pronta', timestamp: stamp },
                        ],
                        version: rpcRes.version ?? (Number(ord.version) || 1) + 1,
                        updatedAt: rpcRes.updatedAt ?? new Date().toISOString(),
                    };
                    setDb((prev) => ({
                        ...prev,
                        orders: prev.orders.map((o) => o.id === deliveryData.orderId ? { ...o, ...updatedOrder } : o),
                    }));
                    (0, realtimeEngine_1.publishRealtimeUpdate)({
                        company_id: empresaId,
                        section: 'esteira',
                        actionLabel: '',
                        actorName: active.ownerName,
                        actorRole: active.role,
                        order: updatedOrder,
                    });
                }
                catch (moveErr) {
                    stageWarning = moveErr?.message || 'não foi possível atualizar etapa na esteira';
                }
            }
            scheduleAutoBackup();
            if (stageWarning) {
                showToast(`Saída logística registrada, porém: ${stageWarning}.`, 'err');
            }
            else {
                showToast(`Saída logística da ${deliveryData.orderId} registrada!`);
            }
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao registrar entrega.', 'err');
            return false;
        }
    };
    const handleDeleteDelivery = async (deliveryId) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        const del = dbRef.current.deliveries.find((d) => d.id === deliveryId);
        if (!del?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteDelivery)(empresaId, del.dbUuid);
            setDb((prev) => ({
                ...prev,
                deliveries: prev.deliveries.filter((d) => d.id !== deliveryId),
            }));
            scheduleAutoBackup();
            showToast(`Registro de entrega ${deliveryId} removido!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover entrega.', 'err');
        }
    };
    // Seção 5 • Retornos e Ajustes
    const handleAddReturn = async (retData) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return false;
        try {
            const snap = dbRef.current;
            const code = (0, storageAdapter_1.getNextReturnId)(snap);
            const ord = snap.orders.find((o) => o.id === retData.orderId);
            const created = await (0, supabaseDataService_1.dbCreateReturn)(empresaId, code, retData, ord?.dbUuid);
            setDb((prev) => ({
                ...prev,
                returns: [created, ...prev.returns],
            }));
            scheduleAutoBackup();
            showToast(`Retorno de garantia (${retData.orderId}) registrado!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao registrar retorno.', 'err');
            return false;
        }
    };
    const handleUpdateReturnStatus = async (id, nextStatus) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        const target = dbRef.current.returns.find((r) => r.id === id);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbUpdateReturnStatus)(empresaId, target.dbUuid, nextStatus);
            const stamp = (0, financeEngine_1.nowTimestampBR)();
            setDb((prev) => ({
                ...prev,
                returns: prev.returns.map((r) => r.id === id ? { ...r, status: nextStatus, updatedAt: stamp } : r),
            }));
            scheduleAutoBackup();
            showToast(`Status do retorno atualizado!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar retorno.', 'err');
        }
    };
    const handleDeleteReturn = async (returnId) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        const target = dbRef.current.returns.find((r) => r.id === returnId);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteReturn)(empresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                returns: prev.returns.filter((r) => r.id !== returnId),
            }));
            scheduleAutoBackup();
            showToast(`Registro de retorno ${returnId} removido!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao apagar retorno.', 'err');
        }
    };
    // Seção 6 • Estoque (CRUD restrito a admin; consumo rápido e estorno liberados para admin e operador)
    const handleAddStockItem = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        try {
            const code = (0, storageAdapter_1.getNextStockId)(dbRef.current);
            const created = await (0, supabaseDataService_1.dbCreateStockItem)(empresaId, code, payload);
            setDb((prev) => ({
                ...prev,
                stock: [created, ...(prev.stock || [])],
            }));
            scheduleAutoBackup();
            showToast(`Item "${created.name}" (${created.id}) adicionado ao estoque!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao salvar item no estoque.', 'err');
        }
    };
    const handleUpdateStockItem = async (id, payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const target = (dbRef.current.stock || []).find((item) => item.id === id);
        if (!target?.dbUuid)
            return;
        try {
            const updated = await (0, supabaseDataService_1.dbUpdateStockItem)(empresaId, target.dbUuid, payload);
            setDb((prev) => ({
                ...prev,
                stock: (prev.stock || []).map((item) => item.id === id ? updated : item),
            }));
            scheduleAutoBackup();
            showToast(`Estoque atualizado (${payload.name})!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar item de estoque.', 'err');
        }
    };
    const handleDeleteStockItem = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const target = (dbRef.current.stock || []).find((item) => item.id === id);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteStockItem)(empresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                stock: (prev.stock || []).filter((i) => i.id !== id),
            }));
            scheduleAutoBackup();
            showToast(`Item ${id} removido do estoque!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao excluir item de estoque.', 'err');
        }
    };
    const handleRevertStockMovement = async (movement) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        const currentItem = (dbRef.current.stock || []).find((i) => i.dbUuid === movement.stockItemUuid);
        if (!currentItem) {
            showToast('Insumo não localizado para desfazer a movimentação.', 'err');
            return;
        }
        try {
            const { updatedItem, revertedAt, estornoMovement } = await (0, supabaseDataService_1.dbRevertStockMovement)(empresaId, movement, currentItem, active.ownerName);
            setDb((prev) => ({
                ...prev,
                stock: (prev.stock || []).map((it) => it.dbUuid === updatedItem.dbUuid ? updatedItem : it),
                stockMovements: [
                    estornoMovement,
                    ...(prev.stockMovements || []).map((m) => m.id === movement.id ? { ...m, revertedAt } : m),
                ],
            }));
            scheduleAutoBackup();
            showToast(`Movimentação desfeita! Saldo de "${updatedItem.name}": ${updatedItem.quantity} ${updatedItem.unit}.`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao desfazer movimentação.', 'err');
        }
    };
    const handleQuickConsumeStock = async (item, quantity, note) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        try {
            const { updatedItem, movement } = await (0, supabaseDataService_1.dbRegisterStockMovement)(empresaId, item, -Math.abs(quantity), active.ownerName, note);
            setDb((prev) => ({
                ...prev,
                stock: (prev.stock || []).map((it) => it.dbUuid === updatedItem.dbUuid ? updatedItem : it),
                stockMovements: [movement, ...(prev.stockMovements || [])],
            }));
            scheduleAutoBackup();
            showToast(`Baixa registrada: -${movement.quantity} ${movement.unit} de "${movement.itemName}" (Saldo: ${updatedItem.quantity})`, 'ok', {
                label: 'Desfazer',
                onClick: () => {
                    setToast(null);
                    handleRevertStockMovement(movement);
                },
            });
        }
        catch (err) {
            showToast(err?.message || 'Erro ao registrar baixa de estoque.', 'err');
        }
    };
    const handleQuickReplenishStock = async (item, quantity, note) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        try {
            const { updatedItem, movement } = await (0, supabaseDataService_1.dbRegisterStockMovement)(empresaId, item, Math.abs(quantity), active.ownerName, note);
            setDb((prev) => ({
                ...prev,
                stock: (prev.stock || []).map((it) => it.dbUuid === updatedItem.dbUuid ? updatedItem : it),
                stockMovements: [movement, ...(prev.stockMovements || [])],
            }));
            scheduleAutoBackup();
            showToast(`Reposição registrada: +${movement.quantity} ${movement.unit} em "${movement.itemName}" (Saldo: ${updatedItem.quantity})`, 'ok', {
                label: 'Desfazer',
                onClick: () => {
                    setToast(null);
                    handleRevertStockMovement(movement);
                },
            });
        }
        catch (err) {
            showToast(err?.message || 'Erro ao repor estoque.', 'err');
        }
    };
    // Finanças -> Despesas (Seção 3 - CRUD completo com Soft Delete + RBAC Admin)
    const handleCreateExpense = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin') {
            throw new Error('Apenas administradores podem cadastrar despesas.');
        }
        const created = await (0, supabaseDataService_1.dbCreateExpense)(empresaId, payload);
        setDb((prev) => ({
            ...prev,
            despesas: [created, ...(prev.despesas || [])],
        }));
        scheduleAutoBackup();
        showToast('Despesa cadastrada com sucesso!');
        return created;
    };
    const handleUpdateExpense = async (id, payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin') {
            throw new Error('Apenas administradores podem editar despesas.');
        }
        const updated = await (0, supabaseDataService_1.dbUpdateExpense)(empresaId, id, payload);
        setDb((prev) => ({
            ...prev,
            despesas: (prev.despesas || []).map((d) => (d.id === id ? updated : d)),
        }));
        scheduleAutoBackup();
        showToast('Despesa atualizada!');
        return updated;
    };
    const handleDeleteExpense = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin') {
            throw new Error('Apenas administradores podem excluir despesas.');
        }
        await (0, supabaseDataService_1.dbSoftDeleteExpense)(empresaId, id);
        setDb((prev) => ({
            ...prev,
            despesas: (prev.despesas || []).filter((d) => d.id !== id),
        }));
        scheduleAutoBackup();
        showToast('Despesa removida!');
    };
    // Finanças -> Prestadores, Folha, Investimentos
    const handleAddProvider = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        try {
            const code = (0, storageAdapter_1.getNextProviderId)(dbRef.current);
            const created = await (0, supabaseDataService_1.dbCreateProvider)(targetEmpresaId, code, payload);
            setDb((prev) => ({
                ...prev,
                serviceProviders: [created, ...(prev.serviceProviders || [])],
            }));
            scheduleAutoBackup();
            showToast(`Prestador "${created.name}" cadastrado!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao cadastrar prestador.', 'err');
            return false;
        }
    };
    const handleUpdateProvider = async (id, payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.serviceProviders || []).find((p) => p.id === id);
        if (!target?.dbUuid)
            return false;
        try {
            const updated = await (0, supabaseDataService_1.dbUpdateProvider)(targetEmpresaId, target.dbUuid, payload);
            setDb((prev) => ({
                ...prev,
                serviceProviders: (prev.serviceProviders || []).map((p) => p.id === id ? updated : p),
            }));
            scheduleAutoBackup();
            showToast('Prestador atualizado!');
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar prestador.', 'err');
            return false;
        }
    };
    const handleDeleteProvider = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.serviceProviders || []).find((p) => p.id === id);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteProvider)(targetEmpresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                serviceProviders: (prev.serviceProviders || []).filter((p) => p.id !== id),
            }));
            scheduleAutoBackup();
            showToast('Prestador removido!');
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover prestador.', 'err');
        }
    };
    const handleAddPayrollEmployee = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        try {
            const code = (0, storageAdapter_1.getNextPayrollEmployeeId)(dbRef.current);
            const created = await (0, supabaseDataService_1.dbCreatePayrollEmployee)(targetEmpresaId, code, payload);
            setDb((prev) => ({
                ...prev,
                payrollEmployees: [created, ...(prev.payrollEmployees || [])],
            }));
            scheduleAutoBackup();
            showToast(`Funcionário "${created.name}" cadastrado!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao cadastrar funcionário.', 'err');
            return false;
        }
    };
    const handleUpdatePayrollEmployee = async (id, payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.payrollEmployees || []).find((e) => e.id === id);
        if (!target?.dbUuid)
            return false;
        try {
            const updated = await (0, supabaseDataService_1.dbUpdatePayrollEmployee)(targetEmpresaId, target.dbUuid, payload);
            setDb((prev) => ({
                ...prev,
                payrollEmployees: (prev.payrollEmployees || []).map((e) => e.id === id ? updated : e),
            }));
            scheduleAutoBackup();
            showToast('Funcionário atualizado!');
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar funcionário.', 'err');
            return false;
        }
    };
    const handleDeletePayrollEmployee = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.payrollEmployees || []).find((e) => e.id === id);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeletePayrollEmployee)(targetEmpresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                payrollEmployees: (prev.payrollEmployees || []).filter((e) => e.id !== id),
            }));
            scheduleAutoBackup();
            showToast('Funcionário removido!');
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover funcionário.', 'err');
        }
    };
    const handleAddInvestment = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        try {
            const code = (0, storageAdapter_1.getNextInvestmentId)(dbRef.current);
            const created = await (0, supabaseDataService_1.dbCreateInvestment)(targetEmpresaId, code, payload);
            setDb((prev) => ({
                ...prev,
                investments: [created, ...(prev.investments || [])],
            }));
            scheduleAutoBackup();
            showToast(`Investimento "${created.assetName}" adicionado!`);
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao adicionar investimento.', 'err');
            return false;
        }
    };
    const handleUpdateInvestment = async (id, payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return false;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.investments || []).find((inv) => inv.id === id);
        if (!target?.dbUuid)
            return false;
        try {
            const updated = await (0, supabaseDataService_1.dbUpdateInvestment)(targetEmpresaId, target.dbUuid, payload);
            setDb((prev) => ({
                ...prev,
                investments: (prev.investments || []).map((inv) => inv.id === id ? updated : inv),
            }));
            scheduleAutoBackup();
            showToast('Investimento atualizado!');
            return true;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao atualizar investimento.', 'err');
            return false;
        }
    };
    const handleDeleteInvestment = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        const targetEmpresaId = active.empresaId || active.company_id;
        const target = (dbRef.current.investments || []).find((inv) => inv.id === id);
        if (!target?.dbUuid)
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteInvestment)(targetEmpresaId, target.dbUuid);
            setDb((prev) => ({
                ...prev,
                investments: (prev.investments || []).filter((inv) => inv.id !== id),
            }));
            scheduleAutoBackup();
            showToast('Investimento removido!');
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover investimento.', 'err');
        }
    };
    // Seção Notas (Admin & Operador)
    const nextNoteNumber = (0, react_1.useMemo)(() => (0, storageAdapter_1.getNextNoteNumber)(db), [db]);
    const handleSaveNote = async (payload, editingId) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return null;
        try {
            const saved = await (0, supabaseDataService_1.dbSaveNote)(empresaId, active.ownerName, payload, editingId);
            setDb((prev) => {
                const current = prev.notas || [];
                const nextNotas = editingId
                    ? current.map((n) => (n.id === editingId ? saved : n))
                    : [saved, ...current];
                return {
                    ...prev,
                    notas: nextNotas,
                    noteSequence: Math.max(prev.noteSequence || 0, saved.numero),
                };
            });
            scheduleAutoBackup();
            showToast(`Pedido Nº ${(0, NotesSection_1.formatPedidoNumber)(saved.numero)} ${editingId ? 'atualizado' : 'emitido'}!`);
            return saved;
        }
        catch (err) {
            showToast(err?.message || 'Erro ao salvar pedido.', 'err');
            return null;
        }
    };
    const handleMarkNotePrinted = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        try {
            await (0, supabaseDataService_1.dbUpdateNoteStatus)(empresaId, id, 'impressa');
            setDb((prev) => ({
                ...prev,
                notas: (prev.notas || []).map((n) => n.id === id ? { ...n, status: 'impressa' } : n),
            }));
        }
        catch {
            // non-blocking
        }
    };
    const handleDeleteNote = async (id) => {
        const active = sessionRef.current;
        if (!active || active.role === 'cliente')
            return;
        try {
            await (0, supabaseDataService_1.dbSoftDeleteNote)(empresaId, id);
            setDb((prev) => ({
                ...prev,
                notas: (prev.notas || []).filter((n) => n.id !== id),
            }));
            scheduleAutoBackup();
            showToast('Pedido removido!');
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover pedido.', 'err');
        }
    };
    const handleTriggerPrint = (0, react_1.useCallback)((note, emitter) => {
        setPrintJob({ note, emitter });
        if (printTimerRef.current) {
            window.clearTimeout(printTimerRef.current);
        }
        printTimerRef.current = window.setTimeout(() => {
            window.print();
        }, 120);
    }, []);
    // Equipe (Edge Function manage-team - sem service_role no frontend)
    const handleAddEmployee = async (payload) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin') {
            return { error: 'Apenas administradores podem adicionar membros.' };
        }
        try {
            await (0, supabaseDataService_1.invokeManageTeam)({
                action: 'create_member',
                ...payload,
            });
            await hydrateFromSupabase(active);
            showToast(`Funcionário "${payload.ownerName}" cadastrado no Supabase!`);
            return {};
        }
        catch (err) {
            return { error: err?.message || 'Erro ao criar membro.' };
        }
    };
    const handleToggleEmployeeRole = async (memberId, nextRole) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        try {
            await (0, supabaseDataService_1.invokeManageTeam)({
                action: 'update_role',
                memberId,
                role: nextRole,
            });
            setDb((prev) => ({
                ...prev,
                employees: (prev.employees || []).map((e) => e.id === memberId ? { ...e, role: nextRole } : e),
            }));
            showToast(`Permissão alterada para ${nextRole === 'operador' ? 'Operador' : 'Administrador'}!`);
        }
        catch (err) {
            showToast(err?.message || 'Erro ao alterar perfil.', 'err');
        }
    };
    const handleDeleteEmployee = async (memberId) => {
        const active = sessionRef.current;
        if (!active || active.role !== 'admin')
            return;
        try {
            await (0, supabaseDataService_1.invokeManageTeam)({
                action: 'remove_member',
                memberId,
            });
            setDb((prev) => ({
                ...prev,
                employees: (prev.employees || []).filter((e) => e.id !== memberId),
            }));
            showToast('Funcionário removido da equipe!');
        }
        catch (err) {
            showToast(err?.message || 'Erro ao remover funcionário.', 'err');
        }
    };
    const unDismissedAlerts = (0, react_1.useMemo)(() => settingsState.logs.filter((l) => l.status === 'erro' && !l.alerta_dispensado), [settingsState.logs]);
    const counts = (0, react_1.useMemo)(() => ({
        companies: db.companies.length,
        inProduction: db.orders.filter((o) => o.stage !== 'faca_pronta').length,
        overdue: financials.overdueCount,
        deliveries: db.deliveries.length,
        openReturns: db.returns.filter((r) => r.status !== 'liberado').length,
        stock: (db.stock || []).length,
        notas: (db.notas || []).length,
        employees: (db.employees || []).length,
        backupAlerts: unDismissedAlerts.length,
    }), [
        db.companies.length,
        db.orders,
        financials.overdueCount,
        db.deliveries.length,
        db.returns,
        db.stock,
        db.notas,
        db.employees,
        unDismissedAlerts.length,
    ]);
    if (authChecking) {
        return (react_1.default.createElement("div", { className: "min-h-[100dvh] flex flex-col items-center justify-center p-6 text-slate-800 relative" },
            react_1.default.createElement("div", { className: "blob blob-1" }),
            react_1.default.createElement("div", { className: "blob blob-2" }),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] px-8 py-7 flex flex-col items-center gap-3 relative z-10 shadow-xl" },
                react_1.default.createElement(lucide_react_1.Loader2, { className: "w-7 h-7 animate-spin text-indigo-600" }),
                react_1.default.createElement("p", { className: "text-sm font-bold text-slate-900" }, "Conectando ao FacasFlow Supabase..."))));
    }
    if (!session) {
        return (react_1.default.createElement("div", { className: "min-h-[100dvh] relative" },
            react_1.default.createElement("div", { className: "blob blob-1" }),
            react_1.default.createElement("div", { className: "blob blob-2" }),
            react_1.default.createElement("div", { className: "blob blob-3" }),
            react_1.default.createElement("div", { className: "blob blob-4" }),
            react_1.default.createElement("div", { className: "blob blob-5" }),
            react_1.default.createElement("div", { className: "relative z-10" },
                react_1.default.createElement(AuthLoginScreen_1.AuthLoginScreen, { onAuthenticated: handleAuthenticated }))));
    }
    if (session.role === 'cliente') {
        return (react_1.default.createElement("div", { className: "min-h-[100dvh] flex flex-col items-center justify-center p-6 text-slate-800 relative" },
            react_1.default.createElement("div", { className: "blob blob-1" }),
            react_1.default.createElement("div", { className: "blob blob-2" }),
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] max-w-md w-full p-8 text-center space-y-4 relative z-10 shadow-xl" },
                react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-8 h-8 text-amber-600 mx-auto" }),
                react_1.default.createElement("h2", { className: "text-lg font-extrabold text-slate-900" }, "Acesso Restrito ao Painel Interno"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-600 leading-relaxed" },
                    "Seu usu\u00E1rio possui perfil ",
                    react_1.default.createElement("strong", null, "Cliente"),
                    ". Solicite ao administrador da facaria a libera\u00E7\u00E3o para Operador ou Administrador caso precise acessar a esteira."),
                react_1.default.createElement("button", { type: "button", onClick: handleLogout, className: "min-h-[44px] px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition cursor-pointer" }, "Sair da conta"))));
    }
    // Enforce RBAC + Super Admin section access
    const effectiveSection = activeSection === 'configuracoes' && !session.isSuperAdmin
        ? session.role === 'operador'
            ? 'esteira'
            : 'bento_home'
        : session.role === 'operador' &&
            !OPERATOR_ALLOWED_SECTIONS.includes(activeSection)
            ? 'esteira'
            : activeSection;
    const printPages = printJob
        ? (0, NotesSection_1.chunkNoteItems)(printJob.note.items, NotesSection_1.PEDIDO_A5_ROWS)
        : [];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "no-print min-h-[100dvh] text-slate-900 pb-24 relative selection:bg-indigo-500 selection:text-white" },
            react_1.default.createElement("div", { className: "blob blob-1" }),
            react_1.default.createElement("div", { className: "blob blob-2" }),
            react_1.default.createElement("div", { className: "blob blob-3" }),
            react_1.default.createElement("div", { className: "blob blob-4" }),
            react_1.default.createElement("div", { className: "blob blob-5" }),
            react_1.default.createElement("div", { className: "max-w-[1720px] mx-auto flex gap-5 relative p-3 sm:p-5 lg:p-7 min-w-0" },
                react_1.default.createElement(HeaderBar_1.LiquidSidebar, { activeSection: effectiveSection, onSelectSection: handleSelectSection, tenantName: session.companyName, userRole: session.role, isSuperAdmin: Boolean(session.isSuperAdmin), userName: session.ownerName, onLogout: handleLogout, counts: counts }),
                react_1.default.createElement("div", { className: "flex-1 flex flex-col gap-5 min-w-0" },
                    react_1.default.createElement(HeaderBar_1.HeaderBar, { activeSection: effectiveSection, onSelectSection: handleSelectSection, searchQuery: searchQuery, onSearchChange: setSearchQuery, onOpenNewOrder: () => setIsNewModalOpen(true), tenantName: session.companyName, userRole: session.role, isSuperAdmin: Boolean(session.isSuperAdmin), userName: session.ownerName, realtimeStatus: realtimeStatus, onLogout: handleLogout, counts: counts }),
                    react_1.default.createElement("main", { className: "flex-1 flex flex-col gap-5 min-w-0" },
                        session.isSuperAdmin &&
                            unDismissedAlerts.length > 0 &&
                            effectiveSection !== 'configuracoes' && (react_1.default.createElement("div", { className: "rounded-[22px] bg-rose-500/15 border border-rose-500/70 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3" },
                            react_1.default.createElement("div", { className: "flex items-start gap-2.5 min-w-0" },
                                react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-5 h-5 text-rose-700 shrink-0 mt-0.5" }),
                                react_1.default.createElement("div", { className: "text-xs min-w-0" },
                                    react_1.default.createElement("strong", { className: "text-rose-900 block" }, "Aten\u00E7\u00E3o: falha recente detectada no servi\u00E7o de backup"),
                                    react_1.default.createElement("span", { className: "text-rose-800 break-words" }, unDismissedAlerts[0].mensagem))),
                            react_1.default.createElement("button", { type: "button", onClick: () => handleSelectSection('configuracoes'), className: "min-h-[44px] px-4 py-2 rounded-full bg-rose-600 text-white text-xs font-bold inline-flex items-center gap-1.5 shrink-0 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.DatabaseBackup, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Abrir Backups")))),
                        dbError && (react_1.default.createElement("div", { className: "rounded-[24px] bg-rose-500/15 border border-rose-500/70 p-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-rose-900" },
                            react_1.default.createElement("span", null, dbError),
                            react_1.default.createElement("button", { type: "button", onClick: () => hydrateFromSupabase(session), className: "liquid-glass-pill min-h-[44px] px-4 py-2 rounded-full inline-flex items-center gap-1.5 cursor-pointer" },
                                react_1.default.createElement(lucide_react_1.RefreshCw, { className: "w-4 h-4" }),
                                react_1.default.createElement("span", null, "Recarregar")))),
                        dbLoading && db.orders.length === 0 && db.companies.length === 0 ? (react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-10 flex flex-col items-center gap-3 text-xs font-bold text-slate-700" },
                            react_1.default.createElement(lucide_react_1.Loader2, { className: "w-6 h-6 animate-spin text-indigo-600" }),
                            react_1.default.createElement("span", null, "Carregando dados da empresa no Supabase..."))) : null,
                        session.role === 'admin' && effectiveSection === 'bento_home' && (react_1.default.createElement(BentoOverviewSection_1.BentoOverviewSection, { companies: db.companies, orders: db.orders, deliveries: db.deliveries, returns: db.returns, stock: db.stock || [], financials: financials, onNavigate: handleSelectSection, onOpenNewOrder: () => setIsNewModalOpen(true), onSelectCompany: (id) => setSelectedCompanyId(id) })),
                        session.role === 'admin' && effectiveSection === 'empresas' && (react_1.default.createElement(CompaniesCrmSection_1.CompaniesCrmSection, { companies: filteredCompanies, orders: db.orders, selectedCompanyId: selectedCompanyId, onSelectCompany: setSelectedCompanyId, onAddCompany: handleAddCompany, onDeleteCompany: handleDeleteCompany, onDeleteOrder: handleDeleteOrder, onAddDieForCompany: (comp, desc, val, mod) => handleCreateOrderFull({
                                companyId: comp.id,
                                companyName: comp.corporateName,
                                companyPhone: comp.phone,
                                toolDescription: desc,
                                amount: val,
                                paymentModality: mod,
                                stage: 'arquivo_recebido',
                            }) })),
                        effectiveSection === 'esteira' && (react_1.default.createElement(ProductionKanban_1.ProductionKanban, { orders: filteredOrders, userRole: session.role, pendingOrderIds: pendingOrderIds, moveError: moveError, onMoveStage: handleMoveStage, onDeleteOrder: handleDeleteOrder, onQuickRegisterDelivery: handleQuickRegisterDelivery })),
                        session.role === 'admin' && effectiveSection === 'financeiro' && (react_1.default.createElement(FinanceAnalyticsSection_1.FinanceAnalyticsSection, { orders: filteredOrders, financials: financials, despesas: db.despesas || [], canEditDespesas: session.role === 'admin', serviceProviders: db.serviceProviders || [], payrollEmployees: db.payrollEmployees || [], investments: db.investments || [], onTogglePaid: handleTogglePaid, onEmitBilling30d: handleEmitBilling30d, onDeleteOrder: handleDeleteOrder, onCreateExpense: handleCreateExpense, onUpdateExpense: handleUpdateExpense, onDeleteExpense: handleDeleteExpense, onAddProvider: handleAddProvider, onUpdateProvider: handleUpdateProvider, onDeleteProvider: handleDeleteProvider, onAddPayrollEmployee: handleAddPayrollEmployee, onUpdatePayrollEmployee: handleUpdatePayrollEmployee, onDeletePayrollEmployee: handleDeletePayrollEmployee, onAddInvestment: handleAddInvestment, onUpdateInvestment: handleUpdateInvestment, onDeleteInvestment: handleDeleteInvestment })),
                        effectiveSection === 'entregas' && (react_1.default.createElement(DeliveriesLogisticsSection_1.DeliveriesLogisticsSection, { orders: db.orders, deliveries: db.deliveries, prefillOrder: prefillDeliveryOrder, onAddDelivery: handleAddDelivery, onDeleteDelivery: handleDeleteDelivery })),
                        effectiveSection === 'retornos' && (react_1.default.createElement(WarrantyReturnsSection_1.WarrantyReturnsSection, { orders: db.orders, returns: db.returns, onAddReturn: handleAddReturn, onUpdateReturnStatus: handleUpdateReturnStatus, onDeleteReturn: handleDeleteReturn })),
                        effectiveSection === 'estoque' && (react_1.default.createElement(StockSection_1.StockSection, { userRole: session.role, items: db.stock || [], movements: db.stockMovements || [], globalSearchQuery: searchQuery, onAddItem: handleAddStockItem, onUpdateItem: handleUpdateStockItem, onDeleteItem: handleDeleteStockItem, onQuickConsume: handleQuickConsumeStock, onQuickReplenish: handleQuickReplenishStock, onRevertMovement: handleRevertStockMovement })),
                        effectiveSection === 'notas' && (react_1.default.createElement(NotesSection_1.NotesSection, { notas: db.notas || [], companies: db.companies, orders: db.orders, nextNoteNumber: nextNoteNumber, tenantKey: empresaId, currentUserName: session.ownerName, globalSearchQuery: searchQuery, onSaveNote: handleSaveNote, onMarkNotePrinted: handleMarkNotePrinted, onDeleteNote: handleDeleteNote, onTriggerPrint: handleTriggerPrint, onSyncPrintPreview: setPrintJob })),
                        session.role === 'admin' && effectiveSection === 'equipe' && (react_1.default.createElement(TeamManagementSection_1.TeamManagementSection, { session: session, employees: db.employees || [], onAddEmployee: handleAddEmployee, onToggleEmployeeRole: handleToggleEmployeeRole, onDeleteEmployee: handleDeleteEmployee })),
                        session.isSuperAdmin &&
                            effectiveSection === 'configuracoes' && (react_1.default.createElement(SettingsBackupsSection_1.SettingsBackupsSection, { empresaId: empresaId, companyName: session.companyName, settings: settingsState.settings, backups: settingsState.backups, logs: settingsState.logs, loading: settingsState.loading, onRefresh: () => refreshSettingsAndBackups(empresaId, session.isSuperAdmin), onUpdateSettings: async (updates) => {
                                const updated = await (0, supabaseDataService_1.dbUpdateCompanySettings)(empresaId, updates);
                                setSettingsState((prev) => ({
                                    ...prev,
                                    settings: updated,
                                }));
                            }, onDismissAlert: async (logId) => {
                                await (0, supabaseDataService_1.dbDismissBackupAlert)(empresaId, logId);
                                setSettingsState((prev) => ({
                                    ...prev,
                                    logs: prev.logs.map((l) => l.id === logId ? { ...l, alerta_dispensado: true } : l),
                                }));
                            }, onRestored: async () => {
                                await hydrateFromSupabase(session);
                            } }))))),
            toast && (react_1.default.createElement("div", { role: "status", className: `fixed bottom-20 right-4 sm:right-6 z-[75] max-w-[calc(100vw-2rem)] px-4 py-3 rounded-2xl liquid-glass ring-2 ${toast.variant === 'err'
                    ? 'ring-rose-500/70 text-rose-900'
                    : 'ring-indigo-400/50 text-slate-900'} text-xs font-bold shadow-2xl flex items-center gap-2.5` },
                toast.variant === 'err' ? (react_1.default.createElement(lucide_react_1.AlertTriangle, { className: "w-4 h-4 text-rose-600 shrink-0" })) : (react_1.default.createElement(lucide_react_1.CheckCircle2, { className: "w-4 h-4 text-emerald-600 shrink-0" })),
                react_1.default.createElement("span", { className: "break-words" }, toast.message),
                toast.actionLabel && toast.onAction && (react_1.default.createElement("button", { type: "button", onClick: toast.onAction, className: "btn-compact ml-1 px-3 py-1 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-extrabold shadow-sm transition cursor-pointer shrink-0" }, toast.actionLabel)))),
            session.role === 'admin' && (react_1.default.createElement("button", { type: "button", onClick: () => setIsNewModalOpen(true), className: "md:hidden fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-20 min-h-[48px] inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 active:scale-95 text-white border border-white/40 shadow-2xl shadow-indigo-600/40 transition-all cursor-pointer" },
                react_1.default.createElement("span", null, "Nova OS"))),
            session.role === 'admin' && (react_1.default.createElement(FastEntryModal_1.FastEntryModal, { isOpen: isNewModalOpen, onClose: () => setIsNewModalOpen(false), companies: db.companies, nextOrderId: nextOrderId, onSaveOrder: handleCreateOrderFull }))),
        printJob && (react_1.default.createElement("div", { className: "print-only-container" }, printPages.map((chunk, idx) => (react_1.default.createElement(NotesSection_1.PedidoA5Sheet, { key: `print-${printJob.note.id}-${idx}`, note: printJob.note, itemsChunk: chunk, pageIndex: idx, totalPages: printPages.length, emitter: printJob.emitter, isPrintMode: true })))))));
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
