import { Mail } from "lucide-react";
import { TextButton } from "@/components/ui/buttons";
import { PageContainer, SectionHeading } from "@/components/ui/layout-primitives";
import { socialIconMap } from "@/components/ui/social-icons";
import { socialLinks } from "@/data/navigation";

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

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-10 text-center shadow-sm">
          <p className="text-sm text-muted-text">
            Follow Hope Fellowship on social media for updates, messages and community news.
          </p>

          <ul className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 text-sm text-muted-text">
            <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Email updates are coming soon.</span>
          </div>

          <TextButton href="/connect">Connect With Us</TextButton>
        </div>
      </PageContainer>
    </section>
  );
}
