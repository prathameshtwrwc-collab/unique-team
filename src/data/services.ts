export interface Service {
  number: string;
  title: string;
  campaignLine: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  height: "medium" | "tall" | "medium-tall";
}

export const services: Service[] = [
  {
    number: "01",
    title: "Staffing & Recruitment",
    campaignLine: "The right people for the work ahead.",
    description: "Permanent, temporary, contractual, bulk and leadership hiring.",
    cta: "Explore Recruitment",
    href: "#contact",
    image: "/images/service-recruitment.jpg",
    imageAlt: "Professional interview showing employer and candidate in focused discussion",
    height: "medium",
  },
  {
    number: "02",
    title: "HR Advisory",
    campaignLine: "Better people decisions start with a clear plan.",
    description: "HR policies, workforce planning, engagement, retention and organisational development.",
    cta: "Explore HR Advisory",
    href: "#contact",
    image: "/images/service-advisory.jpg",
    imageAlt: "HR consultant and business leader reviewing workforce planning documents",
    height: "tall",
  },
  {
    number: "03",
    title: "Payroll & Compliance",
    campaignLine: "Accurate. Timely. Accountable.",
    description: "Payroll processing, statutory coordination, labour support and audits.",
    cta: "Explore Payroll Support",
    href: "#contact",
    image: "/images/service-payroll.jpg",
    imageAlt: "Professional reviewing payroll documents and compliance records",
    height: "medium-tall",
  },
  {
    number: "04",
    title: "Training & Development",
    campaignLine: "Build skills that strengthen the business.",
    description: "Leadership, workplace capability, industry training and safety programmes.",
    cta: "Explore Training",
    href: "#contact",
    image: "https://images.pexels.com/photos/6814351/pexels-photo-6814351.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    imageAlt: "Trainer leading a workplace training session with whiteboard discussion",
    height: "tall",
  },
  {
    number: "05",
    title: "Migrant Workforce Solutions",
    campaignLine: "Workforce mobility, managed responsibly.",
    description: "Multi-state sourcing, onboarding, documentation, housing and transport coordination.",
    cta: "Explore Workforce Solutions",
    href: "#contact",
    image: "https://images.pexels.com/photos/19544232/pexels-photo-19544232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    imageAlt: "Skilled industrial worker with safety gear in manufacturing facility",
    height: "medium",
  },
];
