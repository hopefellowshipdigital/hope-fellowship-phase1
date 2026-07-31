"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyAddressButtonProps {
  address: string;
  className?: string;
}

/**
 * CopyAddressButton — copies the church address using the Clipboard API,
 * with a visible "Copied!" confirmation. Falls back to a hidden-textarea
 * copy technique for browsers without Clipboard API support, so the
 * action works either way rather than silently failing.
 */
export function CopyAddressButton({ address, className }: CopyAddressButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(address);
      } else {
        // Fallback for browsers without Clipboard API support.
        const textarea = document.createElement("textarea");
        textarea.value = address;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Copy failed silently — the address is still visible on the page
      // for the visitor to select manually.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden="true" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          Copy Address
        </>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Address copied to clipboard" : ""}
      </span>
    </button>
  );
}
