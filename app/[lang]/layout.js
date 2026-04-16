import { notFound } from "next/navigation";
import { isLocale } from "../../components/i18n";

export default async function LocalizedLayout({ children, params }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return children;
}
