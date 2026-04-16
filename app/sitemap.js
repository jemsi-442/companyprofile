export default function sitemap() {
  const baseUrl = "https://jemsi-442.github.io/companyprofile";
  const routes = ["", "/about", "/services", "/contact"];
  const languages = ["en", "sw"];

  return routes.flatMap((route) => {
    const baseRoute = route || "/";

    return [
      {
        url: `${baseUrl}${baseRoute}`,
        lastModified: new Date()
      },
      ...languages.map((language) => ({
        url: route ? `${baseUrl}/${language}${route}` : `${baseUrl}/${language}`,
        lastModified: new Date()
      }))
    ];
  });
}
