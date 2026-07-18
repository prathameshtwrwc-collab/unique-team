import { industries } from "../../data/industries";
import { IndustryCentralVisual } from "./IndustryCentralVisual";
import { IndustryDetails } from "./IndustryDetails";

interface IndustriesMobileSelectorProps {
  activeIndustry: string;
  onSelectIndustry: (id: string) => void;
}

export function IndustriesMobileSelector({ activeIndustry, onSelectIndustry }: IndustriesMobileSelectorProps) {
  const active = industries.find((ind) => ind.id === activeIndustry) || industries[0];

  return (
    <div className="flex flex-col gap-8 lg:hidden">
      {/* Horizontal industry selector */}
      <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-3 px-1">
          {industries.map((industry) => (
            <button
              key={industry.id}
              type="button"
              onClick={() => onSelectIndustry(industry.id)}
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
        <div className="w-[85vw] max-w-[400px]">
          <IndustryCentralVisual industry={active} />
        </div>
      </div>

      {/* Industry details */}
      <IndustryDetails industry={active} />
    </div>
  );
}
