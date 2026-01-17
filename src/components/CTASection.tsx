import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const GeometricShape = ({
  className,
  delay = 0,
  rotateX = 0,
  rotateY = 0
}: {
  className?: string;
  delay?: number;
  rotateX?: number;
  rotateY?: number;
}) => {
  return (
    <motion.div
      className={`absolute w-32 h-32 md:w-48 md:h-48 opacity-20 ${className}`}
      initial={{ rotateX, rotateY, rotateZ: 0 }}
      animate={{
        rotateX: [rotateX, rotateX + 180, rotateX + 360],
        rotateY: [rotateY, rotateY + 180, rotateY + 360],
        rotateZ: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 border-2 border-primary/50 bg-primary/5 backdrop-blur-sm rounded-xl transform translate-z-10" />
      <div className="absolute inset-0 border-2 border-primary/30 bg-primary/5 backdrop-blur-sm rounded-xl transform -translate-z-10 rotate-y-90" />
      <div className="absolute inset-0 border-2 border-primary/30 bg-primary/5 backdrop-blur-sm rounded-xl transform translate-x-10 rotate-y-90" />
    </motion.div>
  );
};

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

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden min-h-screen flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background/90 z-0" />

        {/* Animated Gradient Orbs */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
        />

        {/* Floating 3D Geometric Shapes */}
        <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
          <GeometricShape className="top-[10%] left-[10%]" delay={0} rotateX={45} />
          <GeometricShape className="bottom-[20%] right-[10%]" delay={2} rotateY={45} />
          <GeometricShape className="top-[40%] right-[20%]" delay={1} rotateX={-30} />
          <GeometricShape className="bottom-[10%] left-[20%]" delay={3} rotateY={-30} />
        </div>
      </div>

      <motion.div
        className="container relative z-10 px-4"
        style={{ opacity, y }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Glowing Content Container */}
          <div className="relative group perspective-[1000px]">
            {/* Holographic Card Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-24 shadow-2xl overflow-hidden ring-1 ring-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              {/* Floating Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="transform translate-z-[50px]"
              >
                <div className="inline-block p-4 mb-8 rounded-2xl bg-primary/10 border border-primary/20 animate-pulse-glow">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm">Join the Revolution</span>
                </div>

                <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
                  Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-gradient-text">Future</span>
                  <br />Together.
                </h2>

                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Join a community of visionaries, creators, and builders.
                  Let's shape the next generation of digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    className="h-20 px-12 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold transition-all shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_-10px_rgba(124,58,237,0.7)] hover:scale-105"
                  >
                    Join Now
                    <ArrowRight className="ml-3 w-6 h-6 animate-pulse" />
                  </Button>

                  <Button variant="ghost" className="h-20 px-12 rounded-full border border-white/10 text-white hover:bg-white/10 text-lg font-medium backdrop-blur-md hover:scale-105 transition-all">
                    <MessageCircle className="mr-3 w-6 h-6" />
                    Get in Touch
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
