import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { patients } from "@/lib/schema";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { name, mobile, age, sex } = await request.json();

    if (!name?.trim()) {
      return NextResponse.json({ error: "नाम जरूरी है" }, { status: 400 });
    }
    if (!mobile?.trim()) {
      return NextResponse.json({ error: "Mobile जरूरी है" }, { status: 400 });
    }

    const count = await db.select().from(patients);
    const patientNumber = `P${String(count.length + 1).padStart(4, "0")}`;
    const createdAt = new Date().toISOString().split("T")[0];

    const result = await db
      .insert(patients)
      .values({ patientNumber, name, mobile, age: age || null, sex: sex || null, createdAt })
      .returning({ id: patients.id });

    return NextResponse.json({ ok: true, id: result[0].id, patientNumber });
  } catch (error) {
    console.error("[POST /api/patients] Error:", error);
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}