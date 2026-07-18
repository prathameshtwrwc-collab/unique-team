import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

interface FormSuccessProps {
  onSubmitAnother: () => void;
}

export function FormSuccess({ onSubmitAnother }: FormSuccessProps) {
  return (
    <motion.div
      variants={fadeUp(0, 16, 0.6)}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center gap-6 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Success icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lilac">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#5A2DA8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 13 4 4L19 7" />
        </svg>
      </div>

      <div>
        <h4 className="text-[28px] font-serif leading-tight text-plum">Requirement received.</h4>
        <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-ink-soft">
          Thank you for sharing the details. Our team will review the requirement and contact you using the information provided.
        </p>
      </div>

      <button
        type="button"
        onClick={onSubmitAnother}
        className="text-[14px] font-semibold text-purple underline-offset-4 transition-colors hover:text-purple-deep hover:underline"
      >
        Submit another requirement
      </button>

      <a
        href="#home"
        className="text-[13px] font-medium text-ink-soft transition-colors hover:text-plum"
      >
        Return to top
      </a>
    </motion.div>
  );
}
