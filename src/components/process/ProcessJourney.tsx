import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../../data/process";
import { ProcessStep } from "./ProcessStep";

export function ProcessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(1);
      setActiveStep(0);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress through the section (0 to 1)
        const scrolled = Math.max(0, Math.min(1, (viewportHeight - containerTop) / (viewportHeight + containerHeight)));
        setProgress(scrolled);
        
        // Determine active step based on progress
        const stepIndex = Math.min(processSteps.length - 1, Math.floor(scrolled * processSteps.length * 1.15));
        setActiveStep(stepIndex);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="relative">
      {/* SVG route path - desktop only, more visible */}
      <svg
        aria-hidden
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1200 640"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5A2DA8" />
            <stop offset="100%" stopColor="#D6A03E" />
          </linearGradient>
          
          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#5A2DA8" opacity="0.4" />
          </marker>
        </defs>
        
        {/* Base route line - further increased visibility with emphasized 04→05 connection */}
        <path
          d="M 150 100 L 1050 100 Q 1120 100 1120 170 L 1120 470 Q 1120 540 1050 540 L 150 540"
          fill="none"
          stroke="rgba(90,45,168,0.36)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Vertical connector emphasis between steps 04 and 05 */}
        <path
          d="M 1120 170 L 1120 470"
          fill="none"
          stroke="rgba(90,45,168,0.42)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Progress route line */}
        <motion.path
          d="M 150 100 L 1050 100 Q 1120 100 1120 170 L 1120 470 Q 1120 540 1050 540 L 150 540"
          fill="none"
          stroke="url(#route-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
          animate={{ pathLength: progress }}
          transition={{ duration: 0.3, ease: "linear" }}
        />
        
        {/* Anchor nodes at each step position */}
        {processSteps.map((step, i) => {
          const isTopRow = i < 4;
          const x = isTopRow ? 150 + (i * 300) : 150 + ((i - 4) * 300);
          const y = isTopRow ? 100 : 540;
          const nodeActive = activeStep === i;
          const nodeComplete = i < activeStep;
          
          return (
            <motion.g key={step.id}>
              {/* Outer glow for active */}
              {nodeActive && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r="12"
                  fill="#D6A03E"
                  opacity="0.3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              
              {/* Node circle */}
              <circle
                cx={x}
                cy={y}
                r="8"
                fill={nodeActive ? "#D6A03E" : nodeComplete ? "#5A2DA8" : "#fff"}
                stroke="#5A2DA8"
                strokeWidth="2"
              />
            </motion.g>
          );
        })}
        
        {/* Gold progress node traveling along route */}
        {!prefersReducedMotion && (
          <motion.circle
            r="9"
            fill="#D6A03E"
            stroke="#fff"
            strokeWidth="3.5"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              cx: progress < 0.5
                ? 150 + (progress * 2) * 900 // Top row left to right
                : 150 + 900 - ((progress - 0.5) * 2) * 900, // Bottom row right to left
              cy: progress < 0.5 ? 100 : 540,
            }}
            transition={{ duration: 0.3, ease: "linear" }}
            style={{
              filter: "drop-shadow(0 4px 10px rgba(214,160,62,0.7)) z-index 10",
            }}
          />
        )}
      </svg>

      {/* Process steps grid - desktop with stepped rhythm */}
      <div className="relative hidden lg:block">
        {/* Top row: 01-04 with stepped offsets */}
        <div className="flex justify-between gap-8 pb-[110px] pt-8">
          {processSteps.slice(0, 4).map((step, i) => (
            <div key={step.id} className={i % 2 === 1 ? "translate-y-[12px]" : ""}>
              <ProcessStep step={step} isActive={activeStep === i} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom row: 05-08 with stepped offsets */}
        <div className="flex justify-between gap-8 pt-8">
          {processSteps.slice(4, 8).map((step, i) => (
            <div key={step.id} className={i % 2 === 0 ? "-translate-y-[10px]" : ""}>
              <ProcessStep step={step} isActive={activeStep === i + 4} index={i + 4} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="relative lg:hidden">
        <MobileTimeline activeStep={activeStep} progress={progress} />
      </div>
    </div>
  );
}

function MobileTimeline({ activeStep, progress }: { activeStep: number; progress: number }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative space-y-8 pl-12">
      {/* Vertical route line */}
      <div 
        className="absolute left-0 top-0 h-full w-0.5 bg-purple/20"
        style={{ transform: "translateX(-2px)" }}
      />
      
      {/* Progress line */}
      <motion.div 
        className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-purple to-gold"
        style={{ transform: "translateX(-2px)" }}
        initial={{ height: prefersReducedMotion ? "100%" : "0%" }}
        animate={{ height: `${progress * 100}%` }}
        transition={{ duration: 0.3, ease: "linear" }}
      />
      
      {processSteps.map((step, i) => {
        const nodeActive = activeStep === i;
        const nodeComplete = i < activeStep;
        
        return (
          <div key={step.id} className="relative">
            {/* Node on timeline */}
            <div 
              className={`absolute -left-[52px] top-8 h-5 w-5 rounded-full border-2 transition-all duration-300 ${
                nodeActive 
                  ? "bg-gold border-purple shadow-[0_3px_12px_rgba(214,160,62,0.6)] ring-4 ring-gold/20" 
                  : nodeComplete
                  ? "bg-purple border-purple"
                  : "bg-white border-purple"
              }`}
            />
            
            <ProcessStep step={step} isActive={nodeActive} index={i} />
          </div>
        );
      })}
    </div>
  );
}
