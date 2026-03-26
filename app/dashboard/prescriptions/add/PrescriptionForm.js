"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function PrescriptionForm({ pid }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [manual, setManual] = useState("");
  const [selected, setSelected] = useState({});
  const [medData, setMedData] = useState({});

  function toggleMed(key, med) {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    if (!medData[key]) {
      setMedData((prev) => ({ ...prev, [key]: { ...med } }));
    }
  }

  function updateMed(key, field, value) {
    setMedData((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
  }

  async function handleSubmit() {
    setSaving(true);
    const selectedMeds = [];
    let idx = 0;
    for (const cat of MEDICINE_CATEGORIES) {
      for (const med of cat.medicines) {
        const key = `med_${idx}`;
        if (selected[key]) {
          const d = medData[key] || med;
          selectedMeds.push(`${d.name}\n   Dose: ${d.dose} × ${d.days} दिन\n   ${d.instruction}`);
        }
        idx++;
      }
    }
    if (manual) selectedMeds.push(manual);
    const medicines = selectedMeds.join("\n\n");

    const res = await fetch("/api/prescriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId: parseInt(pid), date, medicines, notes }),
    });

    if (res.ok) {
      router.push(`/dashboard/patients/${pid}`);
    } else {
      alert("Error saving prescription");
      setSaving(false);
    }
  }

  const inputClass = "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-3 py-2 text-sm outline-none focus:border-yellow-400 transition";
  const labelClass = "block text-gray-400 text-xs mb-1";

  let globalIdx = 0;

  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-bold text-white mb-6">💊 Prescription लिखें</h2>

      <div className="flex flex-col gap-6">

        {/* Date */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <div className="max-w-xs">
            <label className={labelClass}>Date</label>
            <input type="date" className={inputClass} value={date}
              onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        {/* Medicine Categories */}
        {MEDICINE_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
            <h3 className="text-yellow-400 font-bold text-sm mb-4">{cat.category}</h3>
            <div className="flex flex-col gap-3">
              {cat.medicines.map((med) => {
                const key = `med_${globalIdx++}`;
                const isSelected = selected[key];
                const data = medData[key] || med;
                return (
                  <div key={key}
                    className={`rounded-xl p-3 border transition ${isSelected ? "bg-green-900/30 border-green-600/50" : "bg-gray-800/50 border-gray-700/50"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <input type="checkbox" id={key} checked={!!isSelected}
                        onChange={() => toggleMed(key, med)}
                        className="w-4 h-4 accent-yellow-400 flex-shrink-0" />
                      <label htmlFor={key} className="text-white text-sm font-medium cursor-pointer">
                        {med.name}
                      </label>
                    </div>
                    {isSelected && (
                      <div className="grid grid-cols-3 gap-2 mt-2 ml-7">
                        <div>
                          <label className={labelClass}>Dose</label>
                          <input type="text" className={inputClass} value={data.dose}
                            onChange={(e) => updateMed(key, "dose", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>दिन</label>
                          <input type="text" className={inputClass} value={data.days}
                            onChange={(e) => updateMed(key, "days", e.target.value)} />
                        </div>
                        <div>
                          <label className={labelClass}>Instruction</label>
                          <input type="text" className={inputClass} value={data.instruction}
                            onChange={(e) => updateMed(key, "instruction", e.target.value)} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Manual */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <h3 className="text-yellow-400 font-bold text-sm mb-3">✏️ Manual Medicine (अतिरिक्त)</h3>
          <textarea rows={3} className={inputClass} value={manual}
            onChange={(e) => setManual(e.target.value)}
            placeholder="कोई और दवाई यहाँ लिखें..." />
        </div>

        {/* Notes */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
          <h3 className="text-yellow-400 font-bold text-sm mb-3">📝 Advice / Notes</h3>
          <textarea rows={3} className={inputClass} value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="जैसे: ठंडा पानी न पिएं, नरम खाना खाएं..." />
        </div>

        <button onClick={handleSubmit} disabled={saving}
          className="bg-blue-600 text-white font-extrabold py-4 rounded-2xl hover:bg-blue-500 transition text-base disabled:opacity-60">
          {saving ? "Save हो रहा है..." : "💊 Prescription Save करें"}
        </button>
      </div>
    </div>
  );
}