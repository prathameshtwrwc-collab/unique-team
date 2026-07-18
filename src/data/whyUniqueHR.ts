export const whyUniqueHRData = {
  eyebrow: "Why UniqueHR",
  headline: {
    lineOne: "Hiring support that works",
    lineTwoStart: "like part of your",
    lineTwoAccent: "team.",
  },
  supportingCopy:
    "We combine recruitment understanding, operational discipline and responsive support to make workforce decisions easier.",
  cta: { label: "Why Work With Us", href: "#about" },
  quote: {
    text: "We do not simply fill vacancies. We help businesses build teams prepared for what comes next.",
  },
  image: {
    src: "https://images.pexels.com/photos/9623645/pexels-photo-9623645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Experienced business professional in tailored suit exuding confidence and expertise",
  },
};

export interface Benefit {
  number: string;
  title: string;
  line: string;
  icon: "chart" | "person-sliders" | "shield-doc" | "message" | "team-expand";
  width: string;
  bg: "white" | "lilac";
}

export const benefits: Benefit[] = [
  {
    number: "01",
    title: "Industry understanding",
    line: "Recruitment shaped around the roles, realities and expectations of your sector.",
    icon: "chart",
    width: "lg:w-[92%]",
    bg: "white",
  },
  {
    number: "02",
    title: "Hiring shaped around you",
    line: "Sourcing and screening aligned with your requirements, timelines and workplace.",
    icon: "person-sliders",
    width: "lg:w-[100%]",
    bg: "lilac",
  },
  {
    number: "03",
    title: "Compliance-led execution",
    line: "Documentation and statutory coordination considered throughout the workforce lifecycle.",
    icon: "shield-doc",
    width: "lg:w-[88%]",
    bg: "white",
  },
  {
    number: "04",
    title: "Consistent communication",
    line: "Clear ownership, dependable updates and coordinated follow-through.",
    icon: "message",
    width: "lg:w-[96%]",
    bg: "lilac",
  },
  {
    number: "05",
    title: "Support that scales",
    line: "From a specialist requirement to complete operational teams.",
    icon: "team-expand",
    width: "lg:w-[90%]",
    bg: "white",
  },
];
