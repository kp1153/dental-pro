import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { billing } from "@/lib/schema";

export const dynamic = "force-dynamic";

async function addBilling(formData) {
  "use server";
  const patientId = parseInt(formData.get("patient_id"));
  const total = parseInt(formData.get("total")) || 0;
  const paid = parseInt(formData.get("paid")) || 0;
  const balance = total - paid;
  const mode = formData.get("mode");
  const items = formData.get("items");
  const date = formData.get("date") || new Date().toISOString().split("T")[0];

  await db.insert(billing).values({ patientId, items, total, paid, balance, mode, date });
  redirect(`/dashboard/patients/${patientId}`);
}

export default async function AddBillingPage({ searchParams }) {
  const { pid } = await searchParams;
  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-bold text-white mb-6">💰 Bill बनाएं</h2>
      <form action={addBilling} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-4">
        <input type="hidden" name="patient_id" value={pid || ""} />
        <div>
          <label className={labelClass}>Date</label>
          <input name="date" type="date" className={inputClass}
            defaultValue={new Date().toISOString().split("T")[0]} />
        </div>
        <div>
          <label className={labelClass}>Items / Services</label>
          <textarea name="items" rows={3} className={inputClass}
            placeholder="जैसे: RCT - ₹3000, Capping - ₹2000" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Total Amount (₹) *</label>
            <input name="total" type="number" required className={inputClass} placeholder="0" />
          </div>
          <div>
            <label className={labelClass}>Paid Amount (₹)</label>
            <input name="paid" type="number" className={inputClass} placeholder="0" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Payment Mode</label>
          <select name="mode" className={inputClass}>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
            <option value="Partial">Partial</option>
          </select>
        </div>
        <button type="submit"
          className="bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-xl hover:bg-yellow-300 transition">
          Bill Save करें
        </button>
      </form>
    </div>
  );
}