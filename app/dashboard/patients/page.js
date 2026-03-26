import { db } from "@/lib/db";
import { patients } from "@/lib/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PatientsPage() {
  const data = await db.select().from(patients).orderBy(desc(patients.id));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">🧑‍⚕️ Patients</h2>
        <Link href="/dashboard/patients/add"
          className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-xl text-sm hover:bg-yellow-300 transition">
          + नया Patient
        </Link>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-xs">
              <th className="px-4 py-3 text-left">No.</th>
              <th className="px-4 py-3 text-left">नाम</th>
              <th className="px-4 py-3 text-left">उम्र/लिंग</th>
              <th className="px-4 py-3 text-left">Mobile</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-gray-500">कोई patient नहीं मिला</td></tr>
            ) : data.map((p) => (
              <tr key={p.id} className="border-b border-gray-800/50 hover:bg-gray-800/50 transition">
                <td className="px-4 py-3 text-yellow-400 font-bold">{p.patientNumber}</td>
                <td className="px-4 py-3 text-white font-medium">{p.name}</td>
                <td className="px-4 py-3 text-gray-400">{p.age} / {p.sex}</td>
                <td className="px-4 py-3 text-gray-400">{p.mobile}</td>
                <td className="px-4 py-3">
                  <Link href={`/dashboard/patients/${p.id}`}
                    className="text-yellow-400 hover:underline text-xs">देखें →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}