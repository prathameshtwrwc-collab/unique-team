import { motion } from "framer-motion";
import { complianceData } from "../../data/compliance";
import { ComplianceIntro } from "./ComplianceIntro";
import { ComplianceList } from "./ComplianceList";
import { ComplianceVisual } from "./ComplianceVisual";
import { Button } from "../ui/Button";
import { fadeUp, defaultViewport } from "../../lib/animations";

export function ComplianceSection() {
  return (
    <section
      id="compliance"
      aria-label="Statutory & Compliance Support"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #FBF8F3 0%, #F7F2F8 55%, #FBF8F3 100%)",
      }}
    >
      {/* Dot grid texture */}
      <div aria-hidden className="pointer-events-none absolute left-[10%] top-[8%] opacity-20">
        <svg width="72" height="72">
          <defs>
            <pattern id="compliance-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="72" height="72" fill="url(#compliance-dots)" />
        </svg>
      </div>

      {/* Faint oversized shield at 3% opacity */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-8 bottom-[10%] opacity-[0.03]"
        width="480"
        height="480"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" fill="#2E1557" />
      </svg>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(120px, 10vw, 170px)",
        }}
      >
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          {/* Left: Content (columns 1-7) */}
          <div className="lg:col-span-7">
            <ComplianceIntro />

            {/* Compliance list */}
            <div className="mt-10 lg:mt-12">
              <ComplianceList />
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp(1.7, 14, 0.55)}
              initial="hidden"
              whileInView="visible" viewport={defaultViewport}
              className="mt-8 lg:mt-9"
            >
              <Button href={complianceData.cta.href} variant="primary">
                {complianceData.cta.label}
              </Button>
            </motion.div>
          </div>

          {/* Right: Visual (columns 7-12) */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ComplianceVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
