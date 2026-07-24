import { motion } from "framer-motion";
import type { ProcessStep as ProcessStepType } from "../../data/process";
import type { ReactElement } from "react";

function ConversationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <circle cx="11" cy="9" r="2" />
      <path d="M8.5 13c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
    </svg>
  );
}

function ProfileCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M7 17c1-2 2.5-3 5-3s4 1 5 3" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18" />
      <path d="M8 15h3M8 18h5" />
    </svg>
  );
}

function DocumentShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M12 11l-3 3 3 3 3-3-3-3z" />
    </svg>
  );
}

function PersonCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <path d="M15 11l1.5 1.5L20 9" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18M3 11v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3zM21 11v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 11a9 9 0 0 1 18 0" />
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
  progress?: number;
}

export function ProcessStep({ step, isActive }: ProcessStepProps) {
  const Icon = iconMap[step.icon];

  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col rounded-xl border bg-white p-6 transition-all duration-300 ${
        isActive
          ? "border-purple/30 bg-[#F1E9F6] shadow-[0_12px_32px_rgba(90,45,168,0.12)]"
          : "border-[rgba(46,21,87,0.08)] shadow-[0_4px_16px_rgba(46,21,87,0.06)] hover:border-[rgba(46,21,87,0.16)] hover:shadow-[0_8px_24px_rgba(46,21,87,0.1)]"
      }`}
      aria-label={step.ariaLabel}
    >
      {/* Top section: number + short name */}
      <div className="mb-4 flex items-center justify-between">
        <span className={`text-[11px] font-bold uppercase tracking-[0.16em] ${
          isActive ? "text-gold" : "text-gold-deep"
        }`}>
          Step {step.number}
        </span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
          isActive ? "text-purple" : "text-ink-muted"
        }`}>
          {step.shortName}
        </span>
      </div>

      {/* Icon in colored circle */}
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
        isActive
          ? "bg-purple text-white shadow-[0_4px_12px_rgba(90,45,168,0.25)]"
          : "bg-lilac text-purple group-hover:bg-lilac"
      }`}>
        <Icon />
      </div>

      {/* Title */}
      <h3 className={`mb-2 text-lg font-serif leading-[1.25] tracking-[-0.01em] transition-colors duration-300 ${
        isActive ? "text-purple" : "text-plum"
      }`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-[1.55] text-ink-soft">
        {step.description}
      </p>

      {/* Active indicator line */}
      <div className={`mt-4 h-[2px] w-0 transition-all duration-500 ${
        isActive ? "w-10 bg-gradient-to-r from-gold to-gold-soft" : ""
      }`} />
    </motion.article>
  );
}
