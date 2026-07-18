import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { WhyUniqueHRQuote } from "./WhyUniqueHRQuote";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";
import { clipReveal, scaleIn, defaultViewport, imageReveal } from "../../lib/animations";

export function WhyUniqueHRVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const yShape = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <div ref={ref} className="relative h-[640px] w-full sm:h-[700px] lg:h-[720px]">
      {/* Layer 1: Large soft-lilac background shape (softer, more organic) */}
      <motion.div
        variants={scaleIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute left-[-8%] top-[4%] h-[88%] w-[96%] opacity-[0.22]"
        style={{
          background: "linear-gradient(145deg, rgba(233,223,243,0.6) 0%, rgba(243,237,248,0.4) 100%)",
          borderRadius: "58% 42% 50% 50% / 48% 52% 48% 52%",
          y: reduced ? 0 : yShape,
        }}
      />

      {/* Layer 2: Muted gold semi-transparent form */}
      <motion.div
        variants={scaleIn(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute bottom-[8%] right-[4%] h-[28%] w-[32%]"
        style={{
          background: "linear-gradient(135deg, rgba(214,160,62,0.18) 0%, rgba(233,199,127,0.12) 100%)",
          borderRadius: "44% 56% 52% 48% / 48% 52% 48% 52%",
        }}
      />

      {/* Layer 3: Lead professional image (slightly larger) */}
      <motion.div
        variants={clipReveal(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute left-[5%] top-[6%] z-10 h-[78%] w-[76%] overflow-hidden shadow-[0_32px_80px_rgba(46,21,87,0.22)] lg:left-[7%] lg:h-[82%] lg:w-[72%]"
        style={{
          y: reduced ? 0 : yImage,
          borderRadius: "52% 48% 44% 56% / 58% 54% 46% 42%",
        }}
      >
        <motion.img
          src={whyUniqueHRData.image.src}
          alt={whyUniqueHRData.image.alt}
          loading="lazy"
          variants={imageReveal(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full w-full object-cover object-[40%_25%]"
        />
      </motion.div>

      {/* Layer 4: Subtle dark-plum framing panel (further reduced visibility) */}
      <motion.div
        variants={scaleIn(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute right-[8%] top-[12%] z-5 h-[24%] w-[28%] rounded-[24px] bg-plum/[0.06]"
      />

      {/* Layer 5: Quote panel overlapping lower-right (moved further up) */}
      <div className="absolute bottom-[12%] right-[4%] z-20 lg:bottom-[10%] lg:right-[6%]">
        <WhyUniqueHRQuote />
      </div>
    </div>
  );
}
