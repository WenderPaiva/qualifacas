import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  Copy,
  Database,
  Eye,
  KeyRound,
  Lock,
  Mail,
  Radio,
  Shield,
  ShieldAlert,
  Trash2,
  UserCheck,
  UserPlus,
  Users,
  Wrench,
} from 'lucide-react';
import {
  getSupabaseConfig,
  saveSupabaseConfig,
  SupabaseRealtimeConfig,
} from '../services/realtimeEngine';
import { AuthSession, TenantAccount, UserRole } from '../types/order';

interface TeamManagementSectionProps {
  session: AuthSession;
  employees: TenantAccount[];
  realtimeStatus: 'connected' | 'supabase_live' | 'reconnecting';
  onAddEmployee: (payload: {
    ownerName: string;
    email: string;
    password: string;
    role: UserRole;
    jobTitle: string;
  }) => { error?: string };
  onToggleEmployeeRole: (email: string, nextRole: UserRole) => void;
  onDeleteEmployee: (email: string) => void;
  onImpersonateEmployee: (employee: TenantAccount) => void;
  onSupabaseConfigSaved: () => void;
}

export const TeamManagementSection: React.FC<TeamManagementSectionProps> = ({
  session,
  employees,
  realtimeStatus,
  onAddEmployee,
  onToggleEmployeeRole,
  onDeleteEmployee,
  onImpersonateEmployee,
  onSupabaseConfigSaved,
}) => {
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [role, setRole] = useState<UserRole>('operador');
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmDeleteEmail, setConfirmDeleteEmail] = useState<string | null>(
    null
  );
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Supabase Realtime Optional Cloud Config
  const [supaConfig, setSupaConfig] = useState<SupabaseRealtimeConfig>(() =>
    getSupabaseConfig()
  );
  const [showSupaPanel, setShowSupaPanel] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const res = onAddEmployee({
      ownerName: ownerName.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim(),
      role,
      jobTitle:
        jobTitle.trim() ||
        (role === 'operador' ? 'Operador de Produção' : 'Administrador'),
    });
    if (res.error) {
      setFormError(res.error);
      return;
    }
    setOwnerName('');
    setEmail('');
    setPassword('');
    setJobTitle('');
    setRole('operador');
  };

  const handleCopyMobileInviteLink = (emp: TenantAccount) => {
    try {
      const token = window.btoa(
        unescape(encodeURIComponent(JSON.stringify(emp)))
      );
      const baseUrl = `${window.location.origin}${window.location.pathname}`;
      const inviteUrl = `${baseUrl}?emp_sync=${encodeURIComponent(token)}`;
      navigator.clipboard.writeText(inviteUrl);
      setCopiedEmail(emp.email);
      setTimeout(() => setCopiedEmail(null), 2500);
    } catch {
      // ignore
    }
  };

  const handleSaveSupabase = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(supaConfig);
    onSupabaseConfigSaved();
    setShowSupaPanel(false);
  };

  const supabaseSqlSnippet = `-- Execute no SQL Editor do seu projeto Supabase para habilitar o Realtime Multi-Tenant:
create table if not exists public.facasflow_tenant_state (
  company_id text primary key,
  db_payload jsonb not null default '{}'::jsonb,
  last_action text,
  last_actor text,
  updated_at timestamptz not null default now()
);

alter table public.facasflow_tenant_state enable row level security;

create policy "Allow tenant realtime access"
  on public.facasflow_tenant_state
  for all
  to anon, authenticated
  using (true)
  with check (true);

alter publication supabase_realtime add table public.facasflow_tenant_state;`;

  return (
    <div className="space-y-6">
      {/* Top Banner: RBAC & Realtime Status */}
      <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-950/90 text-rose-300 border border-rose-700/50 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-rose-400" />
              Painel do Administrador
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-700/40 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              {realtimeStatus === 'supabase_live'
                ? 'Supabase Realtime Conectado (Seções 2, 4 e 5)'
                : 'Sincronização em Tempo Real Ativa (Seções 2, 4 e 5)'}
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-50 pt-1">
            Gestão de Funcionários & Controle de Acesso (RBAC)
          </h2>
          <p className="text-xs text-zinc-400 max-w-3xl">
            Cadastre os operadores da sua fábrica. Quando um funcionário com perfil{' '}
            <strong className="text-slate-200">Operador / Produção</strong> faz login,
            ele enxerga exclusivamente as{' '}
            <strong className="text-rose-400">
              Seções 2 (Esteira), 4 (Entregas) e 5 (Retornos)
            </strong>
            , e toda atualização reflete na sua tela em tempo real sem precisar dar F5.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setShowSupaPanel((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold bg-zinc-950 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition cursor-pointer"
          >
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Configurar Supabase Realtime</span>
          </button>
        </div>
      </div>

      {/* Optional Supabase Cloud Realtime Configuration Drawer */}
      {showSupaPanel && (
        <div className="rounded-3xl bg-zinc-900 border border-emerald-800/50 p-6 space-y-4 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-50 flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                Conexão Supabase Realtime (Seções 2, 4 e 5 em Nuvem)
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                O FacasFlow já sincroniza abas e sessões em tempo real automaticamente.
                Para sincronizar dispositivos em redes diferentes via Supabase Cloud,
                insira a URL e a Anon/Publishable Key do seu projeto Supabase.
              </p>
            </div>
            <label className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 cursor-pointer">
              <input
                type="checkbox"
                checked={supaConfig.enabled}
                onChange={(e) =>
                  setSupaConfig({ ...supaConfig, enabled: e.target.checked })
                }
                className="rounded accent-emerald-500 w-4 h-4"
              />
              <span>Habilitar Supabase Cloud</span>
            </label>
          </div>

          <form onSubmit={handleSaveSupabase} className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-5">
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                Supabase Project URL
              </label>
              <input
                type="url"
                value={supaConfig.url}
                onChange={(e) =>
                  setSupaConfig({ ...supaConfig, url: e.target.value })
                }
                placeholder="https://seu-projeto.supabase.co"
                className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-emerald-500 outline-none"
              />
            </div>
            <div className="md:col-span-5">
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
                Supabase Publishable / Anon Key
              </label>
              <input
                type="password"
                value={supaConfig.anonKey}
                onChange={(e) =>
                  setSupaConfig({ ...supaConfig, anonKey: e.target.value })
                }
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-emerald-500 outline-none"
              />
            </div>
            <div className="md:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-zinc-950 transition cursor-pointer"
              >
                Salvar & Conectar
              </button>
            </div>
          </form>

          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-zinc-400">
                Script SQL para criar a tabela Realtime no Supabase:
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(supabaseSqlSnippet);
                  setCopiedSql(true);
                  setTimeout(() => setCopiedSql(false), 2000);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-[11px] font-semibold text-zinc-300 border border-zinc-800 cursor-pointer"
              >
                {copiedSql ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SQL Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar SQL</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-[11px] font-mono text-zinc-400 overflow-x-auto leading-relaxed">
              {supabaseSqlSnippet}
            </pre>
          </div>
        </div>
      )}

      {/* Main Grid: Left = Register Employee Form, Right = Employee List & Permissions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Add Employee Form */}
        <div className="lg:col-span-5 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-2xl bg-rose-950/80 border border-rose-700/50 flex items-center justify-center text-rose-400">
                <UserPlus className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-50">
                  Cadastrar Novo Funcionário
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Vinculado automaticamente à sua empresa
                </p>
              </div>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-2xl bg-rose-950/60 border border-rose-700/60 text-rose-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Nome do Funcionário *
                </label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Ex: Carlos Montador"
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    E-mail de Login *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      inputMode="email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="carlos@facaria.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Senha de Acesso *
                  </label>
                  <div className="relative">
                    <Lock className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ex: 123456"
                      className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Cargo / Função na Fábrica
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Ex: Serrador, Dobrador, Expedição..."
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Nível de Permissão (Perfil de Acesso) *
                </label>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('operador')}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-start gap-3 ${
                      role === 'operador'
                        ? 'bg-rose-950/50 border-rose-600/70 text-slate-50'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-900'
                    }`}
                  >
                    <Wrench
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        role === 'operador' ? 'text-rose-400' : 'text-zinc-500'
                      }`}
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-100">
                        Operador / Produção (Restrito à Fábrica)
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                        Libera acesso <strong>apenas</strong> às Seções{' '}
                        <span className="text-rose-300 font-semibold">
                          2 (Esteira Física), 4 (Entregas) e 5 (Retornos)
                        </span>
                        . Oculta Finanças, Empresas e Visão Geral.
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-start gap-3 ${
                      role === 'admin'
                        ? 'bg-rose-950/50 border-rose-600/70 text-slate-50'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-900'
                    }`}
                  >
                    <Shield
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        role === 'admin' ? 'text-rose-400' : 'text-zinc-500'
                      }`}
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-100">
                        Administrador / Patrão (Acesso Total)
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                        Acesso irrestrito a todas as seções, financeiro, cadastro de
                        empresas e gestão de equipe.
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-lg shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>Cadastrar Funcionário na Empresa</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Active Team Directory */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-slate-200">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-50">
                    Usuários & Funcionários da Empresa ({employees.length})
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    Gerencie cargos, teste a visão de operador ou envie o link de acesso
                    para o celular do funcionário
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {employees.map((emp) => {
                const isSelf =
                  emp.email.trim().toLowerCase() ===
                  session.email.trim().toLowerCase();
                const isOperador = emp.role === 'operador';

                return (
                  <div
                    key={emp.email}
                    className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-700 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-slate-100">
                          {emp.ownerName}
                        </span>
                        {isSelf && (
                          <span className="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-300 text-[10px] font-semibold">
                            Você
                          </span>
                        )}
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                            isOperador
                              ? 'bg-amber-950/70 text-amber-300 border-amber-700/50'
                              : 'bg-rose-950/80 text-rose-300 border-rose-700/50'
                          }`}
                        >
                          {isOperador
                            ? 'Operador • Seções 2, 4 e 5'
                            : 'Administrador Total'}
                        </span>
                      </div>

                      <div className="text-xs text-zinc-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span>
                          Cargo:{' '}
                          <strong className="text-zinc-200">
                            {emp.jobTitle ||
                              (isOperador ? 'Operador de Produção' : 'Administrador')}
                          </strong>
                        </span>
                        <span>•</span>
                        <span>
                          E-mail:{' '}
                          <code className="text-slate-200 font-mono">
                            {emp.email}
                          </code>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <KeyRound className="w-3 h-3 text-zinc-500" />
                          Senha:{' '}
                          <code className="text-slate-300 font-mono">
                            {emp.password}
                          </code>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {/* Copy Link for Mobile / WhatsApp */}
                      <button
                        type="button"
                        onClick={() => handleCopyMobileInviteLink(emp)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-[11px] font-semibold transition cursor-pointer"
                        title="Copiar link de acesso configurado para o celular do funcionário"
                      >
                        {copiedEmail === emp.email ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Link Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Link Celular</span>
                          </>
                        )}
                      </button>

                      {/* Test Employee View */}
                      {!isSelf && (
                        <button
                          type="button"
                          onClick={() => onImpersonateEmployee(emp)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-800/50 text-[11px] font-semibold transition cursor-pointer"
                          title="Entrar imediatamente com o perfil deste funcionário para testar a visão dele"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Entrar como {emp.ownerName.split(' ')[0]}</span>
                        </button>
                      )}

                      {/* Toggle Role */}
                      {!isSelf && (
                        <button
                          type="button"
                          onClick={() =>
                            onToggleEmployeeRole(
                              emp.email,
                              isOperador ? 'admin' : 'operador'
                            )
                          }
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-[11px] font-medium transition cursor-pointer"
                          title="Alternar entre Operador (Seções 2, 4, 5) e Administrador"
                        >
                          <UserCheck className="w-3.5 h-3.5 text-zinc-400" />
                          <span>
                            {isOperador ? 'Tornar Admin' : 'Tornar Operador'}
                          </span>
                        </button>
                      )}

                      {/* Delete Employee */}
                      {!isSelf &&
                        (confirmDeleteEmail === emp.email ? (
                          <div className="inline-flex items-center gap-1 bg-rose-950/90 border border-rose-700/70 rounded-xl px-2 py-1">
                            <button
                              type="button"
                              onClick={() => {
                                onDeleteEmployee(emp.email);
                                setConfirmDeleteEmail(null);
                              }}
                              className="text-[10px] font-bold text-rose-200 hover:text-white px-1.5 cursor-pointer"
                            >
                              Confirmar
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteEmail(null)}
                              className="text-[10px] text-zinc-400 hover:text-zinc-200 px-1 cursor-pointer"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteEmail(emp.email)}
                            className="p-2 rounded-xl bg-zinc-900 hover:bg-rose-950/80 text-zinc-400 hover:text-rose-300 border border-zinc-800 hover:border-rose-700/50 transition cursor-pointer"
                            title="Apagar funcionário"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              Operadores enxergam apenas as Seções 2, 4 e 5.
            </span>
            <span>
              Dica: Abra uma aba anônima e faça login como operador para ver o
              Realtime funcionando ao vivo!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
