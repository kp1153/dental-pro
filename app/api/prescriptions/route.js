import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { prescriptions } from "@/lib/schema";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { patientId, date, medicines, notes } = await request.json();

    await db.insert(prescriptions).values({
      patientId,
      date,
      medicines,
      notes,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}