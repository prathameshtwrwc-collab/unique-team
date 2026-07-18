import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function FooterClosingRow() {
  const { closingLine, cta } = footerData;

  return (
    <motion.div
      variants={fadeUp(1.2, 14, 0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Closing brand line */}
      <p className="text-[26px] font-display leading-[1.25] text-white lg:whitespace-nowrap lg:text-[32px]">
        {closingLine.partOne}{" "}
        <span className="italic text-gold-soft">{closingLine.accent}</span>{" "}
        {closingLine.partTwo}
      </p>

      {/* CTA */}
      <a
        href={cta.href}
        className="group inline-flex items-center gap-2.5 rounded-[12px] border border-white/25 bg-transparent px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 lg:w-auto"
      >
        <span>{cta.label}</span>
        <svg viewBox="0 0 18 18" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[4px]">
          <path d="M2.8 9h11.6" />
          <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
        </svg>
      </a>
    </motion.div>
  );
}
