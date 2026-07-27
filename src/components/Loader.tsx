"use client";

import { motion } from "motion/react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-transparent">

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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="mt-4 text-gray-500 text-lg"
      >
        Frontend Developer
      </motion.p>

      {/* Loading Bar */}

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-10">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="h-full bg-blue-600"
        />

      </div>

      <motion.p
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="mt-5 text-sm text-gray-500"
      >
        Loading Portfolio...
      </motion.p>

    </div>
  );
}