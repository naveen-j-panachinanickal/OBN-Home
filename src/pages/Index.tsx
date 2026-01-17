import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import CollaborationSection from "@/components/CollaborationSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal direction="fade" duration={0.8}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <MissionSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <CollaborationSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ValuesSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <CTASection />
      </ScrollReveal>
      <ScrollReveal direction="fade" delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
