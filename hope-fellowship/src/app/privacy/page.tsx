import type { Metadata } from "next";
import { LegalPagePlaceholder } from "@/components/sections/legal-page-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <LegalPagePlaceholder eyebrow="Legal" title="Privacy Policy" />;
}
