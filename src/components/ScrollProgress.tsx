"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-blue-600 z-9999"
    />
  );
}