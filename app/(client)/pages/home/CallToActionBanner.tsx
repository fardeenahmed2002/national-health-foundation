"use client";

const CallToActionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#BB71FF] to-[#49B3DB] text-white py-16 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Make a Difference Today
          </h2>
          <p className="text-white/90 text-lg max-w-2xl">
            Your support brings healthcare to those who need it most. Whether
            through donations, volunteering, or spreading the word—every action counts.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-white text-[#111926] hover:bg-gray-200 font-semibold px-6 py-3 rounded-full transition shadow">
            Donate Now
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-[#111926] font-semibold px-6 py-3 rounded-full transition shadow">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
