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
    phone: "+91 8422976666",
    email: "account@uniqueteam.in",
    website: "www.uniqueteam.in",
    office: "FA 18 First Floor Lake City Mall Kapurbawadi Junction Thane(W) 400607 Mumbai, India",
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
        { label: "Careers", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Staffing & Recruitment", href: "#services" },
        { label: "HR Advisory", href: "#services" },
        { label: "Payroll & Compliance", href: "#services" },
        { label: "Training & Development", href: "#services" },
        { label: "Migrant Workforce Solutions", href: "#services" },
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
    { label: "LinkedIn", href: "#", ariaLabel: "Visit UniqueHR on LinkedIn" },
    { label: "Instagram", href: "#", ariaLabel: "Visit UniqueHR on Instagram" },
    { label: "Facebook", href: "#", ariaLabel: "Visit UniqueHR on Facebook" },
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
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms & Conditions", href: "#contact" },
      { label: "Sitemap", href: "#contact" },
    ],
    tagline: "People placed with purpose.",
  },
};
