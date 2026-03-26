"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPatientPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const inputClass =
    "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition placeholder-gray-500";
  const labelClass = "block text-gray-400 text-xs mb-1";

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return alert("नाम जरूरी है।");
    setSaving(true);

    const res = await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mobile, age: age ? parseInt(age) : null, sex }),
    });

    if (res.ok) {
      const data = await res.json();
      // Patient detail page पर भेजो ताकि token दिखे
      router.push(`/dashboard/patients/${data.id}?new=1`);
    } else {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "Error saving patient");
      setSaving(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-6">
      <h2 className="text-xl font-bold text-white mb-1">🧑‍⚕️ नया Patient</h2>
      <p className="text-gray-500 text-xs mb-6">नाम और mobile भरें — डॉक्टर के पास पहुँच जाएगा</p>

      <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl border border-gray-800 p-6 flex flex-col gap-4">
        {/* नाम — जरूरी */}
        <div>
          <label className={labelClass}>नाम <span className="text-red-400">*</span></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
            placeholder="Patient का पूरा नाम"
          />
        </div>

        {/* Mobile — जरूरी */}
        <div>
          <label className={labelClass}>Mobile <span className="text-red-400">*</span></label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            required
            className={inputClass}
            placeholder="10 अंक"
            maxLength={10}
          />
        </div>

        {/* उम्र + लिंग — optional */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>उम्र</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className={inputClass}
              placeholder="वर्ष"
              min={1}
              max={120}
            />
          </div>
          <div>
            <label className={labelClass}>लिंग</label>
            <select value={sex} onChange={(e) => setSex(e.target.value)} className={inputClass}>
              <option value="">चुनें</option>
              <option value="Male">पुरुष</option>
              <option value="Female">महिला</option>
              <option value="Other">अन्य</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-60 text-base mt-1"
        >
          {saving ? "Register हो रहा है..." : "✅ Patient Register करें"}
        </button>
      </form>
    </div>
  );
}