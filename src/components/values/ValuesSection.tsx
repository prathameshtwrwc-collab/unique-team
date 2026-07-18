import { motion } from "framer-motion";
import { valuesData, values } from "../../data/values";
import { Eyebrow } from "../ui/Eyebrow";
import { fadeUp, lineReveal, defaultViewport, headlineViewport } from "../../lib/animations";

export function ValuesSection() {
  const featured = values.find((v) => v.size === "featured");
  const medium = values.filter((v) => v.size === "medium");

  return (
    <section
      id="values"
      aria-label="What Guides Us"
      className="relative overflow-hidden bg-[#F7F2F8]"
    >
      {/* Subtle dot grid */}
      <div aria-hidden className="pointer-events-none absolute left-[8%] top-[12%] opacity-20">
        <svg width="64" height="64">
          <defs>
            <pattern id="values-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="64" height="64" fill="url(#values-dots)" />
        </svg>
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(100px, 9vw, 140px)",
        }}
      >
        {/* Intro */}
        <div className="max-w-[720px]">
          <motion.div variants={fadeUp(0.2, 14, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <Eyebrow>{valuesData.eyebrow}</Eyebrow>
          </motion.div>

          <h2 className="mt-6 font-serif text-[clamp(3.5rem,5.5vw,5.5rem)] leading-[0.95] tracking-[-0.045em] text-plum lg:mt-7">
            <span className="block pb-[0.06em]">
              <motion.span className="block" variants={lineReveal(0.4)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
                Professional in process.
              </motion.span>
            </span>
            <span className="block pb-[0.08em]">
              <motion.span className="block" variants={lineReveal(0.55)} initial="hidden" whileInView="visible" viewport={headlineViewport}>
                Human in approach.
              </motion.span>
            </span>
          </h2>

          <motion.p
            variants={fadeUp(0.8, 16, 0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-7 text-[17px] leading-[1.65] text-ink-soft lg:mt-8 lg:text-[18px]"
          >
            {valuesData.supportingCopy}
          </motion.p>
        </div>

        {/* Values grid */}
        <div className="mt-8 grid gap-7 lg:mt-10 lg:grid-cols-12 lg:gap-9">
          {/* Featured card - spans 7 columns */}
          {featured && (
            <motion.article
              variants={fadeUp(1.0, 20, 0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[20px] p-8 shadow-[0_24px_60px_rgba(46,21,87,0.28)] lg:col-span-7 lg:p-10 lg:min-h-[340px]"
              style={{ background: "linear-gradient(145deg, #2E1557 0%, #4B238C 100%)" }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                  {featured.number}
                </span>
                <div className="h-px w-10 bg-gold/50" />
              </div>
              
              <h3 className="mt-5 text-[32px] font-serif leading-[1.15] tracking-[-0.02em] text-white lg:text-[36px]">
                {featured.title}
              </h3>
              
              <p className="mt-4 text-[18px] leading-[1.4] text-white/95 lg:text-[20px]">
                {featured.summary}
              </p>
              
              <p className="mt-5 text-[15px] leading-[1.6] text-white/85 lg:text-[16px]">
                {featured.detail}
              </p>
              
              <div className="mt-6 h-[2px] w-16 bg-gold/60" />
            </motion.article>
          )}

          {/* Medium cards - each spans 5 columns on first row, then move to new row */}
          {medium.map((value, i) => (
            <motion.article
              key={value.id}
              variants={fadeUp(1.2 + i * 0.1, 20, 0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-[18px] border border-[rgba(46,21,87,0.1)] bg-lilac-pale p-7 shadow-[0_12px_32px_rgba(46,21,87,0.1)] lg:col-span-5 lg:p-8"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                {value.number}
              </span>
              
              <h3 className="mt-4 text-[26px] font-serif leading-[1.2] tracking-[-0.01em] text-plum lg:text-[28px]">
                {value.title}
              </h3>
              
              <p className="mt-3 text-[16px] leading-[1.55] text-ink lg:text-[17px]">
                {value.summary}
              </p>

              <p className="mt-3.5 text-[15.5px] leading-[1.55] text-ink lg:text-[16.5px]">
                {value.summary}
              </p>
              
              <p className="mt-3.5 text-[14.5px] leading-[1.55] text-ink-soft">
                {value.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
