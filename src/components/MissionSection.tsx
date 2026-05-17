import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Users, Lightbulb, Code2, 
  Terminal, Sparkles, Cpu, EyeOff, 
  Heart, ArrowUpRight, CheckCircle2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface MissionPillar {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  icon: any;
  status: string;
  color: string;
  glow: string;
  metricLabel: string;
  metricValue: string;
  specs: string[];
}

const MissionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string>("privacy");

  const pillars: MissionPillar[] = [
    {
      id: "privacy",
      title: "Privacy First",
      desc: "An ecosystem where technology respects individual data and remains accessible to all.",
      longDesc: "Enforcing absolute user sovereignty by executing 100% of processes locally within the user's browser, preventing all remote tracking.",
      icon: Shield,
      status: "SECURED",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      glow: "rgba(16, 185, 129, 0.35)",
      metricLabel: "DATA_EGRESS",
      metricValue: "0.00%",
      specs: [
        "Zero server metadata uploads",
        "Local Origin Private File System",
        "In-memory stream sandboxing"
      ]
    },
    {
      id: "platform",
      title: "Unified Platform",
      desc: "A single, flexible platform making everyday digital utilities easy to discover and use.",
      longDesc: "Consolidating complex everyday utility modules into a unified, zero-install workspace running at raw native-assembly speed.",
      icon: Cpu,
      status: "CORE_READY",
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
      glow: "rgba(6, 182, 212, 0.35)",
      metricLabel: "BUILD_LATENCY",
      metricValue: "0ms (Client)",
      specs: [
        "Standardized UI framework",
        "Offline-first utility runtime",
        "Zero configuration startup"
      ]
    },
    {
      id: "creation",
      title: "Meaningful Creation",
      desc: "Transform free time into contribution. Learn, collaborate, and build together.",
      longDesc: "Bridging the gap between passive consumers and active builders by providing guided templates, scratchpads, and direct commits.",
      icon: Lightbulb,
      status: "SOVEREIGN",
      color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
      glow: "rgba(168, 85, 247, 0.35)",
      metricLabel: "GUILD_MATRIX",
      metricValue: "ACTIVE",
      specs: [
        "Supportive mentorship paths",
        "Interactive scratch sandboxes",
        "Visible contribution ledgers"
      ]
    },
    {
      id: "governed",
      title: "Community Governed",
      desc: "Open-source and community-governed. Proving the power of open collaboration.",
      longDesc: "Removing corporate gatekeepers and establishing democratic consensus protocols for all library tools and roadmap expansions.",
      icon: Code2,
      status: "OPEN_BUILD",
      color: "text-rose-400 border-rose-500/20 bg-rose-500/5",
      glow: "rgba(244, 63, 94, 0.35)",
      metricLabel: "GIT_INTEGRITY",
      metricValue: "100% MERGED",
      specs: [
        "Publicly reviewable builds",
        "Continuous community audits",
        "Meritocratic voting rights"
      ]
    }
  ];

  const activePillar = pillars.find(p => p.id === selectedCard) || pillars[0];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-transparent" id="mission">
      
      {/* Dynamic ambient backdrop blur effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        
        {/* Main Grid: Manifesto Console Left, Principles Grid Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column: Manifesto Console */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 lg:space-y-0">
            
            {/* Holographic Diagnostic Header */}
            <div className="space-y-6">


              {/* Large Premium Futuristic Title */}
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  transparent
                </span> <br />
                future.
              </h2>

              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light max-w-md">
                Our mission is to build an open, transparent, and privacy-first ecosystem where technology empowers individuals, respects total sovereignty, and encourages active creation.
              </p>
            </div>

            {/* Human Agency Core Indicator SVG */}
            <div className="relative w-full py-8 flex items-center justify-center lg:justify-start">
              <div className="relative w-48 h-48 rounded-full border border-white/5 bg-white/[0.01] flex items-center justify-center shadow-inner group overflow-hidden">
                
                {/* Rotating telemetry ticks */}
                <div className="absolute inset-2 rounded-full border border-dashed border-emerald-500/20 animate-spin-slow" />
                <div className="absolute inset-6 rounded-full border border-white/5 pointer-events-none" />
                
                {/* Breathing center human identity core */}
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["24%", "35%", "24%"]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <EyeOff className="w-8 h-8 text-emerald-400" />
                </motion.div>
                
                {/* Orbiting data beacon */}
                <div className="absolute inset-8 pointer-events-none">
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06B6D4] absolute top-0 left-1/2 -translate-x-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 64px" }}
                  />
                </div>
              </div>
              
              <div className="ml-8 hidden xl:block font-mono text-[9px] text-white/30 space-y-1.5 self-center">
                <p className="font-bold text-white/50 tracking-wider">CORE_HUMAN_AGENCY_LOCK</p>
                <p>STATUS: OPERATIONAL (100%)</p>
                <p>COMPLIANCE: ZERO_TELEMETRY</p>
              </div>
            </div>

            {/* Bracket Manifesto Quote Card */}
            <div className="relative border-l-2 border-emerald-500/40 pl-6 space-y-3 max-w-md">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block">DIRECTIVE_STATEMENT</span>
              <p className="text-sm md:text-base text-white font-normal italic leading-relaxed">
                "Beyond software, we aim to transform passive consumption into meaningful creation."
              </p>
            </div>

          </div>

          {/* Right Column: Quad Principle Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
              
              {pillars.map((pillar) => {
                const PillarIcon = pillar.icon;
                const isHovered = hoveredCard === pillar.id;
                const isSelected = selectedCard === pillar.id;

                return (
                  <ScrollReveal key={pillar.id} direction="up" duration={0.6}>
                    <button
                      className="text-left w-full focus:outline-none relative group h-full"
                      onMouseEnter={() => setHoveredCard(pillar.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedCard(pillar.id)}
                    >
                      {/* Ambient card background glow blur */}
                      <AnimatePresence>
                        {(isHovered || isSelected) && (
                          <motion.div
                            layoutId="missionCardGlow"
                            className="absolute -inset-1 rounded-2xl filter blur-xl opacity-20 transition-all pointer-events-none"
                            style={{ backgroundColor: pillar.glow }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>

                      {/* Main Card Container */}
                      <div className={cn(
                        "h-full relative rounded-2xl bg-black/45 border p-6 md:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300",
                        isSelected 
                          ? "border-emerald-500/40 bg-black/60 shadow-2xl scale-[1.02]" 
                          : "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                      )}>
                        
                        {/* Interactive scanning lines overlay on hover */}
                        <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none rounded-2xl overflow-hidden" />

                        {/* Top layout: Icon & Status tag */}
                        <div className="flex justify-between items-start mb-6">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                            isSelected 
                              ? "bg-emerald-500/10 text-emerald-400 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
                              : "bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10"
                          )}>
                            <PillarIcon className="w-5 h-5" />
                          </div>
                          
                          <span className={cn(
                            "font-mono text-[8px] font-bold px-2 py-0.5 rounded border tracking-wider",
                            isSelected 
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                              : "bg-white/5 text-white/30 border-white/5 group-hover:text-white/50"
                          )}>
                            {pillar.status}
                          </span>
                        </div>

                        {/* Middle layout: Title & Short description */}
                        <div className="space-y-3 flex-grow">
                          <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                            {pillar.title}
                            <ArrowUpRight className={cn(
                              "w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all",
                              (isHovered || isSelected) && "opacity-100 translate-y-0 translate-x-0"
                            )} />
                          </h4>
                          
                          <p className="text-xs text-white/50 leading-relaxed font-light">
                            {pillar.desc}
                          </p>
                        </div>

                        {/* Expanded specs list on hover/select */}
                        <div className={cn(
                          "mt-6 space-y-2 border-t border-white/5 pt-4 transition-all duration-500 overflow-hidden",
                          isSelected ? "max-h-40 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100"
                        )}>
                          {pillar.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-white/40">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer telemetry bar */}
                        <div className="mt-6 border-t border-white/5 pt-4 w-full flex justify-between items-center">
                          <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">{pillar.metricLabel}</span>
                          <span className={cn(
                            "font-mono text-[9px] font-bold",
                            isSelected ? "text-emerald-400" : "text-white/60"
                          )}>{pillar.metricValue}</span>
                        </div>

                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionSection;
