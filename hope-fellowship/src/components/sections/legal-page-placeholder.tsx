import { PageContainer } from "@/components/ui/layout-primitives";
import { SimplePageHero } from "@/components/sections/simple-page-hero";
import { siteConfig } from "@/config/site";

interface LegalPagePlaceholderProps {
  eyebrow: string;
  title: string;
}

/**
 * LegalPagePlaceholder — an honest, neutral placeholder for a legal page
 * that hasn't been drafted yet. Deliberately does not invent policy
 * language; church leadership will supply the real text to replace this.
 */
export function LegalPagePlaceholder({ eyebrow, title }: LegalPagePlaceholderProps) {
  return (
    <>
      <SimplePageHero
        eyebrow={eyebrow}
        title={title}
        description="This page is being finalized and will be published here soon."
      />
      <PageContainer as="section" className="py-14 sm:py-16">
        <p className="max-w-xl text-sm text-muted-text">
          In the meantime, if you have any questions, please{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary hover:underline">
            contact us
          </a>
          .
        </p>
      </PageContainer>
    </>
  );
}
