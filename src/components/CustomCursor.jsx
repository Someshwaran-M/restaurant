import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for trailing outer circle follower
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const followerX = useSpring(-100, springConfig);
  const followerY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop with mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      followerX.set(e.clientX);
      followerY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [followerX, followerY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Trailing Soft Circle (Follower) */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.45 : 0.3,
        }}
        transition={{ duration: 0.2 }}
        className="w-9 h-9 rounded-full bg-orange-500/30 border border-orange-500/60 backdrop-blur-[1px] shadow-[0_0_15px_rgba(249,115,22,0.5)]"
      />

      {/* Inner Solid Dot (Instant Position) */}
      <div
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
        }}
        className={`w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)] transition-transform duration-100 ease-out ${
          isHovered ? "scale-150 bg-orange-400" : ""
        }`}
      />
    </div>
  );
}
