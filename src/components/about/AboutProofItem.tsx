import { motion } from "framer-motion";
import type { ProofPoint } from "../../data/about";
import { defaultViewport, fadeUp } from "../../lib/animations";

export function AboutProofItem({ item }: { item: ProofPoint }) {
  return (
    <motion.article
      variants={fadeUp(0, 10, 0.35)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="group relative border-t border-[rgba(46,21,87,0.12)] pt-7 pb-7 md:pb-10 md:first:border-t-0 md:first:border-none md:first:pt-0"
    >
      <span className="text-[44px] font-serif leading-none tracking-[-0.03em] text-gold transition-colors duration-300 group-hover:text-gold-deep md:text-[50px]">
        {item.number}
      </span>
      <h3 className="mt-2 text-[24px] font-semibold leading-tight text-plum transition-transform duration-300 group-hover:-translate-y-[1px] md:text-[27px]">
        {item.title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-ink-soft md:text-[16px]">
        {item.line}
      </p>
    </motion.article>
  );
}
