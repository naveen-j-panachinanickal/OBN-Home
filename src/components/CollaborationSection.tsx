import { Button } from "@/components/ui/button";
import { Handshake, MessageSquare, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Propose Ideas",
    description: "Share your vision for new digital utilities or improvements.",
  },
  {
    icon: MessageSquare,
    title: "Discuss & Refine",
    description: "Collaborate with the community to polish ideas into projects.",
  },
  {
    icon: Handshake,
    title: "Join Forces",
    description: "Find contributors and mentors who share your passion.",
  },
  {
    icon: Rocket,
    title: "Build Together",
    description: "Transform curiosity into real-world impact and shared knowledge.",
  },
];

const CollaborationSection = () => {
  return (
    <section className="relative py-32 md:py-48 bg-white/[0.01]" id="collaborate">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">
              Collaboration
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
              From Curiosity <br />
              to Contribution.
            </h3>
            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-xl font-light">
              We encourage people to move away from passive consumption and instead learn, collaborate, propose ideas, and build together.
            </p>
            <Button className="rounded-full px-8 h-14 bg-white text-black hover:bg-white/90 font-semibold transition-all">
              Start Building Today
            </Button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <step.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
