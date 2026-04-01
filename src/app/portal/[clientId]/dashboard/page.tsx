import { DashboardPage } from "@/components/portal/dashboard/DashboardPage";

export const metadata = { title: "Dashboard" };

export default async function Dashboard({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <DashboardPage clientId={clientId} />;
}
