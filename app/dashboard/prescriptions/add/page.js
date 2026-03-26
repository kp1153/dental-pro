import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { prescriptions } from "@/lib/schema";

export const dynamic = "force-dynamic";

const MEDICINE_CATEGORIES = [
  {
    category: "🦷 Antibiotics",
    medicines: [
      { name: "Tab. Amoxicillin 500mg", dose: "1-0-1", days: "5", instruction: "खाने के बाद" },
      { name: "Tab. Amoxicillin + Clavulanic Acid 625mg (Augmentin)", dose: "1-0-1", days: "5", instruction: "खाने के बाद" },
      { name: "Tab. Metronidazole 400mg (Metrogyl)", dose: "1-1-1", days: "5", instruction: "खाने के बाद" },
      { name: "Tab. Doxycycline 100mg", dose: "1-0-1", days: "5", instruction: "खाने के साथ पानी पिएं" },
      { name: "Tab. Azithromycin 500mg", dose: "1-0-0", days: "3", instruction: "खाने से 1 घंटे पहले" },
      { name: "Cap. Clindamycin 300mg", dose: "1-0-1", days: "5", instruction: "खाने के बाद" },
      { name: "Tab. Tinidazole 500mg", dose: "1-0-1", days: "5", instruction: "खाने के बाद" },
    ],
  },
  {
    category: "💊 Pain Killers / Anti-inflammatory",
    medicines: [
      { name: "Tab. Ibuprofen 400mg", dose: "1-1-1", days: "3", instruction: "खाने के बाद, SOS" },
      { name: "Tab. Diclofenac 50mg", dose: "1-0-1", days: "3", instruction: "खाने के बाद" },
      { name: "Tab. Paracetamol 500mg", dose: "1-1-1", days: "3", instruction: "बुखार या दर्द में" },
      { name: "Tab. Ketorolac 10mg", dose: "1-0-1", days: "2", instruction: "SOS — तेज दर्द में" },
      { name: "Tab. Aceclofenac 100mg + Paracetamol 325mg", dose: "1-0-1", days: "3", instruction: "खाने के बाद" },
      { name: "Tab. Nimesulide 100mg", dose: "1-0-1", days: "3", instruction: "खाने के बाद" },
      { name: "Tab. Mefenamic Acid 500mg", dose: "1-0-1", days: "3", instruction: "खाने के बाद" },
    ],
  },
  {
    category: "🛡️ Gastro-protective",
    medicines: [
      { name: "Tab. Omeprazole 20mg (Pan D)", dose: "1-0-0", days: "5", instruction: "खाने से पहले खाली पेट" },
      { name: "Tab. Pantoprazole 40mg", dose: "1-0-0", days: "5", instruction: "खाने से पहले" },
      { name: "Tab. Rabeprazole 20mg", dose: "1-0-0", days: "5", instruction: "खाने से पहले" },
    ],
  },
  {
    category: "🌿 Antiseptic Mouthwash / Gel",
    medicines: [
      { name: "Hexidine Mouthwash (Chlorhexidine 0.2%)", dose: "दिन में 2 बार", days: "7", instruction: "30 सेकंड कुल्ला करें, निगलें नहीं" },
      { name: "Metrogyl DG Gel (Metronidazole + Chlorhexidine)", dose: "दिन में 2 बार", days: "7", instruction: "Brush के बाद मसूड़ों पर लगाएं" },
      { name: "Clove Oil / Tempore Gel", dose: "SOS", days: "3", instruction: "दर्द वाले दाँत पर लगाएं" },
      { name: "Tantum Verde Mouthwash (Benzydamine)", dose: "दिन में 3 बार", days: "5", instruction: "खाने के बाद कुल्ला करें" },
    ],
  },
  {
    category: "💉 Anti-allergic / Steroids",
    medicines: [
      { name: "Tab. Cetirizine 10mg", dose: "0-0-1", days: "3", instruction: "रात को सोते समय" },
      { name: "Tab. Prednisolone 10mg", dose: "1-0-0", days: "3", instruction: "खाने के बाद" },
      { name: "Tab. Methylprednisolone 4mg", dose: "1-0-1", days: "3", instruction: "खाने के बाद" },
    ],
  },
  {
    category: "🦠 Antifungal",
    medicines: [
      { name: "Tab. Fluconazole 150mg", dose: "1-0-0", days: "3", instruction: "हफ्ते में एक बार" },
      { name: "Miconazole Oral Gel", dose: "दिन में 4 बार", days: "7", instruction: "मुँह में लगाएं" },
    ],
  },
  {
    category: "🧴 Local Anesthetic / Topical",
    medicines: [
      { name: "Lignocaine 2% Gel", dose: "SOS", days: "3", instruction: "दर्द वाली जगह लगाएं" },
      { name: "Benzocaine Gel (Mucopain)", dose: "SOS", days: "3", instruction: "Ulcer पर लगाएं" },
    ],
  },
  {
    category: "💪 Vitamins / Supplements",
    medicines: [
      { name: "Tab. Vitamin C 500mg", dose: "1-0-0", days: "10", instruction: "खाने के बाद" },
      { name: "Tab. Calcium + Vitamin D3", dose: "0-0-1", days: "30", instruction: "रात को दूध के साथ" },
      { name: "Tab. B-Complex", dose: "1-0-0", days: "10", instruction: "खाने के बाद" },
      { name: "Tab. Vitamin B12 (Mecobalamin 500mcg)", dose: "1-0-1", days: "10", instruction: "खाने के बाद" },
    ],
  },
];

