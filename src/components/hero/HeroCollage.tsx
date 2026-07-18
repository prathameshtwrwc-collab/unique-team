import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImages, infoCards } from "../../data/hero";
import { HeroInfoCard } from "./HeroInfoCard";
import { GoldTrajectory } from "./GoldTrajectory";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";
import { clipReveal, scaleIn, fadeUp } from "../../lib/animations";

function DotGrid({ id, className }: { id: string; className?: string }) {
  return (
    <svg width="96" height="72" aria-hidden className={className}>
      <defs>
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
        </pattern>
      </defs>
      <rect width="96" height="72" fill={`url(#${id})`} opacity="0.5" />
    </svg>
  );
}

const PURPLE_SHAPE =
  "linear-gradient(145deg, #4A218E 0%, #6F3CC3 50%, #A98AD5 100%)";
const LILAC_SHAPE =
  "linear-gradient(145deg, rgba(233,223,243,0.95) 0%, rgba(243,237,248,0.45) 100%)";
const PURPLE_REAR_SHAPE =
  "linear-gradient(145deg, rgba(169,138,213,0.55) 0%, rgba(111,60,195,0.35) 100%)";

export function HeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLead = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 26]);
  const yCards = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const [talent, support, compliance] = infoCards;

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-2 h-[480px] w-full max-w-[520px] sm:h-[560px] lg:mt-0 lg:h-[640px] lg:max-w-none"
    >
      {/* 0 — soft purple rear shape (adds depth behind the lead) */}
      <motion.div
        variants={scaleIn(0.45)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute left-[2%] top-[4%] h-[82%] w-[74%] -rotate-2"
        style={{
          background: PURPLE_REAR_SHAPE,
          borderRadius: "54% 46% 42% 58% / 46% 54% 46% 54%",
        }}
      />
      {/* 1 — soft lilac echo panel, back-most */}
      <motion.div
        variants={scaleIn(0.5)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute left-[1%] top-[12%] h-[74%] w-[72%] -rotate-3"
        style={{
          background: LILAC_SHAPE,
          borderRadius: "44% 56% 52% 48% / 56% 48% 52% 44%",
        }}
      />

      {/* 2 — workplace image, upper right (brighter) */}
      <motion.div
        variants={scaleIn(0.8)}
        initial="hidden"
        animate="visible"
        aria-hidden={false}
        className="absolute right-0 top-0 hidden h-[34%] w-[44%] overflow-hidden md:block"
        style={{
          y: reduced ? 0 : yBack,
          borderRadius: "56% 44% 42% 58% / 48% 60% 40% 52%",
        }}
      >
        <img
          src={heroImages.laptop.src}
          alt={heroImages.laptop.alt}
          loading="lazy"
          className="h-full w-full object-cover brightness-[1.18] contrast-[1.08]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#2E1557]/25 mix-blend-multiply"
        />
      </motion.div>

      {/* translucent lilac accent, right side */}
      <motion.div
        variants={scaleIn(0.95)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute right-[6%] top-[30%] hidden h-[16%] w-[22%] rounded-[26px] bg-lilac/60 md:block"
      />

      {/* dot grids (two, restrained) */}
      <motion.div
        variants={scaleIn(1.1)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute left-[4%] top-[2%]"
      >
        <DotGrid id="dots-a" />
      </motion.div>
      <motion.div
        variants={scaleIn(1.2)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute bottom-[16%] right-[2%] hidden md:block"
      >
        <DotGrid id="dots-b" className="opacity-70" />
      </motion.div>

      {/* 3 — lead portrait inside organic purple arch (z-index raised) */}
      <motion.div
        variants={clipReveal(0.55)}
        initial="hidden"
        animate="visible"
        className="absolute left-1/2 top-[2%] z-10 h-[86%] w-[88%] -translate-x-1/2 overflow-hidden shadow-[0_30px_80px_rgba(46,21,87,0.28)] sm:w-[72%] lg:left-[16%] lg:w-[62%] lg:translate-x-0"
        style={{
          y: reduced ? 0 : yLead,
          background: PURPLE_SHAPE,
          borderRadius: "52% 48% 44% 56% / 56% 60% 40% 44%",
        }}
      >
        <img
          src={heroImages.lead.src}
          alt={heroImages.lead.alt}
          fetchPriority="high"
          className="h-full w-full object-cover object-[50%_18%]"
        />
        {/* subtle grade to blend with the shape gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(200deg,rgba(169,138,213,0.12)_0%,rgba(46,21,87,0.18)_100%)] mix-blend-multiply"
        />
      </motion.div>

      {/* 4 — lower-right meeting image (moved up/right, less height) */}
      <motion.div
        variants={scaleIn(1.0)}
        initial="hidden"
        animate="visible"
        className="absolute -right-[1%] bottom-[14%] z-5 hidden h-[22%] w-[34%] overflow-hidden rounded-[26px] border-4 border-cream shadow-[0_20px_60px_rgba(46,21,87,0.2)] md:block"
      >
        <img
          src={heroImages.meeting.src}
          alt={heroImages.meeting.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* 5 — lower-left collaboration image (moved up/right) */}
      <motion.div
        variants={scaleIn(1.1)}
        initial="hidden"
        animate="visible"
        className="absolute -left-[1%] bottom-[8%] z-5 hidden h-[18%] w-[38%] overflow-hidden border-4 border-cream shadow-[0_20px_60px_rgba(46,21,87,0.2)] sm:h-[20%] sm:w-[34%]"
        style={{ borderRadius: "64px 26px 26px 64px" }}
      >
        <img
          src={heroImages.collab.src}
          alt={heroImages.collab.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* small gold accent badge on the arch edge */}
      <motion.div
        variants={scaleIn(1.35)}
        initial="hidden"
        animate="visible"
        aria-hidden
        className="absolute right-[24%] top-[6%] z-20 hidden h-11 w-11 items-center justify-center rounded-full shadow-[0_10px_24px_rgba(214,160,62,0.4)] md:flex"
        style={{ background: "linear-gradient(90deg,#D6A03E 0%,#E9C77F 100%)" }}
      >
        <svg viewBox="0 0 16 16" width="14" height="14" fill="#2E1557">
          <path d="M8 1.2 9.4 6l4.8 1.5L9.4 9 8 13.8 6.6 9 1.8 7.5 6.6 6 8 1.2Z" />
        </svg>
      </motion.div>

      {/* 6 — gold trajectory line */}
      <GoldTrajectory className="pointer-events-none absolute inset-0 z-30 h-full w-full" />

      {/* 7 — floating information cards */}
      <motion.div
        variants={fadeUp(1.5, 14, 0.55)}
        initial="hidden"
        animate="visible"
        className="absolute left-[2%] top-[12%] z-40 w-[196px] sm:left-[4%] lg:left-[6%]"
        style={{ y: reduced ? 0 : yCards }}
      >
        <HeroInfoCard card={talent} />
      </motion.div>

      {/* support card - hidden on mobile/tablet */}
      <motion.div
        variants={fadeUp(1.62, 14, 0.55)}
        initial="hidden"
        animate="visible"
        className="absolute right-[4%] top-[46%] z-40 hidden w-[218px] lg:block"
        style={{ y: reduced ? 0 : yCards }}
      >
        <HeroInfoCard card={support} />
      </motion.div>

      <motion.div
        variants={fadeUp(1.74, 14, 0.55)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[18%] left-[52%] z-40 hidden w-[238px] lg:block lg:left-[48%]"
        style={{ y: reduced ? 0 : yCards }}
      >
        <HeroInfoCard card={compliance} />
      </motion.div>
    </div>
  );
}
