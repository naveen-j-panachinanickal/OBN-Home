import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import CollaborationSection from "@/components/CollaborationSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MissionSection />
      <CollaborationSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
