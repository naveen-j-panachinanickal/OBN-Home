import {
  Code2,
  Shield,
  Users,
  Globe,
  Cpu,
  Zap,
  Database,
  Lock,
  Share2,
  Github,
  Layers,
  Fingerprint,
  MessageSquare,
  Mail,
  Calendar,
  Slack,
  Trello,
  Cloud,
  Terminal,
  Activity
} from "lucide-react";

const row1 = [
  { Icon: Code2, color: "text-blue-400" },
  { Icon: Shield, color: "text-green-400" },
  { Icon: Users, color: "text-purple-400" },
  { Icon: Globe, color: "text-cyan-400" },
  { Icon: Cpu, color: "text-orange-400" },
  { Icon: Zap, color: "text-yellow-400" },
  { Icon: Database, color: "text-red-400" },
  { Icon: Lock, color: "text-indigo-400" },
  { Icon: MessageSquare, color: "text-emerald-400" },
  { Icon: Mail, color: "text-pink-400" },
];

const row2 = [
  { Icon: Calendar, color: "text-amber-400" },
  { Icon: Slack, color: "text-sky-400" },
  { Icon: Trello, color: "text-blue-500" },
  { Icon: Cloud, color: "text-gray-400" },
  { Icon: Github, color: "text-white" },
  { Icon: Layers, color: "text-violet-400" },
  { Icon: Fingerprint, color: "text-rose-400" },
  { Icon: Share2, color: "text-teal-400" },
  { Icon: Terminal, color: "text-lime-400" },
  { Icon: Activity, color: "text-orange-500" },
];

const IconCard = ({ Icon, color }: { Icon: any, color: string }) => (
  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-morphism flex items-center justify-center group hover:scale-110 transition-transform duration-300 cursor-pointer mx-4 shadow-xl">
    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
  </div>
);

const Marquee = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-primary/10 blur-[120px] rounded-full" />

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center">
            {row1.map((item, index) => (
              <IconCard key={`r1-1-${index}`} Icon={item.Icon} color={item.color} />
            ))}
          </div>
          <div className="flex items-center">
            {row1.map((item, index) => (
              <IconCard key={`r1-2-${index}`} Icon={item.Icon} color={item.color} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          <div className="flex items-center">
            {row2.map((item, index) => (
              <IconCard key={`r2-1-${index}`} Icon={item.Icon} color={item.color} />
            ))}
          </div>
          <div className="flex items-center">
            {row2.map((item, index) => (
              <IconCard key={`r2-2-${index}`} Icon={item.Icon} color={item.color} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient masks */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

export default Marquee;
