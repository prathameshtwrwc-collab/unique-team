import { motion } from "framer-motion";
import { Eyebrow } from "../ui/Eyebrow";
import { ArrowRightIcon } from "../ui/icons";
import { fadeUp, lineReveal, EASE_OUT, defaultViewport, headlineViewport } from "../../lib/animations";

function GoldUnderline() {
  return (
    <svg
      viewBox="0 0 220 16"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute -bottom-[0.08em] left-0 h-[0.12em] w-full overflow-visible"
    >
      <defs>
        <linearGradient id="services-underline" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M6 10 C 60 4, 120 3, 214 8"
        stroke="url(#services-underline)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.4, duration: 0.55, ease: EASE_OUT }}
      />
    </svg>
  );
}

export function ServicesIntro() {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Left: Eyebrow + Headline (columns 1-7) */}
      <div className="lg:col-span-7">
        <motion.div variants={fadeUp(0.2, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <Eyebrow>What We Do</Eyebrow>
        </motion.div>

        <h2 className="hero-headline mt-6 font-serif text-plum lg:mt-7">
          <span className="block pb-[0.06em]">
            <motion.span className="block" variants={lineReveal(0.35)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
              Workforce solutions
            </motion.span>
          </span>
          <span className="block pb-[0.08em]">
            <motion.span className="block" variants={lineReveal(0.5)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
              built around{" "}
              <motion.span
                className="relative inline-block italic text-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: EASE_OUT }}
              >
                your business.
                <GoldUnderline />
              </motion.span>
            </motion.span>
          </span>
        </h2>
      </div>

      {/* Right: Supporting copy + View all link (columns 9-12) */}
      <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9">
        <motion.p
          variants={fadeUp(0.6, 16, 0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-[17px] leading-[1.65] text-ink-soft lg:text-[18px]"
        >
          Practical HR support for hiring, managing and developing the people behind your operations.
        </motion.p>

        <motion.div variants={fadeUp(0.75, 14, 0.55)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-plum transition-colors duration-300 hover:text-purple"
          >
            <span>View all services</span>
            <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-[4px]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
