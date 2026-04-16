"use client";

import { useLanguage } from "./LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero page-hero">
        <div className="container page-hero-grid">
          <div className="page-hero-copy fade-in active">
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h1>{t.contact.title}</h1>
            <p className="delay-1 fade-in active">{t.contact.text}</p>
          </div>

          <div className="page-hero-card reveal">
            <span className="panel-kicker">{t.contact.bestKicker}</span>
            <ul>
              <li>{t.contact.best1}</li>
              <li>{t.contact.best2}</li>
              <li>{t.contact.best3}</li>
            </ul>
            <div className="page-visual-frame">
              <img className="page-visual" src="/assets/contact-visual.svg" alt={t.contact.visualAlt} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card reveal">
            <span className="panel-kicker">{t.contact.directKicker}</span>
            <h3>{t.contact.directTitle}</h3>
            <p>{t.contact.directText}</p>

            <ul className="contact-list">
              <li><i className="fas fa-phone" /><span><a href="tel:+255683186987">+255 683 186 987</a></span></li>
              <li><i className="fab fa-whatsapp" /><span><a href="https://wa.me/255683186987" target="_blank" rel="noreferrer">{t.common.whatsappAvailable}</a></span></li>
              <li><i className="fas fa-envelope" /><span><a href="mailto:jemsifredrick4@gmail.com">jemsifredrick4@gmail.com</a></span></li>
              <li><i className="fas fa-location-dot" /><span>{t.common.locationName}</span></li>
            </ul>

            <div className="contact-highlight">
              <strong>{t.contact.tipLabel}</strong>
              <p>{t.contact.tipText}</p>
            </div>
          </article>

          <article className="contact-card reveal">
            <span className="panel-kicker">{t.contact.requestKicker}</span>
            <h3>{t.contact.requestTitle}</h3>
            <p>{t.contact.requestText}</p>

            <form className="contact-form">
              <div>
                <label htmlFor="name">{t.common.yourName}</label>
                <input type="text" id="name" placeholder={t.common.enterYourName} required />
              </div>
              <div>
                <label htmlFor="service">{t.common.serviceNeeded}</label>
                <input type="text" id="service" placeholder={t.common.serviceExample} required />
              </div>
              <div>
                <label htmlFor="message">{t.common.requestDetails}</label>
                <textarea id="message" placeholder={t.common.tellUsWhatYouNeed} required />
              </div>
              <button className="btn primary" type="button" data-whatsapp-submit="true">
                <i className="fab fa-whatsapp" />
                {t.common.sendViaWhatsApp}
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}
