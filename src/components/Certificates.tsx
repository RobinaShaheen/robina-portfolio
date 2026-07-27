"use client";

import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

import {
  FaGraduationCap,
  FaBriefcase,
  FaChalkboardTeacher,
  FaUniversity,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

const education = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    organization: "National Textile University",
    period: "2021 – 2025",
    type: "education",
    description:
      "Completed a Bachelor's degree with a strong foundation in Software Engineering, Artificial Intelligence, Computer Vision, Databases, and Full Stack Web Development. Successfully developed an AI-powered Automated Number Plate Recognition System (ANPRS) as my Final Year Project.",
    pdf: "",
  },

  {
    id: 2,
    title: "Laboratory Teaching Assistant",
    organization: "National Textile University",
    period: "2024",
    type: "teaching",
    description:
      "Assisted instructors during Data Structures & Algorithms laboratory sessions, guided students in programming exercises, and helped them strengthen their problem-solving and coding skills.",
    pdf: "/certificates/ta-certificate.pdf",
  },

  {
    id: 3,
    title: "Frontend Development Internship",
    organization: "Fista Solutions",
    period: "2025",
    type: "internship",
    description:
      "Worked on modern React.js and Next.js applications, developed responsive UI components, integrated REST APIs, collaborated with professional developers, and contributed to enterprise web projects.",
    pdf: "/certificates/fista-internship-certificate.pdf",
  },

  {
    id: 4,
    title: "Master of Science in Computer Science",
    organization: "National Textile University",
    period: "2025 – Present",
    type: "education",
    description:
      "Currently pursuing an MS in Computer Science with research interests in Artificial Intelligence, Smart Campus Technologies, Machine Learning, Computer Vision, and Full Stack Development.",
    pdf: "",
  },
];

export default function Certificates() {
  return (
    <SectionWrapper>
      <section
        id="education"
        className="
          relative
          overflow-hidden
          py-28
          bg-linear-to-br
          from-[#071326]
          via-[#10254D]
          to-[#123C69]
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-40 left-16 w-105 h-105 rounded-full bg-cyan-500/20 blur-[150px]" />

          <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-600/20 blur-[180px]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span
              className="
                px-6
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-400/30
                text-cyan-300
                font-medium
              "
            >
              🎓 Academic Journey
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-5xl md:text-6xl font-extrabold text-white"
          >
            Education & Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              max-w-3xl
              mx-auto
              text-center
              text-slate-300
              text-lg
              leading-8
              mt-6
              mb-24
            "
          >
            My academic journey, teaching experience, professional internship,
            and continuous learning that have shaped my career as a Frontend
            Developer and AI enthusiast.
          </motion.p>

          <div className="relative">

            {/* Timeline */}

            <div
              className="
                absolute
                left-6
                md:left-1/2
                top-0
                h-full
                w-1
                -translate-x-1/2
                rounded-full
                bg-linear-to-b
                from-cyan-400
                via-blue-500
                to-indigo-600
              "
            />

            {education.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -120 : 120,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex items-center mb-16 ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline Icon */}

                  <div
                    className={`
                      absolute
                      left-6
                      md:left-1/2
                      -translate-x-1/2
                      w-16
                      h-16
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ring-4
                      ring-white/10
                      shadow-2xl
                      z-10

                      ${
                        item.type === "education"
                          ? "bg-linear-to-br from-cyan-500 to-blue-600"
                          : item.type === "teaching"
                          ? "bg-linear-to-br from-purple-500 to-indigo-600"
                          : "bg-linear-to-br from-emerald-500 to-teal-600"
                      }
                    `}
                  >
                    {item.type === "education" && (
                      <FaGraduationCap className="text-white text-xl" />
                    )}

                    {item.type === "teaching" && (
                      <FaChalkboardTeacher className="text-white text-xl" />
                    )}

                    {item.type === "internship" && (
                      <FaBriefcase className="text-white text-xl" />
                    )}
                  </div>
                                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.02,
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
                      hover:border-cyan-400/40
                    "
                  >
                    {/* Title */}

                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* Organization */}

                    <div className="flex items-center gap-3 mt-6 text-slate-200">
                      <FaUniversity className="text-cyan-400" />

                      <span>{item.organization}</span>
                    </div>

                    {/* Period */}

                    <div className="flex items-center gap-3 mt-3 text-cyan-300">
                      <FaCalendarAlt />

                      <span>{item.period}</span>
                    </div>

                    {/* Description */}

                    <p className="mt-6 text-slate-300 leading-8">
                      {item.description}
                    </p>

                    {/* Buttons */}

                    {item.pdf && (
                      <div className="flex flex-wrap gap-4 mt-8">

                        <a
                          href={item.pdf}
                          target="_blank"
                          className="
                            flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-xl
                            bg-linear-to-r
                            from-cyan-500
                            to-blue-600
                            hover:from-blue-600
                            hover:to-indigo-600
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                          "
                        >
                          <FaExternalLinkAlt />

                          View Certificate
                        </a>

                        <a
                          href={item.pdf}
                          download
                          className="
                            flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-xl
                            border
                            border-white/20
                            bg-transparent/5
                            text-white
                            hover:bg-transparent/10
                            transition-all
                            duration-300
                          "
                        >
                          <FaDownload />

                          Download
                        </a>

                      </div>
                    )}
                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

    </SectionWrapper>
  );
}