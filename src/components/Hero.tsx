"use client";

import { motion } from "motion/react";
import Image from "next/image";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-[94vh]
      flex
      items-center
      overflow-hidden
      bg-linear-to-br
      from-slate-900
      via-blue-900
      to-cyan-700
      text-white
      pt-16
    "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-20 w-105 h-105 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-[320px] h-80 rounded-full bg-indigo-500/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-10
        items-center
      "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}

          <div className="flex justify-center lg:justify-center mb-6 mt-10">

            <div
              className="
              inline-flex
              items-center
              px-6
              py-3
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/40
              backdrop-blur-md
              text-cyan-200
              font-medium
            "
            >
              👋 Available for Frontend Developer Roles
            </div>

          </div>

          {/* Heading */}

          <h1
            className="
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-semibold
            leading-tight
          "
          >
            Hi, I'm

            <br />

            <span
              className="
              bg-linear-to-r
              from-cyan-300
              via-blue-300
              to-indigo-200
              bg-clip-text
              text-transparent
            "
            >
              Robina Shaheen
            </span>
          </h1>

          {/* Title */}

          <h2
            className="
            mt-5
            text-2xl
            lg:text-3xl
            font-bold
            text-cyan-100
          "
          >
            Frontend Developer • React • Next.js
          </h2>

          {/* Description */}

          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-slate-200
          "
          >
            Passionate Frontend Developer with experience building
            responsive, modern and user-friendly web applications using
            React.js, Next.js, TypeScript and Tailwind CSS.

            I enjoy transforming ideas into fast,
            beautiful and accessible digital experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#projects"
              className="
              px-8
              py-4
              rounded-xl
              bg-linear-to-r
              from-blue-600
              to-cyan-500
              hover:scale-105
              transition
              duration-300
              shadow-xl
            "
            >
              View Projects
            </a>

            <a
              href="/resume/Robina_Shaheen_Frontend_Engineer_Resume.pdf"
              download
              className="
              px-8
              py-4
              rounded-xl
              border
              border-white/30
              bg-transparent/10
              hover:bg-transparent/20
              transition
              duration-300
            "
            >
              Download Resume
            </a>

          </div>

          {/* Technologies */}

          <div className="flex flex-wrap gap-4 mt-10">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="
                px-4
                py-2
                rounded-full
                bg-transparent/10
                border
                border-white/20
                backdrop-blur-md
                text-sm
              "
              >
                {tech}
              </span>

            ))}

          </div>

        </motion.div>
                {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative">

            {/* Outer Glow */}

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-25 animate-pulse" />

            {/* Animated Ring */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-85
                h-85
                lg:w-95
                lg:h-95
                rounded-full
                p-1.5
                bg-linear-to-br
                from-cyan-400
                via-blue-500
                to-indigo-600
                shadow-[0_0_60px_rgba(59,130,246,0.35)]
              "
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">

                <Image
                  src="/profile.png"
                  alt="Robina Shaheen"
                  width={380}
                  height={380}
                  priority
                  className="w-full h-full object-cover"
                />

              </div>
            </motion.div>

            {/* Floating Decoration */}

            <div className="absolute -top-6 -right-6 w-8 h-8 rounded-full bg-cyan-300 opacity-80 animate-bounce" />

            <div className="absolute -bottom-6 -left-6 w-5 h-5 rounded-full bg-blue-400 opacity-80 animate-ping" />

          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-24
          bg-linear-to-t
          from-slate-900/40
          to-transparent
        "
      />

    </section>
  );
}