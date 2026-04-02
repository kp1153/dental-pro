"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PinPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (pin.length === 4 && !loading && !locked) {
      handleSubmit(pin);
    }
  }, [pin]);

  useEffect(() => {
    if (!locked || lockTimer <= 0) {
      if (locked && lockTimer === 0) {
        setLocked(false);
        setAttempts(0);
        setError("");
      }
      return;
    }
    const t = setTimeout(() => setLockTimer((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [locked, lockTimer]);

  const handleSubmit = async (currentPin) => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin: currentPin }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/dashboard/patients/add");
    } else {
      const next = attempts + 1;
      setAttempts(next);
      setPin("");
      if (next >= 5) {
        setLocked(true);
        setLockTimer(60);
        setError("5 wrong attempts. Locked for 60 seconds.");
      } else {
        setError(`Wrong PIN. ${5 - next} attempts remaining.`);
      }
    }
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 w-full max-w-xs text-center shadow-2xl">

        <div className="text-3xl mb-2">🔐</div>
        <h1 className="text-white font-extrabold text-xl mb-1">Counter Login</h1>
        <p className="text-gray-400 text-sm mb-6">Enter 4-digit PIN</p>

        <div className="flex justify-center gap-4 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
              pin.length > i ? "bg-green-400 border-green-400 scale-110" : "border-gray-600"
            }`} />
          ))}
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-700 text-red-400 text-sm rounded-xl px-4 py-2 mb-4">
            {error}
            {locked && lockTimer > 0 && (
              <span className="block text-xs mt-1 font-bold">{lockTimer}s</span>
            )}
          </div>
        )}

        {loading && (
          <p className="text-yellow-400 text-sm mb-4 animate-pulse">Verifying...</p>
        )}

        <div className="grid grid-cols-3 gap-3 mb-6">
          {keys.map((k, i) => (
            <button
              key={i}
              onClick={() => {
                if (locked || loading) return;
                if (k === "⌫") { setPin((p) => p.slice(0, -1)); setError(""); }
                else if (k !== "" && pin.length < 4) setPin((p) => p + k);
              }}
              disabled={k === "" || locked}
              className={`h-14 rounded-2xl text-xl font-bold transition active:scale-95 ${
                k === "" ? "invisible" :
                k === "⌫" ? "bg-gray-800 text-gray-300 hover:bg-gray-700" :
                "bg-gray-800 text-white hover:bg-gray-700"
              } disabled:opacity-40`}
            >
              {k}
            </button>
          ))}
        </div>

        <a href="/login" className="text-gray-600 text-xs hover:text-gray-400 transition">
          ← Back
        </a>
      </div>
    </div>
  );
}