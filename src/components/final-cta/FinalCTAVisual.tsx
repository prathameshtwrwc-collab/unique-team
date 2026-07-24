import { motion } from "framer-motion";
import { finalCTAData } from "../../data/finalCTA";
import { defaultViewport } from "../../lib/animations";

export function FinalCTAVisual() {
  return (
    <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[660px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        <img
          src={finalCTAData.image.src}
          alt={finalCTAData.image.alt}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
