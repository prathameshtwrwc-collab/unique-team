import { motion } from "framer-motion";
import { complianceData } from "../../data/compliance";
import { fadeUp, defaultViewport } from "../../lib/animations";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#D6A03E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ComplianceTrustPanel() {
  const { trust } = complianceData;
  
  return (
    <motion.aside
      variants={fadeUp(1.6, 18, 0.7)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative w-full max-w-[360px] rounded-[18px] p-8 shadow-[0_24px_60px_rgba(46,21,87,0.28)] transition-transform duration-300 hover:scale-[1.01] lg:w-[380px] lg:p-9"
      style={{ background: "linear-gradient(145deg, #2E1557 0%, #4B238C 100%)" }}
    >
      <div className="flex items-start gap-3">
        <ShieldIcon />
        <div className="flex-1">
          <p className="text-[18px] font-display leading-[1.35] text-white lg:text-[19px]">
            {trust.statement}
          </p>
          
          <p className="mt-3 text-[13px] leading-[1.55] text-white/85 lg:text-[14px]">
            {trust.supportLine}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {trust.microPoints.map((point) => (
              <span
                key={point}
                className="rounded-[6px] border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/90"
              >
                {point}
              </span>
            ))}
          </div>
          
          <div className="mt-4 h-[2px] w-12 bg-gold/70" />
        </div>
      </div>
    </motion.aside>
  );
}
