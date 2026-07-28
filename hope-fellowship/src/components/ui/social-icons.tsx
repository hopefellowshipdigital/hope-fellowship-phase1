import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Simplified, generic glyphs representing each platform — used for
 *  linking out to Hope Fellowship's real profiles. Not reproductions of
 *  any platform's official logo artwork, just recognizable linking icons. */
export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M13.5 9h1.5V6.8h-1.7c-1.7 0-2.8 1-2.8 2.7V11H9v2.3h2.5V18h2.4v-4.7h1.9L16.2 11h-2.3V9.8c0-.5.2-.8.6-.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3a9 9 0 00-7.75 13.55L3 21l4.6-1.2A9 9 0 1012 3z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.7 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3 0 .6.2.3.7 1 1.5 1.6.9.7 1.4.9 1.6 1l.5-.5c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.4 0 .2 0 1-.4 1.4-.4.4-1.2.8-2 .6-1.9-.4-3.6-1.5-4.8-3-1.1-1.3-1.7-2.6-1.8-3.5-.1-.9.3-1.6.6-1.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export const socialIconMap = {
  youtube: YouTubeIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};
