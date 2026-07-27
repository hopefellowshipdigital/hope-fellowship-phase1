import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type LinkOrButtonProps =
  | (CommonProps & { href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "href" | "children"
      >)
  | (CommonProps &
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
        href?: undefined;
      });

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm sm:text-base transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

/**
 * PrimaryButton — the main call-to-action style (solid gold on navy or
 * solid navy, depending on context). Renders a <Link> when `href` is
 * given (navigation) or a <button> otherwise (in-page action).
 */
export function PrimaryButton(props: LinkOrButtonProps) {
  const { children, className, ...rest } = props;
  const classes = cn(
    base,
    "bg-accent text-accent-foreground px-6 py-3 shadow-md hover:bg-accent-dark",
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as { href: string } & Record<string, unknown>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

/** SecondaryButton — outlined style, used alongside a PrimaryButton. */
export function SecondaryButton(props: LinkOrButtonProps) {
  const { children, className, ...rest } = props;
  const classes = cn(
    base,
    "border-2 border-primary-foreground/30 text-current px-6 py-3 hover:border-primary-foreground/60",
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as { href: string } & Record<string, unknown>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

/** TextButton — low-emphasis link-style action, e.g. "View All Sermons". */
export function TextButton(props: LinkOrButtonProps) {
  const { children, className, ...rest } = props;
  const classes = cn(
    "inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2",
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as { href: string } & Record<string, unknown>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
  className?: string;
}

/** IconButton — square, icon-only action button. Always requires a label
 *  for screen readers since there is no visible text. */
export function IconButton({ label, children, className, ...rest }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full text-current transition-colors duration-150 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
