import { ChevronDown } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { visitorFaqItems } from "@/data/visitor-faq";

/**
 * VisitorFaq — built with native <details>/<summary> elements, which are
 * keyboard-operable and screen-reader-friendly by default with no extra
 * JavaScript required.
 */
export function VisitorFaq() {
  return (
    <section className="py-16 sm:py-20" aria-label="Frequently asked questions">
      <PageContainer>
        <SectionHeading eyebrow="Have Questions?" title="Frequently Asked Questions" />

        <div className="mt-8 flex max-w-2xl flex-col divide-y divide-border rounded-[var(--radius-lg)] border border-border bg-surface shadow-sm">
          {visitorFaqItems.map((faq) => (
            <details key={faq.question} className="group px-6 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-bold text-text focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base">
                {faq.question}
                <ChevronDown
                  className="h-4.5 w-4.5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-4 pr-8 text-sm text-muted-text">{faq.answer}</p>
            </details>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
