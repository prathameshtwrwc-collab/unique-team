import { motion } from "framer-motion";
import { contactData } from "../../data/contact";
import { Eyebrow } from "../ui/Eyebrow";
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
        <linearGradient id="contact-underline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 70 4, 130 3, 194 8"
        stroke="url(#contact-underline)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 0.5, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function ContactIntro() {
  const { eyebrow, headline, supportingCopy } = contactData;

  return (
    <div className="max-w-[720px]">
      <motion.div variants={fadeUp(0.15, 12, 0.45)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>

      <h2 className="mt-5 font-serif text-[clamp(2.6rem,4.5vw,4rem)] leading-[1.04] tracking-[-0.015em] text-plum lg:mt-6">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.3)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span
            className="relative inline-block italic text-purple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: EASE_OUT }}
          >
            {headline.lineTwoAccent}
            <GoldUnderline />
          </motion.span>
        </span>
      </h2>

      <motion.p
        variants={fadeUp(0.6, 14, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-5 text-[16px] leading-[1.65] text-ink-soft lg:mt-6 lg:text-[17px]"
      >
        {supportingCopy}
      </motion.p>
    </div>
  );
}
