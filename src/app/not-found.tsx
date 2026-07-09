import Button from "@/components/Button";
import { GlowOrbs } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-[var(--spacing-margin-mobile)] overflow-hidden">
      <GlowOrbs />
      <p className="font-mono text-sm tracking-widest text-primary-fixed-dim uppercase mb-6">
        ROUTE NOT FOUND
      </p>
      <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
        <span className="text-neon">404</span>
      </h1>
      <p className="font-body text-lg text-on-surface-variant max-w-md mb-10">
        This road doesn&apos;t exist. The page may have moved or never been
        built.
      </p>
      <Button href="/" size="lg">
        BACK TO HOME
      </Button>
    </section>
  );
}
