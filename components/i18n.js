export const locales = ["en", "sw"];

export function isLocale(value) {
  return locales.includes(value);
}

export function getLocaleFromPathname(pathname = "/") {
  const [, firstSegment] = pathname.split("/");
  return isLocale(firstSegment) ? firstSegment : null;
}

export function stripLocalePrefix(pathname = "/") {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const stripped = pathname.replace(new RegExp(`^/${locale}`), "");
  return stripped || "/";
}

export function localizePath(pathname = "/", locale = "en") {
  const cleanPath = stripLocalePrefix(pathname);

  if (cleanPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath}`;
}
