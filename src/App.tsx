import React, { useMemo, useState } from 'react';
import { CheckCircle2, Plus } from 'lucide-react';
import { BentoOverviewSection } from './components/BentoOverviewSection';
import { CompaniesCrmSection } from './components/CompaniesCrmSection';
import { DeliveriesLogisticsSection } from './components/DeliveriesLogisticsSection';
import { FastEntryModal } from './components/FastEntryModal';
import { FinanceAnalyticsSection } from './components/FinanceAnalyticsSection';
import { HeaderBar } from './components/HeaderBar';
import { ProductionKanban } from './components/ProductionKanban';
import { WarrantyReturnsSection } from './components/WarrantyReturnsSection';
import { createEnterpriseSeedDatabase } from './data/seedOrders';
import {
  getNextDeliveryId,
  getNextOrderId,
  getNextReturnId,
  loadEnterpriseDatabase,
  saveEnterpriseDatabase,
} from './services/storageAdapter';
import {
  ActiveSection,
  Company,
  DeliveryRecord,
  DieOrder,
  EnterpriseDatabase,
  PaymentModality,
  PaymentStatus,
  ProductionStage,
  ReturnStatus,
  WarrantyReturnRecord,
} from './types/order';
import {
  addDays,
  computeFinancialBreakdown,
  nowTimestampBR,
  PAYMENT_MODALITY_META,
  PRODUCTION_STAGES,
  toISODate,
} from './utils/financeEngine';

