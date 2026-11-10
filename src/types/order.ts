export type ProductionStage =
  | 'arquivo_recebido'
  | 'desenho_produzido'
  | 'faca_serrada'
  | 'faca_dobrada'
  | 'faca_ajustada'
  | 'faca_pronta';

export type PaymentModality =
  | 'pix'
  | 'a_prazo'
  | 'dinheiro'
  | 'cartao'
  | 'cortesia';

export type PaymentStatus = 'pago' | 'a_receber' | 'vencido' | 'sem_nota' | 'cortesia';

export type DeliveryMethod =
  | 'cliente_buscou'
  | 'uber_flash'
  | 'entregador_proprio'
  | 'portador';

export type ReturnStatus = 'em_analise' | 'em_ajuste' | 'liberado';

export type UserRole = 'admin' | 'operador';

export type ActiveSection =
  | 'bento_home'
  | 'empresas'
  | 'esteira'
  | 'financeiro'
  | 'entregas'
  | 'retornos'
  | 'equipe';

export interface TenantAccount {
  id?: string; // ID do usuário (ex: "USR-001")
  company_id: string; // Identificador único Multi-tenant da empresa
  companyName: string; // Nome da Facaria
  ownerName: string; // Nome do usuário / funcionário
  email: string;
  password: string;
  role: UserRole; // 'admin' (Patrão/Total) | 'operador' (Produção: Seções 2, 4 e 5)
  jobTitle?: string; // Cargo (ex: "Montador de Facas", "Serrador", "Logística", "Proprietário")
  createdAt: string;
}

export interface AuthSession {
  userId?: string;
  company_id: string;
  companyName: string;
  ownerName: string;
  email: string;
  role: UserRole;
  jobTitle?: string;
  loggedInAt: string;
}

export interface Company {
  id: string;
  company_id?: string; // Tenant owner ID
  corporateName: string; // Razão Social / Nome Fantasia do cliente da facaria
  cnpj: string;
  phone: string; // WhatsApp
  contactName: string;
  city?: string;
}

export interface StageLog {
  stage: ProductionStage;
  timestamp: string; // ISO string or formatted "DD/MM às HH:mm"
}

export interface DieOrder {
  id: string; // e.g., "OS-001"
  company_id?: string; // Tenant owner ID
  companyId: string;
  companyName: string;
  companyPhone: string;
  toolDescription: string; // e.g., "Faca Caixa Duplex Tampa e Fundo"
  bladeMeters?: number;
  woodMm?: 15 | 18 | 22;
  amount: number; // Valor (R$)
  paymentModality: PaymentModality; // PIX, Dinheiro, Cartão, A Prazo - 30/60d, Cortesia / Não Paga
  paymentStatus: PaymentStatus;
  stage: ProductionStage;
  stageUpdatedAt: string; // Data/hora da última movimentação na esteira
  stageHistory: StageLog[];
  createdAt: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  paidAt?: string;
}

export interface DeliveryRecord {
  id: string; // e.g., "ENT-001"
  company_id?: string; // Tenant owner ID
  orderId: string;
  toolDescription: string;
  companyName: string;
  method: DeliveryMethod;
  carrierOrPersonName: string; // Nome do motorista / portador / quem retirou
  dispatchedAt: string; // Data e Hora exata da saída
  notes?: string;
}

export interface WarrantyReturnRecord {
  id: string; // e.g., "RET-001"
  company_id?: string; // Tenant owner ID
  orderId: string; // OS original
  companyName: string;
  toolDescription: string;
  reason: string; // Motivo do Retorno
  technicalAction: string; // O que foi feito e ajustado
  adjustmentAmount: number; // R$ 0,00 se em garantia, ou novo valor
  status: ReturnStatus; // Em Análise | Em Ajuste de Bancada | Liberado Novamente
  createdAt: string; // Data/hora entrada retorno
  updatedAt: string;
}

export interface EnterpriseDatabase {
  version: number;
  company_id: string; // Strict tenant isolation key
  companies: Company[];
  orders: DieOrder[];
  deliveries: DeliveryRecord[];
  returns: WarrantyReturnRecord[];
  employees?: TenantAccount[];
}

export interface RealtimeSyncEvent {
  eventId: string;
  company_id: string;
  section: 'esteira' | 'entregas' | 'retornos' | 'equipe' | 'all';
  actionLabel: string;
  actorName: string;
  actorRole: UserRole;
  timestamp: string;
  db: EnterpriseDatabase;
}
