"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "5 Signs You Should See a Doctor Immediately",
    desc: "Ignoring these symptoms could be dangerous. Here's when you should seek help fast.",
    image: "/blogs/doctor-warning.jpg",
    date: "June 28, 2025",
    slug: "/blog/see-doctor",
  },
  {
    title: "How to Build a Simple First Aid Kit at Home",
    desc: "Keep your family safe with these essential items in your home medical box.",
    image: "/blogs/first-aid.jpg",
    date: "June 24, 2025",
    slug: "/blog/first-aid-kit",
  },
  {
    title: "Dehydration in Summer: What to Watch For",
    desc: "Summer heat can silently affect your health. Learn how to stay properly hydrated.",
    image: "/blogs/dehydration.jpg",
    date: "June 20, 2025",
    slug: "/blog/dehydration-tips",
  },
];

const LatestBlog = () => {
  return (
    <section className="bg-[#111926] text-white py-20 px-6 border-b-2 border-[#BB71FF]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Latest Health Tips & Articles
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Stay informed and empowered with expert-backed health advice and
          timely wellness updates.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-[#0E1724] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <span className="text-sm text-gray-400">{blog.date}</span>
                <h3 className="text-xl font-semibold my-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{blog.desc}</p>
                <Link
                  href={blog.slug}
                  className="text-[#BB71FF] hover:underline font-semibold text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
