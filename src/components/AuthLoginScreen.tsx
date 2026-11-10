import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Building2,
  KeyRound,
  Layers,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from 'lucide-react';
import {
  authenticateTenant,
  getTenantAccounts,
  registerNewTenant,
} from '../services/storageAdapter';
import { AuthSession, TenantAccount } from '../types/order';

interface AuthLoginScreenProps {
  onAuthenticated: (session: AuthSession) => void;
}

export const AuthLoginScreen: React.FC<AuthLoginScreenProps> = ({
  onAuthenticated,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('contato@qualifacas.com');
  const [password, setPassword] = useState('123456');

  // Register fields
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [tenants, setTenants] = useState<TenantAccount[]>(() =>
    getTenantAccounts()
  );

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const res = authenticateTenant(email, password);
    if (res.error || !res.session) {
      setErrorMsg(res.error || 'Falha na autenticação.');
      return;
    }
    onAuthenticated(res.session);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const res = registerNewTenant({
      companyName,
      ownerName,
      email: regEmail,
      password: regPassword,
    });
    if (res.error || !res.session) {
      setErrorMsg(res.error || 'Não foi possível criar a conta.');
      return;
    }
    setTenants(getTenantAccounts());
    onAuthenticated(res.session);
  };

  const handleQuickLogin = (account: TenantAccount) => {
    setErrorMsg(null);
    setMode('login');
    setEmail(account.email);
    setPassword(account.password);
    const res = authenticateTenant(account.email, account.password);
    if (res.session) {
      onAuthenticated(res.session);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 flex flex-col justify-center items-center px-4 py-10 relative overflow-hidden selection:bg-rose-800 selection:text-white">
      {/* Subtle Crimson Ambient Glow */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[360px] bg-rose-900/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none fixed -bottom-40 right-10 w-[420px] h-[300px] bg-red-950/25 blur-[120px] rounded-full" />

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left Column: Brand & Multi-Tenant Quick Switcher */}
        <div className="lg:col-span-5 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-7 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Brand Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/40 flex items-center justify-center text-slate-50 shadow-lg shadow-rose-950/70">
                <Layers className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-50 leading-none">
                  Facas<span className="text-rose-500">Flow</span>
                </h1>
                <span className="text-[11px] font-medium text-zinc-400">
                  SaaS Multi-Empresa • Corte & Vinco
                </span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-100 leading-snug mb-2">
              Gestão industrial com isolamento total de dados por facaria.
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Cada empresa possui seu próprio ambiente isolado (
              <code className="text-rose-400 font-mono">company_id</code>). Ordens de
              serviço, clientes, esteira física e financeiro nunca se misturam.
            </p>

            {/* Quick Access Accounts for Fast Testing */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  Acesso Rápido (Contas Cadastradas)
                </span>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {tenants.map((acc) => (
                  <button
                    key={acc.company_id}
                    type="button"
                    onClick={() => handleQuickLogin(acc)}
                    className="w-full text-left p-3 rounded-2xl bg-zinc-950/80 hover:bg-zinc-800/80 border border-zinc-800/90 hover:border-rose-700/50 transition-all group cursor-pointer flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="text-xs font-bold text-slate-100 truncate">
                          {acc.companyName}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {acc.email} • Senha:{' '}
                        <span className="font-mono text-zinc-300">
                          {acc.password}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl bg-rose-950/60 border border-rose-800/50 text-[10px] font-semibold text-rose-300 group-hover:bg-rose-800 group-hover:text-white transition shrink-0">
                      Entrar
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Sessão persistente e dados blindados por tenant.</span>
          </div>
        </div>

        {/* Right Column: Login / Register Form */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
          <div>
            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 mb-6">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg(null);
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
                  mode === 'login'
                    ? 'bg-gradient-to-r from-rose-800 to-red-900 text-white shadow-md'
                    : 'text-zinc-400 hover:text-slate-200'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Entrar na Facaria</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setErrorMsg(null);
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition cursor-pointer ${
                  mode === 'register'
                    ? 'bg-gradient-to-r from-rose-800 to-red-900 text-white shadow-md'
                    : 'text-zinc-400 hover:text-slate-200'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Cadastrar Nova Facaria</span>
              </button>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-2xl bg-rose-950/60 border border-rose-700/60 text-rose-200 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {mode === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-50">
                    Acesse o painel da sua empresa
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Entre com seu e-mail corporativo e senha para carregar os dados
                    exclusivos da sua facaria.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    E-mail da Facaria
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contato@suafacaria.com"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Senha de Acesso
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2"
                >
                  <span>Acessar Painel FacasFlow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div>
                  <h3 className="text-base font-bold text-slate-50">
                    Cadastrar Nova Facaria (Novo Tenant)
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Crie um banco de dados totalmente limpo e isolado para outra
                    empresa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Nome da Facaria / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex: Facaria do Francisco"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Responsável / Gestor
                    </label>
                    <input
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Ex: Francisco Silva"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    E-mail de Login *
                  </label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="francisco@facaria.com"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Senha *
                  </label>
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Crie uma senha segura"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Criar Ambiente Isolado & Entrar</span>
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
            <span>FacasFlow SaaS • Multi-Tenant Engine</span>
            <span>Qualifacas & Parceiros</span>
          </div>
        </div>
      </div>
    </div>
  );
};
