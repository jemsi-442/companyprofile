"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { stripLocalePrefix } from "./i18n";

export default function ClientEffects() {
  const pathname = usePathname();
  const normalizedPath = stripLocalePrefix(pathname);
  const { language } = useLanguage();

  useEffect(() => {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const scrollProgressBar = document.getElementById("scrollProgressBar");
    const pageMeta = {
      en: {
        "/": {
          title: "JAYDIGITAL SOLUTIONS",
          description:
            "JAYDIGITAL SOLUTIONS helps businesses in Tanzania with registration, government follow-up, and modern business solutions."
        },
        "/about": {
          title: "About | JAYDIGITAL SOLUTIONS",
          description:
            "Learn about JAYDIGITAL SOLUTIONS and the mission behind its registration, government service, and business support."
        },
        "/services": {
          title: "Services | JAYDIGITAL SOLUTIONS",
          description:
            "Explore JAYDIGITAL SOLUTIONS services in business registration, government support, and digital business services."
        },
        "/contact": {
          title: "Contact | JAYDIGITAL SOLUTIONS",
          description:
            "Contact JAYDIGITAL SOLUTIONS for registration support, government services, or a business service quotation."
        },
        "404": {
          title: "Page Not Found | JAYDIGITAL SOLUTIONS",
          description:
            "The page you requested is not available. Continue browsing JAYDIGITAL SOLUTIONS services and company information."
        }
      },
      sw: {
        "/": {
          title: "JAYDIGITAL SOLUTIONS",
          description:
            "JAYDIGITAL SOLUTIONS inasaidia biashara Tanzania kwenye usajili, huduma za serikali, na suluhisho za kisasa za biashara."
        },
        "/about": {
          title: "Kuhusu | JAYDIGITAL SOLUTIONS",
          description:
            "Fahamu zaidi kuhusu JAYDIGITAL SOLUTIONS na dhamira ya huduma zake za usajili, taasisi za serikali, na huduma za biashara."
        },
        "/services": {
          title: "Huduma | JAYDIGITAL SOLUTIONS",
          description:
            "Chunguza huduma za JAYDIGITAL SOLUTIONS kwenye usajili wa biashara, huduma za serikali, na huduma za kidigitali kwa biashara."
        },
        "/contact": {
          title: "Mawasiliano | JAYDIGITAL SOLUTIONS",
          description:
            "Wasiliana na JAYDIGITAL SOLUTIONS kwa msaada wa usajili, huduma za serikali, au bei ya huduma za biashara."
        },
        "404": {
          title: "Ukurasa Haupo | JAYDIGITAL SOLUTIONS",
          description:
            "Ukurasa ulioomba haupatikani. Endelea kutazama huduma na taarifa za JAYDIGITAL SOLUTIONS."
        }
      }
    };

    const activeMeta = pageMeta[language][normalizedPath] || pageMeta[language]["404"];

    document.title = activeMeta.title;

    const ensureMeta = (name, content, attribute = "name") => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    ensureMeta("description", activeMeta.description);
    ensureMeta("og:title", activeMeta.title, "property");
    ensureMeta("og:description", activeMeta.description, "property");
    ensureMeta("twitter:title", activeMeta.title);
    ensureMeta("twitter:description", activeMeta.description);

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark");
    }

    const syncThemeIcon = () => {
      if (!themeToggle) return;
      const icon = themeToggle.querySelector("i");
      if (!icon) return;
      icon.className = body.classList.contains("dark") ? "fas fa-sun" : "fas fa-moon";
    };

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll(".reveal, .fade-in").forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < windowHeight - 70) {
          element.classList.add("active");
        }
      });
    };

    const updateScrollProgress = () => {
      if (!scrollProgressBar) return;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      scrollProgressBar.style.transform = `scaleX(${Math.min(Math.max(progress / 100, 0), 1)})`;
    };

    const handleThemeToggle = () => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
      syncThemeIcon();
    };

    const handleMenuToggle = () => {
      if (!navMenu) return;
      navMenu.classList.toggle("open");
      body.classList.toggle("menu-open", navMenu.classList.contains("open"));
    };

    const navLinks = navMenu ? Array.from(navMenu.querySelectorAll("a")) : [];
    const handleNavLinkClick = () => {
      if (!navMenu) return;
      navMenu.classList.remove("open");
      body.classList.remove("menu-open");
    };

    const whatsappButton = document.querySelector("[data-whatsapp-submit='true']");
    const handleWhatsAppSubmit = () => {
      const name = document.getElementById("name")?.value.trim() || "";
      const service = document.getElementById("service")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";
      const labels =
        language === "sw"
          ? {
              name: "Jina",
              service: "Huduma",
              message: "Maelezo"
            }
          : {
              name: "Name",
              service: "Service",
              message: "Message"
            };

      if (!name || !service || !message) {
        return;
      }

      const text = `${labels.name}: ${name}\n${labels.service}: ${service}\n${labels.message}: ${message}`;
      window.open(`https://wa.me/255683186987?text=${encodeURIComponent(text)}`, "_blank");
    };

    syncThemeIcon();
    revealOnScroll();
    updateScrollProgress();

    themeToggle?.addEventListener("click", handleThemeToggle);
    menuToggle?.addEventListener("click", handleMenuToggle);
    navLinks.forEach((link) => link.addEventListener("click", handleNavLinkClick));
    whatsappButton?.addEventListener("click", handleWhatsAppSubmit);
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      themeToggle?.removeEventListener("click", handleThemeToggle);
      menuToggle?.removeEventListener("click", handleMenuToggle);
      navLinks.forEach((link) => link.removeEventListener("click", handleNavLinkClick));
      whatsappButton?.removeEventListener("click", handleWhatsAppSubmit);
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, [language, normalizedPath]);

  return null;
}
