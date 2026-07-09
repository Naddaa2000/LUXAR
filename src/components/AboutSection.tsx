import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import { ABOUT, BRAND, IMAGES } from "@/lib/site";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="reveal py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <div className="reveal-left relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[520px]">
          <ProductImage
            src={IMAGES.factory}
            alt="LUXAR Monterey production facility"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-mono text-[11px] tracking-widest text-secondary-fixed-dim uppercase mb-2">
              {BRAND.headquarters}
            </p>
            <p className="font-display text-xl font-semibold">
              Hand-assembled since {BRAND.founded}
            </p>
          </div>
        </div>

        {/* Copy side */}
        <div className="reveal-right readable-block readable-prose">
          <p className="font-mono text-[11px] tracking-widest text-secondary-fixed-dim uppercase mb-4">
            About LUXAR
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            BORN FROM <span className="text-neon">OBSESSION</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-6">
            {ABOUT.story}
          </p>
          <p className="font-body text-base text-on-surface-variant mb-10">
            {ABOUT.vision}
          </p>

          <div className="stagger-children reveal grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {ABOUT.values.map((v) => (
              <GlassCard key={v.title} tilt={false} className="p-5">
                <h3 className="font-mono text-[11px] tracking-wider text-primary-fixed-dim mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant">
                  {v.body}
                </p>
              </GlassCard>
            ))}
          </div>

          <Button href="/about" variant="ghost" size="md">
            Our Full Story
          </Button>
        </div>
      </div>
    </section>
  );
}
