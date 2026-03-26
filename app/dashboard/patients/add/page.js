import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { patients } from "@/lib/schema";

export const dynamic = "force-dynamic";

async function addPatient(formData) {
  "use server";
  const name = formData.get("name");
  const age = formData.get("age");
  const sex = formData.get("sex");
  const mobile = formData.get("mobile");
  const address = formData.get("address");

  const count = await db.select().from(patients);
  const patientNumber = `P${String(count.length + 1).padStart(4, "0")}`;
  const createdAt = new Date().toISOString().split("T")[0];

  await db.insert(patients).values({
    patientNumber,
    name,
    age: age ? parseInt(age) : null,
    sex,
    mobile,
    address,
    createdAt,
  });

  redirect("/dashboard/patients");
}

export default async function AddPatientPage() {
  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  return (
    <div className="max-w-lg">
      <h2 className="text-xl font-bold text-white mb-6">🧑‍⚕️ नया Patient</h2>
      <form action={addPatient} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-4">
        <div>
          <label className={labelClass}>नाम *</label>
          <input name="name" required className={inputClass} placeholder="Patient का नाम" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>उम्र</label>
            <input name="age" type="number" className={inputClass} placeholder="वर्ष में" />
          </div>
          <div>
            <label className={labelClass}>लिंग</label>
            <select name="sex" className={inputClass}>
              <option value="">चुनें</option>
              <option value="Male">पुरुष</option>
              <option value="Female">महिला</option>
              <option value="Other">अन्य</option>
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass}>Mobile</label>
          <input name="mobile" className={inputClass} placeholder="10 अंक" />
        </div>
        <div>
          <label className={labelClass}>पता</label>
          <textarea name="address" rows={2} className={inputClass} placeholder="पूरा पता" />
        </div>
        <button type="submit"
          className="bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-xl hover:bg-yellow-300 transition">
          Patient Save करें
        </button>
      </form>
    </div>
  );
}