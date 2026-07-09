import type { Metadata } from "next";
import { Suspense } from "react";
import ReserveClient from "@/components/ReserveClient";
import { PageHeader, SpecRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "RESERVE | LUXAR",
  description: "Reserve your LUXAR with a refundable deposit.",
};

function ReserveFallback() {
  return (
    <div className="max-w-2xl mx-auto animate-pulse">
      <div className="rounded-2xl bg-white/5 min-h-[360px] mb-8" />
      <div className="rounded-2xl bg-white/5 min-h-[320px]" />
    </div>
  );
}

export default function ReservePage() {
  return (
    <>
      <PageHeader
        eyebrow="limited production"
        title="RESERVE YOUR"
        accent="LUXAR"
        description="Select your model and place a $2,500 refundable deposit. Build slots are allocated in order of reservation."
      />

      <section className="reveal py-8 md:py-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)]">
        <Suspense fallback={<ReserveFallback />}>
          <ReserveClient />
        </Suspense>
      </section>

      <section className="reveal py-16 md:py-24 bg-surface-container-lowest/50 backdrop-blur-md">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            WHAT&apos;S INCLUDED
          </h2>
          <p className="font-mono text-on-surface-variant text-sm mb-12">
            EVERY RESERVATION
          </p>
          <div className="grid grid-cols-1">
            <SpecRow label="Deposit" name="REFUNDABLE" value="$2,500" />
            <SpecRow label="Delivery" name="WHITE_GLOVE" value="INCLUDED" />
            <SpecRow label="Charging" name="HOME_INSTALL" value="COMPLIMENTARY" />
            <SpecRow label="Warranty" name="COVERAGE" value="8 YEARS" last />
          </div>
        </div>
      </section>
    </>
  );
}
