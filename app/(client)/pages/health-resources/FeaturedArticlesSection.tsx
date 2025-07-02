"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featured = [
  {
    title: "Managing Stress During Emergencies",
    summary: "Discover practical mental health strategies for dealing with crisis situations and emotional overload.",
    image: "/articles/stress.jpg",
    tag: "Editor's Pick",
    link: "#",
  },
  {
    title: "Essential First Aid Every Home Should Know",
    summary: "Simple yet life-saving first aid tips everyone should learn for home emergencies.",
    image: "/articles/firstaid.jpg",
    tag: "Recommended",
    link: "#",
  },
  {
    title: "Balanced Meals on a Low Budget",
    summary: "Learn how to maintain proper nutrition and health with affordable food planning.",
    image: "/articles/budget.jpg",
    tag: "Editor's Pick",
    link: "#",
  },
]

const FeaturedArticlesSection = () => {
  return (
    <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 inline-block border-[#BB71FF] pb-2">
          Featured Health Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0E1724] rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#BB71FF] text-sm px-3 py-1 rounded-full font-medium text-[#111926]">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.summary}</p>
                <a href={item.link} className="text-[#BB71FF] text-sm hover:underline">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticlesSection;
