"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="
          relative
          overflow-hidden
          py-28
          bg-linear-to-br
          from-slate-900
          via-blue-900
          to-cyan-700
          transparent
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-32 left-0 w-105 h-105 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="
              text-5xl
              font-extrabold
              text-center
              mb-5
              bg-linear-to-r
              from-cyan-300
              via-blue-300
              to-indigo-200
              bg-clip-text
              text-transparent
            "
          >
            About Me
          </motion.h2>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
            className="
              text-center
              text-slate-300
              text-lg
              mb-20
            "
          >
            Get to know more about my journey, experience and passion.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03 }}
              className="
                rounded-3xl
                bg-transparent/10
                backdrop-blur-xl
                border
                border-white/10
                shadow-2xl
                p-10
                flex
                flex-col
                items-center
              "
            >

              <div className="relative">

                {/* Glow */}

                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30" />

                {/* Profile */}

                <div className="relative w-[320px] h-80 rounded-full p-1.25 bg-linear-to-br from-cyan-400 via-blue-500 to-indigo-600">

                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">

                    <Image
                      src="/profile.png"
                      alt="Robina Shaheen"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

              </div>
              <div className="grid grid-cols-3 gap-5 mt-12">

                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="
                    rounded-2xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-xl
                    p-6
                    text-center
                  "
                >
                  <h4 className="text-4xl font-bold text-cyan-300">
                    10+
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Projects
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="
                    rounded-2xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-xl
                    p-6
                    text-center
                  "
                >
                  <h4 className="text-4xl font-bold text-cyan-300">
                    1+
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Internship
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="
                    rounded-2xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-xl
                    p-6
                    text-center
                  "
                >
                  <h4 className="text-4xl font-bold text-cyan-300">
                    12+
                  </h4>

                  <p className="mt-2 text-slate-300">
                    Technologies
                  </p>

                </motion.div>

              </div>

            </motion.div>
                      {/* Right Side */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
                className="text-4xl font-bold text-cyan-200 mb-8"
              >
                Frontend Developer | React | Next.js
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
                className="text-slate-200 leading-9 text-lg"
              >
                I'm a passionate <span className="font-semibold text-cyan-300">Frontend Developer</span>
                dedicated to creating modern, responsive and user-friendly web
                applications.

                <br />
                <br />

                I specialize in <span className="text-cyan-300">React.js</span>,
                <span className="text-cyan-300"> Next.js</span>,
                <span className="text-cyan-300"> TypeScript</span> and
                <span className="text-cyan-300"> Tailwind CSS</span>,
                building fast, scalable and accessible user interfaces.

                <br />
                <br />

                During my internship at
                <span className="font-semibold text-cyan-300">
                  {" "}Fista Solutions
                </span>,
                I worked on real-world frontend applications, API integrations
                and responsive UI development while collaborating with a
                professional development team.

                <br />
                <br />

                My Final Year Project focused on an
                <span className="font-semibold text-cyan-300">
                  {" "}AI-powered Automated Number Plate Recognition System (ANPRS)
                </span>,
                combining Artificial Intelligence with Full Stack Development.
              </motion.p>

            </motion.div>

          </div>

          {/* Skills */}
          <div className="mt-12">

                <h4 className="text-xl font-semibold text-cyan-200 mb-5">
                  Core Technologies
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Git",
                    "GitHub",
                    "REST API",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-5
                        py-2
                        rounded-full
                        bg-cyan-500/20
                        border
                        border-cyan-400/30
                        backdrop-blur-md
                        text-cyan-100
                        hover:bg-cyan-400/30
                        transition
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

        </div>

      </section>
    </SectionWrapper>
  );
}