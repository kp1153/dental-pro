"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PinPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePress = (val) => {
    if (pin.length < 4) setPin((p) => p + val);
  };

  const handleClear = () => {
    setPin("");
    setError("");
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/auth/pin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Wrong PIN. Try again.");
      setPin("");
    }
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xs text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Receptionist Login</h1>
        <p className="text-gray-400 text-sm mb-6">Enter your PIN</p>
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border-2 border-blue-500"
              style={{ background: pin.length > i ? "#2563eb" : "white" }}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {keys.map((k, i) => (
            <button
              key={i}
              onClick={() => {
                if (k === "⌫") setPin((p) => p.slice(0, -1));
                else if (k !== "") handlePress(k);
              }}
              className="h-14 rounded-xl text-xl font-bold bg-gray-100 text-gray-900 hover:bg-gray-200 transition disabled:opacity-0"
              disabled={k === ""}
            >
              {k}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={pin.length !== 4}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
        >
          Login
        </button>
      </div>
    </div>
  );
}