"use client";

import React from "react";

const notices = [
  {
    id: 1,
    title: "Free Medical Camp on July 15",
    description: "We are organizing a free medical camp for general checkup and consultations.",
    date: "2025-07-05",
  },
  {
    id: 2,
    title: "Application Review Delay",
    description: "Due to high volume of aid applications, review process may take up to 7 working days.",
    date: "2025-07-03",
  },
  {
    id: 3,
    title: "Blood Donation Drive",
    description: "Join our blood donation drive on July 20 at City Health Center.",
    date: "2025-06-30",
  },
];

const NoticePage = () => {
  return (
    <section className="min-h-screen bg-[#0E1724] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#BB71FF] mb-8">📢 Notice Board</h1>
        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-[#1c2333] border border-[#2a324a] rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-[#49B3DB]">{notice.title}</h2>
                <span className="text-sm text-gray-400">{notice.date}</span>
              </div>
              <p className="text-gray-300 text-sm">{notice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticePage;
