"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSession } from "@/lib/auth";

const quickLinks = [
  { href: "/admin/students", label: "Manage Students", icon: "◉", desc: "Review requests and approve new students." },
  { href: "/admin/courses", label: "Courses", icon: "♪", desc: "View and manage academy course offerings." },
  { href: "/admin/profile", label: "My Profile", icon: "✦", desc: "View and update your admin profile." },
];

export default function AdminHomePage() {
  const [name, setName] = useState("Admin");

  useEffect(() => {
    const s = getSession();
    if (s) setName(s.name);
  }, []);

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="mb-12">
          <p className="section-label">Admin Dashboard</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">
            Welcome back, <span className="text-gold italic">{name}</span>
          </h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Manage students, courses, and academy operations from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card p-8 border border-cream-border group hover:border-gold/40 transition-colors duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-light flex items-center justify-center text-2xl mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h2 className="font-display text-display-sm text-charcoal">{item.label}</h2>
              <p className="font-body text-sm text-charcoal-light mt-2 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1.5 mt-6 font-body text-sm font-medium text-gold group-hover:gap-3 transition-all duration-300">
                Go
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
