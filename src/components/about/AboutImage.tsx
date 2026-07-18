import { motion } from "framer-motion";
import { defaultViewport, scaleIn } from "../../lib/animations";

export function AboutImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={scaleIn(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={`overflow-hidden shadow-[0_20px_60px_rgba(46,21,87,0.14)] ${className || ""}`}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  );
}
