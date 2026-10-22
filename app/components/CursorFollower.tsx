"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 600, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 600, damping: 35 });

  const ringX = useSpring(mouseX, { stiffness: 80, damping: 18 });
  const ringY = useSpring(mouseY, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div data-motion-reveal
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[var(--gold)] pointer-events-none z-[998] hidden md:block motion-reduce:!hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: 0.55,
        }}
      />
      <motion.div data-motion-reveal
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--rose)] pointer-events-none z-[999] hidden md:block motion-reduce:!hidden"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
