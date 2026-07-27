"use client";

import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { otherProjects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          py-28
          bg-linear-to-br
          from-[#071426]
          via-[#0F2A52]
          to-[#123C72]
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-28 left-0 w-125 h-125 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 w-137.5 h-137.5 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute top-1/2 left-1/2 w-87.5 h-87.5 rounded-full bg-indigo-500/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Featured Project */}

          <FeaturedProject />

          {/* Other Projects */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mt-32"
          >

            <span
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                bg-cyan-500/20
                border
                border-cyan-400/30
                text-cyan-300
                font-semibold
                mb-6
              "
            >
              💼 More Work
            </span>

            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              Other Projects
            </h2>

            <p className="text-slate-300 mt-5 max-w-2xl mx-auto text-lg leading-8">
              A collection of additional projects demonstrating my
              expertise in modern frontend development, responsive UI,
              API integration, and full-stack applications.
            </p>

          </motion.div>

          {/* Projects Grid */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="
              mt-20
              grid
              md:grid-cols-2
              gap-10
            "
          >

            {otherProjects.map((project) => (

              <ProjectCard
                key={project.title}
                project={project}
              />

            ))}

          </motion.div>

        </div>

      </section>
    </SectionWrapper>
  );
}