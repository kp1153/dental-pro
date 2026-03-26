import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { patients } from "@/lib/schema";
import { eq } from "drizzle-orm";

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

// ✅ Patient Edit
export async function PUT(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id, name, mobile, age, sex, address } = await request.json();

    if (!id) return NextResponse.json({ error: "ID जरूरी है" }, { status: 400 });
    if (!name?.trim()) return NextResponse.json({ error: "नाम जरूरी है" }, { status: 400 });
    if (!mobile?.trim()) return NextResponse.json({ error: "Mobile जरूरी है" }, { status: 400 });

    await db
      .update(patients)
      .set({
        name: name.trim(),
        mobile: mobile.trim(),
        age: age ? parseInt(age) : null,
        sex: sex || null,
        address: address?.trim() || null,
      })
      .where(eq(patients.id, parseInt(id)));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[PUT /api/patients] Error:", error);
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}

// ✅ Patient Delete
export async function DELETE(request) {
  try {
    const cookieStore = await cookies();
    const role = cookieStore.get("role")?.value;
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "ID जरूरी है" }, { status: 400 });

    await db.delete(patients).where(eq(patients.id, parseInt(id)));

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[DELETE /api/patients] Error:", error);
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}