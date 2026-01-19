import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getorris.com";

  // Keep this list tight and intentional.
  const routes = [
    "",
    "/features",
    "/privacy",
    "/terms",
    "/faq",
    "/install",
    "/about",
    "/press",
    "/note",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
