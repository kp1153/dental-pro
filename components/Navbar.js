import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <span className="text-white font-extrabold text-xl tracking-wide">🦷 एडवांस डेंटल क्लिनिक</span>
        <span className="text-green-200 text-sm">LIC के सामने, बस्ती रोड, डुमरियागंज</span>
        <div className="flex gap-8 text-sm font-semibold text-white pt-1 border-t border-green-600 w-full justify-center">
          <Link href="#home" className="hover:text-green-200 transition">होम</Link>
          <Link href="#services" className="hover:text-green-200 transition">सेवाएं</Link>
          <Link href="#doctor" className="hover:text-green-200 transition">डॉक्टर</Link>
          <Link href="#contact" className="hover:text-green-200 transition">संपर्क</Link>
        </div>
      </div>
    </nav>
  );
}