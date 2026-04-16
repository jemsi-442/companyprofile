"use client";

import { useLanguage } from "./LanguageProvider";
import { localizePath } from "./i18n";
import Link from "next/link";

export default function AboutContent() {
  const { t, language } = useLanguage();

  return (
    <main>
      <section className="hero page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy fade-in active">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h1>{t.about.title}</h1>
            <p className="delay-1 fade-in active">{t.about.text}</p>
          </div>

          <div className="page-hero-card reveal">
            <span className="panel-kicker">{t.about.styleKicker}</span>
            <ul>
              <li>{t.about.style1}</li>
              <li>{t.about.style2}</li>
              <li>{t.about.style3}</li>
            </ul>
            <div className="page-visual-frame">
              <img className="page-visual" src="/assets/about-visual.svg" alt={t.about.visualAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <article className="story-card reveal">
            <span className="panel-kicker">{t.about.whoKicker}</span>
            <h3>{t.about.whoTitle}</h3>
            <p>{t.about.whoText}</p>
            <p className="story-quote">{t.about.whoQuote}</p>
            <div className="story-visual">
              <img className="page-visual" src="/assets/about-visual.svg" alt={t.about.visualAlt} />
            </div>
          </article>

          <article className="story-card reveal">
            <span className="panel-kicker">{t.about.believeKicker}</span>
            <h3>{t.about.believeTitle}</h3>
            <p>{t.about.believeText}</p>
            <ul className="list-check">
              <li><i className="fas fa-check-circle" /><span>{t.about.believe1}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.about.believe2}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.about.believe3}</span></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.about.missionKicker}</span>
            <h2 className="section-title">{t.about.missionTitle}</h2>
            <p className="section-intro">{t.about.missionText}</p>
          </div>

          <div className="approach-grid">
            <article className="approach-card reveal">
              <div className="info-icon"><i className="fas fa-bullseye" /></div>
              <h3>{t.about.missionCardTitle}</h3>
              <p>{t.about.missionCardText}</p>
            </article>

            <article className="approach-card reveal">
              <div className="info-icon"><i className="fas fa-eye" /></div>
              <h3>{t.about.visionCardTitle}</h3>
              <p>{t.about.visionCardText}</p>
            </article>

            <article className="approach-card reveal">
              <div className="info-icon"><i className="fas fa-handshake-angle" /></div>
              <h3>{t.about.valuesCardTitle}</h3>
              <p>{t.about.valuesCardText}</p>
            </article>
          </div>

          <div className="hero-actions" style={{ marginTop: "28px", justifyContent: "center" }}>
            <Link href={localizePath("/contact", language)} className="btn primary">{t.common.startConversation}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
