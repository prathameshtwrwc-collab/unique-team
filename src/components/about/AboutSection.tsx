import { AboutCollage } from "./AboutCollage";
import { AboutContent } from "./AboutContent";
import { AboutProofStrip } from "./AboutProofStrip";

export function AboutSection() {
  return (
    <section id="about" aria-label="About UniqueHR" className="relative overflow-hidden bg-[#F7F2F8]">
      {/* subtle decorative background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[16%] -top-[8%] h-[58%] w-[54%] rounded-full opacity-[0.22]"
          style={{ background: "radial-gradient(circle, rgba(233,223,243,0.7) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-[20%] bottom-[-20%] h-[50%] w-[60%] rounded-full opacity-[0.28]"
          style={{ background: "radial-gradient(circle, rgba(169,138,213,0.3) 0%, transparent 60%)" }}
        />
      </div>

      <div className="container-shell relative">
        {/* Main 12-column grid: collage left, content right */}
        <div
          className="grid grid-cols-1 items-start gap-y-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0"
          style={{ paddingTop: "clamp(120px, 10vw, 170px)", paddingBottom: "clamp(110px, 10vw, 160px)" }}
        >
          <div className="lg:col-span-6">
            <AboutCollage />
          </div>

          <div className="lg:col-span-6 lg:pl-6 lg:pt-12">
            <AboutContent />
          </div>
        </div>

        {/* Proof strip spanning full width - reduced gap */}
        <div className="mt-2 lg:mt-8">
          <AboutProofStrip />
        </div>
      </div>
    </section>
  );
}
