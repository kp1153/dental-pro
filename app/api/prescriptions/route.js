import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { prescriptions } from "@/lib/schema";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { patientId, date, medicines, investigations, notes } = body;

    if (!patientId || !date) {
      return NextResponse.json(
        { error: "Missing required fields: patientId, date" },
        { status: 400 }
      );
    }

    if (!medicines?.trim() && !investigations?.trim()) {
      return NextResponse.json(
        { error: "दवाई या जाँच — कम से कम एक जरूरी है" },
        { status: 400 }
      );
    }

    await db.insert(prescriptions).values({
      patientId,
      date,
      medicines: medicines || null,
      investigations: investigations || null,
      notes: notes || null,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[POST /api/prescriptions] Error:", error);
    return NextResponse.json(
      {
        error: error?.message || "Internal Server Error",
        ...(process.env.NODE_ENV === "development" && { stack: error?.stack }),
      },
      { status: 500 }
    );
  }
}