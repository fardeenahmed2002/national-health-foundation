"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Apply for Assistance",
    desc: "Fill out a simple form to request medical aid or emergency support.",
    image: "/steps/apply.jpg",
  },
  {
    title: "Verification Process",
    desc: "Our partnered NGOs and doctors verify your case for authenticity.",
    image: "/steps/verify.jpg",
  },
  {
    title: "Receive Support",
    desc: "Once approved, receive donations, treatments, or necessary aid quickly.",
    image: "/steps/support.jpg",
  },
  {
    title: "Track & Transparency",
    desc: "Track your request status with full transparency and live updates.",
    image: "/steps/track.jpg",
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF] ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How CuraLink Works
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Our process ensures help reaches those who need it—quickly, fairly,
          and transparently.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#111926] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
