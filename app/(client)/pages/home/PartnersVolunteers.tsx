"use client";

import Image from "next/image";

const partners = [
  {
    name: "MedCare Alliance",
    logo: "/partners/medcare.jpg",
  },
  {
    name: "Global Aid Network",
    logo: "/partners/global-aid.jpg",
  },
  {
    name: "Hope4Health Foundation",
    logo: "/partners/hope4health.jpg",
  },
  {
    name: "HealthBridge NGO",
    logo: "/partners/healthbridge.jpg",
  },
];

const PartnersVolunteers = () => {
  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Trusted Partners & Dedicated Volunteers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            CuraLink is proud to collaborate with NGOs, hospitals, and individuals
            who share our mission of health for all.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-16">
          {partners.map((p, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="relative w-36 h-16 grayscale hover:grayscale-0 transition duration-300">
                <Image src={p.logo} alt={p.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111926] rounded-2xl p-8 md:flex items-center justify-between shadow-lg">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Want to Volunteer?</h3>
            <p className="text-gray-400 max-w-md">
              Join our growing network of compassionate volunteers making real impact
              across the country—from medical camps to logistics support.
            </p>
          </div>
          <button className="bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersVolunteers;
