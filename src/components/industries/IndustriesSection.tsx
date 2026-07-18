import { useState } from "react";
import { industries, industriesData } from "../../data/industries";
import { IndustriesIntro } from "./IndustriesIntro";
import { IndustriesOrbit } from "./IndustriesOrbit";
import { IndustriesMobileSelector } from "./IndustriesMobileSelector";
import { IndustryDetails } from "./IndustryDetails";
import { IndustryControls } from "./IndustryControls";
import { ArrowRightIcon } from "../ui/icons";

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id); // Technology default

  const currentIndex = industries.findIndex((ind) => ind.id === activeIndustry);
  const active = industries[currentIndex];

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    setActiveIndustry(industries[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex === industries.length - 1 ? 0 : currentIndex + 1;
    setActiveIndustry(industries[newIndex].id);
  };

  return (
    <section
      id="industries"
      aria-label="Industries We Serve"
      className="relative overflow-hidden bg-[#F7F2F8]"
      style={{
        background:
          "radial-gradient(circle at 70% 45%, rgba(169,138,213,0.12) 0%, rgba(247,242,248,0) 55%), #F7F2F8",
      }}
    >
      {/* Dot grid texture */}
      <div aria-hidden className="pointer-events-none absolute left-[10%] top-[8%] opacity-20">
        <svg width="72" height="72">
          <defs>
            <pattern id="industries-dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#A98AD5" />
            </pattern>
          </defs>
          <rect width="72" height="72" fill="url(#industries-dots)" />
        </svg>
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(80px, 7vw, 120px)",
        }}
      >
        {/* Desktop layout */}
        <div className="hidden gap-y-16 lg:grid lg:grid-cols-12 lg:gap-x-6 xl:gap-x-8">
          {/* Left: Content (columns 1-5) */}
          <div className="lg:col-span-5">
            <IndustriesIntro />

            {/* Active industry details */}
            <div className="mt-10 lg:mt-12">
              <IndustryDetails industry={active} />
            </div>

            {/* Controls */}
            <div className="mt-8 lg:mt-10">
              <IndustryControls
                onPrevious={handlePrevious}
                onNext={handleNext}
                currentNumber={active.number}
                totalIndustries={industries.length}
              />
            </div>

            {/* CTA */}
            <div className="mt-8 lg:mt-10">
              <a
                href={industriesData.cta.href}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-plum transition-colors duration-300 hover:text-purple"
              >
                <span>{industriesData.cta.label}</span>
                <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-[4px]" />
              </a>
            </div>
          </div>

          {/* Right: Orbit (columns 6-12, moved left with negative margin) */}
          <div className="lg:col-span-7 lg:-ml-12 xl:-ml-16 lg:-mt-8">
            <IndustriesOrbit activeIndustry={activeIndustry} onSelectIndustry={setActiveIndustry} />
          </div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className="lg:hidden">
          <IndustriesIntro />
          <div className="mt-10">
            <IndustriesMobileSelector activeIndustry={activeIndustry} onSelectIndustry={setActiveIndustry} />
          </div>

          {/* Mobile controls */}
          <div className="mt-8">
            <IndustryControls
              onPrevious={handlePrevious}
              onNext={handleNext}
              currentNumber={active.number}
              totalIndustries={industries.length}
            />
          </div>

          {/* Mobile CTA */}
          <div className="mt-8">
            <a
              href={industriesData.cta.href}
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-plum transition-colors duration-300 hover:text-purple"
            >
              <span>{industriesData.cta.label}</span>
              <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-[4px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
