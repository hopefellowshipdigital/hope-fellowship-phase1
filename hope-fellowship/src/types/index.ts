// Shared type definitions for the Hope Fellowship website.
// These model content that will eventually be managed through Supabase.
// Keeping them centralized now means the future data layer can implement
// the same shapes without reworking the components that consume them.

export interface NavigationItem {
  label: string;
  href: string;
  /** Marks an item for extra visual emphasis (e.g. "Watch"). */
  emphasized?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Key used to look up the matching icon component. */
  icon: "youtube" | "facebook" | "instagram" | "whatsapp";
}

export interface ServiceInfoCardData {
  id: string;
  title: string;
  description: string;
  icon: "clock" | "map-pin" | "play-circle" | "navigation";
  actionLabel: string;
  actionHref: string;
  /** True when the value shown is still a placeholder awaiting real info. */
  isPlaceholder: boolean;
}

export interface SermonSummary {
  id: string;
  title: string;
  speaker: string;
  scripture: string;
  date: string;
  thumbnailLabel: string;
  href: string;
  isPlaceholder: boolean;
}

export interface EventSummary {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  href: string;
  isSample: boolean;
}

export interface MinistryCategory {
  id: string;
  title: string;
  description: string;
  icon: "baby" | "users" | "music" | "hand-heart" | "globe" | "circle-users";
  isProvisional: boolean;
}

export interface PrayerAction {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "hand-heart" | "life-buoy" | "message-circle-heart";
}
