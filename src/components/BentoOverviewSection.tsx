import React from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileWarning,
  Kanban,
  Layers,
  Plus,
  Truck,
  Wrench,
} from 'lucide-react';
import {
  ActiveSection,
  Company,
  DeliveryRecord,
  DieOrder,
  WarrantyReturnRecord,
} from '../types/order';
import {
  DELIVERY_METHOD_META,
  FinancialBreakdown,
  formatBRL,
  PAYMENT_MODALITY_META,
  PRODUCTION_STAGES,
  RETURN_STATUS_META,
} from '../utils/financeEngine';

interface BentoOverviewSectionProps {
  companies: Company[];
  orders: DieOrder[];
  deliveries: DeliveryRecord[];
  returns: WarrantyReturnRecord[];
  financials: FinancialBreakdown;
  onNavigate: (section: ActiveSection) => void;
  onOpenNewOrder: () => void;
  onSelectCompany: (companyId: string) => void;
}

export const BentoOverviewSection: React.FC<BentoOverviewSectionProps> = ({
  companies,
  orders,
  deliveries,
  returns,
  financials,
  onNavigate,
  onOpenNewOrder,
  onSelectCompany,
}) => {
  const readyCount = orders.filter((o) => o.stage === 'faca_pronta').length;
  const activeProductionCount = orders.length - readyCount;

  return (
    <div className="space-y-5">
      {/* TOP ROW: ASYMMETRIC BENTO GRID (DASHBOARD V22 STYLE) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* BENTO CARD 1: HERO DARK CRIMSON COMMAND CARD (5 Cols) */}
        <div className="md:col-span-5 rounded-3xl p-6 bg-gradient-to-br from-rose-950/90 via-zinc-900 to-zinc-950 border border-rose-800/50 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-rose-700/15 blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-900/60 text-rose-200 border border-rose-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                Operação em Tempo Real
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 mt-3 leading-snug">
                Controle Industrial <span className="text-rose-400">Zero Papel</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                Rastreamento completo desde o arquivo CAD recebido até a saída logística e faturamento de 30 dias.
              </p>
            </div>
            <button
              onClick={onOpenNewOrder}
              className="w-11 h-11 rounded-2xl bg-rose-700 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-950/80 transition cursor-pointer shrink-0"
              title="Registrar Nova Ordem de Serviço"
            >
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Big Numbers Row (V22 Style) */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-rose-900/40">
            <div>
              <span className="text-[11px] text-zinc-400 block">Facas Ativas</span>
              <span className="text-3xl font-extrabold text-slate-50 tracking-tight">
                {activeProductionCount}
              </span>
              <span className="text-[10px] text-amber-400 block mt-0.5">Na bancada</span>
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block">Prontas / Exped.</span>
              <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                {readyCount}
              </span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">Finalizadas</span>
            </div>
            <div>
              <span className="text-[11px] text-zinc-400 block">Empresas</span>
              <span className="text-3xl font-extrabold text-rose-400 tracking-tight">
                {companies.length}
              </span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">Cadastradas</span>
            </div>
          </div>
        </div>

        {/* BENTO CARD 2: 3 CORE FINANCIAL INDICATORS (4 Cols) */}
        <div
          onClick={() => onNavigate('financeiro')}
          className="md:col-span-4 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition cursor-pointer flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Pulso Financeiro (30/60d)
              </span>
              <p className="text-3xl font-extrabold text-emerald-400 tracking-tight mt-1">
                {formatBRL(financials.receivable30d)}
              </p>
              <span className="text-[11px] text-zinc-400">
                A receber programado ({financials.receivableCount} títulos)
              </span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-zinc-800 group-hover:bg-rose-800 text-zinc-300 group-hover:text-white flex items-center justify-center transition">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-zinc-800">
            <div className="p-3 rounded-2xl bg-rose-950/30 border border-rose-800/40">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-rose-400">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Vencidos</span>
              </div>
              <p className="text-lg font-bold text-rose-400 mt-1">
                {formatBRL(financials.overdueTotal)}
              </p>
              <span className="text-[10px] text-zinc-400">
                {financials.overdueCount} título(s)
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-700/30">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
                <FileWarning className="w-3.5 h-3.5" />
                <span>Entregues s/ Nota</span>
              </div>
              <p className="text-lg font-bold text-amber-400 mt-1">
                {formatBRL(financials.unbilledTotal)}
              </p>
              <span className="text-[10px] text-zinc-400">
                {financials.unbilledCount} s/ cobrança
              </span>
            </div>
          </div>
        </div>

        {/* BENTO CARD 3: PAYMENT MODALITY MINI PILL CHART (3 Cols) */}
        <div
          onClick={() => onNavigate('financeiro')}
          className="md:col-span-3 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 transition cursor-pointer flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-zinc-400">Modalidades</span>
              <h3 className="text-sm font-bold text-slate-100 mt-0.5">
                Volume Total: {formatBRL(financials.totalVolume)}
              </h3>
            </div>
            <CalendarClock className="w-4 h-4 text-rose-400" />
          </div>

          {/* Vertical Pill Bars (Dashboard V22 Style) */}
          <div className="flex items-end justify-between gap-2 h-28 pt-4">
            {financials.byModality.map((item) => {
              const heightPct = Math.max(14, item.percentage);
              return (
                <div
                  key={item.modality}
                  className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                >
                  <span className="text-[10px] font-bold text-zinc-300">
                    {item.percentage}%
                  </span>
                  <div className="w-full bg-zinc-800/80 rounded-2xl h-full flex items-end p-0.5">
                    <div
                      style={{
                        height: `${heightPct}%`,
                        backgroundColor: item.colorHex,
                      }}
                      className="w-full rounded-xl transition-all duration-500"
                    />
                  </div>
                  <span className="text-[9px] text-zinc-400 truncate max-w-full">
                    {PAYMENT_MODALITY_META[item.modality]?.short.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECOND ROW: 6-STAGE PRODUCTION PIPELINE BENTO STRIP */}
      <div className="rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-rose-900/40 border border-rose-700/40 flex items-center justify-center text-rose-400">
              <Kanban className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-50">
                Esteira Física da Oficina (6 Etapas de Fabricação)
              </h3>
              <p className="text-xs text-zinc-400">
                Visão instantânea de onde está cada faca neste momento
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('esteira')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-semibold bg-zinc-800 hover:bg-rose-800 text-slate-200 hover:text-white transition cursor-pointer"
          >
            <span>Abrir Esteira Completa</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PRODUCTION_STAGES.map((st) => {
            const count = orders.filter((o) => o.stage === st.id).length;
            return (
              <div
                key={st.id}
                onClick={() => onNavigate('esteira')}
                className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-rose-700/50 transition cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Etapa {st.step}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${st.dotClass}`} />
                </div>
                <p className="text-2xl font-extrabold text-slate-50 mt-2">{count}</p>
                <span className="text-xs font-semibold text-zinc-300 mt-1 block truncate">
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* THIRD ROW: 3 BENTO WIDGETS (COMPANIES CRM, LOGISTICS DELIVERIES, WARRANTY RETURNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Widget 1: Empresas & Ferramental */}
        <div className="rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-bold text-slate-50">
                  Empresas & Ferramental
                </h3>
              </div>
              <button
                onClick={() => onNavigate('empresas')}
                className="text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Ver CRM <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {companies.length === 0 ? (
                <div className="p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                  Nenhuma empresa cadastrada.
                </div>
              ) : (
                companies.slice(0, 4).map((comp) => {
                  const compOrders = orders.filter((o) => o.companyId === comp.id);
                  return (
                    <div
                      key={comp.id}
                      onClick={() => {
                        onSelectCompany(comp.id);
                        onNavigate('empresas');
                      }}
                      className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-rose-700/50 flex items-center justify-between transition cursor-pointer"
                    >
                      <div className="truncate pr-2">
                        <p className="text-xs font-bold text-slate-100 truncate">
                          {comp.corporateName}
                        </p>
                        <span className="text-[11px] text-zinc-500 font-mono">
                          {comp.cnpj}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-bold shrink-0">
                        {compOrders.length} facas
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Widget 2: Últimas Entregas & Logística */}
        <div className="rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-slate-50">
                  Logística de Saída
                </h3>
              </div>
              <button
                onClick={() => onNavigate('entregas')}
                className="text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Ver Saídas <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {deliveries.length === 0 ? (
                <div className="p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                  Nenhuma saída registrada.
                </div>
              ) : (
                deliveries.slice(0, 3).map((del) => (
                  <div
                    key={del.id}
                    onClick={() => onNavigate('entregas')}
                    className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-100 truncate">
                        {del.orderId} • {del.companyName}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${
                          DELIVERY_METHOD_META[del.method]?.badgeClass
                        }`}
                      >
                        {DELIVERY_METHOD_META[del.method]?.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 truncate">
                      {del.carrierOrPersonName} • {del.dispatchedAt}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Widget 3: Retornos & Ajustes de Garantia */}
        <div className="rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-slate-50">
                  Retornos & Garantia
                </h3>
              </div>
              <button
                onClick={() => onNavigate('retornos')}
                className="text-xs font-semibold text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                Ver Bancada <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {returns.length === 0 ? (
                <div className="p-6 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                  Nenhum retorno registrado.
                </div>
              ) : (
                returns.slice(0, 3).map((ret) => {
                  const stMeta = RETURN_STATUS_META[ret.status];
                  return (
                    <div
                      key={ret.id}
                      onClick={() => onNavigate('retornos')}
                      className="p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-100 truncate">
                          {ret.orderId} • {ret.companyName}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${stMeta.badgeClass}`}
                        >
                          {stMeta.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 truncate">
                        Motivo: {ret.reason}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
