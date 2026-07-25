import { motion } from "framer-motion";
import { footerData } from "../../data/footer";
import { FooterBrand } from "./FooterBrand";
import { FooterLinkGroup } from "./FooterLinkGroup";
import { FooterClosingRow } from "./FooterClosingRow";
import { FooterLegalRow } from "./FooterLegalRow";
import { fadeIn, defaultViewport } from "../../lib/animations";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { linkGroups } = footerData;

  return (
    <motion.footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #241044 0%, #2E1557 55%, #351664 100%)",
      }}
      variants={fadeIn(0, 0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[20%] h-[300px] w-[400px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, rgba(169,138,213,0.4) 0%, transparent 70%)",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -left-12 bottom-[15%] hidden select-none font-serif text-[38rem] leading-none text-white/[0.03] lg:block"
      >
        U
      </span>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(50px, 5vw, 80px)",
          paddingBottom: "36px",
        }}
      >
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          <div className="grid gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:col-span-8 lg:col-start-5">
            {linkGroups.map((group) => (
              <FooterLinkGroup
                key={group.title}
                group={group}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-14">
          <FooterClosingRow />
        </div>

        <FooterLegalRow onNavigate={onNavigate} />
      </div>
    </motion.footer>
  );
}
