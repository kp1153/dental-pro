import Link from "next/link";

export const metadata = {
  title: "संपर्क — एडवांस डेंटल क्लिनिक, डुमरियागंज",
  description: "डॉ. अनवर अली से संपर्क करें। LIC के सामने, बस्ती रोड, डुमरियागंज। फोन: 6387129705",
  keywords: "संपर्क, एडवांस डेंटल क्लिनिक, डॉ. अनवर अली, डुमरियागंज, दंत चिकित्सक",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">

      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-green-700/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-yellow-400/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-700/20 border border-green-600/30 text-green-400 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            हम आपकी सेवा में तत्पर हैं
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-white">हमसे </span>
            <span className="text-yellow-400">मिलें</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            दाँत की कोई भी समस्या हो — छोटी या बड़ी — डॉ. अनवर अली से आज ही मिलें।
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: "📍", title: "पता", lines: ["LIC के सामने", "बस्ती रोड, डुमरियागंज"] },
            { icon: "📞", title: "फोन", lines: ["6387129705", "9452531751"] },
            { icon: "🪪", title: "पंजीकरण", lines: ["रजि. सं. A17333", "BDS — KGMU लखनऊ"] },
          ].map((c, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/20 transition">
              <div className="text-4xl mb-4">{c.icon}</div>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">{c.title}</p>
              {c.lines.map((l, j) => (
                <p key={j} className="text-gray-300 text-sm leading-relaxed">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-700/10 via-[#0d1f4f] to-yellow-400/5 border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">अभी कॉल करें</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              अपॉइंटमेंट के लिए या किसी भी जानकारी के लिए सीधे कॉल करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6387129705" className="bg-yellow-400 text-[#0a0f1e] font-extrabold px-10 py-4 rounded-2xl hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/20">
                📞 6387129705
              </a>
              <a href="tel:9452531751" className="border border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/5 transition">
                📞 9452531751
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">हमारी सेवाएं</p>
            <h2 className="text-3xl font-extrabold text-white">क्लिनिक में उपलब्ध सेवाएं</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🦷", name: "फिक्स दाँत", href: "/fix-teeth" },
              { icon: "🔬", name: "आरसीटी", href: "/rct" },
              { icon: "👑", name: "कैपिंग", href: "/capping" },
              { icon: "📡", name: "डिजिटल एक्स-रे", href: "/xray" },
              { icon: "🩺", name: "पायरिया", href: "/pyorrhea" },
              { icon: "✨", name: "ब्रेसेस", href: "/braces" },
            ].map((s, i) => (
              <Link key={i} href={s.href}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-400/30 hover:bg-white/10 transition">
                <span className="text-2xl">{s.icon}</span>
                <p className="text-gray-300 text-sm font-semibold">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}