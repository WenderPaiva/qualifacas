import { EnterpriseDatabase } from '../types/order';

export function createEnterpriseSeedDatabase(): EnterpriseDatabase {
  return {
    version: 4,
    companies: [],
    orders: [],
    deliveries: [],
    returns: [],
  };
}
