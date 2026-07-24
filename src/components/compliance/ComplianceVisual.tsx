import { motion } from "framer-motion";
import { complianceData } from "../../data/compliance";
import { defaultViewport } from "../../lib/animations";

export function ComplianceVisual() {
  return (
    <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[580px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(46,21,87,0.15)]"
      >
        <img
          src={complianceData.image.src}
          alt={complianceData.image.alt}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
