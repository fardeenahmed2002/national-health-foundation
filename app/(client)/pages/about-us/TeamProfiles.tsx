"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Ayesha Rahman",
    role: "Chief Medical Officer",
    photo: "/team/ayesha.jpg",
    bio: "With over 15 years of experience, Dr. Rahman leads our medical team to deliver compassionate and effective care.",
  },
  {
    name: "Mr. Kamal Hossain",
    role: "Founder & CEO",
    photo: "/team/kamal.jpg",
    bio: "Visionary leader dedicated to making healthcare accessible to underserved communities through innovation and partnership.",
  },
  {
    name: "Ms. Farzana Akter",
    role: "Head of Community Outreach",
    photo: "/team/farzana.jpg",
    bio: "Passionate about connecting with communities, Farzana coordinates programs that bring medical aid to those who need it most.",
  },
  {
    name: "Mr. Imran Chowdhury",
    role: "Technical Director",
    photo: "/team/imran.jpg",
    bio: "Oversees the technology and platform development ensuring secure, reliable access to healthcare resources.",
  },
];

const TeamProfiles = () => {
  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Meet the passionate leaders driving CuraLink’s mission to transform healthcare access.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map(({ name, role, photo, bio }, idx) => (
          <div
            key={idx}
            className="bg-[#111926] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src={photo}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-[#BB71FF] mb-3">{role}</p>
            <p className="text-gray-400 text-sm">{bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;
