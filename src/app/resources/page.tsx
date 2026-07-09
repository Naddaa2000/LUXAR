import type { Metadata } from "next";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import { PageHeader } from "@/components/ui";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "RESOURCES | LUXAR",
  description: "Guides, specs, and links for LUXAR owners and enthusiasts.",
};

const resources = [
  {
    glyph: "📖",
    title: "OWNER SUPPORT",
    body: "Charging, maintenance, warranty, and software update guides.",
    href: "/support",
    cta: "GET_HELP",
    image: IMAGES.interior,
  },
  {
    glyph: "🚗",
    title: "RESERVE",
    body: "Place a refundable deposit and secure your build slot.",
    href: "/reserve",
    cta: "RESERVE_NOW",
    image: IMAGES.heroCar,
  },
  {
    glyph: "◈",
    title: "MODEL LINEUP",
    body: "Compare Series-X, Series-G, Series-R and upcoming models.",
    href: "/models",
    cta: "VIEW_MODELS",
    image: IMAGES.modelS,
  },
  {
    glyph: "🛡",
    title: "PRIVACY",
    body: "How we handle your data and vehicle telemetry.",
    href: "/privacy",
    cta: "READ_POLICY",
    image: IMAGES.studio,
  },
  {
    glyph: "⟳",
    title: "UPDATES",
    body: "Product launches, OTA releases, and unveilings.",
    href: "/updates",
    cta: "VIEW_UPDATES",
    image: IMAGES.nightDrive,
  },
  {
    glyph: "◲",
    title: "FLEET",
    body: "Electrify your corporate fleet with dedicated support.",
    href: "/fleet",
    cta: "LEARN_MORE",
    image: IMAGES.fleet,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="knowledge base"
        title="ALL"
        accent="RESOURCES"
        description="Everything you need to own, drive, and love your LUXAR."
      />
      <section className="reveal py-12 md:py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {resources.map((r) => (
            <GlassCard
              key={r.title}
              className="p-0 overflow-hidden group min-h-[280px] flex flex-col"
            >
              <div className="relative h-36 overflow-hidden">
                <ProductImage
                  src={r.image}
                  alt={r.title}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-2xl mb-3">{r.glyph}</span>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary-fixed-dim transition-colors">
                  {r.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mb-5 flex-grow">
                  {r.body}
                </p>
                <Link
                  href={r.href}
                  className="nav-link font-mono text-[13px] tracking-wider text-primary-fixed-dim"
                >
                  {r.cta} →
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
