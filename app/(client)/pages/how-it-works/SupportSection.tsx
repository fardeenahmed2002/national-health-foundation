"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SupportSection = () => (
  <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div
        className="md:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/steps/support.jpg"
          alt="Receive Support"
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 border-b-4 border-[#BB71FF] inline-block pb-3">
          Receive Support
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Once your request is approved, you will quickly receive donations,
          treatments, or emergency aid from our network. We coordinate with
          local organizations to make sure you get timely help.
        </p>
        <p className="text-gray-400">
          Our support system includes:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
          <li>Financial donations for medical expenses</li>
          <li>Access to free or subsidized treatments</li>
          <li>Delivery of medicines and supplies</li>
          <li>Continuous follow-up to ensure recovery</li>
        </ul>
        <div className="bg-[#1E293B] p-5 rounded-lg border border-[#BB71FF]">
          <p className="text-[#BB71FF] font-semibold mb-2">Note:</p>
          <p className="text-gray-400">
            Our team coordinates with local partners to ensure prompt and effective support delivery.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SupportSection;
