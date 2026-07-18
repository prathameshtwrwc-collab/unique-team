import { motion } from "framer-motion";
import { utilityLinks, utilityMessage } from "../../data/navigation";
import { MailIcon, SparkleIcon } from "../ui/icons";
import { fadeIn } from "../../lib/animations";

export function UtilityBar() {
  return (
    <motion.div
      variants={fadeIn(0, 0.4)}
      initial="hidden"
      animate="visible"
      className="bg-plum text-white"
    >
      <div className="container-shell flex h-[34px] items-center justify-between">
        <p className="flex min-w-0 items-center gap-2 text-[12px] text-white/85">
          <SparkleIcon className="shrink-0 text-gold-soft" />
          <span className="truncate">{utilityMessage}</span>
        </p>
        <nav aria-label="Utility" className="hidden sm:block">
          <ul className="flex items-center gap-7">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 text-[12px] text-white/70 transition-colors duration-300 hover:text-gold-soft"
                >
                  {link.label === "Support" && <MailIcon aria-hidden />}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
