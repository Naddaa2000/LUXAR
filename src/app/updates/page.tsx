import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "UPDATES | LUXAR",
  description: "Product updates and release notes for LUXAR vehicles and software.",
};

const logs = [
  {
    version: "Series-X 2026",
    tag: "LAUNCH",
    date: "2026-06-18",
    notes: [
      "Series-X enters production. First deliveries scheduled for Q3 2026.",
      "520-mile EPA range confirmed in independent testing.",
      "Over-the-air v3.2 adds adaptive cruise and lane-centering.",
    ],
  },
  {
    version: "Software v3.1",
    tag: "OTA",
    date: "2026-05-02",
    notes: [
      "Improved regenerative braking calibration.",
      "New ambient lighting themes in the cockpit.",
      "Charging speed optimization for cold weather.",
    ],
  },
  {
    version: "Series-G Reveal",
    tag: "UNVEIL",
    date: "2026-03-11",
    notes: [
      "Grand Tourer Series-G unveiled at Geneva.",
      "Extended 480-mile range with luxury rear lounge.",
      "Reservations open at $249,000.",
    ],
  },
];

const tagColor: Record<string, string> = {
  LAUNCH: "text-primary-fixed-dim border-primary-fixed-dim/40",
  OTA: "text-secondary-fixed-dim border-secondary-fixed-dim/40",
  UNVEIL: "text-outline border-outline/40",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="product updates"
        title="WHAT'S"
        accent="NEW"
        description="Release notes, unveilings, and over-the-air updates for the LUXAR ecosystem."
      />
      <section className="reveal py-12 md:py-20 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="max-w-3xl flex flex-col">
          {logs.map((l) => (
            <div
              key={l.version}
              className="py-10 border-t border-white/5 first:border-t-0"
            >
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="font-display text-2xl font-semibold">
                  {l.version}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full border ${tagColor[l.tag]}`}
                >
                  {l.tag}
                </span>
                <span className="font-mono text-xs text-white/40 ml-auto">
                  {l.date}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {l.notes.map((n) => (
                  <li
                    key={n}
                    className="font-body text-base text-on-surface-variant flex items-start gap-3"
                  >
                    <span className="text-primary-fixed-dim mt-1">▹</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
