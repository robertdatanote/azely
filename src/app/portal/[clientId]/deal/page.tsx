import { DealPage } from "@/components/portal/deal/DealPage";

export const metadata = { title: "Deal Tracker" };

export default async function Deal({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <DealPage clientId={clientId} />;
}
