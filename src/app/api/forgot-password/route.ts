import { NextRequest, NextResponse } from "next/server";
import { findStudentByEmail, adminEmailExists } from "@/lib/store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !EMAIL_RE.test(email.trim()))
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });

  const e = email.trim();
  const student = findStudentByEmail(e);
  const isAdmin = adminEmailExists(e);

  if (!student && !isAdmin)
    return NextResponse.json({ error: "No account found with this email address." }, { status: 404 });

  if (student && student.status === "pending")
    return NextResponse.json(
      { error: "Your registration is still pending approval. No login account exists yet." },
      { status: 403 }
    );

  // In production: trigger real password reset email here
  return NextResponse.json({ success: true });
}
