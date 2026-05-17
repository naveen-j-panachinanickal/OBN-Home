import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Users, Lightbulb, Code2, 
  Globe, Heart, Zap, ShieldCheck, 
  Layers, Terminal, CheckCircle2 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NeuralNode {
  id: string;
  title: string;
  desc: string;
  type: "mission" | "value";
  icon: any;
  details: string[];
  cx: number; // SVG center X percent
  cy: number; // SVG center Y percent
  color: string;
  glow: string;
}

const NeuralNetwork = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("privacy");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const nodes: NeuralNode[] = [
    {
      id: "privacy",
      title: "Privacy First",
      desc: "An ecosystem where technology respects individual data and remains accessible to all.",
      type: "mission",
      icon: Shield,
      cx: 50,
      cy: 20,
      color: "text-blue-400 border-blue-500 bg-blue-500/10",
      glow: "rgba(59, 130, 246, 0.5)",
      details: [
        "Zero tracking, telemetry, or server uploads.",
        "100% of the computation is executed in the user's browser via Web Workers and WASM.",
        "Local IndexedDB, Cache Storage, and OPFS storage layers ensure permanent data sovereignty.",
        "Proactive enforcement of client-side privacy architecture."
      ]
    },
    {
      id: "unified",
      title: "Unified Platform",
      desc: "A single, flexible platform making everyday digital utilities easy to discover and use.",
      type: "mission",
      icon: Layers,
      cx: 80,
      cy: 35,
      color: "text-cyan-400 border-cyan-500 bg-cyan-500/10",
      glow: "rgba(6, 182, 212, 0.5)",
      details: [
        "A catalog of everyday utilities (PDF processing, AI models, image manipulation) merged into a single UI.",
        "Standardized layouts and interaction guidelines across all family tools.",
        "Off-line first engineering ensuring absolute utility reliability.",
        "Zero-configuration execution model."
      ]
    },
    {
      id: "creation",
      title: "Meaningful Creation",
      desc: "Transform free time into contribution. Learn, collaborate, and build together.",
      type: "mission",
      icon: Lightbulb,
      cx: 75,
      cy: 70,
      color: "text-purple-400 border-purple-500 bg-purple-500/10",
      glow: "rgba(168, 85, 247, 0.5)",
      details: [
        "Bridges the gap between passive consumption and active development contribution.",
        "A welcoming workspace for developers, designers, and writers to team up.",
        "Earn visible contribution history on the decentralized constellation ledger.",
        "Integrated mentorship and collaborative tooling."
      ]
    },
    {
      id: "governed",
      title: "Community Governed",
      desc: "Open-source and community-governed. Proving the power of open collaboration.",
      type: "mission",
      icon: Code2,
      cx: 50,
      cy: 80,
      color: "text-indigo-400 border-indigo-500 bg-indigo-500/10",
      glow: "rgba(99, 102, 241, 0.5)",
      details: [
        "Every repository is fully open-source and open for pull requests.",
        "Open build logs and roadmap direction driven entirely by active contributors.",
        "No hidden algorithms or corporate black-boxes.",
        "Democratic project evolution structure."
      ]
    },
    {
      id: "transparent",
      title: "Transparent",
      desc: "Every line of code is open for all to see and improve.",
      type: "value",
      icon: Globe,
      cx: 25,
      cy: 70,
      color: "text-emerald-400 border-emerald-500 bg-emerald-500/10",
      glow: "rgba(16, 185, 129, 0.5)",
      details: [
        "Open-source code audits are performed continuously by the global developer community.",
        "Publicly reviewable builds and deterministic builds matching source control.",
        "Clear documentation of data flows and dependencies.",
        "Absolute clarity in architectural decisions."
      ]
    },
    {
      id: "inclusive",
      title: "Inclusive Space",
      desc: "An environment where everyone can learn, contribute, and grow.",
      type: "value",
      icon: Heart,
      cx: 20,
      cy: 35,
      color: "text-rose-400 border-rose-500 bg-rose-500/10",
      glow: "rgba(244, 63, 94, 0.5)",
      details: [
        "Open onboarding paths for beginners to commit their very first PR.",
        "Equal voting power and project influence based on contribution merit.",
        "Dedicated learning materials and scratch sandboxes.",
        "Global, diverse community spanning all skill levels."
      ]
    },
    {
      id: "impactful",
      title: "Impactful Output",
      desc: "Turning curiosity into real-world change.",
      type: "value",
      icon: Zap,
      cx: 50,
      cy: 50, // Central Hub
      color: "text-amber-400 border-amber-500 bg-amber-500/10",
      glow: "rgba(245, 158, 11, 0.5)",
      details: [
        "Building tools that people use daily rather than conceptual vaporware.",
        "Directly resolving utility bottlenecks on low-powered consumer hardware.",
        "Promoting sustainability by eliminating server overheads.",
        "Immediate distribution and deployment of community packages."
      ]
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-transparent" id="about-us">
      <div className="container px-4 max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4">
            Network Principles
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
            Driven by Principles
          </h3>
          <p className="text-base md:text-lg text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
            Instead of standard checklists, we visualize the core values of OBN as an interconnected neural grid. Hover over the nodes in the quantum core to explore our mission and values.
          </p>
        </div>

        {/* Dashboard Console container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Panel: Neural Grid SVG Cluster */}
          <div className="col-span-1 lg:col-span-6 relative flex items-center justify-center min-h-[450px] bg-black/45 border border-white/10 rounded-3xl p-8 shadow-2xl glass-card overflow-hidden">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

            {/* Neural Map Canvas */}
            <div className="relative w-full aspect-square max-w-[400px]">
              
              {/* Pulsing Neural Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map(node => {
                  // Connect every node to the central "impactful" node (node 6) and neighbors
                  const connects = ["impactful"];
                  
                  // Connect peripheral nodes sequentially to create a mesh ring
                  if (node.id === "privacy") connects.push("unified", "inclusive");
                  if (node.id === "unified") connects.push("creation");
                  if (node.id === "creation") connects.push("governed");
                  if (node.id === "governed") connects.push("transparent");
                  if (node.id === "transparent") connects.push("inclusive");

                  return connects.map(targetId => {
                    const target = nodes.find(n => n.id === targetId);
                    if (!target) return null;

                    const isHighlighted = 
                      selectedNodeId === node.id || selectedNodeId === target.id ||
                      hoveredNodeId === node.id || hoveredNodeId === target.id;

                    return (
                      <g key={`${node.id}-${target.id}`}>
                        <motion.line
                          x1={`${node.cx}%`}
                          y1={`${node.cy}%`}
                          x2={`${target.cx}%`}
                          y2={`${target.cy}%`}
                          stroke={isHighlighted ? "url(#highlightGrad)" : "rgba(255, 255, 255, 0.06)"}
                          strokeWidth={isHighlighted ? "2" : "1"}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5 }}
                        />
                        {isHighlighted && (
                          <circle r="2.5" fill="#8B5CF6">
                            <animateMotion
                              dur="3s"
                              repeatCount="indefinite"
                              path={`M ${node.cx * 4} ${node.cy * 4} L ${target.cx * 4} ${target.cy * 4}`}
                            />
                          </circle>
                        )}
                      </g>
                    );
                  });
                })}
                <defs>
                  <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#D946EF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Node Buttons */}
              {nodes.map(node => {
                const NodeIcon = node.icon;
                const isSelected = selectedNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;

                return (
                  <button
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-10"
                    style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                    onClick={() => setSelectedNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    <motion.div
                      className={cn(
                        "w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center backdrop-blur-xl shadow-xl transition-all duration-300 relative group",
                        isSelected 
                          ? "border-primary/60 text-white bg-primary/20 scale-110" 
                          : "border-white/10 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 hover:scale-105"
                      )}
                    >
                      {/* Concentric Glow ring on selected/hovered */}
                      {(isSelected || isHovered) && (
                        <motion.div
                          layoutId="nodeGlow"
                          className="absolute -inset-2.5 rounded-full border border-primary/25 pointer-events-none"
                          style={{
                            boxShadow: `0 0 25px ${node.glow}`,
                          }}
                          animate={{
                            scale: [0.95, 1.05, 0.95],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}

                      <NodeIcon className="w-5 h-5 md:w-6 md:h-6" />

                      {/* Small floating tooltip on node hover */}
                      <span className="pointer-events-none absolute bottom-[115%] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-black border border-white/10 font-mono text-[9px] font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl z-30">
                        {node.title}
                      </span>
                    </motion.div>
                  </button>
                );
              })}

              {/* Central Core Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-white/5 pointer-events-none animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-dashed border-primary/10 rounded-full pointer-events-none" />

            </div>

            {/* Core Status indicator HUD */}
            <div className="absolute bottom-6 left-6 font-mono text-[8px] text-white/30 space-y-1 hidden md:block">
              <p>HOLOGRAPHIC QUANTUM ENGINE v2.1</p>
              <p>STATUS: LOCKED_ON [{selectedNodeId.toUpperCase()}]</p>
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[8px] text-primary font-bold flex items-center gap-1.5 hidden md:block">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>COGNITIVE MATRIX ONLINE</span>
            </div>

          </div>

          {/* Right Panel: Interactive specs & text */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-between bg-black/45 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl glass-card relative overflow-hidden">
            
            {/* Top decorative lock coordinates */}
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">System Diagnostics</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Node Spec Reader</span>
                </div>
              </div>
              <div className="font-mono text-[10px] text-white/40 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                SEC_TYPE: <span className="text-primary font-bold">{selectedNode.type.toUpperCase()}</span>
              </div>
            </div>

            {/* Spec Content Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-grow space-y-6"
              >
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-2">
                    {selectedNode.type === "mission" ? "Mission Objective" : "Foundational Value"}
                  </h4>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight leading-none mb-4">
                    {selectedNode.title}
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed font-light">
                    {selectedNode.desc}
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                {/* Sub-spec Details checklist */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider">Specifications and Parameters</h5>
                  <ul className="space-y-3.5">
                    {selectedNode.details.map((detail, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex gap-3 text-xs text-white/60 leading-relaxed items-start"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quote block */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left text-[11px] font-light text-white/30 italic">
              "Through client-side WebAssembly architectures, we aim to re-establish total data sovereignty for everyday netizens."
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NeuralNetwork;
