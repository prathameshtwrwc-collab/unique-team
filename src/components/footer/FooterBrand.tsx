import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { fadeUp, defaultViewport } from "../../lib/animations";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <span className="relative flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.2)] ring-1 ring-white/20">
        <svg viewBox="0 0 46 46" width="46" height="46" aria-hidden>
          <text x="12" y="32" fontFamily="'Instrument Serif', Georgia, serif" fontSize="26" fill="#FBF8F3">
            U
          </text>
          <text x="23" y="36" fontFamily="'Instrument Serif', Georgia, serif" fontSize="21" fontStyle="italic" fill="#E9C77F">
            H
          </text>
          <circle cx="36" cy="12" r="2.2" fill="#D6A03E" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[23px] font-bold tracking-[-0.02em] text-white">
          Unique<span className="text-gold-soft">HR</span>
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-white/75">
          People · Purpose
        </span>
      </span>
    </div>
  );
}

export function FooterBrand() {
  return (
    <div className="flex max-w-[400px] flex-col gap-6">
      <motion.div variants={fadeUp(0.3, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
        <Logo />
      </motion.div>

      <motion.p
        variants={fadeUp(0.5, 16, 0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-[16px] leading-[1.7] text-white/82 lg:text-[17px]"
      >
        {footerData.brand.statement}
      </motion.p>

      <motion.div
        variants={fadeUp(0.7, 12, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="flex flex-col gap-2.5 text-[16px] text-white/80"
      >
        <p>{footerData.brand.phone}</p>
        <p>{footerData.brand.email}</p>
        <p>{footerData.brand.office}</p>
      </motion.div>

      <FooterSocialLinks />
    </div>
  );
}
