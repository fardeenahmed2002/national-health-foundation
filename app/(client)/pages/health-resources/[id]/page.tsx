"use client";

import { useParams } from "next/navigation";
import { allArticles } from "./articles";
import Image from "next/image";

const ArticlePage = () => {
  const { id } = useParams();
  const titleFromUrl = id?.toString().split("-").join(" ");

  const article = allArticles.find(
    (a) => a.title.toLowerCase() === titleFromUrl?.toLowerCase()
  );

  if (!article) {
    return (
      <div className="text-white p-10 bg-[#111926] min-h-screen">
        <h1 className="text-3xl font-bold text-red-400">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#111926] text-white min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-[#BB71FF] pb-2">
          {article.title}
        </h1>

        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            height={250}
            width={250}
            className="object-cover"
          />
        </div>

        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
