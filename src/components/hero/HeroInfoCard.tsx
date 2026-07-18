import { cn } from "../../utils/cn";
import type { InfoCard } from "../../data/hero";
import { Icon } from "../ui/icons";

interface HeroInfoCardProps {
  card: InfoCard;
  className?: string;
}

export function HeroInfoCard({ card, className }: HeroInfoCardProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-[17px] border border-[rgba(46,21,87,0.08)] bg-white p-4 shadow-[0_20px_60px_rgba(46,21,87,0.14)]",
        className
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px]",
          card.iconTone === "gold"
            ? "bg-[#FBF3E2] text-gold-deep"
            : "bg-lilac-pale text-purple"
        )}
      >
        <Icon name={card.icon} aria-hidden />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[14px] font-semibold leading-snug text-plum">
          {card.title}
        </span>
        <span className="text-[12.5px] leading-snug text-ink-soft">
          {card.text}
        </span>
      </span>
    </div>
  );
}
