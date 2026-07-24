import { motion } from "framer-motion";
import type { Service } from "../../data/services";
import { ServiceImage } from "./ServiceImage";
import { ServiceLink } from "./ServiceLink";
import { fadeUp, defaultViewport } from "../../lib/animations";

interface ServicePanelProps {
  service: Service;
  index: number;
}

export function ServicePanel({ service, index }: ServicePanelProps) {
  return (
    <motion.article
      variants={fadeUp(0, 16, 0.5)}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -6 }}
      viewport={defaultViewport}
      transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200, damping: 20 }}
      className="group relative flex h-full flex-col gap-5"
    >
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
          {service.number}
        </span>
        <span className="h-px w-6 bg-gold/40" />
      </div>

      <div className="relative">
        <ServiceImage
          src={service.image}
          alt={service.imageAlt}
          height={service.height}
          delay={0.4 + index * 0.08}
        />
      </div>

      <div className="flex min-h-[200px] flex-col gap-3 px-1">
        <h3 className="text-[25px] font-serif leading-[1.15] tracking-[-0.02em] text-plum lg:text-[28px]">
          {service.title}
        </h3>

        <p className="text-[15px] font-serif italic leading-snug text-purple transition-colors duration-300 group-hover:text-violet lg:text-[16px]">
          {service.campaignLine}
        </p>

        <p className="text-[14px] leading-[1.6] text-ink-soft lg:text-[15px]">
          {service.description}
        </p>

        <div className="mt-auto pt-2">
          <ServiceLink href={service.href}>{service.cta}</ServiceLink>
        </div>
      </div>
    </motion.article>
  );
}
