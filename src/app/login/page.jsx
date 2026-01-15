"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginRequest = async (loginEmail, loginPassword) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      if (!res.ok) throw new Error("Invalid email or password");

      router.replace("/");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest(email, password);
  };

  const handleDemoLogin = () => {
    loginRequest("admin@test.com", "123456");
  };

  return (
    <div className="
      flex min-h-screen items-center justify-center px-4
      bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200
      dark:from-slate-900 dark:via-slate-950 dark:to-black
    ">
      <div className="
        w-full max-w-sm rounded-2xl p-8
        bg-white/80 backdrop-blur-xl
        dark:bg-slate-900/80
        shadow-xl ring-1 ring-black/5 dark:ring-white/10
      ">
        <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sign in
        </h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Access your dashboard
        </p>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full rounded-lg px-4 py-2.5 text-sm
              bg-white dark:bg-slate-800
              border border-gray-300 dark:border-slate-700
              text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full rounded-lg px-4 py-2.5 text-sm
              bg-white dark:bg-slate-800
              border border-gray-300 dark:border-slate-700
              text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
              outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full rounded-lg py-2.5 text-sm font-medium text-white
              bg-cyan-500 hover:bg-cyan-600
              transition disabled:opacity-60
            "
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="
            mt-4 w-full rounded-lg py-2.5 text-sm font-medium
            border border-gray-300 dark:border-slate-700
            text-gray-700 dark:text-gray-200
            hover:bg-gray-100 dark:hover:bg-slate-800
            transition disabled:opacity-60
          "
        >
          Use demo account
        </button>
      </div>
    </div>
  );
}
