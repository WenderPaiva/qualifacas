import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  KeyRound,
  Layers,
  Lock,
  Mail,
  UserPlus,
} from 'lucide-react';
import {
  authenticateTenant,
  registerNewTenant,
} from '../services/storageAdapter';
import { AuthSession } from '../types/order';

interface AuthLoginScreenProps {
  onAuthenticated: (session: AuthSession) => void;
}

export const AuthLoginScreen: React.FC<AuthLoginScreenProps> = ({
  onAuthenticated,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register fields
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
    onAuthenticated(res.session);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 flex flex-col justify-center items-center px-4 py-10 relative overflow-hidden selection:bg-rose-800 selection:text-white">
      {/* Subtle Crimson Ambient Glow */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[580px] h-[320px] bg-rose-900/20 blur-[130px] rounded-full" />
      <div className="pointer-events-none fixed -bottom-40 right-10 w-[380px] h-[280px] bg-red-950/25 blur-[120px] rounded-full" />

      <div className="w-full max-w-md rounded-3xl bg-zinc-900/90 border border-zinc-800/90 p-7 sm:p-9 shadow-2xl relative z-10">
        {/* Clean Brand Header */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-700 to-red-950 border border-rose-500/40 flex items-center justify-center text-slate-50 shadow-lg shadow-rose-950/70">
            <Layers className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 leading-none">
            Facas<span className="text-rose-500">Flow</span>
          </h1>
        </div>

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
            <span>Entrar</span>
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
            <span>Criar Conta</span>
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
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-sm text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Senha
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
              <span>Entrar no Painel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Nome da Empresa *
              </label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Nome da sua facaria"
                className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Responsável
              </label>
              <input
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                required
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="Digite seu e-mail"
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
                placeholder="Crie uma senha"
                className="w-full px-3.5 py-2.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-slate-100 placeholder-zinc-600 focus:border-rose-600 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-2xl font-bold text-xs bg-gradient-to-r from-rose-800 to-red-900 hover:from-rose-700 hover:to-red-800 text-white border border-rose-600/40 shadow-xl shadow-rose-950/70 flex items-center justify-center gap-2 transition cursor-pointer mt-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Criar Conta & Entrar</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
