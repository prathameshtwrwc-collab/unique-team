import { industries } from "../../data/industries";
import { IndustryNode } from "./IndustryNode";
import { IndustryCentralVisual } from "./IndustryCentralVisual";

interface IndustriesOrbitProps {
  activeIndustry: string;
  onSelectIndustry: (id: string) => void;
}

export function IndustriesOrbit({ activeIndustry, onSelectIndustry }: IndustriesOrbitProps) {
  const active = industries.find((ind) => ind.id === activeIndustry) || industries[0];
  
  // Orbit configuration - reduced by another ~4% for tighter composition
  const radius = 338; // Desktop orbit radius (reduced from 356)
  const angles = [-90, -38, 12, 63, 114, 165, 216]; // 7 positions around circle

  return (
    <div className="relative flex h-[780px] w-full items-center justify-center lg:h-[860px]">
      {/* Background circle */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] lg:h-[820px] lg:w-[820px]"
        style={{
          background: "radial-gradient(circle, rgba(169,138,213,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Main orbit path */}
      <svg
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="850"
        height="850"
        viewBox="0 0 850 850"
      >
        <circle
          cx="425"
          cy="425"
          r={radius}
          fill="none"
          stroke="rgba(90,45,168,0.24)"
          strokeWidth="1.5"
        />
        {/* Secondary dotted path */}
        <circle
          cx="425"
          cy="425"
          r={radius - 45}
          fill="none"
          stroke="rgba(214,160,62,0.3)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {/* Gold orbit nodes at industry positions */}
        {angles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 425 + Math.cos(rad) * radius;
          const y = 425 + Math.sin(rad) * radius;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.5"
              fill="#D6A03E"
              opacity="0.6"
            />
          );
        })}
      </svg>

      {/* Central visual */}
      <div className="relative z-10">
        <IndustryCentralVisual industry={active} />
      </div>

      {/* Industry nodes */}
      <div className="absolute inset-0">
        {industries.map((industry, i) => (
          <IndustryNode
            key={industry.id}
            industry={industry}
            isActive={industry.id === activeIndustry}
            onClick={() => onSelectIndustry(industry.id)}
            angle={angles[i]}
            radius={radius}
          />
        ))}
      </div>
    </div>
  );
}
