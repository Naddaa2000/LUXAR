import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/nav";
import { BRAND } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-surface-container-lowest/80 backdrop-blur-lg py-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)]">
      <div className="container-max flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <Link
            href="/"
            className="font-display text-lg text-on-surface font-extrabold tracking-tighter"
          >
            {BRAND.name}
          </Link>
          <div className="font-mono text-[13px] text-on-surface/60">
            © {new Date().getFullYear()} {BRAND.copyright}. ALL RIGHTS RESERVED.{" "}
            {BRAND.version}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-on-surface/60 font-mono text-[13px] tracking-wider hover:text-primary-fixed-dim transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
