import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const publicRoutes = [
  "",
  "/new-here",
  "/about",
  "/ministries",
  "/watch",
  "/sermons",
  "/events",
  "/connect",
  "/prayer",
  "/give",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
