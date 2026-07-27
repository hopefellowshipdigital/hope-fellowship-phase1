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
 * SITE-WIDE METADATA AND CONTACT DETAILS
 * ---------------------------------------------------
 * Real Hope Fellowship information lives here — this is the one file to
 * edit when any of these details change; every page reads from it rather
 * than hardcoding it.
 */
export const siteConfig = {
  name: "Hope Fellowship",
  location: "Jamaica",
  title: "Hope Fellowship Church Jamaica",
  description:
    "Connect with Hope Fellowship Church in Jamaica. Watch online, plan your visit, explore upcoming events and take your next step in faith.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  pastorName: "Rev. Christopher Brodber",
  serviceTime: "Sundays at 9:00 AM",
  address: "23 Molynes Road, Kingston 10, Jamaica",
  phone: "876-505-6063",
  whatsapp: "876-505-6063",
  email: "hopefellowshipchurch.ja@gmail.com",
  missionStatement:
    "To build a strong Christian fellowship so that people's lives are transformed spiritually, socially and economically as a practical demonstration of God's kingdom at work.",

  social: {
    youtube: "https://www.youtube.com/@hopefellowshipchurchjamaic5212",
    facebook: "https://www.facebook.com/Hopefellowshipchurchja",
    instagram: "https://www.instagram.com/hopefellowshipchurchjamaica/",
    whatsapp: "https://wa.me/18765056063",
  },
} as const;
