import type { Metadata } from "next";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import { PageHeader } from "@/components/ui";
import { ABOUT, BRAND, IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: `ABOUT | ${BRAND.name}`,
  description: ABOUT.mission,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="our story"
        title="REDEFINING"
        accent="PERFORMANCE"
        description={ABOUT.mission}
      />

      {/* Mission */}
      <section className="reveal py-12 md:py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="readable-block readable-prose">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              THE <span className="text-neon">MISSION</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-6">
              {ABOUT.story}
            </p>
            <p className="font-body text-base text-on-surface-variant">
              {ABOUT.vision}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] reveal-scale">
            <ProductImage
              src={IMAGES.studio}
              alt="LUXAR design studio"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="reveal py-16 md:py-24 bg-surface-container-lowest/50 backdrop-blur-md">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            WHAT WE <span className="text-on-surface-variant">STAND FOR</span>
          </h2>
          <div className="technical-line max-w-xs mb-12" />
          <div className="stagger-children reveal grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ABOUT.values.map((v) => (
              <GlassCard key={v.title} className="p-8 md:p-10 group">
                <div className="w-10 h-10 rounded-full border border-secondary-fixed-dim/40 flex items-center justify-center mb-6 group-hover:border-secondary-fixed-dim transition-colors">
                  <span className="text-secondary-fixed-dim text-lg">◈</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary-fixed-dim transition-colors">
                  {v.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant">
                  {v.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="reveal py-16 md:py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          OUR <span className="text-neon">JOURNEY</span>
        </h2>
        <div className="technical-line max-w-xs mb-12" />
        <div className="max-w-2xl">
          {ABOUT.milestones.map((m, i) => (
            <div
              key={m.year}
              className={`reveal-left flex gap-8 py-8 ${
                i < ABOUT.milestones.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="font-mono text-2xl font-bold text-secondary-fixed-dim shrink-0 w-16">
                {m.year}
              </span>
              <p className="font-body text-lg text-on-surface-variant pt-1">
                {m.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Factory image + CTA */}
      <section className="reveal relative py-16 md:py-24 overflow-hidden">
        <div className="glow-orb bg-secondary-fixed-dim top-1/2 left-1/4 opacity-10" />
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <GlassCard tilt={false} className="overflow-hidden relative min-h-[360px]">
            <div className="absolute inset-0">
              <ProductImage src={IMAGES.factory} alt="LUXAR factory floor" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
            <div className="relative z-10 p-10 md:p-16 max-w-xl">
              <p className="font-mono text-[11px] tracking-widest text-secondary-fixed-dim uppercase mb-4">
                Monterey, California
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                500 CARS. <br />
                <span className="text-neon">ONE AT A TIME.</span>
              </h2>
              <p className="font-body text-base text-on-surface-variant mb-8">
                Every LUXAR is built by hand in our Monterey facility. Visit us
                for a private tour and test drive.
              </p>
              <Button href="/reserve" size="lg">
                Reserve Your Build Slot
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
