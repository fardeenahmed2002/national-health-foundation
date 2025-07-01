"use client";

import Image from "next/image";

const campaigns = [
  {
    title: "Emergency Surgery for 7-Year-Old",
    desc: "Help little Ayaan get the life-saving heart surgery he needs urgently.",
    image: "/campaigns/ayaan.jpg",
    goal: 500000,
    raised: 320000,
  },
  {
    title: "Mobile Health Camp in Rural Areas",
    desc: "Support our initiative to bring medical care to underserved villages.",
    image: "/campaigns/rural-camp.jpg",
    goal: 300000,
    raised: 180000,
  },
  {
    title: "Cancer Treatment for Fatima",
    desc: "Fatima, a mother of 2, needs immediate chemotherapy. Let’s stand by her.",
    image: "/campaigns/fatima.jpg",
    goal: 700000,
    raised: 540000,
  },
];

const DonationCampaigns = () => {
  return (
    <section className="bg-[#0E1724] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Active Donation Campaigns
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Your support can change lives. Choose a cause and extend a hand of
          compassion today.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {campaigns.map((c, i) => {
            const percentage = Math.round((c.raised / c.goal) * 100);

            return (
              <div
                key={i}
                className="bg-[#111926] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{c.desc}</p>

                  <div className="w-full h-3 bg-[#1F2A3B] rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-[#49B3DB]"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-300 mb-4">
                    <span>Raised: ৳{c.raised.toLocaleString()}</span>
                    <span>Goal: ৳{c.goal.toLocaleString()}</span>
                  </div>

                  <button className="w-full bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold py-2 rounded-full transition">
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonationCampaigns;
