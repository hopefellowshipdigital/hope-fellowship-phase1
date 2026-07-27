import type { Metadata } from "next";
// Self-hosted via @fontsource (bundled at build time, no runtime request to
// Google Fonts) — see globals.css for the font-family tokens these define.
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <AnnouncementBar message="Welcome to the new Hope Fellowship digital home." />
        <SiteHeader />

        <main id="main-content" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>

        <SiteFooter />
        <MobileStickyBar />
      </body>
    </html>
  );
}
