"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "CuraLink provided me timely medical support when I had nowhere else to turn. Their team’s compassion and professionalism changed my life.",
    name: "Rahim Uddin",
    role: "Patient",
  },
  {
    quote:
      "Partnering with CuraLink has empowered our NGO to reach more people in need with verified and transparent aid distribution.",
    name: "Sadia Islam",
    role: "NGO Coordinator",
  },
  {
    quote:
      "Thanks to CuraLink, our community now has easier access to essential healthcare services — a true game-changer.",
    name: "Dr. Kamal Ahmed",
    role: "Volunteer Doctor",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#111926] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-400">
          Hear from those whose lives have been touched by CuraLink.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <blockquote className="bg-[#0E1724] rounded-2xl p-10 shadow-lg">
          <p className="text-lg italic mb-6">"{testimonials[current].quote}"</p>
          <footer className="text-right">
            <cite className="font-semibold">{testimonials[current].name}</cite>,{" "}
            <span className="text-gray-400">{testimonials[current].role}</span>
          </footer>
        </blockquote>

        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="bg-[#BB71FF] hover:bg-purple-700 p-3 rounded-full shadow"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="bg-[#BB71FF] hover:bg-purple-700 p-3 rounded-full shadow"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
