// CategoryFilterSection.tsx
"use client";

const categories = [
  "All",
  "Nutrition",
  "Mental Health",
  "First Aid",
  "Chronic Illness",
  "Wellness",
  "Emergency Care",
];

const CategoryFilterSection = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (category: string) => void;
}) => {
  return (
    <section className="bg-[#111926] text-white py-16 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

        <div className="flex flex-wrap gap-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === cat
                  ? "bg-[#BB71FF] text-[#111926] border-[#BB71FF]"
                  : "bg-[#0E1724] text-white border-gray-600 hover:bg-[#1A2333]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="mt-10 text-gray-400 text-sm">
          Showing articles in category:{" "}
          <span className="text-white font-semibold">{active}</span>
        </p>
      </div>
    </section>
  );
};

export default CategoryFilterSection;
