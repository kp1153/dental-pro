"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [currentPin, setCurrentPin] = useState("----");
  const [newPin, setNewPin] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((d) => { if (d.pin) setCurrentPin(d.pin); });
  }, []);

  const handleChange = async () => {
    if (newPin.length !== 4 || !/^\d{4}$/.test(newPin)) {
      setMsg("❌ PIN सिर्फ 4 अंकों का होना चाहिए");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPin }),
    });
    setLoading(false);
    if (res.ok) {
      setCurrentPin(newPin);
      setNewPin("");
      setMsg("✅ PIN सफलतापूर्वक बदल दिया गया!");
    } else {
      const d = await res.json();
      setMsg("❌ " + (d.error || "कुछ गड़बड़ हुई"));
    }
  };

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold text-white mb-1">⚙️ Settings</h1>
      <p className="text-gray-400 text-sm mb-8">Receptionist का PIN बदलें</p>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <div className="mb-6">
          <p className="text-gray-400 text-xs mb-1">मौजूदा PIN</p>
          <p className="text-3xl font-extrabold text-yellow-400 tracking-[0.4em]">{currentPin}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-400 text-xs block mb-2">नया PIN (4 अंक)</label>
          <input
            type="number"
            maxLength={4}
            value={newPin}
            onChange={(e) => {
              const v = e.target.value.slice(0, 4);
              setNewPin(v);
              setMsg("");
            }}
            placeholder="जैसे: 5678"
            className="w-full bg-gray-800 text-white text-xl font-bold border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 tracking-widest"
          />
        </div>

        {msg && (
          <p className={`text-sm mb-4 ${msg.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
            {msg}
          </p>
        )}

        <button
          onClick={handleChange}
          disabled={loading || newPin.length !== 4}
          className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 text-gray-900 font-bold py-3 rounded-xl transition"
        >
          {loading ? "बदल रहे हैं..." : "PIN बदलें"}
        </button>

        <p className="text-gray-600 text-xs mt-4 text-center">
          नया काउंटर ब्वाय आने पर PIN बदल दें 🔒
        </p>
      </div>
    </div>
  );
}
