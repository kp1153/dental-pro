import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-12 max-w-4xl mx-auto">
        <Link href="/capping">
          <div className="rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-xl transition cursor-pointer text-center">
            <h2 className="text-2xl font-semibold mb-2">🦷 Capping</h2>
            <p className="text-gray-500">दाँतों की कैपिंग के बारे में जानें और अपॉइंटमेंट लें।</p>
          </div>
        </Link>

        <Link href="/fix-teeth">
          <div className="rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-xl transition cursor-pointer text-center">
            <h2 className="text-2xl font-semibold mb-2">✨ Fix Teeth</h2>
            <p className="text-gray-500">टेढ़े-मेढ़े दाँतों को ठीक करने के उपाय जानें।</p>
          </div>
        </Link>
      </section>
    </main>
  );
}