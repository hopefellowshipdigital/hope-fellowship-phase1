import type { MinistryCategory } from "@/types";

// Provisional categories only — Hope Fellowship's actual ministry
// structure and names have not yet been confirmed. Update or replace
// these once official ministry information is supplied.
export const provisionalMinistries: MinistryCategory[] = [
  {
    id: "children",
    title: "Children",
    description: "A safe, joyful space for kids to discover God's love.",
    icon: "baby",
    isProvisional: true,
  },
  {
    id: "youth",
    title: "Youth",
    description: "Building the next generation of bold, faithful believers.",
    icon: "users",
    isProvisional: true,
  },
  {
    id: "worship",
    title: "Worship",
    description: "Leading the church into heartfelt, spirit-filled praise.",
    icon: "music",
    isProvisional: true,
  },
  {
    id: "prayer",
    title: "Prayer",
    description: "Standing in the gap for our church, city and nation.",
    icon: "hand-heart",
    isProvisional: true,
  },
  {
    id: "outreach",
    title: "Outreach",
    description: "Serving our community with practical, tangible love.",
    icon: "globe",
    isProvisional: true,
  },
  {
    id: "small-groups",
    title: "Small Groups",
    description: "Growing together in faith, friendship and accountability.",
    icon: "circle-users",
    isProvisional: true,
  },
];
