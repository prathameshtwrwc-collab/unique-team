import { motion } from "framer-motion";
import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function WhyUniqueHRQuote() {
  return (
    <motion.blockquote
      variants={fadeUp(1.4, 18, 0.65)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="relative w-full max-w-[340px] rounded-[18px] p-8 shadow-[0_24px_60px_rgba(46,21,87,0.3)] lg:w-[380px] lg:max-w-none lg:p-9"
      style={{ background: "linear-gradient(145deg, #2E1557 0%, #4B238C 100%)" }}
    >
      <div className="absolute -top-5 left-7 text-[64px] font-serif leading-none text-gold">
        "
      </div>
      <p className="text-[17px] font-serif leading-[1.55] text-white/95 lg:text-[18px]">
        {whyUniqueHRData.quote.text}
      </p>
      <div className="mt-4 h-[2px] w-12 bg-gold/60" />
    </motion.blockquote>
  );
}
