import React from "react";
import { motion } from "framer-motion";
import aditya from '../assets/aditya.png';
import hritik from '../assets/hritik.png';
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 transition duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About <span className="text-black dark:text-white">NaamBadhao</span>
        </motion.h2>

        {/* Mission Statement */}
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          NaamBadhao isn’t just a name — it’s our{" "}
          <span className="italic font-semibold">mission</span>. We exist to
          amplify your voice, expand your brand, and make your digital presence
          impossible to ignore. Whether you’re a creator, a business, or a
          startup — we’ll make sure your name reaches{" "}
          <span className="italic">everyone’s explore page</span>.
        </motion.p>

        {/* Vision Statement */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Our vision is simple:{" "}
            <span className="italic text-blue-700 dark:text-blue-400">
              "Jahaan Naam, Wahin Kaam."
            </span>
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
            We help businesses, creators, and brands become unforgettable.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-16 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Aditya Kumar Mishra */}
          <div className="flex flex-col items-center text-center">
            <img
                 src={aditya}
              alt="Aditya Kumar Mishra"
              className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-500"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Aditya Kumar Mishra
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              CEO & Co-Founder
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              “We don’t just run ads — we build brands. Our team’s obsessed
              with creativity, data, and results. We help you go from invisible
              to irresistible.”
            </p>
          </div>

          {/* Hritik Raj */}
          <div className="flex flex-col items-center text-center">
            <img
              src={hritik}
              alt="Hritik Raj"
              className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-pink-500"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Hritik Raj
            </h3>
            <p className="text-pink-600 dark:text-pink-400 font-medium">
              CEO & Co-Founder
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              “We turn scrolls into sales. With our creative strategy and viral
              storytelling, we help your brand dominate the algorithm.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
