import React, { useEffect, useState } from 'react';
import {
  Check,
  Clock,
  MapPin,
  PackageCheck,
  Trash2,
  Truck,
  UserCheck,
} from 'lucide-react';
import { DeliveryMethod, DeliveryRecord, DieOrder } from '../types/order';
import { DELIVERY_METHOD_META, toISODate } from '../utils/financeEngine';

interface DeliveriesLogisticsSectionProps {
  orders: DieOrder[];
  deliveries: DeliveryRecord[];
  prefillOrder?: DieOrder | null;
  onAddDelivery: (delivery: Omit<DeliveryRecord, 'id'>) => void;
  onDeleteDelivery: (deliveryId: string) => void;
}

export const DeliveriesLogisticsSection: React.FC<DeliveriesLogisticsSectionProps> = ({
  orders,
  deliveries,
  prefillOrder,
  onAddDelivery,
  onDeleteDelivery,
}) => {
  const [selectedOrderId, setSelectedOrderId] = useState(
    prefillOrder?.id || orders[0]?.id || ''
  );
  const [method, setMethod] = useState<DeliveryMethod>('uber_flash');
  const [carrierName, setCarrierName] = useState('');
  const [dispatchedDate, setDispatchedDate] = useState(() => toISODate());
  const [dispatchedTime, setDispatchedTime] = useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;
  });
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (prefillOrder) {
      setSelectedOrderId(prefillOrder.id);
    }
  }, [prefillOrder]);

  const selectedOrder = orders.find((o) => o.id === selectedOrderId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder || !carrierName.trim()) return;

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

  const inputClass =
    'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-slate-50 tracking-tight">
          Seção 4 • Entregas e Logísticas de Saída
        </h2>
        <p className="text-xs text-zinc-400">
          Protocolo digital de saída: rastreie exatamente quem retirou ou despachou cada ferramenta com data e hora exatas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Bento Card: Register New Dispatch (5 Cols) */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-5 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4"
        >
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-800">
            <div className="w-9 h-9 rounded-2xl bg-rose-900/50 border border-rose-700/40 flex items-center justify-center text-rose-400">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-50">
                Registrar Saída / Retirada de Faca
              </h3>
              <p className="text-[11px] text-zinc-400">
                Marca automaticamente a OS como "Faca Pronta"
              </p>
            </div>
          </div>

          {/* 1. Selecionar OS / Cliente */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              1. Ordem de Serviço (OS & Cliente)
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

          {/* 2. Responsável pela Retirada (4 Modalidades) */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              2. Modalidade / Responsável pela Retirada
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(DELIVERY_METHOD_META) as DeliveryMethod[]).map((m) => {
                const meta = DELIVERY_METHOD_META[m];
                const active = method === m;
                return (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setMethod(m)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-semibold border text-left transition cursor-pointer ${
                      active
                        ? 'bg-rose-800 text-white border-rose-600 shadow-sm'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-slate-200'
                    }`}
                  >
                    [{meta.label}]
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Nome do Motorista / Portador */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              3. Nome do Motorista / Portador / Placa *
            </label>
            <input
              type="text"
              required
              value={carrierName}
              onChange={(e) => setCarrierName(e.target.value)}
              placeholder="Ex: Motoboy Carlos (Placa FKR-4A89) ou Retirado por Marcos"
              className={inputClass}
            />
          </div>

          {/* 4. Data e Hora Exata da Saída */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                Data da Saída
              </label>
              <input
                type="date"
                required
                value={dispatchedDate}
                onChange={(e) => setDispatchedDate(e.target.value)}
                className={`${inputClass} font-mono`}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                Hora Exata
              </label>
              <input
                type="time"
                required
                value={dispatchedTime}
                onChange={(e) => setDispatchedTime(e.target.value)}
                className={`${inputClass} font-mono`}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              Observação de Expedição (Opcional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Canhoto assinado, entregue c/ proteção de borracha..."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>Confirmar Registro de Saída</span>
          </button>
        </form>

        {/* Right Bento Card: Delivery History Log (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h3 className="text-sm font-bold text-slate-50">
                Histórico de Entregas & Retiradas ({deliveries.length})
              </h3>
              <p className="text-xs text-zinc-400">
                Rastreabilidade completa contra extravio de ferramentas
              </p>
            </div>
            <PackageCheck className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="space-y-3">
            {deliveries.length === 0 ? (
              <div className="p-10 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                Nenhuma entrega ou retirada registrada ainda.
              </div>
            ) : (
              deliveries.map((del) => {
                const meta = DELIVERY_METHOD_META[del.method];
                return (
                  <div
                    key={del.id}
                    className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300">
                          {del.orderId}
                        </span>
                        <span className="text-xs font-bold text-slate-100">
                          {del.companyName}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${meta?.badgeClass}`}
                        >
                          [{meta?.label}]
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 font-medium">
                        {del.toolDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-400 pt-0.5">
                        <span className="flex items-center gap-1 text-slate-200 font-semibold">
                          <UserCheck className="w-3.5 h-3.5 text-rose-400" />
                          {del.carrierOrPersonName}
                        </span>
                        {del.notes && (
                          <span className="flex items-center gap-1 text-zinc-500">
                            <MapPin className="w-3 h-3" />
                            {del.notes}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                      <div className="sm:text-right font-mono bg-zinc-900 px-3 py-2 rounded-2xl border border-zinc-800">
                        <span className="text-[10px] uppercase text-zinc-500 block">
                          Saída Registrada
                        </span>
                        <span className="text-xs font-bold text-emerald-400 flex items-center sm:justify-end gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {del.dispatchedAt}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onDeleteDelivery(del.id)}
                        className="p-2.5 rounded-2xl bg-zinc-900 hover:bg-rose-900/80 text-zinc-500 hover:text-rose-200 border border-zinc-800 hover:border-rose-700 transition cursor-pointer"
                        title="Apagar registro de entrega"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
