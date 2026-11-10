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

export type ActiveSection =
  | 'bento_home'
  | 'empresas'
  | 'esteira'
  | 'financeiro'
  | 'entregas'
  | 'retornos';

export interface Company {
  id: string;
  corporateName: string; // Razão Social / Nome Fantasia
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
  id: string; // e.g., "OS-308"
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
  id: string; // e.g., "ENT-101"
  orderId: string;
  toolDescription: string;
  companyName: string;
  method: DeliveryMethod;
  carrierOrPersonName: string; // Nome do motorista / portador / quem retirou
  dispatchedAt: string; // Data e Hora exata da saída (ex: "2026-11-09T16:40")
  notes?: string;
}

export interface WarrantyReturnRecord {
  id: string; // e.g., "RET-041"
  orderId: string; // OS original
  companyName: string;
  toolDescription: string;
  reason: string; // Motivo do Retorno (ex: Ajuste de vinco, Lâmina fora de esquadro...)
  technicalAction: string; // O que foi feito e ajustado
  adjustmentAmount: number; // R$ 0,00 se em garantia, ou novo valor
  status: ReturnStatus; // Em Análise | Em Ajuste de Bancada | Liberado Novamente
  createdAt: string; // Data/hora entrada retorno
  updatedAt: string;
}

export interface EnterpriseDatabase {
  version: number;
  companies: Company[];
  orders: DieOrder[];
  deliveries: DeliveryRecord[];
  returns: WarrantyReturnRecord[];
}
