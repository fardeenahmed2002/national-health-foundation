// AllArticlesGrid.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Article = {
  title: string;
  summary: string;
  image: string;
  link: string;
  category: string;
};

const AllArticlesGrid = ({ articles }: { articles: Article[] }) => {
  return (
    <section className="bg-[#111926] text-white py-24 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 inline-block border-[#BB71FF] pb-2">
          All Health Resources
        </h2>

        {articles.length === 0 ? (
          <p className="text-gray-400">No articles found in this category.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#0E1724] rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
                  <a href={article.link} className="text-sm text-[#BB71FF] hover:underline">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArticlesGrid;
