import { NextRequest, NextResponse } from "next/server";
import { approveStudent } from "@/lib/store";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id)
    return NextResponse.json({ error: "Request ID is required." }, { status: 400 });

  const updated = approveStudent(id);
  if (!updated)
    return NextResponse.json({ error: "Request not found or already approved." }, { status: 404 });

  return NextResponse.json({
    success: true,
    studentId: updated.studentId,
    password: updated.password,
    name: updated.fullName,
    email: updated.email,
  });
}
