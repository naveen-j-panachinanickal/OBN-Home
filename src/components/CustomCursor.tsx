import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .cursor-pointer")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <div className="hidden md:block">
      {/* Outer Ring - Reflects Transparency/Privacy */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/40 pointer-events-none z-[9999] backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(139, 92, 246, 1)" : "rgba(139, 92, 246, 0.4)",
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0)",
          boxShadow: isHovering
            ? "0 0 30px rgba(139, 92, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.3)"
            : "0 0 10px rgba(139, 92, 246, 0.2)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Inner Dot - Represents the Individual/Contributor */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 15px rgba(139, 92, 246, 1), 0 0 25px rgba(139, 92, 246, 0.5)",
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default CustomCursor;
