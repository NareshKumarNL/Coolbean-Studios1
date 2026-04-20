import { NextRequest, NextResponse } from "next/server";
import { findApprovedStudent, findStudentByEmail } from "@/lib/store";

export async function POST(req: NextRequest) {
  const { identifier, password } = await req.json();
  if (!identifier || !password)
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });

  const id = identifier.trim();

  // Check if email exists at all (for email-based attempts)
  if (id.includes("@")) {
    const byEmail = findStudentByEmail(id);
    if (!byEmail)
      return NextResponse.json({ error: "No account found with this email." }, { status: 404 });
    if (byEmail.status === "pending")
      return NextResponse.json(
        { error: "Your registration is pending admin approval. You will receive login credentials once approved." },
        { status: 403 }
      );
  }

  const student = findApprovedStudent(id, password);
  if (!student)
    return NextResponse.json(
      { error: "Invalid Student ID / email or password." },
      { status: 401 }
    );

  return NextResponse.json({
    role: "student",
    name: student.fullName,
    email: student.email,
    studentId: student.studentId,
  });
}
