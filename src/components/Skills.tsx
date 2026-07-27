"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 text-5xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Skills() {
  return (
    <SectionWrapper>
      <section
        id="skills"
        className="
          relative
          py-24
          overflow-hidden
          bg-linear-to-br
          from-[#0F172A]
          via-[#172554]
          to-[#1E3A8A]
          text-white
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-20 left-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <h2 className="text-5xl md:text-6xl font-extrabold text-center">
            Technical Skills
          </h2>

          <p className="text-center text-slate-300 text-lg leading-8 mt-5 mb-16 max-w-3xl mx-auto">
            My technology stack for building fast, responsive, scalable,
            and modern web applications with clean architecture and
            exceptional user experiences.
          </p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                transition={{
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="
                  rounded-3xl
                  bg-transparent/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-2xl
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:bg-transparent/15
                  hover:border-cyan-400/40
                  cursor-pointer
                "
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{
                    rotate: 15,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-2xl
                      bg-transparent/10
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    {skill.icon}
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </SectionWrapper>
  );
}