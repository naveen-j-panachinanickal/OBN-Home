import { Layers, Globe, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Transparent",
    description: "Every line of code is open for all to see and improve.",
  },
  {
    icon: Layers,
    title: "Unified",
    description: "Bringing together tools into a cohesive ecosystem.",
  },
  {
    icon: Heart,
    title: "Inclusive",
    description: "An environment where everyone can learn and grow.",
  },
  {
    icon: Zap,
    title: "Impactful",
    description: "Turning curiosity into real-world change.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-background">
      <div className="container relative px-4">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">
            Our Values
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
            Driven by Principles
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div key={value.title} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mx-auto mb-8 text-white/40 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-4 tracking-tight">
                {value.title}
              </h4>
              <p className="text-sm text-white/30 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
