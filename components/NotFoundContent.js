"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { localizePath } from "./i18n";

export default function NotFoundContent() {
  const { t, language } = useLanguage();

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <span className="panel-kicker">{t.notFound.kicker}</span>
              <h3>{t.notFound.title}</h3>
              <p>{t.notFound.text}</p>
            </div>
            <Link href={localizePath("/", language)} className="btn primary">{t.notFound.button}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
