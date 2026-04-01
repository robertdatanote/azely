import { MortgagePage } from "@/components/portal/mortgage/MortgagePage";

export const metadata = { title: "Mortgage Comparison" };

export default async function Mortgage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <MortgagePage clientId={clientId} />;
}
