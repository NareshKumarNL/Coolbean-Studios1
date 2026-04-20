/**
 * Client-side session via localStorage.
 * In production: replace with HttpOnly cookie + server-side JWT (NextAuth / Lucia / etc.)
 */

export type SessionRole = "student" | "admin";

export interface Session {
  role: SessionRole;
  name: string;
  email: string;
  studentId?: string;
}

const KEY = "sargam_session";

export function setSession(s: Session): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
