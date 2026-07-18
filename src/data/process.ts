export interface ProcessStep {
  id: string;
  number: string;
  shortName: string;
  title: string;
  description: string;
  icon: string;
  ariaLabel: string;
}

export const processData = {
  eyebrow: "Our Process",
  headline: {
    lineOne: "A clear route from",
    lineTwoStart: "requirement to",
    lineTwoAccent: "results.",
  },
  supportingCopy: "Every engagement follows a structured path, with clear coordination at each stage.",
  cta: { label: "See how we work", href: "#contact" },
};

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    shortName: "Understand",
    title: "Understand the requirement",
    description: "We learn about the role, skills, workplace, timeline and team expectations.",
    icon: "conversation",
    ariaLabel: "Step 1: Understand the requirement",
  },
  {
    id: "plan",
    number: "02",
    shortName: "Plan",
    title: "Build the hiring approach",
    description: "We define sourcing methods, screening criteria, responsibilities and delivery timelines.",
    icon: "document",
    ariaLabel: "Step 2: Build the hiring approach",
  },
  {
    id: "source",
    number: "03",
    shortName: "Source",
    title: "Reach relevant talent",
    description: "We identify candidates through focused networks, databases, referrals and industry channels.",
    icon: "search",
    ariaLabel: "Step 3: Reach relevant talent",
  },
  {
    id: "screen",
    number: "04",
    shortName: "Screen",
    title: "Assess skills and suitability",
    description: "Profiles are reviewed for experience, capability, availability and role alignment.",
    icon: "profile-check",
    ariaLabel: "Step 4: Assess skills and suitability",
  },
  {
    id: "coordinate",
    number: "05",
    shortName: "Coordinate",
    title: "Make selection easier",
    description: "We manage interviews, communication, feedback and candidate follow-ups.",
    icon: "calendar",
    ariaLabel: "Step 5: Make selection easier",
  },
  {
    id: "document",
    number: "06",
    shortName: "Document",
    title: "Complete formalities",
    description: "Required records, identity details and employment documents are organised.",
    icon: "document-shield",
    ariaLabel: "Step 6: Complete formalities",
  },
  {
    id: "onboard",
    number: "07",
    shortName: "Onboard",
    title: "Prepare people to begin well",
    description: "We support joining coordination, orientation and workforce deployment.",
    icon: "person-check",
    ariaLabel: "Step 7: Prepare people to begin well",
  },
  {
    id: "support",
    number: "08",
    shortName: "Support",
    title: "Stay involved after placement",
    description: "Payroll, compliance and ongoing workforce coordination continue where required.",
    icon: "headset",
    ariaLabel: "Step 8: Stay involved after placement",
  },
];
