import { PortalShell } from "@/components/portal/PortalShell";

export default async function PortalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;

  return <PortalShell clientId={clientId}>{children}</PortalShell>;
}
