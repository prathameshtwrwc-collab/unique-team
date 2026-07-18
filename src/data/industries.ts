export interface Industry {
  id: string;
  number: string;
  abbreviation: string;
  title: string;
  campaignLine: string;
  description: string;
  roles: string[];
  image: string;
  icon: string;
  altText: string;
}

export const industriesData = {
  eyebrow: "Industry Coverage",
  headline: {
    lineOne: "People for every part",
    lineTwoStart: "of the",
    lineTwoAccent: "economy.",
  },
  supportingCopy: "Sector-aware recruitment and workforce support for specialised, operational and customer-facing roles.",
  cta: { label: "Explore Industries", href: "#contact" },
};

export const industries: Industry[] = [
  {
    id: "technology",
    number: "01",
    abbreviation: "TE",
    title: "Technology",
    campaignLine: "Talent for continuous innovation.",
    description: "Developers, engineers, analysts, support professionals and digital specialists.",
    roles: ["Software engineers", "Data analysts", "QA professionals", "DevOps engineers"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "circuit",
    altText: "Software developers collaborating in modern technology workspace",
  },
  {
    id: "healthcare",
    number: "02",
    abbreviation: "HE",
    title: "Healthcare",
    campaignLine: "People behind better care.",
    description: "Clinical support, administration, operations and healthcare workforce solutions.",
    roles: ["Clinical support", "Administration", "Operations", "Healthcare coordinators"],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "heart-cross",
    altText: "Healthcare professionals providing compassionate patient care",
  },
  {
    id: "manufacturing",
    number: "03",
    abbreviation: "MA",
    title: "Manufacturing",
    campaignLine: "Capability for productive operations.",
    description: "Technicians, operators, supervisors, engineers and plant professionals.",
    roles: ["Plant operators", "Technicians", "Supervisors", "Engineers"],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "factory",
    altText: "Manufacturing professionals in modern production facility",
  },
  {
    id: "logistics",
    number: "04",
    abbreviation: "LO",
    title: "Logistics",
    campaignLine: "Workforce that keeps business moving.",
    description: "Warehouse, transport, supply-chain and operational professionals.",
    roles: ["Warehouse staff", "Transport coordinators", "Supply-chain teams", "Operations staff"],
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "route",
    altText: "Logistics professionals managing warehouse and transport operations",
  },
  {
    id: "banking-finance",
    number: "05",
    abbreviation: "BF",
    title: "Banking & Finance",
    campaignLine: "Professionals built around trust.",
    description: "Finance, compliance, operations, customer service and administrative talent.",
    roles: ["Finance professionals", "Compliance teams", "Operations staff", "Customer support"],
    image: "https://images.pexels.com/photos/6814521/pexels-photo-6814521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "building",
    altText: "Finance professionals in modern banking environment",
  },
  {
    id: "retail-hospitality",
    number: "06",
    abbreviation: "RH",
    title: "Retail & Hospitality",
    campaignLine: "People who shape customer experience.",
    description: "Frontline, supervisory, operational and service professionals.",
    roles: ["Frontline staff", "Store supervisors", "Hospitality teams", "Service professionals"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "service-bell",
    altText: "Retail and hospitality professionals delivering exceptional service",
  },
  {
    id: "education",
    number: "07",
    abbreviation: "ED",
    title: "Education",
    campaignLine: "Talent that supports learning.",
    description: "Educators, administrators, coordinators and institutional support teams.",
    roles: ["Educators", "Administrators", "Coordinators", "Support teams"],
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    icon: "graduation",
    altText: "Education professionals supporting learning and development",
  },
];
