import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .cursor-pointer, [role='button'], input, select, textarea")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Soft elastic springs for double-orbit parallax lag
  const ring1SpringConfig = { damping: 28, stiffness: 350 };
  const ring2SpringConfig = { damping: 22, stiffness: 180 }; // Lag/inertia ring

  const ring1X = useSpring(mousePosition.x, ring1SpringConfig);
  const ring1Y = useSpring(mousePosition.y, ring1SpringConfig);

  const ring2X = useSpring(mousePosition.x, ring2SpringConfig);
  const ring2Y = useSpring(mousePosition.y, ring2SpringConfig);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* OUTER NOTCHED GYROSCOPIC RING (Parallax Lag + Counter-Clockwise Orbit) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-dashed border-primary/20 pointer-events-none z-[9999]"
        style={{
          x: ring2X,
          y: ring2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
          borderColor: isHovering ? "rgba(139, 92, 246, 0.4)" : "rgba(16, 185, 129, 0.2)",
          rotate: isHovering ? -360 : 0,
        }}
        transition={{
          scale: { duration: 0.25, ease: "easeOut" },
          borderColor: { duration: 0.3 },
          rotate: isHovering 
            ? { repeat: Infinity, duration: 6, ease: "linear" } 
            : { duration: 0.6, ease: "easeOut" }
        }}
      />

      {/* INNER GYROSCOPIC RING (Dotted + Clockwise Orbit + Holographic Core) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-dotted border-primary/40 pointer-events-none z-[9999] backdrop-blur-[1px]"
        style={{
          x: ring1X,
          y: ring1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
          borderColor: isHovering ? "rgba(16, 185, 129, 0.8)" : "rgba(16, 185, 129, 0.4)",
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.04)" : "rgba(16, 185, 129, 0)",
          rotate: isHovering ? 360 : 0,
          boxShadow: isHovering
            ? "0 0 25px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)"
            : "0 0 8px rgba(16, 185, 129, 0.1)",
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          borderColor: { duration: 0.3 },
          backgroundColor: { duration: 0.3 },
          rotate: isHovering 
            ? { repeat: Infinity, duration: 4, ease: "linear" } 
            : { duration: 0.5, ease: "easeOut" }
        }}
      />

      {/* HOLOGRAPHIC TARGET TICK MARKS (Visible during Hover only) */}
      {isHovering && (
        <>
          {/* Top Tick */}
          <motion.div
            className="fixed w-0.5 h-1.5 bg-primary/80 z-[9999]"
            style={{
              x: ring1X,
              y: ring1Y,
              translateX: "-50%",
              translateY: "-240%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          {/* Bottom Tick */}
          <motion.div
            className="fixed w-0.5 h-1.5 bg-primary/80 z-[9999]"
            style={{
              x: ring1X,
              y: ring1Y,
              translateX: "-50%",
              translateY: "140%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          {/* Left Tick */}
          <motion.div
            className="fixed w-1.5 h-0.5 bg-primary/80 z-[9999]"
            style={{
              x: ring1X,
              y: ring1Y,
              translateX: "-240%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          {/* Right Tick */}
          <motion.div
            className="fixed w-1.5 h-0.5 bg-primary/80 z-[9999]"
            style={{
              x: ring1X,
              y: ring1Y,
              translateX: "140%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </>
      )}

      {/* CORE RESPONSIVE INDEX POINT (0-Latency Center tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-primary to-emerald-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 12px rgba(16, 185, 129, 1), 0 0 20px rgba(16, 185, 129, 0.4)",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </div>
  );
};

export default CustomCursor;
