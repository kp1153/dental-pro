import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { settings } from "@/lib/schema";
import { eq } from "drizzle-orm";

// Settings table पहले बनाओ अगर नहीं है
async function ensureTable() {
  try {
    await db.run(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `);
  } catch {}
}

export async function POST(req) {
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;

  // सिर्फ doctor ही बदल सकता है
  if (role !== "doctor") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { newPin } = await req.json();

  if (!newPin || newPin.length !== 4 || !/^\d{4}$/.test(newPin)) {
    return NextResponse.json({ error: "PIN 4 अंकों का होना चाहिए" }, { status: 400 });
  }

  await ensureTable();

  await db
    .insert(settings)
    .values({ key: "receptionist_pin", value: newPin })
    .onConflictDoUpdate({ target: settings.key, set: { value: newPin } });

  return NextResponse.json({ ok: true });
}

export async function GET(req) {
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;

  if (role !== "doctor") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await ensureTable();

  const [row] = await db.select().from(settings).where(eq(settings.key, "receptionist_pin"));
  const pin = row?.value || process.env.RECEPTIONIST_PIN || "----";

  return NextResponse.json({ pin });
}
