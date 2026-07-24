import type { Variants } from "framer-motion";

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_CINEMATIC: [number, number, number, number] = [0.45, 0, 0.25, 1];
export const EASE_SPRING = { type: "spring" as const, stiffness: 160, damping: 18 };

export const defaultViewport = { once: true, amount: 0.12 as const };
export const headlineViewport = { once: true, amount: 0 as const };

export const fadeIn = (delay = 0, duration = 0.4): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const fadeUp = (delay = 0, distance = 14, duration = 0.5): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const fadeDown = (delay = 0, duration = 0.4): Variants => ({
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

export const fadeUpStrong = (delay = 0, distance = 28, duration = 0.55): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_CINEMATIC },
  },
});

export const fadeInLeft = (delay = 0, distance = 24, duration = 0.55): Variants => ({
  hidden: { opacity: 0, x: -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASE_CINEMATIC },
  },
});

export const fadeInRight = (delay = 0, distance = 24, duration = 0.55): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: EASE_CINEMATIC },
  },
});

export const lineReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  },
});

export const clipReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, delay, ease: EASE_CINEMATIC },
  },
});

export const clipRevealHorizontal = (delay = 0): Variants => ({
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, delay, ease: EASE_CINEMATIC },
  },
});

export const staggerChildren = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const imageReveal = (delay = 0): Variants => ({
  hidden: { scale: 1.1, filter: "blur(6px)", opacity: 0 },
  visible: {
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.85, delay, ease: EASE_CINEMATIC },
  },
});

export const zoomIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: EASE_CINEMATIC },
  },
});
