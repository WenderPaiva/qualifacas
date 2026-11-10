import {
  DeliveryMethod,
  DieOrder,
  PaymentModality,
  PaymentStatus,
  ProductionStage,
  ReturnStatus,
} from '../types/order';

export const PRODUCTION_STAGES: {
  id: ProductionStage;
  step: number;
  label: string;
  shortLabel: string;
  subtitle: string;
  accentColor: string;
  dotClass: string;
}[] = [
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

export const PAYMENT_MODALITY_META: Record<
  PaymentModality,
  {
    label: string;
    short: string;
    colorHex: string;
    badgeClass: string;
    defaultDays: number;
  }
> = {
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

export const DELIVERY_METHOD_META: Record<
  DeliveryMethod,
  { label: string; badgeClass: string }
> = {
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

export const RETURN_STATUS_META: Record<
  ReturnStatus,
  { label: string; badgeClass: string; dotClass: string; next?: ReturnStatus }
> = {
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

export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function toISODate(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function nowTimestampBR(date: Date = new Date()): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const h = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${d}/${m} às ${h}:${min}`;
}

export function addDays(baseIso: string, days: number): string {
  const clean = (baseIso || toISODate()).slice(0, 10);
  const [y, m, d] = clean.split('-').map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1, 12, 0, 0);
  dt.setDate(dt.getDate() + days);
  return toISODate(dt);
}

export function formatDateBR(isoDate?: string): string {
  if (!isoDate) return '—';
  const clean = isoDate.slice(0, 10);
  const parts = clean.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function getDaysDiff(dueDate: string, refIso?: string): number {
  const today = (refIso || toISODate()).slice(0, 10);
  const due = (dueDate || today).slice(0, 10);
  const [ty, tm, td] = today.split('-').map(Number);
  const [dy, dm, dd] = due.split('-').map(Number);
  const tDate = new Date(ty, tm - 1, td, 12, 0, 0);
  const dDate = new Date(dy, dm - 1, dd, 12, 0, 0);
  return Math.round((dDate.getTime() - tDate.getTime()) / 86400000);
}

export function getNextStage(current: ProductionStage): ProductionStage | null {
  const idx = PRODUCTION_STAGES.findIndex((s) => s.id === current);
  if (idx === -1 || idx >= PRODUCTION_STAGES.length - 1) return null;
  return PRODUCTION_STAGES[idx + 1].id;
}

export function getPrevStage(current: ProductionStage): ProductionStage | null {
  const idx = PRODUCTION_STAGES.findIndex((s) => s.id === current);
  if (idx <= 0) return null;
  return PRODUCTION_STAGES[idx - 1].id;
}

export function normalizeOrderPaymentStatus(order: DieOrder): DieOrder {
  if (order.paymentModality === 'cortesia') {
    return { ...order, paymentStatus: 'cortesia' };
  }
  if (order.paymentStatus === 'pago' || order.paymentStatus === 'sem_nota') {
    return order;
  }
  const diff = getDaysDiff(order.dueDate);
  const nextStatus: PaymentStatus = diff < 0 ? 'vencido' : 'a_receber';
  if (nextStatus === order.paymentStatus) return order;
  return { ...order, paymentStatus: nextStatus };
}

export interface FinancialBreakdown {
  receivable30d: number;
  receivableCount: number;
  overdueTotal: number;
  overdueCount: number;
  unbilledTotal: number;
  unbilledCount: number;
  paidTotal: number;
  paidCount: number;
  totalVolume: number;
  byModality: {
    modality: PaymentModality;
    label: string;
    colorHex: string;
    totalAmount: number;
    count: number;
    percentage: number;
  }[];
}

export function computeFinancialBreakdown(orders: DieOrder[]): FinancialBreakdown {
  let receivable30d = 0;
  let receivableCount = 0;
  let overdueTotal = 0;
  let overdueCount = 0;
  let unbilledTotal = 0;
  let unbilledCount = 0;
  let paidTotal = 0;
  let paidCount = 0;
  let totalVolume = 0;

  const modalityTotals: Record<PaymentModality, { amount: number; count: number }> = {
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
  const byModality = (Object.keys(PAYMENT_MODALITY_META) as PaymentModality[]).map((mod) => {
    const meta = PAYMENT_MODALITY_META[mod];
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

export function buildPixClipboardSnippet(order: DieOrder): string {
  return (
    `QUALIFACAS CORTE E VINCO - ${order.id}\n` +
    `Empresa: ${order.companyName}\n` +
    `Ferramenta: ${order.toolDescription}\n` +
    `Valor: ${formatBRL(order.amount)} (${PAYMENT_MODALITY_META[order.paymentModality]?.short})\n` +
    `Vencimento: ${formatDateBR(order.dueDate)}\n` +
    `Chave PIX (CNPJ): 14.528.910/0001-42`
  );
}

export function buildWhatsAppBillingUrl(order: DieOrder): string {
  const digits = (order.companyPhone || '11999990000').replace(/\D/g, '');
  const phone = digits.startsWith('55') ? digits : `55${digits}`;
  const valor = formatBRL(order.amount);
  const venc = formatDateBR(order.dueDate);
  const mod = PAYMENT_MODALITY_META[order.paymentModality]?.label || '';

  let msg = '';
  if (order.paymentStatus === 'vencido') {
    msg =
      `Olá, pessoal da *${order.companyName}*, tudo bem?\n\n` +
      `Consta em aberto no nosso sistema a *${order.id} (${order.toolDescription})*, no valor de *${valor}* (vencimento em ${venc}).\n\n` +
      `Para pagamento via PIX, nossa chave CNPJ é: *14.528.910/0001-42*.\n` +
      `Caso já tenham efetuado a baixa, por gentileza desconsiderem. Obrigado!`;
  } else if (order.paymentStatus === 'sem_nota') {
    msg =
      `Olá, pessoal da *${order.companyName}*!\n\n` +
      `Referente à faca entregue *${order.id} - ${order.toolDescription}* (*${valor}*), estamos gerando o fechamento financeiro.\n\n` +
      `Confirmam o faturamento na modalidade *${mod}* ou preferem PIX (*14.528.910/0001-42*)? Obrigado!`;
  } else {
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
