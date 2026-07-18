import { motion } from "framer-motion";
import type { ReactElement } from "react";
import type { Industry } from "../../data/industries";

// Custom icons
function CircuitIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="#D6A03E" />
    </svg>
  );
}

function HeartCrossIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 8v6M9 11h6" stroke="#D6A03E" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M4 20V8l4-2v4l4-2v4l4-2v10" />
      <path d="M8 12v4M12 12v4M16 12v4" stroke="#D6A03E" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v4a4 4 0 0 0 4 4h4" stroke="#D6A03E" />
      <path d="M14 14l4 4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M4 21V7l8-4 8 4v14" />
      <path d="M8 21v-6h8v6" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" stroke="#D6A03E" />
    </svg>
  );
}

function ServiceBellIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17h16a8 8 0 0 0-16 0z" />
      <circle cx="12" cy="9" r="1.5" stroke="#D6A03E" />
      <path d="M2 21h20" stroke="#D6A03E" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L12 5 2 10l10 5 10-5v6" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#D6A03E" />
    </svg>
  );
}

const iconMap: Record<string, () => ReactElement> = {
  circuit: CircuitIcon,
  "heart-cross": HeartCrossIcon,
  factory: FactoryIcon,
  route: RouteIcon,
  building: BuildingIcon,
  "service-bell": ServiceBellIcon,
  graduation: GraduationIcon,
};

interface IndustryNodeProps {
  industry: Industry;
  isActive: boolean;
  onClick: () => void;
  angle: number;
  radius: number;
}

export function IndustryNode({ industry, isActive, onClick, angle, radius }: IndustryNodeProps) {
  const Icon = iconMap[industry.icon];
  
  // Calculate position on orbit
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    // Outer wrapper: controls ONLY positioning, never animated
    <div
      className={`absolute ${isActive ? "z-20" : "z-10"}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Inner motion button: controls ONLY visual hover effects, centered scale */}
      <motion.button
        type="button"
        onClick={onClick}
        aria-label={`Select ${industry.title}`}
        aria-pressed={isActive}
        className="group flex flex-col items-center gap-2"
        style={{ transformOrigin: "center center" }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Node circle */}
        <div
          className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
            isActive
              ? "h-[64px] w-[64px] bg-plum text-white shadow-[0_12px_32px_rgba(46,21,87,0.35)] ring-[3px] ring-gold"
              : "h-[52px] w-[52px] bg-white text-plum border-2 border-plum/25 shadow-[0_4px_12px_rgba(46,21,87,0.08)] group-hover:border-plum/50 group-hover:shadow-[0_6px_16px_rgba(46,21,87,0.12)]"
          }`}
        >
          <Icon />
          {/* Gold indicator for active */}
          {isActive && (
            <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-gold shadow-[0_3px_10px_rgba(214,160,62,0.6)]" />
          )}
        </div>

        {/* Label - fixed position, only color changes, increased readability */}
        <div className="flex flex-col items-center gap-1.5">
          <span
            className={`text-[13px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
              isActive ? "text-plum" : "text-ink-soft group-hover:text-plum"
            }`}
          >
            {industry.abbreviation}
          </span>
          <span className={`whitespace-nowrap text-[14px] font-semibold transition-colors duration-300 ${isActive ? "text-plum" : "text-ink group-hover:text-plum"}`}>
            {industry.title}
          </span>
        </div>
      </motion.button>
    </div>
  );
}
