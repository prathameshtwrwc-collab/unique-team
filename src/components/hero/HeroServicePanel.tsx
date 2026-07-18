import { serviceItems } from "../../data/hero";
import { Icon } from "../ui/icons";
import { cn } from "../../utils/cn";

/**
 * Desktop: compact dark-plum panel overlapping the content / collage seam.
 * Mobile: horizontal scrollable service strip.
 */
export function HeroServicePanel({
  variant = "panel",
  className,
}: {
  variant?: "panel" | "strip";
  className?: string;
}) {
  if (variant === "strip") {
    return (
      <div className={cn("relative", className)}>
        <ul
          className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Our services"
        >
          {serviceItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <span className="flex items-center gap-2 rounded-full bg-[linear-gradient(145deg,#2E1557_0%,#4B238C_100%)] py-2.5 pl-3.5 pr-4 text-[12.5px] font-medium text-white/95 shadow-[0_10px_24px_rgba(46,21,87,0.2)]">
                <Icon name={item.icon} className="text-gold-soft" aria-hidden />
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-[250px] rounded-[18px] p-5 shadow-[0_24px_60px_rgba(46,21,87,0.35)]",
        "bg-[linear-gradient(145deg,#2E1557_0%,#4B238C_100%)]",
        className
      )}
    >
      <p className="mb-3 flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
        <span aria-hidden className="h-px w-5 bg-gold-soft/70" />
        Our Expertise
      </p>
      <ul className="flex flex-col gap-[11px]">
        {serviceItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 text-[13px] font-medium leading-tight text-white/92"
          >
            <Icon
              name={item.icon}
              className="shrink-0 text-gold-soft"
              aria-hidden
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
