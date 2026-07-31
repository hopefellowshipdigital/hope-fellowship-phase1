/**
 * SITE-WIDE METADATA AND CONTACT DETAILS
 * ---------------------------------------------------
 * Real Hope Fellowship information lives here — this is the one file to
 * edit when any of these details change; every page reads from it rather
 * than hardcoding it.
 *
 * Internal note for church administrators (not shown publicly): please
 * confirm every detail below is fully accurate before final production
 * launch — service times, address, and contact details in particular.
 */
export const siteConfig = {
  name: "Hope Fellowship Church",
  shortName: "Hope Fellowship",
  location: "Jamaica",
  title: "Hope Fellowship Church Jamaica",
  description:
    "Connect with Hope Fellowship Church in Jamaica. Watch online, plan your visit, explore upcoming events and take your next step in faith.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  pastorName: "Rev. Christopher Brodber",
  serviceTime: "Sundays at 9:00 AM",
  serviceSchedule: [
    {
      day: "Sunday",
      label: "Sunday Worship",
      time: "9:00 AM",
    },
  ],
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
