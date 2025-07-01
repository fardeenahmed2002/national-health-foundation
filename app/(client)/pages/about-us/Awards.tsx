"use client";

import { Trophy, Star, Medal, Award } from "lucide-react";

const awards = [
  {
    title: "Global Health Innovation Award 2023",
    desc: "Recognized for groundbreaking solutions in medical accessibility.",
    icon: <Trophy className="w-10 h-10 text-[black]" />,
    color: "from-[#BB71FF] to-[#7B3FF6]",
  },
  {
    title: "Community Impact Recognition",
    desc: "Honored for empowering underserved communities worldwide.",
    icon: <Star className="w-10 h-10 text-[black]" />,
    color: "from-[#49B3DB] to-[#1A94D9]",
  },
  {
    title: "Top NGO Partnership Award 2024",
    desc: "Celebrated for strong collaboration with nonprofit organizations.",
    icon: <Medal className="w-10 h-10 text-[black]" />,
    color: "from-green-400 to-green-600",
  },
  {
    title: "ISO 9001:2015 Certification",
    desc: "Certified for maintaining high standards in processes and services.",
    icon: <Award className="w-10 h-10 text-[black]" />,
    color: "from-[#BB71FF] to-[#7B3FF6]",
  },
];

const Awards = () => {
  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-6">Awards & Recognition</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          We are honored to have received these recognitions for our
          commitment to healthcare accessibility and innovation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {awards.map(({ title, desc, icon, color }, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${color} rounded-3xl p-8 shadow-lg transform transition hover:scale-105 cursor-default`}
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-100">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
