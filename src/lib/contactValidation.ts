import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  workEmail: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().min(5, "Contact number is required"),
  serviceRequired: z.string().min(1, "Please select a service"),
  numberOfPositions: z.string().min(1, "Please select number of positions"),
  preferredTimeline: z.string().min(1, "Please select preferred timeline"),
  requirementDetails: z.string().min(20, "Please provide at least 20 characters").max(2000, "Maximum 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceOptions = [
  "Staffing & Recruitment",
  "HR Advisory",
  "Payroll & Compliance",
  "Training & Development",
  "Migrant Workforce Solutions",
  "Other Requirement",
];

export const positionOptions = [
  "1 position",
  "2–5 positions",
  "6–20 positions",
  "21–50 positions",
  "51–100 positions",
  "More than 100",
];

export const timelineOptions = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2–3 months",
  "Planning stage",
];
