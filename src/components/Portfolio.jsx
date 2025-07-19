import React from "react";
import { motion } from "framer-motion";

import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";

const portfolioItems = [
  {
    title: "YouTube Growth Campaign",
    description: "Grew 0 to 10k subscribers in 90 days with targeted shorts & SEO.",
    image: a,
  },
  {
    title: "Instagram Boost",
    description: "Helped influencer gain 100k+ organic reach through reels + ads.",
    image: d,
  },
  {
    title: "Startup Launch",
    description: "Handled pre-launch buzz & full ad strategy for a SaaS startup.",
    image: c,
  },
  {
    title: "Product Viral Strategy",
    description: "Made a small beauty brand go viral with micro-influencer collab.",
    image: b,
  },
  {
    title: "LinkedIn Brand Positioning",
    description: "Built personal brand for tech CEO on LinkedIn and Medium.",
    image: e,
  },
  {
    title: "Content Repurposing Mastery",
    description: "Turned long-form podcasts into viral shorts across platforms.",
    image: f,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-950 transition duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>

        <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Our vision is simple: <span className="italic font-medium">“Naam toh suna hoga — ab badhao.”</span><br />
          Proof over promises — here’s what we’ve already done for our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
