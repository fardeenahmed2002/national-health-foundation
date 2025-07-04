"use client";

const stories = [
  {
    name: "Amina Rahman",
    role: "Patient",
    photo: "/stories/amina.jpg",
    quote:
      "Thanks to CuraLink, I received life-saving treatment I never thought possible. They truly care about people like me.",
  },
  {
    name: "Dr. Kamal Hossain",
    role: "Volunteer Doctor",
    photo: "/stories/kamal.jpg",
    quote:
      "Volunteering with CuraLink allows me to give back to my community in a meaningful way. Their platform makes help accessible.",
  },
  {
    name: "Nazmul Islam",
    role: "Community Organizer",
    photo: "/stories/nazmul.jpg",
    quote:
      "Seeing the impact CuraLink has on underserved communities motivates me every day to keep pushing for change.",
  },
];

const ImpactStories = () => {
  return (
    <section className="bg-[#111926] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-6">Impact Stories</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Real stories from people whose lives have been transformed by CuraLink.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map(({ name, role, photo, quote }, i) => (
          <div
            key={i}
            className="bg-[#0E1724] rounded-2xl p-8 shadow-lg flex flex-col items-center"
          >
            <img
              src={photo}
              alt={`${name} photo`}
              className="w-24 h-24 rounded-full mb-6 object-cover"
              loading="lazy"
            />
            <p className="italic text-gray-300 mb-6 text-center">&quot;{quote}&quot;</p>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStories;
