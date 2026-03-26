import PrescriptionForm from "./PrescriptionForm";

export const dynamic = "force-dynamic";

export default async function AddPrescriptionPage({ searchParams }) {
  const { pid } = await searchParams;
  return <PrescriptionForm pid={pid} />;
}