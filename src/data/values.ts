export interface Value {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  size: "featured" | "medium" | "compact";
}

export const valuesData = {
  eyebrow: "What Guides Us",
  headline: "Professional in process. Human in approach.",
  supportingCopy: "Six principles shape every conversation, placement and workforce relationship.",
};

export const values: Value[] = [
  {
    id: "client-focus",
    number: "01",
    title: "Client focus",
    summary: "We begin with the business need, not a ready-made solution.",
    detail: "Every engagement is shaped around how the client's organisation, roles and workforce actually operate.",
    size: "featured",
  },
  {
    id: "integrity",
    number: "02",
    title: "Integrity",
    summary: "Clear commitments. Honest communication.",
    detail: "We value transparency, responsible processes and dependable follow-through.",
    size: "medium",
  },
  {
    id: "excellence",
    number: "03",
    title: "Excellence",
    summary: "High standards at every stage.",
    detail: "From sourcing and screening to coordination and workforce support, quality remains central.",
    size: "medium",
  },
  {
    id: "innovation",
    number: "04",
    title: "Innovation",
    summary: "Smarter ways to improve hiring.",
    detail: "We continuously refine our methods, tools and processes to improve recruitment outcomes.",
    size: "compact",
  },
  {
    id: "collaboration",
    number: "05",
    title: "Collaboration",
    summary: "Better results through close coordination.",
    detail: "We work as an extension of the client's team, sharing responsibility for the outcome.",
    size: "compact",
  },
  {
    id: "inclusion",
    number: "06",
    title: "Inclusion",
    summary: "Capability deserves fair opportunity.",
    detail: "We support access to opportunities across regions, industries and professional backgrounds.",
    size: "compact",
  },
];
