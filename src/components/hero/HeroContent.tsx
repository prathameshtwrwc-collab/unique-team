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
      {/* hand-drawn, organic double stroke */}
      <motion.path
        d="M6 11 C 48 4.5, 132 2.5, 214 7.5"
        stroke="url(#underline-gold)"
        strokeWidth="4.6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.5, duration: 0.55, ease: EASE_OUT }}
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
        transition={{ delay: 1.72, duration: 0.45, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function HeroContent() {
  const { eyebrow, headline, paragraph, primaryCta, secondaryCta } =
    heroContent;

  return (
    <div className="relative z-10 max-w-[640px]">
      <motion.div variants={fadeUp(0.3, 14, 0.5)} initial="hidden" animate="visible">
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>

      <h1 className="hero-headline mt-6 font-serif text-plum lg:mt-7">
        <span className="block pb-[0.08em]">
          <motion.span
            className="block"
            variants={lineReveal(0.45)}
            initial="hidden"
            animate="visible"
          >
            {headline.lineOne}
          </motion.span>
        </span>
        <span className="block pb-[0.24em]">
          <motion.span
            className="block"
            variants={lineReveal(0.62)}
            initial="hidden"
            animate="visible"
          >
            {headline.lineTwoStart}{" "}
            <motion.span
              className="relative inline-block italic text-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.5, ease: EASE_OUT }}
            >
              {headline.lineTwoAccent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
      </h1>

      <motion.p
        variants={fadeUp(1.0, 16, 0.6)}
        initial="hidden"
        animate="visible"
        className="mt-7 max-w-[580px] text-[17.5px] leading-[1.65] text-ink md:text-[19px] lg:mt-8 lg:text-[20px]"
      >
        {paragraph}
      </motion.p>

      <motion.div
        variants={staggerChildren(0.1, 1.15)}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center lg:mt-9"
      >
        <motion.div variants={fadeUp(0, 14, 0.55)}>
          <Button href={primaryCta.href} variant="primary" className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
        </motion.div>
        <motion.div variants={fadeUp(0, 14, 0.55)}>
          <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
            {secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>

    </div>
  );
}

/** Desktop scroll cue — composed next to the service panel in HeroSection. */
export function ScrollCue() {
  return (
    <motion.div
      variants={fadeUp(1.65, 10, 0.5)}
      initial="hidden"
      animate="visible"
      aria-hidden
      className="flex items-center gap-2.5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(46,21,87,0.18)]">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#68616E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l4 4 4-4" />
        </svg>
        <span className="absolute left-1/2 top-0 -mt-1 h-3 w-px -translate-x-1/2 bg-gold">
          <motion.span
            className="absolute h-4 w-px bg-gold"
            animate={{ y: [-2, 22] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.6,
            }}
          />
        </span>
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">
        Scroll to explore
      </span>
    </motion.div>
  );
}
