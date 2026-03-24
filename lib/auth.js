import { cookies } from "next/headers";

export async function getRole() {
  const cookieStore = await cookies();
  const role = cookieStore.get("role");
  return role ? role.value : null;
}

export async function requireDoctor() {
  const role = await getRole();
  if (role !== "doctor") return false;
  return true;
}

export async function requireAuth() {
  const role = await getRole();
  if (!role) return false;
  return true;
}