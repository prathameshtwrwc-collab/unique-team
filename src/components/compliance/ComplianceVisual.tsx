import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { complianceData } from "../../data/compliance";
import { ComplianceTrustPanel } from "./ComplianceTrustPanel";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";
import { clipReveal, scaleIn, defaultViewport, imageReveal } from "../../lib/animations";

export function ComplianceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const yShape = useTransform(scrollYProgress, [0, 1], [0, 16]);

  return (
    <div ref={ref} className="relative h-[620px] w-full lg:h-[700px]">
      {/* Layer 1: Pale lilac organic shape */}
      <motion.div
        variants={scaleIn(0.25)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute right-[-4%] top-[6%] h-[84%] w-[92%]"
        style={{
          background: "linear-gradient(145deg, rgba(233,223,243,0.5) 0%, rgba(243,237,248,0.35) 100%)",
          borderRadius: "54% 46% 52% 48% / 46% 52% 48% 54%",
          y: reduced ? 0 : yShape,
        }}
      />

      {/* Layer 2: Soft gold translucent plane */}
      <motion.div
        variants={scaleIn(0.45)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        aria-hidden
        className="absolute bottom-[12%] left-[8%] h-[24%] w-[28%]"
        style={{
          background: "linear-gradient(135deg, rgba(214,160,62,0.15) 0%, rgba(233,199,127,0.10) 100%)",
          borderRadius: "46% 54% 48% 52% / 52% 48% 52% 48%",
        }}
      />

      {/* Layer 3: Main image */}
      <motion.div
        variants={clipReveal(0.55)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute right-[6%] top-[8%] z-10 h-[72%] w-[74%] overflow-hidden shadow-[0_28px_70px_rgba(46,21,87,0.2)] lg:right-[8%] lg:h-[76%] lg:w-[76%]"
        style={{
          y: reduced ? 0 : yImage,
          borderRadius: "50% 52% 46% 54% / 56% 52% 48% 44%",
        }}
      >
        <motion.img
          src={complianceData.image.src}
          alt={complianceData.image.alt}
          loading="lazy"
          variants={imageReveal(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full w-full object-cover object-[45%_30%]"
        />
      </motion.div>

      {/* Layer 4: Trust panel overlapping lower-left */}
      <div className="absolute bottom-[6%] left-[2%] z-20 lg:left-[6%]">
        <ComplianceTrustPanel />
      </div>
    </div>
  );
}
