import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { ArrowRightIcon, CompassIcon } from "./icons";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[13px] px-7 text-[15px] font-semibold transition-all duration-300 will-change-transform",
        isPrimary
          ? "bg-purple text-white shadow-[0_12px_28px_rgba(90,45,168,0.28)] hover:-translate-y-[1px] hover:bg-purple-deep hover:shadow-[0_16px_36px_rgba(90,45,168,0.36)] active:scale-[0.98]"
          : "border border-purple/30 bg-[#FFFDF9] text-plum hover:border-purple hover:bg-[#F1E9F6]",
        className
      )}
    >
      <span>{children}</span>
      {isPrimary ? (
        <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-[4px]" />
      ) : (
        <CompassIcon className="text-purple transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      )}
    </a>
  );
}
