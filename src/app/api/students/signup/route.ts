import { NextRequest, NextResponse } from "next/server";
import { addStudentRequest, emailAlreadySubmitted } from "@/lib/store";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, parentName, phone, email, course, age, message } = body;

  if (!fullName || fullName.trim().length < 2)
    return NextResponse.json({ error: "Full name must be at least 2 characters." }, { status: 400 });

  if (!phone || !PHONE_RE.test(phone.replace(/\s|-/g, "")))
    return NextResponse.json({ error: "Enter a valid 10-digit Indian mobile number." }, { status: 400 });

  if (!email || !EMAIL_RE.test(email.trim()))
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });

  if (!course)
    return NextResponse.json({ error: "Please select a course." }, { status: 400 });

  if (emailAlreadySubmitted(email.trim()))
    return NextResponse.json(
      { error: "A registration request with this email already exists." },
      { status: 409 }
    );

  const req2 = addStudentRequest({
    fullName: fullName.trim(),
    parentName: parentName?.trim() ?? "",
    phone: phone.trim(),
    email: email.trim(),
    course,
    age: age?.trim() ?? "",
    message: message?.trim() ?? "",
  });

  return NextResponse.json({ success: true, requestId: req2.id });
}
