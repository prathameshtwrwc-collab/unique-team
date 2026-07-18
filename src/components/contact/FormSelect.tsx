import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { SelectHTMLAttributes } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={props.id} className="text-[13px] font-semibold uppercase tracking-[0.07em] text-plum">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${props.id}-error` : undefined}
            className={`h-[54px] w-full appearance-none rounded-[12px] border px-4 text-[15px] text-ink transition-all duration-300 focus:outline-none ${
              error
                ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-4 focus:ring-[#DC2626]/10"
                : "border-[rgba(46,21,87,0.16)] bg-white hover:border-[rgba(46,21,87,0.24)] focus:border-purple focus:ring-4 focus:ring-purple/10"
            }`}
            {...props}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-plum"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 5 4 4 4-4" />
          </svg>
        </div>
        {error && (
          <motion.span
            id={`${props.id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-medium text-[#DC2626]"
          >
            {error}
          </motion.span>
        )}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
