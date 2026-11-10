import React, { useState } from 'react';
import {
  AlertCircle,
  CalendarClock,
  Check,
  Copy,
  FileWarning,
  MessageCircle,
  PieChart,
  RotateCcw,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { DieOrder, PaymentStatus } from '../types/order';
import {
  buildPixClipboardSnippet,
  buildWhatsAppBillingUrl,
  FinancialBreakdown,
  formatBRL,
  formatDateBR,
  getDaysDiff,
  PAYMENT_MODALITY_META,
} from '../utils/financeEngine';

interface FinanceAnalyticsSectionProps {
  orders: DieOrder[];
  financials: FinancialBreakdown;
  onTogglePaid: (orderId: string) => void;
  onEmitBilling30d: (orderId: string) => void;
  onDeleteOrder: (orderId: string) => void;
}

export const FinanceAnalyticsSection: React.FC<FinanceAnalyticsSectionProps> = ({
  orders,
  financials,
  onTogglePaid,
  onEmitBilling30d,
  onDeleteOrder,
}) => {
  const [statusFilter, setStatusFilter] = useState<PaymentStatus | 'todos'>('todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hoveredModality, setHoveredModality] = useState<string | null>(null);

  const filteredOrders = orders.filter((o) => {
    if (statusFilter === 'todos') return true;
    return o.paymentStatus === statusFilter;
  });

  const handleCopyPix = async (order: DieOrder) => {
    const text = buildPixClipboardSnippet(order);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
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

  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-50 tracking-tight">
          Seção 3 • Finanças & Formas de Pagamento
        </h2>
        <p className="text-xs text-zinc-400">
          Controle rigoroso do ciclo de 30 dias, análise por modalidade e cobrança imediata em 1 clique.
        </p>
      </div>

      {/* 1. MÉTRICAS SUPERIORES (3 CARDS BENTO VITAIS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Total a Receber */}
        <button
          type="button"
          onClick={() =>
            setStatusFilter(statusFilter === 'a_receber' ? 'todos' : 'a_receber')
          }
          className={`rounded-3xl p-6 text-left border transition cursor-pointer ${
            statusFilter === 'a_receber'
              ? 'bg-zinc-900 border-emerald-500/60 ring-1 ring-emerald-500/30'
              : 'bg-zinc-900/90 border-zinc-800/90 hover:border-zinc-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">
              1. Total a Receber (30/60 dias)
            </span>
            <span className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <CalendarClock className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-emerald-400 tracking-tight mt-3">
            {formatBRL(financials.receivable30d)}
          </p>
          <span className="text-xs text-zinc-400 mt-1 block">
            {financials.receivableCount} faturas programadas • Caixa já quitado:{' '}
            <strong className="text-slate-200">{formatBRL(financials.paidTotal)}</strong>
          </span>
        </button>

        {/* Card 2: Faturamentos Vencidos */}
        <button
          type="button"
          onClick={() =>
            setStatusFilter(statusFilter === 'vencido' ? 'todos' : 'vencido')
          }
          className={`rounded-3xl p-6 text-left border transition cursor-pointer ${
            statusFilter === 'vencido'
              ? 'bg-zinc-900 border-rose-500/70 ring-1 ring-rose-500/40'
              : 'bg-gradient-to-br from-rose-950/40 via-zinc-900 to-zinc-900 border-rose-800/50 hover:border-rose-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              2. Faturamentos Vencidos (Atenção)
            </span>
            <span className="p-2 rounded-2xl bg-rose-500/15 text-rose-400">
              <AlertCircle className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-rose-500 tracking-tight mt-3">
            {formatBRL(financials.overdueTotal)}
          </p>
          <span className="text-xs text-zinc-400 mt-1 block">
            {financials.overdueCount} título(s) parado(s) na rua aguardando cobrança
          </span>
        </button>

        {/* Card 3: Vazamentos (Entregues s/ Nota) */}
        <button
          type="button"
          onClick={() =>
            setStatusFilter(statusFilter === 'sem_nota' ? 'todos' : 'sem_nota')
          }
          className={`rounded-3xl p-6 text-left border transition cursor-pointer ${
            statusFilter === 'sem_nota'
              ? 'bg-zinc-900 border-amber-500/60 ring-1 ring-amber-500/30'
              : 'bg-zinc-900/90 border-zinc-800/90 hover:border-zinc-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-300">
              3. Vazamentos (Entregues s/ Nota)
            </span>
            <span className="p-2 rounded-2xl bg-amber-500/15 text-amber-400">
              <FileWarning className="w-4 h-4" />
            </span>
          </div>
          <p className="text-3xl font-extrabold text-amber-400 tracking-tight mt-3">
            {formatBRL(financials.unbilledTotal)}
          </p>
          <span className="text-xs text-zinc-400 mt-1 block">
            {financials.unbilledCount} faca(s) entregue(s) sem cobrança gerada
          </span>
        </button>
      </div>

      {/* 2. GRÁFICO DE FORMAS DE PAGAMENTO (ROSCA + BARRA ANALÍTICA BENTO) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Donut Chart Bento Card (5 Cols) */}
        <div className="lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                Distribuição por Modalidade
              </span>
              <h3 className="text-base font-bold text-slate-50 mt-0.5">
                Gráfico de Rosca (Volume R$)
              </h3>
            </div>
            <PieChart className="w-5 h-5 text-rose-400" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6 my-4">
            {/* SVG Donut Ring */}
            <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
              <svg className="w-44 h-44 -rotate-90" viewBox="0 0 180 180">
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="transparent"
                  stroke="#27272a"
                  strokeWidth="20"
                />
                {donutSegments.map((seg) => (
                  <circle
                    key={seg.modality}
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="transparent"
                    stroke={seg.colorHex}
                    strokeWidth={hoveredModality === seg.modality ? '24' : '20'}
                    strokeDasharray={seg.strokeDasharray}
                    strokeDashoffset={seg.strokeDashoffset}
                    strokeLinecap="butt"
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredModality(seg.modality)}
                    onMouseLeave={() => setHoveredModality(null)}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                  Volume Total
                </span>
                <span className="text-sm font-extrabold text-slate-50 font-mono mt-0.5">
                  {formatBRL(financials.totalVolume)}
                </span>
                <span className="text-[10px] text-rose-400 font-semibold mt-0.5">
                  {orders.length} OS
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2.5 w-full sm:w-auto">
              {financials.byModality.map((item) => (
                <div
                  key={item.modality}
                  onMouseEnter={() => setHoveredModality(item.modality)}
                  onMouseLeave={() => setHoveredModality(null)}
                  className="flex items-center justify-between gap-4 text-xs cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-md shrink-0"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <span className="text-zinc-300 font-medium">{item.label}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-100">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart & Volume/Count Breakdown Bento Card (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
              Comparativo Financeiro & Quantidade de Pedidos
            </span>
            <h3 className="text-base font-bold text-slate-50 mt-0.5">
              Volume por Forma de Pagamento (PIX, A Prazo 30/60d, Dinheiro, Cartão, Cortesia)
            </h3>
          </div>

          <div className="space-y-3.5 mt-4">
            {financials.byModality.map((item) => (
              <div key={item.modality} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <span className="font-bold text-slate-100">{item.label}</span>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-semibold">
                      {item.count} {item.count === 1 ? 'pedido' : 'pedidos'}
                    </span>
                  </div>
                  <div className="font-mono">
                    <span className="font-extrabold text-slate-100">
                      {formatBRL(item.totalAmount)}
                    </span>
                    <span className="text-zinc-500 ml-2 text-[11px]">
                      ({item.percentage}%)
                    </span>
                  </div>
                </div>

                <div className="w-full h-3 rounded-full bg-zinc-950 overflow-hidden p-0.5 border border-zinc-800/80">
                  <div
                    style={{
                      width: `${Math.max(item.count > 0 ? 6 : 0, item.percentage)}%`,
                      backgroundColor: item.colorHex,
                    }}
                    className="h-full rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. TABELA DE RECEBIMENTO / AGING (1-CLICK INLINE ACTIONS) */}
      <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden">
        <div className="p-5 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'todos', label: 'Todos' },
                { id: 'a_receber', label: 'A Receber (30/60d)' },
                { id: 'vencido', label: 'Vencidos' },
                { id: 'sem_nota', label: 'Entregues s/ Nota' },
                { id: 'pago', label: 'Pagos' },
                { id: 'cortesia', label: 'Cortesia / Não Paga' },
              ] as const
            ).map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setStatusFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-semibold transition cursor-pointer ${
                  statusFilter === pill.id
                    ? 'bg-rose-800 text-white shadow-sm'
                    : 'bg-zinc-950/70 text-zinc-400 hover:text-slate-100 border border-zinc-800'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-zinc-400 font-mono">
            {filteredOrders.length} registro(s)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-zinc-500 border-b border-zinc-800/80 bg-zinc-950/40">
                <th className="py-3.5 px-5">OS / Empresa</th>
                <th className="py-3.5 px-4">Ferramenta (Faca)</th>
                <th className="py-3.5 px-4">Modalidade</th>
                <th className="py-3.5 px-4">Vencimento / Status</th>
                <th className="py-3.5 px-4 text-right">Valor</th>
                <th className="py-3.5 px-5 text-right">Ações 1-Clique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50 text-xs">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500">
                    Nenhum lançamento financeiro registrado ainda.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => {
                const modMeta = PAYMENT_MODALITY_META[order.paymentModality];
                const daysDiff = getDaysDiff(order.dueDate);
                const isCopied = copiedId === order.id;

                return (
                  <tr
                    key={order.id}
                    className="hover:bg-zinc-800/40 transition-colors"
                  >
                    <td className="py-4 px-5 whitespace-nowrap">
                      <span className="font-mono font-bold text-rose-400 block">
                        {order.id}
                      </span>
                      <span className="font-semibold text-slate-100">
                        {order.companyName}
                      </span>
                    </td>

                    <td className="py-4 px-4 max-w-xs">
                      <span className="text-slate-200 font-medium block truncate">
                        {order.toolDescription}
                      </span>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${modMeta?.badgeClass}`}
                      >
                        [{modMeta?.label}]
                      </span>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      {order.paymentStatus === 'pago' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Liquidado ({formatDateBR(order.paidAt || order.dueDate)})
                        </span>
                      ) : order.paymentStatus === 'cortesia' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-400">
                          Cortesia / Sem Cobrança
                        </span>
                      ) : order.paymentStatus === 'sem_nota' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          Entregue s/ Nota
                        </span>
                      ) : order.paymentStatus === 'vencido' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-500/20 text-rose-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                          Vencido há {Math.abs(daysDiff)}d ({formatDateBR(order.dueDate)})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Vence em {daysDiff}d ({formatDateBR(order.dueDate)})
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-right whitespace-nowrap font-mono text-sm font-extrabold text-slate-100">
                      {formatBRL(order.amount)}
                    </td>

                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center justify-end gap-1.5">
                        {/* 1. Copiar Pix / Dados */}
                        <button
                          type="button"
                          onClick={() => handleCopyPix(order)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                              : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copiado</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Pix</span>
                            </>
                          )}
                        </button>

                        {/* 2. Cobrar no WhatsApp */}
                        <a
                          href={buildWhatsAppBillingUrl(order)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-950 hover:bg-emerald-950/60 text-slate-200 border border-zinc-800 hover:border-emerald-600/50 flex items-center gap-1.5 transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Cobrar no WhatsApp</span>
                        </a>

                        {/* 3. Emitir 30d ou Dar Baixa */}
                        {order.paymentStatus === 'sem_nota' ? (
                          <button
                            type="button"
                            onClick={() => onEmitBilling30d(order.id)}
                            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-zinc-950 border border-amber-500/30 flex items-center gap-1 transition cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Gerar 30d</span>
                          </button>
                        ) : order.paymentStatus !== 'cortesia' ? (
                          <button
                            type="button"
                            onClick={() => onTogglePaid(order.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer ${
                              order.paymentStatus === 'pago'
                                ? 'bg-zinc-800 text-zinc-400 hover:text-slate-200'
                                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                            }`}
                          >
                            {order.paymentStatus === 'pago' ? (
                              <>
                                <RotateCcw className="w-3 h-3" />
                                <span>Reabrir</span>
                              </>
                            ) : (
                              <>
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                <span>Marcar Pago</span>
                              </>
                            )}
                          </button>
                        ) : null}

                        {/* 4. Apagar OS */}
                        <button
                          type="button"
                          onClick={() => onDeleteOrder(order.id)}
                          className="p-1.5 rounded-xl bg-zinc-950 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer"
                          title="Apagar esta OS"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
