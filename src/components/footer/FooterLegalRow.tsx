import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";

interface FooterLegalRowProps {
  onNavigate: (section: string) => void;
}

export function FooterLegalRow({ onNavigate }: FooterLegalRowProps) {
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
        {legal.links.map((link) => {
          const linkSection = link.href.replace("#", "");
          const isHashNav = link.href.startsWith("#") && linkSection.length > 0;
          return isHashNav ? (
            <button
              key={link.label}
              type="button"
              onClick={() => onNavigate(linkSection)}
              className="transition-colors duration-300 hover:text-white cursor-pointer"
            >
              {link.label}
            </button>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <p className="italic text-white/50">{legal.tagline}</p>
    </motion.div>
  );
}
