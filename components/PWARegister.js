"use client";
import { useEffect, useState } from "react";

export default function PWARegister() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBtn(true);
    });

    window.addEventListener("appinstalled", () => {
      setShowBtn(false);
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShowBtn(false);
    setDeferredPrompt(null);
  };

  if (!showBtn) return null;

  return (
    <button
      onClick={handleInstall}
      className="fixed bottom-20 right-4 z-50 bg-yellow-400 text-black font-bold px-5 py-3 rounded-2xl shadow-lg text-sm"
    >
      📲 ऐप इंस्टाल करें
    </button>
  );
}