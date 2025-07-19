import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import nblogo from '../assets/nblogo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-800/90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-widest hover:scale-105 transition-transform duration-300">
           NaamBadhao
        </a> */}
        <a href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
  <img
    src={nblogo}
    alt="NaamBadhao Logo"
    className="h-10 w-auto"
  />
  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-widest">
    NaamBadhao
  </span>
</a>


        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative group text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-800 dark:text-white hover:text-blue-500 transition"
            title="Toggle Theme"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="text-2xl md:hidden text-gray-800 dark:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-gray-900 text-lg font-medium shadow-lg">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
