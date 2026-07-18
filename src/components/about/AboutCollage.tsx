import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AboutImageLabel } from "./AboutImageLabel";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";
import { defaultViewport, scaleIn, imageReveal } from "../../lib/animations";

function DotGridSmall({ className }: { className?: string }) {
  return (
    <svg width="72" height="72" aria-hidden className={className}>
      <defs>
        <pattern id="about-dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
        </pattern>
      </defs>
      <rect width="72" height="72" fill="url(#about-dots)" opacity="0.28" />
    </svg>
  );
}

export function AboutCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <div ref={ref} className="relative h-[560px] w-full overflow-hidden sm:h-[640px] lg:h-[720px]">
      {/* Large pale lilac organic shape behind — calmer, lower opacity */}
      <motion.div
        variants={scaleIn(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute left-[-6%] top-[8%] h-[80%] w-[92%] md:left-[-10%] md:top-[6%] md:h-[82%] md:w-[88%]"
        style={{
          background: "linear-gradient(145deg, rgba(233,223,243,0.6) 0%, rgba(243,237,248,0.42) 100%)",
          borderRadius: "58% 42% 46% 54% / 48% 52% 48% 52%",
        }}
      />

      {/* Smaller translucent violet shape offset — softer */}
      <motion.div
        variants={scaleIn(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute right-[4%] top-[24%] hidden h-[34%] w-[38%] md:block"
        style={{
          background: "linear-gradient(145deg, rgba(111,60,195,0.18) 0%, rgba(169,138,213,0.18) 100%)",
          borderRadius: "42% 58% 52% 48% / 56% 44% 56% 44%",
        }}
      />

      {/* Dot grid */}
      <motion.div
        variants={scaleIn(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute left-[8%] top-[2%] hidden md:block"
      >
        <DotGridSmall />
      </motion.div>

      {/* Main image (consultation) — largest */}
      <motion.div
        variants={scaleIn(0.55)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute left-[4%] top-[10%] z-10 h-[62%] w-[68%] overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(46,21,87,0.18)] sm:left-[6%] sm:top-[8%] lg:left-[8%] lg:h-[68%] lg:w-[60%]"
        style={{ y: reduced ? 0 : yMain, borderRadius: "48% 52% 42% 58% / 56% 54% 46% 44%" }}
      >
        <motion.img
          src="/images/about-main.jpg"
          alt="HR consultant and professional discussing growth and workforce strategy"
          fetchPriority="high"
          variants={imageReveal(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full w-full object-cover object-[30%_20%]"
        />
      </motion.div>

      {/* Secondary image 1: interview (lower-right overlap) */}
      <motion.div
        variants={scaleIn(0.75)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        whileHover={{ y: -4 }}
        className="absolute right-[2%] bottom-[16%] z-20 hidden h-[28%] w-[44%] overflow-hidden rounded-[22px] border-[3px] border-white shadow-[0_20px_60px_rgba(46,21,87,0.16)] md:block lg:right-[2%]"
        style={{ y: reduced ? 0 : yBack }}
      >
        <img
          src="/images/about-interview.jpg"
          alt="Interview conversation showing careful screening and selection"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Secondary image 2: workforce/onboarding (lower-left) — smallest, more spacing from interview image */}
      <motion.div
        variants={scaleIn(0.85)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        whileHover={{ y: -4 }}
        className="absolute left-[4%] bottom-[2%] z-20 h-[22%] w-[40%] overflow-hidden rounded-[22px] border-[3px] border-white shadow-[0_20px_60px_rgba(46,21,87,0.16)] sm:left-[6%] lg:h-[26%] lg:w-[42%]"
        style={{ borderRadius: "64px 28px 28px 28px" }}
      >
        <img
          src="/images/about-workforce.jpg"
          alt="Team collaboration on workforce onboarding and operational support"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Label: aligned to upper-right edge of main image, no face overlap */}
      <motion.div
        variants={scaleIn(1.0)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute left-[62%] top-[13%] z-30 hidden md:block lg:left-[58%]"
      >
        <AboutImageLabel text="RIGHT PEOPLE." sub="REAL IMPACT." />
      </motion.div>

      {/* Label: positioned between the two lower images, slightly narrower, horizontal */}
      <motion.div
        variants={scaleIn(1.1)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute left-[47%] bottom-[20%] z-30 hidden w-[156px] md:block lg:left-[46%]"
      >
        <AboutImageLabel text="READY FROM DAY ONE" />
      </motion.div>
    </div>
  );
}
