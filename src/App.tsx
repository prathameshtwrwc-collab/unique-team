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
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-cream">
      <UtilityBar />
      <MainHeader />
      <main>
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
      </main>
      <Footer />

      {/* temporary anchors so hero CTAs are functional (no sections yet) */}
      <div id="services" aria-hidden className="h-0" />
      <div id="contact" aria-hidden className="h-0" />
    </div>
  );
}
