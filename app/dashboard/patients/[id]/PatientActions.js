"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientActions({ patient }) {
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [name, setName] = useState(patient.name || "");
  const [mobile, setMobile] = useState(patient.mobile || "");
  const [age, setAge] = useState(patient.age || "");
  const [sex, setSex] = useState(patient.sex || "");
  const [address, setAddress] = useState(patient.address || "");

  const inputClass =
    "w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition placeholder-gray-500";
  const labelClass = "block text-gray-400 text-xs mb-1";

  async function handleEdit() {
    if (!name.trim()) return alert("नाम जरूरी है।");
    if (!mobile.trim()) return alert("Mobile जरूरी है।");
    setSaving(true);
    const res = await fetch("/api/patients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: patient.id, name, mobile, age: age ? parseInt(age) : null, sex, address }),
    });
    setSaving(false);
    if (res.ok) {
      setShowEdit(false);
      router.refresh();
    } else {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "Error saving");
    }
  }

  async function handleDelete() {
    const confirm1 = window.confirm(`"${patient.name}" को permanently delete करें?\n\nसभी treatments, prescriptions और bills भी delete हो सकते हैं।`);
    if (!confirm1) return;
    setDeleting(true);
    const res = await fetch(`/api/patients?id=${patient.id}`, { method: "DELETE" });
    setDeleting(false);
    if (res.ok) {
      router.push("/dashboard/patients");
    } else {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "Delete failed");
    }
  }

  return (
    <>
      {/* Buttons */}
      <button
        onClick={() => setShowEdit(true)}
        className="text-xs bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-700 px-3 py-1.5 rounded-lg transition"
      >
        ✏️ Edit
      </button>
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="text-xs bg-gray-800 hover:bg-red-900/40 text-red-400 border border-gray-700 px-3 py-1.5 rounded-lg transition disabled:opacity-50"
      >
        {deleting ? "..." : "🗑️ Delete"}
      </button>

      {/* Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-white font-bold text-lg mb-5">✏️ Patient Edit करें</h3>

            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>नाम <span className="text-red-400">*</span></label>
                <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="पूरा नाम" />
              </div>
              <div>
                <label className={labelClass}>Mobile <span className="text-red-400">*</span></label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" maxLength={10} className={inputClass} placeholder="10 अंक" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>उम्र</label>
                  <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min={1} max={120} className={inputClass} placeholder="वर्ष" />
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
              <div>
                <label className={labelClass}>पता</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} placeholder="घर का पता (optional)" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleEdit}
                disabled={saving}
                className="flex-1 bg-yellow-400 text-gray-900 font-extrabold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-60"
              >
                {saving ? "Save हो रहा है..." : "✅ Save करें"}
              </button>
              <button
                onClick={() => setShowEdit(false)}
                className="flex-1 bg-gray-800 text-gray-300 font-bold py-3 rounded-xl hover:bg-gray-700 transition"
              >
                रद्द करें
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}