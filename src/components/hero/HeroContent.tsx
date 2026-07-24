import { motion } from "framer-motion";
import { heroContent } from "../../data/hero";
import { Eyebrow } from "../ui/Eyebrow";
import { Button } from "../ui/Button";
import {
  fadeUp,
  lineReveal,
  staggerChildren,
  EASE_OUT,
} from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 220 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.06em] left-0 h-[0.14em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="underline-gold" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 11 C 48 4.5, 132 2.5, 214 7.5"
        stroke="url(#underline-gold)"
        strokeWidth="4.6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: EASE_OUT }}
      />
      <motion.path
        d="M32 14.5 C 92 9.5, 158 8.5, 200 12"
        stroke="#D6A03E"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.35, duration: 0.4, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function HeroContent() {
  const { eyebrow, headline, paragraph, primaryCta, secondaryCta } =
    heroContent;

  return (
    <div className="relative z-10 max-w-[700px]">
      <motion.div variants={fadeUp(0.2, 14, 0.45)} initial="hidden" animate="visible">
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>

      <h1 className="hero-headline mt-3 font-serif text-plum lg:mt-4">
        <span className="block pb-[0.08em]">
          <motion.span
            className="block"
            variants={lineReveal(0.35)}
            initial="hidden"
            animate="visible"
          >
            {headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span
            className="block"
            variants={lineReveal(0.5)}
            initial="hidden"
            animate="visible"
          >
            {headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: EASE_OUT }}
            >
              {headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h1>

      <motion.p
        variants={fadeUp(0.8, 14, 0.5)}
        initial="hidden"
        animate="visible"
        className="mt-4 max-w-[600px] text-[17px] leading-[1.65] text-ink md:text-[18.5px] lg:mt-5 lg:text-[19.5px]"
      >
        {paragraph}
      </motion.p>

      <motion.div
        variants={staggerChildren(0.08, 0.9)}
        initial="hidden"
        animate="visible"
        className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-6"
      >
        <motion.div variants={fadeUp(0, 12, 0.45)}>
          <Button href={primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
        </motion.div>
        <motion.div variants={fadeUp(0, 12, 0.45)}>
          <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
            {secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
      className="flex items-center gap-3"
    >
      <motion.span
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(46,21,87,0.15)] bg-white/60 shadow-[0_4px_12px_rgba(46,21,87,0.06)]"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#68616E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l4 4 4-4" />
        </svg>
        <motion.span
          className="absolute left-1/2 top-0 -mt-1 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-gold to-gold-soft"
          animate={{ y: [-4, 24], opacity: [1, 0.3] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.4,
          }}
        />
      </motion.span>
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
        Scroll to explore
      </span>
    </motion.div>
  );
}
