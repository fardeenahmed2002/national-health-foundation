"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ApplySection = () => (
  <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div
        className="md:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/steps/apply.jpg"
          alt="Apply for Assistance"
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 border-b-4 border-[#BB71FF] inline-block pb-3">
          Apply for Assistance
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Our application process is designed to be straightforward and accessible to everyone, regardless of tech experience. You start by providing essential information so we can understand your situation and offer the right support quickly.
        </p>
        <p className="text-gray-400 mb-6">
          Here’s what you’ll need to complete the application:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
          <li>Basic personal details (name, contact, address)</li>
          <li>Description of your medical condition or emergency</li>
          <li>Any relevant medical reports or documents (optional but helpful)</li>
          <li>Preferred method of contact and support needed</li>
        </ul>
        <div className="bg-[#1E293B] p-5 rounded-lg border border-[#BB71FF]">
          <p className="text-[#BB71FF] font-semibold mb-2">Tip:</p>
          <p className="text-gray-400">
            Make sure your contact details are correct so our support team can reach you promptly.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApplySection;
