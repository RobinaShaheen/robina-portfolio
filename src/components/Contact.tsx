"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import SectionWrapper from "./SectionWrapper";
import { motion } from "motion/react";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "robina1961739@gmail.com",
    link: "mailto:robina1961739@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "Robina Shaheen",
    link: "https://www.linkedin.com/in/robina-shaheen-3ba1b1321/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/RobinaShaheen",
    link: "https://github.com/RobinaShaheen",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+92 XXX XXXXXXX",
    link: "#",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Pakistan",
    link: "#",
  },
];

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {

      await emailjs.sendForm(
        "service_46k3slr",
        "template_dbcmk2c",
        form.current,
        "40pH44mmX4oGIfWQd"
      );

      setSuccess("✅ Message sent successfully. I'll get back to you soon.");

      form.current.reset();

      setTimeout(() => {
        setSuccess("");
      }, 5000);

    } catch {

      setError("❌ Failed to send message. Please try again.");

      setTimeout(() => {
        setError("");
      }, 5000);

    }

    setLoading(false);

  };

  return (
    <SectionWrapper>

      <section
        id="contact"
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

          <div className="absolute -top-40 left-10 w-105 h-105 rounded-full bg-cyan-500/20 blur-[160px]" />

          <div className="absolute bottom-0 right-0 w-130 h-130 rounded-full bg-blue-600/20 blur-[180px]" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="flex justify-center mb-6"
          >

            <span
              className="
                px-6
                py-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/10
                text-cyan-300
                font-medium
              "
            >
              📩 Let's Connect
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-center text-5xl md:text-6xl font-extrabold text-white"
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="
              text-center
              text-slate-300
              text-lg
              leading-8
              max-w-3xl
              mx-auto
              mt-6
              mb-20
            "
          >
            Looking for a Frontend Developer or want to discuss an exciting
            project? I'd be happy to connect and explore new opportunities.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Side */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
            >

              <h3 className="text-4xl font-bold text-white mb-8">
                Get In Touch
              </h3>

              <p className="text-slate-300 leading-8 mb-10">
                I'm currently open to Frontend Developer opportunities,
                freelance projects, internships, and collaborations.
                Feel free to reach out using any of the contact methods below.
              </p>

              <div className="space-y-5">

                {contacts.map((item, index) => (

                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: 10,
                      scale: 1.02,
                    }}
                    className="
                      flex
                      items-center
                      gap-5
                      rounded-2xl
                      bg-transparent/10
                      backdrop-blur-xl
                      border
                      border-white/10
                      p-5
                      shadow-xl
                      hover:border-cyan-400/40
                      transition-all
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-linear-to-br
                        from-cyan-500
                        to-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        text-2xl
                        shadow-lg
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h4 className="text-white font-semibold text-lg">
                        {item.title}
                      </h4>

                      <p className="text-slate-300">
                        {item.value}
                      </p>

                    </div>

                  </motion.a>

                ))}

              </div>

              <a
                href="/resume/Robina-Shaheen-Resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-10
                  px-8
                  py-4
                  rounded-xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  hover:from-blue-600
                  hover:to-indigo-600
                  text-white
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                "
              >
                <FaDownload />

                Download Resume

              </a>

            </motion.div>

            {/* Right Side */}

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="
                rounded-3xl
                bg-transparent/10
                backdrop-blur-xl
                border
                border-white/10
                shadow-2xl
                p-8
                lg:p-10
              "
            >

              <h3 className="text-3xl font-bold text-white mb-8">
                Send a Message
              </h3>

              <div className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-transparent/5
                    text-white
                    placeholder:text-slate-400
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    transition
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-transparent/5
                    text-white
                    placeholder:text-slate-400
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    transition
                  "
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-transparent/5
                    text-white
                    placeholder:text-slate-400
                    px-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    transition
                  "
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-transparent/5
                    text-white
                    placeholder:text-slate-400
                    px-5
                    py-4
                    outline-none
                    resize-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    transition
                  "
                />

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-xl
                      border
                      border-emerald-400/30
                      bg-emerald-500/10
                      p-4
                      text-emerald-300
                    "
                  >
                    {success}
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-xl
                      border
                      border-red-400/30
                      bg-red-500/10
                      p-4
                      text-red-300
                    "
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-linear-to-r
                    from-cyan-500
                    via-blue-600
                    to-indigo-600
                    hover:from-blue-600
                    hover:to-indigo-700
                    text-white
                    text-lg
                    font-semibold
                    shadow-xl
                    transition-all
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </motion.button>

              </div>

            </motion.form>

          </div>

        </div>

      </section>

    </SectionWrapper>
  );
}