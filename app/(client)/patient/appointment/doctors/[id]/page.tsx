"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { doctors } from "./doctors";

const DoctorDetailsPage = () => {
  const { id } = useParams() as { id: string };
  const decodedName = decodeURIComponent(id);

  const doctor = doctors.find((doc) => doc.name === decodedName);

  if (!doctor) {
    return (
      <div className="min-h-[calc(100vh-77px)] bg-[#111926] flex items-center justify-center text-white">
        <p className="text-xl text-red-500">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-77px)] bg-[#111926] text-white flex justify-center items-start px-6 py-10">
      <div className="bg-[#1c2333] border border-[#2a324a] rounded-xl shadow-xl p-8 w-full max-w-2xl space-y-6">
        <div className="w-32 h-32 mx-auto">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={128}
            height={128}
            className="rounded-full object-cover border border-purple-500"
          />
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-purple-400">{doctor.name}</h1>
          <p className="text-gray-300">{doctor.degree}</p>
          <p className="text-gray-400">{doctor.specialty}</p>
        </div>
        <div className="text-gray-400 space-y-3 text-sm">
          <p>
            <span className="text-white font-medium">🧑‍⚕️ Experience:</span> {doctor.experience}
          </p>
          <p>
            <span className="text-white font-medium">📝 About:</span> {doctor.about}
          </p>
          <p>
            <span className="text-white font-medium">📅 Available Days:</span>{" "}
            {doctor.availableDays && doctor.availableDays.length > 0 ? (
              <span>{doctor.availableDays.join(", ")}</span>
            ) : (
              <span>Not specified</span>
            )}
          </p>
          <p>
            <span className="text-white font-medium">⏰ Time Slots:</span>{" "}
            {doctor.timeSlots && doctor.timeSlots.length > 0 ? (
              <span>{doctor.timeSlots.join(", ")}</span>
            ) : (
              <span>Not specified</span>
            )}
          </p>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg text-lg transition">
          📞 Call for Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
