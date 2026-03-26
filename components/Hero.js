"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-green-700/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">

        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-700/20 border border-green-600/30 text-green-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            अभी उपलब्ध — डुमरियागंज
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">आपकी </span>
            <span className="relative inline-block">
              <span className="text-yellow-400">मुस्कान</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 6 Q100 0 200 6" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            <br />
            <span className="text-white">हमारी </span>
            <span className="text-green-400">जिम्मेदारी</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-lg">डॉ. अनवर अली — BDS, KGMU लखनऊ</p>
          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg">
            आधुनिक तकनीक और अनुभवी हाथों से बेहतरीन दंत चिकित्सा। दर्द रहित इलाज, विश्वसनीय परिणाम।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="tel:6387129705"
              className="bg-yellow-400 text-[#0a0f1e] font-extrabold px-8 py-4 rounded-2xl text-base hover:bg-yellow-300 transition shadow-xl shadow-yellow-400/20">
              📞 अभी अपॉइंटमेंट लें
            </a>
            <Link href="#services"
              className="border border-white/15 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/5 hover:border-white/30 transition">
              हमारी सेवाएं →
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
            {[
              { num: "१०+", label: "वर्षों का अनुभव" },
              { num: "५०००+", label: "संतुष्ट मरीज" },
              { num: "६", label: "विशेष सेवाएं" },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-extrabold text-yellow-400">{s.num}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image Slider */}
        <div className="flex-shrink-0 relative w-72 md:w-80">

          {/* ── यही बदला — height बढ़ाई, object-contain लगाया ── */}
          <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1425]"
            style={{ aspectRatio: "3/4" }}>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[current]}
                  alt={`slide-${current + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </motion.div>
            </AnimatePresence>

            <button onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center z-10 transition">
              ‹
            </button>
            <button onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center z-10 transition">
              ›
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition ${i === current ? "bg-yellow-400" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-extrabold px-3 py-2 rounded-xl shadow-lg">
            ✓ BDS KGMU
          </div>
          <div className="absolute -bottom-3 -left-3 bg-yellow-400 text-[#0a0f1e] text-xs font-extrabold px-3 py-2 rounded-xl shadow-lg">
            📞 6387129705
          </div>
        </div>

      </div>
    </section>
  );
}