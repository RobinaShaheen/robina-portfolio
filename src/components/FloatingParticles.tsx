"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from(
      { length: 35 },
      (_, index) => ({
        id: index,
        size: Math.random() * 8 + 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * 5,
      })
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute -top-40 left-0 -z-10 w-112.5 h-112.5 rounded-full bg-cyan-500/10 blur-[120px]" />

    <div className="absolute bottom-0 right-0 -z-10 w-125 h-125 rounded-full bg-blue-500/10 blur-[120px]" />

    <div className="absolute top-1/2 left-1/2 -z-10 w-87.5 h-87.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />  
      
    </div>
  );
}