import { DocumentsPage } from "@/components/portal/documents/DocumentsPage";

export const metadata = { title: "Documents" };

export default async function Documents({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <DocumentsPage clientId={clientId} />;
}
