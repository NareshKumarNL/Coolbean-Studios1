"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";

export default function StudentProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");

  useEffect(() => {
    const s = getSession();
    if (s) { setName(s.name); setEmail(s.email); setStudentId(s.studentId ?? ""); }
  }, []);

  const placeholders = [
    { label: "Course Progress", note: "Attendance and progress tracking coming soon." },
    { label: "Payment Details", note: "Fee history and payment status coming soon." },
    { label: "Certificates", note: "Earned certificates will appear here." },
  ];

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="max-w-lg">
          <p className="section-label">Student · Profile</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">My Profile</h1>

          <div className="card p-8 border border-cream-border mt-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center text-2xl">♪</div>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mb-1">Name</p>
                <p className="font-body text-sm text-charcoal">{name || "—"}</p>
              </div>
              <div>
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mb-1">Email</p>
                <p className="font-body text-sm text-charcoal">{email || "—"}</p>
              </div>
              <div>
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mb-1">Student ID</p>
                <p className="font-body text-sm text-charcoal font-medium">{studentId || "—"}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {placeholders.map((p) => (
              <div key={p.label} className="card p-6 border border-cream-border">
                <p className="font-body text-sm font-medium text-charcoal-mid">{p.label}</p>
                <p className="font-body text-xs text-charcoal-light mt-1">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
