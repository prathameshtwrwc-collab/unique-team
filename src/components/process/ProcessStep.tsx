import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "../../data/process";
import { defaultViewport } from "../../lib/animations";
import type { ReactElement } from "react";

// Custom icons
function ConversationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12h5" stroke="#D6A03E" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#D6A03E" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <circle cx="11" cy="9" r="2" stroke="#D6A03E" />
      <path d="M8.5 13c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" stroke="#D6A03E" />
    </svg>
  );
}

function ProfileCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.5" stroke="#D6A03E" />
      <path d="M7 17c1-2 2.5-3 5-3s4 1 5 3" stroke="#D6A03E" />
      <path d="M9 12l2 2 4-4" stroke="#D6A03E" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18" />
      <path d="M8 15h3M8 18h5" stroke="#D6A03E" />
    </svg>
  );
}

function DocumentShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 11l-3 3 3 3 3-3-3-3z" stroke="#D6A03E" />
    </svg>
  );
}

function PersonCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <path d="M15 11l1.5 1.5L20 9" stroke="#D6A03E" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18M3 11v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3zM21 11v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 11a9 9 0 0 1 18 0" stroke="#D6A03E" />
    </svg>
  );
}

const iconMap: Record<string, () => ReactElement> = {
  conversation: ConversationIcon,
  document: DocumentIcon,
  search: SearchIcon,
  "profile-check": ProfileCheckIcon,
  calendar: CalendarIcon,
  "document-shield": DocumentShieldIcon,
  "person-check": PersonCheckIcon,
  headset: HeadsetIcon,
};

interface ProcessStepProps {
  step: ProcessStepType;
  isActive: boolean;
  index: number;
}

export function ProcessStep({ step, isActive, index }: ProcessStepProps) {
  const Icon = iconMap[step.icon];
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={defaultViewport}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 150, damping: 15 }}
      className={`group relative flex w-full flex-col gap-4 rounded-[16px] border p-6 ${
        isActive
          ? "border-[rgba(90,45,168,0.32)] bg-[#F1E9F6] shadow-[0_12px_32px_rgba(46,21,87,0.15)]"
          : "border-[rgba(46,21,87,0.12)] bg-white hover:border-[rgba(46,21,87,0.2)] hover:shadow-[0_12px_28px_rgba(46,21,87,0.12)]"
      }`}
      style={{ minHeight: "200px" }}
      aria-label={step.ariaLabel}
    >
      {/* Gold step marker above card */}
      {/* Small fixed anchor dot on route behind card */}
      <div
        aria-hidden
        className="absolute -left-[22px] top-[32px] hidden h-[10px] w-[10px] rounded-full border-2 border-purple bg-white lg:block"
      />
      
      <div className="absolute -top-6 left-0 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
        {step.number} / 08
      </div>
      
      {/* Step number and short name */}
      <div className="flex items-baseline gap-2">
        <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-gold">
          {step.number}
        </span>
        <span className={`text-[13px] font-semibold transition-colors duration-300 ${isActive ? "text-purple" : "text-plum"}`}>
          {step.shortName}
        </span>
      </div>

      {/* Icon */}
      <div className={`transition-all duration-300 ${isActive ? "text-purple" : "text-plum group-hover:text-purple"}`}>
        <Icon />
      </div>

      {/* Title */}
      <h3 className={`text-[24px] font-serif leading-[1.2] tracking-[-0.01em] transition-colors duration-300 lg:text-[26px] ${
        isActive ? "text-purple" : "text-plum"
      }`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-[1.55] text-ink-soft lg:text-[15.5px]">
        {step.description}
      </p>
    </motion.article>
  );
}
