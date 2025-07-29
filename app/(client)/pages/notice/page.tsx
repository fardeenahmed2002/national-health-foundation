"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";

type Notice = {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

const NoticePage = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllNotices = async () => {
    try {
      const { data } = await axios.get("/api/visitor");

      if (data.success) {
        setNotices(data.notices);
      } else {
        setError(data.message || "No notices found.");
      }
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        const errMessage =
          error.response?.data?.message || "Something went wrong";
        setError(errMessage);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);

  return (
    <section className="min-h-screen bg-[#0E1724] text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl font-bold text-[#BB71FF] mb-8">
          📢 Notice Board
        </h1>

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : notices.length === 0 ? (
          <p className="text-gray-400">No notices available.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {notices.map((notice) => (
              <div
                key={notice._id}
                className="bg-[#1c2333] border border-[#2a324a] rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between overflow-hidden"
                style={{ width: "320px", height: "500px" }}
              >
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-[#49B3DB] line-clamp-1">
                      {notice.title}
                    </h2>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {new Date(notice.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{notice.content}</p>
                </div>

                {notice.image && (
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={notice.image}
                      alt={notice.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                      priority
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

  );
};

export default NoticePage;
