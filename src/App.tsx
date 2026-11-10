import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Plus, Radio } from 'lucide-react';
import { AuthLoginScreen } from './components/AuthLoginScreen';
import { BentoOverviewSection } from './components/BentoOverviewSection';
import { CompaniesCrmSection } from './components/CompaniesCrmSection';
import { DeliveriesLogisticsSection } from './components/DeliveriesLogisticsSection';
import { FastEntryModal } from './components/FastEntryModal';
import { FinanceAnalyticsSection } from './components/FinanceAnalyticsSection';
import { HeaderBar } from './components/HeaderBar';
import { ProductionKanban } from './components/ProductionKanban';
import { TeamManagementSection } from './components/TeamManagementSection';
import { WarrantyReturnsSection } from './components/WarrantyReturnsSection';
import {
  publishRealtimeUpdate,
  subscribeToCompanyRealtime,
} from './services/realtimeEngine';
import {
  clearActiveSession,
  deleteEmployeeFromCompany,
  getActiveSession,
  getCompanyEmployees,
  getNextDeliveryId,
  getNextOrderId,
  getNextReturnId,
  loadEnterpriseDatabase,
  registerEmployeeForCompany,
  saveActiveSession,
  saveEnterpriseDatabase,
  updateEmployeeRoleInCompany,
} from './services/storageAdapter';
import {
  ActiveSection,
  AuthSession,
  Company,
  DeliveryRecord,
  DieOrder,
  EnterpriseDatabase,
  PaymentModality,
  PaymentStatus,
  ProductionStage,
  ReturnStatus,
  TenantAccount,
  UserRole,
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

const OPERATOR_ALLOWED_SECTIONS: ActiveSection[] = [
  'esteira',
  'entregas',
  'retornos',
];

export const App: React.FC = () => {
  const [session, setSession] = useState<AuthSession | null>(() =>
    getActiveSession()
  );
  const [db, setDb] = useState<EnterpriseDatabase>(() => {
    const active = getActiveSession();
    return loadEnterpriseDatabase(active?.company_id || 'tenant_qualifacas');
  });
  const [employees, setEmployees] = useState<TenantAccount[]>(() => {
    const active = getActiveSession();
    return getCompanyEmployees(active?.company_id || 'tenant_qualifacas');
  });
  const [activeSection, setActiveSection] = useState<ActiveSection>(() => {
    const active = getActiveSession();
    return active?.role === 'operador' ? 'esteira' : 'bento_home';
  });
  const [realtimeStatus, setRealtimeStatus] = useState<
    'connected' | 'supabase_live' | 'reconnecting'
  >('connected');
  const [realtimeConfigTick, setRealtimeConfigTick] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(
    db.companies[0]?.id || null
  );
  const [prefillDeliveryOrder, setPrefillDeliveryOrder] =
    useState<DieOrder | null>(null);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    isRealtime?: boolean;
  } | null>(null);

  const showToast = (message: string, isRealtime = false) => {
    setToast({ message, isRealtime });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3800);
  };

  // Subscribe to Realtime updates for the logged-in company_id (Sections 2, 4, 5 & Team)
  useEffect(() => {
    if (!session?.company_id) return;

    const unsubscribe = subscribeToCompanyRealtime(
      session.company_id,
      (remoteEvent) => {
        const saved = saveEnterpriseDatabase({
          ...remoteEvent.db,
          company_id: session.company_id,
        });
        setDb(saved);
        setEmployees(getCompanyEmployees(session.company_id));
        showToast(
          `[Tempo Real] ${remoteEvent.actorName}: ${remoteEvent.actionLabel}`,
          true
        );
      },
      (status) => {
        setRealtimeStatus(status);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [session?.company_id, realtimeConfigTick]);

  const handleAuthenticated = (newSession: AuthSession) => {
    const tenantDb = loadEnterpriseDatabase(newSession.company_id);
    const companyEmps = getCompanyEmployees(newSession.company_id);
    setSession(newSession);
    setDb(tenantDb);
    setEmployees(companyEmps);
    setSelectedCompanyId(tenantDb.companies[0]?.id || null);
    setActiveSection(
      newSession.role === 'operador' ? 'esteira' : 'bento_home'
    );
    setSearchQuery('');
    showToast(
      newSession.role === 'operador'
        ? `Acesso de Produção liberado (${newSession.ownerName})`
        : 'Sessão iniciada com sucesso!'
    );
  };

  const handleLogout = () => {
    clearActiveSession();
    setSession(null);
    setSearchQuery('');
    setIsNewModalOpen(false);
  };

  const handleSelectSection = (target: ActiveSection) => {
    if (
      session?.role === 'operador' &&
      !OPERATOR_ALLOWED_SECTIONS.includes(target)
    ) {
      setActiveSection('esteira');
      return;
    }
    setActiveSection(target);
  };

  const commitDb = (
    nextDb: EnterpriseDatabase,
    realtimeMeta?: {
      section: 'esteira' | 'entregas' | 'retornos' | 'equipe' | 'all';
      actionLabel: string;
    }
  ) => {
    const activeTenantId =
      session?.company_id || nextDb.company_id || 'tenant_qualifacas';
    const currentEmps = getCompanyEmployees(activeTenantId);
    const saved = saveEnterpriseDatabase({
      ...nextDb,
      company_id: activeTenantId,
      employees: currentEmps,
    });
    setDb(saved);
    setEmployees(currentEmps);

    if (realtimeMeta && session) {
      publishRealtimeUpdate({
        company_id: activeTenantId,
        section: realtimeMeta.section,
        actionLabel: realtimeMeta.actionLabel,
        actorName: session.ownerName,
        actorRole: session.role,
        db: saved,
      });
    }
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
    let maxNum = 0;
    for (const c of db.companies) {
      const n = parseInt(c.id.replace(/\D/g, ''), 10);
      if (!Number.isNaN(n) && n > maxNum) maxNum = n;
    }
    const newId = `EMP-${String(maxNum + 1).padStart(2, '0')}`;
    const created: Company = {
      id: newId,
      company_id: session?.company_id,
      ...newCompData,
    };
    commitDb(
      {
        ...db,
        companies: [created, ...db.companies],
      },
      {
        section: 'all',
        actionLabel: `Empresa "${created.corporateName}" cadastrada`,
      }
    );
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

    let updatedCompanies = db.companies;
    if (!db.companies.some((c) => c.id === payload.companyId)) {
      updatedCompanies = [
        {
          id: payload.companyId,
          company_id: session?.company_id,
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
      company_id: session?.company_id,
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

    const stageLabel =
      PRODUCTION_STAGES.find((s) => s.id === payload.stage)?.label ||
      payload.stage;

    commitDb(
      {
        ...db,
        companies: updatedCompanies,
        orders: [newOrder, ...db.orders],
      },
      {
        section: 'esteira',
        actionLabel: `Nova ${newOrder.id} enviada para "${stageLabel}"`,
      }
    );
    if (!selectedCompanyId) {
      setSelectedCompanyId(payload.companyId);
    }

    showToast(`${newOrder.id} criada em "${stageLabel}"!`);
  };

  // Seção 2 • Esteira Física de Produção (Realtime Broadcast)
  const handleMoveStage = (orderId: string, targetStage: ProductionStage) => {
    const stamp = nowTimestampBR();
    const nextOrders = db.orders.map((o) => {
      if (o.id !== orderId) return o;
      return {
        ...o,
        stage: targetStage,
        stageUpdatedAt: stamp,
        stageHistory: [
          ...(o.stageHistory || []),
          { stage: targetStage, timestamp: stamp },
        ],
      };
    });
    const stageName =
      PRODUCTION_STAGES.find((s) => s.id === targetStage)?.label || targetStage;
    commitDb(
      { ...db, orders: nextOrders },
      {
        section: 'esteira',
        actionLabel: `${orderId} avançou para "${stageName}" na Seção 2`,
      }
    );
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
    commitDb(
      { ...db, orders: nextOrders },
      {
        section: 'all',
        actionLabel: `Status financeiro de ${orderId} atualizado`,
      }
    );
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
    commitDb(
      { ...db, orders: nextOrders },
      {
        section: 'all',
        actionLabel: `Faturamento 30 dias gerado para ${orderId}`,
      }
    );
    showToast(`Faturamento 30 dias gerado para ${orderId}!`);
  };

  // Seção 4 • Entregas e Logísticas de Saída (Realtime Broadcast)
  const handleAddDelivery = (deliveryData: Omit<DeliveryRecord, 'id'>) => {
    const newDel: DeliveryRecord = {
      id: getNextDeliveryId(db),
      company_id: session?.company_id,
      ...deliveryData,
    };
    const stamp = nowTimestampBR();
    const nextOrders = db.orders.map((o) =>
      o.id === deliveryData.orderId
        ? { ...o, stage: 'faca_pronta' as ProductionStage, stageUpdatedAt: stamp }
        : o
    );
    commitDb(
      {
        ...db,
        orders: nextOrders,
        deliveries: [newDel, ...db.deliveries],
      },
      {
        section: 'entregas',
        actionLabel: `Saída logística da ${deliveryData.orderId} registrada na Seção 4`,
      }
    );
    showToast(`Saída logística da ${deliveryData.orderId} registrada!`);
  };

  // Seção 5 • Retornos e Ajustes (Realtime Broadcast)
  const handleAddReturn = (retData: Omit<WarrantyReturnRecord, 'id'>) => {
    const newRet: WarrantyReturnRecord = {
      id: getNextReturnId(db),
      company_id: session?.company_id,
      ...retData,
    };
    commitDb(
      {
        ...db,
        returns: [newRet, ...db.returns],
      },
      {
        section: 'retornos',
        actionLabel: `Retorno de garantia (${retData.orderId}) registrado na Seção 5`,
      }
    );
    showToast(`Retorno de garantia (${retData.orderId}) registrado!`);
  };

  const handleUpdateReturnStatus = (id: string, nextStatus: ReturnStatus) => {
    const stamp = nowTimestampBR();
    const targetRet = db.returns.find((r) => r.id === id);
    const nextReturns = db.returns.map((r) =>
      r.id === id ? { ...r, status: nextStatus, updatedAt: stamp } : r
    );
    commitDb(
      { ...db, returns: nextReturns },
      {
        section: 'retornos',
        actionLabel: `Status do retorno ${targetRet?.orderId || id} alterado para "${nextStatus}" na Seção 5`,
      }
    );
    showToast(`Status do retorno atualizado (${stamp})!`);
  };

  const handleDeleteCompany = (companyId: string) => {
    const comp = db.companies.find((c) => c.id === companyId);
    const removedOrderIds = new Set(
      db.orders.filter((o) => o.companyId === companyId).map((o) => o.id)
    );
    const nextCompanies = db.companies.filter((c) => c.id !== companyId);
    const nextOrders = db.orders.filter((o) => o.companyId !== companyId);
    const nextDeliveries = db.deliveries.filter(
      (d) => !removedOrderIds.has(d.orderId)
    );
    const nextReturns = db.returns.filter(
      (r) => !removedOrderIds.has(r.orderId)
    );

    commitDb(
      {
        ...db,
        companies: nextCompanies,
        orders: nextOrders,
        deliveries: nextDeliveries,
        returns: nextReturns,
      },
      {
        section: 'all',
        actionLabel: `Empresa "${comp?.corporateName || companyId}" removida`,
      }
    );

    if (selectedCompanyId === companyId) {
      setSelectedCompanyId(nextCompanies[0]?.id || null);
    }
    showToast(`Empresa "${comp?.corporateName || companyId}" apagada!`);
  };

  const handleDeleteOrder = (orderId: string) => {
    const nextOrders = db.orders.filter((o) => o.id !== orderId);
    const nextDeliveries = db.deliveries.filter((d) => d.orderId !== orderId);
    const nextReturns = db.returns.filter((r) => r.orderId !== orderId);
    commitDb(
      {
        ...db,
        orders: nextOrders,
        deliveries: nextDeliveries,
        returns: nextReturns,
      },
      {
        section: 'esteira',
        actionLabel: `Ordem ${orderId} apagada`,
      }
    );
    showToast(`Ordem ${orderId} apagada com sucesso!`);
  };

  const handleDeleteDelivery = (deliveryId: string) => {
    const nextDeliveries = db.deliveries.filter((d) => d.id !== deliveryId);
    commitDb(
      { ...db, deliveries: nextDeliveries },
      {
        section: 'entregas',
        actionLabel: `Registro de entrega ${deliveryId} apagado na Seção 4`,
      }
    );
    showToast(`Registro de entrega ${deliveryId} apagado!`);
  };

  const handleDeleteReturn = (returnId: string) => {
    const nextReturns = db.returns.filter((r) => r.id !== returnId);
    commitDb(
      { ...db, returns: nextReturns },
      {
        section: 'retornos',
        actionLabel: `Registro de retorno ${returnId} apagado na Seção 5`,
      }
    );
    showToast(`Registro de retorno ${returnId} apagado!`);
  };

  // Employee Management (Admin Only)
  const handleAddEmployee = (payload: {
    ownerName: string;
    email: string;
    password: string;
    role: UserRole;
    jobTitle: string;
  }): { error?: string } => {
    if (!session) return { error: 'Sessão inválida.' };
    const res = registerEmployeeForCompany({
      company_id: session.company_id,
      companyName: session.companyName,
      ...payload,
    });
    if (res.error || !res.employee) {
      return { error: res.error };
    }
    const updatedList = getCompanyEmployees(session.company_id);
    setEmployees(updatedList);
    commitDb(
      { ...db, employees: updatedList },
      {
        section: 'equipe',
        actionLabel: `Funcionário "${res.employee.ownerName}" (${
          res.employee.role === 'operador' ? 'Operador' : 'Admin'
        }) cadastrado`,
      }
    );
    showToast(`Funcionário "${res.employee.ownerName}" cadastrado com sucesso!`);
    return {};
  };

  const handleToggleEmployeeRole = (email: string, nextRole: UserRole) => {
    if (!session) return;
    const updatedList = updateEmployeeRoleInCompany(
      email,
      session.company_id,
      nextRole
    );
    setEmployees(updatedList);
    commitDb(
      { ...db, employees: updatedList },
      {
        section: 'equipe',
        actionLabel: `Permissão de ${email} alterada para ${
          nextRole === 'operador' ? 'Operador' : 'Administrador'
        }`,
      }
    );
    showToast(
      `Perfil de ${email} alterado para ${
        nextRole === 'operador' ? 'Operador (Seções 2, 4 e 5)' : 'Administrador'
      }!`
    );
  };

  const handleDeleteEmployee = (email: string) => {
    if (!session) return;
    const updatedList = deleteEmployeeFromCompany(email, session.company_id);
    setEmployees(updatedList);
    commitDb(
      { ...db, employees: updatedList },
      {
        section: 'equipe',
        actionLabel: `Funcionário ${email} removido da equipe`,
      }
    );
    showToast(`Funcionário ${email} removido!`);
  };

  const handleImpersonateEmployee = (emp: TenantAccount) => {
    const newSession: AuthSession = {
      userId: emp.id,
      company_id: emp.company_id,
      companyName: emp.companyName,
      ownerName: emp.ownerName,
      email: emp.email,
      role: emp.role,
      jobTitle: emp.jobTitle,
      loggedInAt: new Date().toISOString(),
    };
    saveActiveSession(newSession);
    handleAuthenticated(newSession);
  };

  const counts = {
    companies: db.companies.length,
    inProduction: db.orders.filter((o) => o.stage !== 'faca_pronta').length,
    overdue: financials.overdueCount,
    deliveries: db.deliveries.length,
    openReturns: db.returns.filter((r) => r.status !== 'liberado').length,
    employees: employees.length,
  };

  if (!session) {
    return <AuthLoginScreen onAuthenticated={handleAuthenticated} />;
  }

  // Enforce RBAC section access
  const effectiveSection: ActiveSection =
    session.role === 'operador' &&
    !OPERATOR_ALLOWED_SECTIONS.includes(activeSection)
      ? 'esteira'
      : activeSection;

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 pb-24 selection:bg-rose-800 selection:text-white">
      {/* Navigation Shell */}
      <HeaderBar
        activeSection={effectiveSection}
        onSelectSection={handleSelectSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenNewOrder={() => setIsNewModalOpen(true)}
        tenantName={session.companyName}
        userRole={session.role}
        userName={session.ownerName}
        realtimeStatus={realtimeStatus}
        onLogout={handleLogout}
        counts={counts}
      />

      {/* Toast Notification (Standard + Realtime Live Event) */}
      {toast && (
        <div
          className={`fixed bottom-20 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-900 border ${
            toast.isRealtime
              ? 'border-emerald-500/70 shadow-emerald-950/60'
              : 'border-rose-700/70'
          } text-slate-50 text-xs font-semibold shadow-2xl flex items-center gap-2`}
        >
          {toast.isRealtime ? (
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-[1520px] mx-auto lg:pl-24 px-4 sm:px-6 pt-6">
        {session.role === 'admin' && effectiveSection === 'bento_home' && (
          <BentoOverviewSection
            companies={filteredCompanies}
            orders={filteredOrders}
            deliveries={db.deliveries}
            returns={db.returns}
            financials={financials}
            onNavigate={handleSelectSection}
            onOpenNewOrder={() => setIsNewModalOpen(true)}
            onSelectCompany={(id) => setSelectedCompanyId(id)}
          />
        )}

        {session.role === 'admin' && effectiveSection === 'empresas' && (
          <CompaniesCrmSection
            companies={filteredCompanies}
            orders={filteredOrders}
            selectedCompanyId={selectedCompanyId}
            onSelectCompany={setSelectedCompanyId}
            onAddCompany={handleAddCompany}
            onDeleteCompany={handleDeleteCompany}
            onDeleteOrder={handleDeleteOrder}
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

        {effectiveSection === 'esteira' && (
          <ProductionKanban
            orders={filteredOrders}
            onMoveStage={handleMoveStage}
            onDeleteOrder={handleDeleteOrder}
            onQuickRegisterDelivery={(order) => {
              setPrefillDeliveryOrder(order);
              handleSelectSection('entregas');
            }}
          />
        )}

        {session.role === 'admin' && effectiveSection === 'financeiro' && (
          <FinanceAnalyticsSection
            orders={filteredOrders}
            financials={financials}
            onTogglePaid={handleTogglePaid}
            onEmitBilling30d={handleEmitBilling30d}
            onDeleteOrder={handleDeleteOrder}
          />
        )}

        {effectiveSection === 'entregas' && (
          <DeliveriesLogisticsSection
            orders={db.orders}
            deliveries={db.deliveries}
            prefillOrder={prefillDeliveryOrder}
            onAddDelivery={handleAddDelivery}
            onDeleteDelivery={handleDeleteDelivery}
          />
        )}

        {effectiveSection === 'retornos' && (
          <WarrantyReturnsSection
            orders={db.orders}
            returns={db.returns}
            onAddReturn={handleAddReturn}
            onUpdateReturnStatus={handleUpdateReturnStatus}
            onDeleteReturn={handleDeleteReturn}
          />
        )}

        {session.role === 'admin' && effectiveSection === 'equipe' && (
          <TeamManagementSection
            session={session}
            employees={employees}
            realtimeStatus={realtimeStatus}
            onAddEmployee={handleAddEmployee}
            onToggleEmployeeRole={handleToggleEmployeeRole}
            onDeleteEmployee={handleDeleteEmployee}
            onImpersonateEmployee={handleImpersonateEmployee}
            onSupabaseConfigSaved={() => {
              setRealtimeConfigTick((t) => t + 1);
              showToast('Configuração Supabase Realtime salva e reconectada!');
            }}
          />
        )}
      </main>

      {/* Prominent Floating Action Button ("Nova OS") - Admin Only */}
      {session.role === 'admin' && (
        <button
          type="button"
          onClick={() => setIsNewModalOpen(true)}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3.5 rounded-3xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 active:scale-95 text-slate-50 border border-rose-500/40 shadow-2xl shadow-rose-950/90 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Nova OS</span>
        </button>
      )}

      {/* Fast Entry Modal */}
      {session.role === 'admin' && (
        <FastEntryModal
          isOpen={isNewModalOpen}
          onClose={() => setIsNewModalOpen(false)}
          companies={db.companies}
          nextOrderId={nextOrderId}
          onSaveOrder={handleCreateOrderFull}
        />
      )}
    </div>
  );
};

export default App;
