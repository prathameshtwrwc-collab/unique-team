import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { finalCTAData } from "../../data/finalCTA";
import { FinalCTACaption } from "./FinalCTACaption";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";
import { clipReveal, scaleIn, imageReveal, defaultViewport } from "../../lib/animations";

export function FinalCTAVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const yShape = useTransform(scrollYProgress, [0, 1], [0, 14]);

  return (
    <div ref={ref} className="relative h-[520px] w-full lg:h-[620px]">
      {/* Layer 1: Translucent lilac shape behind */}
      <motion.div
        variants={scaleIn(0.3)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        aria-hidden
        className="absolute right-[4%] top-[8%] h-[76%] w-[88%]"
        style={{
          background: "rgba(169,138,213,0.12)",
          borderRadius: "48% 52% 54% 46% / 52% 48% 52% 48%",
          y: reduced ? 0 : yShape,
        }}
      />

      {/* Layer 2: Soft gold edge plane */}
      <motion.div
        variants={scaleIn(0.5)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        aria-hidden
        className="absolute bottom-[16%] left-[2%] h-[22%] w-[24%]"
        style={{
          background: "linear-gradient(135deg, rgba(214,160,62,0.2) 0%, rgba(233,199,127,0.12) 100%)",
          borderRadius: "52% 48% 46% 54% / 48% 52% 48% 52%",
        }}
      />

      {/* Faint oversized ring outline */}
      <motion.div
        variants={scaleIn(0.6)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        aria-hidden
        className="absolute -right-[8%] -top-[6%] h-[280px] w-[280px] rounded-full border border-white/8"
      />

      {/* Layer 3: Main image */}
      <motion.div
        variants={clipReveal(0.7)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="absolute right-[6%] top-[10%] z-10 h-[68%] w-[86%] overflow-hidden rounded-[28px] border-[3px] border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_36px_90px_rgba(0,0,0,0.35)] lg:right-[8%] lg:top-[12%] lg:w-[84%]"
        style={{
          y: reduced ? 0 : yImage,
        }}
      >
        <motion.img
          src={finalCTAData.image.src}
          alt={finalCTAData.image.alt}
          loading="lazy"
          variants={imageReveal(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full w-full object-cover object-[50%_40%]"
        />
      </motion.div>

      {/* Layer 4: Caption panel overlapping lower-left */}
      <div className="absolute bottom-[14%] left-[4%] z-20 lg:left-[6%]">
        <FinalCTACaption />
      </div>
    </div>
  );
}
