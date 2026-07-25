import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavLinks } from "../../data/navigation";
import { SpeechIcon } from "../ui/icons";
import { cn } from "../../utils/cn";
import { EASE_OUT } from "../../lib/animations";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export function MobileMenu({ open, onClose, activeSection, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleNav = useCallback((section: string) => {
    onNavigate?.(section);
    onClose();
  }, [onNavigate, onClose]);

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
              <button
                type="button"
                onClick={() => handleNav("home")}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-[44px] w-auto"
                />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[16px] font-bold tracking-[-0.01em] text-plum">
                    Unique HR Team
                  </span>
                  <span className="text-[11px] font-medium text-ink-muted">
                    Solutions Pvt. Ltd.
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(46,21,87,0.12)] bg-white text-plum cursor-pointer"
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
                {mainNavLinks.map((link) => {
                  const section = link.href.replace("#", "");
                  const isActive = activeSection === section;
                  return (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => handleNav(section)}
                        className={cn(
                          "flex w-full items-center justify-between py-3.5 text-[17px] font-medium text-left cursor-pointer",
                          isActive ? "text-purple" : "text-ink"
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-gold to-gold-soft" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              type="button"
              onClick={() => handleNav("contact")}
              className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-[14px] bg-purple text-[15px] font-semibold text-white shadow-[0_14px_30px_rgba(90,45,168,0.28)] cursor-pointer"
            >
              <SpeechIcon aria-hidden />
              Let&rsquo;s Talk
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
