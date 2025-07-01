"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TrackSection = () => (
  <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 border-b-4 border-[#BB71FF] inline-block pb-3">
          Track & Transparency
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
          Stay informed at every stage with our live status updates. You can track the progress of your request, see how funds and resources are allocated, and provide feedback on your experience.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto md:mx-0">
          <div className="bg-[#BB71FF] bg-opacity-20 rounded-lg p-6">
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-300 mt-1">Requests Verified</p>
          </div>
          <div className="bg-[#49B3DB] bg-opacity-20 rounded-lg p-6">
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-300 mt-1">Support Cases</p>
          </div>
          <div className="bg-[#BB71FF] bg-opacity-20 rounded-lg p-6">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-300 mt-1">Live Tracking</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/2 relative h-80 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/steps/track.jpg"
          alt="Track & Transparency"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default TrackSection;
