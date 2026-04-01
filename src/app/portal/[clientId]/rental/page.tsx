import { RentalPage } from "@/components/portal/rental/RentalPage";

export const metadata = { title: "Rental Dashboard" };

export default async function Rental({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <RentalPage clientId={clientId} />;
}
