export interface ComplianceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  ariaLabel: string;
}

export const complianceData = {
  eyebrow: "Statutory & Compliance Support",
  headline: {
    partOne: "Compliance,",
    partTwo: "handled",
    partThree: "clearly.",
  },
  supportingCopy: "Organised records, timely coordination and dependable statutory support for a more confident workforce operation.",
  trust: {
    statement: "Stay prepared. Stay confident.",
    supportLine: "Clear documentation and timely coordination help reduce avoidable compliance risk.",
    microPoints: ["Policy aligned", "Documented", "Audit ready"],
  },
  cta: { label: "Explore Compliance Support", href: "#services/payroll-compliance" },
  image: {
    src: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
    alt: "Professional reviewing compliance documents and organised records at modern desk",
  },
};

export const complianceItems: ComplianceItem[] = [
  {
    id: "employee-records",
    number: "01",
    title: "Employee records",
    description: "Accurate and organised workforce information.",
    icon: "person-document",
    ariaLabel: "Employee records management",
  },
  {
    id: "clra-coordination",
    number: "02",
    title: "CLRA coordination",
    description: "Support for applicable contract-labour documentation and processes.",
    icon: "document-workforce",
    ariaLabel: "CLRA coordination support",
  },
  {
    id: "esic-support",
    number: "03",
    title: "ESIC support",
    description: "Employee registration and statutory coordination.",
    icon: "shield-medical",
    ariaLabel: "ESIC support services",
  },
  {
    id: "pf-support",
    number: "04",
    title: "PF support",
    description: "Provident-fund documentation and process assistance.",
    icon: "savings-check",
    ariaLabel: "Provident fund support",
  },
  {
    id: "gst-returns",
    number: "05",
    title: "GST returns",
    description: "Relevant return preparation and filing coordination.",
    icon: "tax-document",
    ariaLabel: "GST returns coordination",
  },
  {
    id: "pt-challans",
    number: "06",
    title: "PT challans",
    description: "Professional-tax documentation and submission support.",
    icon: "receipt",
    ariaLabel: "PT challans support",
  },
  {
    id: "inspection-support",
    number: "07",
    title: "Inspection support",
    description: "Preparation and coordination for applicable inspections.",
    icon: "search-document",
    ariaLabel: "Inspection preparation support",
  },
  {
    id: "audit-reports",
    number: "08",
    title: "Audit reports",
    description: "Structured records and supporting documentation for review.",
    icon: "checklist-folder",
    ariaLabel: "Audit reports and documentation",
  },
];
