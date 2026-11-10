import { createEnterpriseSeedDatabase } from '../data/seedOrders';
import { EnterpriseDatabase } from '../types/order';
import { normalizeOrderPaymentStatus } from '../utils/financeEngine';

const STORAGE_KEY = 'facasflow_production_v1';
const LEGACY_DEMO_KEYS = [
  'facasflow_orders_v1',
  'facasflow_lean_v2',
  'facasflow_enterprise_bento_v3',
];

function normalizeDb(db: EnterpriseDatabase): EnterpriseDatabase {
  return {
    version: 4,
    companies: Array.isArray(db.companies) ? db.companies : [],
    orders: (Array.isArray(db.orders) ? db.orders : [])
      .map(normalizeOrderPaymentStatus)
      .sort((a, b) => {
        const nA = parseInt(a.id.replace(/\D/g, ''), 10) || 0;
        const nB = parseInt(b.id.replace(/\D/g, ''), 10) || 0;
        return nB - nA;
      }),
    deliveries: Array.isArray(db.deliveries) ? db.deliveries : [],
    returns: Array.isArray(db.returns) ? db.returns : [],
  };
}

export function loadEnterpriseDatabase(): EnterpriseDatabase {
  try {
    // Remove old demo keys so browser starts completely clean
    for (const oldKey of LEGACY_DEMO_KEYS) {
      window.localStorage.removeItem(oldKey);
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as EnterpriseDatabase;
      if (parsed && Array.isArray(parsed.companies) && Array.isArray(parsed.orders)) {
        return normalizeDb(parsed);
      }
    }
  } catch {
    // Fallback to empty production database
  }

  const emptyDb = normalizeDb(createEnterpriseSeedDatabase());
  saveEnterpriseDatabase(emptyDb);
  return emptyDb;
}

export function saveEnterpriseDatabase(db: EnterpriseDatabase): EnterpriseDatabase {
  const normalized = normalizeDb(db);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch {
    // ignore quota issues
  }

  if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
    fetch('/api/orders', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(normalized),
    }).catch(() => {});
  }

  return normalized;
}

export function getNextOrderId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const o of db.orders) {
    const num = parseInt(o.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `OS-${String(max + 1).padStart(3, '0')}`;
}

export function getNextDeliveryId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const d of db.deliveries) {
    const num = parseInt(d.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `ENT-${String(max + 1).padStart(3, '0')}`;
}

export function getNextReturnId(db: EnterpriseDatabase): string {
  let max = 0;
  for (const r of db.returns) {
    const num = parseInt(r.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(num) && num > max) max = num;
  }
  return `RET-${String(max + 1).padStart(3, '0')}`;
}
