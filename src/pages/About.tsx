import AboutTeamSection from "@/components/AboutTeamSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import StarBackground from "@/components/StarBackground";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarBackground />
      <Navbar />

      <main>
        <AboutTeamSection />
      </main>

      <ScrollReveal direction="fade" delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default About;
