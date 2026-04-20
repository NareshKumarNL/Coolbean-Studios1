"use client";

import { useEffect, useState, useCallback } from "react";

interface StudentRequest {
  id: string;
  fullName: string;
  parentName: string;
  phone: string;
  email: string;
  course: string;
  age: string;
  message: string;
  status: "pending" | "approved";
  submittedAt: string;
  studentId?: string;
  password?: string;
}

interface NewCredential {
  id: string;
  studentId: string;
  password: string;
  name: string;
  email: string;
}

export default function AdminStudentsPage() {
  const [requests, setRequests] = useState<StudentRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [approving, setApproving] = useState<string | null>(null);
  const [newCredentials, setNewCredentials] = useState<NewCredential | null>(null);

  const fetchRequests = useCallback(async () => {
    const res = await fetch("/api/students/list");
    const data = await res.json();
    setRequests(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  async function handleApprove(id: string) {
    setApproving(id);
    const res = await fetch("/api/students/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    setApproving(null);

    if (res.ok) {
      setNewCredentials({ id, studentId: data.studentId, password: data.password, name: data.name, email: data.email });
      await fetchRequests();
    }
  }

  const pending = requests.filter((r) => r.status === "pending");
  const approved = requests.filter((r) => r.status === "approved");

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="mb-12">
          <p className="section-label">Admin · Students</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">Student Requests</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Review admission requests and approve students to generate their login credentials.
          </p>
        </div>

        {/* New credentials banner */}
        {newCredentials && (
          <div className="bg-gold-light border border-gold/40 rounded-2xl p-6 mb-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-body text-sm font-medium text-charcoal-mid mb-1">
                  ✓ Student approved — credentials generated
                </p>
                <p className="font-body text-xs text-charcoal-light mb-4">
                  Share these credentials with the student via WhatsApp / SMS / Email.
                </p>
                <div className="space-y-1">
                  <p className="font-body text-sm text-charcoal"><span className="text-charcoal-light">Name:</span> {newCredentials.name}</p>
                  <p className="font-body text-sm text-charcoal"><span className="text-charcoal-light">Email:</span> {newCredentials.email}</p>
                  <p className="font-body text-sm text-charcoal font-medium"><span className="text-charcoal-light font-normal">Student ID:</span> {newCredentials.studentId}</p>
                  <p className="font-body text-sm text-charcoal font-medium"><span className="text-charcoal-light font-normal">Password:</span> {newCredentials.password}</p>
                </div>
              </div>
              <button
                onClick={() => setNewCredentials(null)}
                className="text-charcoal-light hover:text-charcoal transition-colors shrink-0"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <p className="font-body text-sm text-charcoal-light">Loading requests…</p>
        ) : requests.length === 0 ? (
          <div className="card p-12 border border-cream-border text-center">
            <p className="font-display text-display-sm text-charcoal-light">No requests yet</p>
            <p className="font-body text-sm text-charcoal-light mt-2">
              Student registration requests will appear here once submitted.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Pending */}
            {pending.length > 0 && (
              <div>
                <h2 className="font-display text-xl text-charcoal mb-5 flex items-center gap-3">
                  Pending Requests
                  <span className="font-body text-xs bg-gold-light text-gold-dark px-3 py-1 rounded-full">{pending.length}</span>
                </h2>
                <div className="space-y-4">
                  {pending.map((r) => (
                    <div key={r.id} className="card p-6 border border-cream-border">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-display text-xl text-charcoal">{r.fullName}</h3>
                          {r.parentName && <p className="font-body text-xs text-charcoal-light">Parent: {r.parentName}</p>}
                          <p className="font-body text-sm text-charcoal-mid">{r.email} · {r.phone}</p>
                          <p className="font-body text-sm text-charcoal-mid">Course: <span className="text-charcoal">{r.course}</span></p>
                          {r.age && <p className="font-body text-xs text-charcoal-light">Age: {r.age}</p>}
                          {r.message && <p className="font-body text-xs text-charcoal-light italic mt-1">"{r.message}"</p>}
                          <p className="font-body text-xs text-charcoal-light mt-1">
                            Submitted: {new Date(r.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </p>
                        </div>
                        <button
                          onClick={() => handleApprove(r.id)}
                          disabled={approving === r.id}
                          className="shrink-0 inline-flex items-center gap-2 bg-charcoal text-cream font-body text-sm px-6 py-2.5 rounded-full hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {approving === r.id ? "Approving…" : "Approve & Issue Credentials"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Approved */}
            {approved.length > 0 && (
              <div>
                <h2 className="font-display text-xl text-charcoal mb-5 flex items-center gap-3">
                  Approved Students
                  <span className="font-body text-xs bg-sage-light text-sage-dark px-3 py-1 rounded-full">{approved.length}</span>
                </h2>
                <div className="space-y-4">
                  {approved.map((r) => (
                    <div key={r.id} className="card p-6 border border-sage/20">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-display text-xl text-charcoal">{r.fullName}</h3>
                          <p className="font-body text-sm text-charcoal-mid">{r.email} · {r.phone}</p>
                          <p className="font-body text-sm text-charcoal-mid">Course: <span className="text-charcoal">{r.course}</span></p>
                        </div>
                        <div className="shrink-0 text-right space-y-1">
                          <span className="inline-block font-body text-xs bg-sage-light text-sage-dark px-3 py-1 rounded-full">Approved</span>
                          <p className="font-body text-xs text-charcoal-light">ID: <span className="font-medium text-charcoal">{r.studentId}</span></p>
                          <p className="font-body text-xs text-charcoal-light">Password: <span className="font-medium text-charcoal">{r.password}</span></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
