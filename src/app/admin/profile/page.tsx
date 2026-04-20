"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";

export default function AdminProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const s = getSession();
    if (s) { setName(s.name); setEmail(s.email); }
  }, []);

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="max-w-lg">
          <p className="section-label">Admin · Profile</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">My Profile</h1>

          <div className="card p-8 border border-cream-border mt-10 space-y-6">
            <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center text-2xl">◉</div>

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
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mb-1">Role</p>
                <p className="font-body text-sm text-charcoal">Admin / Tutor</p>
              </div>
            </div>

            <p className="font-body text-xs text-charcoal-light pt-4 border-t border-cream-border">
              Profile editing and password change will be available with backend integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
