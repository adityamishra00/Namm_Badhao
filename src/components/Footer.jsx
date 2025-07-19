import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-black to-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        
        {/* Left - Brand Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-extrabold text-white tracking-wide">NaamBadhao™</h2>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} NaamBadhao. All rights reserved.
          </p>
        </motion.div>

        {/* Center - Navigation Links */}
        <motion.ul
          className="flex flex-wrap justify-center md:justify-center gap-6 text-sm font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["home", "services", "portfolio", "about", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition duration-150 ease-in-out hover:underline underline-offset-4"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Right - Social Icons */}
        <motion.div
          className="flex gap-6 text-xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.instagram.com/naam.badhao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition duration-150 ease-in-out"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/naam-badhao/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition duration-150 ease-in-out"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@NaamBadhao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition duration-150 ease-in-out"
            title="YouTube"
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
