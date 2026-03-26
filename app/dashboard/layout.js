import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardLayout(props) {
  const { children } = props;

  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;
  const name = "Dr. Anwar Ali";

  if (!role) {
    redirect("/login");
  }

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/patients", label: "Patients" },
    { href: "/dashboard/appointments", label: "Appointments" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Dental Pro</h2>
        <p className="mb-4 text-sm text-gray-300">{name}</p>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded hover:bg-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}