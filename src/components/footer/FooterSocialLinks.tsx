import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { fadeUp, defaultViewport } from "../../lib/animations";
import type { ReactElement } from "react";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" stroke="#E9C77F" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" stroke="#E9C77F" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#E9C77F" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#E9C77F" />
    </svg>
  );
}

const socialIconMap: Record<string, () => ReactElement> = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export function FooterSocialLinks() {
  return (
    <motion.div
      variants={fadeUp(0.8, 12, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="flex gap-3"
    >
      {footerData.social.map((social) => {
        const Icon = socialIconMap[social.label];
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.ariaLabel}
            className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-white/20 text-white transition-all duration-300 hover:border-gold-soft hover:bg-white/5 hover:text-gold-soft"
          >
            <Icon />
          </a>
        );
      })}
    </motion.div>
  );
}
