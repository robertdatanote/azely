import { PropertyDetailPage } from "@/components/properties/PropertyDetailPage";
import { mockProperties } from "@/data/mockClients";

export async function generateMetadata({ params }: { params: Promise<{ propertyId: string }> }) {
  const { propertyId } = await params;
  const property = mockProperties.find((p) => p.id === propertyId);
  return { title: property?.name ?? "Property" };
}

export default async function PropertyDetail({ params }: { params: Promise<{ propertyId: string }> }) {
  const { propertyId } = await params;
  return <PropertyDetailPage propertyId={propertyId} />;
}
