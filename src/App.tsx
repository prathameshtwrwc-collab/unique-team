import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UtilityBar } from "./components/navigation/UtilityBar";
import { MainHeader } from "./components/navigation/MainHeader";
import { HeroSection } from "./components/hero/HeroSection";
import { AboutSection } from "./components/about/AboutSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { WhyUniqueHRSection } from "./components/why-uniquehr/WhyUniqueHRSection";
import { IndustriesSection } from "./components/industries/IndustriesSection";
import { ProcessSection } from "./components/process/ProcessSection";
import { ComplianceSection } from "./components/compliance/ComplianceSection";
import { ValuesSection } from "./components/values/ValuesSection";
import { FinalCTASection } from "./components/final-cta/FinalCTASection";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/footer/Footer";
import { NavContext } from "./lib/NavContext";
import { useLenis } from "./hooks/useLenis";

const sections = [
  "home", "about", "services", "industries", "process",
  "compliance", "values", "contact", "why-uniquehr", "final-cta",
] as const;

type Section = (typeof sections)[number];

const sectionComponents: Record<string, () => React.ReactElement> = {
  about: AboutSection,
  services: ServicesSection,
  industries: IndustriesSection,
  process: ProcessSection,
  compliance: ComplianceSection,
  values: ValuesSection,
  contact: ContactSection,
  "why-uniquehr": WhyUniqueHRSection,
  "final-cta": FinalCTASection,
};

function getSectionFromHash(): Section {
  const hash = window.location.hash.replace("#", "");
  return (sections as readonly string[]).includes(hash) ? (hash as Section) : "home";
}

function SectionWrapper({ section, children }: { section: string; children: React.ReactNode }) {
  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FullSite() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUniqueHRSection />
      <IndustriesSection />
      <ProcessSection />
      <ComplianceSection />
      <ValuesSection />
      <FinalCTASection />
      <ContactSection />
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(getSectionFromHash());

  useLenis();

  const isHome = activeSection === "home";

  // Scroll to top whenever the active section changes (except for in-page within home)
  useEffect(() => {
    if (activeSection !== "home") {
      window.scrollTo(0, 0);
    }
  }, [activeSection]);

  const navigate = useCallback((section: string) => {
    if (!(sections as readonly string[]).includes(section)) return;
    setActiveSection(section as Section);
    window.location.hash = section;

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      const section = href.slice(1);
      if ((sections as readonly string[]).includes(section)) {
        e.preventDefault();
        navigate(section);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-cream">
      <NavContext.Provider value={navigate}>
        <UtilityBar />
        <MainHeader activeSection={activeSection} onNavigate={navigate} />
        <main>
          {isHome ? (
            <FullSite />
          ) : (
            <AnimatePresence mode="wait">
              <SectionWrapper key={activeSection} section={activeSection}>
                {(() => {
                  const C = sectionComponents[activeSection];
                  return <C />;
                })()}
              </SectionWrapper>
            </AnimatePresence>
          )}
        </main>
        <Footer onNavigate={navigate} />
      </NavContext.Provider>
    </div>
  );
}
