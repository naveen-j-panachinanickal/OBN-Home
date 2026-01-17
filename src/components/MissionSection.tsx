import { Shield, Users, Lightbulb, Code2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "An ecosystem where technology respects individual data and remains accessible to all.",
  },
  {
    icon: Users,
    title: "Unified Platform",
    description: "A single, flexible platform making everyday digital utilities easy to discover and use.",
  },
  {
    icon: Lightbulb,
    title: "Meaningful Creation",
    description: "Transform free time into contribution. Learn, collaborate, and build together.",
  },
  {
    icon: Code2,
    title: "Community Governed",
    description: "Open-source and community-governed. Proving the power of open collaboration.",
  },
];

const MissionSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden" id="mission">
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">
            Our Purpose
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-white">
            Building a Transparent Future
          </h3>
          <div className="space-y-8 text-lg md:text-xl text-white/50 leading-relaxed font-light">
            <p>
              Our mission is to build an open, transparent, and privacy-first ecosystem where anyone can contribute to creating useful, real-world applications.
            </p>
            <p className="text-white font-normal italic">
              "Beyond software, we aim to transform passive consumption into meaningful creation."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} direction="up" delay={index * 0.1} duration={0.5}>
              <div
                className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 h-full"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
