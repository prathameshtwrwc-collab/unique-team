import { motion } from "framer-motion";
import type { FooterLinkGroupData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";

interface FooterLinkGroupProps {
  group: FooterLinkGroupData;
  index: number;
}

export function FooterLinkGroup({ group, index }: FooterLinkGroupProps) {
  return (
    <motion.nav
      aria-label={group.title}
      variants={fadeUp(0.5 + index * 0.1, 16, 0.6)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="flex flex-col gap-4"
    >
      <h3 className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-soft">
        <span aria-hidden className="h-px w-6 bg-gold/60" />
        {group.title}
      </h3>
      
      <ul className="flex flex-col gap-3">
        {group.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group relative inline-block text-[16px] text-white/80 transition-colors duration-300 hover:text-white lg:text-[17px]"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
