import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <span className="text-white font-extrabold text-xl tracking-wide">🦷 एडवांस डेंटल क्लिनिक</span>
        <span className="text-green-200 text-sm">LIC के सामने, बस्ती रोड, डुमरियागंज</span>
        <div className="flex flex-wrap gap-6 text-sm font-semibold text-white pt-2 border-t border-green-600 w-full justify-center">
          <Link href="#home" className="hover:text-green-200 transition">होम</Link>
          <Link href="/fix-teeth" className="hover:text-green-200 transition">फिक्स दाँत</Link>
          <Link href="/rct" className="hover:text-green-200 transition">आरसीटी</Link>
          <Link href="/capping" className="hover:text-green-200 transition">कैपिंग</Link>
          <Link href="/xray" className="hover:text-green-200 transition">डिजिटल एक्स-रे</Link>
          <Link href="/pyorrhea" className="hover:text-green-200 transition">पायरिया</Link>
          <Link href="/braces" className="hover:text-green-200 transition">ब्रेसेस</Link>
          <Link href="#contact" className="hover:text-green-200 transition">संपर्क</Link>
        </div>
      </div>
    </nav>
  );
}