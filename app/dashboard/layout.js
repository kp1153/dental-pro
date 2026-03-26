import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;
  const name = cookieStore.get("doctor_name")?.value;

  if (!role) redirect("/login");

  const navLinks = [
    { href: "/dashboard", label: "🏠 Dashboard" },
    { href: "/dashboard/patients", label: "🧑‍⚕️ Patients" },
    { href: "/dashboard/treatments", label: "🦷 Treatments" },
    { href: "/dashboard/prescriptions", label: "💊 Prescriptions" },
    { href: "/dashboard/billing", label: "💰 Billing" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col py-6 px-4 gap-1">
        <div className="text-yellow-400 font-extrabold text-lg mb-6 px-2">🦷 Dental Pro</div>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href}
            className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition">
            {l.label}
          </Link>
        ))}
        <div className="mt-auto pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 px-2 mb-2">{name || "Doctor"}</p>
          <a href="/api/logout"
            className="block px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-gray-800 transition">
            🚪 Logout
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}