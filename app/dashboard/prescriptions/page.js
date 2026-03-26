import { db } from "@/lib/db";
import { prescriptions, patients } from "@/lib/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PrescriptionsPage() {
  const data = await db.select().from(prescriptions).orderBy(desc(prescriptions.id));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">💊 Prescriptions</h2>
        <Link href="/dashboard/prescriptions/add"
          className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-xl text-sm hover:bg-yellow-300 transition">
          + नया Prescription
        </Link>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-xs">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Patient ID</th>
              <th className="px-4 py-3 text-left">Medicines</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr><td colSpan={4} className="px-4 py-10 text-center text-gray-500">कोई prescription नहीं</td></tr>
            ) : data.map((r) => (
              <tr key={r.id} className="border-b border-gray-800/50 hover:bg-gray-800/50 transition">
                <td className="px-4 py-3 text-yellow-400">{r.date}</td>
                <td className="px-4 py-3 text-gray-400">#{r.patientId}</td>
                <td className="px-4 py-3 text-gray-300 max-w-xs truncate">{r.medicines}</td>
                <td className="px-4 py-3">
                  <Link href={`/dashboard/prescriptions/${r.id}/receipt`}
                    className="text-yellow-400 hover:underline text-xs">🖨️ Print</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}