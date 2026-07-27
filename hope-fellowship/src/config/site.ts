import type { SiteMode } from "@/types";

/**
 * SITE DISPLAY MODE
 * -----------------
 * Toggle this value to preview the homepage's "live" experience before
 * real YouTube livestream detection is implemented (planned for the
 * Watch Live phase). Change "normal" to "live" and save to see the
 * live-service layout.
 */
export const SITE_MODE: SiteMode = "normal";

/**
 * SITE-WIDE METADATA AND PLACEHOLDER CONTACT DETAILS
 * ---------------------------------------------------
 * Every value marked with square brackets is a placeholder. Replace it
 * with real Hope Fellowship information when it becomes available —
 * these values are read from this single file, not hardcoded across
 * pages, so updates only need to happen here.
 */
export const siteConfig = {
  name: "Hope Fellowship",
  location: "Jamaica",
  title: "Hope Fellowship Church Jamaica",
  description:
    "Connect with Hope Fellowship Church in Jamaica. Watch online, plan your visit, explore upcoming events and take your next step in faith.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Placeholders — replace with confirmed church details.
  serviceTime: "[OFFICIAL SERVICE TIME]",
  address: "[CHURCH ADDRESS]",
  phone: "[CHURCH PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[CHURCH EMAIL ADDRESS]",
  missionStatement: "[OFFICIAL MISSION STATEMENT]",

  social: {
    youtube: "[YOUTUBE CHANNEL URL]",
    facebook: "[FACEBOOK PAGE URL]",
    instagram: "[INSTAGRAM PROFILE URL]",
    whatsapp: "[WHATSAPP LINK]",
  },
} as const;
