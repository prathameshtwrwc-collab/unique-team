import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt="UniqueHR"
        className="h-[60px] w-auto brightness-0 invert"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[18px] font-bold tracking-[-0.01em] text-white">
          Unique HR Team
        </span>
        <span className="text-[13px] font-medium text-white/70">
          Solutions Pvt. Ltd.
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
        <p>{footerData.brand.website}</p>
        <p className="text-[14px] leading-[1.5] text-white/70">{footerData.brand.office}</p>
      </motion.div>
    </div>
  );
}
