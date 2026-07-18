import { proofPoints } from "../../data/about";
import { AboutProofItem } from "./AboutProofItem";

export function AboutProofStrip() {
  return (
    <div className="relative border-t border-[rgba(46,21,87,0.14)] pt-8 md:pt-12">
      {/* subtle gold vertical accent near the proof strip */}
      <div aria-hidden className="absolute -top-[26px] left-0 hidden h-[14px] w-px bg-gold/80 md:block" />
      <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-0 md:divide-x md:divide-[rgba(46,21,87,0.15)] md:[&>article:first-child]:border-t-0 md:[&>article:first-child]:pt-0 md:[&>article:first-child]:border-none">
        {proofPoints.map((item) => (
          <AboutProofItem key={item.number} item={item} />
        ))}
      </div>
    </div>
  );
}
