import { motion } from "framer-motion";
import { finalCTAData } from "../../data/finalCTA";
import { MailIcon } from "../ui/icons";
import { fadeUp, lineReveal, EASE_OUT, defaultViewport, headlineViewport } from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 180 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.1em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="cta-underline" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E9C77F" />
          <stop offset="1" stopColor="#D6A03E" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 60 4, 110 3, 174 8"
        stroke="url(#cta-underline)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.25, duration: 0.55, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function FinalCTAContent() {
  const { eyebrow, headline, supportingCopy, primaryCta, secondaryCta, candidateLink, brandLine } = finalCTAData;

  return (
    <div className="max-w-[620px]">
      {/* Eyebrow with gold line */}
      <motion.div variants={fadeUp(0.3, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport} className="flex items-center gap-3">
        <span aria-hidden className="h-px w-9 bg-gradient-to-r from-gold-soft to-gold" />
        <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-soft lg:text-[13px]">
          {eyebrow}
        </span>
      </motion.div>

      {/* Headline */}
      <h2 className="mt-7 font-serif text-[clamp(4rem,5.8vw,6.8rem)] leading-[0.94] tracking-[-0.035em] text-white lg:mt-8">
        <span className="block pb-[0.06em]">
          <motion.span className="block" variants={lineReveal(0.45)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {headline.partOne}{" "}
            <motion.span
              className="relative inline-block italic text-gold-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: EASE_OUT }}
            >
              {headline.accent}
              <GoldUnderline />
            </motion.span>
          </motion.span>
        </span>
        <span className="block pb-[0.08em]">
          <motion.span className="block" variants={lineReveal(0.6)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
            {headline.partTwo}
          </motion.span>
        </span>
      </h2>

      {/* Supporting copy */}
      <motion.p
        variants={fadeUp(0.9, 16, 0.6)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="mt-8 max-w-[540px] text-[18px] leading-[1.65] text-white/85 lg:text-[20px]"
      >
        {supportingCopy}
      </motion.p>

      {/* CTA row */}
      <motion.div
        variants={fadeUp(1.1, 14, 0.55)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
      >
        <a
          href={primaryCta.href}
          className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-[14px] bg-gold px-7 text-[15px] font-semibold text-plum shadow-[0_16px_40px_rgba(214,160,62,0.35)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-gold-soft hover:shadow-[0_18px_44px_rgba(214,160,62,0.4)] active:scale-[0.98] sm:w-auto"
        >
          <span>{primaryCta.label}</span>
          <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[5px]">
            <path d="M2.8 9h11.6" />
            <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
          </svg>
        </a>

        <a
          href={secondaryCta.href}
          className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-[14px] border border-white/38 bg-transparent px-7 text-[15px] font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/8 sm:w-auto"
        >
          <MailIcon className="transition-transform duration-300 group-hover:translate-x-[2px]" />
          <span>{secondaryCta.label}</span>
        </a>
      </motion.div>

      {/* Candidate link */}
      <motion.div
        variants={fadeUp(1.3, 14, 0.55)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="mt-7 flex flex-col gap-2 lg:mt-8"
      >
        <p className="text-[14px] text-white/75">{candidateLink.text}</p>
        <a
          href={candidateLink.href}
          className="group relative inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-white underline-offset-4 transition-colors duration-300 hover:text-gold-soft"
        >
          <span>{candidateLink.label}</span>
          <svg viewBox="0 0 18 18" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[4px]">
            <path d="M2.8 9h11.6" />
            <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
          </svg>
          <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
      </motion.div>

      {/* Brand line */}
      <motion.p
        variants={fadeUp(1.5, 12, 0.55)}
        initial="hidden"
        whileInView="visible" viewport={defaultViewport}
        className="mt-6 text-[13px] font-medium text-white/70 lg:mt-7"
      >
        {brandLine}
      </motion.p>
    </div>
  );
}
