import { motion } from "framer-motion";
import { defaultViewport, scaleIn, imageReveal } from "../../lib/animations";

export function AboutCollage() {
  return (
    <div className="relative h-[400px] w-full sm:h-[520px] lg:h-[680px]">
      {/* Main image — centered and prominent */}
      <motion.div
        variants={scaleIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute inset-x-[5%] top-[4%] z-10 h-[68%] overflow-hidden rounded-[24px] shadow-[0_28px_70px_rgba(46,21,87,0.18)] sm:inset-x-[8%] lg:left-[10%] lg:h-[72%] lg:w-[58%]"
      >
        <motion.img
          src="/images/about-main.jpg"
          alt="HR consultant and professional discussing growth and workforce strategy"
          fetchPriority="high"
          variants={imageReveal(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-full w-full object-cover object-[30%_20%]"
        />
      </motion.div>

      {/* Interview image — desktop only, bottom-right */}
      <motion.div
        variants={scaleIn(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute bottom-[18%] right-[4%] z-20 hidden h-[34%] w-[38%] overflow-hidden rounded-[22px] border-[3px] border-white shadow-[0_20px_60px_rgba(46,21,87,0.16)] lg:block"
      >
        <img
          src="/images/about-interview.jpg"
          alt="Interview conversation showing careful screening and selection"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Workforce image — bottom-left */}
      <motion.div
        variants={scaleIn(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="absolute bottom-[2%] left-[4%] z-20 h-[26%] w-[44%] overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_20px_60px_rgba(46,21,87,0.16)] sm:left-[6%] sm:w-[38%] lg:bottom-[4%] lg:h-[30%] lg:w-[36%]"
      >
        <img
          src="/images/about-workforce.jpg"
          alt="Team collaboration on workforce onboarding and operational support"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
