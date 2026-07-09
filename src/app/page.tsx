import dynamic from "next/dynamic";
import AboutSection from "@/components/AboutSection";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import NewsletterForm from "@/components/NewsletterForm";
import ProductImage from "@/components/ProductImage";
import { GlowOrbs, SpecRow } from "@/components/ui";
import { IMAGES } from "@/lib/site";

const HeroCore = dynamic(() => import("@/components/HeroCore"));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="reveal relative min-h-dvh flex flex-col items-center justify-center pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <GlowOrbs />
        <div className="speed-lines" />
        <HeroCore />

        <div className="relative z-10 text-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] max-w-4xl mx-auto">
          <div className="readable-block inline-block text-left md:text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse-dot" />
            <span className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase">
              Series-X · Now in production
            </span>
          </div>

          <h1 className="font-display text-[2rem] sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
            THE FUTURE <br />
            <span className="text-neon">OF MOTION</span>
          </h1>

          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Sculpted electric hypercars with zero-compromise performance.
            0–60 in 2.1 seconds. 520 miles of range. Designed for the road
            ahead.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button
              href="/reserve"
              size="lg"
              className="w-full md:w-auto shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              Reserve Yours
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="lg"
              className="w-full md:w-auto"
            >
              Our Story
            </Button>
          </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Bento Grid */}
      <section className="reveal py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
        <div className="mb-16 md:mb-20 text-left">
          <h2 className="font-display text-3xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.1]">
            ENGINEERED FOR <br />
            <span className="text-on-surface-variant">THE ROAD</span>
          </h2>
          <div className="technical-line max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <GlassCard className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between group min-h-[360px] md:min-h-[400px] overflow-hidden relative">
            <div className="absolute inset-0 z-0 opacity-30">
              <ProductImage
                src={IMAGES.heroCar}
                alt="LUXAR hypercar exterior"
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-[1]" />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-primary-fixed-dim text-4xl md:text-5xl font-display font-extrabold">
                ⚡
              </span>
              <span className="font-mono text-on-surface-variant text-sm">
                0–60 in 2.1s
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary-fixed-dim transition-colors">
                INSTANT TORQUE
              </h3>
              <p className="font-body text-base text-on-surface-variant max-w-md">
                Dual-motor all-wheel drive delivers 1,200 horsepower with
                millisecond throttle response. No lag. No compromise. Pure
                electric acceleration.
              </p>
            </div>
          </GlassCard>

          <GlassCard
            tilt={false}
            className="md:col-span-4 overflow-hidden relative group min-h-[280px]"
          >
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
              <ProductImage
                src={IMAGES.nightDrive}
                alt="LUXAR on a night drive"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-end">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                AERODYNAMIC FORM
              </h3>
              <p className="font-mono text-on-surface-variant text-xs uppercase tracking-widest">
                0.21 Cd drag coefficient
              </p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-4 p-8 md:p-10 flex flex-col justify-center items-center text-center group min-h-[280px]">
            <div className="w-20 h-20 rounded-full border border-primary-fixed-dim/20 flex items-center justify-center mb-6 group-hover:border-primary-fixed-dim/60 transition-colors overflow-hidden relative">
              <ProductImage
                src={IMAGES.wheel}
                alt="Carbon fiber wheel detail"
                className="opacity-80"
              />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">
              CARBON CHASSIS
            </h3>
            <p className="font-body text-base text-on-surface-variant">
              Full carbon-fiber monocoque. 40% lighter than steel. Rigid as
              granite.
            </p>
          </GlassCard>

          <GlassCard className="md:col-span-8 p-0 overflow-hidden relative min-h-[280px] group">
            <div className="absolute inset-0 z-0">
              <ProductImage
                src={IMAGES.interior}
                alt="LUXAR minimalist interior cockpit"
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-10" />
            <div className="relative z-20 p-8 md:p-10 h-full flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                COCKPIT INTERIOR
              </h3>
              <p className="font-body text-base text-on-surface-variant max-w-sm">
                A panoramic glass canopy and haptic steering wheel put you at
                the center of every drive. Vegan leather. Ambient lighting.
                Total control.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Performance Specs */}
      <section className="reveal py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] bg-surface-container-lowest/50 backdrop-blur-md">
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] container-max">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                PERFORMANCE
              </h2>
              <p className="font-mono text-on-surface-variant text-sm">
                SERIES-X SPECIFICATIONS
              </p>
            </div>
            <div className="hidden md:block w-1/2 technical-line opacity-20" />
          </div>

          <div className="grid grid-cols-1">
            <SpecRow label="Powertrain" name="DUAL_MOTOR_AWD" value="1,200 HP" />
            <SpecRow label="Acceleration" name="ZERO_TO_SIXTY" value="2.1 SECONDS" />
            <SpecRow label="Range" name="BATTERY_PACK" value="520 MILES" />
            <SpecRow label="Top Speed" name="VELOCITY_MAX" value="218 MPH" last />
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Lead Gen / CTA */}
      <section className="reveal relative py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section-desktop)] overflow-hidden">
        <div className="glow-orb bg-secondary-container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-gutter)] max-w-2xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            READY TO <br /> DRIVE?
          </h2>
          <p className="font-body text-lg text-on-surface-variant mb-12">
            Join the waitlist for the Series-X. Limited production of 500 units
            for the 2026 model year.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
