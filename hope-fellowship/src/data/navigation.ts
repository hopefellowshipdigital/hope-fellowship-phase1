import type { NavigationItem, SocialLink } from "@/types";
import { siteConfig } from "@/config/site";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "New Here", href: "/new-here" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Watch", href: "/watch", emphasized: true },
  { label: "Events", href: "/events" },
  { label: "Connect", href: "/connect" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

/** Shown in the mobile sticky action bar — kept short on purpose. */
export const mobileQuickActions: NavigationItem[] = [
  { label: "Watch", href: "/watch" },
  { label: "Connect", href: "/connect" },
  { label: "Prayer", href: "/prayer" },
  { label: "Give", href: "/give" },
];

export const socialLinks: SocialLink[] = [
  { label: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: "whatsapp" },
];
