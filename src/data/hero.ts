import type { IconName } from "../components/ui/icons";

export const heroContent = {
  eyebrow: "Human Resource Partner",
  headline: {
    lineOne: "The right talent.",
    lineTwoStart: "Ready to",
    lineTwoAccent: "perform.",
  },
  paragraph:
    "From specialised professionals to large-scale workforce requirements, we help businesses hire, onboard and manage people with confidence.",
  primaryCta: { label: "Hire Talent", href: "#contact" },
  secondaryCta: { label: "Explore Services", href: "#services" },
};

export interface ServiceItem {
  label: string;
  icon: IconName;
}

export const serviceItems: ServiceItem[] = [
  { label: "Staffing & Recruitment", icon: "search-user" },
  { label: "Payroll Management", icon: "coins" },
  { label: "Compliance & Risk", icon: "shield" },
  { label: "HR Consulting", icon: "chat" },
  { label: "Training & Development", icon: "graduate" },
];

export interface InfoCard {
  id: "talent" | "support" | "compliance";
  title: string;
  text: string;
  icon: IconName;
  iconTone: "purple" | "gold";
}

export const infoCards: InfoCard[] = [
  {
    id: "talent",
    title: "Top Talent Matched",
    text: "Carefully screened talent",
    icon: "badge-check",
    iconTone: "purple",
  },
  {
    id: "support",
    title: "Workforce Support",
    text: "Across the employment lifecycle",
    icon: "people",
    iconTone: "gold",
  },
  {
    id: "compliance",
    title: "Compliance You Can Trust",
    text: "Clear records. Confident operations.",
    icon: "shield",
    iconTone: "purple",
  },
];

export const heroImages = {
  lead: {
    src: "/images/hero-lead.jpg",
    alt: "Confident HR professional in a purple blazer with arms crossed, looking ahead with assurance",
  },
  laptop: {
    src: "/images/hero-laptop.jpg",
    alt: "Professional focused on his laptop in a modern office",
  },
  meeting: {
    src: "/images/hero-meeting.jpg",
    alt: "Smiling professional listening during a business meeting",
  },
  collab: {
    src: "/images/hero-collab.jpg",
    alt: "Two professionals collaborating over documents at a desk",
  },
};
