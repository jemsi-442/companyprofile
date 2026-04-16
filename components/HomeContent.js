"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { localizePath } from "./i18n";

export default function HomeContent() {
  const { t, language } = useLanguage();

  return (
    <main>
      <section className="hero" id="home-top">
        <div className="container hero-grid">
          <div className="hero-copy fade-in active">
            <span className="eyebrow">{t.home.eyebrow}</span>
            <h1>
              {t.home.heroTitleStart} <span className="accent-text">{t.home.heroTitleAccent}</span>.
            </h1>
            <p className="delay-1 fade-in active">{t.home.heroText}</p>

            <div className="hero-actions fade-in delay-2 active">
              <Link href={localizePath("/services", language)} className="btn primary">{t.home.exploreServices}</Link>
              <Link href={localizePath("/contact", language)} className="btn secondary">{t.home.talkToUs}</Link>
            </div>

            <div className="hero-meta reveal">
              <span className="hero-pill">{t.home.pill1}</span>
              <span className="hero-pill">{t.home.pill2}</span>
              <span className="hero-pill">{t.home.pill3}</span>
            </div>
          </div>

          <aside className="hero-card reveal">
            <div className="hero-card-top">
              <div>
                <span className="panel-kicker">{t.home.differentKicker}</span>
                <h2>{t.home.differentTitle}</h2>
              </div>
              <span className="hero-card-badge"><i className="fas fa-layer-group" /></span>
            </div>

            <p>{t.home.differentText}</p>

            <ul className="hero-card-list">
              <li><i className="fas fa-check-circle" /><span>{t.home.different1}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.different2}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.different3}</span></li>
            </ul>

            <div className="hero-visual-wrap">
              <img className="hero-visual" src="/assets/hero-visual.svg" alt={t.home.heroVisualAlt} />
            </div>
          </aside>
        </div>

        <div className="container metrics-grid">
          <div className="metric-card reveal">
            <strong>{t.home.metric1Value}</strong>
            <span>{t.home.metric1Label}</span>
          </div>
          <div className="metric-card reveal">
            <strong>{t.home.metric2Value}</strong>
            <span>{t.home.metric2Label}</span>
          </div>
          <div className="metric-card reveal">
            <strong>{t.home.metric3Value}</strong>
            <span>{t.home.metric3Label}</span>
          </div>
          <div className="metric-card reveal">
            <strong>{t.home.metric4Value}</strong>
            <span>{t.home.metric4Label}</span>
          </div>
        </div>
      </section>

      <section className="section" id="about-home">
        <div className="container split-band">
          <div className="about-panel reveal">
            <span className="panel-kicker">{t.home.whyKicker}</span>
            <h3>{t.home.whyTitle}</h3>
            <p className="panel-text">{t.home.whyText}</p>
            <ul className="list-check">
              <li><i className="fas fa-check-circle" /><span>{t.home.why1}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.why2}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.why3}</span></li>
            </ul>
          </div>

          <div className="about-panel reveal">
            <span className="panel-kicker">{t.home.focusKicker}</span>
            <h3>{t.home.focusTitle}</h3>
            <p className="panel-text">{t.home.focusText}</p>
            <ul className="list-check">
              <li><i className="fas fa-check-circle" /><span>{t.home.focus1}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.focus2}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.focus3}</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="services-home">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.home.snapshotKicker}</span>
            <h2 className="section-title">{t.home.snapshotTitle}</h2>
            <p className="section-intro">{t.home.snapshotText}</p>
          </div>

          <div className="feature-grid">
            <article className="service-card reveal">
              <img className="service-card-image" src="/assets/institutions/brela-company.jpg" alt={t.home.businessPreviewAlt} loading="lazy" />
              <div className="service-icon"><i className="fas fa-building" /></div>
              <h4>{t.home.card1Title}</h4>
              <p>{t.home.card1Text}</p>
              <span className="service-tag">{t.home.card1Tag}</span>
            </article>

            <article className="service-card reveal">
              <img className="service-card-image" src="/assets/institutions/tra.jpg" alt={t.home.governmentPreviewAlt} loading="lazy" />
              <div className="service-icon"><i className="fas fa-landmark" /></div>
              <h4>{t.home.card2Title}</h4>
              <p>{t.home.card2Text}</p>
              <span className="service-tag">{t.home.card2Tag}</span>
            </article>

            <article className="service-card reveal">
              <img className="service-card-image" src="/assets/software-premium.svg" alt={t.home.softwarePreviewAlt} loading="lazy" />
              <div className="service-icon"><i className="fas fa-laptop-code" /></div>
              <h4>{t.home.card3Title}</h4>
              <p>{t.home.card3Text}</p>
              <span className="service-tag">{t.home.card3Tag}</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <article className="story-card reveal">
            <span className="panel-kicker">{t.home.aboutKicker}</span>
            <h3>{t.home.aboutTitle}</h3>
            <p>{t.home.aboutText}</p>
            <p className="story-quote">{t.home.aboutQuote}</p>
            <div className="story-visual">
              <img className="page-visual" src="/assets/about-visual.svg" alt={t.home.aboutVisualAlt} />
            </div>
          </article>

          <article className="story-card reveal">
            <span className="panel-kicker">{t.home.chooseKicker}</span>
            <h3>{t.home.chooseTitle}</h3>
            <p>{t.home.chooseText}</p>
            <ul className="list-check">
              <li><i className="fas fa-check-circle" /><span>{t.home.choose1}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.choose2}</span></li>
              <li><i className="fas fa-check-circle" /><span>{t.home.choose3}</span></li>
            </ul>
            <div className="hero-actions" style={{ marginTop: "24px" }}>
              <Link href={localizePath("/about", language)} className="btn secondary">{t.common.readMoreAbout}</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.home.detailedKicker}</span>
            <h2 className="section-title">{t.home.detailedTitle}</h2>
            <p className="section-intro">{t.home.detailedText}</p>
          </div>

          <div className="service-columns">
            <article className="service-list-card reveal">
              <header>
                <div>
                  <span className="panel-kicker">{t.home.govKicker}</span>
                  <h3>{t.home.govTitle}</h3>
                </div>
                <div className="info-icon"><i className="fas fa-building-columns" /></div>
              </header>

              <p>{t.home.govText}</p>

              <div className="service-stack">
                <div className="service-item">
                  <img className="service-item-image" src="/assets/institutions/brela-business.jpg" alt={t.home.govRegistrationAlt} loading="lazy" />
                  <h4>{t.home.govCard1Title}</h4>
                  <p>{t.home.govCard1Text}</p>
                  <div className="service-item-footer">
                    <span className="service-tag">{t.home.govTag1}</span>
                    <span className="price-tag">{t.common.from} TZS 65,000</span>
                  </div>
                </div>

                <div className="service-item">
                  <img className="service-item-image" src="/assets/institutions/tra.jpg" alt={t.home.govServicesAlt} loading="lazy" />
                  <h4>{t.home.govCard2Title}</h4>
                  <p>{t.home.govCard2Text}</p>
                  <div className="service-item-footer">
                    <span className="service-tag">{t.home.govTag2}</span>
                    <span className="price-tag">{t.common.from} TZS 10,000</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="service-list-card reveal">
              <header>
                <div>
                  <span className="panel-kicker">{t.home.softwareKicker}</span>
                  <h3>{t.home.softwareTitle}</h3>
                </div>
                <div className="info-icon"><i className="fas fa-laptop-code" /></div>
              </header>

              <p>{t.home.softwareText}</p>

              <div className="service-stack">
                <div className="service-item">
                  <img className="service-item-image" src="/assets/software-standard.svg" alt={t.home.websiteAlt} loading="lazy" />
                  <h4>{t.home.softCard1Title}</h4>
                  <p>{t.home.softCard1Text}</p>
                  <div className="service-item-footer">
                    <span className="service-tag">{t.home.softTag1}</span>
                    <span className="price-tag">{t.common.from} TZS 250,000</span>
                  </div>
                </div>

                <div className="service-item">
                  <img className="service-item-image" src="/assets/software-apps.svg" alt={t.home.appsAlt} loading="lazy" />
                  <h4>{t.home.softCard2Title}</h4>
                  <p>{t.home.softCard2Text}</p>
                  <div className="service-item-footer">
                    <span className="service-tag">{t.home.softTag2}</span>
                    <span className="price-tag">{t.common.from} TZS 800,000</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="hero-actions" style={{ marginTop: "28px", justifyContent: "center" }}>
            <Link href={localizePath("/services", language)} className="btn primary">{t.common.viewAllServices}</Link>
          </div>
        </div>
      </section>

      <section className="section" id="contact-home">
        <div className="container contact-grid">
          <article className="contact-card reveal">
            <span className="panel-kicker">{t.home.contactKicker}</span>
            <h3>{t.home.contactTitle}</h3>
            <p>{t.home.contactText}</p>

            <ul className="contact-list">
              <li><i className="fas fa-phone" /><span><a href="tel:+255683186987">+255 683 186 987</a></span></li>
              <li><i className="fab fa-whatsapp" /><span><a href="https://wa.me/255683186987" target="_blank" rel="noreferrer">{t.common.whatsappAvailable}</a></span></li>
              <li><i className="fas fa-envelope" /><span><a href="mailto:jemsifredrick4@gmail.com">jemsifredrick4@gmail.com</a></span></li>
              <li><i className="fas fa-location-dot" /><span>{t.common.locationName}</span></li>
            </ul>

            <div className="contact-highlight">
              <strong>{t.home.tipLabel}</strong>
              <p>{t.home.tipText}</p>
            </div>
          </article>

          <article className="contact-card reveal">
            <span className="panel-kicker">{t.common.quickRequest}</span>
            <h3>{t.home.quickTitle}</h3>
            <p>{t.home.quickText}</p>

            <form className="contact-form">
              <div>
                <label htmlFor="home-name">{t.common.yourName}</label>
                <input type="text" id="home-name" placeholder={t.common.enterYourName} />
              </div>

              <div>
                <label htmlFor="home-service">{t.common.serviceNeeded}</label>
                <input type="text" id="home-service" placeholder={t.common.serviceExample} />
              </div>

              <div>
                <label htmlFor="home-message">{t.common.requestDetails}</label>
                <textarea id="home-message" placeholder={t.common.tellUsWhatYouNeed} />
              </div>

              <Link href={localizePath("/contact", language)} className="btn secondary">{t.common.openFullContact}</Link>
            </form>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-panel reveal">
            <div>
              <span className="panel-kicker">{t.home.ctaKicker}</span>
              <h3>{t.home.ctaTitle}</h3>
              <p>{t.home.ctaText}</p>
            </div>
            <Link href={localizePath("/contact", language)} className="btn primary">{t.common.startConversation}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
