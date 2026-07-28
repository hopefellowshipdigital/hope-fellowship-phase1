import type { Metadata } from "next";
import { LegalPagePlaceholder } from "@/components/sections/legal-page-placeholder";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return <LegalPagePlaceholder eyebrow="Legal" title="Terms of Use" />;
}
