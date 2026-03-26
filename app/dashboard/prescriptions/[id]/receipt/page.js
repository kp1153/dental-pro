import { db } from "@/lib/db";
import { prescriptions, patients } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PrescriptionReceiptPage({ params }) {
  const { id } = await params;

  const [rx] = await db.select().from(prescriptions).where(eq(prescriptions.id, parseInt(id)));
  if (!rx) notFound();

  const [patient] = await db.select().from(patients).where(eq(patients.id, rx.patientId));

  return (
    <div className="max-w-md mx-auto bg-white text-black p-8 print:p-4">
      <style>{`@media print { body { background: white; } .no-print { display: none; } }`}</style>

      <div className="text-center mb-6">
        <h1 className="text-xl font-extrabold">🦷 एडवांस डेंटल क्लिनिक</h1>
        <p className="text-sm text-gray-600">LIC के सामने, बस्ती रोड, डुमरियागंज</p>
        <p className="text-sm text-gray-600">📞 6387129705 | 9452531751</p>
        <p className="text-xs text-gray-500">Dr. Anwar Ali — BDS, KGMU Lucknow</p>
      </div>

      <hr className="mb-4" />

      <div className="flex justify-between text-sm mb-4">
        <div>
          <p className="font-bold">{patient?.name}</p>
          <p className="text-gray-600">{patient?.age} वर्ष | {patient?.sex}</p>
          <p className="text-gray-600">📞 {patient?.mobile}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">{patient?.patientNumber}</p>
          <p className="text-gray-600">{rx.date}</p>
        </div>
      </div>

      <hr className="mb-4" />

      <h3 className="font-bold text-sm mb-2">Rx</h3>
      <pre className="text-sm whitespace-pre-wrap font-mono bg-gray-50 p-3 rounded mb-4">{rx.medicines}</pre>

      {rx.notes && (
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm mb-4">
          <p className="font-bold text-xs mb-1">Advice:</p>
          <p>{rx.notes}</p>
        </div>
      )}

      <hr className="mt-6 mb-3" />
      <p className="text-xs text-center text-gray-400">यह prescription डॉक्टर की सलाह पर ही use करें</p>

      <div className="mt-6 text-center no-print">
        <button onClick={() => window.print()}
          className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-500 transition">
          🖨️ Print करें
        </button>
      </div>
    </div>
  );
}