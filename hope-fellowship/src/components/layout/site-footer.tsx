import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialIconMap } from "@/components/ui/social-icons";
import { socialLinks } from "@/data/navigation";

const exploreLinks = [
  { label: "New Here", href: "/new-here" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
];

const connectLinks = [
  { label: "Watch Online", href: "/watch" },
  { label: "Request Prayer", href: "/prayer" },
  { label: "Give", href: "/give" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Safeguarding Policy", href: "/safeguarding" },
];

export function SiteFooter() {
  const schedule = siteConfig.serviceSchedule[0];

  return (
    <footer className="bg-midnight text-primary-foreground">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-3">
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

          <ul className="mt-5 flex gap-3">
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

        <nav aria-label="Explore">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {exploreLinks.map((link) => (
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

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-accent">Connect</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {connectLinks.map((link) => (
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
            <li className="text-primary-foreground/60">
              {schedule.label} · {schedule.time}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pb-20 lg:pb-0">
        <div className="section-container flex flex-col items-center gap-4 py-5 text-center text-xs text-primary-foreground/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
