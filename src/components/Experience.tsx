"use client";

import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

import {
  FaBriefcase,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

const experiences = [
  {
    title: "Laboratory Teaching Assistant",
    company: "National Textile University",
    period: "2024",
    icon: <FaChalkboardTeacher />,
    color: "from-purple-500 to-pink-500",
    description:
      "Assisted students during Data Structures & Algorithms lab sessions, explained programming concepts, evaluated assignments, and supported instructors in conducting practical labs.",
    technologies: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Teaching",
    ],
  },
  {
    title: "Frontend Development Intern",
    company: "Fista Solutions",
    period: "2025",
    icon: <FaBriefcase />,
    color: "from-blue-500 to-cyan-500",
    description:
      "Developed responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Built reusable UI components, integrated REST APIs, and collaborated with developers on real-world projects.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI-Based ANPRS System",
    company: "Final Year Project",
    period: "2025",
    icon: <FaLaptopCode />,
    color: "from-emerald-500 to-teal-500",
    description:
      "Designed and developed an AI-powered Automated Number Plate Recognition System using Python, Flask, EasyOCR, Roboflow, PostgreSQL, and Next.js for intelligent vehicle entry and exit management.",
    technologies: [
      "Python",
      "Flask",
      "EasyOCR",
      "Next.js",
      "PostgreSQL",
      "Roboflow",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper>
      <section
        id="experience"
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

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Heading */}

          <h2 className="text-5xl md:text-6xl font-extrabold text-center">
            Experience
          </h2>

          <p className="text-center text-slate-300 text-lg leading-8 mt-5 mb-20 max-w-3xl mx-auto">
            My professional journey, internship experience, teaching
            experience, and AI-powered software development projects.
          </p>

          <div className="relative">

            {/* Timeline */}

            <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-linear-to-b from-cyan-400 via-blue-500 to-indigo-500" />

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                    ml-20
                    md:ml-0
                    w-full
                    md:w-[45%]
                    rounded-3xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-2xl
                    p-8
                    transition-all
                    duration-300
                    hover:bg-transparent/15
                  "
                >

                  <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold">
                    {item.period}
                  </span>

                  <h3 className="text-3xl font-bold mt-5">
                    {item.title}
                  </h3>

                  <h4 className="text-cyan-300 text-lg mt-2">
                    {item.company}
                  </h4>

                  <p className="text-slate-300 leading-8 mt-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {item.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          bg-transparent/10
                          border
                          border-cyan-400/30
                          text-cyan-300
                          text-sm
                          font-medium
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </motion.div>

                {/* Timeline Icon */}

                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 15,
                  }}
                  className={`
                    absolute
                    left-6
                    md:left-1/2
                    -translate-x-1/2
                    w-16
                    h-16
                    rounded-full
                    bg-linear-to-br
                    ${item.color}
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                    shadow-2xl
                    border-4
                    border-slate-900
                    z-10
                  `}
                >
                  {item.icon}
                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}