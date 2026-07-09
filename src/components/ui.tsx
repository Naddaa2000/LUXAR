import Link from "next/link";

export function GlowOrbs() {
  return (
    <>
      <div className="glow-orb bg-primary-fixed-dim top-[-10%] left-[-10%]" />
      <div className="glow-orb bg-secondary-fixed-dim bottom-[-10%] right-[-10%]" />
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="reveal pt-32 md:pt-48 pb-4 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)]">
      <div className="container-max readable-block">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse-dot shrink-0" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-on-surface-variant uppercase">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
          {title}{" "}
          {accent && <span className="text-neon">{accent}</span>}
        </h1>
        {description && (
          <p className="font-body text-lg text-on-surface-variant max-w-2xl readable-prose">
            {description}
          </p>
        )}
        <div className="technical-line max-w-xs mt-8" />
      </div>
    </div>
  );
}

export function SectionTitle({
  title,
  accent,
  className = "",
}: {
  title: string;
  accent?: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] ${className}`}
    >
      {title}
      {accent && (
        <>
          {" "}
          <span className="text-on-surface-variant">{accent}</span>
        </>
      )}
    </h2>
  );
}

export function SpecRow({
  label,
  name,
  value,
  last = false,
}: {
  label: string;
  name: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`py-6 md:py-10 border-t border-white/5 ${
        last ? "border-b" : ""
      } flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 group`}
    >
      <div className="mb-4 md:mb-0">
        <p className="font-mono text-white/40 uppercase tracking-tight text-xs mb-1">
          {label}
        </p>
        <h4 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-primary-fixed-dim transition-colors">
          {name}
        </h4>
      </div>
      <div className="text-left md:text-right">
        <p className="font-mono text-primary-fixed-dim text-base sm:text-lg md:text-2xl break-words">
          {value}
        </p>
      </div>
    </div>
  );
}

export function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-primary-fixed-dim/20 text-primary-fixed-dim">
      {children}
    </span>
  );
}

export function CtaBanner({
  title,
  accent,
  description,
  primaryHref,
  primaryLabel,
}: {
  title: string;
  accent: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="reveal relative py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] overflow-hidden">
      <div className="glow-orb bg-secondary-container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">
          {title} <span className="text-neon">{accent}</span>
        </h2>
        <p className="font-body text-lg text-on-surface-variant mb-10">
          {description}
        </p>
        <Link
          href={primaryHref}
          className="btn-hover inline-flex items-center justify-center bg-primary-fixed-dim text-on-primary px-10 py-4 rounded-xl font-mono text-sm font-bold tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
        >
          {primaryLabel}
        </Link>
      </div>
    </section>
  );
}
