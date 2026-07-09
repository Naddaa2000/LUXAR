import type { Metadata } from "next";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import Button from "@/components/Button";
import { PageHeader, SpecRow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "FLEET | LUXAR",
  description:
    "Deploy LUXAR electric vehicles across your corporate fleet with dedicated support and charging infrastructure.",
};

const tiers = [
  {
    name: "STARTER",
    price: "$4,200",
    cadence: "/ vehicle / mo",
    highlight: false,
    features: [
      "Up to 10 vehicles",
      "Standard charging network",
      "Fleet dashboard",
      "Annual maintenance",
    ],
    cta: "GET_STARTED",
    href: "#contact",
  },
  {
    name: "BUSINESS",
    price: "$3,600",
    cadence: "/ vehicle / mo",
    highlight: true,
    features: [
      "Up to 100 vehicles",
      "Priority charging + home install",
      "Real-time telematics",
      "Dedicated account manager",
      "Custom branding options",
    ],
    cta: "START_TRIAL",
    href: "#contact",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    cadence: "",
    highlight: false,
    features: [
      "Unlimited fleet size",
      "On-site charging infrastructure",
      "White-label fleet portal",
      "24/7 priority support",
    ],
    cta: "CONTACT_SALES",
    href: "#contact",
  },
];

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="corporate fleet"
        title="ELECTRIFY YOUR"
        accent="FLEET"
        description="Transition your corporate fleet to electric with LUXAR. Dedicated charging, telematics, and white-glove onboarding."
      />

      <section className="reveal py-8 md:py-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <GlassCard tilt={false} className="overflow-hidden relative min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-0">
            <ProductImage src={IMAGES.fleet} alt="LUXAR corporate fleet" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-lg h-full flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-4xl font-extrabold mb-4">
              ZERO EMISSIONS. <span className="text-neon">MAXIMUM IMPACT.</span>
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              Companies running LUXAR fleets report 60% lower operating costs and
              a measurable boost in brand perception.
            </p>
          </div>
        </GlassCard>
      </section>

      <section className="reveal py-16 md:py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {tiers.map((t) => (
            <GlassCard
              key={t.name}
              tilt={false}
              className={`p-8 flex flex-col ${
                t.highlight
                  ? "border-primary-fixed-dim/60 shadow-[0_0_40px_rgba(0,219,233,0.12)]"
                  : ""
              }`}
            >
              {t.highlight && (
                <span className="self-start mb-4 font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full border border-primary-fixed-dim/40 text-primary-fixed-dim">
                  Most Popular
                </span>
              )}
              <h3 className="font-mono text-sm tracking-widest text-on-surface-variant uppercase mb-4">
                {t.name}
              </h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="font-display text-4xl font-extrabold">
                  {t.price}
                </span>
                <span className="font-mono text-xs text-white/40 mb-2">
                  {t.cadence}
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="font-body text-sm text-on-surface-variant flex items-start gap-3"
                  >
                    <span className="text-primary-fixed-dim mt-0.5">▹</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={t.href}
                variant={t.highlight ? "primary" : "ghost"}
                size="md"
                className="w-full"
              >
                {t.cta}
              </Button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="reveal py-16 md:py-24 bg-surface-container-lowest/50 backdrop-blur-md">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            FLEET_BENEFITS
          </h2>
          <p className="font-mono text-on-surface-variant text-sm mb-12">
            MEASURED RESULTS
          </p>
          <div className="grid grid-cols-1">
            <SpecRow label="Cost Savings" name="OPERATING_COST" value="-60%" />
            <SpecRow label="Uptime" name="FLEET_AVAILABILITY" value="99.7%" />
            <SpecRow label="Charging" name="NETWORK_ACCESS" value="45K STATIONS" />
            <SpecRow label="Support" name="RESPONSE_TIME" value="< 2 HOURS" last />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="reveal py-16 md:py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)]"
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            TALK TO <span className="text-neon">FLEET SALES</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant">
            Tell us about your fleet size and we&apos;ll build a custom
            electrification plan.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
