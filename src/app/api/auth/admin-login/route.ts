import { NextRequest, NextResponse } from "next/server";
import { findAdmin } from "@/lib/store";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password)
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });

  const admin = findAdmin(email.trim(), password);
  if (!admin)
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });

  return NextResponse.json({ role: "admin", name: admin.name, email: admin.email });
}
