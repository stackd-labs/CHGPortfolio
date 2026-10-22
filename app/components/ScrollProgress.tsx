"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div data-motion-reveal
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--gold)] origin-left z-[100]"
    />
  );
}
