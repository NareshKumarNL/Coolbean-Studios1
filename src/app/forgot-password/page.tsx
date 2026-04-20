"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const email = (new FormData(e.currentTarget).get("email") as string).trim();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setSuccess(true);
  }

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="page-container w-full">
        <div className="max-w-sm mx-auto">
          <Link href="/login" className="inline-flex items-center gap-2 font-body text-sm text-charcoal-light hover:text-charcoal transition-colors duration-200 mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Login
          </Link>

          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-display-sm text-charcoal">Check your inbox</h2>
              <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">
                If an account exists for that email, a password reset link has been sent. Please
                check your inbox and follow the instructions.
              </p>
              <Link href="/login" className="btn-primary mt-8 inline-flex">
                Back to Login
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <div className="w-12 h-12 rounded-2xl bg-gold-light flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <p className="section-label">Account Recovery</p>
                <h1 className="font-display text-display-md text-charcoal mt-3">Forgot Password?</h1>
                <p className="font-body text-sm text-charcoal-light mt-3 leading-relaxed">
                  Enter your registered email address and we&apos;ll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="card p-8 border border-cream-border space-y-5" noValidate>
                <div>
                  <label htmlFor="email" className="block font-body text-sm text-charcoal-mid mb-2">
                    Registered Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>

                {error && (
                  <p role="alert" className="font-body text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Reset Link"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
