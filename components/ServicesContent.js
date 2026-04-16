"use client";

import { useLanguage } from "./LanguageProvider";
import Link from "next/link";
import { localizePath } from "./i18n";

export default function ServicesContent() {
  const { t, language } = useLanguage();

  return (
    <main>
      <section className="hero page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy fade-in active">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h1>{t.services.title}</h1>
            <p className="delay-1 fade-in active">{t.services.text}</p>
          </div>

          <div className="page-hero-card reveal">
            <span className="panel-kicker">{t.services.mainKicker}</span>
            <ul>
              <li>{t.services.main1}</li>
              <li>{t.services.main2}</li>
              <li>{t.services.main3}</li>
            </ul>
            <div className="page-visual-frame">
              <img className="page-visual" src="/assets/services-visual.svg" alt={t.services.visualAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-columns">
          <article className="service-list-card reveal">
            <header>
              <div>
                <span className="panel-kicker">{t.services.govKicker}</span>
                <h3>{t.services.govTitle}</h3>
              </div>
              <div className="info-icon"><i className="fas fa-building-columns" /></div>
            </header>

            <p>{t.services.govText}</p>

            <div className="service-stack">
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/brela-business.jpg" alt={t.services.item1Alt} loading="lazy" />
                <h4>{t.services.item1Title}</h4>
                <p>{t.services.item1Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item1Tag}</span><span className="price-tag">{t.common.from} TZS 65,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/brela-company.jpg" alt={t.services.item2Alt} loading="lazy" />
                <h4>{t.services.item2Title}</h4>
                <p>{t.services.item2Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item2Tag}</span><span className="price-tag">{t.common.from} TZS 200,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/nida.jpg" alt={t.services.item3Alt} loading="lazy" />
                <h4>{t.services.item3Title}</h4>
                <p>{t.services.item3Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item3Tag}</span><span className="price-tag">{t.common.followUpBased}</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/tra.jpg" alt={t.services.item4Alt} loading="lazy" />
                <h4>{t.services.item4Title}</h4>
                <p>{t.services.item4Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item4Tag}</span><span className="price-tag">{t.common.from} TZS 10,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/rita.jpg" alt={t.services.item5Alt} loading="lazy" />
                <h4>{t.services.item5Title}</h4>
                <p>{t.services.item5Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item5Tag}</span><span className="price-tag">{t.common.from} TZS 30,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/heslb.jpg" alt={t.services.item6Alt} loading="lazy" />
                <h4>{t.services.item6Title}</h4>
                <p>{t.services.item6Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item6Tag}</span><span className="price-tag">{t.common.from} TZS 50,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/institutions/tausi.png" alt={t.services.item7Alt} loading="lazy" />
                <h4>{t.services.item7Title}</h4>
                <p>{t.services.item7Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.item7Tag}</span><span className="price-tag">{t.common.from} TZS 50,000</span></div>
              </div>
            </div>
          </article>

          <article className="service-list-card reveal">
            <header>
              <div>
                <span className="panel-kicker">{t.services.softKicker}</span>
                <h3>{t.services.softTitle}</h3>
              </div>
              <div className="info-icon"><i className="fas fa-laptop-code" /></div>
            </header>

            <p>{t.services.softText}</p>

            <div className="service-stack">
              <div className="service-item">
                <img className="service-item-image" src="/assets/software-basic.svg" alt={t.services.soft1Alt} loading="lazy" />
                <h4>{t.services.soft1Title}</h4>
                <p>{t.services.soft1Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.soft1Tag}</span><span className="price-tag">{t.common.from} TZS 250,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/software-standard.svg" alt={t.services.soft2Alt} loading="lazy" />
                <h4>{t.services.soft2Title}</h4>
                <p>{t.services.soft2Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.soft2Tag}</span><span className="price-tag">{t.common.from} TZS 600,000</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/software-premium.svg" alt={t.services.soft3Alt} loading="lazy" />
                <h4>{t.services.soft3Title}</h4>
                <p>{t.services.soft3Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.soft3Tag}</span><span className="price-tag">{t.common.from} TZS 1,200,000+</span></div>
              </div>
              <div className="service-item">
                <img className="service-item-image" src="/assets/software-apps.svg" alt={t.services.soft4Alt} loading="lazy" />
                <h4>{t.services.soft4Title}</h4>
                <p>{t.services.soft4Text}</p>
                <div className="service-item-footer"><span className="service-tag">{t.services.soft4Tag}</span><span className="price-tag">{t.common.from} TZS 800,000</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel reveal">
            <div>
              <span className="panel-kicker">{t.services.ctaKicker}</span>
              <h3>{t.services.ctaTitle}</h3>
              <p>{t.services.ctaText}</p>
            </div>
            <Link href={localizePath("/contact", language)} className="btn primary">{t.common.requestQuote}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
