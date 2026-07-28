import type { FooterLinkGroup, NavigationItem, SocialLink } from "@/types";
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

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: "Explore",
    links: [
      { label: "New Here", href: "/new-here" },
      { label: "About", href: "/about" },
      { label: "Ministries", href: "/ministries" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Watch Online", href: "/watch" },
      { label: "Sermons", href: "/sermons" },
      { label: "Prayer Requests", href: "/prayer" },
      { label: "Give", href: "/give" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Safeguarding Policy", href: "/safeguarding" },
    ],
  },
];
