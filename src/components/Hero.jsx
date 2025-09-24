import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center px-6"
    >
      {/* Animated intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-blue-500">Sameer Khan</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A Passionate <span className="font-semibold">Web Developer</span>
      </motion.h2>

      {/* Call to action buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
