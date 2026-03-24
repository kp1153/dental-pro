"use client";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error")) {
      alert("Login failed. Please try again.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Dental Pro</h1>
        <p className="text-gray-400 text-sm mb-8">Clinic Management System</p>
        <a
          href="/api/auth/google"
          className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition w-full"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </a>
        <div className="mt-6 border-t pt-6">
          <p className="text-gray-400 text-sm mb-3">Receptionist Login</p>
          <a
            href="/login/pin"
            className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Enter PIN
          </a>
        </div>
      </div>
    </div>
  );
}