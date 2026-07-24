import { motion } from "framer-motion";
import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { defaultViewport } from "../../lib/animations";

export function WhyUniqueHRVisual() {
  return (
    <div className="relative h-[400px] w-full sm:h-[500px] lg:h-[620px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(46,21,87,0.16)]"
      >
        <img
          src={whyUniqueHRData.image.src}
          alt={whyUniqueHRData.image.alt}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
