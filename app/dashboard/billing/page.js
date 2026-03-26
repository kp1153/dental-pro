import { db } from "@/lib/db";
import { billing, patients } from "@/lib/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  const data = await db.select().from(billing).orderBy(desc(billing.id));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">💰 Billing</h2>
        <Link href="/dashboard/billing/add"
          className="bg-yellow-400 text-gray-900 font-bold px-5 py-2 rounded-xl text-sm hover:bg-yellow-300 transition">
          + नया Bill
        </Link>
      </div>

      <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-xs">
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Patient ID</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Paid</th>
              <th className="px-4 py-3 text-left">Balance</th>
              <th className="px-4 py-3 text-left">Mode</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-500">कोई bill नहीं</td></tr>
            ) : data.map((b) => (
              <tr key={b.id} className="border-b border-gray-800/50 hover:bg-gray-800/50 transition">
                <td className="px-4 py-3 text-yellow-400">{b.date}</td>
                <td className="px-4 py-3 text-gray-400">#{b.patientId}</td>
                <td className="px-4 py-3 text-blue-400 font-bold">₹{(b.total || 0).toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 text-green-400">₹{(b.paid || 0).toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 text-red-400">₹{(b.balance || 0).toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 text-gray-400">{b.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}