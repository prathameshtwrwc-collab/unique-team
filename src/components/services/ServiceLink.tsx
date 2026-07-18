import { ArrowRightIcon } from "../ui/icons";

export function ServiceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="group/link inline-flex items-center gap-2 text-[13px] font-semibold text-plum transition-colors duration-300 hover:text-purple"
    >
      <span>{children}</span>
      <ArrowRightIcon className="transition-transform duration-300 group-hover/link:translate-x-[4px]" />
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover/link:w-full" />
    </a>
  );
}
