import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { fadeUp, defaultViewport } from "../../lib/animations";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#5A2DA8" />
      <circle cx="12" cy="12" r="2" fill="#D6A03E" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#5A2DA8" />
      <path d="m22 7-10 5L2 7" stroke="#D6A03E" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="#5A2DA8" />
      <circle cx="12" cy="10" r="3" stroke="#D6A03E" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" stroke="#5A2DA8" />
      <path d="M12 7v5l3 2" stroke="#D6A03E" />
    </svg>
  );
}

const iconMap: Record<string, () => ReactElement> = {
  phone: PhoneIcon,
  email: EmailIcon,
  office: LocationIcon,
  hours: ClockIcon,
};

interface ContactDetailItemProps {
  icon: string;
  label: string;
  value: string;
  href: string;
  index: number;
}

export function ContactDetailItem({ icon, label, value, href, index }: ContactDetailItemProps) {
  const Icon = iconMap[icon];
  const isLink = href !== "#";

  return (
    <motion.div
      variants={fadeUp(0, 12, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay: 1.2 + index * 0.08 }}
      className="border-b border-[rgba(46,21,87,0.1)] py-4"
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 shrink-0">
          <Icon />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-ink-soft">{label}</p>
          {isLink ? (
            <a
              href={href}
              className="mt-1.5 text-[18px] font-semibold text-plum transition-colors hover:text-purple lg:text-[19px]"
            >
              {value}
            </a>
          ) : (
            <p className="mt-1.5 text-[18px] font-semibold text-plum lg:text-[19px]">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
