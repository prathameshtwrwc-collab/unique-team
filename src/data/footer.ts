export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroupData {
  title: string;
  links: FooterLink[];
}

export const footerData = {
  brand: {
    statement: "People placed with purpose. We help businesses hire, onboard and manage professionals who fit the work, the culture and the ambition behind it.",
    phone: "+1 (234) 567-890",
    email: "info@uniquehr.com",
    office: "Mumbai, India",
  },
  linkGroups: [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Industries", href: "#industries" },
        { label: "Our Process", href: "#process" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Staffing & Recruitment", href: "#services/staffing-recruitment" },
        { label: "HR Advisory", href: "#services/hr-advisory" },
        { label: "Payroll & Compliance", href: "#services/payroll-compliance" },
        { label: "Training & Development", href: "#services/training-development" },
        { label: "Migrant Workforce Solutions", href: "#services/migrant-workforce" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Technology", href: "#industries" },
        { label: "Healthcare", href: "#industries" },
        { label: "Manufacturing", href: "#industries" },
        { label: "Logistics", href: "#industries" },
        { label: "Banking & Finance", href: "#industries" },
        { label: "Retail & Hospitality", href: "#industries" },
        { label: "Education", href: "#industries" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "[PLACEHOLDER]", ariaLabel: "Visit UniqueHR on LinkedIn" },
    { label: "Instagram", href: "[PLACEHOLDER]", ariaLabel: "Visit UniqueHR on Instagram" },
    { label: "Facebook", href: "[PLACEHOLDER]", ariaLabel: "Visit UniqueHR on Facebook" },
  ],
  closingLine: {
    partOne: "Your growth.",
    accent: "Our people.",
    partTwo: "Shared success.",
  },
  cta: { label: "Start a conversation", href: "#contact" },
  legal: {
    copyright: "© 2026 UniqueHR. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#privacy-policy" },
      { label: "Terms & Conditions", href: "#terms-and-conditions" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    tagline: "People placed with purpose.",
  },
};
