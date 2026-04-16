import { NextResponse } from "next/server";

const locales = ["en", "sw"];
const PUBLIC_FILE = /\.[^/]+$/;

function getPreferredLocale(request) {
  const savedLanguage = request.cookies.get("site-language")?.value;

  if (locales.includes(savedLanguage)) {
    return savedLanguage;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  return acceptLanguage.toLowerCase().includes("sw") ? "sw" : "en";
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const redirectUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}${search}`, request.url);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
