"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Accessible Healthcare",
    desc: "Connecting underserved communities with medical support through a seamless digital process.",
    image: "/features/healthcare.jpg",
  },
  {
    title: "Verified Support Network",
    desc: "Partnering with NGOs and doctors to ensure every patient receives trusted care.",
    image: "/features/network.jpg",
  },
  {
    title: "Secure & Transparent",
    desc: "Donations and requests are tracked transparently to build trust and safety.",
    image: "/features/secure.jpg",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#111926] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose CuraLink?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Empowering lives through verified medical aid, compassionate support,
          and complete transparency.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#0E1724] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-full h-44 md:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
