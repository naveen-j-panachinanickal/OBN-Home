import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Search, Cpu, Layers, Activity, Terminal, ShieldAlert, Users2, 
  Github, ExternalLink, ShieldCheck, Binary, FileText, Sparkles, 
  Workflow, FileJson, Zap, ArrowRight, BookOpen, AlertCircle
} from "lucide-react";

// Project Catalog Schema
interface OBNProject {
  id: string;
  name: string;
  category: string;
  status: "ACTIVE" | "R&D" | "PLANNED";
  statusText: string;
  shortDesc: string;
  specCode: string;
}

// 18 Tool Catalog Schema for Toolbase
interface Toolitem {
  name: string;
  code: string;
  category: string;
  desc: string;
  engine: string;
  features: string[];
}

const Projects = () => {
  // Sidebar State
  const [selectedProjectId, setSelectedProjectId] = useState<string>("toolbase");
  const [sidebarSearch, setSidebarSearch] = useState<string>("");
  const [sidebarFilter, setSidebarFilter] = useState<string>("ALL");

  // Toolbase Component States
  const [activePillarTab, setActivePillarTab] = useState<string>("privacy");
  const [toolSearch, setToolSearch] = useState<string>("");
  const [toolCategoryFilter, setToolCategoryFilter] = useState<string>("ALL");

  // OBN Projects Database
  const obnProjects: OBNProject[] = [
    {
      id: "toolbase",
      name: "Toolbase Workspace",
      category: "Ecosystem Utility Deck",
      status: "ACTIVE",
      statusText: "Production-Ready",
      shortDesc: "Privacy-first, browser-native aggregate portal housing 18 desktop-grade development, editing, and automation utilities running entirely local.",
      specCode: "OBN-SPEC-001"
    }
  ];

  // Toolbase 18 Tools Directory
  const toolbaseTools: Toolitem[] = [
    // 1. File & Document Processing
    {
      name: "Magic PDF",
      code: "magic-pdf",
      category: "File & Document Processing",
      desc: "Lossless PDF compression, splitting, password protection, signatures, and editable document conversions.",
      engine: "Python WASM (Pyodide)",
      features: ["PDF compression & Split/Merge ranges", "Page rearranging & draw/image signatures", "Password encryption/decryption", "Image-to-PDF / PDF-to-Image / export to Word"]
    },
    {
      name: "Archive Kit",
      code: "archive-kit",
      category: "File & Document Processing",
      desc: "Sub-millisecond archive packer and extractor fully running inside browser volatile memory.",
      engine: "Rust WASM",
      features: ["Create & extract .zip files", "Create & extract .tar and .tar.gz archives", "Volatile sandbox - zero disk logging"]
    },
    // 2. Image & Rich Media
    {
      name: "Pixel Axe",
      code: "pixels",
      category: "Image & Rich Media",
      desc: "Professional batch image editor, scaler, EXIF scrubber, and steganographic encryptor.",
      engine: "React Component + Canvas API",
      features: ["Lossless/lossy formats (PNG, JPEG, WebP)", "Batch scaling & aspect-ratio locking", "EXIF metadata scrubbing", "Steganographic hidden text embedding"]
    },
    {
      name: "AI Background Remover",
      code: "bgremover",
      category: "Image & Rich Media",
      desc: "Localized neural network image background isolator for beautiful asset preparation.",
      engine: "ONNX Runtime / @imgly/background-removal",
      features: ["Runs localized deep-learning model", "100% device processing via WebGL/GPU", "Outputs clean, transparent alpha PNGs"]
    },
    {
      name: "QR Forge",
      code: "qr-forge",
      category: "Image & Rich Media",
      desc: "High-resolution custom vector QR code builder and camera scanner.",
      engine: "JS Generator + jsQR Engine",
      features: ["Generates vector SVG QR codes", "Custom colors, sizing, and error correction levels", "Real-time webcam-based QR decoder"]
    },
    // 3. Data Science & Security
    {
      name: "Data Lens",
      code: "data-lens",
      category: "Data Science & Security",
      desc: "WASM Python & SQL playground for full client-side analytical data parsing and visualization.",
      engine: "Pyodide Container (Pandas, NumPy)",
      features: ["Drag CSV, JSON, or Parquet datasets", "Run custom Python data scripts", "Execute client-side SQL queries", "Render interactive, gorgeous chart plots"]
    },
    {
      name: "Redact Secrets",
      code: "redact-secrets",
      category: "Data Science & Security",
      desc: "Entropy scanner and regex parser scrubbing confidential developer keys from logs.",
      engine: "TypeScript Web Worker",
      features: ["Auto-redacts API keys & private SSH keys", "Cleans DB strings and configuration parameters", "Scans codebases prior to production pushes"]
    },
    {
      name: "NoteVault",
      code: "note-vault",
      category: "Data Science & Security",
      desc: "Volatile rich markdown editor and scratchpad with integrated client cryptology.",
      engine: "Local Encryption (AES-256)",
      features: ["Rich markdown parsing", "On-the-fly local browser cache auto-saving", "AES-256 user-key encryption locking"]
    },
    // 4. Workflow Automation
    {
      name: "Pipeline Builder",
      code: "pipeline",
      category: "Workflow Automation",
      desc: "Interactive nodular canvas designed to construct and stream multi-tool batch automation flows.",
      engine: "TIP Core Engine + ReactFlow Canvas",
      features: ["Drag and drop TIP-compliant utility nodes", "Stream parameters in-memory between worker hooks", "Visual cues to block invalid tool linkages"]
    },
    // 5. Developer & Network Utilities
    {
      name: "Base64 Converter",
      code: "base64",
      category: "Developer & Network Utilities",
      desc: "High-throughput binary encoder/decoder operating on isolated threads.",
      engine: "Double-Threaded Web Worker",
      features: ["Encodes/decodes text and raw binary blobs", "Handles huge assets in chunk streams"]
    },
    {
      name: "JSON to TypeScript",
      code: "json-to-interface",
      category: "Developer & Network Utilities",
      desc: "Instant structural data-type compiler mapping interface structures.",
      engine: "TypeScript Abstract Syntax Tree (AST)",
      features: ["Parses complex nested JSON objects", "Outputs perfectly structured, strictly typed interfaces"]
    },
    {
      name: "Format Studio",
      code: "format-studio",
      category: "Developer & Network Utilities",
      desc: "Code beautifier, validator, and formatter for JSON, XML, YAML, and CSS.",
      engine: "Prettier WASM runtime",
      features: ["Validates code syntax on-the-fly", "Custom indentation and styling configurations"]
    },
    {
      name: "Data Builder",
      code: "data-builder",
      category: "Developer & Network Utilities",
      desc: "Algorithmic fake dataset generator mapping structured parameters.",
      engine: "Faker JS Module",
      features: ["Generates huge custom mock datasets", "Customizable schema keys and format mappings"]
    },
    {
      name: "PasswordX",
      code: "passwordx",
      category: "Developer & Network Utilities",
      desc: "Client-side credentials strength evaluator and master-crypt locker.",
      engine: "Entropy Analyzer + AES Encryption",
      features: ["Evaluates password complexity metrics locally", "Encrypts saved records inside tab RAM"]
    },
    {
      name: "Ping Tester",
      code: "ping-tester",
      category: "Developer & Network Utilities",
      desc: "ICMP-equivalent reachability analyzer logging packet latency.",
      engine: "Browser Fetch/Ping Worker",
      features: ["Round-trip latency logger", "Tracks network packet-loss percentages in real-time"]
    },
    {
      name: "Speed Test",
      code: "speed-test",
      category: "Developer & Network Utilities",
      desc: "High-performance network bandwidth analyzer driving concurrent websocket streams.",
      engine: "Concurreny Worker Thread Pool",
      features: ["Measures downstream bandwidth", "Measures upstream bandwidth and network jitter"]
    },
    {
      name: "Echo AI Console",
      code: "echo-ai",
      category: "Developer & Network Utilities",
      desc: "Control dashboard managing OBN's on-device LLM sandbox interface.",
      engine: "WebGPU Web-LLM Worker",
      features: ["Direct local WebGPU model inference", "Uninstall options to fully reclaim browser cache"]
    }
  ];

  // Filtering OBN projects in Sidebar
  const filteredProjects = useMemo(() => {
    return obnProjects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(sidebarSearch.toLowerCase()) ||
                            project.category.toLowerCase().includes(sidebarSearch.toLowerCase());
      const matchesStatus = sidebarFilter === "ALL" || project.status === sidebarFilter;
      return matchesSearch && matchesStatus;
    });
  }, [sidebarSearch, sidebarFilter]);

  // Filtering Toolbase 18 Tools
  const filteredTools = useMemo(() => {
    return toolbaseTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(toolSearch.toLowerCase()) ||
                            tool.desc.toLowerCase().includes(toolSearch.toLowerCase()) ||
                            tool.engine.toLowerCase().includes(toolSearch.toLowerCase());
      const matchesCategory = toolCategoryFilter === "ALL" || tool.category === toolCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [toolSearch, toolCategoryFilter]);

  // Categories list for Toolbase UI
  const toolCategories = [
    { label: "All Utilities", value: "ALL", count: toolbaseTools.length },
    { label: "Files & PDF", value: "File & Document Processing", count: 2 },
    { label: "Image & AI Media", value: "Image & Rich Media", count: 3 },
    { label: "Data & Security", value: "Data Science & Security", count: 3 },
    { label: "Canvas Automation", value: "Workflow Automation", count: 1 },
    { label: "Dev & Network Tools", value: "Developer & Network Utilities", count: 8 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 10px;
          transition: background 0.2s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
        /* Firefox support */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(16, 185, 129, 0.2) rgba(255, 255, 255, 0.01);
        }
      `}} />

      {/* Pinned Global Animated Canopy Background */}
      <StarBackground />

      {/* Floating HUD Navigation */}
      <Navbar />

      {/* Main Projects Section */}
      <main className="relative z-10 pt-32 pb-24 px-4 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Title Deck */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary/80">OBN BLUEPRINTS CATALOG</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
            Strategic Open Runtimes
          </h1>
          <p className="text-white/40 text-sm max-w-2xl font-light">
            Explore active production workspaces, foundational protocol libraries, and upcoming sovereign utilities built entirely for browser-only execution.
          </p>
        </div>

        {/* 2-Column Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Strategic Sidebar Catalog */}
          <aside className="lg:col-span-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl">
            
            {/* Sidebar Header & Search */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Project Registry</h3>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  COUNT: {obnProjects.length}
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search OBN projects..."
                  value={sidebarSearch}
                  onChange={(e) => setSidebarSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Status Filters */}
              <div className="flex gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5 overflow-x-auto custom-scrollbar">
                {["ALL", "ACTIVE", "R&D", "PLANNED"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setSidebarFilter(status)}
                    className={`flex-1 text-[9px] font-mono py-1.5 px-2 rounded-lg text-center transition-all ${
                      sidebarFilter === status 
                        ? "bg-primary text-black font-extrabold shadow-md" 
                        : "text-white/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Project Cards */}
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] pr-1 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const isSelected = selectedProjectId === project.id;
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setSelectedProjectId(project.id)}
                      className={`relative overflow-hidden cursor-pointer rounded-2xl border p-4 transition-all duration-300 group ${
                        isSelected 
                          ? "bg-primary/[0.03] border-primary shadow-[0_0_20px_0_rgba(16,185,129,0.15)]" 
                          : "bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
                      }`}
                    >
                      {/* Active sidebar glow core */}
                      {isSelected && (
                        <div className="absolute top-0 right-0 h-1.5 w-1.5 rounded-bl-full bg-primary" />
                      )}

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-[8px] font-mono px-2 py-0.5 rounded border ${
                            project.status === "ACTIVE" 
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                              : project.status === "R&D"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                          }`}>
                            {project.statusText}
                          </span>
                          <span className="text-[8px] font-mono text-white/30">{project.specCode}</span>
                        </div>

                        <div>
                          <h4 className={`text-sm font-bold tracking-tight transition-colors ${
                            isSelected ? "text-primary" : "text-white group-hover:text-white/80"
                          }`}>
                            {project.name}
                          </h4>
                          <span className="text-[10px] font-light text-white/40">{project.category}</span>
                        </div>

                        <p className="text-[11px] font-light leading-relaxed text-white/30 line-clamp-2">
                          {project.shortDesc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredProjects.length === 0 && (
                <div className="py-12 flex flex-col items-center justify-center text-center gap-2 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                  <AlertCircle className="w-8 h-8 text-white/20" />
                  <span className="text-xs text-white/40 font-mono">No strategic runtimes found</span>
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT COLUMN: Active Project Showcase Viewport */}
          <section className="lg:col-span-8 flex flex-col gap-8 min-h-[600px]">
            <AnimatePresence mode="wait">
              {selectedProjectId === "toolbase" ? (
                
                // HIGH FIDELITY SPEC DECK FOR TOOLBASE
                <motion.div
                  key="toolbase-spec"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-8"
                >
                  {/* Hero Specs Deck */}
                  <div className="relative bg-black/60 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                    {/* Generative light core */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col gap-6">
                      
                      {/* Specs Badge Header */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[8px] font-mono px-2 py-0.5 rounded border bg-emerald-500/10 text-emerald-400 border-emerald-500/20 tracking-wider">
                          FLAGSHIP WORKSPACE
                        </span>
                        <span className="text-[8px] font-mono px-2 py-0.5 rounded border bg-white/5 text-white/60 border-white/10 tracking-wider">
                          SEC_LEVEL: ABSOLUTE
                        </span>
                        <span className="text-[8px] font-mono px-2 py-0.5 rounded border bg-white/5 text-white/60 border-white/10 tracking-wider">
                          ENGINE: WEB_SANDBOX
                        </span>
                      </div>

                      {/* Title & Organization Info */}
                      <div>
                        <div className="flex justify-between items-start gap-4">
                          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-emerald-400 to-teal-500 bg-clip-text text-transparent">
                            Toolbase
                          </h2>
                          <span className="text-xs font-mono text-white/30 py-1 px-3 border border-white/5 bg-white/5 rounded-full">
                            active / version 1.2.0
                          </span>
                        </div>
                        <p className="text-white/40 text-xs font-mono mt-1">Official Showcase Profile // Open Build Network</p>
                      </div>

                      {/* Hook Quote Deck */}
                      <div className="border-l-2 border-primary bg-primary/[0.02] p-4 rounded-r-2xl">
                        <blockquote className="text-white/80 text-xs md:text-sm font-light leading-relaxed italic">
                          "Your browser is a highly powerful computer. Why upload your sensitive documents, keys, and codebases to someone else's server? <strong className="text-primary font-semibold">Toolbase</strong> by the Open Build Network (OBN) lets you run compressions, conversions, local AI assistants, and visual pipelines entirely client-side. Zero latency, infinite security, zero pricing walls."
                        </blockquote>
                      </div>

                      {/* Spec Action Deck */}
                      <div className="flex flex-wrap gap-4 pt-2">
                        <a
                          href="https://toolbase.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-black font-extrabold text-xs tracking-wider uppercase hover:bg-primary/95 transition-all shadow-[0_4px_20px_0_rgba(16,185,129,0.3)]"
                        >
                          Launch Workspace (toolbase.in)
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        
                        <a
                          href="https://github.com/openbuildnetwork/toolbase"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-extrabold text-xs tracking-wider uppercase hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          View Repository
                          <Github className="w-3.5 h-3.5 text-white/60" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* High-Fidelity Performance & Privacy Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: "DATA EXFILTRATION", val: "0 Bytes Sent", spec: "In-memory sandbox; zero backend API uploads." },
                      { title: "SERVER OVERHEAD", val: "$0.00 Cost", spec: "100% of analytical execution offloaded to client." },
                      { title: "AVAILABILITY", val: "Offline-First", spec: "Service Workers enable fully air-gapped runtimes." },
                      { title: "UI PERFORMANCE", val: "Fluid 60 FPS", spec: "CPU heavy tasks run on separate Web Worker threads." }
                    ].map((metric, i) => (
                      <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="text-[8px] font-mono tracking-[0.15em] text-white/30">{metric.title}</span>
                        <h4 className="text-sm font-black text-primary tracking-tight font-mono">{metric.val}</h4>
                        <p className="text-[10px] font-light text-white/40 leading-relaxed">{metric.spec}</p>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Pillars Showcase */}
                  <div className="bg-black/40 border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 relative">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Engine Architectural Pillars</h3>
                      <p className="text-white/40 text-[11px] font-light">Toggle OBN core runtime pillars to study on-device implementation designs.</p>
                    </div>

                    {/* Tab Selection */}
                    <div className="flex gap-2 border-b border-white/5 overflow-x-auto pb-1 custom-scrollbar">
                      {[
                        { id: "privacy", label: "Zero-Trust Privacy" },
                        { id: "tip", label: "TIP Interaction Protocol" },
                        { id: "wasm", label: "WASM & Python Engines" },
                        { id: "echo", label: "On-Device Echo AI" }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActivePillarTab(tab.id)}
                          className={`text-xs font-semibold py-2 px-3 relative whitespace-nowrap transition-colors ${
                            activePillarTab === tab.id ? "text-primary font-bold" : "text-white/40 hover:text-white"
                          }`}
                        >
                          {tab.label}
                          {activePillarTab === tab.id && (
                            <motion.div 
                              layoutId="activePillarLine"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Tab Render Content */}
                    <div className="min-h-[160px] text-xs leading-relaxed text-white/60 font-light flex flex-col gap-4">
                      {activePillarTab === "privacy" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
                          <p>
                            Unlike traditional cloud SaaS converters that require loading files to external databases, Toolbase acts as the compute engine directly inside volatile computer memory (RAM).
                          </p>
                          <p>
                            Every single PDF, image, or SQL database stays cached temporarily in volatile browser RAM and is completely destroyed the exact moment you close the tab. For persistent parameters like saved credentials or journal drafts, high-level **AES-256 local client encryption** is applied prior to caching in localStorage, protected by a user key.
                          </p>
                        </motion.div>
                      )}

                      {activePillarTab === "tip" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          <div className="md:col-span-7 flex flex-col gap-3">
                            <p>
                              The absolute core of Toolbase logic is the **TIP (Tool Interaction Protocol)**, which unifies all modular tool schemas in a single source of truth (`tools.registry.ts`).
                            </p>
                            <p>
                              This allows tool logic, metadata parameters, range metrics, and default options to exist completely independent of context. The exact same compile engine works on its standalone tool page or as a visual workflow block dragged onto our **Pipelines Canvas**, providing complete modularity.
                            </p>
                          </div>
                          
                          {/* TIP SVG Diagram */}
                          <div className="md:col-span-5 border border-white/5 bg-white/[0.01] rounded-2xl p-4 flex flex-col gap-2 items-center justify-center font-mono text-[9px] text-white/40 shadow-inner">
                            <span className="text-[8px] text-primary font-bold">TIP INTERACTION GRAPH</span>
                            <div className="flex flex-col gap-1 w-full text-center">
                              <div className="bg-white/5 border border-white/10 p-1.5 rounded text-white">tools.registry.ts (Schema)</div>
                              <div className="text-[12px] text-primary">↓</div>
                              <div className="grid grid-cols-2 gap-2 text-[8px]">
                                <div className="bg-white/5 border border-white/10 p-1 rounded">Standalone Page</div>
                                <div className="bg-white/5 border border-white/10 p-1 rounded">Pipelines Node</div>
                              </div>
                              <div className="text-[12px] text-primary">↓</div>
                              <div className="bg-white/5 border border-white/10 p-1.5 rounded text-white">useTIPTool Hook (Invoke)</div>
                              <div className="text-[12px] text-primary">↓</div>
                              <div className="bg-primary/10 border border-primary/20 p-1.5 rounded text-primary font-bold">WASM Web Worker (Execute)</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activePillarTab === "wasm" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
                          <p>
                            To process massive developer assets, data science pipelines, and document packaging without contacting a central hosting server, Toolbase compiles native desktop engines directly into the browser viewport:
                          </p>
                          <ul className="list-disc pl-4 space-y-1.5 text-white/50">
                            <li><strong className="text-white">Rust WebAssembly (WASM):</strong> Compiles high-speed archiving algorithms and crypto ciphers, outputting sub-millisecond encryption and `.zip`/`.tar` creation.</li>
                            <li><strong className="text-white">Pyodide Container:</strong> Executes a complete local Python environment in your tab, bringing Pandas, NumPy, and PyPDF directly to client-side data science sheets.</li>
                          </ul>
                        </motion.div>
                      )}

                      {activePillarTab === "echo" && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
                          <p>
                            For local document auditing, code compilation review, and chat, Toolbase mounts **Echo AI**—an offline-first Large Language Model assistant powered entirely inside your browser sandbox.
                          </p>
                          <p>
                            Echo AI utilizes `@mlc-ai/web-llm` running inside dedicated Web Worker scopes, leveraging your machine's local GPU through modern WebGPU browser acceleration. Under our uninstallation guarantee, an integrated **Engine Manager** completely purges your local storage registers (IndexedDB, Origin Private File System) to fully reclaim disk space upon removal.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* 18-Tool Feature Catalog Explorer Section */}
                  <div className="flex flex-col gap-6 mt-4" id="toolbase-explorer">
                    
                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Interactive Utility Explorer</h3>
                        </div>
                        <p className="text-white/40 text-[11px] font-light">Search and filter the 18 active local engines powering the Toolbase deck.</p>
                      </div>

                      {/* Tool Catalog Search */}
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          type="text"
                          placeholder="Search 18 tools (e.g. magic-pdf, zip)..."
                          value={toolSearch}
                          onChange={(e) => setToolSearch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Tool Category Slider */}
                    <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/5 pr-1 custom-scrollbar">
                      {toolCategories.map((cat, i) => (
                        <button
                          key={i}
                          onClick={() => setToolCategoryFilter(cat.value)}
                          className={`flex items-center gap-2 py-2 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                            toolCategoryFilter === cat.value
                              ? "bg-primary border-primary text-black font-extrabold shadow-[0_2px_10px_0_rgba(16,185,129,0.2)]"
                              : "bg-white/[0.01] border-white/5 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.03]"
                          }`}
                        >
                          {cat.label}
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded-full ${
                            toolCategoryFilter === cat.value ? "bg-black/10 text-black font-black" : "bg-white/5 text-white/40"
                          }`}>
                            {cat.count}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Filtered Tool Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimatePresence mode="popLayout">
                        {filteredTools.map((tool) => (
                          <motion.div
                            key={tool.code}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-black/40 border border-white/10 rounded-3xl p-6 flex flex-col justify-between gap-4 shadow-xl relative overflow-hidden group hover:border-primary/40 hover:shadow-[0_4px_30px_0_rgba(16,185,129,0.05)] transition-all duration-300"
                          >
                            {/* Card Glow Core */}
                            <div className="absolute -inset-10 bg-gradient-to-r from-primary/5 via-primary/0 to-teal-500/5 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col gap-3">
                              {/* Header tags */}
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1.5">
                                  <Binary className="w-3.5 h-3.5 text-primary" />
                                  <span className="text-[10px] font-mono tracking-wider text-primary font-bold">{tool.code}</span>
                                </div>
                                <span className="text-[8px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                  {tool.engine}
                                </span>
                              </div>

                              {/* Info */}
                              <div>
                                <h4 className="text-base font-bold text-white tracking-tight">{tool.name}</h4>
                                <p className="text-white/40 text-xs font-light mt-1 leading-relaxed">{tool.desc}</p>
                              </div>

                              {/* Specs features */}
                              <ul className="mt-2 space-y-1 text-[11px] font-light text-white/30">
                                {tool.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="relative z-10 pt-2 flex justify-end border-t border-white/5">
                              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary transition-colors">
                                SEC_COMPLIANCE // VERIFIED
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {filteredTools.length === 0 && (
                        <div className="col-span-1 md:col-span-2 py-16 flex flex-col items-center justify-center text-center gap-3 border border-dashed border-white/10 rounded-3xl bg-white/[0.01]">
                          <AlertCircle className="w-10 h-10 text-white/20 animate-pulse" />
                          <div>
                            <span className="text-sm text-white/60 font-semibold block">No modular utilities found</span>
                            <span className="text-xs text-white/40 font-mono mt-1 block">Try clearing filter parameters or editing search keys.</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </motion.div>
              ) : (
                
                // HIGH FIDELITY SPEC DECK FOR FUTURE / PLANNED PROJECTS
                <motion.div
                  key={selectedProjectId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/60 border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 relative overflow-hidden"
                >
                  {/* Neon backlight overlay */}
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6 max-w-2xl py-12">
                    
                    {/* Header status */}
                    <div className="flex gap-2 items-center">
                      <span className="text-[8px] font-mono px-2 py-0.5 rounded border bg-amber-500/10 text-amber-400 border-amber-500/20">
                        {obnProjects.find(p => p.id === selectedProjectId)?.statusText}
                      </span>
                      <span className="text-[8px] font-mono px-2 py-0.5 rounded border bg-white/5 text-white/40 border-white/5">
                        {obnProjects.find(p => p.id === selectedProjectId)?.specCode}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="text-3xl font-black text-white tracking-tight">
                        {obnProjects.find(p => p.id === selectedProjectId)?.name}
                      </h2>
                      <span className="text-xs text-primary font-mono block mt-1">
                        {obnProjects.find(p => p.id === selectedProjectId)?.category}
                      </span>
                    </div>

                    {/* Statement */}
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {obnProjects.find(p => p.id === selectedProjectId)?.shortDesc}
                    </p>

                    {/* Specs Blueprint Card Mock */}
                    <div className="border border-white/5 bg-white/[0.01] rounded-2xl p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">OBN DEPLOYMENT DIAGNOSTICS</span>
                      </div>
                      
                      <div className="space-y-3 font-mono text-[10px] text-white/40">
                        <div className="flex justify-between">
                          <span>SPEC_TYPE:</span>
                          <span className="text-white/60">SOVEREIGN PROTOCOL BLUEPRINT</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SANDBOX_SCHEME:</span>
                          <span className="text-white/60">VOLATILE TAB PROCESS (100% PRIVATE)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>REGISTRY_RECORDS:</span>
                          <span className="text-white/60">PENDING AUDIT // SPEC-404</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        disabled
                        className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 font-bold text-xs tracking-wider uppercase cursor-not-allowed"
                      >
                        Launch Workspace (Coming Soon)
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href="https://github.com/openbuildnetwork/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-white/60 hover:text-white hover:border-white/20 transition-all font-bold text-xs uppercase tracking-wider"
                      >
                        View Org GitHub
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

        </div>
      </main>

      {/* Digital Footer Summary */}
      <ScrollReveal direction="fade" delay={0.1}>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Projects;
