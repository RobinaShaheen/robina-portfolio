"use client";

import { motion } from "motion/react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {

  const year = new Date().getFullYear();

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (

    <footer
      className="
      relative
      overflow-hidden
      bg-linear-to-br
      from-[#071326]
      via-[#10254D]
      to-[#123C69]
      text-white
      pt-24
      pb-8
    "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 left-0 w-105 h-105 rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-600/20 blur-[180px]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Brand */}

          <div>

            <h2
              className="
              text-4xl
              font-extrabold
              bg-linear-to-r
              from-cyan-300
              via-blue-300
              to-indigo-300
              bg-clip-text
              text-transparent
            "
            >
              Robina Shaheen
            </h2>

            <p className="mt-6 leading-8 text-slate-300">

              Frontend Developer specializing in React.js,
              Next.js, TypeScript and Tailwind CSS.

              Passionate about creating modern,
              scalable and responsive web applications
              with beautiful user experiences.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {links.map((link) => (

                <motion.a

                  key={link}

                  whileHover={{
                    x: 8,
                  }}

                  href={`#${link.toLowerCase()}`}

                  className="
                  text-slate-300
                  hover:text-cyan-300
                  transition-all
                "
                >

                  {link}

                </motion.a>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:robina1961739@gmail.com"
                className="
                flex
                items-center
                gap-4
                text-slate-300
                hover:text-cyan-300
                transition
              "
              >

                <FaEnvelope className="text-cyan-400" />

                robina1961739@gmail.com

              </a>

              <div className="flex items-center gap-4 text-slate-300">

                <FaMapMarkerAlt className="text-cyan-400" />

                Pakistan

              </div>

              <div className="flex gap-5 pt-5">
                            <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.12,
                  }}
                  href="https://github.com/RobinaShaheen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-2xl
                    hover:bg-cyan-500
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  whileHover={{
                    y: -5,
                    scale: 1.12,
                  }}
                  href="https://www.linkedin.com/in/robina-shaheen-3ba1b1321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-transparent/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-2xl
                    hover:bg-cyan-500
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin />
                </motion.a>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-center">

            © {year} <span className="font-semibold text-cyan-300">
              Robina Shaheen
            </span>

            . All Rights Reserved.

          </p>

          <p className="flex items-center gap-2 text-slate-400">

            Made with

            <FaHeart className="text-red-500 animate-pulse" />

            using Next.js & Tailwind CSS

          </p>

          <motion.button

            whileHover={{
              y: -5,
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }

            className="
              w-14
              h-14
              rounded-full
              bg-linear-to-r
              from-cyan-500
              to-blue-600
              shadow-xl
              flex
              items-center
              justify-center
              text-xl
              hover:shadow-cyan-500/40
              transition-all
            "
          >
            <FaArrowUp />
          </motion.button>

        </div>

      </div>

    </footer>

  );

}