import { ProcessIntro } from "./ProcessIntro";
import { ProcessJourney } from "./ProcessJourney";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Our Process"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FBF8F3 0%, #F7F2F8 48%, #FBF8F3 100%)",
      }}
    >
      {/* Subtle dot grid texture */}
      <div aria-hidden className="pointer-events-none absolute right-[12%] top-[10%] opacity-20">
        <svg width="64" height="64">
          <defs>
            <pattern id="process-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="64" height="64" fill="url(#process-dots)" />
        </svg>
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(110px, 9vw, 150px)",
        }}
      >
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {/* Intro: columns 1-5 */}
          <div className="lg:col-span-5">
            <ProcessIntro />
          </div>

          {/* Journey: columns 4-12 with overlap */}
          <div className="lg:col-span-8 lg:col-start-4">
            <ProcessJourney />
          </div>
        </div>
      </div>
    </section>
  );
}
