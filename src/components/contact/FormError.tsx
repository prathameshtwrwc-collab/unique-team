import { motion } from "framer-motion";
import { MailIcon } from "../ui/icons";
import { fadeUp } from "../../lib/animations";

interface FormErrorProps {
  onTryAgain: () => void;
}

export function FormError({ onTryAgain }: FormErrorProps) {
  return (
    <motion.div
      variants={fadeUp(0, 16, 0.6)}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center gap-6 text-center"
      role="alert"
      aria-live="assertive"
    >
      {/* Error icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FEE2E2]">
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8v5M12 16.5v.5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>

      <div>
        <h4 className="text-[28px] font-serif leading-tight text-plum">Something went wrong.</h4>
        <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-ink-soft">
          Your requirement could not be submitted. Please try again or contact us directly.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onTryAgain}
          className="rounded-[12px] bg-plum px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-purple-deep"
        >
          Try again
        </button>

        <a
          href="mailto:[CLIENT EMAIL]"
          className="inline-flex items-center gap-2 rounded-[12px] border border-[rgba(46,21,87,0.2)] px-6 py-3 text-[14px] font-semibold text-plum transition-all hover:border-plum/40 hover:bg-lilac-pale"
        >
          <MailIcon />
          Send an email
        </a>
      </div>
    </motion.div>
  );
}
