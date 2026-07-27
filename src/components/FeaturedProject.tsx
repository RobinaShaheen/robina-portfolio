"use client";

import { motion } from "motion/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import { featuredProject } from "@/data/projects";

export default function FeaturedProject() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === featuredProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? featuredProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === featuredProject.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-28">

      {/* Heading */}

      <div className="text-center mb-14">

        <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-5">
          ⭐ Portfolio Highlight
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold text-white">
          Featured Project
        </h2>

        <p className="text-slate-300 mt-5 text-lg">
          My Final Year Project showcasing AI and Full Stack Development.
        </p>

      </div>

      {/* Card */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8 }}
        className="
          overflow-hidden
          rounded-[34px]
          bg-transparent/10
          backdrop-blur-xl
          border
          border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,.35)]
        "
      >

        {/* Image */}

        <div className="relative h-145 overflow-hidden">

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: .6 }}
            className="relative h-full"
          >

            <Image
              src={featuredProject.images[currentImage]}
              alt={featuredProject.title}
              fill
              className="object-cover"
            />

          </motion.div>

          {/* Overlay */}

          <div className="absolute inset-0 bg-linear-to-t from-[#071426] via-transparent to-transparent" />

          {/* Previous */}

          <button
            onClick={prevImage}
            className="
              absolute
              left-6
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-slate-900/70
              text-white
              backdrop-blur-xl
              hover:bg-cyan-500
              transition
            "
          >
            <FaChevronLeft className="mx-auto" />
          </button>

          {/* Next */}

          <button
            onClick={nextImage}
            className="
              absolute
              right-6
              top-1/2
              -translate-y-1/2
              w-12
              h-12
              rounded-full
              bg-slate-900/70
              text-white
              backdrop-blur-xl
              hover:bg-cyan-500
              transition
            "
          >
            <FaChevronRight className="mx-auto" />
          </button>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-3 py-6">

          {featuredProject.images.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-300 rounded-full ${
                currentImage === index
                  ? "w-10 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-slate-500"
              }`}
            />

          ))}

        </div>

        {/* Content */}

        <div className="p-12">

          <span className="
            inline-flex
            items-center
            rounded-full
            bg-cyan-500/20
            border
            border-cyan-400/30
            px-4
            py-2
            text-cyan-300
            font-semibold
            mb-6
          ">
            🚀 AI Powered System
          </span>

          <h3 className="text-4xl md:text-5xl font-bold text-white">
            {featuredProject.title}
          </h3>

          <p className="mt-8 text-slate-300 leading-9 text-lg">
            {featuredProject.description}
          </p>

          {/* Technologies */}

          <div className="flex flex-wrap gap-3 mt-10">

            {featuredProject.technologies.map((tech) => (

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
                  hover:bg-cyan-500
                  hover:text-white
                  transition
                "
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {featuredProject.features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-4"
              >

                <div className="
                  w-9
                  h-9
                  rounded-full
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  font-bold
                ">
                  ✓
                </div>

                <span className="text-slate-200">
                  {feature}
                </span>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-14">

            {featuredProject.github && (

              <a
                href={featuredProject.github}
                target="_blank"
                className="
                  flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-2xl
                  bg-transparent/40
                  border
                  border-white/10
                  hover:bg-transparent/20
                  transition
                  text-slate-200
                "
              >
                <FaGithub />

                Source Code

              </a>

            )}

            <a
              href={featuredProject.demo}
              target="_blank"
              className="
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                hover:from-blue-600
                hover:to-indigo-600
                shadow-xl
                transition
              "
            >
              <FaExternalLinkAlt />

              Live Demo

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}