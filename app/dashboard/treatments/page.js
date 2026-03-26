import { db } from "@/lib/db";
import { treatments } from "@/lib/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function TreatmentsPage() {
  const data = await db.select().from(treatments).orderBy(desc(treatments.id));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">🦷 Treatments</h2>
        <Link href="/dashboard/treatments/add"
          className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-xl text-sm hover:bg-yellow-300 transition">
          + नया Treatment
        </Link>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-xs">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Patient ID</th>
              <th className="px-4 py-3 text-left">Procedure</th>
              <th className="px-4 py-3 text-left">दाँत</th>
              <th className="px-4 py-3 text-left">Sitting</th>
              <th className="px-4 py-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-500">कोई treatment नहीं</td></tr>
            ) : data.map((t) => (
              <tr key={t.id} className="border-b border-gray-800/50 hover:bg-gray-800/50 transition">
                <td className="px-4 py-3 text-yellow-400">{t.date}</td>
                <td className="px-4 py-3 text-gray-400">#{t.patientId}</td>
                <td className="px-4 py-3 text-white font-medium">{t.procedure}</td>
                <td className="px-4 py-3 text-gray-400">{t.toothNumber}</td>
                <td className="px-4 py-3 text-gray-400">{t.sittingNumber}/{t.totalSittings}</td>
                <td className="px-4 py-3 text-green-400 font-bold">₹{(t.amount || 0).toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}