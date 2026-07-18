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
      variants={fadeUp(0, 16, 0.6)}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -8 }}
      viewport={defaultViewport}
      transition={{ delay: 0.8 + index * 0.12, type: "spring", stiffness: 120, damping: 18 }}
      className="group relative flex h-full flex-col gap-5"
    >
      {/* Gold number */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
          {service.number}
        </span>
        <span className="h-px w-6 bg-gold/40" />
      </div>

      {/* Image */}
      <div className="relative">
        <ServiceImage
          src={service.image}
          alt={service.imageAlt}
          height={service.height}
          delay={0.9 + index * 0.12}
        />
      </div>

      {/* Content - consistent minimum height and baseline alignment */}
      <div className="flex min-h-[220px] flex-col gap-3 px-1">
        <h3 className="text-[27px] font-serif leading-[1.15] tracking-[-0.02em] text-plum lg:text-[30px]">
          {service.title}
        </h3>
        
        <p className="text-[16px] font-display italic leading-snug text-purple transition-colors duration-300 group-hover:text-violet lg:text-[17px]">
          {service.campaignLine}
        </p>
        
        <p className="text-[15px] leading-[1.6] text-ink-soft lg:text-[16px]">
          {service.description}
        </p>

        {/* CTA with gold micro-stroke - pushed to bottom */}
        <div className="mt-auto pt-2">
          <ServiceLink href={service.href}>{service.cta}</ServiceLink>
        </div>
      </div>
    </motion.article>
  );
}
