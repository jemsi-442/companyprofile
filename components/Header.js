"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import { localizePath, stripLocalePrefix } from "./i18n";

const navItems = [
  { href: "/", homeSection: "home-top", label: "Home" },
  { href: "/services", homeHref: "/#services-home", homeSection: "services-home", label: "Services" },
  { href: "/about", homeHref: "/#about-home", homeSection: "about-home", label: "About" },
  { href: "/contact", homeHref: "/#contact-home", homeSection: "contact-home", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = stripLocalePrefix(pathname);
  const isHomePage = normalizedPath === "/";
  const { t, language } = useLanguage();
  const [activeHomeSection, setActiveHomeSection] = useState("home-top");

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const sectionIds = ["home-top", "about-home", "services-home", "contact-home"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveHomeSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const currentHash = window.location.hash.replace("#", "");
    if (currentHash && sectionIds.includes(currentHash)) {
      setActiveHomeSection(currentHash);
    }

    return () => observer.disconnect();
  }, [isHomePage, pathname]);

  return (
    <header className="header">
      <div className="container header-flex">
        <Link className="brand" href={localizePath("/", language)} aria-label={t.common.brandHomeAria}>
          <img className="brand-logo" src="/assets/logo-jaydigital.svg" alt={t.common.brandLogoAlt} />
          <span className="brand-copy">
            <span className="logo">JAYDIGITAL SOLUTIONS</span>
            <p>{t.brand.tagline}</p>
          </span>
        </Link>

        <nav className="nav" id="navMenu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={isHomePage && item.homeHref ? `${localizePath("/", language)}#${item.homeSection}` : localizePath(item.href, language)}
              className={
                isHomePage
                  ? activeHomeSection === item.homeSection
                    ? "active"
                    : ""
                  : normalizedPath === item.href
                    ? "active"
                    : ""
              }
            >
              {t.nav[item.label.toLowerCase()]}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <button className="theme-btn" id="themeToggle" aria-label={t.common.themeToggle}>
            <i className="fas fa-moon" />
          </button>
          <button className="hamburger" id="hamburger" aria-label={t.common.openMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
