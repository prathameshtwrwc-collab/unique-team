import { motion } from "framer-motion";
import { imageReveal } from "../../lib/animations";

interface ServiceImageProps {
  src: string;
  alt: string;
  height: "medium" | "tall" | "medium-tall";
  delay?: number;
}

const maskStyles = {
  medium: "rounded-[40px_28px_28px_28px]",
  tall: "rounded-[28px_48px_28px_28px]",
  "medium-tall": "rounded-[32px_32px_28px_28px]",
};

const heightClasses = {
  medium: "h-[280px] lg:h-[320px]",
  tall: "h-[340px] lg:h-[400px]",
  "medium-tall": "h-[310px] lg:h-[360px]",
};

export function ServiceImage({ src, alt, height, delay = 0 }: ServiceImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${maskStyles[height]} ${heightClasses[height]} shadow-[0_16px_40px_rgba(46,21,87,0.12)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(46,21,87,0.18)]`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        variants={imageReveal(delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/60 via-plum/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
