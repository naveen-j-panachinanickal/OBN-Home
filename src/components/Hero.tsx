import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Marquee from "./Marquee";
import LightPillar from "./LightPillar";
import DarkVeil from "./DarkVeil";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div className="relative" ref={containerRef} onMouseMove={handleMouseMove}>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Ambient Glows */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)` }}
        />

        <div className="container relative z-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-[10px] md:text-xs font-medium text-white/70 uppercase tracking-[0.2em]">
                Privacy-First Ecosystem
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="animate-fade-up-delay-1 text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] transition-transform duration-300 ease-out"
              style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
            >
              Building the future of <br />
              <span className="text-white">open collaboration.</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Join an open, transparent platform where technology empowers people,
              respects privacy, and remains accessible to all.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-all font-semibold text-base group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all text-base font-semibold">
                <Github className="mr-2 w-4 h-4" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Integration Marquee - Positioned at the bottom of Hero */}
        <div className="mt-20 w-full animate-fade-up-delay-4">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-semibold">
              Seamlessly Integrate with Your Workflow
            </p>
          </div>
          <Marquee />
        </div>
      </section>
    </div>
  );
};

export default Hero;
