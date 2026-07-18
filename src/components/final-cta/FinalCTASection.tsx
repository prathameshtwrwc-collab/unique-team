import { motion } from "framer-motion";
import { FinalCTAContent } from "./FinalCTAContent";
import { FinalCTAVisual } from "./FinalCTAVisual";
import { fadeIn, defaultViewport } from "../../lib/animations";

export function FinalCTASection() {
  return (
    <motion.section
      aria-label="Start a Conversation"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #241044 0%, #351664 45%, #4A2384 100%)",
        minHeight: "680px",
      }}
      variants={fadeIn(0, 0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {/* Soft violet radial glow behind image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 78% 48%, rgba(169,138,213,0.28) 0%, rgba(46,21,87,0) 52%)",
        }}
      />

      {/* Faint gold ambient glow near CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-[15%] h-[300px] w-[400px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(214,160,62,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Subtle dot grid */}
      <div aria-hidden className="pointer-events-none absolute left-[8%] top-[12%] opacity-15">
        <svg width="72" height="72">
          <defs>
            <pattern id="cta-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="72" height="72" fill="url(#cta-dots)" />
        </svg>
      </div>

      {/* Faint oversized "U" monogram at 3% opacity */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[42rem] leading-none text-white/[0.03] lg:block"
      >
        U
      </span>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(110px, 9vw, 155px)",
          paddingBottom: "clamp(110px, 9vw, 155px)",
        }}
      >
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          {/* Left: Content (columns 1-6) */}
          <div className="lg:col-span-6">
            <FinalCTAContent />
          </div>

          {/* Right: Visual (columns 7-12) */}
          <div className="lg:col-span-6 lg:col-start-7">
            <FinalCTAVisual />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
