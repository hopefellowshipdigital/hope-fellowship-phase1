import type { LucideIcon } from "lucide-react";
import { HeartHandshake, Sparkles, Users, UserPlus } from "lucide-react";

export interface WhatToExpectItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whatToExpectItems: WhatToExpectItem[] = [
  {
    id: "worship",
    icon: Sparkles,
    title: "Worship",
    description:
      "Sunday worship centres on praise, prayer, fellowship and Christian teaching.",
  },
  {
    id: "message",
    icon: HeartHandshake,
    title: "The Message",
    description:
      "Expect a Bible-centred message intended to encourage spiritual growth and practical Christian living.",
  },
  {
    id: "community",
    icon: Users,
    title: "Community",
    description: "Hope Fellowship values fellowship, connection and genuine care for one another.",
  },
  {
    id: "first-time",
    icon: UserPlus,
    title: "First-Time Visitors",
    description:
      "You're welcome to attend without registering, and a member of our church team is glad to assist you.",
  },
];
