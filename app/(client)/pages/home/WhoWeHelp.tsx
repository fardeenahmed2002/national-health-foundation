"use client";

import Image from "next/image";

const groups = [
  {
    title: "Low-income Families",
    desc: "Providing affordable healthcare and medical aid to those in financial need.",
    icon: "/impact/family.jpg",
    count: "12,000+",
  },
  {
    title: "Elderly & Disabled",
    desc: "Supporting seniors and differently-abled individuals with accessible care.",
    icon: "/impact/elderly.jpg",
    count: "5,500+",
  },
  {
    title: "Rural Communities",
    desc: "Bringing medical resources to underserved villages and remote areas.",
    icon: "/impact/rural.jpg",
    count: "8,000+",
  },
  {
    title: "Emergency Cases",
    desc: "Rapid assistance for critical and urgent medical conditions.",
    icon: "/impact/emergency.jpg",
    count: "3,200+",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="bg-[#111926] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Help</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          At CuraLink, we’re dedicated to providing timely, compassionate healthcare support to those who need it most.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {groups.map((group, i) => (
            <div
              key={i}
              className="bg-[#0E1724] rounded-2xl p-6 shadow-lg flex flex-col items-center"
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#BB71FF]">
                <Image
                  src={group.icon}
                  alt={group.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{group.title}</h3>
              <p className="text-gray-400 text-center mb-3 text-sm">{group.desc}</p>
              <span className="text-[#BB71FF] font-bold text-2xl">{group.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
