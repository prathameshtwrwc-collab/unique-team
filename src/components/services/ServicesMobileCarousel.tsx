import { useState, useEffect, useRef, useCallback, type UIEvent } from "react";
import { services } from "../../data/services";
import { ServiceImage } from "./ServiceImage";
import { ServiceLink } from "./ServiceLink";

const AUTO_INTERVAL = 4500;

export function ServicesMobileCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const scrollTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.children[0]?.children;
    if (!cards || !cards[index]) return;
    (cards[index] as HTMLElement).scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setCurrent(index);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % services.length;
        const container = containerRef.current;
        if (container) {
          const cards = container.children[0]?.children;
          if (cards?.[next]) {
            (cards[next] as HTMLElement).scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        }
        return next;
      });
    }, AUTO_INTERVAL);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const handleScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.children[0]?.children[0]?.clientWidth || 0;
    const gap = 24;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    if (newIndex !== current && newIndex >= 0 && newIndex < services.length) {
      setCurrent(newIndex);
    }
    stopAutoPlay();
    setTimeout(startAutoPlay, AUTO_INTERVAL);
  }, [current, stopAutoPlay, startAutoPlay]);

  return (
    <div className="lg:hidden">
      <div
        ref={containerRef}
        className="relative overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}
      >
        <div className="flex snap-x snap-mandatory gap-6 px-4 sm:px-6">
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
                  <p className="text-[15px] font-serif italic leading-snug text-purple">{service.campaignLine}</p>
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
            onClick={() => { scrollTo(i); stopAutoPlay(); setTimeout(startAutoPlay, AUTO_INTERVAL); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-gold" : "w-1.5 bg-gold/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
