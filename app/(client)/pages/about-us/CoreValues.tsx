"use client";

const CoreValues = () => {
  const values = [
    {
      title: "Compassion",
      desc: "We approach every individual and case with empathy and kindness.",
      color: "bg-[#BB71FF]",
    },
    {
      title: "Integrity",
      desc: "Transparency and honesty guide all our actions and partnerships.",
      color: "bg-[#49B3DB]",
    },
    {
      title: "Innovation",
      desc: "Leveraging technology to solve healthcare challenges creatively.",
      color: "bg-green-400",
    },
    {
      title: "Collaboration",
      desc: "Working hand-in-hand with communities, NGOs, and medical experts.",
      color: "bg-[#BB71FF]",
    },
  ];

  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {values.map(({ title, desc, color }, idx) => (
            <div
              key={idx}
              className="bg-[#111926] rounded-3xl p-8 shadow-md hover:shadow-lg transition cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${color} text-white font-bold text-xl select-none`}
              >
                {title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
