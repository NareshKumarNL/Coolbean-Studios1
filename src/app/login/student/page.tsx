"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setSession } from "@/lib/auth";

export default function StudentLoginPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const identifier = (fd.get("identifier") as string).trim();
    const password = fd.get("password") as string;

    if (!identifier || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/student-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setSession({ role: "student", name: data.name, email: data.email, studentId: data.studentId });
    router.push("/student/home");
  }

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="page-container w-full">
        <div className="max-w-md mx-auto">
          <Link href="/login" className="inline-flex items-center gap-2 font-body text-sm text-charcoal-light hover:text-charcoal transition-colors duration-200 mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Login
          </Link>

          <div className="mb-10">
            <div className="w-12 h-12 rounded-2xl bg-gold-light flex items-center justify-center text-2xl mb-6">♪</div>
            <p className="section-label">Student Portal</p>
            <h1 className="font-display text-display-md text-charcoal mt-3">Student Login</h1>
            <p className="font-body text-sm text-charcoal-light mt-3">
              Enter your credentials to access your dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card p-8 border border-cream-border space-y-5" noValidate>
            <div>
              <label htmlFor="identifier" className="block font-body text-sm text-charcoal-mid mb-2">
                Student ID or Email
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                placeholder="STU-2024-001 or you@email.com"
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-body text-sm text-charcoal-mid mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 pr-11 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  aria-label="Toggle password visibility"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-light hover:text-charcoal transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d={showPw
                        ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        : "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="font-body text-xs text-charcoal-light hover:text-gold transition-colors duration-200">
                Forgot password?
              </Link>
            </div>

            {error && (
              <p role="alert" className="font-body text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Log In"}
            </button>
          </form>

          <p className="text-center font-body text-sm text-charcoal-light mt-6">
            New student?{" "}
            <Link href="/signup/student" className="text-gold hover:text-gold-dark underline underline-offset-4 transition-colors duration-200">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
