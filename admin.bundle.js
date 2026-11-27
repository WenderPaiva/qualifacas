// FacasFlow Admin/Engineer Console - Isolated Bundle
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
  if (__externalModules[request]) return __externalModules[request];
  const resolvedId = __resolvePath(baseDir, request);
  if (__moduleCache[resolvedId]) return __moduleCache[resolvedId].exports;
  const factory = __moduleFactories[resolvedId];
  if (!factory) {
    throw new Error('Module not found in Admin bundle: ' + request + ' (resolved: ' + resolvedId + ')');
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
exports.MAX_RECENT_FINISHED_ORDERS = exports.RETURN_STATUS_META = exports.DELIVERY_METHOD_META = exports.INVESTMENT_TYPE_META = exports.EXPENSE_STATUS_META = exports.EXPENSE_PAYMENT_META = exports.EXPENSE_CATEGORY_MAP = exports.EXPENSE_CATEGORIES = exports.PAYMENT_MODALITY_META = exports.PRODUCTION_STAGES = void 0;
exports.normalizeExpenseCategory = normalizeExpenseCategory;
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
exports.formatStockInt = formatStockInt;
exports.sanitizeStockIntInput = sanitizeStockIntInput;
exports.resolveMonthPaymentDate = resolveMonthPaymentDate;
exports.getOrderCompletionTimestampMs = getOrderCompletionTimestampMs;
exports.partitionFinishedOrders = partitionFinishedOrders;
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
    { key: 'transportes', label: 'Transportes', colorHex: '#d97706', badgeClass: 'bg-amber-500/15 text-amber-800 border-amber-300/60' },
    { key: 'manutencao', label: 'Manutenção', colorHex: '#8b5cf6', badgeClass: 'bg-violet-500/15 text-violet-800 border-violet-300/60' },
    { key: 'custo_depreciacao', label: 'Custo de Depreciação', colorHex: '#7c3aed', badgeClass: 'bg-purple-500/15 text-purple-800 border-purple-300/60' },
    { key: 'contador', label: 'Contador', colorHex: '#6366f1', badgeClass: 'bg-indigo-500/15 text-indigo-800 border-indigo-300/60' },
    { key: 'marketing', label: 'Marketing', colorHex: '#ec4899', badgeClass: 'bg-pink-500/15 text-pink-800 border-pink-300/60' },
    { key: 'financiamento', label: 'Financiamento', colorHex: '#64748b', badgeClass: 'bg-slate-500/15 text-slate-800 border-slate-300/60' },
    { key: 'laminas', label: 'Lâminas', colorHex: '#14b8a6', badgeClass: 'bg-teal-500/15 text-teal-800 border-teal-300/60' },
    { key: 'madeira', label: 'Madeira', colorHex: '#d97706', badgeClass: 'bg-amber-500/15 text-amber-900 border-amber-300/60' },
    { key: 'seguros', label: 'Seguros', colorHex: '#2563eb', badgeClass: 'bg-blue-500/15 text-blue-800 border-blue-300/60' },
    { key: 'impostos', label: 'Impostos', colorHex: '#dc2626', badgeClass: 'bg-rose-500/15 text-rose-800 border-rose-300/60' },
    { key: 'flow_dashboard', label: 'Flow Dashboard', colorHex: '#4338ca', badgeClass: 'bg-indigo-500/15 text-indigo-900 border-indigo-400/60' },
    { key: 'taxas_bancarias', label: 'Taxas Bancárias', colorHex: '#0f766e', badgeClass: 'bg-teal-500/15 text-teal-900 border-teal-400/60' },
    { key: 'folha_colaboradores', label: 'Folha / Colaboradores', colorHex: '#0284c7', badgeClass: 'bg-sky-500/15 text-sky-900 border-sky-400/60' },
    { key: 'prestadores_servico', label: 'Prestação de Serviços', colorHex: '#0ea5e9', badgeClass: 'bg-cyan-500/15 text-cyan-900 border-cyan-400/60' },
    { key: 'outros', label: 'Outros', colorHex: '#71717a', badgeClass: 'bg-zinc-500/15 text-zinc-800 border-zinc-300/60' },
];
exports.EXPENSE_CATEGORY_MAP = Object.fromEntries(exports.EXPENSE_CATEGORIES.map((c) => [c.key, c]));
function normalizeExpenseCategory(raw) {
    const clean = String(raw || '').trim();
    if (!clean)
        return 'outros';
    const lower = clean.toLowerCase();
    if (lower === 'combustivel' || lower === 'combustível')
        return 'transportes';
    if (lower in exports.EXPENSE_CATEGORY_MAP)
        return lower;
    return 'outros';
}
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
        transportes: 0,
        manutencao: 0,
        custo_depreciacao: 0,
        contador: 0,
        marketing: 0,
        financiamento: 0,
        laminas: 0,
        madeira: 0,
        seguros: 0,
        impostos: 0,
        flow_dashboard: 0,
        taxas_bancarias: 0,
        folha_colaboradores: 0,
        prestadores_servico: 0,
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
        const curCat = normalizeExpenseCategory(exp.categoria);
        const cur = catTotals.get(curCat) || { amount: 0, count: 0 };
        catTotals.set(curCat, {
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
        const normCat = normalizeExpenseCategory(exp.categoria);
        const catLabel = exports.EXPENSE_CATEGORY_MAP[normCat]?.label || exp.categoria;
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
function formatStockInt(val) {
    const num = Number(val);
    if (!Number.isFinite(num))
        return '0';
    return String(Math.max(0, Math.round(num)));
}
function sanitizeStockIntInput(raw) {
    return String(raw ?? '').replace(/\D/g, '');
}
function resolveMonthPaymentDate(yearMonth, day) {
    const cleanYm = /^\d{4}-\d{2}$/.test(String(yearMonth || '').trim())
        ? String(yearMonth).trim()
        : getTodayGoiasISO().slice(0, 7);
    const [yrStr, moStr] = cleanYm.split('-');
    const yr = Number(yrStr) || new Date().getFullYear();
    const mo = Math.min(12, Math.max(1, Number(moStr) || 1));
    const maxDay = new Date(yr, mo, 0).getDate();
    const safeDay = Math.min(maxDay, Math.max(1, Math.round(Number(day) || 1)));
    return `${yr}-${String(mo).padStart(2, '0')}-${String(safeDay).padStart(2, '0')}`;
}
exports.MAX_RECENT_FINISHED_ORDERS = 15;
const STAGE_STAMP_BR_REGEX = /^(\d{2})\/(\d{2})\s+às\s+(\d{2}):(\d{2})$/;
function extractYearMonth(raw) {
    if (!raw)
        return null;
    const trimmed = String(raw).trim();
    const isoMatch = /^(\d{4})-(\d{2})/.exec(trimmed);
    if (isoMatch) {
        const year = Number(isoMatch[1]);
        const month = Number(isoMatch[2]);
        if (Number.isFinite(year) && year > 1970 && month >= 1 && month <= 12) {
            return { year, month };
        }
    }
    const parsed = Date.parse(trimmed);
    if (Number.isFinite(parsed) && parsed > 0) {
        const dt = new Date(parsed);
        return { year: dt.getUTCFullYear(), month: dt.getUTCMonth() + 1 };
    }
    return null;
}
function getOrderCompletionTimestampMs(order) {
    if (order.completedAt) {
        const parsedCompleted = Date.parse(order.completedAt);
        if (Number.isFinite(parsedCompleted) && parsedCompleted > 0) {
            return parsedCompleted;
        }
    }
    const stampCandidates = [];
    if (Array.isArray(order.stageHistory)) {
        for (let i = order.stageHistory.length - 1; i >= 0; i -= 1) {
            const entry = order.stageHistory[i];
            if (entry?.stage === 'faca_pronta' && entry.timestamp) {
                stampCandidates.push(String(entry.timestamp).trim());
                break;
            }
        }
    }
    if (order.stageUpdatedAt) {
        stampCandidates.push(String(order.stageUpdatedAt).trim());
    }
    for (const candidate of stampCandidates) {
        const match = STAGE_STAMP_BR_REGEX.exec(candidate);
        if (match) {
            const day = Number(match[1]);
            const month = Number(match[2]);
            const hour = Number(match[3]);
            const minute = Number(match[4]);
            const createdYm = extractYearMonth(order.createdAt);
            const updatedYm = extractYearMonth(order.updatedAt);
            let year = createdYm?.year ?? updatedYm?.year ?? new Date().getUTCFullYear();
            if (createdYm && month < createdYm.month) {
                year += 1;
            }
            const utcMs = Date.UTC(year, month - 1, day, hour + 3, minute);
            if (Number.isFinite(utcMs) && utcMs > 0) {
                return utcMs;
            }
        }
        else if (/^\d{4}-\d{2}-\d{2}/.test(candidate)) {
            const isoCand = Date.parse(candidate);
            if (Number.isFinite(isoCand) && isoCand > 0) {
                return isoCand;
            }
        }
    }
    const updatedParsed = order.updatedAt ? Date.parse(order.updatedAt) : NaN;
    if (Number.isFinite(updatedParsed) && updatedParsed > 0) {
        return updatedParsed;
    }
    const createdParsed = order.createdAt ? Date.parse(order.createdAt) : NaN;
    if (Number.isFinite(createdParsed) && createdParsed > 0) {
        return createdParsed;
    }
    return 0;
}
function partitionFinishedOrders(orders, limit = exports.MAX_RECENT_FINISHED_ORDERS) {
    const safeLimit = Math.max(0, Math.floor(Number.isFinite(limit) ? limit : exports.MAX_RECENT_FINISHED_ORDERS));
    const finished = orders.filter((o) => o.stage === 'faca_pronta');
    const completionTsMap = new Map();
    for (const order of finished) {
        completionTsMap.set(order, getOrderCompletionTimestampMs(order));
    }
    const sorted = [...finished].sort((a, b) => {
        const completionDiff = (completionTsMap.get(b) ?? 0) - (completionTsMap.get(a) ?? 0);
        if (completionDiff !== 0)
            return completionDiff;
        const createdDiff = (Date.parse(b.createdAt || '') || 0) - (Date.parse(a.createdAt || '') || 0);
        if (createdDiff !== 0)
            return createdDiff;
        const numB = parseInt(String(b.id).replace(/\D/g, ''), 10) || 0;
        const numA = parseInt(String(a.id).replace(/\D/g, ''), 10) || 0;
        return numB - numA;
    });
    return {
        allFinished: sorted,
        recentFinished: sorted.slice(0, safeLimit),
        storedFinished: sorted.slice(safeLimit),
    };
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
                    const woodNum = row.wood_mm != null ? Number(row.wood_mm) : undefined;
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
                            woodMm: woodNum === 15 || woodNum === 18 || woodNum === 22
                                ? woodNum
                                : undefined,
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
                            completedAt: row.concluida_em ? String(row.concluida_em) : undefined,
                            financialNotes: row.observacao_financeira || undefined,
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

__moduleFactories["./admin/AdminSystemPanel"] = Object.assign(
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
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const lucide_react_1 = require("lucide-react");
const storageAdapter_1 = require("../services/storageAdapter");
const realtimeEngine_1 = require("../services/realtimeEngine");
/**
 * Rota restrita a Administradores/Engenheiros.
 * Empacotada separadamente em dist/admin.bundle.js (nunca incluída no bundle do cliente).
 */
const AdminSystemPanel = () => {
    const session = (0, storageAdapter_1.getActiveSession)();
    const [supaConfig, setSupaConfig] = (0, react_1.useState)(() => (0, realtimeEngine_1.getSupabaseConfig)());
    const [savedNotice, setSavedNotice] = (0, react_1.useState)(false);
    const [copiedSql, setCopiedSql] = (0, react_1.useState)(false);
    if (!session || session.role !== 'admin') {
        return (react_1.default.createElement("div", { className: "min-h-screen flex items-center justify-center p-6" },
            react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-8 max-w-md text-center space-y-3" },
                react_1.default.createElement(lucide_react_1.Shield, { className: "w-10 h-10 text-indigo-600 mx-auto" }),
                react_1.default.createElement("h1", { className: "text-lg font-extrabold text-slate-900" }, "Acesso Restrito ao Administrador"),
                react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Esta rota t\u00E9cnica \u00E9 exclusiva para administradores autenticados."),
                react_1.default.createElement("a", { href: "./index.html", className: "inline-block px-5 py-2.5 rounded-full text-xs font-bold bg-indigo-600 text-white" }, "Voltar ao Login"))));
    }
    const handleSave = (e) => {
        e.preventDefault();
        (0, realtimeEngine_1.saveSupabaseConfig)(supaConfig);
        setSavedNotice(true);
        setTimeout(() => setSavedNotice(false), 3000);
    };
    const rlsNote = `-- Utilize apenas a chave anon/publishable no frontend.
-- Aplique supabase/migrations/20261117_security_rls.sql no SQL Editor do Supabase.`;
    return (react_1.default.createElement("div", { className: "min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-6" },
        react_1.default.createElement("div", { className: "liquid-glass rounded-[28px] p-6 space-y-3" },
            react_1.default.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3" },
                react_1.default.createElement("div", { className: "flex items-center gap-2" },
                    react_1.default.createElement("span", { className: "px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-300/60 inline-flex items-center gap-1.5" },
                        react_1.default.createElement(lucide_react_1.Shield, { className: "w-3.5 h-3.5" }),
                        "Painel T\u00E9cnico do Administrador"),
                    react_1.default.createElement("span", { className: "px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-800 border border-emerald-300/60 inline-flex items-center gap-1.5" },
                        react_1.default.createElement(lucide_react_1.Radio, { className: "w-3.5 h-3.5" }),
                        "Realtime & RLS")),
                react_1.default.createElement("a", { href: "./index.html", className: "liquid-glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-800" }, "Voltar ao Dashboard")),
            react_1.default.createElement("h1", { className: "text-xl font-extrabold text-slate-900" }, "Configura\u00E7\u00E3o Supabase Realtime & Seguran\u00E7a"),
            react_1.default.createElement("p", { className: "text-xs font-medium text-slate-700" }, "Configure apenas a URL do projeto e a chave p\u00FAblica anon. Nenhuma service_role key deve ser inserida no frontend.")),
        react_1.default.createElement("form", { onSubmit: handleSave, className: "liquid-glass rounded-[28px] p-6 space-y-4" },
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                react_1.default.createElement("span", { className: "text-sm font-extrabold text-slate-900 flex items-center gap-2" },
                    react_1.default.createElement(lucide_react_1.Database, { className: "w-4 h-4 text-emerald-600" }),
                    "Conex\u00E3o Supabase Anon Key"),
                react_1.default.createElement("label", { className: "inline-flex items-center gap-2 text-xs font-bold text-emerald-800 cursor-pointer" },
                    react_1.default.createElement("input", { type: "checkbox", checked: supaConfig.enabled, onChange: (e) => setSupaConfig({ ...supaConfig, enabled: e.target.checked }), className: "rounded accent-emerald-600 w-4 h-4" }),
                    react_1.default.createElement("span", null, "Habilitar Supabase Cloud"))),
            react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
                react_1.default.createElement("input", { type: "url", value: supaConfig.url, onChange: (e) => setSupaConfig({ ...supaConfig, url: e.target.value }), placeholder: "https://seu-projeto.supabase.co", className: "liquid-glass-pill w-full px-3.5 py-2.5 rounded-2xl text-xs text-slate-900" }),
                react_1.default.createElement("input", { type: "password", value: supaConfig.anonKey, onChange: (e) => setSupaConfig({ ...supaConfig, anonKey: e.target.value }), placeholder: "Supabase Anon / Publishable Key", className: "liquid-glass-pill w-full px-3.5 py-2.5 rounded-2xl text-xs text-slate-900" })),
            react_1.default.createElement("div", { className: "flex items-center justify-between gap-3" },
                react_1.default.createElement("button", { type: "submit", className: "px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer" }, "Salvar Configura\u00E7\u00E3o"),
                savedNotice && (react_1.default.createElement("span", { className: "text-xs font-bold text-emerald-700 inline-flex items-center gap-1" },
                    react_1.default.createElement(lucide_react_1.Check, { className: "w-4 h-4" }),
                    " Configura\u00E7\u00E3o salva com seguran\u00E7a"))),
            react_1.default.createElement("div", { className: "rounded-2xl liquid-glass-subtle p-3.5" },
                react_1.default.createElement("div", { className: "flex items-center justify-between mb-2" },
                    react_1.default.createElement("span", { className: "text-[11px] font-bold text-slate-700" }, "Migra\u00E7\u00E3o RLS obrigat\u00F3ria"),
                    react_1.default.createElement("button", { type: "button", onClick: () => {
                            navigator.clipboard.writeText(rlsNote);
                            setCopiedSql(true);
                            setTimeout(() => setCopiedSql(false), 2000);
                        }, className: "liquid-glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 inline-flex items-center gap-1 cursor-pointer" },
                        react_1.default.createElement(lucide_react_1.Copy, { className: "w-3 h-3" }),
                        react_1.default.createElement("span", null, copiedSql ? 'Copiado' : 'Copiar Nota'))),
                react_1.default.createElement("pre", { className: "text-[11px] font-mono text-slate-800 overflow-x-auto" }, rlsNote)))));
};
const rootEl = document.getElementById('admin-root');
if (rootEl) {
    (0, client_1.createRoot)(rootEl).render(react_1.default.createElement(AdminSystemPanel, null));
}

  },
  { dir: "./admin" }
);

__require('.', './admin/AdminSystemPanel');
