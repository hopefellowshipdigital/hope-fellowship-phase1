import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinkGroups, socialLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";

// lucide-react no longer ships brand/logo icons, so social links use a
// simple initial-letter badge. Swap for official brand SVGs once Hope
// Fellowship's visual identity is supplied.
const socialInitialMap: Record<string, string> = {
  youtube: "Y",
  facebook: "F",
  instagram: "I",
  whatsapp: "W",
};

function PlaceholderText({ children }: { children: string }) {
  return <span title="Placeholder — replace with confirmed information">{children}</span>;
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">{siteConfig.name}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {siteConfig.location}
          </p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            <PlaceholderText>{siteConfig.missionStatement}</PlaceholderText>
          </p>

          <ul className="mt-6 flex gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span aria-hidden="true">{socialInitialMap[link.icon]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerLinkGroups.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
              {group.heading}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <PlaceholderText>{siteConfig.address}</PlaceholderText>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <PlaceholderText>{siteConfig.phone}</PlaceholderText>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <PlaceholderText>{siteConfig.email}</PlaceholderText>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pb-20 lg:pb-0">
        <div className="section-container flex flex-col items-center gap-2 py-5 text-center text-xs text-primary-foreground/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Website in development — Phase 1</p>
        </div>
      </div>
    </footer>
  );
}
