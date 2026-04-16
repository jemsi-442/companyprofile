"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "./i18n";

const LanguageContext = createContext(null);

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact"
    },
    brand: {
      tagline: "Business support, digital services, and trusted delivery",
      footerText: "Professional support for registration, government services, and digital business solutions."
    },
    common: {
      themeToggle: "Toggle theme",
      openMenu: "Open menu",
      quickRequest: "Quick request",
      openFullContact: "Open Full Contact Page",
      startConversation: "Start a Conversation",
      requestQuote: "Request a Quote",
      readMoreAbout: "Read More About Us",
      viewAllServices: "View All Services",
      language: "Language",
      sendViaWhatsApp: "Send via WhatsApp",
      yourName: "Your Name",
      serviceNeeded: "Service Needed",
      requestDetails: "Project or Request Details",
      enterYourName: "Enter your name",
      serviceExample: "Example: Company registration",
      tellUsWhatYouNeed: "Tell us what you need",
      from: "From",
      followUpBased: "Follow-up based",
      whatsappAvailable: "WhatsApp chat available",
      locationName: "Tanzania",
      brandHomeAria: "JAYDIGITAL SOLUTIONS home",
      brandLogoAlt: "JAYDIGITAL SOLUTIONS logo"
    },
    home: {
      eyebrow: "Company profile with sharper presence",
      heroTitleStart: "Digital services that move your",
      heroTitleAccent: "business forward",
      heroText:
        "JAYDIGITAL SOLUTIONS supports entrepreneurs, institutions, and growing brands with company registration, government follow-up, and digital services that create a professional image from day one.",
      exploreServices: "Explore Services",
      talkToUs: "Talk to Us",
      pill1: "Fast follow-up",
      pill2: "Trusted documentation support",
      pill3: "Web and business systems",
      differentKicker: "What makes us different",
      differentTitle: "Less noise, more execution",
      differentText:
        "We combine service experience and practical business understanding so clients get clear results, not vague promises.",
      different1: "Business registration support with clear guidance",
      different2: "Government services handled with consistency and care",
      different3: "Modern websites and systems built for real business use",
      metric1Label: "service pillars covering registration, government support, and digital services.",
      metric1Value: "3 Core",
      metric2Label: "that understands both digital work and institutional process follow-up.",
      metric2Value: "1 Team",
      metric3Label: "focus on clarity, responsiveness, and a professional client experience.",
      metric3Value: "100%",
      metric4Label: "based service built for entrepreneurs, companies, and organizations in Tanzania.",
      metric4Value: "TZ",
      whyKicker: "Why this business profile feels stronger",
      whyTitle: "Built to look credible before a client even calls.",
      whyText:
        "The presentation leans into confident typography, layered surfaces, and more intentional spacing so the brand feels like a serious service provider instead of a simple brochure page.",
      why1: "Cleaner hierarchy that guides the eye",
      why2: "Cool digital palette instead of generic corporate blocks",
      why3: "Responsive layout with polished mobile navigation",
      focusKicker: "Our focus",
      focusTitle: "Support that connects documents, government follow-up, and business growth.",
      focusText:
        "Whether someone needs a company registered, a certificate processed, or a business website launched, the goal is the same: make the process easier and the outcome look professional.",
      focus1: "Entrepreneurs starting new ventures",
      focus2: "Organizations needing dependable process support",
      focus3: "Brands ready for stronger digital presence",
      snapshotKicker: "Service snapshot",
      snapshotTitle: "Three lanes, one reliable partner.",
      snapshotText:
        "The offer is presented with clearer categories so visitors immediately understand what you do and why it matters.",
      card1Title: "Business Registration",
      card1Text: "BRELA registration support for business names and companies with a more guided client process.",
      card1Tag: "Structured setup",
      card2Title: "Government Services",
      card2Text: "Assistance for TRA, RITA, HESLB, TAUSI, and related documentation where follow-up matters.",
      card2Tag: "Trusted follow-up",
      card3Title: "Digital Services",
      card3Text: "Business websites, mobile apps, and tailored systems that help your brand look stronger and work better.",
      card3Tag: "Modern delivery",
      aboutKicker: "About us",
      aboutTitle: "A company focused on reliable support and practical results.",
      aboutText:
        "JAYDIGITAL SOLUTIONS supports individuals, entrepreneurs, and organizations that need more than information alone. We help clients move from confusion to clear action with better communication, stronger follow-up, and professional service.",
      aboutQuote:
        "Our aim is simple: make important services easier to access, faster to complete, and more dependable to experience.",
      chooseKicker: "Why clients choose us",
      chooseTitle: "Professional support should feel clear, structured, and trustworthy.",
      chooseText:
        "We combine registration support, institutional process knowledge, and digital product delivery so clients can work with one dependable partner instead of chasing scattered solutions.",
      choose1: "Clear communication from start to finish",
      choose2: "Consistent follow-up on service requests",
      choose3: "Professional presentation for modern businesses",
      detailedKicker: "Detailed services",
      detailedTitle: "A fuller look at what we help clients achieve.",
      detailedText:
        "Instead of making visitors jump to another page immediately, the main service groups are visible right here on the home page.",
      govKicker: "Institutional and government services",
      govTitle: "Documentation with guided follow-up",
      govText:
        "Support for business registration, identity matters, certificates, tax services, and related institutional processes.",
      govCard1Title: "BRELA and Registration Support",
      govCard1Text: "Business name registration, company registration, and follow-up for formal business setup.",
      govCard2Title: "TRA, RITA, HESLB, NIDA, TAUSI",
      govCard2Text: "Tax support, identity follow-up, certificate processing, student loan corrections, and license-related services.",
      govTag1: "Registration",
      govTag2: "Follow-up services",
      softwareKicker: "Digital services",
      softwareTitle: "Digital solutions that strengthen your business image",
      softwareText:
        "Modern websites, apps, and business systems for companies that want a stronger and more professional presence.",
      softCard1Title: "Business Websites",
      softCard1Text: "Clean and responsive websites that help your business look trustworthy and ready for clients.",
      softCard2Title: "Apps and Business Systems",
      softCard2Text: "Mobile apps and business systems that support daily operations, customer service, and growth.",
      softTag1: "Web presence",
      softTag2: "Business tools",
      contactKicker: "Contact",
      contactTitle: "Reach us through the channel that works best for you.",
      contactText: "Use WhatsApp for faster communication or email for detailed requests, quotations, and project discussions.",
      tipLabel: "Tip:",
      tipText: "When you send a message, include the service you need so we can respond faster and more accurately.",
      quickTitle: "Start with a short brief right from the home page.",
      quickText: "This gives visitors a direct action point without forcing them to open the full contact page first.",
      ctaKicker: "Ready for a stronger first impression?",
      ctaTitle: "Let your business profile match the quality of your work.",
      ctaText: "Reach out for registration support, digital services, or a business system designed around the way you work.",
      heroVisualAlt: "Illustration showing business support, services, and software delivery",
      businessPreviewAlt: "Business registration service preview",
      governmentPreviewAlt: "Government services preview",
      softwarePreviewAlt: "Software solutions preview",
      aboutVisualAlt: "About JAYDIGITAL SOLUTIONS",
      govRegistrationAlt: "BRELA business registration",
      govServicesAlt: "Government and tax services",
      websiteAlt: "Website services",
      appsAlt: "Apps and systems"
    },
    about: {
      eyebrow: "About the company",
      title: "Built on trust, speed, and dependable service delivery.",
      text:
        "JAYDIGITAL SOLUTIONS helps individuals, entrepreneurs, and organizations handle important services with more clarity, confidence, and professional support from start to finish.",
      styleKicker: "Operating style",
      style1: "Clear communication from start to finish",
      style2: "Attention to process details that clients usually find stressful",
      style3: "Modern execution that keeps the brand image professional",
      whoKicker: "Who we are",
      whoTitle: "A company focused on reliable support and practical results.",
      whoText:
        "We work with clients who need more than information alone. They need guidance, follow-up, and a service experience that feels organized, responsive, and professional.",
      whoQuote:
        "Our aim is simple: make important services easier to access, faster to complete, and more dependable to experience.",
      believeKicker: "What we believe",
      believeTitle: "Professional support should feel clear, structured, and trustworthy.",
      believeText:
        "That means clear communication, consistent follow-up, and solutions that help clients feel confident in the service they are receiving.",
      believe1: "Integrity in process and pricing",
      believe2: "Respect for timelines and client expectations",
      believe3: "Continuous improvement in digital delivery",
      missionKicker: "Mission and direction",
      missionTitle: "The direction behind the brand.",
      missionText:
        "Our work is guided by a simple commitment: deliver services that are accurate, professional, and genuinely useful to the people and businesses we serve.",
      missionCardTitle: "Mission",
      missionCardText: "Deliver dependable registration, documentation, and digital services that save clients time and reduce uncertainty.",
      visionCardTitle: "Vision",
      visionCardText: "Become a respected digital services partner known for consistency, clarity, and practical results in Tanzania.",
      valuesCardTitle: "Values",
      valuesCardText: "Trust, responsiveness, professionalism, and a client experience that feels organized from the first interaction.",
      visualAlt: "About visual"
    },
    services: {
      eyebrow: "Services",
      title: "Practical services for real business needs.",
      text: "The services page groups your offer more cleanly so visitors can scan faster and trust what they are seeing.",
      mainKicker: "Main categories",
      main1: "Registration and setup support",
      main2: "Government process and document follow-up",
      main3: "Websites, apps, and business systems",
      govKicker: "Institutional and government services",
      govTitle: "Documentation with guided follow-up",
      govText: "For clients who want the process handled with more confidence and less back-and-forth.",
      item1Title: "BRELA Business Name Registration",
      item1Text: "Support for sole proprietorship registration and follow-up.",
      item1Tag: "Registration",
      item2Title: "BRELA Company Registration",
      item2Text: "Limited company registration with documentation guidance.",
      item2Tag: "Company setup",
      item3Title: "NIDA Identity Support",
      item3Text: "Guidance for identity-related follow-up where NIDA verification or client records are involved.",
      item3Tag: "Identity support",
      item4Title: "TRA Services",
      item4Text: "TIN applications, tax clearance, and taxpayer-related support.",
      item4Tag: "Tax support",
      item5Title: "RITA Services",
      item5Text: "Birth certificate, death certificate, and records processing support.",
      item5Tag: "Certificate support",
      item6Title: "HESLB Support",
      item6Text: "Corrections, account follow-up, and student support assistance where needed.",
      item6Tag: "Education support",
      item7Title: "TAUSI Support",
      item7Text: "Business license assistance and follow-up for relevant applications.",
      item7Tag: "License support",
      softKicker: "Digital service options",
      softTitle: "Digital solutions with a stronger business look",
      softText: "For companies that want more than a simple page and need a business presence that feels serious and clear.",
      soft1Title: "Basic Website",
      soft1Text: "Responsive 3 to 5 page website for businesses that need a clean online presence.",
      soft1Tag: "Web presence",
      soft2Title: "Standard Website",
      soft2Text: "Website with admin support, structured content, and stronger presentation.",
      soft2Tag: "Business website",
      soft3Title: "Premium Website or System",
      soft3Text: "A higher-level service with payments, stronger security, or features shaped around your business.",
      soft3Tag: "Tailored solution",
      soft4Title: "Mobile and Desktop Applications",
      soft4Text: "Apps and internal systems for management, operations, and customer experience.",
      soft4Tag: "Business support",
      ctaKicker: "Need a custom quotation?",
      ctaTitle: "Some business needs require a more tailored service.",
      ctaText: "Reach out with your business need and we will recommend the best service plan for you.",
      visualAlt: "Services visual",
      item1Alt: "BRELA business registration",
      item2Alt: "BRELA company registration",
      item3Alt: "NIDA support",
      item4Alt: "TRA services",
      item5Alt: "RITA services",
      item6Alt: "HESLB services",
      item7Alt: "TAUSI services",
      soft1Alt: "Basic website service",
      soft2Alt: "Standard website service",
      soft3Alt: "Premium website or system service",
      soft4Alt: "Mobile and desktop application service"
    },
    contact: {
      eyebrow: "Contact",
      title: "Start the conversation with a team that values clarity and follow-up.",
      text:
        "Reach out for registration support, government service follow-up, or a digital service discussion. We are ready to listen, guide, and respond with professionalism.",
      bestKicker: "Best for",
      best1: "Clients who need pricing clarification",
      best2: "Businesses starting registration or setup",
      best3: "Organizations planning a digital service",
      directKicker: "Direct contact",
      directTitle: "Reach us through the channel that works best for you.",
      directText: "Use WhatsApp for faster communication or email for detailed requests, quotations, and project discussions.",
      tipLabel: "Tip:",
      tipText: "When you send a message, include the service you need so we can respond faster and more accurately.",
      requestKicker: "Send a request",
      requestTitle: "Send a short brief to get started.",
      requestText: "Submitting this form opens WhatsApp with your details already prepared, making follow-up quicker and more organized.",
      visualAlt: "Contact visual"
    },
    notFound: {
      kicker: "Page not found",
      title: "The page you are looking for is not available.",
      text: "You can return to the home page or continue browsing our services and company information.",
      button: "Go Home"
    }
  },
  sw: {
    nav: {
      home: "Mwanzo",
      services: "Huduma",
      about: "Kuhusu",
      contact: "Wasiliana"
    },
    brand: {
      tagline: "Msaada wa biashara, huduma za kidigitali, na utoaji unaoaminika",
      footerText: "Msaada wa kitaalamu kwa usajili, huduma za serikali, na suluhisho za kidigitali kwa biashara."
    },
    common: {
      themeToggle: "Badili mandhari",
      openMenu: "Fungua menyu",
      quickRequest: "Ombi la haraka",
      openFullContact: "Fungua ukurasa kamili wa mawasiliano",
      startConversation: "Anza mazungumzo",
      requestQuote: "Omba quotation",
      readMoreAbout: "Soma zaidi kutuhusu",
      viewAllServices: "Tazama huduma zote",
      language: "Lugha",
      sendViaWhatsApp: "Tuma kwa WhatsApp",
      yourName: "Jina lako",
      serviceNeeded: "Huduma unayohitaji",
      requestDetails: "Maelezo ya kazi au ombi",
      enterYourName: "Weka jina lako",
      serviceExample: "Mfano: Usajili wa kampuni",
      tellUsWhatYouNeed: "Tuambie unachohitaji",
      from: "Kuanzia",
      followUpBased: "Kutegemea ufuatiliaji",
      whatsappAvailable: "Mawasiliano ya WhatsApp yanapatikana",
      locationName: "Tanzania",
      brandHomeAria: "Nyumbani JAYDIGITAL SOLUTIONS",
      brandLogoAlt: "Nembo ya JAYDIGITAL SOLUTIONS"
    },
    home: {
      eyebrow: "Wasifu wa kampuni wenye mvuto zaidi",
      heroTitleStart: "Huduma za kidigitali zinazosogeza",
      heroTitleAccent: "biashara yako mbele",
      heroText:
        "JAYDIGITAL SOLUTIONS inasaidia wajasiriamali, taasisi, na biashara zinazokua kupitia usajili wa kampuni, ufuatiliaji wa huduma za serikali, na huduma za kidigitali zenye muonekano wa kitaalamu tangu mwanzo.",
      exploreServices: "Chunguza huduma",
      talkToUs: "Ongea nasi",
      pill1: "Ufuatiliaji wa haraka",
      pill2: "Msaada wa nyaraka unaoaminika",
      pill3: "Web na mifumo ya biashara",
      differentKicker: "Kinachotutofautisha",
      differentTitle: "Kelele chache, utekelezaji zaidi",
      differentText:
        "Tunachanganya uelewa wa huduma na taratibu za biashara ili wateja wapate matokeo ya vitendo, si ahadi zisizoeleweka.",
      different1: "Msaada wa usajili wa biashara wenye mwongozo wazi",
      different2: "Huduma za serikali zenye umakini na uthabiti",
      different3: "Website na mifumo ya kisasa kwa matumizi halisi ya biashara",
      metric1Label: "nguzo za huduma zinazobeba usajili, huduma za serikali, na huduma za kidigitali.",
      metric1Value: "Nguzo 3",
      metric2Label: "inayoelewa kazi za kidigitali na ufuatiliaji wa taratibu za taasisi.",
      metric2Value: "Timu 1",
      metric3Label: "msisitizo wa uwazi, mwitikio, na uzoefu wa kitaalamu kwa mteja.",
      metric3Value: "100%",
      metric4Label: "huduma iliyojengwa kwa wajasiriamali, kampuni, na taasisi Tanzania.",
      metric4Value: "TZ",
      whyKicker: "Kwa nini business profile hii ina nguvu zaidi",
      whyTitle: "Imejengwa kuonekana ya kuaminika hata kabla mteja hajapiga simu.",
      whyText:
        "Muonekano huu unatumia typography yenye confidence, layers safi, na spacing yenye mpangilio ili brand ionekane kama mtoa huduma makini, si brochure ya kawaida.",
      why1: "Hierarchy safi inayomuongoza mtazamaji",
      why2: "Palette ya kidigitali badala ya blocks za kawaida za corporate",
      why3: "Responsive layout yenye mobile navigation iliyoboreshwa",
      focusKicker: "Tunacholenga",
      focusTitle: "Msaada unaounganisha nyaraka, huduma za serikali, na ukuaji wa biashara.",
      focusText:
        "Iwe mtu anahitaji kusajili kampuni, kushughulikia cheti, au kuzindua website ya biashara, lengo ni moja: kufanya mchakato uwe rahisi na matokeo yaonekane ya kitaalamu.",
      focus1: "Wajasiriamali wanaoanza miradi mipya",
      focus2: "Taasisi zinazohitaji ufuatiliaji unaoaminika",
      focus3: "Brand zinazotaka uwepo bora wa kidigitali",
      snapshotKicker: "Muhtasari wa huduma",
      snapshotTitle: "Njia tatu za huduma, partner mmoja wa kuaminika.",
      snapshotText:
        "Huduma zimepangwa kwa makundi yaliyo wazi ili mgeni aelewe haraka unachofanya na kwa nini kina umuhimu.",
      card1Title: "Usajili wa biashara",
      card1Text: "Msaada wa BRELA kwa business names na company registration kwa mchakato ulioeleweka zaidi.",
      card1Tag: "Usajili wenye mpangilio",
      card2Title: "Huduma za serikali",
      card2Text: "Msaada kwa TRA, RITA, HESLB, TAUSI, na nyaraka nyingine ambapo ufuatiliaji una umuhimu.",
      card2Tag: "Ufuatiliaji unaoaminika",
      card3Title: "Huduma za kidigitali",
      card3Text: "Website, app, na mifumo ya biashara inayosaidia kampuni kuonekana bora na kufanya kazi kwa mpangilio zaidi.",
      card3Tag: "Utoaji wa kisasa",
      aboutKicker: "Kutuhusu",
      aboutTitle: "Kampuni inayolenga msaada wa kuaminika na matokeo ya vitendo.",
      aboutText:
        "JAYDIGITAL SOLUTIONS inasaidia watu binafsi, wajasiriamali, na taasisi zinazohitaji zaidi ya taarifa pekee. Tunawasaidia kutoka kwenye mkanganyiko kwenda hatua zilizo wazi kwa mawasiliano bora, ufuatiliaji makini, na huduma ya kitaalamu.",
      aboutQuote:
        "Lengo letu ni moja: kufanya huduma muhimu zipatikane kwa urahisi zaidi, zikamilike kwa haraka zaidi, na ziwe na uzoefu unaoaminika zaidi.",
      chooseKicker: "Kwa nini wateja hutuchagua",
      chooseTitle: "Msaada wa kitaalamu unapaswa kuwa wazi, wenye mpangilio, na wa kuaminika.",
      chooseText:
        "Tunachanganya usajili, uelewa wa taratibu za taasisi, na utoaji wa bidhaa za kidigitali ili mteja afanye kazi na partner mmoja wa kuaminika badala ya kutafuta suluhisho zilizotawanyika.",
      choose1: "Mawasiliano wazi kutoka mwanzo hadi mwisho",
      choose2: "Ufuatiliaji wa mara kwa mara kwa maombi ya huduma",
      choose3: "Muonekano wa kitaalamu kwa biashara za kisasa",
      detailedKicker: "Huduma kwa undani",
      detailedTitle: "Mtazamo mpana zaidi wa mambo tunayowasaidia wateja kuyafanikisha.",
      detailedText:
        "Badala ya kumfanya mgeni aruke kwenda ukurasa mwingine moja kwa moja, makundi makuu ya huduma yanaonekana hapa hapa kwenye home page.",
      govKicker: "Huduma za taasisi na serikali",
      govTitle: "Nyaraka na ufuatiliaji wenye mwongozo",
      govText: "Msaada kwa usajili wa biashara, utambulisho, vyeti, kodi, na taratibu nyingine za taasisi.",
      govCard1Title: "BRELA na usajili wa biashara",
      govCard1Text: "Usajili wa business name, company registration, na ufuatiliaji wa setup rasmi ya biashara.",
      govCard2Title: "TRA, RITA, HESLB, NIDA, TAUSI",
      govCard2Text: "Msaada wa kodi, utambulisho, vyeti, marekebisho ya mikopo ya wanafunzi, na leseni za biashara.",
      govTag1: "Usajili",
      govTag2: "Huduma za ufuatiliaji",
      softwareKicker: "Huduma za kidigitali",
      softwareTitle: "Suluhisho za kidigitali zinazoipa biashara muonekano bora",
      softwareText:
        "Website, app, na mifumo ya kisasa kwa biashara zinazotaka uwepo wa kidigitali wenye hadhi zaidi.",
      softCard1Title: "Website za biashara",
      softCard1Text: "Website safi na responsive zinazosaidia biashara kuonekana ya kuaminika na tayari kwa wateja.",
      softCard2Title: "Apps na mifumo ya biashara",
      softCard2Text: "Mobile apps na mifumo ya biashara inayosaidia kazi za kila siku, huduma kwa wateja, na ukuaji.",
      softTag1: "Uwepo mtandaoni",
      softTag2: "Zana za biashara",
      contactKicker: "Mawasiliano",
      contactTitle: "Wasiliana nasi kwa njia inayokufaa zaidi.",
      contactText: "Tumia WhatsApp kwa mawasiliano ya haraka au email kwa maombi ya kina, quotations, na project discussions.",
      tipLabel: "Dokezo:",
      tipText: "Unapotuma ujumbe, taja huduma unayohitaji ili tukupe majibu ya haraka na sahihi zaidi.",
      quickTitle: "Anza na maelezo mafupi moja kwa moja kutoka home page.",
      quickText: "Hii inampa mgeni hatua ya moja kwa moja bila kumlazimisha afungue full contact page kwanza.",
      ctaKicker: "Uko tayari kwa first impression bora zaidi?",
      ctaTitle: "Acha business profile yako ilingane na ubora wa kazi yako.",
      ctaText: "Wasiliana nasi kwa msaada wa usajili, huduma za kidigitali, au mfumo wa biashara unaoendana na namna unavyofanya kazi.",
      heroVisualAlt: "Mchoro unaoonyesha msaada wa biashara, huduma, na utoaji wa software",
      businessPreviewAlt: "Muhtasari wa huduma ya usajili wa biashara",
      governmentPreviewAlt: "Muhtasari wa huduma za serikali",
      softwarePreviewAlt: "Muhtasari wa suluhisho za software",
      aboutVisualAlt: "Kuhusu JAYDIGITAL SOLUTIONS",
      govRegistrationAlt: "Usajili wa biashara BRELA",
      govServicesAlt: "Huduma za serikali na kodi",
      websiteAlt: "Huduma za website",
      appsAlt: "Apps na mifumo"
    },
    about: {
      eyebrow: "Kuhusu kampuni",
      title: "Imejengwa juu ya uaminifu, kasi, na utoaji unaotegemewa.",
      text:
        "JAYDIGITAL SOLUTIONS inasaidia watu binafsi, wajasiriamali, na taasisi kufikia huduma muhimu kwa uwazi zaidi, uhakika zaidi, na msaada wa kitaalamu tangu mwanzo hadi mwisho.",
      styleKicker: "Mtindo wa utendaji",
      style1: "Mawasiliano wazi kutoka mwanzo hadi mwisho",
      style2: "Umakini kwa maelezo ya taratibu ambazo wateja huziona kuwa ngumu",
      style3: "Utekelezaji wa kisasa unaolinda taswira ya kitaalamu ya brand",
      whoKicker: "Sisi ni nani",
      whoTitle: "Kampuni inayolenga msaada wa kuaminika na matokeo ya vitendo.",
      whoText:
        "Tunafanya kazi na wateja wanaohitaji zaidi ya taarifa pekee. Wanahitaji mwongozo, ufuatiliaji, na uzoefu wa huduma unaohisi kupangwa, wa haraka, na wa kitaalamu.",
      whoQuote:
        "Lengo letu ni moja: kufanya huduma muhimu zipatikane kwa urahisi zaidi, zikamilike kwa haraka zaidi, na ziwe na uzoefu unaoaminika zaidi.",
      believeKicker: "Tunachoamini",
      believeTitle: "Msaada wa kitaalamu unapaswa kuwa wazi, wenye mpangilio, na wa kuaminika.",
      believeText:
        "Hiyo inamaanisha mawasiliano wazi, ufuatiliaji wa mara kwa mara, na suluhisho zinazompa mteja confidence juu ya huduma anayopokea.",
      believe1: "Uadilifu kwenye mchakato na bei",
      believe2: "Heshima kwa muda na matarajio ya mteja",
      believe3: "Kuendelea kuboresha utoaji wa kidigitali",
      missionKicker: "Mwelekeo wa brand",
      missionTitle: "Msingi wa mwelekeo wetu.",
      missionText:
        "Kazi yetu inaongozwa na ahadi moja rahisi: kutoa huduma zilizo sahihi, za kitaalamu, na zenye msaada wa kweli kwa watu na biashara tunazohudumia.",
      missionCardTitle: "Dhamira",
      missionCardText: "Kutoa huduma za usajili, nyaraka, na kidigitali zinazookoa muda wa wateja na kupunguza sintofahamu.",
      visionCardTitle: "Dira",
      visionCardText: "Kuwa partner anayeheshimika wa huduma za kidigitali anayejulikana kwa uthabiti, uwazi, na matokeo ya vitendo Tanzania.",
      valuesCardTitle: "Maadili",
      valuesCardText: "Uaminifu, mwitikio, weledi, na uzoefu wa mteja unaohisi kupangwa tangu mawasiliano ya kwanza.",
      visualAlt: "Mchoro wa kutuhusu"
    },
    services: {
      eyebrow: "Huduma",
      title: "Huduma zenye majibu kwa mahitaji halisi ya biashara.",
      text: "Ukurasa huu unapanga huduma zako kwa uwazi zaidi ili wageni wazisome haraka na kuziamini kirahisi.",
      mainKicker: "Makundi makuu",
      main1: "Msaada wa usajili na kuanza",
      main2: "Ufuatiliaji wa michakato na nyaraka za serikali",
      main3: "Website, app, na mifumo ya biashara",
      govKicker: "Huduma za taasisi na serikali",
      govTitle: "Nyaraka na ufuatiliaji wenye mwongozo",
      govText: "Kwa wateja wanaotaka mchakato ushughulikiwe kwa confidence zaidi na back-and-forth chache.",
      item1Title: "Usajili wa Business Name BRELA",
      item1Text: "Msaada kwa usajili wa sole proprietorship na ufuatiliaji wake.",
      item1Tag: "Usajili",
      item2Title: "Usajili wa Kampuni BRELA",
      item2Text: "Usajili wa limited company pamoja na mwongozo wa nyaraka.",
      item2Tag: "Kuanzisha kampuni",
      item3Title: "Msaada wa NIDA",
      item3Text: "Mwongozo wa ufuatiliaji wa masuala ya utambulisho ambapo uthibitisho au rekodi za NIDA zinahusika.",
      item3Tag: "Utambulisho",
      item4Title: "Huduma za TRA",
      item4Text: "Maombi ya TIN, tax clearance, na msaada wa masuala ya taxpayer.",
      item4Tag: "Msaada wa kodi",
      item5Title: "Huduma za RITA",
      item5Text: "Cheti cha kuzaliwa, cheti cha kifo, na ufuatiliaji wa rekodi husika.",
      item5Tag: "Vyeti",
      item6Title: "Msaada wa HESLB",
      item6Text: "Marekebisho, ufuatiliaji wa account, na msaada wa huduma za wanafunzi pale inapohitajika.",
      item6Tag: "Elimu",
      item7Title: "Msaada wa TAUSI",
      item7Text: "Msaada wa leseni za biashara na ufuatiliaji wa maombi husika.",
      item7Tag: "Leseni",
      softKicker: "Chaguo za huduma za kidigitali",
      softTitle: "Suluhisho za kidigitali zenye mwonekano bora wa biashara",
      softText: "Kwa kampuni zinazotaka zaidi ya page ya kawaida na zinahitaji uwepo wa biashara unaoonekana wa maana.",
      soft1Title: "Basic Website",
      soft1Text: "Responsive website ya kurasa 3 hadi 5 kwa biashara zinazohitaji uwepo safi mtandaoni.",
      soft1Tag: "Uwepo mtandaoni",
      soft2Title: "Standard Website",
      soft2Text: "Website yenye admin support, content yenye mpangilio, na presentation bora zaidi.",
      soft2Tag: "Website ya biashara",
      soft3Title: "Premium Website au System",
      soft3Text: "Huduma ya kiwango cha juu yenye malipo, usalama, au vipengele vinavyoendana na biashara yako.",
      soft3Tag: "Suluhisho maalum",
      soft4Title: "Mobile na Desktop Applications",
      soft4Text: "Apps na mifumo ya ndani kwa management, operations, na customer experience.",
      soft4Tag: "Msaada wa biashara",
      ctaKicker: "Unahitaji bei maalum?",
      ctaTitle: "Baadhi ya mahitaji ya biashara yanahitaji huduma iliyopangwa kwa namna yako.",
      ctaText: "Wasiliana nasi kwa hitaji la biashara yako na tutakushauri huduma inayokufaa zaidi.",
      visualAlt: "Mchoro wa huduma",
      item1Alt: "Usajili wa biashara BRELA",
      item2Alt: "Usajili wa kampuni BRELA",
      item3Alt: "Msaada wa NIDA",
      item4Alt: "Huduma za TRA",
      item5Alt: "Huduma za RITA",
      item6Alt: "Huduma za HESLB",
      item7Alt: "Huduma za TAUSI",
      soft1Alt: "Package ya basic website",
      soft2Alt: "Package ya standard website",
      soft3Alt: "Package ya premium website au system",
      soft4Alt: "Package ya mobile na desktop applications"
    },
    contact: {
      eyebrow: "Mawasiliano",
      title: "Anza mazungumzo na timu inayothamini uwazi na ufuatiliaji.",
      text:
        "Wasiliana nasi kwa msaada wa usajili, ufuatiliaji wa huduma za serikali, au mazungumzo ya huduma za kidigitali. Tuko tayari kusikiliza, kuelekeza, na kujibu kwa weledi.",
      bestKicker: "Inafaa kwa",
      best1: "Wateja wanaohitaji ufafanuzi wa bei",
      best2: "Biashara zinazoanza usajili au setup",
      best3: "Taasisi zinazopanga huduma za kidigitali",
      directKicker: "Mawasiliano ya moja kwa moja",
      directTitle: "Wasiliana nasi kwa njia inayokufaa zaidi.",
      directText: "Tumia WhatsApp kwa mawasiliano ya haraka au email kwa maombi ya kina, quotations, na project discussions.",
      tipLabel: "Dokezo:",
      tipText: "Unapotuma ujumbe, taja huduma unayohitaji ili tukupe majibu ya haraka na sahihi zaidi.",
      requestKicker: "Tuma ombi",
      requestTitle: "Tuma maelezo mafupi ili kuanza.",
      requestText: "Kuwasilisha form hii kunafungua WhatsApp ikiwa tayari imepanga maelezo yako, hivyo ufuatiliaji unakuwa wa haraka na wenye mpangilio.",
      visualAlt: "Mchoro wa mawasiliano"
    },
    notFound: {
      kicker: "Ukurasa haujapatikana",
      title: "Ukurasa unaoutafuta haupo.",
      text: "Unaweza kurudi mwanzo au kuendelea kutazama huduma na taarifa za kampuni yetu.",
      button: "Rudi mwanzo"
    }
  }
};

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const routeLanguage = getLocaleFromPathname(pathname);

    if (routeLanguage) {
      setLanguage(routeLanguage);
      return;
    }

    const saved = window.localStorage.getItem("site-language");
    if (saved === "en" || saved === "sw") {
      setLanguage(saved);
    }
  }, [pathname]);

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.cookie = `site-language=${language}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = language === "sw" ? "sw" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
