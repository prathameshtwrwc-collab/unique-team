import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { mainNavLinks } from "../../data/navigation";
import { SpeechIcon } from "../ui/icons";
import { fadeDown } from "../../lib/animations";
import { MobileMenu } from "./MobileMenu";

function Logo({ onNavigate }: { onNavigate?: (section: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate?.("home")}
      className="flex items-center gap-3"
      aria-label="UniqueHR — home"
    >
      <img
        src="/images/logo.png"
        alt=""
        className="h-[56px] w-auto"
        fetchPriority="high"
      />
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[17px] font-bold tracking-[-0.01em] text-plum">
          Unique HR Team
        </span>
        <span className="text-[12px] font-medium text-ink-muted">
          Solutions Pvt. Ltd.
        </span>
      </span>
    </button>
  );
}

interface MainHeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function MainHeader({ activeSection, onNavigate }: MainHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback((e: React.MouseEvent, section: string) => {
    e.preventDefault();
    onNavigate(section);
  }, [onNavigate]);

  return (
    <motion.header
      variants={fadeDown(0.1, 0.5)}
      initial="hidden"
      animate="visible"
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-[rgba(46,21,87,0.12)] bg-cream/95 shadow-[0_10px_30px_rgba(46,21,87,0.08)] backdrop-blur-md"
          : "border-transparent bg-cream"
      )}
    >
      <div
        className={cn(
          "container-shell flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-[66px]" : "h-[82px]"
        )}
      >
        <Logo onNavigate={onNavigate} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-11">
            {mainNavLinks.map((link) => {
              const section = link.href.replace("#", "");
              const isActive = activeSection === section;
              return (
                <li key={link.label} className="relative">
                  <motion.button
                    type="button"
                    onClick={(e) => handleNav(e, section)}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "relative inline-block py-2 text-[15px] font-medium transition-colors duration-300 cursor-pointer",
                      isActive ? "text-plum" : "text-ink-soft hover:text-plum"
                    )}
                  >
                    {link.label}
                    <motion.span
                      aria-hidden
                      whileHover={{ scaleX: 1.3, originX: "50%" }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-gradient-to-r from-gold to-gold-soft opacity-0 transition-all duration-300",
                        isActive && "opacity-100"
                      )}
                    />
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="hidden items-center gap-2 rounded-[12px] border border-plum bg-[#FFFDF9] px-5 py-2.5 text-[14px] font-semibold text-plum transition-all duration-300 hover:-translate-y-[1px] hover:bg-lilac-pale hover:shadow-[0_10px_24px_rgba(46,21,87,0.12)] sm:inline-flex cursor-pointer"
          >
            <SpeechIcon className="text-purple" aria-hidden />
            Let&rsquo;s Talk
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-[rgba(46,21,87,0.12)] bg-white lg:hidden cursor-pointer"
          >
            <span className="h-[2px] w-5 rounded bg-plum" />
            <span className="h-[2px] w-3.5 self-center rounded bg-gold ml-1.5" />
            <span className="h-[2px] w-5 rounded bg-plum" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />
    </motion.header>
  );
}
