import { motion, AnimatePresence } from "framer-motion";
import type { Industry } from "../../data/industries";
import { IndustryRoleChips } from "./IndustryRoleChips";

interface IndustryDetailsProps {
  industry: Industry;
}

export function IndustryDetails({ industry }: IndustryDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={industry.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-[40px] font-serif leading-[1.1] tracking-[-0.02em] text-plum lg:text-[46px]">
          {industry.title}
        </h3>
        
        <p className="text-[19px] font-serif italic leading-snug text-purple lg:text-[21px]">
          {industry.campaignLine}
        </p>
        
        <p className="text-[16px] leading-[1.6] text-ink lg:text-[18px]">
          {industry.description}
        </p>

        <IndustryRoleChips roles={industry.roles} />
      </motion.div>
    </AnimatePresence>
  );
}
