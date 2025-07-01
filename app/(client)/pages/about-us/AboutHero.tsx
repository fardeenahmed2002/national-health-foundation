"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative bg-[#111926] text-white py-32 px-6 border-b-2 border-[#BB71FF]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-hero-bg.jpg"
          alt="Healthcare teamwork background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#111926] opacity-80"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            About <span className="text-[#BB71FF]">CuraLink</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Founded with a vision to transform healthcare accessibility, CuraLink bridges the gap between medical aid and underserved communities.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-[#BB71FF]" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                Collaborates with trusted partners, healthcare professionals, and volunteers.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-[#49B3DB]" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                Provides transparent, reliable, and timely medical support.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-green-400" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                Empowers individuals and families to build healthier communities.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-12 bg-[#BB71FF] hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            Learn More About Us
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-96 md:h-[480px] rounded-3xl shadow-2xl overflow-hidden"
        >
          <Image
            src="/about-hero-bg.jpg"
            alt="Healthcare teamwork"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
