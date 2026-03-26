"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0d1b2a] to-[#0a0f1e]">

      {/* Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-green-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">आपकी </span>
            <span className="text-yellow-400">मुस्कान</span>
            <br />
            <span className="text-white">हमारी </span>
            <span className="text-green-400">जिम्मेदारी</span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            आधुनिक दंत चिकित्सा — दर्दरहित इलाज और भरोसेमंद परिणाम।
          </p>

          <div className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl inline-block">
            📞 6387129705 / 9452531751
          </div>

          {/* Trust */}
          <div className="mt-10 flex gap-6 justify-center md:justify-start text-sm text-gray-400">
            <span>⭐ 4.9 रेटिंग</span>
            <span>5000+ मरीज़</span>
            <span>दर्दरहित इलाज</span>
          </div>

        </div>

        {/* RIGHT SLIDER */}
        <div className="w-80 relative">
          <div className="relative w-full h-[420px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={slides[current]}
                  alt="clinic"
                  fill
                  priority={current === 0}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-3 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "bg-yellow-400" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}