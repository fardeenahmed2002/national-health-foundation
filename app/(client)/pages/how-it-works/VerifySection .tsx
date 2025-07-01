"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const VerifySection = () => (
  <section className="bg-[#0E1724] text-white py-24 px-6 border-b-2 border-[#BB71FF] flex items-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      {/* Purple sidebar accent */}
      <div className="hidden md:block w-2 bg-[#BB71FF] rounded-l-lg h-80"></div>

      {/* Text content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-semibold mb-6">Verification Process</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Our trusted partners — including NGOs and medical professionals — carefully verify each request for authenticity and urgency. This step is crucial to ensure resources reach the people who truly need them.
        </p>
        <p className="text-gray-400">
          Verification involves multiple checkpoints:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
          <li>Confirming identity and eligibility of applicants</li>
          <li>Reviewing submitted medical documents and history</li>
          <li>Consulting with partner doctors and NGOs for validation</li>
          <li>Prioritizing urgent cases based on need</li>
        </ul>
        <div className="bg-[#1E293B] p-5 rounded-lg border border-[#BB71FF]">
          <p className="text-[#BB71FF] font-semibold mb-2">Important:</p>
          <p className="text-gray-400">
            Verification may take some time but is essential to maintain fairness and transparency.
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="md:w-1/2 relative h-80 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/steps/verify.jpg"
          alt="Verification Process"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default VerifySection;
