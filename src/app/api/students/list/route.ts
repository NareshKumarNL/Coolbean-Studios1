import { NextResponse } from "next/server";
import { studentRequests } from "@/lib/store";

export async function GET() {
  // In production: add admin auth check before returning data
  return NextResponse.json([...studentRequests].reverse());
}
