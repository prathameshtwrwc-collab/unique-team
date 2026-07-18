interface IndustryControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentNumber: string;
  totalIndustries: number;
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.2 9H3.6" />
      <path d="m8.2 4.4-4.6 4.6 4.6 4.6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.8 9h11.6" />
      <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
    </svg>
  );
}

export function IndustryControls({ onPrevious, onNext, currentNumber, totalIndustries }: IndustryControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous industry"
        className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[rgba(46,21,87,0.15)] bg-white text-plum transition-all duration-300 hover:border-plum/30 hover:bg-lilac-pale hover:shadow-[0_4px_12px_rgba(46,21,87,0.1)]"
      >
        <ArrowLeft />
      </button>
      
      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
        {currentNumber} — {String(totalIndustries).padStart(2, "0")}
      </span>
      
      <button
        type="button"
        onClick={onNext}
        aria-label="Next industry"
        className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[rgba(46,21,87,0.15)] bg-white text-plum transition-all duration-300 hover:border-plum/30 hover:bg-lilac-pale hover:shadow-[0_4px_12px_rgba(46,21,87,0.1)]"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
