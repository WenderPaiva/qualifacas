import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ShieldAlert,
  Trash2,
  Wrench,
} from 'lucide-react';
import { DieOrder, ReturnStatus, WarrantyReturnRecord } from '../types/order';
import {
  formatBRL,
  nowTimestampBR,
  RETURN_STATUS_META,
  toISODate,
} from '../utils/financeEngine';

interface WarrantyReturnsSectionProps {
  orders: DieOrder[];
  returns: WarrantyReturnRecord[];
  onAddReturn: (record: Omit<WarrantyReturnRecord, 'id'>) => void;
  onUpdateReturnStatus: (id: string, nextStatus: ReturnStatus) => void;
  onDeleteReturn: (returnId: string) => void;
}

const COMMON_REASONS = [
  'Ajuste de altura de vinco',
  'Lâmina fora de esquadro / destempero',
  'Erro de medida enviado pelo cliente',
  'Substituição de borracha ejetora',
  'Inclusão de furo / trava adicional',
];

export const WarrantyReturnsSection: React.FC<WarrantyReturnsSectionProps> = ({
  orders,
  returns,
  onAddReturn,
  onUpdateReturnStatus,
  onDeleteReturn,
}) => {
  const [selectedOrderId, setSelectedOrderId] = useState(orders[0]?.id || '');
  const [reason, setReason] = useState('');
  const [technicalAction, setTechnicalAction] = useState('');
  const [adjustmentAmount, setAdjustmentAmount] = useState('0');
  const [status, setStatus] = useState<ReturnStatus>('em_analise');

  const selectedOrder = orders.find((o) => o.id === selectedOrderId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder || !reason.trim() || !technicalAction.trim()) return;

    const val = parseFloat(adjustmentAmount.replace(',', '.')) || 0;
    onAddReturn({
      orderId: selectedOrder.id,
      companyName: selectedOrder.companyName,
      toolDescription: selectedOrder.toolDescription,
      reason: reason.trim(),
      technicalAction: technicalAction.trim(),
      adjustmentAmount: val,
      status,
      createdAt: `${toISODate()}`,
      updatedAt: nowTimestampBR(),
    });

    setReason('');
    setTechnicalAction('');
    setAdjustmentAmount('0');
    setStatus('em_analise');
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-slate-50 tracking-tight">
          Seção 5 • Retornos e Ajustes
        </h2>
        <p className="text-xs text-zinc-400">
          Controle técnico de facas que retornaram para ajuste de vinco, reparo de lâmina ou modificação solicitada pelo cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Bento Card: Register Return / Adjustment (5 Cols) */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4"
        >
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800">
            <div className="w-9 h-9 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-50">
                Registrar Retorno / Ajuste de Faca
              </h3>
              <p className="text-[11px] text-zinc-400">
                Documente o motivo, o serviço executado e eventual custo adicional
              </p>
            </div>
          </div>

          {/* 1. OS Original & Cliente */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              1. OS Original & Empresa Cliente
            </label>
            <select
              value={selectedOrderId}
              onChange={(e) => setSelectedOrderId(e.target.value)}
              className={inputClass}
            >
              {orders.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.id} — {o.companyName} ({o.toolDescription})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Motivo do Retorno */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              2. Motivo do Retorno *
            </label>
            <input
              type="text"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Ex: Ajuste de vinco, Lâmina fora de esquadro, Erro de medida..."
              className={inputClass}
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {COMMON_REASONS.map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setReason(r)}
                  className="text-[10px] px-2.5 py-1 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-slate-200 border border-zinc-800 transition cursor-pointer"
                >
                  + {r}
                </button>
              ))}
            </div>
          </div>

          {/* 3. O que foi feito e ajustado */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              3. O que foi feito e ajustado (Descrição Técnica do Reparo) *
            </label>
            <textarea
              rows={3}
              required
              value={technicalAction}
              onChange={(e) => setTechnicalAction(e.target.value)}
              placeholder="Descreva a troca de lâmina, calibragem de altura, borracha ejetora ou abertura de rasgo..."
              className={inputClass}
            />
          </div>

          {/* 4. Novo Valor do Ajuste & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                4. Novo Valor do Ajuste (R$)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={adjustmentAmount}
                onChange={(e) => setAdjustmentAmount(e.target.value)}
                placeholder="0,00 (Garantia)"
                className={`${inputClass} font-mono font-bold`}
              />
              <span className="text-[10px] text-zinc-500 mt-0.5 block">
                Use R$ 0,00 caso seja ajuste em garantia sem custo
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                5. Status do Retorno
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ReturnStatus)}
                className={inputClass}
              >
                {Object.entries(RETURN_STATUS_META).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>Registrar Ocorrência de Retorno</span>
          </button>
        </form>

        {/* Right Bento Card: Returns & Warranty History (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h3 className="text-sm font-bold text-slate-50">
                Facas em Retorno / Histórico de Ajustes ({returns.length})
              </h3>
              <p className="text-xs text-zinc-400">
                Acompanhe o diagnóstico técnico e libere novamente para o cliente
              </p>
            </div>
            <ShieldAlert className="w-5 h-5 text-amber-400" />
          </div>

          <div className="space-y-3.5">
            {returns.length === 0 ? (
              <div className="p-10 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                Nenhum retorno ou ajuste registrado ainda.
              </div>
            ) : (
              returns.map((ret) => {
                const stMeta = RETURN_STATUS_META[ret.status];
                return (
                  <div
                    key={ret.id}
                    className="p-5 rounded-3xl bg-zinc-950/85 border border-zinc-800/90 space-y-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300">
                            {ret.orderId}
                          </span>
                          <span className="text-xs font-bold text-slate-100">
                            {ret.companyName}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border flex items-center gap-1.5 ${stMeta.badgeClass}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${stMeta.dotClass}`} />
                            {stMeta.label}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">{ret.toolDescription}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-right font-mono">
                          <span
                            className={`text-sm font-extrabold block ${
                              ret.adjustmentAmount === 0
                                ? 'text-emerald-400'
                                : 'text-amber-400'
                            }`}
                          >
                            {ret.adjustmentAmount === 0
                              ? 'R$ 0,00 (Garantia)'
                              : `Ajuste: ${formatBRL(ret.adjustmentAmount)}`}
                          </span>
                          <span className="text-[10px] text-zinc-500">
                            Atualizado: {ret.updatedAt}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onDeleteReturn(ret.id)}
                          className="p-2 rounded-2xl bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer"
                          title="Apagar registro de retorno"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Motivo + O que foi feito */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
                        <span className="text-[10px] font-bold uppercase text-rose-400 block mb-0.5">
                          Motivo do Retorno:
                        </span>
                        <p className="text-slate-200">{ret.reason}</p>
                      </div>

                      <div className="p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800/80">
                        <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-0.5">
                          O que foi feito e ajustado:
                        </span>
                        <p className="text-slate-200">{ret.technicalAction}</p>
                      </div>
                    </div>

                    {/* Inline Status Advance */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        {(['em_analise', 'em_ajuste', 'liberado'] as ReturnStatus[]).map(
                          (st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => onUpdateReturnStatus(ret.id, st)}
                              className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border transition cursor-pointer ${
                                ret.status === st
                                  ? 'bg-rose-800 text-white border-rose-600'
                                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'
                              }`}
                            >
                              {RETURN_STATUS_META[st].label}
                            </button>
                          )
                        )}
                      </div>

                      {stMeta.next && (
                        <button
                          type="button"
                          onClick={() => onUpdateReturnStatus(ret.id, stMeta.next!)}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 flex items-center gap-1 transition cursor-pointer"
                        >
                          <span>Avançar p/ {RETURN_STATUS_META[stMeta.next].label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
