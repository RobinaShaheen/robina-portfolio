"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (

    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        overflow-hidden
        rounded-[28px]
        bg-transparent/10
        backdrop-blur-xl
        border
        border-white/10
        shadow-[0_15px_50px_rgba(0,0,0,.30)]
      "
    >

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: .6,
          }}
          className="relative h-full"
        >

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

        </motion.div>

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-linear-to-t from-[#071426] via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-5 text-slate-300 leading-8">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-transparent/10
                border
                border-cyan-400/20
                text-cyan-300
                text-sm
                hover:bg-cyan-500
                hover:text-white
                transition
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          {project.demo && (

            <a
              href={project.demo}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                hover:from-blue-600
                hover:to-indigo-600
                transition-all
                duration-300
                shadow-lg
              "
            >

              <FaExternalLinkAlt />

              Live Demo

            </a>

          )}

          {project.github && (

            <a
              href={project.github}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-transparent/10
                border
                border-white/10
                text-white
                hover:bg-transparent/20
                transition-all
                duration-300
              "
            >

              <FaGithub />

              GitHub

            </a>

          )}

        </div>

      </div>

    </motion.div>

  );
}