import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#1d2b64] via-[#f8cdda] to-[#1d2b64] dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500"
    >
      {/* Floating blobs background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-48 right-10 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl bg-white/30 dark:bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6 drop-shadow-lg">
          Grow Your{" "}
          <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy decoration-2">
            Digital Identity
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          We boost your brand visibility across Instagram, YouTube, startups,
          and everything online. Time to get famous 😎
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full shadow-lg hover:shadow-2xl transform transition hover:scale-105 duration-300 hover:from-blue-700 hover:to-purple-700"
        >
          🚀 Start Promoting
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
