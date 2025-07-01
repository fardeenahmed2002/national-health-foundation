"use client";

const OurStory = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#111926] via-[#1a2233] to-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-5xl mx-auto bg-[#1e273a] rounded-3xl p-12 shadow-lg">
        <h2 className="text-5xl font-extrabold mb-6 text-center text-[#BB71FF] tracking-wide">
          Our Story
        </h2>

        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-[#BB71FF] to-[#49B3DB] rounded-full"></div>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 tracking-wide">
          CuraLink began as a passionate initiative by dedicated healthcare
          professionals and technologists aiming to bridge critical gaps in
          medical accessibility. Through perseverance and collaboration, we have
          evolved into a dynamic network of caregivers, volunteers, and trusted
          partners committed to providing transparent, reliable, and rapid medical aid.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed tracking-wide">
          Our journey is inspired by the countless lives we have touched, the
          communities we have empowered, and the unwavering mission to transform
          quality healthcare into a fundamental right rather than a privilege.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
