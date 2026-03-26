import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { prescriptions } from "@/lib/schema";

export const dynamic = "force-dynamic";

async function addPrescription(formData) {
  "use server";
  const patientId = parseInt(formData.get("patient_id"));
  const date = formData.get("date") || new Date().toISOString().split("T")[0];
  const medicines = formData.get("medicines");
  const notes = formData.get("notes");

  await db.insert(prescriptions).values({ patientId, date, medicines, notes });
  redirect(`/dashboard/patients/${patientId}`);
}

export default async function AddPrescriptionPage({ searchParams }) {
  const { pid } = await searchParams;
  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-bold text-white mb-6">💊 Prescription लिखें</h2>
      <form action={addPrescription} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-4">
        <input type="hidden" name="patient_id" value={pid || ""} />
        <div>
          <label className={labelClass}>Date</label>
          <input name="date" type="date" className={inputClass}
            defaultValue={new Date().toISOString().split("T")[0]} />
        </div>
        <div>
          <label className={labelClass}>Medicines *</label>
          <textarea name="medicines" required rows={5} className={inputClass}
            placeholder={`Tab. Amoxicillin 500mg - 1-0-1 x 5 days\nTab. Metronidazole 400mg - 1-0-1 x 5 days\nTab. Ibuprofen 400mg - SOS`} />
        </div>
        <div>
          <label className={labelClass}>Notes / Advice</label>
          <textarea name="notes" rows={2} className={inputClass}
            placeholder="जैसे: खाने के बाद दवाई लें, ठंडा पानी न पीएं" />
        </div>
        <button type="submit"
          className="bg-blue-600 text-white font-extrabold py-3 rounded-xl hover:bg-blue-500 transition">
          Prescription Save करें
        </button>
      </form>
    </div>
  );
}