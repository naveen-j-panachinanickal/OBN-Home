import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShieldAlert, Globe2, Users2, ShieldCheck, 
  ArrowRight, Landmark, Compass, Award, Github
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BlueprintPillar {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  problem: string;
  solution: string;
  milestones: { name: string; progress: number }[];
  impactRating: string;
  repoUrl: string;
}

const SparkLab = () => {
  const [activePillarId, setActivePillarId] = useState<string>("decentralize");

  const pillars: BlueprintPillar[] = [
    {
      id: "decentralize",
      title: "Decentralize Software",
      shortDesc: "Reclaiming everyday software utilities from centralized corporate server monopolies.",
      icon: Globe2,
      problem: "Everyday digital utilities (PDF tools, compressors, AI helpers) are locked behind corporate paywalls, require cloud uploads, harvest user metadata, and suffer from remote server outages.",
      solution: "OBN builds and standardizes a catalog of high-powered tools that run completely locally within the user's browser, eliminating hosting overhead, server latency, and corporate data locks.",
      milestones: [
        { name: "Core Utility Architecture", progress: 95 },
        { name: "Offline-First Engine Integration", progress: 88 },
        { name: "Decentralized Registry Standards", progress: 70 }
      ],
      impactRating: "SYSTEM-WIDE DECENTRALIZATION",
      repoUrl: "https://github.com/openbuildnetwork/"
    },
    {
      id: "privacy",
      title: "Sovereignty & Rights",
      shortDesc: "Enforcing privacy as a non-negotiable, fundamental digital human right.",
      icon: ShieldAlert,
      problem: "Modern web platforms are built on an extraction economy. Telemetry, analytics, tracking pixels, and secret data logs actively erode individual digital sovereignty.",
      solution: "OBN operates under a strict Privacy-First directive. Zero cloud tracking, zero network telemetry, and browser-only execution. Your files, keys, and thoughts remain permanently on your own machine.",
      milestones: [
        { name: "Sovereign Local Datastores", progress: 92 },
        { name: "Zero-Telemetry Compliance Audits", progress: 100 },
        { name: "Cryptographic Node Standards", progress: 80 }
      ],
      impactRating: "ABSOLUTE INDIVIDUAL PRIVACY",
      repoUrl: "https://github.com/openbuildnetwork/"
    },
    {
      id: "guild",
      title: "The Builder Guild",
      shortDesc: "Forging an inclusive global development space where contributors learn by doing.",
      icon: Users2,
      problem: "Traditional open-source repositories suffer from hostile gatekeeping, complex onboarding paths, and a high barrier to entry for beginners and UI/UX architects.",
      solution: "We foster a collaborative global guild that pairs developers, designers, and advocates. OBN provides guided sandboxes, democratic roadmap voting, and supportive mentorship structures.",
      milestones: [
        { name: "Collaborative Onboarding Paths", progress: 85 },
        { name: "Democratic Governance Models", progress: 75 },
        { name: "Global Peer Mentorship Grid", progress: 65 }
      ],
      impactRating: "DEMOCRATIC OPEN COLLABORATION",
      repoUrl: "https://github.com/openbuildnetwork/builder-guild"
    }
  ];

  const activePillar = pillars.find(p => p.id === activePillarId) || pillars[0];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-transparent" id="projects">
      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        
        {/* Title and Intro */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4">
            Our Goals & Mission
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
            Our Blueprint for a <br />Sovereign Web
          </h3>
          <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
            OBN is not just a software toolkit—we are a global movement. We have established three core organizational pillars to return ownership of the internet to the people who build and use it.
          </p>
        </div>

        {/* Interactive Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Core Goals tabs */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
            <div className="bg-black/45 border border-white/10 rounded-3xl p-6 shadow-2xl glass-card flex flex-col gap-4 h-full justify-between">
              
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest block border-b border-white/5 pb-3">
                  OBN Strategic Pillars
                </span>
                
                <div className="flex flex-col gap-3">
                  {pillars.map(pillar => {
                    const PillarIcon = pillar.icon;
                    const isActive = activePillarId === pillar.id;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActivePillarId(pillar.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-2xl border transition-all duration-300 relative group overflow-hidden flex gap-4 items-start",
                          isActive 
                            ? "border-primary/40 bg-primary/5 text-white" 
                            : "border-white/5 bg-white/[0.01] text-white/50 hover:text-white hover:border-white/10 hover:bg-white/[0.03]"
                        )}
                      >
                        <div className={cn(
                          "p-2.5 rounded-xl flex-shrink-0 transition-all",
                          isActive ? "bg-primary/20 text-primary" : "bg-white/5 text-white/40 group-hover:text-white"
                        )}>
                          <PillarIcon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider block">{pillar.title}</span>
                          <p className="text-[10px] text-white/40 leading-relaxed font-light">{pillar.shortDesc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goal-oriented summary */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-3 font-mono text-[9px] text-primary leading-snug">
                <Compass className="w-4 h-4 text-primary flex-shrink-0" />
                <span>GOAL COMPLIANCE DIRECTIVE:<br/>All projects must abide by zero-telemetry metrics.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Goal Detail Dashboard */}
          <div className="col-span-1 lg:col-span-7">
            <div className="bg-black/60 border border-white/10 rounded-3xl p-8 shadow-2xl glass-card h-full flex flex-col justify-between relative overflow-hidden text-left">
              
              {/* Scanlines decorative */}
              <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-8 relative z-10"
                >
                  {/* Category Status header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Pillar Specifications</span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/25 uppercase tracking-wider">
                      {activePillar.impactRating}
                    </span>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 text-rose-400" />
                        The Centralized Problem
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {activePillar.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        The OBN Action Solution
                      </h4>
                      <p className="text-xs text-white/80 leading-relaxed font-light">
                        {activePillar.solution}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Milestones Trajectory progress */}
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block">Core Trajectory Status</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {activePillar.milestones.map((milestone, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center text-[9px] font-mono">
                            <span className="text-white/40 truncate max-w-[100px]">{milestone.name}</span>
                            <span className="text-primary font-bold">{milestone.progress}%</span>
                          </div>
                          <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                            <motion.div 
                              className="bg-primary h-full rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${milestone.progress}%` }}
                              transition={{ duration: 1, delay: idx * 0.15 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Action footer */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 w-full">
                <span className="text-[10px] font-mono text-white/30 italic text-center sm:text-left">"Advocating for digital human rights through active engineering."</span>
                <a href={activePillar.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-full sm:w-auto">
                  <Button className="h-9 px-5 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white font-bold tracking-wider uppercase text-[9px] gap-2 transition-all flex items-center justify-center w-full sm:w-auto">
                    <Github className="w-3.5 h-3.5" />
                    View Repository
                  </Button>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SparkLab;
