"use client";

import { motion } from "framer-motion";

const HealthHeroSection = () => {
  return (
    <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Empower Yourself with Trusted <span className="text-[#BB71FF]">Health Knowledge</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Welcome to your hub of medically verified tips, guides, and articles —
          created to help you and your community live healthier, more informed lives.
        </p>

        {/* Optional Search Bar */}
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search health topics..."
            className="w-full bg-[#0E1724] text-white placeholder-gray-500 border border-[#BB71FF] rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HealthHeroSection;
