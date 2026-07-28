import type { Metadata } from "next";
import { LegalPagePlaceholder } from "@/components/sections/legal-page-placeholder";

export const metadata: Metadata = {
  title: "Safeguarding Policy",
};

export default function SafeguardingPage() {
  return <LegalPagePlaceholder eyebrow="Legal" title="Safeguarding Policy" />;
}
