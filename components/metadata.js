import { isLocale } from "./i18n";

const baseUrl = "https://jemsi-442.github.io/companyprofile";
const brandName = "JAYDIGITAL SOLUTIONS";

const metadataContent = {
  en: {
    home: {
      title: "JAYDIGITAL SOLUTIONS",
      description:
        "JAYDIGITAL SOLUTIONS helps businesses in Tanzania with registration, government follow-up, and modern business solutions."
    },
    about: {
      title: "About | JAYDIGITAL SOLUTIONS",
      description:
        "Learn about JAYDIGITAL SOLUTIONS and the mission behind its registration, government service, and business support."
    },
    services: {
      title: "Services | JAYDIGITAL SOLUTIONS",
      description:
        "Explore JAYDIGITAL SOLUTIONS services in business registration, government support, and digital business services."
    },
    contact: {
      title: "Contact | JAYDIGITAL SOLUTIONS",
      description:
        "Contact JAYDIGITAL SOLUTIONS for registration support, government services, or a business service quotation."
    },
    notFound: {
      title: "Page Not Found | JAYDIGITAL SOLUTIONS",
      description:
        "The page you requested is not available. Continue browsing JAYDIGITAL SOLUTIONS services and company information."
    }
  },
  sw: {
    home: {
      title: "JAYDIGITAL SOLUTIONS",
      description:
        "JAYDIGITAL SOLUTIONS inasaidia biashara Tanzania kwenye usajili, huduma za serikali, na suluhisho za kisasa za biashara."
    },
    about: {
      title: "Kuhusu | JAYDIGITAL SOLUTIONS",
      description:
        "Fahamu zaidi kuhusu JAYDIGITAL SOLUTIONS na dhamira ya huduma zake za usajili, taasisi za serikali, na huduma za biashara."
    },
    services: {
      title: "Huduma | JAYDIGITAL SOLUTIONS",
      description:
        "Chunguza huduma za JAYDIGITAL SOLUTIONS kwenye usajili wa biashara, huduma za serikali, na huduma za kidigitali kwa biashara."
    },
    contact: {
      title: "Mawasiliano | JAYDIGITAL SOLUTIONS",
      description:
        "Wasiliana na JAYDIGITAL SOLUTIONS kwa msaada wa usajili, huduma za serikali, au bei ya huduma za biashara."
    },
    notFound: {
      title: "Ukurasa Haupo | JAYDIGITAL SOLUTIONS",
      description:
        "Ukurasa ulioomba haupatikani. Endelea kutazama huduma na taarifa za JAYDIGITAL SOLUTIONS."
    }
  }
};

export function createLocalizedMetadata(locale = "en", page = "home", path = "") {
  const safeLocale = isLocale(locale) ? locale : "en";
  const content = metadataContent[safeLocale][page] || metadataContent[safeLocale].home;
  const urlPath = path || (page === "home" ? `/${safeLocale}` : `/${safeLocale}/${page}`);
  const openGraphLocale = safeLocale === "sw" ? "sw_TZ" : "en_US";

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: urlPath,
      languages: {
        en: page === "home" ? "/en" : `/en/${page}`,
        sw: page === "home" ? "/sw" : `/sw/${page}`
      }
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${baseUrl}${urlPath}`,
      siteName: brandName,
      locale: openGraphLocale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description
    }
  };
}
