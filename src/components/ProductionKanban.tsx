import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Truck,
} from 'lucide-react';
import { DieOrder, ProductionStage } from '../types/order';
import {
  formatBRL,
  getNextStage,
  getPrevStage,
  PAYMENT_MODALITY_META,
  PRODUCTION_STAGES,
} from '../utils/financeEngine';

interface ProductionKanbanProps {
  orders: DieOrder[];
  onMoveStage: (orderId: string, targetStage: ProductionStage) => void;
  onQuickRegisterDelivery: (order: DieOrder) => void;
}

export const ProductionKanban: React.FC<ProductionKanbanProps> = ({
  orders,
  onMoveStage,
  onQuickRegisterDelivery,
}) => {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverStage, setDragOverStage] = useState<ProductionStage | null>(null);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Seção 2 • Esteira Física de Produção
          </h2>
          <p className="text-xs text-zinc-400">
            Arraste os cartões ou clique em avançar. Cada mudança grava automaticamente a data e hora exata da etapa.
          </p>
        </div>
      </div>

      {/* 6-Column Bento Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 items-start">
        {PRODUCTION_STAGES.map((stage) => {
          const colOrders = orders.filter((o) => o.stage === stage.id);
          const colTotal = colOrders.reduce((acc, o) => acc + (o.amount || 0), 0);
          const isOver = dragOverStage === stage.id;

          return (
            <div
              key={stage.id}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverStage(stage.id);
              }}
              onDragLeave={() => setDragOverStage(null)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOverStage(null);
                if (draggedId) {
                  onMoveStage(draggedId, stage.id);
                  setDraggedId(null);
                }
              }}
              className={`rounded-3xl p-4 border transition-all min-h-[480px] flex flex-col gap-3 ${
                isOver
                  ? 'bg-rose-950/30 border-rose-600'
                  : `bg-zinc-900/85 ${stage.accentColor}`
              }`}
            >
              {/* Column Header */}
              <div className="pb-3 border-b border-zinc-800/80">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${stage.dotClass}`} />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      Etapa {stage.step}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-extrabold bg-zinc-950 text-slate-100 border border-zinc-800">
                    {colOrders.length}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-50 mt-1">{stage.label}</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">{stage.subtitle}</p>
                <div className="mt-2 pt-2 border-t border-zinc-800/40 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-400">Volume:</span>
                  <span className="font-bold text-emerald-400">{formatBRL(colTotal)}</span>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-3 flex-1">
                {colOrders.length === 0 ? (
                  <div className="h-32 rounded-2xl border border-dashed border-zinc-800/80 flex items-center justify-center text-xs text-zinc-600 text-center px-2">
                    Sem facas em {stage.label}
                  </div>
                ) : (
                  colOrders.map((order) => {
                    const prevStage = getPrevStage(order.stage);
                    const nextStage = getNextStage(order.stage);
                    const modMeta = PAYMENT_MODALITY_META[order.paymentModality];

                    return (
                      <div
                        key={order.id}
                        draggable
                        onDragStart={() => setDraggedId(order.id)}
                        onDragEnd={() => {
                          setDraggedId(null);
                          setDragOverStage(null);
                        }}
                        className="rounded-2xl p-3.5 bg-zinc-950/90 border border-zinc-800/90 hover:border-rose-700/60 transition-all shadow-md cursor-grab active:cursor-grabbing flex flex-col gap-2.5"
                      >
                        {/* Top OS + Payment Modality */}
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-[11px] font-bold text-rose-300">
                            {order.id}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${modMeta?.badgeClass}`}
                          >
                            {modMeta?.short}
                          </span>
                        </div>

                        {/* Company & Tool Description */}
                        <div>
                          <span className="text-[11px] font-semibold text-zinc-400 block truncate">
                            {order.companyName}
                          </span>
                          <h4 className="text-xs font-bold text-slate-100 leading-snug mt-0.5">
                            {order.toolDescription}
                          </h4>
                        </div>

                        {/* Timestamp of Stage Alteration */}
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 bg-zinc-900/90 px-2.5 py-1.5 rounded-xl border border-zinc-800/70">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-rose-400 shrink-0" />
                            <span>{order.stageUpdatedAt}</span>
                          </span>
                          <span className="font-mono font-bold text-emerald-400">
                            {formatBRL(order.amount)}
                          </span>
                        </div>

                        {/* Stage Move Controls */}
                        <div className="flex items-center gap-1.5 pt-1">
                          {prevStage && (
                            <button
                              type="button"
                              onClick={() => onMoveStage(order.id, prevStage)}
                              className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-slate-200 border border-zinc-800 transition cursor-pointer"
                              title="Voltar etapa anterior"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {nextStage ? (
                            <button
                              type="button"
                              onClick={() => onMoveStage(order.id, nextStage)}
                              className="flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold bg-rose-900/80 hover:bg-rose-700 text-slate-50 border border-rose-700/50 flex items-center justify-center gap-1 transition cursor-pointer"
                            >
                              <span>Avançar Etapa</span>
                              <ArrowRight className="w-3 h-3 stroke-[2.2]" />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => onQuickRegisterDelivery(order)}
                              className="flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 flex items-center justify-center gap-1.5 transition cursor-pointer"
                            >
                              <Truck className="w-3.5 h-3.5" />
                              <span>Despachar / Saída</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
