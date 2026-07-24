import { whyUniqueHRData } from "../../data/whyUniqueHR";
import { WhyUniqueHRContent } from "./WhyUniqueHRContent";

export function WhyUniqueHRSection() {
  return (
    <section
      id="why-uniquehr"
      aria-label="Why UniqueHR"
      className="relative overflow-hidden bg-cream"
    >
      <div aria-hidden className="absolute inset-0">
        <img
          src={whyUniqueHRData.image.src}
          alt=""
          className="hidden h-full w-full object-cover object-center md:block"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="h-full w-full md:hidden"
          style={{
            background: "linear-gradient(135deg, #F7F2F8 0%, #FBF8F3 100%)",
          }}
        />
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(60px, 6vw, 90px)",
          paddingBottom: "clamp(60px, 6vw, 90px)",
        }}
      >
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          <div className="lg:col-span-6 lg:col-start-7">
            <WhyUniqueHRContent />
          </div>
        </div>
      </div>
    </section>
  );
}
