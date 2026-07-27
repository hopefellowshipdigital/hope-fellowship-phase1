import { Mail, MessageCircle } from "lucide-react";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";

export function StayConnectedSection() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20" aria-labelledby="stay-connected-heading">
      <PageContainer>
        <SectionHeading
          eyebrow="Stay Connected"
          title="Never Miss What's Next"
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-8 text-center shadow-sm">
            <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
            <h3 className="text-base font-bold text-text">Email Newsletter</h3>
            <p className="text-sm text-muted-text">
              Sign-up will be activated once our email service is connected.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-8 text-center shadow-sm">
            <MessageCircle className="h-7 w-7 text-primary" aria-hidden="true" />
            <h3 className="text-base font-bold text-text">WhatsApp Updates</h3>
            <p className="text-sm text-muted-text">
              A WhatsApp community link will appear here: {" "}
              <span className="font-semibold">[WHATSAPP LINK]</span>
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
