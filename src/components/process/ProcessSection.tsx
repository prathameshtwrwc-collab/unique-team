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
      <div aria-hidden className="pointer-events-none absolute right-[8%] top-[6%] hidden opacity-15 lg:block">
        <svg width="80" height="80">
          <defs>
            <pattern id="process-dots-new" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#5A2DA8" />
            </pattern>
          </defs>
          <rect width="80" height="80" fill="url(#process-dots-new)" />
        </svg>
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(60px, 6vw, 90px)",
          paddingBottom: "clamp(60px, 6vw, 90px)",
        }}
      >
        <div className="mx-auto max-w-[900px] text-center">
          <ProcessIntro />
        </div>

        <div className="mt-14 lg:mt-16">
          <ProcessJourney />
        </div>
      </div>
    </section>
  );
}
