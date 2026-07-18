import { motion } from "framer-motion";
import { industriesData } from "../../data/industries";
import { Eyebrow } from "../ui/Eyebrow";
import { fadeUp, lineReveal, EASE_OUT, defaultViewport, headlineViewport } from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 180 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.08em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="industries-underline" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 60 4, 110 3, 174 8"
        stroke="url(#industries-underline)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.3, duration: 0.55, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function IndustriesIntro() {
  return (
    <div>
      <motion.div variants={fadeUp(0.2, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{industriesData.eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="industries-headline mt-6 font-serif text-plum lg:mt-7">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.4)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {industriesData.headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span className="block" variants={lineReveal(0.55)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {industriesData.headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE_OUT }}
            >
              {industriesData.headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.8, 16, 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-6 text-[17px] leading-[1.65] text-ink-soft lg:mt-7 lg:text-[18px]"
      >
        {industriesData.supportingCopy}
      </motion.p>
    </div>
  );
}
