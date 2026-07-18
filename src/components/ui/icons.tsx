import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "people"
  | "sparkle"
  | "mail"
  | "speech"
  | "arrow-right"
  | "compass"
  | "search-user"
  | "coins"
  | "shield"
  | "chat"
  | "graduate"
  | "badge-check";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PeopleIcon(props: P) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" {...base} {...props}>
      <circle cx="7" cy="6.5" r="2.6" />
      <path d="M2.4 16.2c.6-3 2.5-4.4 4.6-4.4s4 1.4 4.6 4.4" />
      <circle cx="14.2" cy="7.6" r="2" />
      <path d="M13 11.6c2.4-.3 4.2 1.1 4.7 3.6" />
    </svg>
  );
}

export function SparkleIcon(props: P) {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" {...props}>
      <path d="M8 1.2 9.4 6l4.8 1.5L9.4 9 8 13.8 6.6 9 1.8 7.5 6.6 6 8 1.2Z" />
    </svg>
  );
}

export function MailIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="13" height="13" {...base} {...props}>
      <rect x="2" y="4" width="14" height="10.5" rx="2" />
      <path d="m2.6 5.3 6.4 5 6.4-5" />
    </svg>
  );
}

export function SpeechIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M15.5 8.4c0 3.1-2.9 5.5-6.5 5.5-.8 0-1.6-.1-2.3-.4L3 14.7l.9-2.6C2.9 11.1 2.5 9.8 2.5 8.4 2.5 5.3 5.4 3 9 3s6.5 2.4 6.5 5.4Z" />
      <path d="M6.2 8.4h.01M9 8.4h.01M11.8 8.4h.01" strokeWidth={2.2} />
    </svg>
  );
}

export function ArrowRightIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M2.8 9h11.6" />
      <path d="m9.8 4.4 4.6 4.6-4.6 4.6" />
    </svg>
  );
}

export function CompassIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M3.5 14.5 14.5 3.5" />
      <path d="M7.2 3.5h7.3v7.3" />
    </svg>
  );
}

export function SearchUserIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <circle cx="8" cy="8" r="5.2" />
      <path d="m15.6 15.6-3.2-3.2" />
      <circle cx="8" cy="6.8" r="1.6" />
      <path d="M5.4 11.2c.5-1.5 1.5-2.2 2.6-2.2s2.1.7 2.6 2.2" />
    </svg>
  );
}

export function CoinsIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <ellipse cx="9" cy="4.6" rx="5.6" ry="2.4" />
      <path d="M3.4 4.6v4.2c0 1.3 2.5 2.4 5.6 2.4s5.6-1.1 5.6-2.4V4.6" />
      <path d="M3.4 8.8v4.2c0 1.3 2.5 2.4 5.6 2.4s5.6-1.1 5.6-2.4V8.8" />
    </svg>
  );
}

export function ShieldIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M9 1.8 15 4v4.6c0 3.8-2.6 6.5-6 7.6-3.4-1.1-6-3.8-6-7.6V4l6-2.2Z" />
      <path d="m6.4 8.8 1.8 1.8 3.4-3.5" />
    </svg>
  );
}

export function ChatIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M15.5 7.2c0 2.9-2.9 5.2-6.5 5.2-.6 0-1.2-.1-1.7-.2L4 13.6l.6-2.2C3.3 10.4 2.5 8.9 2.5 7.2 2.5 4.3 5.4 2 9 2s6.5 2.3 6.5 5.2Z" />
    </svg>
  );
}

export function GraduateIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="m9 3 7.5 3.4L9 9.8 1.5 6.4 9 3Z" />
      <path d="M4.5 8v3.6c0 1.1 2 2 4.5 2s4.5-.9 4.5-2V8" />
      <path d="M16.5 6.4v4" />
    </svg>
  );
}

export function BadgeCheckIcon(props: P) {
  return (
    <svg viewBox="0 0 18 18" width="15" height="15" {...base} {...props}>
      <path d="M9 1.6 11 3l2.4-.2.7 2.3 2.1 1.2-.8 2.3.8 2.3-2.1 1.2-.7 2.3-2.4-.2-2 1.4-2-1.4-2.4.2-.7-2.3-2.1-1.2.8-2.3-.8-2.3L5 5.1l.7-2.3L8 3l1-1.4Z" />
      <path d="m6.4 8.8 1.8 1.8 3.4-3.4" />
    </svg>
  );
}

export const iconMap: Record<IconName, (props: P) => ReactElement> = {
  people: PeopleIcon,
  sparkle: SparkleIcon,
  mail: MailIcon,
  speech: SpeechIcon,
  "arrow-right": ArrowRightIcon,
  compass: CompassIcon,
  "search-user": SearchUserIcon,
  coins: CoinsIcon,
  shield: ShieldIcon,
  chat: ChatIcon,
  graduate: GraduateIcon,
  "badge-check": BadgeCheckIcon,
};

export function Icon({
  name,
  ...props
}: { name: IconName } & P) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}
