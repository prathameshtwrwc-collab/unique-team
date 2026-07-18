import { BadgeCheckIcon } from "../ui/icons";

export function AboutImageLabel({ text, sub }: { text: string; sub?: string; position?: "top" | "bottom" }) {
  return (
    <div className="relative z-30 flex w-[176px] flex-col gap-1 rounded-[14px] border border-[rgba(46,21,87,0.1)] bg-white/95 px-3.5 py-3 shadow-[0_14px_40px_rgba(46,21,87,0.1)] backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <BadgeCheckIcon className="text-gold-deep" aria-hidden />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-plum">
          {text}
        </span>
      </div>
      {sub && <span className="text-[11px] font-medium leading-snug text-ink-soft">{sub}</span>}
    </div>
  );
}
