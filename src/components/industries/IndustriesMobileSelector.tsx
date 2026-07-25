import { useEffect, useRef, useCallback } from "react";
import { industries } from "../../data/industries";
import { IndustryCentralVisual } from "./IndustryCentralVisual";
import { IndustryDetails } from "./IndustryDetails";

const AUTO_INTERVAL = 5000;

interface IndustriesMobileSelectorProps {
  activeIndustry: string;
  onSelectIndustry: (id: string) => void;
}

export function IndustriesMobileSelector({ activeIndustry, onSelectIndustry }: IndustriesMobileSelectorProps) {
  const active = industries.find((ind) => ind.id === activeIndustry) || industries[0];
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      const currentIndex = industries.findIndex((ind) => ind.id === activeIndustry);
      const nextIndex = (currentIndex + 1) % industries.length;
      const nextId = industries[nextIndex].id;
      onSelectIndustry(nextId);
      // Scroll the button into view
      const container = scrollRef.current;
      if (container) {
        const buttons = container.querySelectorAll("button");
        if (buttons[nextIndex]) {
          buttons[nextIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }
    }, AUTO_INTERVAL);
  }, [activeIndustry, onSelectIndustry, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const handleSelect = (id: string) => {
    onSelectIndustry(id);
    stopAutoPlay();
    setTimeout(startAutoPlay, AUTO_INTERVAL);
  };

  return (
    <div className="flex flex-col gap-8 lg:hidden">
      {/* Horizontal industry selector */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex snap-x snap-mandatory gap-3 px-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              type="button"
              onClick={() => handleSelect(industry.id)}
              aria-label={`Select ${industry.title}`}
              aria-pressed={industry.id === activeIndustry}
              className={`shrink-0 snap-center rounded-[12px] border-2 px-5 py-3 text-[14px] font-semibold transition-all duration-300 ${
                industry.id === activeIndustry
                  ? "border-plum bg-plum text-white shadow-[0_8px_20px_rgba(46,21,87,0.25)]"
                  : "border-[rgba(46,21,87,0.12)] bg-white text-plum hover:border-plum/30"
              }`}
            >
              {industry.title}
            </button>
          ))}
        </div>
      </div>

      {/* Central visual */}
      <div className="flex justify-center">
        <IndustryCentralVisual industry={active} />
      </div>

      {/* Industry details */}
      <IndustryDetails industry={active} />
    </div>
  );
}
