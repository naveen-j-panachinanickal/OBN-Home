import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users2, Award, ShieldCheck, Compass, 
  ArrowRight, Key, CheckCircle, RefreshCw, 
  Terminal, ShieldAlert, BadgeInfo 
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  // Guild Choice States
  const [selectedGuild, setSelectedGuild] = useState<string>("builder");
  const [memberHandle, setMemberHandle] = useState<string>("");

  // Staging and Guild identity states
  const [stagingStep, setStagingStep] = useState<"idle" | "registering" | "active">("idle");
  const [registerLogs, setRegisterLogs] = useState<string[]>([]);
  const [memberDetails, setMemberDetails] = useState<any | null>(null);

  const handleJoinAlliance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (stagingStep !== "idle" || !memberHandle.trim()) return;
    
    setStagingStep("registering");
    setRegisterLogs([]);

    const steps = [
      "Securing client identity handshake...",
      "✔ Offline cryptographic seed verified.",
      `Staging enrollment for [${selectedGuild.toUpperCase()} GUILD]...`,
      "✔ Registry credentials generated locally.",
      "Synchronizing cryptographic verification hash...",
      "✔ Member credentials successfully initialized.",
    ];

    for (let i = 0; i < steps.length; i++) {
      setRegisterLogs(prev => [...prev, steps[i]]);
      await new Promise(resolve => setTimeout(resolve, 350));
    }

    const randomID = Math.random().toString(36).substring(2, 8).toUpperCase();
    const mockHash = `0x98f${Math.random().toString(16).substring(2, 6).toUpperCase()}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`;

    setMemberDetails({
      handle: memberHandle.trim(),
      guild: selectedGuild === "builder" ? "The Builder (Engineering)" :
             selectedGuild === "architect" ? "The Architect (UI/UX Design)" : "The Guardian (Advocacy)",
      memberId: `OBN-MEMBER-${randomID}`,
      regHash: mockHash,
      date: new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    });
    setStagingStep("active");
  };

  const handleResetRegistration = () => {
    setStagingStep("idle");
    setMemberDetails(null);
    setRegisterLogs([]);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden min-h-screen flex items-center justify-center bg-transparent"
      onMouseMove={handleMouseMove}
    >
      {/* Immersive Background Space */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-transparent z-0" />
        
        {/* Generative core glows */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-120, 120]) }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[130px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [120, -120]) }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[130px]"
        />
      </div>

      <motion.div
        className="container relative z-10 px-4 max-w-7xl mx-auto"
        style={{ opacity, y }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative group">
            {/* Holographic backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden ring-1 ring-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side: Community Invitation */}
                <div className="col-span-1 lg:col-span-6 space-y-8 text-left relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25">
                    <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs">Join the Movement</span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
                    Join the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-gradient-text">OBN Sovereign</span> Alliance.
                  </h2>

                  <p className="text-base text-white/50 font-light leading-relaxed max-w-md">
                    Become an active part of our open-source, client-side community. Register your handle to enroll in a specialized guild path, claim your cryptographic member key card, and contribute to an open future.
                  </p>

                </div>

                {/* Right side: Interactive Member Staging Terminal */}
                <div className="col-span-1 lg:col-span-6 w-full flex flex-col gap-6 relative z-10">
                  
                  {/* Registry Frame Window */}
                  <div className="relative w-full bg-black/85 rounded-2xl border border-white/10 shadow-2xl p-6 font-mono text-[11px] overflow-hidden select-text text-left">
                    
                    {/* Window Controls */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6 text-[9px] uppercase tracking-wider text-white/30">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-bold text-white/45">OBN_Member_Registry</span>
                      </div>
                      <span className="text-primary font-bold">SECURED PORTAL</span>
                    </div>

                    <AnimatePresence mode="wait">
                      
                      {/* State 1: Choose Guild and Register Form */}
                      {stagingStep === "idle" && (
                        <motion.div 
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-6"
                        >
                          {/* Guild Path Selector */}
                          <div className="space-y-3">
                            <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest block">1. Choose Your Guild Path</span>
                            
                            <div className="grid grid-cols-3 gap-2">
                              {["builder", "architect", "guardian"].map(role => (
                                <button
                                  type="button"
                                  key={role}
                                  onClick={() => setSelectedGuild(role)}
                                  className={cn(
                                    "py-2.5 px-2 rounded-xl border text-[9px] font-bold text-center uppercase tracking-wider transition-all",
                                    selectedGuild === role 
                                      ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.25)]" 
                                      : "bg-white/[0.01] border-white/5 text-white/40 hover:text-white hover:border-white/10 hover:bg-white/[0.02]"
                                  )}
                                >
                                  {role}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Handle Form */}
                          <form onSubmit={handleJoinAlliance} className="space-y-4">
                            <div className="space-y-2">
                              <label className="text-[9px] font-bold text-white/30 uppercase tracking-widest block">2. Enter Handle / Username</label>
                              <Input
                                type="text"
                                required
                                placeholder="e.g. @builder_dan"
                                value={memberHandle}
                                onChange={e => setMemberHandle(e.target.value)}
                                className="h-11 text-xs bg-white/5 border-white/10 text-white rounded-xl focus-visible:ring-primary focus-visible:ring-1 focus-visible:ring-offset-0 font-mono"
                              />
                            </div>

                            <Button 
                              type="submit"
                              className="w-full h-11 rounded-xl bg-primary hover:bg-primary/95 text-white font-mono text-[10px] font-bold uppercase tracking-wider gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] pt-0.5"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Register OBN Identity
                            </Button>
                          </form>
                        </motion.div>
                      )}

                      {/* State 2: Synchronizing / Staging Output */}
                      {stagingStep === "registering" && (
                        <motion.div 
                          key="sync"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3 h-[180px] overflow-y-auto pr-1 scrollbar-thin text-white/80"
                        >
                          {registerLogs.map((log, index) => (
                            <p key={index} className={cn(
                              "leading-relaxed",
                              log.startsWith("✔") ? "text-emerald-400 font-semibold" : 
                              log.startsWith("-") ? "text-cyan-400/80" : "text-white/60"
                            )}>
                              {log}
                            </p>
                          ))}
                          <div className="flex gap-2 items-center text-primary font-bold pt-1.5 animate-pulse">
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>COMPILING MEMBER CREDENTIALS...</span>
                          </div>
                        </motion.div>
                      )}

                      {/* State 3: Active Member Card Certificate Badge */}
                      {stagingStep === "active" && memberDetails && (
                        <motion.div 
                          key="active"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-5"
                        >
                          {/* Member Certificate Badge Grid */}
                          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden space-y-4">
                            <div className="absolute top-0 right-0 p-2.5 text-[8px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border-l border-b border-emerald-500/20 uppercase tracking-widest flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                              VERIFIED ALLIANCE
                            </div>

                            <div className="flex gap-4 items-center">
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Award className="w-6 h-6" />
                              </div>
                              <div>
                                <span className="text-[8px] text-white/30 uppercase tracking-wider block">Registered Member ID</span>
                                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">{memberDetails.memberId}</span>
                              </div>
                            </div>

                            <div className="h-px bg-white/10" />

                            <div className="grid grid-cols-2 gap-4 font-mono text-[9px] text-white/60">
                              <div>
                                <span className="text-white/20 uppercase tracking-wider block mb-0.5">Member Handle</span>
                                <span className="font-bold text-white">{memberDetails.handle}</span>
                              </div>
                              <div>
                                <span className="text-white/20 uppercase tracking-wider block mb-0.5">Guild Path</span>
                                <span className="font-bold text-primary truncate max-w-[120px] block">{memberDetails.guild}</span>
                              </div>
                              <div>
                                <span className="text-white/20 uppercase tracking-wider block mb-0.5">Asymmetric Registry Key</span>
                                <span className="font-bold text-cyan-400 flex items-center gap-1">
                                  <Key className="w-3 h-3 text-cyan-400" />
                                  {memberDetails.regHash}
                                </span>
                              </div>
                              <div>
                                <span className="text-white/20 uppercase tracking-wider block mb-0.5">Enrollment Date</span>
                                <span className="font-bold text-white">{memberDetails.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              onClick={handleResetRegistration}
                              variant="outline"
                              className="w-full h-10 rounded-xl border border-white/10 text-white hover:bg-white/5 font-mono text-[9px] uppercase tracking-wider"
                            >
                              Reset Registry Profile
                            </Button>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
