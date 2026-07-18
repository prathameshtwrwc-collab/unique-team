import { motion, AnimatePresence } from "framer-motion";
import type { Industry } from "../../data/industries";
import { imageReveal } from "../../lib/animations";

interface IndustryCentralVisualProps {
  industry: Industry;
}

export function IndustryCentralVisual({ industry }: IndustryCentralVisualProps) {
  return (
    <div className="relative h-[420px] w-[420px] lg:h-[480px] lg:w-[480px]">
      {/* Pale lilac inner background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lilac-pale to-lilac/40" />
      
      {/* Image container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={industry.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-[24px] overflow-hidden rounded-full border-8 border-white shadow-[0_24px_60px_rgba(46,21,87,0.2)]"
        >
          <motion.img
            src={industry.image}
            alt={industry.altText}
            variants={imageReveal(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
