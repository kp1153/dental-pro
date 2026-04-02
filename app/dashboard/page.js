import { db } from "@/lib/db";
import { patients, treatments, billing } from "@/lib/schema";
import { sql, eq, asc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const today = new Date().toISOString().split("T")[0];

  const [patientCount] = await db.select({ count: sql`count(*)` }).from(patients);
  const [treatmentCount] = await db.select({ count: sql`count(*)` }).from(treatments);
  const [billingSum] = await db.select({ total: sql`sum(total)` }).from(billing);
  const [pendingSum] = await db.select({ balance: sql`sum(balance)` }).from(billing);

  const todayPatients = await db
    .select()
    .from(patients)
    .where(eq(patients.createdAt, today))
    .orderBy(asc(patients.id));

  const stats = [
    { label: "Total Patients", value: patientCount?.count || 0, color: "#facc15" },
    { label: "Total Treatments", value: treatmentCount?.count || 0, color: "#4ade80" },
    { label: "Total Billing", value: `₹${(billingSum?.total || 0).toLocaleString("en-IN")}`, color: "#60a5fa" },
    { label: "Balance Due", value: `₹${(pendingSum?.balance || 0).toLocaleString("en-IN")}`, color: "#f87171" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Welcome, Doctor 👋</h1>
      <p className="text-gray-400 text-sm mb-6">Advance Dental Clinic</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-2">{s.label}</div>
            <div className="text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold text-lg">
            📋 Today Queue
            <span className="ml-2 bg-yellow-400 text-gray-900 text-xs font-extrabold px-2 py-0.5 rounded-full">
              {todayPatients.length}
            </span>
          </h2>
          <span className="text-gray-500 text-xs">{today}</span>
        </div>

        {todayPatients.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-10 text-center text-gray-500">
            No patients today
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {todayPatients.map((p, index) => (
              <Link
                key={p.id}
                href={`/dashboard/patients/${p.id}`}
                className="bg-gray-900 border border-gray-800 rounded-2xl px-4 py-4 flex items-center gap-4 hover:border-yellow-500/60 hover:bg-gray-800/60 transition"
              >
                <div className="w-9 h-9 rounded-full bg-yellow-400 text-gray-900 font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-base truncate">{p.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">
                    {p.patientNumber}{p.age ? ` · ${p.age} yrs` : ""}{p.sex ? ` · ${p.sex}` : ""} · 📞 {p.mobile}
                  </div>
                </div>
                <div className="text-yellow-400 text-lg flex-shrink-0">→</div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { href: "/dashboard/patients/add", label: "🧑‍⚕️", full: "New Patient" },
          { href: "/dashboard/treatments/add", label: "🦷", full: "Treatment" },
          { href: "/dashboard/prescriptions/add", label: "💊", full: "Prescription" },
          { href: "/dashboard/billing/add", label: "💰", full: "Billing" },
        ].map((q, i) => (
          <a key={i} href={q.href}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center hover:border-yellow-500/50 transition">
            <div className="text-2xl mb-1">{q.label}</div>
            <div className="text-white text-sm font-bold">{q.full}</div>
          </a>
        ))}
      </div>
    </div>
  );
}