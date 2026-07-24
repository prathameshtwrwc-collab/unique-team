import { motion } from "framer-motion";
import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
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
        transition={{ delay: 1.1, duration: 0.5, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function WhyUniqueHRContent() {
  return (
    <div className="max-w-[640px]">
      <motion.div variants={fadeUp(0.2, 12, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{whyUniqueHRData.eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="why-headline mt-5 font-serif text-plum lg:mt-6">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.35)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {whyUniqueHRData.headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span className="block" variants={lineReveal(0.5)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {whyUniqueHRData.headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: EASE_OUT }}
            >
              {whyUniqueHRData.headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.75, 14, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-5 text-[16px] leading-[1.65] text-ink-soft lg:mt-6 lg:text-[17px]"
      >
        {whyUniqueHRData.supportingCopy}
      </motion.p>

      <motion.div
        variants={fadeUp(0.95, 12, 0.45)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-6 lg:mt-8"
      >
        <Button href={whyUniqueHRData.cta.href} variant="primary">
          {whyUniqueHRData.cta.label}
        </Button>
      </motion.div>
    </div>
  );
}
