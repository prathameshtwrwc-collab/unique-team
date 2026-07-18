import { motion } from "framer-motion";
import type { ReactElement } from "react";
import type { ComplianceItem as ComplianceItemType } from "../../data/compliance";
import { fadeUp, defaultViewport } from "../../lib/animations";

// Custom icons
function PersonDocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="8" r="3" />
      <path d="M4 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <rect x="14" y="12" width="8" height="10" rx="1" stroke="#D6A03E" />
      <path d="M16 16h4M16 18h3" stroke="#D6A03E" />
    </svg>
  );
}

function DocumentWorkforceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <circle cx="12" cy="12" r="1.5" stroke="#D6A03E" />
      <path d="m10 16 .5-2h3l.5 2" stroke="#D6A03E" />
    </svg>
  );
}

function ShieldMedicalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
      <path d="M12 8v6M9 11h6" stroke="#D6A03E" />
    </svg>
  );
}

function SavingsCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M8 12l2.5 2.5L16 9" stroke="#D6A03E" />
    </svg>
  );
}

function TaxDocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h2v4H9zM13 13h2v4h-2z" stroke="#D6A03E" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16v18l-2-1.5L16 21l-2-1.5L12 21l-2-1.5L8 21l-2-1.5L4 21V3z" />
      <path d="M8 8h8M8 12h5" stroke="#D6A03E" />
    </svg>
  );
}

function SearchDocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <circle cx="12" cy="13" r="2" stroke="#D6A03E" />
      <path d="m16 16.5 2 2" stroke="#D6A03E" />
    </svg>
  );
}

function ChecklistFolderIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path d="M9 13l1.5 1.5L14 11" stroke="#D6A03E" />
      <path d="M9 17h6" stroke="#D6A03E" />
    </svg>
  );
}

const iconMap: Record<string, () => ReactElement> = {
  "person-document": PersonDocumentIcon,
  "document-workforce": DocumentWorkforceIcon,
  "shield-medical": ShieldMedicalIcon,
  "savings-check": SavingsCheckIcon,
  "tax-document": TaxDocumentIcon,
  receipt: ReceiptIcon,
  "search-document": SearchDocumentIcon,
  "checklist-folder": ChecklistFolderIcon,
};

interface ComplianceItemProps {
  item: ComplianceItemType;
  index: number;
}

export function ComplianceItem({ item, index }: ComplianceItemProps) {
  const Icon = iconMap[item.icon];
  
  return (
    <motion.div
      variants={fadeUp(0, 10, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      transition={{ delay: 1.2 + index * 0.08 }}
      whileHover={{ x: 4 }}
      className="group border-b border-[rgba(46,21,87,0.1)] pb-6 transition-all duration-300 hover:border-[rgba(46,21,87,0.16)]"
      aria-label={item.ariaLabel}
    >
      <div className="flex items-start gap-3.5">
        <div className="mt-0.5 transition-all duration-300 group-hover:text-purple">
          <Icon />
        </div>
        
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
              {item.number}
            </span>
            <h3 className="text-[17px] font-semibold leading-tight text-plum transition-colors duration-300 group-hover:text-purple lg:text-[18px]">
              {item.title}
            </h3>
          </div>
          
          <p className="mt-2 text-[14px] leading-[1.55] text-ink-soft transition-all duration-300 group-hover:text-ink lg:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
