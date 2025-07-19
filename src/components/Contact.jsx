import React, { useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_y2i6mpv",
        "template_djhx7ct",
        form.current,
        "NHkpCDG8lyefJdTzT"
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatusMessage(""), 5000); // Clear after 5 seconds
        },
        () => {
          setStatusMessage("❌ Failed to send message.");
          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect 🤝
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            required
            className="p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            required
            className="p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="💬 Your Message"
            required
            className="p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className={`font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md ${
              statusMessage === "✅ Message sent successfully!"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : statusMessage === "❌ Failed to send message."
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
            }`}
          >
            {statusMessage || "🚀 Send Message"}
          </button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-8 mt-12 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/naam.badhao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition duration-300"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/naam-badhao/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@NaamBadhao"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-600 transition duration-300"
            title="YouTube"
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
