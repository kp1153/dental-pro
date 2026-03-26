import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete("role");
  cookieStore.delete("doctor_email");
  cookieStore.delete("doctor_name");
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login`);
}