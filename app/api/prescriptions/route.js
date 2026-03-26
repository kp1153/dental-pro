import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { prescriptions } from "@/lib/schema";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;

    if (!role)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { patientId, date, medicines, notes } = body;

    // ✅ Required fields check
    if (!patientId || !date || !medicines) {
      return NextResponse.json(
        { error: "Missing required fields: patientId, date, medicines" },
        { status: 400 }
      );
    }

    await db.insert(prescriptions).values({
      patientId,
      date,
      medicines,
      notes,
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    // ✅ Server console में पूरा error दिखेगा
    console.error("[POST /api/prescriptions] Error:", error);

    return NextResponse.json(
      {
        error: error?.message || "Internal Server Error",
        // Development में stack trace भी भेजें
        ...(process.env.NODE_ENV === "development" && { stack: error?.stack }),
      },
      { status: 500 }
    );
  }
}