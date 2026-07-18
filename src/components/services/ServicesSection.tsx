import { ServicesIntro } from "./ServicesIntro";
import { ServicesComposition } from "./ServicesComposition";
import { ServicesMobileCarousel } from "./ServicesMobileCarousel";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F7F2F8 0%, #FBF8F3 18%, #FBF8F3 100%)",
      }}
    >
      {/* Subtle ambient lilac shape */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[8%] top-[12%] h-[40%] w-[35%] rounded-full opacity-[0.15]"
          style={{ background: "radial-gradient(circle, rgba(169,138,213,0.4) 0%, transparent 70%)" }}
        />
      </div>

      <div
        className="container-shell relative"
        style={{
          paddingTop: "clamp(120px, 10vw, 170px)",
          paddingBottom: "clamp(120px, 10vw, 170px)",
        }}
      >
        <ServicesIntro />

        {/* Services composition with generous separation */}
        <div style={{ marginTop: "clamp(70px, 7vw, 110px)" }}>
          {/* Desktop: Wave composition */}
          <div className="hidden lg:block">
            <ServicesComposition />
          </div>

          {/* Mobile/Tablet: Carousel */}
          <ServicesMobileCarousel />
        </div>
      </div>
    </section>
  );
}
