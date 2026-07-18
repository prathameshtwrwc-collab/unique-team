import { useState, type UIEvent } from "react";
import { services } from "../../data/services";
import { ServiceImage } from "./ServiceImage";
import { ServiceLink } from "./ServiceLink";

export function ServicesMobileCarousel() {
  const [current, setCurrent] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    if (newIndex !== current && newIndex >= 0 && newIndex < services.length) {
      setCurrent(newIndex);
    }
  };

  return (
    <div className="lg:hidden">
      <div
        className="relative overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}
      >
        <div className="flex snap-x snap-mandatory gap-6 px-1">
          {services.map((service, i) => (
            <div key={service.number} className="w-[85vw] shrink-0 snap-center sm:w-[75vw]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                    {service.number}
                  </span>
                  <span className="h-px w-6 bg-gold/40" />
                </div>

                <ServiceImage src={service.image} alt={service.imageAlt} height={service.height} delay={0.1 * i} />

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[24px] font-serif leading-tight text-plum">{service.title}</h3>
                  <p className="text-[15px] font-display italic leading-snug text-purple">{service.campaignLine}</p>
                  <p className="text-[14px] leading-[1.55] text-ink-soft">{service.description}</p>
                  <div className="mt-2">
                    <ServiceLink href={service.href}>{service.cta}</ServiceLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to service ${i + 1}`}
            onClick={() => {
              const container = document.querySelector(".snap-x");
              if (container) {
                const cards = container.children;
                (cards[i] as HTMLElement)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-gold" : "w-1.5 bg-gold/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