async function addPrescription(formData) {
  "use server";
  const patientId = parseInt(formData.get("patient_id"));
  const date = formData.get("date") || new Date().toISOString().split("T")[0];
  const notes = formData.get("notes");

  // Selected medicines से prescription text बनाओ
  const selectedMeds = [];
  let i = 0;
  while (formData.get(`med_name_${i}`) !== null) {
    const name = formData.get(`med_name_${i}`);
    const dose = formData.get(`med_dose_${i}`);
    const days = formData.get(`med_days_${i}`);
    const instruction = formData.get(`med_instruction_${i}`);
    if (name) {
      selectedMeds.push(`${name}\n   Dose: ${dose} × ${days} दिन\n   ${instruction}`);
    }
    i++;
  }

  // Manual medicines भी add करो
  const manual = formData.get("manual_medicines");
  if (manual) selectedMeds.push(manual);

  const medicines = selectedMeds.join("\n\n");

  await db.insert(prescriptions).values({ patientId, date, medicines, notes });
  redirect(`/dashboard/patients/${patientId}`);
}

export default async function AddPrescriptionPage({ searchParams }) {
  const { pid } = await searchParams;

  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-bold text-white mb-6">💊 Prescription लिखें</h2>

      <form action={addPrescription} className="flex flex-col gap-6">
        <input type="hidden" name="patient_id" value={pid || ""} />

        {/* Date */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Date</label>
              <input name="date" type="date" className={inputClass}
                defaultValue={new Date().toISOString().split("T")[0]} />
            </div>
          </div>
        </div>

        {/* Medicine Categories */}
        {MEDICINE_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
            <h3 className="text-yellow-400 font-bold text-sm mb-4">{cat.category}</h3>
            <div className="flex flex-col gap-3">
              {cat.medicines.map((med, medIdx) => {
                const fieldIdx = MEDICINE_CATEGORIES
                  .slice(0, catIdx)
                  .reduce((sum, c) => sum + c.medicines.length, 0) + medIdx;
                return (
                  <div key={medIdx} className="flex items-start gap-3 bg-gray-800/50 rounded-xl p-3">
                    <input
                      type="checkbox"
                      name={`med_selected_${fieldIdx}`}
                      id={`med_${fieldIdx}`}
                      className="mt-1 accent-yellow-400 w-4 h-4 flex-shrink-0"
                      onChange={(e) => {
                        const row = e.target.closest('.med-row');
                        if (row) {
                          const inputs = row.querySelectorAll('input[type="text"], input[type="number"]');
                          inputs.forEach(inp => inp.disabled = !e.target.checked);
                        }
                      }}
                    />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 med-row">
                      <div className="md:col-span-2">
                        <label htmlFor={`med_${fieldIdx}`} className="text-white text-sm font-medium cursor-pointer">
                          {med.name}
                        </label>
                        <input type="hidden" name={`med_name_${fieldIdx}`} value={med.name} />
                      </div>
                      <div>
                        <label className={labelClass}>Dose</label>
                        <input type="text" name={`med_dose_${fieldIdx}`}
                          defaultValue={med.dose} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>दिन</label>
                        <input type="text" name={`med_days_${fieldIdx}`}
                          defaultValue={med.days} className={inputClass} />
                      </div>
                      <div className="md:col-span-4">
                        <input type="text" name={`med_instruction_${fieldIdx}`}
                          defaultValue={med.instruction}
                          className={`${inputClass} text-gray-400`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Manual Entry */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <h3 className="text-yellow-400 font-bold text-sm mb-3">✏️ Manual Medicine (अतिरिक्त)</h3>
          <textarea name="manual_medicines" rows={3} className={inputClass}
            placeholder="कोई और दवाई यहाँ लिखें..." />
        </div>

        {/* Notes */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <h3 className="text-yellow-400 font-bold text-sm mb-3">📝 Advice / Notes</h3>
          <textarea name="notes" rows={3} className={inputClass}
            placeholder="जैसे: ठंडा पानी न पिएं, नरम खाना खाएं, 2 दिन बाद आएं..." />
        </div>

        <button type="submit"
          className="bg-blue-600 text-white font-extrabold py-4 rounded-2xl hover:bg-blue-500 transition text-base">
          💊 Prescription Save करें
        </button>
      </form>
    </div>
  );
}