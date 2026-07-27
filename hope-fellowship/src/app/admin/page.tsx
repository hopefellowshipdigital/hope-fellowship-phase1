import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { PageContainer } from "@/components/ui/layout-primitives";

export const metadata: Metadata = {
  title: "Admin",
  description: "Hope Fellowship administrative dashboard (development placeholder).",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPlaceholderPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-muted/60 py-16">
      <PageContainer className="flex justify-center">
        <div className="flex max-w-lg flex-col items-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-border bg-surface p-8 text-center shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
            <ShieldAlert className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-bold text-text">Admin Dashboard</h1>
          <p className="text-sm text-muted-text">
            This is a development placeholder only. There is no login, authentication or admin
            functionality here yet — secure Supabase authentication and role-based access will be
            implemented in the Secure Administration Dashboard phase (Phase 8).
          </p>
          <p className="rounded-full bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-text">
            Not yet secured — do not use for real data
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
