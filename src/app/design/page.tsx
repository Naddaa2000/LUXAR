import type { Metadata } from "next";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import { PageHeader, SpecRow, CtaBanner } from "@/components/ui";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "DESIGN | LUXAR",
  description:
    "Sculpted aerodynamics, carbon monocoque construction, and a cockpit built around the driver.",
};

const features = [
  {
    glyph: "◈",
    title: "AERODYNAMIC SCULPTURE",
    body: "Every surface is wind-tunnel tested. A 0.21 Cd drag coefficient slices through air with minimal resistance and maximum stability at speed.",
    image: IMAGES.nightDrive,
  },
  {
    glyph: "◇",
    title: "CARBON MONOCOQUE",
    body: "A full carbon-fiber chassis is 40% lighter than steel while delivering race-grade rigidity. The foundation of every LUXAR.",
    image: IMAGES.wheel,
  },
  {
    glyph: "⬡",
    title: "GLASS CANOPY",
    body: "A panoramic glass roof floods the cockpit with natural light. Electrochromic tinting adapts to sunlight in milliseconds.",
    image: IMAGES.interior,
  },
  {
    glyph: "◲",
    title: "ACTIVE AERO",
    body: "Deployable rear wing and adaptive front splitter automatically adjust downforce based on speed, cornering load, and driving mode.",
    image: IMAGES.studio,
  },
];

export default function DesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="design philosophy"
        title="SCULPTED BY"
        accent="THE WIND"
        description="Form follows function. Every curve, every line, every surface is engineered to move through air with purpose."
      />

      <section className="reveal py-16 md:py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((f) => (
            <GlassCard
              key={f.title}
              className="p-0 overflow-hidden group min-h-[320px] flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <ProductImage
                  src={f.image}
                  alt={f.title}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-primary-fixed-dim text-3xl font-display mb-4">
                  {f.glyph}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary-fixed-dim transition-colors">
                  {f.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant">
                  {f.body}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="reveal py-16 md:py-24 bg-surface-container-lowest/50 backdrop-blur-md">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            AERO_SPECS
          </h2>
          <p className="font-mono text-on-surface-variant text-sm mb-12">
            WIND TUNNEL VALIDATED
          </p>
          <div className="grid grid-cols-1">
            <SpecRow label="Drag Coefficient" name="CD_RATING" value="0.21" />
            <SpecRow label="Downforce" name="ACTIVE_AERO" value="340 KG" />
            <SpecRow label="Frontal Area" name="CROSS_SECTION" value="2.1 M²" />
            <SpecRow label="Cooling" name="THERMAL_DUCTS" value="6 CHANNELS" last />
          </div>
        </div>
      </section>

      <CtaBanner
        title="SEE IT IN"
        accent="MOTION"
        description="Explore the full LUXAR lineup and find the model that matches your driving style."
        primaryHref="/models"
        primaryLabel="VIEW_MODELS"
      />
    </>
  );
}
