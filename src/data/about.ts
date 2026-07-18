export const aboutData = {
  eyebrow: "About UniqueHR",
  headline: {
    lineOne: "Built for growth.",
    lineTwoStart: "Grounded in",
    lineTwoAccent: "people.",
  },
  primaryParagraph:
    "Great businesses are built by capable people. We help organisations find, onboard and support professionals who fit the work, the culture and the ambition behind it.",
  secondaryParagraph:
    "Whether you need one specialist, an entire operational team or ongoing workforce management, our solutions are shaped around the way your business actually works.",
  cta: { label: "Discover Our Approach", href: "#services" },
};

export interface ProofPoint {
  number: string;
  title: string;
  line: string;
}

export const proofPoints: ProofPoint[] = [
  {
    number: "01",
    title: "Multiple industries",
    line: "Sector-aware recruitment across professional and operational roles.",
  },
  {
    number: "02",
    title: "Complete HR support",
    line: "From workforce planning and hiring to onboarding, payroll and compliance.",
  },
  {
    number: "03",
    title: "Flexible engagement",
    line: "One specialist, a project team or a complete workforce requirement.",
  },
];
