import { motion } from "framer-motion";
import { finalCTAData } from "../../data/finalCTA";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function FinalCTACaption() {
  return (
    <motion.div
      variants={fadeUp(1.5, 12, 0.6)}
      initial="hidden"
      whileInView="visible" viewport={defaultViewport}
      className="inline-flex items-center gap-2.5 rounded-[10px] border border-white/10 bg-[#FFFDF9] px-4 py-3 shadow-[0_12px_32px_rgba(46,21,87,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(46,21,87,0.22)]"
    >
      <div className="h-2 w-2 rounded-[2px] bg-gold transition-colors duration-300 hover:bg-gold-soft" />
      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-plum">
        {finalCTAData.caption}
      </span>
    </motion.div>
  );
}
