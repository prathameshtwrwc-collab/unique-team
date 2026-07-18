import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, serviceOptions, positionOptions, timelineOptions, type ContactFormData } from "../../lib/contactValidation";
import { submitRequirement } from "../../lib/submitRequirement";
import { contactData } from "../../data/contact";
import { FormField } from "./FormField";
import { FormSelect } from "./FormSelect";
import { FormTextarea } from "./FormTextarea";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { fadeUp, defaultViewport } from "../../lib/animations";

type FormState = "idle" | "submitting" | "success" | "error";

export function RequirementForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("submitting");
    try {
      await submitRequirement(data);
      setFormState("success");
    } catch (error) {
      console.error("Submission error:", error);
      setFormState("error");
    }
  };

  const handleSubmitAnother = () => {
    reset();
    setFormState("idle");
  };

  if (formState === "success") {
    return <FormSuccess onSubmitAnother={handleSubmitAnother} />;
  }

  if (formState === "error") {
    return <FormError onTryAgain={handleSubmitAnother} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Submit your requirement form">
      <div className="mb-7">
        <h3 className="text-[26px] font-serif leading-tight text-plum lg:text-[28px]">
          {contactData.form.title}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft lg:text-[15px]">
          {contactData.form.supportingLine}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Row 1 */}
        <motion.div variants={fadeUp(0.6, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormField
            id="fullName"
            label="Full name"
            autocomplete="name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
        </motion.div>

        <motion.div variants={fadeUp(0.65, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormField
            id="companyName"
            label="Company name"
            autocomplete="organization"
            error={errors.companyName?.message}
            {...register("companyName")}
          />
        </motion.div>

        {/* Row 2 */}
        <motion.div variants={fadeUp(0.7, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormField
            id="workEmail"
            label="Work email"
            type="email"
            autocomplete="email"
            error={errors.workEmail?.message}
            {...register("workEmail")}
          />
        </motion.div>

        <motion.div variants={fadeUp(0.75, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormField
            id="contactNumber"
            label="Contact number"
            type="tel"
            autocomplete="tel"
            error={errors.contactNumber?.message}
            {...register("contactNumber")}
          />
        </motion.div>

        {/* Row 3 */}
        <motion.div variants={fadeUp(0.8, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormSelect
            id="serviceRequired"
            label="Service required"
            options={["Select a service", ...serviceOptions]}
            error={errors.serviceRequired?.message}
            {...register("serviceRequired")}
          />
        </motion.div>

        <motion.div variants={fadeUp(0.85, 10, 0.5)} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <FormSelect
            id="numberOfPositions"
            label="Number of positions"
            options={["Select number", ...positionOptions]}
            error={errors.numberOfPositions?.message}
            {...register("numberOfPositions")}
          />
        </motion.div>

        {/* Row 4: Preferred timeline — full width */}
        <motion.div
          variants={fadeUp(0.9, 10, 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="md:col-span-2"
        >
          <FormSelect
            id="preferredTimeline"
            label="Preferred timeline"
            options={["Select timeline", ...timelineOptions]}
            error={errors.preferredTimeline?.message}
            {...register("preferredTimeline")}
          />
        </motion.div>

        {/* Row 5: Requirement details — full width */}
        <motion.div
          variants={fadeUp(0.95, 10, 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="md:col-span-2"
        >
          <FormTextarea
            id="requirementDetails"
            label="Requirement details"
            placeholder={contactData.form.detailsPlaceholder}
            error={errors.requirementDetails?.message}
            {...register("requirementDetails")}
          />
        </motion.div>
      </div>

      {/* Bottom row: Consent + Submit */}
      <motion.div
        variants={fadeUp(1.0, 10, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        <p className="text-[13px] leading-[1.6] text-ink-soft">
          {contactData.form.consentText}{" "}
          <a href="#privacy" className="font-semibold text-purple underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          disabled={formState === "submitting"}
          aria-busy={formState === "submitting"}
          className="group inline-flex h-[56px] w-full items-center justify-center gap-2.5 rounded-[13px] bg-plum px-7 text-[15px] font-semibold text-white shadow-[0_16px_40px_rgba(46,21,87,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-purple-deep hover:shadow-[0_18px_44px_rgba(46,21,87,0.36)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-plum md:w-auto"
        >
          {formState === "submitting" ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Submitting…</span>
            </>
          ) : (
            <>
              <span>{contactData.form.submitLabel}</span>
              <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-[5px]">
                <path d="M2.8 9h11.6" />
                <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
              </svg>
            </>
          )}
        </button>
      </motion.div>
    </form>
  );
}
