import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "PRIVACY | LUXAR",
  description: "How LUXAR handles your personal data and vehicle telemetry.",
};

const sections = [
  {
    h: "01 · DATA WE COLLECT",
    p: "We collect information you provide (name, email, payment details) and vehicle telemetry (location, driving patterns, battery health) to improve your experience and maintain your vehicle.",
  },
  {
    h: "02 · HOW WE USE IT",
    p: "Your data powers over-the-air updates, predictive maintenance alerts, and charging optimization. We never sell your personal data to third parties.",
  },
  {
    h: "03 · VEHICLE TELEMETRY",
    p: "Telemetry is encrypted end-to-end. You can disable non-essential data collection in Settings → Privacy. Safety-critical telemetry cannot be disabled.",
  },
  {
    h: "04 · YOUR RIGHTS",
    p: "You may request a full export or deletion of your personal data at any time via support@luxar.com. Fleet customers have additional controls via the fleet portal.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="privacy policy"
        title="YOUR DATA."
        accent="YOUR CONTROL."
        description="Transparency is a core LUXAR value. Here is exactly how we handle your information."
      />
      <section className="reveal py-12 md:py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="max-w-3xl flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-mono text-sm tracking-widest text-primary-fixed-dim uppercase mb-3">
                {s.h}
              </h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant">
                {s.p}
              </p>
            </div>
          ))}
          <p className="font-mono text-xs text-white/30 tracking-widest uppercase pt-6 border-t border-white/5">
            Last updated · 2026-Q2 · Series-X
          </p>
        </div>
      </section>
    </>
  );
}
