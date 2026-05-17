import {
  Code2,
  Shield,
  Users,
  Globe,
  Cpu,
  Database,
  Lock,
  Share2,
  Github,
  Layers,
  Fingerprint,
  Terminal,
  Activity,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MarqueePill {
  Icon: any;
  label: string;
  status: string;
  color: string;
  glowColor: string;
}

const row1: MarqueePill[] = [
  { Icon: Cpu, label: "Echo AI", status: "LOCAL", color: "text-cyan-400", glowColor: "rgba(6, 182, 212, 0.4)" },
  { Icon: Lock, label: "Keystore", status: "E2EE", color: "text-purple-400", glowColor: "rgba(168, 85, 247, 0.4)" },
  { Icon: Share2, label: "P2P Router", status: "MESH", color: "text-emerald-400", glowColor: "rgba(16, 185, 129, 0.4)" },
  { Icon: Code2, label: "WASM Core", status: "THREAD", color: "text-amber-400", glowColor: "rgba(245, 158, 11, 0.4)" },
  { Icon: Database, label: "Local DB", status: "OPFS", color: "text-rose-400", glowColor: "rgba(244, 63, 94, 0.4)" },
  { Icon: Shield, label: "Secure Shield", status: "ACTIVE", color: "text-blue-400", glowColor: "rgba(59, 130, 246, 0.4)" },
  { Icon: Fingerprint, label: "Bio Identity", status: "SECURED", color: "text-indigo-400", glowColor: "rgba(99, 102, 241, 0.4)" },
];

const row2: MarqueePill[] = [
  { Icon: Layers, label: "Open Build", status: "MERGED", color: "text-violet-400", glowColor: "rgba(139, 92, 246, 0.4)" },
  { Icon: Activity, label: "Matrix Sync", status: "0ms", color: "text-pink-400", glowColor: "rgba(236, 72, 153, 0.4)" },
  { Icon: Globe, label: "Core Registry", status: "SYNC", color: "text-sky-400", glowColor: "rgba(14, 165, 233, 0.4)" },
  { Icon: Terminal, label: "HUD Console", status: "READY", color: "text-lime-400", glowColor: "rgba(132, 204, 22, 0.4)" },
  { Icon: Users, label: "Builder Guild", status: "GUILD", color: "text-teal-400", glowColor: "rgba(20, 184, 166, 0.4)" },
  { Icon: ShieldCheck, label: "Integrity Node", status: "OK", color: "text-emerald-400", glowColor: "rgba(16, 185, 129, 0.4)" },
  { Icon: Github, label: "Github Sync", status: "OPEN", color: "text-white", glowColor: "rgba(255, 255, 255, 0.2)" },
];

const PillCard = ({ Icon, label, status, color, glowColor }: MarqueePill) => (
  <div 
    className="flex-shrink-0 flex items-center gap-4 px-6 py-3.5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer mx-4 group hover:border-white/15 relative overflow-hidden"
    style={{
      boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`,
    }}
  >
    {/* Ambient Glow behind the pill on hover */}
    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
      style={{ backgroundColor: glowColor, filter: "blur(12px)" }}
    />
    
    {/* Icon circle */}
    <div className={cn(
      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300",
      "bg-white/[0.01] border-white/5 group-hover:scale-110 group-hover:border-white/10 group-hover:bg-white/[0.04]"
    )}>
      <Icon className={cn("w-5 h-5 transition-all duration-300", color, "group-hover:scale-105")} />
    </div>

    {/* Metadata Text */}
    <div className="flex flex-col text-left font-sans">
      <span className="text-[11px] font-extrabold text-white tracking-wider uppercase group-hover:text-primary transition-colors">
        {label}
      </span>
      <span className="text-[8px] font-mono font-bold text-white/30 uppercase tracking-widest mt-1 flex items-center gap-1.5 group-hover:text-white/50 transition-colors">
        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
        {status}
      </span>
    </div>
  </div>
);

const Marquee = () => {
  return (
    <div className="relative py-12 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center">
            {row1.map((item, index) => (
              <PillCard key={`r1-1-${index}`} {...item} />
            ))}
          </div>
          <div className="flex items-center">
            {row1.map((item, index) => (
              <PillCard key={`r1-2-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          <div className="flex items-center">
            {row2.map((item, index) => (
              <PillCard key={`r2-1-${index}`} {...item} />
            ))}
          </div>
          <div className="flex items-center">
            {row2.map((item, index) => (
              <PillCard key={`r2-2-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient masks to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Marquee;
