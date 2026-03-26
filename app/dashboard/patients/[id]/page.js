import { db } from "@/lib/db";
import { patients, treatments, prescriptions, billing } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";
import PatientActions from "./PatientActions";

export const dynamic = "force-dynamic";

export default async function PatientDetailPage({ params }) {
  const { id } = await params;
  const pid = parseInt(id);

  const [patient] = await db.select().from(patients).where(eq(patients.id, pid));
  if (!patient) notFound();

  const txts = await db.select().from(treatments).where(eq(treatments.patientId, pid)).orderBy(desc(treatments.id));
  const rxs = await db.select().from(prescriptions).where(eq(prescriptions.patientId, pid)).orderBy(desc(prescriptions.id));
  const bills = await db.select().from(billing).where(eq(billing.patientId, pid)).orderBy(desc(billing.id));

  const totalBilled = bills.reduce((s, b) => s + (b.total || 0), 0);
  const totalPaid = bills.reduce((s, b) => s + (b.paid || 0), 0);

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">{patient.name}</h2>
          <p className="text-gray-400 text-sm">{patient.patientNumber} | {patient.age} वर्ष | {patient.sex} | 📞 {patient.mobile}</p>
          <p className="text-gray-500 text-xs mt-1">{patient.address}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Edit / Delete — Client Component */}
          <PatientActions patient={patient} />
          <Link href="/dashboard/patients" className="text-gray-400 text-sm hover:text-white">← वापस</Link>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Treatments", value: txts.length, color: "#4ade80" },
          { label: "कुल Billing", value: `₹${totalBilled.toLocaleString("en-IN")}`, color: "#60a5fa" },
          { label: "बाकी Balance", value: `₹${(totalBilled - totalPaid).toLocaleString("en-IN")}`, color: "#f87171" },
        ].map((s, i) => (
          <div key={i} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-xs text-gray-400 mb-1">{s.label}</div>
            <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Quick add buttons */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <Link href={`/dashboard/treatments/add?pid=${pid}`}
          className="bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-green-500 transition">
          + Treatment
        </Link>
        <Link href={`/dashboard/prescriptions/add?pid=${pid}`}
          className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-blue-500 transition">
          + Prescription
        </Link>
        <Link href={`/dashboard/billing/add?pid=${pid}`}
          className="bg-yellow-500 text-gray-900 text-sm font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
          + Billing
        </Link>
      </div>

      {/* Treatments */}
      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Treatments</h3>
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {txts.length === 0 ? (
            <p className="px-4 py-6 text-center text-gray-500 text-sm">कोई treatment नहीं</p>
          ) : txts.map((t) => (
            <div key={t.id} className="flex justify-between items-center px-4 py-3 border-b border-gray-800/50">
              <div>
                <span className="text-white text-sm font-medium">{t.procedure}</span>
                <span className="text-gray-500 text-xs ml-2">दाँत #{t.toothNumber}</span>
                <span className="text-gray-500 text-xs ml-2">Sitting {t.sittingNumber}/{t.totalSittings}</span>
              </div>
              <div className="text-right">
                <div className="text-yellow-400 font-bold text-sm">₹{(t.amount || 0).toLocaleString("en-IN")}</div>
                <div className="text-gray-500 text-xs">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prescriptions */}
      <section className="mb-6">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Prescriptions</h3>
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {rxs.length === 0 ? (
            <p className="px-4 py-6 text-center text-gray-500 text-sm">कोई prescription नहीं</p>
          ) : rxs.map((r) => (
            <div key={r.id} className="px-4 py-3 border-b border-gray-800/50">
              <div className="flex justify-between mb-1">
                <span className="text-white text-sm font-medium">Rx — {r.date}</span>
                <Link href={`/dashboard/prescriptions/${r.id}/receipt`}
                  className="text-yellow-400 text-xs hover:underline">🖨️ Print</Link>
              </div>
              <p className="text-gray-400 text-xs">{r.medicines}</p>
              {r.notes && <p className="text-gray-500 text-xs mt-1">📝 {r.notes}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Billing */}
      <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Billing</h3>
        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          {bills.length === 0 ? (
            <p className="px-4 py-6 text-center text-gray-500 text-sm">कोई bill नहीं</p>
          ) : bills.map((b) => (
            <div key={b.id} className="flex justify-between items-center px-4 py-3 border-b border-gray-800/50">
              <div>
                <span className="text-white text-sm">{b.date}</span>
                <span className="text-gray-500 text-xs ml-2">{b.mode}</span>
              </div>
              <div className="text-right">
                <div className="text-sm">
                  <span className="text-blue-400">₹{(b.paid || 0).toLocaleString("en-IN")} paid</span>
                  {b.balance > 0 && <span className="text-red-400 ml-2">₹{b.balance.toLocaleString("en-IN")} बाकी</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}