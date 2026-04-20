/**
 * DEMO STORE — in-memory mock data layer.
 * ⚠️  All data resets on every server restart.
 * Replace each exported function with real DB queries (Prisma/Postgres) when ready.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type StudentStatus = "pending" | "approved";

export interface StudentRequest {
  id: string;
  fullName: string;
  parentName: string;
  phone: string;
  email: string;
  course: string;
  age: string;
  message: string;
  status: StudentStatus;
  submittedAt: string;
  // Set on approval
  studentId?: string;
  password?: string;
  approvedAt?: string;
}

export interface AdminUser {
  email: string;
  /** In production: store only a bcrypt hash, never plaintext */
  password: string;
  name: string;
}

// ─── Seeded admin credentials ─────────────────────────────────────────────────
// In production: load from DB / env-secured config. Never hardcode in source.
export const ADMIN_USERS: AdminUser[] = [
  { email: "admin@sargamarts.in", password: "Admin@123", name: "Sargam Admin" },
];

// ─── Student request store ────────────────────────────────────────────────────
// In production: rows in a `student_requests` DB table.
export const studentRequests: StudentRequest[] = [];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function nextStudentId(): string {
  const year = new Date().getFullYear();
  const approved = studentRequests.filter((r) => r.status === "approved").length;
  return `STU-${year}-${String(approved + 1).padStart(3, "0")}`;
}

function tempPassword(name: string): string {
  const base = name.split(" ")[0].toLowerCase().replace(/[^a-z]/g, "");
  return `${base}@${Math.floor(1000 + Math.random() * 9000)}`;
}

export function addStudentRequest(
  data: Omit<StudentRequest, "id" | "status" | "submittedAt">
): StudentRequest {
  const req: StudentRequest = {
    ...data,
    id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    status: "pending",
    submittedAt: new Date().toISOString(),
  };
  studentRequests.push(req);
  return req;
}

export function approveStudent(id: string): StudentRequest | null {
  const req = studentRequests.find((r) => r.id === id);
  if (!req || req.status === "approved") return null;
  req.status = "approved";
  req.studentId = nextStudentId();
  req.password = tempPassword(req.fullName);
  req.approvedAt = new Date().toISOString();
  return req;
}

export function findApprovedStudent(
  identifier: string,
  password: string
): StudentRequest | null {
  return (
    studentRequests.find(
      (r) =>
        r.status === "approved" &&
        (r.studentId === identifier || r.email === identifier) &&
        r.password === password
    ) ?? null
  );
}

export function findStudentByEmail(email: string): StudentRequest | null {
  return studentRequests.find((r) => r.email === email) ?? null;
}

export function emailAlreadySubmitted(email: string): boolean {
  return studentRequests.some((r) => r.email === email);
}

export function findAdmin(email: string, password: string): AdminUser | null {
  return ADMIN_USERS.find((a) => a.email === email && a.password === password) ?? null;
}

export function adminEmailExists(email: string): boolean {
  return ADMIN_USERS.some((a) => a.email === email);
}
