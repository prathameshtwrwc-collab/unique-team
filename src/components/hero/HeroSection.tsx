import { motion } from "framer-motion";
import { HeroContent, ScrollCue } from "./HeroContent";
import { HeroCollage } from "./HeroCollage";
import { HeroServicePanel } from "./HeroServicePanel";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="UniqueHR introduction"
      className="relative overflow-hidden bg-cream"
      style={{ minHeight: "calc(100vh - 116px)" }}
    >
      {/* ---- background details ---- */}
      {/* radial lilac glow behind right collage */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(169,138,213,0.18) 0%, rgba(251,248,243,0) 55%)",
        }}
      />
      {/* faint oversized U monogram */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-[46%] select-none font-serif text-[42rem] leading-none text-plum/[0.025] lg:block"
      >
        U
      </span>
      {/* warm cream band along the bottom for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-2/80 to-transparent"
      />

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(70px, 7vw, 110px)",
          paddingBottom: "clamp(80px, 8vw, 130px)",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-12 lg:gap-x-6">
          {/* left content — columns 1–6 */}
          <div className="relative z-10 lg:col-span-6">
            <HeroContent />

            {/* scroll cue + service panel band (desktop only) */}
            <div className="mt-8 hidden items-end justify-between lg:flex">
              <ScrollCue />
              {/* panel deliberately overlaps the lower-left edge of the collage */}
              <motion.div
                variants={fadeUp(1.4, 18, 0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="relative z-30 -mb-3 -mr-14 xl:-mr-20"
              >
                <HeroServicePanel />
              </motion.div>
            </div>
          </div>

          {/* right visual — columns 6–12, allowed to overlap slightly */}
          <div className="relative lg:col-span-6 lg:-ml-8 xl:-ml-14">
            <HeroCollage />
          </div>
        </div>

        {/* mobile / tablet service strip */}
        <motion.div
          variants={fadeUp(1.4, 16, 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 lg:hidden"
        >
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
            <span aria-hidden className="h-px w-6 bg-gold" />
            Our Expertise
          </p>
          <HeroServicePanel variant="strip" />
        </motion.div>
      </div>
    </section>
  );
}
