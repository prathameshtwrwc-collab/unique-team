import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scrolling.
 * - Responsive (short duration, no scroll hijacking)
 * - Keyboard / trackpad remain native
 * - Respects prefers-reduced-motion
 * - Cleans up on unmount
 */
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.4,
      anchors: { offset: -90 },
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
