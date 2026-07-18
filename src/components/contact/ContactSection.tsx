import { motion } from "framer-motion";
import { ContactIntro } from "./ContactIntro";
import { ContactDetails } from "./ContactDetails";
import { RequirementForm } from "./RequirementForm";
import { fadeIn, defaultViewport } from "../../lib/animations";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Submit Your Requirement"
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 78% 40%, rgba(169,138,213,0.14) 0%, rgba(251,248,243,0) 55%), #FBF8F3",
      }}
    >
      {/* Pale lilac shape - further reduced opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[15%] h-[400px] w-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(169,138,213,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute left-[10%] bottom-[15%] opacity-20">
        <svg width="64" height="64">
          <defs>
            <pattern id="contact-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="64" height="64" fill="url(#contact-dots)" />
        </svg>
      </div>

      {/* Faint oversized envelope at 3% opacity */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-12 top-[20%] opacity-[0.03]"
        width="420"
        height="420"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#2E1557" />
        <path d="m22 7-10 5L2 7" stroke="#2E1557" strokeWidth="1.5" />
      </svg>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(95px, 9vw, 140px)",
          paddingBottom: "clamp(120px, 10vw, 170px)",
        }}
      >
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          {/* Left: Content (columns 1-5) */}
          <div className="lg:col-span-5">
            <ContactIntro />

            <div className="mt-10 lg:mt-12">
              <ContactDetails />
            </div>
          </div>

          {/* Right: Form (columns 6-12) - reduced gap, aligned better */}
          <div className="relative lg:col-span-7 lg:col-start-6 lg:-mt-6">
            {/* Editorial gold accent - vertical stroke outside form (desktop only, shortened) */}
            <motion.div
              aria-hidden
              variants={fadeIn(0.9, 0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="absolute -left-5 top-[12%] hidden h-[100px] w-[2px] lg:block"
              style={{
                background: "linear-gradient(180deg, rgba(214,160,62,0) 0%, #D6A03E 22%, #E9C77F 70%, rgba(233,199,127,0) 100%)",
              }}
            />

            {/* Small gold dot on the accent line */}
            <motion.div
              aria-hidden
              variants={fadeIn(1.1, 0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="absolute -left-[22px] top-[calc(12%+16px)] hidden h-[6px] w-[6px] rounded-full bg-gold lg:block"
            />

            <div className="relative rounded-[26px] border border-[rgba(46,21,87,0.1)] bg-white p-8 shadow-[0_24px_65px_rgba(46,21,87,0.1)] lg:p-10 xl:p-12">
              {/* Short gold line along top-left edge of form */}
              <motion.div
                aria-hidden
                variants={fadeIn(1.0, 0.55)}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="absolute left-10 top-0 h-[2px] w-[70px] bg-gradient-to-r from-gold to-gold-soft"
              />
              
              <RequirementForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
