import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { patients, treatments, billing } from "@/lib/schema";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const name = "डॉ. अनवर अली";

  const [patientCount] = await db.select({ count: sql`count(*)` }).from(patients);
  const [treatmentCount] = await db.select({ count: sql`count(*)` }).from(treatments);
  const [billingSum] = await db.select({ total: sql`sum(total)` }).from(billing);
  const [pendingSum] = await db.select({ balance: sql`sum(balance)` }).from(billing);

  const stats = [
    { label: "कुल Patients", value: patientCount?.count || 0, color: "#facc15" },
    { label: "कुल Treatments", value: treatmentCount?.count || 0, color: "#4ade80" },
    { label: "कुल Billing", value: `₹${(billingSum?.total || 0).toLocaleString("en-IN")}`, color: "#60a5fa" },
    { label: "बाकी Balance", value: `₹${(pendingSum?.balance || 0).toLocaleString("en-IN")}`, color: "#f87171" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">नमस्ते, {name} 👋</h1>
      <p className="text-gray-400 text-sm mb-8">एडवांस डेंटल क्लिनिक — Dashboard</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs mb-2">{s.label}</div>
            <div className="text-2xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          { href: "/dashboard/patients/add", label: "🧑‍⚕️ नया Patient जोड़ें", desc: "नया patient register करें" },
          { href: "/dashboard/treatments/add", label: "🦷 Treatment add करें", desc: "Treatment record करें" },
          { href: "/dashboard/prescriptions/add", label: "💊 Prescription लिखें", desc: "दवाई लिखें" },
          { href: "/dashboard/billing/add", label: "💰 Bill बनाएं", desc: "Payment record करें" },
        ].map((q, i) => (
          <a key={i} href={q.href}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-yellow-500/50 transition">
            <div className="font-bold text-white mb-1">{q.label}</div>
            <div className="text-gray-400 text-sm">{q.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}