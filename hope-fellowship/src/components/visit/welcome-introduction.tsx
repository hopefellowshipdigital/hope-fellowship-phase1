import { PageContainer } from "@/components/ui/layout-primitives";

export function WelcomeIntroduction() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="welcome-intro-heading">
      <PageContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="welcome-intro-heading" className="text-3xl font-bold text-text sm:text-4xl">
            You Are Welcome Here
          </h2>
          <p className="mt-4 text-base text-muted-text sm:text-lg">
            First-time visitors are always welcome at Hope Fellowship — there&apos;s no need to
            register before you come, and there&apos;s no pressure once you&apos;re here. Our
            church team is glad to help you know what to expect before you arrive, and if
            you&apos;d rather ease in gently, you&apos;re welcome to worship with us online first.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
