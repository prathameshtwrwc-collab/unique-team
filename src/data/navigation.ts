export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const utilityLinks: NavLink[] = [
  { label: "Careers", href: "#contact" },
  { label: "Resources", href: "#contact" },
  { label: "Support", href: "#contact" },
];

export const utilityMessage = "Your growth. Our people. Shared success.";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];
