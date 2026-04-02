import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { patients } from "@/lib/schema";
import { eq } from "drizzle-orm";

async function getRole() {
  const cookieStore = await cookies();
  return cookieStore.get("role")?.value;
}

export async function POST(request) {
  try {
    const role = await getRole();
    if (!role) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { name, mobile, age, sex } = await request.json();
    if (!name?.trim()) return NextResponse.json({ error: "Name required" }, { status: 400 });
    if (!mobile?.trim()) return NextResponse.json({ error: "Mobile required" }, { status: 400 });

    const count = await db.select().from(patients);
    const patientNumber = `P${String(count.length + 1).padStart(4, "0")}`;
    const createdAt = new Date().toISOString().split("T")[0];

    const result = await db
      .insert(patients)
      .values({ patientNumber, name: name.trim(), mobile: mobile.trim(), age: age || null, sex: sex || null, createdAt })
      .returning({ id: patients.id });

    return NextResponse.json({ ok: true, id: result[0].id, patientNumber });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const role = await getRole();
    if (role !== "doctor") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { id, name, mobile, age, sex, address } = await request.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    if (!name?.trim()) return NextResponse.json({ error: "Name required" }, { status: 400 });
    if (!mobile?.trim()) return NextResponse.json({ error: "Mobile required" }, { status: 400 });

    await db.update(patients).set({
      name: name.trim(),
      mobile: mobile.trim(),
      age: age ? parseInt(age) : null,
      sex: sex || null,
      address: address?.trim() || null,
    }).where(eq(patients.id, parseInt(id)));

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const role = await getRole();
    if (role !== "doctor") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await db.delete(patients).where(eq(patients.id, parseInt(id)));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}