export const App: React.FC = () => {
  const [db, setDb] = useState<EnterpriseDatabase>(() =>
    loadEnterpriseDatabase()
  );
  const [activeSection, setActiveSection] = useState<ActiveSection>('bento_home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
    db.companies[0]?.id || null
  );
  const [prefillDeliveryOrder, setPrefillDeliveryOrder] =
    useState<DieOrder | null>(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const commitDb = (nextDb: EnterpriseDatabase) => {
    const saved = saveEnterpriseDatabase(nextDb);
    setDb(saved);
  };

  // Search filtering
  const filteredOrders = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return db.orders;
    return db.orders.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.companyName.toLowerCase().includes(q) ||
        o.toolDescription.toLowerCase().includes(q)
    );
  }, [db.orders, searchQuery]);

  const filteredCompanies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return db.companies;
    return db.companies.filter(
      (c) =>
        c.corporateName.toLowerCase().includes(q) ||
        c.cnpj.toLowerCase().includes(q) ||
        c.contactName.toLowerCase().includes(q)
    );
  }, [db.companies, searchQuery]);

  const financials = useMemo(
    () => computeFinancialBreakdown(filteredOrders),
    [filteredOrders]
  );

  const nextOrderId = useMemo(() => getNextOrderId(db), [db]);

  // Handlers
  const handleAddCompany = (newCompData: Omit<Company, 'id'>) => {
    const newId = `EMP-0${db.companies.length + 1}`;
    const created: Company = { id: newId, ...newCompData };
    commitDb({
      ...db,
      companies: [created, ...db.companies],
    });
    setSelectedCompanyId(newId);
    showToast(`Empresa "${created.corporateName}" cadastrada!`);
  };

  const handleCreateOrderFull = (payload: {
    companyId: string;
    companyName: string;
    companyPhone: string;
    toolDescription: string;
    amount: number;
    paymentModality: PaymentModality;
    stage: ProductionStage;
  }) => {
    const today = toISODate();
    const stamp = nowTimestampBR();
    const days = PAYMENT_MODALITY_META[payload.paymentModality]?.defaultDays ?? 30;

    let payStatus: PaymentStatus = 'a_receber';
    if (payload.paymentModality === 'cortesia') payStatus = 'cortesia';
    else if (
      payload.paymentModality === 'pix' ||
      payload.paymentModality === 'dinheiro'
    ) {
      payStatus = 'pago';
    }

    // Ensure company exists in CRM
    let updatedCompanies = db.companies;
    if (!db.companies.some((c) => c.id === payload.companyId)) {
      updatedCompanies = [
        {
          id: payload.companyId,
          corporateName: payload.companyName,
          cnpj: 'Não informado',
          phone: payload.companyPhone,
          contactName: 'PCP / Compras',
        },
        ...db.companies,
      ];
    }

    const newOrder: DieOrder = {
      id: nextOrderId,
      companyId: payload.companyId,
      companyName: payload.companyName,
      companyPhone: payload.companyPhone,
      toolDescription: payload.toolDescription,
      amount: payload.amount,
      paymentModality: payload.paymentModality,
      paymentStatus: payStatus,
      stage: payload.stage,
      stageUpdatedAt: stamp,
      stageHistory: [{ stage: payload.stage, timestamp: stamp }],
      createdAt: today,
      dueDate: addDays(today, days),
      paidAt: payStatus === 'pago' ? today : undefined,
    };

    commitDb({
      ...db,
      companies: updatedCompanies,
      orders: [newOrder, ...db.orders],
    });
    if (!selectedCompanyId) {
      setSelectedCompanyId(payload.companyId);
    }

    showToast(`${newOrder.id} criada em "${PRODUCTION_STAGES.find((s) => s.id === payload.stage)?.label}"!`);
  };

  const handleMoveStage = (orderId: string, targetStage: ProductionStage) => {
    const stamp = nowTimestampBR();
    const nextOrders = db.orders.map((o) => {
      if (o.id !== orderId) return o;
      return {
        ...o,
        stage: targetStage,
        stageUpdatedAt: stamp,
        stageHistory: [...(o.stageHistory || []), { stage: targetStage, timestamp: stamp }],
      };
    });
    commitDb({ ...db, orders: nextOrders });
    const stageName = PRODUCTION_STAGES.find((s) => s.id === targetStage)?.label;
    showToast(`${orderId} avançou para "${stageName}" (${stamp})`);
  };

  const handleTogglePaid = (orderId: string) => {
    const today = toISODate();
    const nextOrders = db.orders.map((o) => {
      if (o.id !== orderId) return o;
      const isPaid = o.paymentStatus === 'pago';
      return {
        ...o,
        paymentStatus: (isPaid ? 'a_receber' : 'pago') as PaymentStatus,
        paidAt: isPaid ? undefined : today,
      };
    });
    commitDb({ ...db, orders: nextOrders });
    showToast(`Status financeiro de ${orderId} atualizado!`);
  };

  const handleEmitBilling30d = (orderId: string) => {
    const today = toISODate();
    const nextOrders = db.orders.map((o) => {
      if (o.id !== orderId) return o;
      return {
        ...o,
        paymentStatus: 'a_receber' as PaymentStatus,
        dueDate: addDays(today, 30),
      };
    });
    commitDb({ ...db, orders: nextOrders });
    showToast(`Faturamento 30 dias gerado para ${orderId}!`);
  };

  const handleAddDelivery = (deliveryData: Omit<DeliveryRecord, 'id'>) => {
    const newDel: DeliveryRecord = {
      id: getNextDeliveryId(db),
      ...deliveryData,
    };
    const stamp = nowTimestampBR();
    const nextOrders = db.orders.map((o) =>
      o.id === deliveryData.orderId
        ? { ...o, stage: 'faca_pronta' as ProductionStage, stageUpdatedAt: stamp }
        : o
    );
    commitDb({
      ...db,
      orders: nextOrders,
      deliveries: [newDel, ...db.deliveries],
    });
    showToast(`Saída logística da ${deliveryData.orderId} registrada!`);
  };

  const handleAddReturn = (retData: Omit<WarrantyReturnRecord, 'id'>) => {
    const newRet: WarrantyReturnRecord = {
      id: getNextReturnId(db),
      ...retData,
    };
    commitDb({
      ...db,
      returns: [newRet, ...db.returns],
    });
    showToast(`Retorno de garantia (${retData.orderId}) registrado!`);
  };

  const handleUpdateReturnStatus = (id: string, nextStatus: ReturnStatus) => {
    const stamp = nowTimestampBR();
    const nextReturns = db.returns.map((r) =>
      r.id === id ? { ...r, status: nextStatus, updatedAt: stamp } : r
    );
    commitDb({ ...db, returns: nextReturns });
    showToast(`Status do retorno atualizado (${stamp})!`);
  };

  const handleResetSeed = () => {
    const emptyDb = createEnterpriseSeedDatabase();
    commitDb(emptyDb);
    setSelectedCompanyId(null);
    showToast('Painel zerado e pronto para uso em produção!');
  };

  const counts = {
    companies: db.companies.length,
    inProduction: db.orders.filter((o) => o.stage !== 'faca_pronta').length,
    overdue: financials.overdueCount,
    deliveries: db.deliveries.length,
    openReturns: db.returns.filter((r) => r.status !== 'liberado').length,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 pb-24 selection:bg-rose-800 selection:text-white">
      {/* Navigation Shell */}
      <HeaderBar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenNewOrder={() => setIsNewModalOpen(true)}
        onResetSeed={handleResetSeed}
        counts={counts}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-20 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-900 border border-rose-700/70 text-slate-50 text-xs font-semibold shadow-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-[1520px] mx-auto lg:pl-24 px-4 sm:px-6 pt-6">
        {activeSection === 'bento_home' && (
          <BentoOverviewSection
            companies={filteredCompanies}
            orders={filteredOrders}
            deliveries={db.deliveries}
            returns={db.returns}
            financials={financials}
            onNavigate={setActiveSection}
            onOpenNewOrder={() => setIsNewModalOpen(true)}
            onSelectCompany={(id) => setSelectedCompanyId(id)}
          />
        )}

        {activeSection === 'empresas' && (
          <CompaniesCrmSection
            companies={filteredCompanies}
            orders={filteredOrders}
            selectedCompanyId={selectedCompanyId}
            onSelectCompany={setSelectedCompanyId}
            onAddCompany={handleAddCompany}
            onAddDieForCompany={(comp, desc, val, mod) =>
              handleCreateOrderFull({
                companyId: comp.id,
                companyName: comp.corporateName,
                companyPhone: comp.phone,
                toolDescription: desc,
                amount: val,
                paymentModality: mod,
                stage: 'arquivo_recebido',
              })
            }
          />
        )}

        {activeSection === 'esteira' && (
          <ProductionKanban
            orders={filteredOrders}
            onMoveStage={handleMoveStage}
            onQuickRegisterDelivery={(order) => {
              setPrefillDeliveryOrder(order);
              setActiveSection('entregas');
            }}
          />
        )}

        {activeSection === 'financeiro' && (
          <FinanceAnalyticsSection
            orders={filteredOrders}
            financials={financials}
            onTogglePaid={handleTogglePaid}
            onEmitBilling30d={handleEmitBilling30d}
          />
        )}

        {activeSection === 'entregas' && (
          <DeliveriesLogisticsSection
            orders={db.orders}
            deliveries={db.deliveries}
            prefillOrder={prefillDeliveryOrder}
            onAddDelivery={handleAddDelivery}
          />
        )}

        {activeSection === 'retornos' && (
          <WarrantyReturnsSection
            orders={db.orders}
            returns={db.returns}
            onAddReturn={handleAddReturn}
            onUpdateReturnStatus={handleUpdateReturnStatus}
          />
        )}
      </main>

      {/* Prominent Floating Action Button ("Nova OS") */}
      <button
        type="button"
        onClick={() => setIsNewModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3.5 rounded-3xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 active:scale-95 text-slate-50 border border-rose-500/40 shadow-2xl shadow-rose-950/90 transition-all cursor-pointer"
      >
        <Plus className="w-4 h-4 stroke-[2.5]" />
        <span>Nova OS</span>
      </button>

      {/* Fast Entry Modal */}
      <FastEntryModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        companies={db.companies}
        nextOrderId={nextOrderId}
        onSaveOrder={handleCreateOrderFull}
      />
    </div>
  );
};

export default App;
