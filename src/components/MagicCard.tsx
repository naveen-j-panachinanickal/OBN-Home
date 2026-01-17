import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(16, 185, 129, 0.15)", // Default emerald
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const background = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, ${spotlightColor}, transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    const rX = ((y / height) - 0.5) * -10; // -5 to 5 degrees
    const rY = ((x / width) - 0.5) * 10;   // -5 to 5 degrees
    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-500/30",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: background,
        }}
      />
      <div
        className="relative z-10 h-full"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default MagicCard;
