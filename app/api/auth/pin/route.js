import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { settings } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  const { pin } = await req.json();

  // DB से PIN पढ़ो, न मिले तो env से fallback
  let correctPin = process.env.RECEPTIONIST_PIN;
  try {
    const [row] = await db.select().from(settings).where(eq(settings.key, "receptionist_pin"));
    if (row) correctPin = row.value;
  } catch {}

  if (pin !== correctPin) {
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