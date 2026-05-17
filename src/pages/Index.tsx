import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import NeuralNetwork from "@/components/NeuralNetwork";
import SparkLab from "@/components/SparkLab";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StarBackground from "@/components/StarBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global Interactive Cyber-Canopy Background */}
      <StarBackground />

      {/* Floating HUD Navigation */}
      <Navbar />
      
      {/* Volumetric Hologram Hero Deck */}
      <Hero />

      {/* Mission Statement Section */}
      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <MissionSection />
      </ScrollReveal>
      
      {/* Quantum Core Values Neural Network */}
      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <NeuralNetwork />
      </ScrollReveal>
      
      {/* Interactive Matrix Spark Lab */}
      <ScrollReveal direction="up" delay={0.15} duration={0.8}>
        <SparkLab />
      </ScrollReveal>
      
      {/* Command CLI CTA Console Deck */}
      <CTASection />
      
      {/* Digital Footer Summary */}
      <ScrollReveal direction="fade" delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
