import { motion } from "framer-motion";
import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import { WhyUniqueHRBenefits } from "./WhyUniqueHRBenefits";
import { fadeUp, lineReveal, EASE_OUT, defaultViewport, headlineViewport } from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 160 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.08em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="why-underline" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 50 4, 90 3, 154 8"
        stroke="url(#why-underline)"
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 0.55, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function WhyUniqueHRContent() {
  return (
    <div className="max-w-[620px]">
      <motion.div variants={fadeUp(0.3, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{whyUniqueHRData.eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="why-headline mt-6 font-serif text-plum lg:mt-7">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.45)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {whyUniqueHRData.headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span className="block" variants={lineReveal(0.6)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {whyUniqueHRData.headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5, ease: EASE_OUT }}
            >
              {whyUniqueHRData.headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.9, 16, 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-7 text-[17px] leading-[1.65] text-ink-soft lg:mt-8 lg:text-[18px]"
      >
        {whyUniqueHRData.supportingCopy}
      </motion.p>

      <div className="mt-9 lg:mt-11">
        <WhyUniqueHRBenefits />
      </div>

      <motion.div
        variants={fadeUp(1.8, 14, 0.55)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-6 lg:mt-7"
      >
        <Button href={whyUniqueHRData.cta.href} variant="primary">
          {whyUniqueHRData.cta.label}
        </Button>
      </motion.div>
    </div>
  );
}
