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
    <>
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #prescription, #prescription * { visibility: visible; }
          #prescription { position: fixed; top: 0; left: 0; width: 100%; }
          .no-print { display: none !important; }
          body { background: white; }
        }
        @media screen {
          #prescription { max-width: 680px; margin: 0 auto; background: white; color: black; padding: 32px; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
        }
      `}</style>

      <div className="no-print mb-4 flex gap-3">
        <button onClick={() => window.print()}
          className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-blue-500 transition">
          🖨️ Print करें
        </button>
        <a href={`/dashboard/patients/${rx.patientId}`}
          className="bg-gray-700 text-white font-bold px-6 py-2 rounded-xl hover:bg-gray-600 transition">
          ← वापस
        </a>
      </div>

      <div id="prescription">
        {/* Header */}
        <div style={{ borderBottom: "3px solid #15803d", paddingBottom: 16, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#15803d" }}>🦷 एडवांस डेंटल क्लिनिक</div>
            <div style={{ fontSize: 13, color: "#374151", marginTop: 4 }}>LIC के सामने, बस्ती रोड, डुमरियागंज, उत्तर प्रदेश</div>
            <div style={{ fontSize: 13, color: "#374151" }}>📞 6387129705 | 9452531751</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#15803d" }}>डॉ. अनवर अली</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>BDS — KGMU लखनऊ</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>Reg. No: ................</div>
          </div>
        </div>

        {/* Patient Info */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, background: "#f0fdf4", padding: "10px 14px", borderRadius: 8 }}>
          <div>
            <span style={{ fontSize: 13, color: "#6b7280" }}>Patient: </span>
            <span style={{ fontSize: 14, fontWeight: 700 }}>{patient?.name}</span>
            {patient?.age && <span style={{ fontSize: 13, color: "#6b7280", marginLeft: 12 }}>{patient.age} वर्ष</span>}
            {patient?.sex && <span style={{ fontSize: 13, color: "#6b7280", marginLeft: 8 }}>| {patient.sex}</span>}
            {patient?.mobile && <span style={{ fontSize: 13, color: "#6b7280", marginLeft: 12 }}>📞 {patient.mobile}</span>}
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: "#6b7280" }}>ID: <strong>{patient?.patientNumber}</strong></div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>Date: <strong>{rx.date}</strong></div>
          </div>
        </div>

        {/* जाँच section — अगर है तो */}
        {rx.investigations && (
          <div style={{ background: "#fffbeb", border: "1px solid #fbbf24", borderRadius: 8, padding: "10px 14px", marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#92400e", marginBottom: 8 }}>🔬 जाँच करवाएं (Investigations):</div>
            {rx.investigations.split("\n").map((test, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, fontSize: 13 }}>
                <span style={{ color: "#d97706", fontWeight: 700 }}>{i + 1}.</span>
                <span>{test}</span>
              </div>
            ))}
          </div>
        )}

        {/* Rx Symbol — दवाइयाँ हैं तो दिखाओ */}
        {rx.medicines && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: "#15803d", fontStyle: "italic" }}>Rx</span>
              <div style={{ flex: 1, borderTop: "1px solid #d1d5db" }} />
            </div>

            <div style={{ marginBottom: 20 }}>
              {rx.medicines.split("\n\n").map((med, i) => (
                <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: "1px dashed #e5e7eb" }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#15803d", minWidth: 24 }}>{i + 1}.</span>
                    <pre style={{ fontSize: 13, margin: 0, fontFamily: "inherit", whiteSpace: "pre-wrap" }}>{med}</pre>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Notes / Advice */}
        {rx.notes && (
          <div style={{ background: "#fefce8", border: "1px solid #fde047", borderRadius: 8, padding: "10px 14px", marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>⚕️ Advice:</div>
            <div style={{ fontSize: 13, color: "#374151" }}>{rx.notes}</div>
          </div>
        )}

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 40, paddingTop: 16, borderTop: "1px solid #e5e7eb" }}>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            <div>अगली appointment: ................................</div>
            <div style={{ marginTop: 4 }}>यह prescription डॉक्टर की सलाह पर ही use करें</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ borderTop: "1px solid #374151", paddingTop: 4, marginTop: 40, fontSize: 12, color: "#374151" }}>
              डॉ. अनवर अली<br />BDS, KGMU
            </div>
          </div>
        </div>
      </div>
    </>
  );
}