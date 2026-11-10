import { EnterpriseDatabase, TenantAccount } from '../types/order';

export const DEFAULT_TENANT_ACCOUNTS: TenantAccount[] = [
  {
    id: 'USR-001',
    company_id: 'tenant_qualifacas',
    companyName: 'Qualifacas',
    ownerName: 'Wender Paiva',
    email: 'contato@qualifacas.com',
    password: '123456',
    role: 'admin',
    jobTitle: 'Administrador / Proprietário',
    createdAt: '2026-11-10',
  },
  {
    id: 'USR-002',
    company_id: 'tenant_francisco',
    companyName: 'Facaria do Francisco',
    ownerName: 'Francisco',
    email: 'francisco@facaria.com',
    password: '123456',
    role: 'admin',
    jobTitle: 'Administrador / Proprietário',
    createdAt: '2026-11-10',
  },
];

export function createEnterpriseSeedDatabase(
  company_id: string = 'tenant_qualifacas'
): EnterpriseDatabase {
  return {
    version: 6,
    company_id,
    companies: [],
    orders: [],
    deliveries: [],
    returns: [],
    employees: [],
  };
}
