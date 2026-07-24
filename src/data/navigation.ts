export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const utilityLinks: NavLink[] = [
  { label: "account@uniqueteam.in", href: "mailto:account@uniqueteam.in" },
  { label: "+91 8422976666", href: "tel:+918422976666" },
];

export const utilityMessage = "Reach us at account@uniqueteam.in · +91 8422976666";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];
