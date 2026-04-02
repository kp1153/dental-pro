"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setDeferredPrompt(null);
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferredPrompt(null);
  };

  const links = [
    { label: "फिक्स दाँत", hash: "fix-teeth", route: "/fix-teeth" },
    { label: "आरसीटी", hash: "rct", route: "/rct" },
    { label: "कैपिंग", hash: "capping", route: "/capping" },
    { label: "डिजिटल एक्स-रे", hash: "xray", route: "/xray" },
    { label: "पायरिया", hash: "pyorrhea", route: "/pyorrhea" },
    { label: "ब्रेसेस", hash: "braces", route: "/braces" },
    { label: "संपर्क", hash: "contact", route: "/contact" },
  ];

  return (
    <nav className="bg-green-700 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <Link href="/" className="text-white font-extrabold text-xl tracking-wide">
          🦷 एडवांस डेंटल क्लिनिक
        </Link>
        <span className="text-green-200 text-sm">LIC के सामने, बस्ती रोड, डुमरियागंज</span>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-white pt-2 border-t border-green-600 w-full justify-center">
          <Link href="/" className="hover:text-green-200 transition">होम</Link>
          {links.map((l, i) => (
            <Link
              key={i}
              href={isHome ? `#${l.hash}` : l.route}
              className="hover:text-green-200 transition"
            >
              {l.label}
            </Link>
          ))}
          {!installed && (
            <button
              onClick={handleInstall}
              className="hover:text-green-200 transition flex items-center gap-1"
            >
              📲 मोबाइल ऐप
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}