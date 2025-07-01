"use client";

const CallToAction = () => {
  return (
    <section className="bg-[#111926] py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="bg-gradient-to-r from-[#BB71FF] to-[#49B3DB] text-[#111926] rounded-3xl max-w-7xl mx-auto py-16 px-12 shadow-lg text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Join CuraLink Today & Make a Real Difference
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Become a volunteer, donor, or partner to help us bring life-saving healthcare to those who need it most.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-[#111926] hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition">
            Get Involved
          </button>
          <button className="border-2 border-[#111926] hover:bg-[#111926] hover:text-white text-[#111926] font-semibold px-8 py-4 rounded-full shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
