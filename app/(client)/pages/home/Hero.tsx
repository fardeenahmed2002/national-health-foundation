"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#111926] text-white px-6 py-12 md:py-6 border-b-1 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div>
          <span className="inline-block bg-[#49B3DB] text-xs text-white font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">
            National Health Foundation
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bridging Care & Compassion, <br /> One Life at a Time.
          </h1>

          <p className="text-lg text-gray-300 mt-4 max-w-xl">
            CuraLink is committed to connecting underserved communities with
            life-saving medical aid. Join us to make healthcare accessible and
            equitable for everyone.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
              Get Covered
            </button>
            <button className="border-2 border-[#49B3DB] text-[#49B3DB] hover:bg-[#49B3DB] hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/hero.jpg"
            alt="Healthcare Hero"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
