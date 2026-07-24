import { motion } from "framer-motion";
import { aboutData } from "../../data/about";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import {
  defaultViewport,
  headlineViewport,
  fadeUp,
  lineReveal,
  EASE_OUT,
} from "../../lib/animations";

function GoldUnderlineSmall() {
  return (
    <svg
      viewBox="0 0 180 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.1em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="about-underline-gold" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 60 4, 100 3, 174 9"
        stroke="url(#about-underline-gold)"
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

export function AboutContent() {
  return (
    <div className="max-w-[620px]">
      <motion.div variants={fadeUp(0.2, 12, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{aboutData.eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="section-headline mt-4 font-serif text-plum lg:mt-5">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.35)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {aboutData.headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.1em]">
          <motion.span className="block" variants={lineReveal(0.5)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {aboutData.headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: EASE_OUT }}
            >
              {aboutData.headline.lineTwoAccent}
              <GoldUnderlineSmall />
            </motion.span>
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.75, 14, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-5 text-[17px] leading-[1.65] text-ink md:text-[18.5px] lg:mt-6 lg:text-[19.5px]"
      >
        {aboutData.primaryParagraph}
      </motion.p>

      <motion.p
        variants={fadeUp(0.9, 14, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-4 text-[16px] leading-[1.65] text-ink-soft md:text-[17px] lg:mt-5"
      >
        {aboutData.secondaryParagraph}
      </motion.p>

      <motion.div variants={fadeUp(1.05, 12, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mt-6 lg:mt-8">
        <Button href={aboutData.cta.href} variant="primary" className="w-full sm:w-auto">
          {aboutData.cta.label}
        </Button>
      </motion.div>
    </div>
  );
}
