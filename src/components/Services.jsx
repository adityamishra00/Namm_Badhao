import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaRocket,
  FaUserTie,
  FaAd,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    title: "YouTube Channel Growth",
    short: "Boost subscribers, views & engagement.",
    long: "We grow your channel organically and through shorts SEO, title strategy, audience targeting, and competitive positioning. Real growth with real methods.",
    icon: <FaYoutube size={36} className="text-red-500 dark:text-red-400 mb-4" />,
  },
  {
    title: "Instagram Promotions",
    short: "Get followers, reach & visibility.",
    long: "We help you build real reach via story ads, reels strategy, influencer collabs, and hashtags. Fully organic and smart paid boosting for the right audience.",
    icon: <FaInstagram size={36} className="text-pink-500 dark:text-pink-400 mb-4" />,
  },
  {
    title: "Brand Identity Setup",
    short: "Logos, taglines, full digital branding.",
    long: "We craft your brand’s soul — logo, color scheme, fonts, slogan, and voice. Everything aligned to make your presence unforgettable.",
    icon: <FaPalette size={36} className="text-yellow-500 dark:text-yellow-300 mb-4" />,
  },
  {
    title: "Startup Marketing",
    short: "Campaigns that convert.",
    long: "We position your startup in the market with product launch strategies, sales funnels, email campaigns, and growth hacking tools.",
    icon: <FaRocket size={36} className="text-purple-500 dark:text-purple-400 mb-4" />,
  },
  {
    title: "Personal Branding",
    short: "Build a trusted online identity.",
    long: "We build you as a personality — perfect for creators, entrepreneurs, or freelancers. Establish authority, gain followers, and earn clients.",
    icon: <FaUserTie size={36} className="text-green-600 dark:text-green-400 mb-4" />,
  },
  {
    title: "Custom Ad Strategy",
    short: "Tailored promotions for your needs.",
    long: "We don’t sell templates. We study your product and market to design a custom ad strategy across platforms for best results.",
    icon: <FaAd size={36} className="text-blue-500 dark:text-blue-400 mb-4" />,
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-[#0b0c10] dark:to-[#0e0f13] transition-all duration-500 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(service)}
              className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#2b2b2b] rounded-2xl shadow-lg dark:shadow-[0_0_16px_#0ff] p-6 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-150 ease-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.short}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <>
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />

              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-[#121212] text-gray-800 dark:text-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-2xl"
                  >
                    &times;
                  </button>
                  <div className="mb-4">{selected.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    {selected.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {selected.long}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
