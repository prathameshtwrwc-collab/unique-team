import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Thin organic gold curve travelling from the lower-left collage
 * diagonally to the upper-right edge. Drawn with GSAP after the
 * headline appears. Avoids the lead figure's face.
 */
export function GoldTrajectory({ className }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<SVGGElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const path = pathRef.current;
    const nodes = nodesRef.current;
    if (!path || !nodes) return;

    if (reduced) {
      gsap.set([path, nodes], { clearProps: "all", opacity: 1 });
      return;
    }

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(nodes.children, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ delay: 1.6 });
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power2.inOut",
    }).to(
      nodes.children,
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, [reduced]);

  return (
    <svg
      viewBox="0 0 600 640"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id="gold-line" x1="0" y1="640" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D6A03E" />
          <stop offset="1" stopColor="#E9C77F" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M30 540 C 80 480, 150 420, 220 380 C 320 320, 420 280, 540 100"
        stroke="url(#gold-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g ref={nodesRef}>
        <circle cx="220" cy="380" r="5" fill="#D6A03E" />
        <circle cx="220" cy="380" r="9" stroke="#D6A03E" strokeOpacity="0.35" strokeWidth="1.5" />
        <circle cx="540" cy="100" r="4" fill="#E9C77F" />
      </g>
    </svg>
  );
}
