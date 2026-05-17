import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Compass,
  HeartHandshake,
  Linkedin,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

type TeamMember = {
  name: string;
  designation: string;
  image: string;
  linkedin: string;
  focus: string;
  accent: string;
};


// Swap these placeholders with official portraits and individual LinkedIn URLs.
const teamMembers: TeamMember[] = [
  {
    name: "Don Benny",
    designation: "Founder & Software Engineer",
    image: "founders/donbenny.webp",
    linkedin: "https://www.linkedin.com/in/donbenny/",
    focus: "Vision, roadmap, and product direction & AI Development",
    accent: "rgba(45, 212, 191, 0.34)",
  },
  {
    name: "Naveen J Panachinanickal",
    designation: "Co-founder & Software Engineer",
    image: "founders/naveenj.webp",
    linkedin: "https://www.linkedin.com/in/naveenjpanachinanickal/",
    focus: "Scalable web tooling and platform quality",
    accent: "rgba(96, 165, 250, 0.34)",
  },
  {
    name: "Romeo Roshan",
    designation: "Co-founder & Software Engineer",
    image: "founders/romeoroshan.webp",
    linkedin: "https://www.linkedin.com/in/romeo-roshan-361097321/",
    focus: "Privacy-first architecture, Frontend & AI Development",
    accent: "rgba(52, 211, 153, 0.34)",
  },
  {
    name: "Ashin Steephan",
    designation: "Co-founder & Software Tester",
    image: "founders/ashinsteephan.webp",
    linkedin: "https://www.linkedin.com/in/ashinsteephan/",
    focus: "Quality Assurance & Content Validation",
    accent: "rgba(251, 113, 133, 0.32)",
  },
  {
    name: "Rony Binoy",
    designation: "Co-Founder & Devops Engineer",
    image: "founders/ronybinoy.webp",
    linkedin: "https://www.linkedin.com/in/rony-binoy/",
    focus: "CI/CD pipelines & Cloud Infrastructure",
    accent: "rgba(251, 191, 36, 0.32)",
  },
  {
    name: "Fable K Lonappan",
    designation: "Co-Founder & Software Developer",
    image: "founders/fableklonappan.webp",
    linkedin: "https://www.linkedin.com/in/fableklonappan/",
    focus: "Fast, accessible, expressive user experiences",
    accent: "rgba(34, 211, 238, 0.34)",
  },
  {
    name: "Tony K Sebastian",
    designation: "Co-Founder & Software Developer",
    image: "founders/tonyksebastian.webp",
    linkedin: "https://www.linkedin.com/in/tonyk-sebastian/",
    focus: "Privacy-first architecture, infrastructure & Tool Development",
    accent: "rgba(129, 140, 248, 0.34)",
  },
  {
    name: "Midhun Krishnan",
    designation: "Co - Founder & Software Developer",
    image: "founders/midhunkrishnan.webp",
    linkedin: "https://www.linkedin.com/in/midhun-krishnan/",
    focus: "Clear documentation and pipeline development",
    accent: "rgba(244, 114, 182, 0.32)",
  },
  {
    name: "Albert Devasia",
    designation: "Co - Founder & Software Developer",
    image: "founders/albertdevasia.webp",
    linkedin: "https://www.linkedin.com/in/albert-devasia/",
    focus: "privacy-first development",
    accent: "rgba(74, 222, 128, 0.34)",
  },
];

const principles = [
  { Icon: ShieldCheck, label: "Private by design" },
  { Icon: HeartHandshake, label: "Built with care" },
  { Icon: Code2, label: "Open-source first" },
];

const AboutTeamSection = () => {
  return (
    <section id="about-us" className="relative overflow-hidden bg-transparent py-32 md:py-44">
      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[130px]" />
      <div className="absolute bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-emerald-400/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200">
              <UsersRound className="h-3.5 w-3.5" />
              About OBN
            </span>

            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Built by people who care about <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">useful, open technology.</span>
            </h2>

            <div className="mt-7 space-y-5 text-sm font-normal leading-relaxed text-white/70 md:text-base">
              <p>
                Open Build Network is shaped by builders, designers, writers, researchers, and community organizers who believe practical tools should stay open, private, and accessible.
              </p>
              <p>
                We keep the work human: clear conversations, transparent decisions, small useful releases, and a culture where newcomers can move from curiosity to contribution.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {principles.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:translate-x-1 px-4 py-3 text-sm text-white/80 backdrop-blur-md transition-all duration-300"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-white/10 bg-black/35 text-cyan-300 transition-colors duration-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.a
                  key={`${member.name}-${member.designation}`}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open LinkedIn profile for ${member.name}`}
                  className="group relative flex flex-col justify-between min-h-[410px] overflow-hidden rounded-[12px] border border-white/10 bg-[#0B0B0F]/90 p-4 text-left shadow-2xl outline-none ring-1 ring-white/[0.03] transition-all duration-300 hover:border-white/25 focus-visible:border-cyan-300/60 focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                  style={{ "--member-accent": member.accent } as CSSProperties}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.045, ease: "easeOut" }}
                  whileHover={{ y: -7, scale: 1.012 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className="pointer-events-none absolute -inset-8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "var(--member-accent)" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.08)_42%,transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-1 flex-col justify-between">
                    <div className="flex flex-col flex-1">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-white/5 transform-gpu backface-hidden">
                        <img
                          src={member.image}
                          alt={`${member.name}, ${member.designation}`}
                          className="h-full w-full object-cover grayscale-[18%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 transform-gpu backface-hidden will-change-transform"
                          style={{ imageRendering: "-webkit-optimize-contrast" }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/8 to-transparent" />
                        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/15 bg-black/42 text-white/78 backdrop-blur-md transition-colors group-hover:text-cyan-200">
                          <Linkedin className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col pt-4 pb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-bold leading-snug tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {member.name}
                            </h3>
                            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/80">
                              {member.designation}
                            </p>
                          </div>
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                        </div>

                        <p className="mt-3 text-sm font-normal leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
                          {member.focus}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="h-px w-full overflow-hidden bg-white/10">
                        <div className="h-full w-1/3 translate-x-[-120%] bg-cyan-200/70 transition-transform duration-700 group-hover:translate-x-[320%]" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-amber-200" />
            Practical products over empty hype.
          </div>
          <div className="flex items-center gap-3">
            <Compass className="h-4 w-4 text-cyan-200" />
            Direction set in public, with contributors.
          </div>
          <div className="flex items-center gap-3">
            <HeartHandshake className="h-4 w-4 text-rose-200" />
            A warmer path into open-source work.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
