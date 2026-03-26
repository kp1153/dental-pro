import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { treatments } from "@/lib/schema";

export const dynamic = "force-dynamic";

async function addTreatment(formData) {
  "use server";
  const patientId = parseInt(formData.get("patient_id"));
  const toothNumber = formData.get("tooth_number");
  const procedure = formData.get("procedure");
  const sittingNumber = parseInt(formData.get("sitting_number")) || 1;
  const totalSittings = parseInt(formData.get("total_sittings")) || 1;
  const amount = parseInt(formData.get("amount")) || 0;
  const date = formData.get("date") || new Date().toISOString().split("T")[0];

  await db.insert(treatments).values({
    patientId, toothNumber, procedure,
    sittingNumber, totalSittings, amount, date,
  });

  redirect(`/dashboard/patients/${patientId}`);
}

export default async function AddTreatmentPage({ searchParams }) {
  const { pid } = await searchParams;
  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-bold text-white mb-6">🦷 Treatment Add करें</h2>
      <form action={addTreatment} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-4">
        <input type="hidden" name="patient_id" value={pid || ""} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>दाँत नंबर</label>
            <input name="tooth_number" className={inputClass} placeholder="जैसे 11, 21" />
          </div>
          <div>
            <label className={labelClass}>Date</label>
            <input name="date" type="date" className={inputClass}
              defaultValue={new Date().toISOString().split("T")[0]} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Procedure *</label>
          <select name="procedure" required className={inputClass}>
            <option value="">चुनें</option>
            <option value="RCT">RCT</option>
            <option value="Capping">Capping</option>
            <option value="Extraction">Extraction</option>
            <option value="Scaling">Scaling</option>
            <option value="Filling">Filling</option>
            <option value="X-Ray">X-Ray</option>
            <option value="Braces">Braces</option>
            <option value="Fix Teeth">Fix Teeth</option>
            <option value="Pyorrhea">Pyorrhea Treatment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Sitting No.</label>
            <input name="sitting_number" type="number" min="1" className={inputClass} defaultValue="1" />
          </div>
          <div>
            <label className={labelClass}>कुल Sittings</label>
            <input name="total_sittings" type="number" min="1" className={inputClass} defaultValue="1" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Amount (₹)</label>
          <input name="amount" type="number" className={inputClass} placeholder="0" />
        </div>
        <button type="submit"
          className="bg-green-600 text-white font-extrabold py-3 rounded-xl hover:bg-green-500 transition">
          Treatment Save करें
        </button>
      </form>
    </div>
  );
}