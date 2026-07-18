import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function FooterLegalRow() {
  const { legal } = footerData;

  return (
    <motion.div
      variants={fadeUp(1.4, 10, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="mt-8 flex flex-col gap-4 text-[13px] text-white/62 md:flex-row md:items-center md:justify-between lg:text-[14px]"
    >
      <p>{legal.copyright}</p>

      <div className="flex flex-wrap gap-5">
        {legal.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="italic text-white/50">{legal.tagline}</p>
    </motion.div>
  );
}
