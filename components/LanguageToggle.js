"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { localizePath } from "./i18n";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${localizePath(pathname, nextLanguage)}${hash}`);
  };

  return (
    <div className="language-toggle" aria-label={t.common.language}>
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={language === "sw" ? "active" : ""}
        onClick={() => handleLanguageChange("sw")}
      >
        SW
      </button>
    </div>
  );
}
