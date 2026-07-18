import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "../../lib/animations";

interface IndustryRoleChipsProps {
  roles: string[];
}

export function IndustryRoleChips({ roles }: IndustryRoleChipsProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {roles.map((role, i) => (
        <motion.span
          key={`${role}-${i}`}
          variants={fadeUp(0, 8, 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.1 + i * 0.08 }}
          className="rounded-[8px] border border-[rgba(46,21,87,0.12)] bg-white px-3.5 py-2 text-[13px] font-medium text-plum transition-colors duration-300 hover:border-[rgba(46,21,87,0.18)] hover:bg-lilac-pale"
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}
