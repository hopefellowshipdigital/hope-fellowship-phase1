import type { PrayerAction, ServiceInfoCardData } from "@/types";

export const serviceInfoCards: ServiceInfoCardData[] = [
  {
    id: "sunday-worship",
    title: "Sunday Worship",
    description: "[OFFICIAL SERVICE TIME] — join us in person or online.",
    icon: "clock",
    actionLabel: "Plan Your Visit",
    actionHref: "/new-here",
    isPlaceholder: true,
  },
  {
    id: "church-location",
    title: "Church Location",
    description: "[CHURCH ADDRESS]",
    icon: "map-pin",
    actionLabel: "Get Directions",
    actionHref: "/new-here",
    isPlaceholder: true,
  },
  {
    id: "watch-online",
    title: "Watch Online",
    description: "Can't make it in person? Join the service from anywhere.",
    icon: "play-circle",
    actionLabel: "Watch Online",
    actionHref: "/watch",
    isPlaceholder: false,
  },
  {
    id: "get-directions",
    title: "Get Directions",
    description: "Find your way to us from anywhere on the island.",
    icon: "navigation",
    actionLabel: "Open Directions",
    actionHref: "#",
    isPlaceholder: true,
  },
];

export const prayerActions: PrayerAction[] = [
  {
    id: "request-prayer",
    title: "Request Prayer",
    description: "Share what's on your heart. Our prayer team is here for you.",
    href: "/prayer",
    icon: "hand-heart",
  },
  {
    id: "pastoral-support",
    title: "Request Pastoral Support",
    description: "Speak with a member of our pastoral team.",
    href: "/prayer",
    icon: "life-buoy",
  },
  {
    id: "share-testimony",
    title: "Share a Testimony",
    description: "Tell us how God has been at work in your life.",
    href: "/prayer",
    icon: "message-circle-heart",
  },
];
