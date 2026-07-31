import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const publicRoutes = [
  "",
  "/new-here",
  "/plan-your-visit",
  "/about",
  "/ministries",
  "/watch",
  "/sermons",
  "/events",
  "/connect",
  "/prayer",
  "/give",
  "/contact",
  "/privacy",
  "/terms",
  "/safeguarding",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
