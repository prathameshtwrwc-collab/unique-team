import { motion } from "framer-motion";
import { HeroContent, ScrollCue } from "./HeroContent";
import { HeroServicePanel } from "./HeroServicePanel";
import { fadeIn } from "../../lib/animations";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="UniqueHR introduction"
      className="relative overflow-hidden bg-cream min-h-[60vh] lg:min-h-[calc(100vh-116px)]"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/images/hero_bg.png"
          alt=""
          className="hidden h-full w-full object-cover md:block lg:scale-[1.05]"
          fetchPriority="high"
          variants={fadeIn(0, 0.6)}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div
        className="container-shell relative flex h-full flex-col"
        style={{
          paddingTop: "clamp(32px, 3.5vw, 60px)",
          paddingBottom: "clamp(40px, 4vw, 75px)",
        }}
      >
        <div className="grid min-h-0 flex-1 grid-cols-1 items-start gap-y-8 pt-4 lg:grid-cols-12 lg:gap-x-8 lg:pt-8 lg:mb-20 xl:mb-24">
          <div className="relative z-10 lg:col-span-7">
            <HeroContent />
          </div>
        </div>

        <div className="hidden lg:block">
          <ScrollCue />
        </div>

        <div
          className="absolute z-20 hidden lg:block"
          style={{
            bottom: "clamp(20px, 5.2vh, 60px)",
            right: "clamp(-800px, -52.1vw, 40px)",
          }}
        >
          <HeroServicePanel />
        </div>

        <div className="mt-6 lg:hidden">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
            <span aria-hidden className="h-px w-6 bg-gold" />
            Our Expertise
          </p>
          <HeroServicePanel variant="strip" />
        </div>
      </div>
    </section>
  );
}
