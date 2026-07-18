import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  autocomplete?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, autocomplete, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={props.id} className="text-[13px] font-semibold uppercase tracking-[0.07em] text-plum">
          {label}
        </label>
        <input
          ref={ref}
          autoComplete={autocomplete}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          className={`h-[54px] rounded-[12px] border px-4 text-[15px] text-ink transition-all duration-300 focus:outline-none ${
            error
              ? "border-[#DC2626] focus:border-[#DC2626] focus:ring-4 focus:ring-[#DC2626]/10"
              : "border-[rgba(46,21,87,0.16)] bg-white hover:border-[rgba(46,21,87,0.24)] focus:border-purple focus:ring-4 focus:ring-purple/10"
          }`}
          {...props}
        />
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

FormField.displayName = "FormField";
