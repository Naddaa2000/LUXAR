import type { Metadata } from "next";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import ProductImage from "@/components/ProductImage";
import { PageHeader, CtaBanner } from "@/components/ui";
import { MODELS, STATUS_COLOR } from "@/lib/models";

export const metadata: Metadata = {
  title: "MODELS | LUXAR",
  description: "Explore the LUXAR Series-X, Series-G, and Series-R electric hypercars.",
};

export default function ModelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="model lineup"
        title="CHOOSE YOUR"
        accent="MACHINE"
        description="From the track-ready Series-R to the everyday Series-E — every LUXAR shares the same obsession with performance."
      />

      <section className="reveal py-16 md:py-24 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MODELS.map((m) => (
            <GlassCard
              key={m.id}
              className="p-0 overflow-hidden group min-h-[380px] flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <ProductImage
                  src={m.image}
                  alt={m.title}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="font-mono text-[11px] tracking-widest text-white/60 uppercase bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                    {m.tag}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full border bg-black/40 backdrop-blur-sm ${STATUS_COLOR[m.status]}`}
                  >
                    {m.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary-fixed-dim transition-colors">
                    {m.title}
                  </h3>
                  <span className="font-mono text-sm text-primary-fixed-dim">
                    {m.price}
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-5 flex-grow">
                  {m.body}
                </p>
                <Link
                  href={`/reserve?model=${m.id}`}
                  className="nav-link font-mono text-[13px] tracking-wider text-primary-fixed-dim"
                >
                  RESERVE →
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <CtaBanner
        title="READY TO"
        accent="RESERVE?"
        description="Place a $2,500 refundable deposit to secure your build slot."
        primaryHref="/reserve?model=series-x"
        primaryLabel="RESERVE_NOW"
      />
    </>
  );
}
