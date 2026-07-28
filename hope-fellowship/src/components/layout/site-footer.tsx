import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinkGroups, socialLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { socialIconMap } from "@/components/ui/social-icons";

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={1095}
              height={715}
              className="h-14 w-auto"
            />
          </span>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            {siteConfig.missionStatement}
          </p>

          <ul className="mt-6 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground"
              >
                {siteConfig.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-primary-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-foreground">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pb-20 lg:pb-0">
        <div className="section-container flex flex-col items-center gap-2 py-5 text-center text-xs text-primary-foreground/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.serviceSchedule[0].label} · {siteConfig.serviceSchedule[0].time}</p>
        </div>
      </div>
    </footer>
  );
}
