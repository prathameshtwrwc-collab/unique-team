import { motion } from "framer-motion";
import type { ProofPoint } from "../../data/about";
import { defaultViewport, fadeUp } from "../../lib/animations";

export function AboutProofItem({ item }: { item: ProofPoint }) {
  return (
    <motion.article
      variants={fadeUp(0, 10, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="group relative border-t border-[rgba(46,21,87,0.12)] pt-7 pb-7 md:pb-10 md:first:border-t-0 md:first:border-none md:first:pt-0"
    >
      <span className="text-[46px] font-serif leading-none tracking-[-0.03em] text-gold group-hover:text-gold-deep transition-colors duration-300 md:text-[52px]">
        {item.number}
      </span>
      <h3 className="mt-3 text-[25px] font-semibold leading-tight text-plum group-hover:-translate-y-[2px] transition-transform duration-300 md:text-[29px]">
        {item.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-soft md:text-[16px]">
        {item.line}
      </p>
    </motion.article>
  );
}
