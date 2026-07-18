import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { mainNavLinks } from "../../data/navigation";
import { SpeechIcon } from "../ui/icons";
import { fadeDown } from "../../lib/animations";
import { MobileMenu } from "./MobileMenu";

function Logo() {
  return (
    <a
      href="#home"
      aria-label="UniqueHR — home"
      className="flex items-center gap-4"
    >
      {/* UH monogram */}
      <span className="relative flex h-[42px] w-[42px] items-center justify-center rounded-[13px] bg-plum shadow-[0_8px_20px_rgba(46,21,87,0.25)]">
        <svg viewBox="0 0 42 42" width="42" height="42" aria-hidden>
          <text
            x="11"
            y="29"
            fontFamily="'Instrument Serif', Georgia, serif"
            fontSize="24"
            fill="#FBF8F3"
          >
            U
          </text>
          <text
            x="21"
            y="33"
            fontFamily="'Instrument Serif', Georgia, serif"
            fontSize="19"
            fontStyle="italic"
            fill="#E9C77F"
          >
            H
          </text>
          <circle cx="33.5" cy="11" r="2" fill="#D6A03E" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[21px] font-bold tracking-[-0.02em] text-plum">
          Unique<span className="text-gold">HR</span>
        </span>
        <span className="mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.24em] text-[rgba(104,97,110,0.85)]">
          People · Purpose
        </span>
      </span>
    </a>
  );
}

export function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Logo />

{/* centre navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-11">
              {mainNavLinks.map((link) => (
                <li key={link.label} className="relative">
                  <motion.a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "relative inline-block py-2 text-[15px] font-medium transition-colors duration-300",
                      link.active
                        ? "text-plum"
                        : "text-ink-soft hover:text-plum"
                    )}
                  >
                    {link.label}
                    <motion.span
                      aria-hidden
                      whileHover={{ scaleX: 1.3, originX: "50%" }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-gradient-to-r from-gold to-gold-soft opacity-0 transition-all duration-300",
                        link.active && "opacity-100"
                      )}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-[12px] border border-plum bg-[#FFFDF9] px-5 py-2.5 text-[14px] font-semibold text-plum transition-all duration-300 hover:-translate-y-[1px] hover:bg-lilac-pale hover:shadow-[0_10px_24px_rgba(46,21,87,0.12)] sm:inline-flex"
          >
            <SpeechIcon className="text-purple" aria-hidden />
            Let&rsquo;s Talk
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-[rgba(46,21,87,0.12)] bg-white lg:hidden"
          >
            <span className="h-[2px] w-5 rounded bg-plum" />
            <span className="h-[2px] w-3.5 self-center rounded bg-gold ml-1.5" />
            <span className="h-[2px] w-5 rounded bg-plum" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
