import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavLinks } from "../../data/navigation";
import { SpeechIcon } from "../ui/icons";
import { cn } from "../../utils/cn";
import { EASE_OUT } from "../../lib/animations";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-plum/40 lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="fixed inset-x-3 top-3 z-50 rounded-[22px] border border-[rgba(46,21,87,0.12)] bg-cream p-6 shadow-[0_30px_80px_rgba(46,21,87,0.25)] lg:hidden"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[18px] font-bold text-plum">
                Unique<span className="text-gold">HR</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(46,21,87,0.12)] bg-white text-plum"
              >
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3 3 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className="divide-y divide-[rgba(46,21,87,0.08)]">
                {mainNavLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      aria-current={link.active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-3.5 text-[17px] font-medium",
                        link.active ? "text-purple" : "text-ink"
                      )}
                    >
                      {link.label}
                      {link.active && (
                        <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-gold to-gold-soft" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-5 flex h-[52px] items-center justify-center gap-2 rounded-[14px] bg-purple text-[15px] font-semibold text-white shadow-[0_14px_30px_rgba(90,45,168,0.28)]"
            >
              <SpeechIcon aria-hidden />
              Let&rsquo;s Talk
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
