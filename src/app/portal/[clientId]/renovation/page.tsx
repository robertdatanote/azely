import { RenovationPage } from "@/components/portal/renovation/RenovationPage";

export const metadata = { title: "Renovation" };

export default async function Renovation({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <RenovationPage clientId={clientId} />;
}
