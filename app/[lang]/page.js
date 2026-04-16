import HomeContent from "../../components/HomeContent";
import { createLocalizedMetadata } from "../../components/metadata";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return createLocalizedMetadata(lang, "home", `/${lang}`);
}

export default function LocalizedHomePage() {
  return <HomeContent />;
}
