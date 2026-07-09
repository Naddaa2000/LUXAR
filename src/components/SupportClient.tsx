"use client";

import { useEffect, useState } from "react";

type Section = { id: string; title: string; body: string[] };

const SECTIONS: Section[] = [
  {
    id: "charging",
    title: "Charging",
    body: [
      "LUXAR supports Level 2 home charging and DC fast charging up to 350 kW.",
      "Home charger installation is complimentary with every reservation.",
      "Find stations: open the LUXAR app → Charging → Nearby.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    body: [
      "Electric drivetrains require minimal maintenance — no oil changes, no spark plugs.",
      "Schedule service through the LUXAR app or call 1-800-LUXAR-EV.",
      "Annual inspection recommended. First 3 years included with every purchase.",
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    body: [
      "8-year / 120,000-mile battery and drivetrain warranty.",
      "4-year / 50,000-mile comprehensive vehicle warranty.",
      "24/7 roadside assistance included for the first 4 years.",
    ],
  },
  {
    id: "software",
    title: "Software Updates",
    body: [
      "Over-the-air updates deliver new features, performance improvements, and bug fixes.",
      "Updates install automatically overnight when connected to Wi-Fi.",
      "Check version: Settings → About → Software Version.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Phone: 1-800-LUXAR-EV (1-800-589-2738)",
      "Email: support@luxar.com",
      "Live chat: available 24/7 in the LUXAR mobile app.",
    ],
  },
];

export default function SupportClient() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
      <aside className="md:sticky md:top-28 h-max">
        <p className="font-mono text-[11px] tracking-widest uppercase text-white/40 mb-4">
          Topics
        </p>
        <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[13px] tracking-wide px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                active === s.id
                  ? "text-primary-fixed-dim bg-primary-fixed-dim/10"
                  : "text-on-surface-variant hover:bg-white/5"
              }`}
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex flex-col gap-16">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5 text-primary-fixed-dim">
              {s.title}
            </h2>
            <div className="flex flex-col gap-4">
              {s.body.map((line, i) => (
                <p
                  key={i}
                  className="font-body text-base text-on-surface-variant"
                >
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
