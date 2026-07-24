import { motion } from "framer-motion";
import { processData } from "../../data/process";
import { Eyebrow } from "../ui/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";
import { fadeUp, lineReveal, EASE_OUT, defaultViewport, headlineViewport } from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.08em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="process-underline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 70 4, 130 3, 194 8"
        stroke="url(#process-underline)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.0, duration: 0.5, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function ProcessIntro() {
  return (
    <div className="mx-auto max-w-[680px]">
      <motion.div variants={fadeUp(0.15, 12, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{processData.eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="process-headline mt-5 font-serif text-plum lg:mt-6">
        <span className="block pb-[0.04em]">
          <motion.span className="block" variants={lineReveal(0.3)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {processData.headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.45)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {processData.headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.4, ease: EASE_OUT }}
            >
              {processData.headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.65, 14, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-5 text-[16px] leading-[1.65] text-ink-soft lg:mt-6 lg:text-[17px]"
      >
        {processData.supportingCopy}
      </motion.p>

      <motion.div variants={fadeUp(0.8, 10, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mt-6">
        <a
          href={processData.cta.href}
          className="group inline-flex items-center gap-2 text-[13px] font-semibold text-plum transition-colors duration-300 hover:text-purple"
        >
          <span>{processData.cta.label}</span>
          <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-[4px]" />
        </a>
      </motion.div>
    </div>
  );
}
