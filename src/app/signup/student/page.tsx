"use client";

import Link from "next/link";
import { useState } from "react";

const courses = [
  "Keyboard & Piano",
  "Flute",
  "Vocal Training",
  "Bharatanatyam",
  "Zumba",
  "Contemporary Dance",
  "Beginner Chess",
  "Tournament Prep Chess",
  "Junior Grandmaster Chess",
];

export default function StudentSignupPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const body = {
      fullName: fd.get("fullName"),
      parentName: fd.get("parentName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      course: fd.get("course"),
      age: fd.get("age"),
      message: fd.get("message"),
    };

    setLoading(true);
    const res = await fetch("/api/students/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center py-20">
        <div className="page-container w-full">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-display-sm text-charcoal">Registration Received</h2>
            <p className="font-body text-sm text-charcoal-light leading-relaxed mt-4">
              Thank you for registering with Sargam Arts Academy. Our admin/tutor will review your
              details and reach out to you shortly with your login credentials.
            </p>
            <Link href="/" className="btn-primary mt-8 inline-flex">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-20">
      <div className="page-container w-full">
        <div className="max-w-lg mx-auto">
          <Link href="/login/student" className="inline-flex items-center gap-2 font-body text-sm text-charcoal-light hover:text-charcoal transition-colors duration-200 mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Student Login
          </Link>

          <div className="mb-10">
            <p className="section-label">New Student</p>
            <h1 className="font-display text-display-md text-charcoal mt-3">Student Registration</h1>
            <p className="font-body text-sm text-charcoal-light mt-3 leading-relaxed">
              Fill in your details below to register with Sargam Arts Academy. This is not an
              instant account — once we review your registration, our admin/tutor will contact you and
              provide your login credentials.
            </p>
          </div>

          <div className="bg-gold-light border border-gold/30 rounded-2xl px-6 py-4 mb-8 flex gap-4 items-start">
            <svg className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-body text-sm font-medium text-charcoal-mid">How this works</p>
              <p className="font-body text-xs text-charcoal-light leading-relaxed mt-1">
                Submit this form → Admin/tutor reviews your details → We contact you to confirm
                enrolment → Your Student ID and password are issued → You can then log in.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-8 border border-cream-border space-y-5" noValidate>
            <div>
              <label htmlFor="fullName" className="block font-body text-sm text-charcoal-mid mb-2">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block font-body text-sm text-charcoal-mid mb-2">
                Parent / Guardian Name{" "}
                <span className="text-charcoal-light font-normal">(optional)</span>
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                placeholder="Parent or guardian name"
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-body text-sm text-charcoal-mid mb-2">
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                required
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-sm text-charcoal-mid mb-2">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                required
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="course" className="block font-body text-sm text-charcoal-mid mb-2">
                Course Interested In <span className="text-gold">*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                defaultValue=""
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors duration-200"
              >
                <option value="" disabled>
                  Select a course
                </option>
                {courses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="age" className="block font-body text-sm text-charcoal-mid mb-2">
                Age{" "}
                <span className="text-charcoal-light font-normal">(optional)</span>
              </label>
              <input
                id="age"
                name="age"
                type="text"
                placeholder="e.g. 12"
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm text-charcoal-mid mb-2">
                Additional Notes{" "}
                <span className="text-charcoal-light font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Any questions, preferred batch timings, or other details..."
                className="w-full font-body text-sm bg-cream border border-cream-border rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
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
              className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting…" : "Submit Registration"}
              {!loading && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </form>

          <p className="text-center font-body text-sm text-charcoal-light mt-6">
            Already have your credentials?{" "}
            <Link href="/login/student" className="text-gold hover:text-gold-dark underline underline-offset-4 transition-colors duration-200">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
