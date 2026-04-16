import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  metadataBase: new URL("https://jemsi-442.github.io/companyprofile"),
  title: "JAYDIGITAL SOLUTIONS",
  description:
    "JAYDIGITAL SOLUTIONS helps businesses in Tanzania with registration, government services, and modern business solutions.",
  openGraph: {
    title: "JAYDIGITAL SOLUTIONS",
    description:
      "Professional support for registration, government services, and business growth in Tanzania.",
    url: "https://jemsi-442.github.io/companyprofile",
    siteName: "JAYDIGITAL SOLUTIONS",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYDIGITAL SOLUTIONS",
    description:
      "Professional support for registration, government services, and business growth in Tanzania."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <LanguageProvider>
          <ClientEffects />
          <div className="scroll-progress" aria-hidden="true">
            <span id="scrollProgressBar" />
          </div>
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
