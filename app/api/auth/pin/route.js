import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const { pin } = await req.json();

  if (pin !== process.env.RECEPTIONIST_PIN) {
    return NextResponse.json({ error: "Wrong PIN" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("role", "receptionist", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return NextResponse.json({ ok: true });
}