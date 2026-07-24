import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../../data/process";
import { ProcessStep } from "./ProcessStep";

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefers;
}

function useProcessProgress(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const viewportHeight = window.innerHeight;

        const scrolled = Math.max(0, Math.min(1,
          (viewportHeight - containerTop + 100) / (viewportHeight + containerHeight)
        ));
        setProgress(scrolled);

        const stepIndex = Math.min(
          processSteps.length - 1,
          Math.floor(scrolled * processSteps.length * 1.1)
        );
        setActiveStep(stepIndex);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { activeStep, progress };
}

function ProgressBar({ progress, prefersReducedMotion }: { progress: number; prefersReducedMotion: boolean }) {
  return (
    <div className="relative mx-auto mb-12 hidden h-1 w-full max-w-[900px] overflow-hidden rounded-full bg-purple/10 lg:block">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-purple via-purple-soft to-gold"
        initial={{ width: prefersReducedMotion ? "100%" : "0%" }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.15, ease: "linear" }}
      />
      {processSteps.map((step, i) => {
        const pct = (i / (processSteps.length - 1)) * 100;
        const isActive = i <= Math.floor(progress * processSteps.length);
        return (
          <div
            key={step.id}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${pct}%` }}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "border-gold bg-gold shadow-[0_0_12px_rgba(214,160,62,0.5)]"
                  : "border-purple/30 bg-white"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}

export function ProcessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeStep, progress } = useProcessProgress(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={containerRef} className="relative">
      <ProgressBar progress={progress} prefersReducedMotion={prefersReducedMotion} />

      {/* Desktop: 4-column grid */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-7">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={i >= 4 ? "mt-6" : ""}
          >
            <ProcessStep
              step={step}
              isActive={activeStep === i}
              index={i}
              progress={progress}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="relative lg:hidden">
        <MobileTimeline
          steps={processSteps}
          activeStep={activeStep}
          progress={progress}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </div>
  );
}

function MobileTimeline({
  steps,
  activeStep,
  progress,
  prefersReducedMotion,
}: {
  steps: typeof processSteps;
  activeStep: number;
  progress: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="relative space-y-8">
      {/* Progress bar on the left */}
      <div className="absolute left-[15px] top-0 h-full w-[2px] bg-purple/15" />
      <motion.div
        className="absolute left-[15px] top-0 w-[2px] bg-gradient-to-b from-purple via-purple-soft to-gold"
        initial={{ height: prefersReducedMotion ? "100%" : "0%" }}
        animate={{ height: `${progress * 100}%` }}
        transition={{ duration: 0.15, ease: "linear" }}
      />

      {steps.map((step, i) => {
        const nodeActive = activeStep === i;
        const nodeComplete = i < activeStep;
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-5 pl-10"
          >
            <div
              className={`absolute left-[9px] top-2 h-[14px] w-[14px] rounded-full border-2 transition-all duration-300 ${
                nodeActive
                  ? "border-gold bg-gold shadow-[0_0_14px_rgba(214,160,62,0.5)]"
                  : nodeComplete
                  ? "border-purple bg-purple"
                  : "border-purple/30 bg-white"
              }`}
            />
            <ProcessStep
              step={step}
              isActive={nodeActive}
              index={i}
              progress={progress}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
