import React, { useEffect, useState } from 'react';
import { Check, Layers, X } from 'lucide-react';
import {
  Company,
  PaymentModality,
  ProductionStage,
} from '../types/order';
import { PAYMENT_MODALITY_META, PRODUCTION_STAGES } from '../utils/financeEngine';

interface FastEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  companies: Company[];
  nextOrderId: string;
  onSaveOrder: (payload: {
    companyId: string;
    companyName: string;
    companyPhone: string;
    toolDescription: string;
    amount: number;
    paymentModality: PaymentModality;
    stage: ProductionStage;
  }) => void;
}

export const FastEntryModal: React.FC<FastEntryModalProps> = ({
  isOpen,
  onClose,
  companies,
  nextOrderId,
  onSaveOrder,
}) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(companies[0]?.id || '');
  const [customCompanyName, setCustomCompanyName] = useState('');
  const [toolDescription, setToolDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentModality, setPaymentModality] = useState<PaymentModality>('a_prazo');
  const [stage, setStage] = useState<ProductionStage>('arquivo_recebido');

  useEffect(() => {
    if (isOpen) {
      setSelectedCompanyId(companies[0]?.id || 'nova');
      setCustomCompanyName('');
      setToolDescription('');
      setAmount('');
      setPaymentModality('a_prazo');
      setStage('arquivo_recebido');
    }
  }, [isOpen, companies]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolDescription.trim()) return;

    const existingComp = companies.find((c) => c.id === selectedCompanyId);
    const companyName =
      selectedCompanyId === 'nova'
        ? customCompanyName.trim() || 'Cliente Avulso'
        : existingComp?.corporateName || 'Cliente';
    const companyPhone = existingComp?.phone || '(11) 99999-0000';
    const numericAmount = parseFloat(amount.replace(',', '.')) || 0;

    onSaveOrder({
      companyId: existingComp?.id || `EMP-${Date.now().toString().slice(-3)}`,
      companyName,
      companyPhone,
      toolDescription: toolDescription.trim(),
      amount: numericAmount,
      paymentModality,
      stage,
    });

    onClose();
  };

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm rounded-2xl bg-zinc-900 border border-zinc-800 text-slate-100 placeholder-zinc-500 focus:border-rose-700 outline-none transition';

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-zinc-950 border border-zinc-800/90 p-6 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/30 flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-slate-50">Nova Ordem de Serviço</h2>
                <span className="px-2 py-0.5 rounded-lg bg-rose-950/90 border border-rose-800/60 font-mono text-xs font-bold text-rose-300">
                  {nextOrderId}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Lançamento rápido • Entra direto na Esteira e no Financeiro
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-slate-100 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* 1. Seleção da Empresa Cliente */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">
              1. Empresa / Cliente
            </label>
            <select
              value={selectedCompanyId}
              onChange={(e) => setSelectedCompanyId(e.target.value)}
              className={inputClass}
            >
              {companies.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.corporateName} ({c.cnpj})
                </option>
              ))}
              <option value="nova">+ Digitar Nova Empresa Rapidamente...</option>
            </select>

            {selectedCompanyId === 'nova' && (
              <input
                type="text"
                required
                value={customCompanyName}
                onChange={(e) => setCustomCompanyName(e.target.value)}
                placeholder="Digite a Razão Social ou Nome da Gráfica"
                className={`${inputClass} mt-2`}
              />
            )}
          </div>

          {/* 2. Dados da Faca */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1">
              2. Descrição Detalhada da Ferramenta (Faca) *
            </label>
            <input
              type="text"
              required
              autoFocus
              value={toolDescription}
              onChange={(e) => setToolDescription(e.target.value)}
              placeholder="Ex: Faca Caixa Duplex Tampa e Fundo"
              className={inputClass}
            />
          </div>

          {/* 3. Valor & Status Inicial de Produção */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                3. Valor (R$) *
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ex: 680,00"
                className={`${inputClass} font-mono font-bold`}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                4. Status Inicial na Esteira
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as ProductionStage)}
                className={inputClass}
              >
                {PRODUCTION_STAGES.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.step}. {st.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 4. Condição de Pagamento (5 Modalidades) */}
          <div>
            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
              5. Condição de Pagamento
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.keys(PAYMENT_MODALITY_META) as PaymentModality[]).map((mod) => {
                const meta = PAYMENT_MODALITY_META[mod];
                const selected = paymentModality === mod;
                return (
                  <button
                    type="button"
                    key={mod}
                    onClick={() => setPaymentModality(mod)}
                    className={`py-2 px-3 rounded-2xl text-xs font-semibold border text-left flex items-center justify-between transition cursor-pointer ${
                      selected
                        ? 'bg-rose-800 text-white border-rose-600 shadow-sm'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-slate-200'
                    }`}
                  >
                    <span className="truncate">[{meta.short}]</span>
                    {selected && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-slate-50 shadow-lg shadow-rose-950/80 flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>Registrar {nextOrderId} na Esteira</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
