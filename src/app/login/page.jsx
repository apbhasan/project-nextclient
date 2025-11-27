"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCredentialsLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password. For demo use any email + password demo123.");
    } else if (res?.ok) {
      window.location.href = "/";
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-black/50">
        <h1 className="text-2xl font-semibold text-slate-50 text-center">
          Login to <span className="text-emerald-400">LuxeMart</span>
        </h1>
        <p className="mt-2 text-center text-xs text-slate-400">
          Use Google or demo credentials to access protected pages.
        </p>

        {/* Google login */}
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
          className="mt-6 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/40 transition hover:bg-indigo-500"
        >
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3 text-xs text-slate-500">
          <div className="h-px flex-1 bg-slate-700" />
          <span>or sign in with email</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* Credentials form */}
        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div className="text-xs text-slate-400 mb-1">
            Demo credentials: use any email, password <span className="font-semibold text-emerald-300">demo123</span>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
              placeholder="demo123"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 bg-red-950/40 border border-red-900 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login with credentials"}
          </button>
        </form>
      </div>
    </div>
  );
}
