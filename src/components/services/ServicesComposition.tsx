import { services } from "../../data/services";
import { ServicePanel } from "./ServicePanel";

export function ServicesComposition() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7 xl:gap-9">
      {services.map((service, i) => {
        // Wave progression: varying top offsets for desktop (reduced variation for better balance)
        const topOffsets = [
          "lg:mt-10",   // 01 - medium, lowest
          "lg:mt-2",    // 02 - tall, highest
          "lg:mt-6",    // 03 - medium-tall, middle
          "lg:mt-4",    // 04 - tall, high
          "lg:mt-8",    // 05 - medium, lower
        ];
        
        return (
          <div key={service.number} className={topOffsets[i]}>
            <ServicePanel service={service} index={i} />
          </div>
        );
      })}
    </div>
  );
}
