"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { localizePath } from "./i18n";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-panel">
        <div>
          <p className="footer-brand"><Link href={localizePath("/", language)}>JAYDIGITAL SOLUTIONS</Link></p>
          <p>{t.brand.footerText}</p>
        </div>
        <div>
          <p><a href="tel:+255683186987">+255 683 186 987</a></p>
          <p><a href="mailto:jemsifredrick4@gmail.com">jemsifredrick4@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
