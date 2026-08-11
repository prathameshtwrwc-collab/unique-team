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
    description: "Permanent, temporary, contractual, bulk and leadership hiring across every level of your organisation. We manage everything from job profiling and candidate sourcing to interviews, offer negotiation and smooth onboarding, so you get the right people without disrupting your operations.",
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
    description: "HR policies, workforce planning, engagement, retention and organisational development. Our advisors work alongside your leadership team to build practical people strategies that support growth, improve productivity and reduce attrition, giving you a clear framework for every HR decision you make.",
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
    description: "Payroll processing, statutory coordination, labour support and audits. We keep your payroll accurate, compliant and on time while managing statutory filings and documentation, so your team can focus on the business without worrying about regulatory heavy-lifting or costly compliance gaps.",
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
    description: "Leadership, workplace capability, industry training and safety programmes. We design learning journeys that build real skills on the ground — from frontline managers to new hires — improving performance, engagement and safety standards that last beyond the training room.",
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
    description: "Multi-state sourcing, onboarding, documentation, housing and transport coordination. We handle the complete cycle for migrant and contract workforces — from recruitment in source locations to documentation, accommodation and travel — so your teams arrive ready, compliant and supported on day one.",
    cta: "Explore Workforce Solutions",
    href: "#contact",
    image: "https://images.pexels.com/photos/19544232/pexels-photo-19544232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    imageAlt: "Skilled industrial worker with safety gear in manufacturing facility",
    height: "medium",
  },
];
