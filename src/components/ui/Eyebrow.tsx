import { PeopleIcon } from "./icons";

export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3">
      <span
        aria-hidden
        className="h-px w-8 bg-gradient-to-r from-gold to-gold-soft"
      />
      <PeopleIcon className="shrink-0 text-gold" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep lg:text-[12px]">
        {children}
      </span>
    </p>
  );
}
