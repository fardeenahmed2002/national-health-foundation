"use client";

const HowItWorksHero = () => {
  return (
    <section className="bg-[#0E1724] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          How CuraLink Works
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Discover the simple steps that connect you with trusted health professionals and provide timely assistance. Our transparent process keeps you informed and empowered every step of the way.
        </p>
        <button className="bg-[#BB71FF] hover:bg-[#9a56e6] text-white font-semibold rounded-full px-10 py-3 transition duration-300">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default HowItWorksHero;
