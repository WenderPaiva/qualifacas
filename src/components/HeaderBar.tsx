import React from 'react';
import {
  Building2,
  Kanban,
  Layers,
  LayoutGrid,
  LogOut,
  PieChart,
  Plus,
  Search,
  Truck,
  Wrench,
} from 'lucide-react';
import { ActiveSection } from '../types/order';

interface HeaderBarProps {
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenNewOrder: () => void;
  tenantName: string;
  onLogout: () => void;
  counts: {
    companies: number;
    inProduction: number;
    overdue: number;
    deliveries: number;
    openReturns: number;
  };
}

export const NAV_SECTIONS: {
  id: ActiveSection;
  label: string;
  shortLabel: string;
  icon: React.FC<{ className?: string }>;
}[] = [
  {
    id: 'bento_home',
    label: 'Visão Geral',
    shortLabel: 'Visão Geral',
    icon: LayoutGrid,
  },
  {
    id: 'empresas',
    label: 'Seção 1 • Cadastro de Empresas',
    shortLabel: 'Seção 1 • Empresas',
    icon: Building2,
  },
  {
    id: 'esteira',
    label: 'Seção 2 • Esteira Física de Produção',
    shortLabel: 'Seção 2 • Esteira',
    icon: Kanban,
  },
  {
    id: 'financeiro',
    label: 'Seção 3 • Finanças & Formas de Pagamento',
    shortLabel: 'Seção 3 • Finanças',
    icon: PieChart,
  },
  {
    id: 'entregas',
    label: 'Seção 4 • Entregas e Logísticas de Saída',
    shortLabel: 'Seção 4 • Entregas',
    icon: Truck,
  },
  {
    id: 'retornos',
    label: 'Seção 5 • Retornos e Ajustes',
    shortLabel: 'Seção 5 • Retornos',
    icon: Wrench,
  },
];

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activeSection,
  onSelectSection,
  searchQuery,
  onSearchChange,
  onOpenNewOrder,
  tenantName,
  onLogout,
  counts,
}) => {
  const getBadge = (id: ActiveSection) => {
    if (id === 'empresas') return counts.companies;
    if (id === 'esteira') return counts.inProduction;
    if (id === 'financeiro' && counts.overdue > 0) return counts.overdue;
    if (id === 'entregas') return counts.deliveries;
    if (id === 'retornos' && counts.openReturns > 0) return counts.openReturns;
    return undefined;
  };

  return (
    <>
      {/* Desktop Left Slim Bento Icon Rail (Dashboard V22 Style) */}
      <aside className="hidden lg:flex fixed left-4 top-4 bottom-4 w-16 rounded-3xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-xl flex-col items-center justify-between py-5 z-40 shadow-2xl">
        {/* Top Crimson Brand Mark */}
        <button
          onClick={() => onSelectSection('bento_home')}
          className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-slate-50 shadow-lg shadow-rose-950/60 cursor-pointer hover:scale-105 transition"
          title="FacasFlow Enterprise (Bento Edition)"
        >
          <Layers className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Center Navigation Icons */}
        <nav className="flex flex-col items-center gap-2.5">
          {NAV_SECTIONS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const badge = getBadge(item.id);
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer group ${
                  isActive
                    ? 'bg-rose-800 text-slate-50 shadow-lg shadow-rose-950/80 border border-rose-600/40'
                    : 'text-zinc-400 hover:text-slate-100 hover:bg-zinc-800/80'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5 stroke-[1.9]" />
                {badge !== undefined && (
                  <span
                    className={`absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      item.id === 'financeiro'
                        ? 'bg-rose-500 text-white'
                        : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Logout Icon in Desktop Rail */}
        <button
          type="button"
          onClick={onLogout}
          className="w-10 h-10 rounded-2xl bg-zinc-800/70 hover:bg-rose-900/80 border border-zinc-700/60 hover:border-rose-600/50 flex items-center justify-center text-zinc-400 hover:text-white transition cursor-pointer"
          title="Sair da conta"
        >
          <LogOut className="w-4 h-4 stroke-[2]" />
        </button>
      </aside>

      {/* Top Navigation Header (Relative on mobile so it scrolls naturally; sticky only on md+ desktop/tablet) */}
      <header className="relative md:sticky md:top-0 z-30 bg-zinc-950 md:bg-zinc-950/85 md:backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-[1520px] mx-auto lg:pl-24 px-4 sm:px-6 py-4 md:py-3.5 flex flex-col gap-3.5">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Title (Clean FacasFlow Logo Only) */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="lg:hidden w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-slate-50 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-50 truncate">
                Facas<span className="text-rose-500">Flow</span>
              </h1>
            </div>

            {/* Search + Primary Action + Logout Button */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden md:block relative w-64">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Buscar OS, empresa, CNPJ ou faca..."
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-2xl bg-zinc-900 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-slate-200"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={onOpenNewOrder}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap shrink-0 bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-slate-50 border border-rose-600/40 shadow-lg shadow-rose-950/60 transition cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[2.5] shrink-0" />
                <span>Nova OS</span>
              </button>

              <button
                type="button"
                onClick={onLogout}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap shrink-0 bg-zinc-900 hover:bg-rose-950/80 text-zinc-300 hover:text-rose-200 border border-zinc-800 hover:border-rose-700/60 transition cursor-pointer"
                title="Encerrar sessão e trocar de empresa"
              >
                <LogOut className="w-3.5 h-3.5 stroke-[2.2] shrink-0" />
                <span>Sair</span>
              </button>
            </div>
          </div>

          {/* Section Pills Bar (Wrapped, No Horizontal Scrollbar) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {NAV_SECTIONS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const badge = getBadge(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSection(item.id)}
                  className={`flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 rounded-2xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-rose-900/90 text-slate-50 border border-rose-600/50 shadow-sm'
                      : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/70 hover:text-slate-100 hover:bg-zinc-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 stroke-[2] shrink-0" />
                  <span>{item.label}</span>
                  {badge !== undefined && (
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold leading-none ${
                        isActive
                          ? 'bg-black/40 text-rose-200'
                          : item.id === 'financeiro'
                          ? 'bg-rose-500/20 text-rose-400'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};
