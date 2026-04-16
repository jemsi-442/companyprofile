import ContactContent from "../../../components/ContactContent";
import { createLocalizedMetadata } from "../../../components/metadata";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return createLocalizedMetadata(lang, "contact", `/${lang}/contact`);
}

export default function LocalizedContactPage() {
  return <ContactContent />;
}
