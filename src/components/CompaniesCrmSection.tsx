import React, { useState } from 'react';
import {
  Building2,
  Check,
  Layers,
  Phone,
  Plus,
  UserCheck,
  Wrench,
} from 'lucide-react';
import { Company, DieOrder, PaymentModality } from '../types/order';
import {
  formatBRL,
  formatDateBR,
  PAYMENT_MODALITY_META,
  PRODUCTION_STAGES,
} from '../utils/financeEngine';

interface CompaniesCrmSectionProps {
  companies: Company[];
  orders: DieOrder[];
  selectedCompanyId: string | null;
  onSelectCompany: (id: string) => void;
  onAddCompany: (company: Omit<Company, 'id'>) => void;
  onAddDieForCompany: (
    company: Company,
    toolDescription: string,
    amount: number,
    modality: PaymentModality
  ) => void;
}

export const CompaniesCrmSection: React.FC<CompaniesCrmSectionProps> = ({
  companies,
  orders,
  selectedCompanyId,
  onSelectCompany,
  onAddCompany,
  onAddDieForCompany,
}) => {
  const activeCompany =
    companies.find((c) => c.id === selectedCompanyId) || companies[0] || null;

  // New Company inline modal state
  const [showNewCompanyForm, setShowNewCompanyForm] = useState(
    companies.length === 0
  );
  const [newCorpName, setNewCorpName] = useState('');
  const [newCnpj, setNewCnpj] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newContact, setNewContact] = useState('');

  // New Die inside Selected Company state
  const [toolDesc, setToolDesc] = useState('');
  const [toolAmount, setToolAmount] = useState('');
  const [toolModality, setToolModality] = useState<PaymentModality>('a_prazo');

  const handleCreateCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCorpName.trim()) return;
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

  const handleCreateDieInCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCompany || !toolDesc.trim()) return;
    const val = parseFloat(toolAmount.replace(',', '.')) || 0;
    onAddDieForCompany(activeCompany, toolDesc.trim(), val, toolModality);
    setToolDesc('');
    setToolAmount('');
  };

  const companyOrders = activeCompany
    ? orders.filter((o) => o.companyId === activeCompany.id)
    : [];
  const companyTotalValue = companyOrders.reduce((acc, o) => acc + (o.amount || 0), 0);

  const inputClass =
    'w-full px-3.5 py-2.5 text-xs rounded-2xl bg-zinc-950 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';

  return (
    <div className="space-y-5">
      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-50 tracking-tight">
            Seção 1 • Cadastro de Empresas
          </h2>
          <p className="text-xs text-zinc-400">
            Selecione uma empresa para consultar todo o histórico de facas ou cadastrar uma nova ferramenta vinculada.
          </p>
        </div>

        <button
          onClick={() => setShowNewCompanyForm((prev) => !prev)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-zinc-900 hover:bg-rose-900/80 text-slate-100 border border-zinc-800 hover:border-rose-700 transition cursor-pointer"
        >
          <Plus className="w-4 h-4 text-rose-400" />
          <span>{showNewCompanyForm ? 'Fechar Cadastro' : 'Nova Empresa Cliente'}</span>
        </button>
      </div>

      {/* Collapsible New Company Bento Card */}
      {showNewCompanyForm && (
        <form
          onSubmit={handleCreateCompany}
          className="rounded-3xl p-6 bg-zinc-900/95 border border-rose-800/60 shadow-xl space-y-4"
        >
          <h3 className="text-sm font-bold text-rose-400">
            Cadastrar Nova Empresa / Gráfica Cliente
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <input
              type="text"
              required
              value={newCorpName}
              onChange={(e) => setNewCorpName(e.target.value)}
              placeholder="Razão Social / Nome Fantasia *"
              className={inputClass}
            />
            <input
              type="text"
              value={newCnpj}
              onChange={(e) => setNewCnpj(e.target.value)}
              placeholder="CNPJ (ex: 14.528.910/0001-42)"
              className={inputClass}
            />
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="Telefone / WhatsApp"
              className={inputClass}
            />
            <input
              type="text"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
              placeholder="Responsável (Compras / PCP)"
              className={inputClass}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-rose-800 hover:bg-rose-700 text-slate-50 transition cursor-pointer"
            >
              Salvar Empresa
            </button>
          </div>
        </form>
      )}

      {/* Main Split Bento Layout: Left Companies List (5 Cols) + Right Company Detail & Die Registration (7 Cols) */}
      {companies.length === 0 ? (
        <div className="rounded-3xl p-10 bg-zinc-900/80 border border-dashed border-zinc-800 text-center space-y-2">
          <Building2 className="w-8 h-8 text-rose-500 mx-auto" />
          <h3 className="text-sm font-bold text-slate-100">
            Nenhuma empresa cadastrada ainda
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Utilize o formulário acima ou o botão "Nova OS" para cadastrar seu primeiro cliente e iniciar o controle de ferramental.
          </p>
        </div>
      ) : (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* LEFT COLUMN: LISTA DE EMPRESAS (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          {companies.map((comp) => {
            const linked = orders.filter((o) => o.companyId === comp.id);
            const sumVal = linked.reduce((acc, o) => acc + (o.amount || 0), 0);
            const isSelected = activeCompany?.id === comp.id;

            return (
              <div
                key={comp.id}
                onClick={() => onSelectCompany(comp.id)}
                className={`rounded-3xl p-5 border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-rose-950/60 via-zinc-900 to-zinc-900 border-rose-700/70 shadow-lg shadow-rose-950/40'
                    : 'bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-rose-800 text-white border-rose-600'
                          : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                      }`}
                    >
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-50 leading-snug">
                        {comp.corporateName}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        CNPJ: {comp.cnpj}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs font-bold text-rose-400 shrink-0">
                    {linked.length} {linked.length === 1 ? 'faca' : 'facas'}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      {comp.phone}
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-rose-400" />
                      {comp.contactName}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-slate-200">
                    {formatBRL(sumVal)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: DETALHES DA EMPRESA & CADASTRO DE FACAS VINCULADAS (7 Cols) */}
        {activeCompany && (
          <div className="lg:col-span-7 rounded-3xl p-6 bg-zinc-900/90 border border-zinc-800/90 space-y-6">
            {/* Company Detail Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-zinc-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                  Ficha de Ferramental do Cliente
                </span>
                <h3 className="text-xl font-bold text-slate-50 mt-0.5">
                  {activeCompany.corporateName}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  CNPJ: <span className="font-mono text-zinc-300">{activeCompany.cnpj}</span> •
                  WhatsApp: <span className="text-zinc-300">{activeCompany.phone}</span> •
                  Contato: <span className="text-zinc-300">{activeCompany.contactName}</span>
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-right">
                <span className="text-[10px] uppercase text-zinc-400 block">
                  Volume Total Cadastrado
                </span>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">
                  {formatBRL(companyTotalValue)}
                </span>
              </div>
            </div>

            {/* Quick Register Die Linked to This Company */}
            <form
              onSubmit={handleCreateDieInCompany}
              className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-rose-400" />
                  Vincular Nova Faca para {activeCompany.corporateName}
                </span>
                <span className="text-[11px] text-zinc-500">
                  Entra automaticamente em "Arquivo Recebido"
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <input
                  type="text"
                  required
                  value={toolDesc}
                  onChange={(e) => setToolDesc(e.target.value)}
                  placeholder="Descrição da Faca (ex: Faca Caixa Duplex)"
                  className={`${inputClass} sm:col-span-2`}
                />
                <input
                  type="number"
                  step="0.01"
                  required
                  value={toolAmount}
                  onChange={(e) => setToolAmount(e.target.value)}
                  placeholder="Valor R$ (ex: 680)"
                  className={`${inputClass} font-mono font-bold`}
                />
              </div>

              {/* Payment Modality Selector Pills */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {(Object.keys(PAYMENT_MODALITY_META) as PaymentModality[]).map((mod) => {
                    const meta = PAYMENT_MODALITY_META[mod];
                    const active = toolModality === mod;
                    return (
                      <button
                        type="button"
                        key={mod}
                        onClick={() => setToolModality(mod)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                          active
                            ? 'bg-rose-800 text-white border-rose-600'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'
                        }`}
                      >
                        [{meta.label}]
                      </button>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-800 hover:bg-rose-700 text-white flex items-center gap-1.5 transition cursor-pointer shrink-0"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Cadastrar Faca</span>
                </button>
              </div>
            </form>

            {/* History List of Dies for this Company */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Histórico de Facas Associadas ({companyOrders.length})
              </h4>

              {companyOrders.length === 0 ? (
                <div className="p-8 rounded-2xl border border-dashed border-zinc-800 text-center text-xs text-zinc-500">
                  Nenhuma faca cadastrada para esta empresa ainda.
                </div>
              ) : (
                companyOrders.map((order) => {
                  const modMeta = PAYMENT_MODALITY_META[order.paymentModality];
                  const stageMeta = PRODUCTION_STAGES.find((s) => s.id === order.stage);
                  return (
                    <div
                      key={order.id}
                      className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-rose-950/80 border border-rose-800/60 font-mono text-xs font-bold text-rose-300">
                            {order.id}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${modMeta?.badgeClass}`}
                          >
                            [{modMeta?.label}]
                          </span>
                          <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                            <Layers className="w-3 h-3 text-rose-400" />
                            {stageMeta?.label}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-100">
                          {order.toolDescription}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          Cadastrada em {formatDateBR(order.createdAt)} • Vencimento:{' '}
                          {formatDateBR(order.dueDate)}
                        </p>
                      </div>

                      <div className="text-right font-mono shrink-0">
                        <span className="text-base font-extrabold text-emerald-400 block">
                          {formatBRL(order.amount)}
                        </span>
                        <span className="text-[10px] text-zinc-500">
                          Atualizado: {order.stageUpdatedAt}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
};
