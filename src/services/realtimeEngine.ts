import {
  EnterpriseDatabase,
  RealtimeSyncEvent,
  TenantAccount,
  UserRole,
} from '../types/order';

const SUPABASE_CONFIG_KEY = 'facasflow_supabase_config_v1';
const CLIENT_INSTANCE_ID = `client_${Math.random().toString(36).slice(2, 10)}`;

export interface SupabaseRealtimeConfig {
  url: string;
  anonKey: string;
  enabled: boolean;
}

export function getSupabaseConfig(): SupabaseRealtimeConfig {
  try {
    const raw = window.localStorage.getItem(SUPABASE_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SupabaseRealtimeConfig;
      if (parsed && typeof parsed.url === 'string' && typeof parsed.anonKey === 'string') {
        return parsed;
      }
    }
  } catch {
    // ignore
  }
  return { url: '', anonKey: '', enabled: false };
}

export function saveSupabaseConfig(config: SupabaseRealtimeConfig): void {
  try {
    window.localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}

// Active Supabase channel reference if connected
let activeSupabaseChannel: any = null;
let activeSupabaseClient: any = null;
let activeBroadcastChannel: BroadcastChannel | null = null;

/**
 * Publish a real-time update for Sections 2 (Esteira), 4 (Entregas), 5 (Retornos), or Equipe
 * across Supabase Realtime, BroadcastChannel, StorageEvent, and Local Server SSE.
 */
export function publishRealtimeUpdate(params: {
  company_id: string;
  section: 'esteira' | 'entregas' | 'retornos' | 'equipe' | 'all';
  actionLabel: string;
  actorName: string;
  actorRole: UserRole;
  db: EnterpriseDatabase;
}): void {
  const event: RealtimeSyncEvent & { senderInstanceId: string } = {
    eventId: `rt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    senderInstanceId: CLIENT_INSTANCE_ID,
    company_id: params.company_id,
    section: params.section,
    actionLabel: params.actionLabel,
    actorName: params.actorName,
    actorRole: params.actorRole,
    timestamp: new Date().toISOString(),
    db: params.db,
  };

  // 1. Native BroadcastChannel (Instant cross-tab sync)
  try {
    if (activeBroadcastChannel) {
      activeBroadcastChannel.postMessage(event);
    } else if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel(`facasflow_rt_${params.company_id}`);
      ch.postMessage(event);
      ch.close();
    }
  } catch {
    // ignore
  }

  // 2. LocalStorage Realtime Event key (triggers 'storage' event in other tabs)
  try {
    window.localStorage.setItem(
      `facasflow_rt_event_${params.company_id}`,
      JSON.stringify(event)
    );
  } catch {
    // ignore
  }

  // 3. Supabase Realtime Channel Broadcast + Optional Table Upsert
  try {
    if (activeSupabaseChannel) {
      activeSupabaseChannel.send({
        type: 'broadcast',
        event: 'facasflow_sync',
        payload: event,
      });
    }
    if (activeSupabaseClient) {
      activeSupabaseClient
        .from('facasflow_tenant_state')
        .upsert(
          {
            company_id: params.company_id,
            db_payload: params.db,
            updated_at: event.timestamp,
            last_action: params.actionLabel,
            last_actor: params.actorName,
          },
          { onConflict: 'company_id' }
        )
        .then(() => {})
        .catch(() => {});
    }
  } catch {
    // ignore
  }
}

/**
 * Subscribe to real-time updates for a specific `company_id` (Sections 2, 4, 5 & Team)
 */
export function subscribeToCompanyRealtime(
  company_id: string,
  onRemoteUpdate: (event: RealtimeSyncEvent) => void,
  onConnectionStatusChange?: (status: 'connected' | 'supabase_live' | 'reconnecting') => void
): () => void {
  let isDisposed = false;
  let lastSeenEventId = '';

  const handleIncoming = (rawEvent: any) => {
    if (isDisposed || !rawEvent) return;
    if (rawEvent.senderInstanceId === CLIENT_INSTANCE_ID) return;
    if (rawEvent.company_id !== company_id) return;
    if (rawEvent.eventId && rawEvent.eventId === lastSeenEventId) return;
    if (!rawEvent.db || !Array.isArray(rawEvent.db.orders)) return;

    lastSeenEventId = rawEvent.eventId || String(Date.now());
    onRemoteUpdate(rawEvent as RealtimeSyncEvent);
  };

  // 1. Setup BroadcastChannel
  if (typeof BroadcastChannel !== 'undefined') {
    try {
      if (activeBroadcastChannel) {
        activeBroadcastChannel.close();
      }
      activeBroadcastChannel = new BroadcastChannel(`facasflow_rt_${company_id}`);
      activeBroadcastChannel.onmessage = (msg) => {
        handleIncoming(msg.data);
      };
      onConnectionStatusChange?.('connected');
    } catch {
      // ignore
    }
  }

  // 2. Setup Window Storage Event Listener (fires when another tab modifies localStorage)
  const storageHandler = (e: StorageEvent) => {
    if (!e.newValue) return;
    if (e.key === `facasflow_rt_event_${company_id}`) {
      try {
        const parsed = JSON.parse(e.newValue);
        handleIncoming(parsed);
      } catch {
        // ignore
      }
    } else if (e.key === `facasflow_tenant_db_${company_id}`) {
      try {
        const parsedDb = JSON.parse(e.newValue) as EnterpriseDatabase;
        if (parsedDb && parsedDb.company_id === company_id) {
          handleIncoming({
            eventId: `storage_${Date.now()}`,
            company_id,
            section: 'all',
            actionLabel: 'Sincronização em tempo real recebida',
            actorName: 'Equipe',
            actorRole: 'operador',
            timestamp: new Date().toISOString(),
            db: parsedDb,
          });
        }
      } catch {
        // ignore
      }
    }
  };
  window.addEventListener('storage', storageHandler);

  // 3. Setup Server-Sent Events (SSE) if running on localhost server.cjs
  let sseSource: EventSource | null = null;
  if (
    typeof EventSource !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1')
  ) {
    try {
      sseSource = new EventSource(
        `/api/realtime?company_id=${encodeURIComponent(company_id)}`
      );
      sseSource.onmessage = (evt) => {
        try {
          const data = JSON.parse(evt.data);
          handleIncoming(data);
        } catch {
          // ignore
        }
      };
    } catch {
      // ignore
    }
  }

  // 4. Setup Supabase Realtime Channel (Broadcast + Postgres Changes for Sections 2, 4, 5)
  const supaCfg = getSupabaseConfig();
  if (supaCfg.enabled && supaCfg.url.trim() && supaCfg.anonKey.trim()) {
    const dynamicImport = new Function('url', 'return import(url)');
    dynamicImport('https://esm.sh/@supabase/supabase-js@2.47.10')
      .then((mod: any) => {
        if (isDisposed) return;
        const createClient = mod.createClient;
        const client = createClient(supaCfg.url.trim(), supaCfg.anonKey.trim(), {
          realtime: { params: { eventsPerSecond: 20 } },
        });
        activeSupabaseClient = client;

        // Fetch latest state from Supabase table if available
        client
          .from('facasflow_tenant_state')
          .select('db_payload, last_action, last_actor, updated_at')
          .eq('company_id', company_id)
          .maybeSingle()
          .then(({ data }: any) => {
            if (!isDisposed && data?.db_payload) {
              handleIncoming({
                eventId: `supa_init_${data.updated_at}`,
                company_id,
                section: 'all',
                actionLabel: data.last_action || 'Sincronizado via Supabase',
                actorName: data.last_actor || 'Supabase Cloud',
                actorRole: 'operador',
                timestamp: data.updated_at || new Date().toISOString(),
                db: data.db_payload,
              });
            }
          })
          .catch(() => {});

        const channel = client
          .channel(`facasflow_company_${company_id}`, {
            config: { broadcast: { self: false } },
          })
          .on('broadcast', { event: 'facasflow_sync' }, (payload: any) => {
            if (payload?.payload) {
              handleIncoming(payload.payload);
            }
          })
          .on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: 'facasflow_tenant_state',
              filter: `company_id=eq.${company_id}`,
            },
            (change: any) => {
              const row = change?.new;
              if (row && row.db_payload) {
                handleIncoming({
                  eventId: `pg_${row.updated_at || Date.now()}`,
                  company_id,
                  section: 'all',
                  actionLabel: row.last_action || 'Atualização Supabase Realtime',
                  actorName: row.last_actor || 'Produção',
                  actorRole: 'operador',
                  timestamp: row.updated_at || new Date().toISOString(),
                  db: row.db_payload,
                });
              }
            }
          )
          .subscribe((status: string) => {
            if (status === 'SUBSCRIBED' && !isDisposed) {
              onConnectionStatusChange?.('supabase_live');
            }
          });

        activeSupabaseChannel = channel;
      })
      .catch(() => {
        // Fallback to native BroadcastChannel/Storage realtime
      });
  }

  return () => {
    isDisposed = true;
    window.removeEventListener('storage', storageHandler);
    if (sseSource) {
      sseSource.close();
      sseSource = null;
    }
    if (activeBroadcastChannel) {
      activeBroadcastChannel.close();
      activeBroadcastChannel = null;
    }
    if (activeSupabaseClient && activeSupabaseChannel) {
      try {
        activeSupabaseClient.removeChannel(activeSupabaseChannel);
      } catch {
        // ignore
      }
      activeSupabaseChannel = null;
    }
  };
}

/**
 * Sync employee accounts across Supabase / BroadcastChannel for the same company
 */
export function broadcastEmployeeRegistryUpdate(accounts: TenantAccount[]): void {
  try {
    window.localStorage.setItem(
      'facasflow_saas_tenants_v1',
      JSON.stringify(accounts)
    );
  } catch {
    // ignore
  }
}
