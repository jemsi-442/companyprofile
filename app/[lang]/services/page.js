import ServicesContent from "../../../components/ServicesContent";
import { createLocalizedMetadata } from "../../../components/metadata";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return createLocalizedMetadata(lang, "services", `/${lang}/services`);
}

export default function LocalizedServicesPage() {
  return <ServicesContent />;
}
