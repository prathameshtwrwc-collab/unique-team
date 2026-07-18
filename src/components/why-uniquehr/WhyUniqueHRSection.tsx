import { WhyUniqueHRVisual } from "./WhyUniqueHRVisual";
import { WhyUniqueHRContent } from "./WhyUniqueHRContent";

export function WhyUniqueHRSection() {
  return (
    <section
      id="why-uniquehr"
      aria-label="Why UniqueHR"
      className="relative overflow-hidden bg-cream"
      style={{
        background: "linear-gradient(180deg, #FBF8F3 0%, #F9F5F0 60%, #FBF8F3 100%)",
      }}
    >
      {/* Subtle dot grid texture */}
      <div aria-hidden className="pointer-events-none absolute left-[8%] top-[10%] opacity-25">
        <svg width="64" height="64">
          <defs>
            <pattern id="why-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="64" height="64" fill="url(#why-dots)" />
        </svg>
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(40px, 6vw, 80px)",
        }}
      >
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          {/* Visual: columns 1-6 */}
          <div className="lg:col-span-6">
            <WhyUniqueHRVisual />
          </div>

          {/* Content: columns 7-12 (wider) */}
          <div className="lg:col-span-6">
            <WhyUniqueHRContent />
          </div>
        </div>
      </div>
    </section>
  );
}
