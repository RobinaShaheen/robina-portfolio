"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education & Certificates", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50

        bg-linear-to-r
        from-slate-950
        via-slate-900
        to-blue-950

        backdrop-blur-xl
        border-b
        border-white/10

        shadow-[0_10px_40px_rgba(0,0,0,0.35)]

        text-white
      "
    >
      <div className="max-w-375 mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
        >
          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-linear-to-br
              from-cyan-400
              via-blue-600
              to-indigo-700

              flex
              items-center
              justify-center

              font-black
              text-xl
              text-white

              shadow-[0_8px_25px_rgba(59,130,246,0.45)]

              group-hover:rotate-6
              group-hover:scale-110

              transition-all
              duration-300
              "
          >
            RS
          </div>

          <div className="leading-tight hidden sm:block">
            <h1 className="text-2xl font-black tracking-tight">
              <span className="text-white">Robina</span>
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Shaheen
              </span>
            </h1>

            <p className="text-xs text-slate-400 tracking-[4px] uppercase">
              Frontend Developer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-slate-300
                hover:text-cyan-400
                transition-all
                duration-300
                font-medium
                text-xl
                "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="
            hidden
            lg:flex
            items-center
            justify-center

            px-6
            py-3

            rounded-xl

            font-semibold

            bg-linear-to-r
            from-cyan-500
            via-blue-600
            to-indigo-600

            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]

            transition-all
            duration-300

            text-white
            "
        >
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-3xl
            text-gray-700
            hover:text-blue-600
            transition
          "
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-transparent/95 backdrop-blur-xl shadow-xl border-t border-blue-100">

          <nav className="flex flex-col">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  border-b
                  border-gray-100
                  text-gray-700
                  hover:bg-transparent
                  hover:text-blue-600
                  transition
                "
              >
                {link.name}
              </Link>
            ))}

            <div className="p-6">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  w-full
                  text-center
                  bg-linear-to-r
                  from-blue-600
                  via-indigo-600
                  to-cyan-500
                  text-white
                  font-semibold
                  py-3
                  rounded-xl
                  shadow-lg
                "
              >
                Let's Connect
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}