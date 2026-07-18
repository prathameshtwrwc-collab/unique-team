import { motion } from "framer-motion";
import type { Benefit } from "../../data/whyUniqueHR";
import { fadeUp, defaultViewport } from "../../lib/animations";

// Custom icons
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#5A2DA8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 5-5" />
      <circle cx="20" cy="11" r="1.5" fill="#D6A03E" />
    </svg>
  );
}

function PersonSlidersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#5A2DA8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M18 6h3M18 10h3M18 14h3" stroke="#D6A03E" />
    </svg>
  );
}

function ShieldDocIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#5A2DA8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
      <path d="M9 12h6M9 15h4" stroke="#D6A03E" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#5A2DA8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12h5" stroke="#D6A03E" />
    </svg>
  );
}

function TeamExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#5A2DA8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="9" r="2" stroke="#D6A03E" />
      <path d="M19 13v2a2 2 0 0 0 2 2" stroke="#D6A03E" />
    </svg>
  );
}

const iconMap = {
  chart: ChartIcon,
  "person-sliders": PersonSlidersIcon,
  "shield-doc": ShieldDocIcon,
  message: MessageIcon,
  "team-expand": TeamExpandIcon,
};

export function WhyUniqueHRBenefitRow({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = iconMap[benefit.icon];
  
  return (
    <motion.div
      variants={fadeUp(0, 12, 0.5)}
      initial="hidden"
      whileInView="visible"
      whileHover={{ x: 4, y: -2 }}
      viewport={defaultViewport}
      transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative flex items-start gap-4 rounded-[14px] border border-[rgba(46,21,87,0.1)] px-5 py-[19px] transition-all duration-300 hover:border-[rgba(46,21,87,0.2)] ${benefit.width} ${
        benefit.bg === "lilac" ? "bg-lilac-pale" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{benefit.number}</span>
        <Icon />
      </div>
      
      <div className="flex-1">
        <h3 className="text-[20px] font-semibold leading-tight text-plum transition-colors duration-300 group-hover:text-purple lg:text-[22px]">
          {benefit.title}
        </h3>
        <p className="mt-2 text-[15px] leading-[1.55] text-ink lg:text-[16px]">
          {benefit.line}
        </p>
      </div>
    </motion.div>
  );
}
