import AboutContent from "../../../components/AboutContent";
import { createLocalizedMetadata } from "../../../components/metadata";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return createLocalizedMetadata(lang, "about", `/${lang}/about`);
}

export default function LocalizedAboutPage() {
  return <AboutContent />;
}
