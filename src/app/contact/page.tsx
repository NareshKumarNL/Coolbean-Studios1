"use client";

import { useState } from "react";

const courseOptions = [
  "Keyboard & Piano",
  "Flute",
  "Vocal Training (Carnatic)",
  "Bharatanatyam",
  "Zumba",
  "Contemporary Dance",
  "Beginner Chess",
  "Tournament Preparation",
  "Junior Grandmaster Track",
  "Not sure yet",
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  email: string;
  courseType: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    courseType: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API call — replace with real POST /api/enquiries
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Replace with real API call:
    // const res = await fetch("/api/enquiries", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // if (!res.ok) { setStatus("error"); return; }

    setStatus("success");
    setForm({ name: "", phone: "", email: "", courseType: "", message: "" });
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-cream pt-20 pb-16 border-b border-cream-border">
        <div className="page-container">
          <p className="section-label">Reach Out</p>
          <h1 className="font-display text-display-lg text-charcoal mt-4 max-w-2xl">
            Let&apos;s Start a Conversation
          </h1>
          <p className="font-body text-base text-charcoal-light leading-relaxed mt-5 max-w-xl">
            Have questions about our courses? Want to enrol your child? Fill in the form and
            we&apos;ll get back to you within one working day.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-cream-dark py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

            {/* ── Enquiry Form ── */}
            <div className="md:col-span-3 card p-8 md:p-10">
              <h2 className="font-display text-display-sm text-charcoal">Send an Enquiry</h2>
              <p className="font-body text-sm text-charcoal-light mt-2">
                All fields marked <span className="text-rose">*</span> are required.
              </p>

              {status === "success" ? (
                <div className="mt-8 p-6 bg-sage-light rounded-2xl border border-sage/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-display-sm text-charcoal mt-4">
                    Enquiry Received!
                  </h3>
                  <p className="font-body text-sm text-charcoal-light mt-2 leading-relaxed">
                    Thank you for reaching out. Our team will contact you within one working day.
                    Your enquiry ID will be shared via SMS or email.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-body text-sm text-sage-dark hover:underline"
                  >
                    Send another enquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal-mid mb-1.5">
                      Full Name <span className="text-rose">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Priya Ramaswamy"
                      className={`w-full bg-cream border rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all ${
                        errors.name ? "border-rose" : "border-cream-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-body text-xs text-rose">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal-mid mb-1.5">
                      Phone Number <span className="text-rose">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full bg-cream border rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all ${
                        errors.phone ? "border-rose" : "border-cream-border"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 font-body text-xs text-rose">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal-mid mb-1.5">
                      Email Address{" "}
                      <span className="text-charcoal-light font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. priya@email.com"
                      className={`w-full bg-cream border rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all ${
                        errors.email ? "border-rose" : "border-cream-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 font-body text-xs text-rose">{errors.email}</p>
                    )}
                  </div>

                  {/* Course type */}
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal-mid mb-1.5">
                      Course of Interest{" "}
                      <span className="text-charcoal-light font-normal">(optional)</span>
                    </label>
                    <select
                      value={form.courseType}
                      onChange={(e) => setForm({ ...form, courseType: e.target.value })}
                      className="w-full bg-cream border border-cream-border rounded-xl px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all appearance-none"
                    >
                      <option value="">Select a course…</option>
                      {courseOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm font-medium text-charcoal-mid mb-1.5">
                      Your Message{" "}
                      <span className="text-charcoal-light font-normal">(optional)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us anything — your child's age, current level, or any questions you have."
                      rows={4}
                      maxLength={500}
                      className="w-full bg-cream border border-cream-border rounded-xl px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none"
                    />
                    <p className="mt-1 font-body text-xs text-charcoal-light text-right">
                      {form.message.length}/500
                    </p>
                  </div>

                  {status === "error" && (
                    <p className="font-body text-sm text-rose">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-charcoal text-cream font-body text-sm font-medium py-3.5 rounded-full hover:bg-gold transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Contact Info ── */}
            <div className="md:col-span-2 space-y-6">
              <div className="card p-7">
                <h3 className="font-display text-display-sm text-charcoal mb-6">
                  Contact Details
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs text-charcoal-light uppercase tracking-widest">Address</p>
                      <p className="font-body text-sm text-charcoal-mid mt-1 leading-relaxed">
                        123 Arts Lane, RS Puram,<br />Bangalore, Karnataka 560001
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs text-charcoal-light uppercase tracking-widest">Phone</p>
                      <a href="tel:+919876543210" className="font-body text-sm text-charcoal-mid mt-1 block hover:text-gold transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-rose-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-xs text-charcoal-light uppercase tracking-widest">Email</p>
                      <a href="mailto:hello@coolbeanstudios.in" className="font-body text-sm text-charcoal-mid mt-1 block hover:text-gold transition-colors">
                        hello@coolbeanstudios.in
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="card p-7">
                <h3 className="font-display text-display-sm text-charcoal mb-5">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2.5 border border-cream-border rounded-full px-4 py-2.5 hover:border-gold transition-colors group"
                  >
                    <svg className="w-4 h-4 text-charcoal-light group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="font-body text-sm text-charcoal-mid group-hover:text-gold transition-colors">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 border border-cream-border rounded-full px-4 py-2.5 hover:border-gold transition-colors group"
                  >
                    <svg className="w-4 h-4 text-charcoal-light group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="font-body text-sm text-charcoal-mid group-hover:text-gold transition-colors">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-7">
                <h3 className="font-display text-display-sm text-charcoal mb-5">
                  Academy Hours
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { day: "Monday – Friday", time: "4:00 PM – 8:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 7:00 PM" },
                    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
                  ].map((row) => (
                    <li key={row.day} className="flex justify-between items-center">
                      <span className="font-body text-sm text-charcoal-mid">{row.day}</span>
                      <span className="font-body text-sm text-charcoal-light">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
