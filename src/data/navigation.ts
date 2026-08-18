export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const utilityLinks: NavLink[] = [
  { label: "account@uniqueteam.in", href: "mailto:account@uniqueteam.in" },
  { label: "+91 9653107131", href: "tel:+919653107131" },
];

export const utilityMessage = "Reach us at account@uniqueteam.in · +91 9653107131";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];
