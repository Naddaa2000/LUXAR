"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";
import Button from "./Button";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-[calc(100%-40px)] max-w-[var(--container-max)] z-50">
      <nav
        className={`flex justify-between items-center rounded-full border border-white/10 backdrop-blur-[30px] px-4 md:px-6 py-3 transition-shadow duration-500 ${
          scrolled
            ? "bg-[rgba(8,8,9,0.85)] shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
            : "bg-[rgba(8,8,9,0.7)]"
        }`}
      >
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tighter text-primary-fixed-dim"
        >
          LUXAR
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href)}
              className={`nav-link font-mono text-[13px] tracking-wider transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-primary-fixed-dim font-bold"
                  : "text-on-surface-variant hover:text-primary-fixed"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/reserve" size="sm" className="rounded-full">
            RESERVE_NOW
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-on-surface"
        >
          <span
            className={`block h-[2px] w-5 bg-current transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-current transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[480px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-surface-container-lowest/90 backdrop-blur-[30px] p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-sm tracking-wider px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "text-primary-fixed-dim bg-primary-fixed-dim/10"
                  : "text-on-surface-variant hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/reserve" size="md" className="mt-2 w-full rounded-full">
            RESERVE_NOW
          </Button>
        </div>
      </div>
    </header>
  );
}
