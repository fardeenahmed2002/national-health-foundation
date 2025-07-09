"use client"

import Link from "next/link"
import React, { useState } from "react"
const doctors = [
  {
    name: "Dr. Abbas Rahman",
    specialty: "Cardiologist",
    location: "Dhaka Medical Center",
    experience: "10+ years",
  },
  {
    name: "Dr. Ali Hossain",
    specialty: "Neurologist",
    location: "Apollo Hospital, Dhaka",
    experience: "8 years",
  },
  {
    name: "Dr. Asif Hasan",
    specialty: "Orthopedic Surgeon",
    location: "United Hospital",
    experience: "12 years",
  },
  {
    name: "Dr. Aziz Khan",
    specialty: "Dermatologist",
    location: "Square Hospital",
    experience: "7 years",
  },
  {
    name: "Dr. Sunny Ahmed",
    specialty: "Pediatrician",
    location: "Popular Diagnostic Center",
    experience: "6 years",
  },
  {
    name: "Dr. Farhana Sultana",
    specialty: "Gynecologist",
    location: "Labaid Specialized Hospital",
    experience: "9 years",
  },
  {
    name: "Dr. Rezaul Karim",
    specialty: "ENT Specialist",
    location: "Evercare Hospital",
    experience: "11 years",
  },
  {
    name: "Dr. Nabila Rahman",
    specialty: "Psychiatrist",
    location: "BSMMU Hospital",
    experience: "8 years",
  },
]

const DoctorsPage = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")

  return (
    <div className=" bg-[#111926] p-6 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-purple-400">Our Verified Doctors</h1>

        {/* Specialty Filter */}
        <div className="max-w-xs">
          <label className="block mb-1 text-sm font-medium text-gray-300">Filter by Specialty</label>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full px-4 py-2 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
          >
            <option value="All">All</option>
            {doctors
              .map((doc) => doc.specialty)
              .filter((spec, idx, arr) => arr.indexOf(spec) === idx)
              .map((spec, idx) => (
                <option key={idx} value={spec}>
                  {spec}
                </option>
              ))}
          </select>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {doctors
            .filter((doc) => selectedSpecialty === "All" || doc.specialty === selectedSpecialty)
            .map((doctor, index) => (
              <div
                key={index}
                className="bg-[#1c2333] border border-[#2a324a] rounded-lg p-4 shadow-md hover:shadow-purple-600 transition text-sm space-y-1"
              >
                <div className="flex flex-row justify-between">
                  <h2 className="text-lg font-semibold text-white">{doctor.name}</h2>
                  <Link href={`/patient/appointment/doctors/${encodeURIComponent(doctor.name)}`}>
                    <p>➕</p></Link>
                </div>

                <p className="text-gray-400">{doctor.specialty}</p>
                <p className="text-gray-500">📍 {doctor.location}</p>
                <p className="text-gray-500">🧑‍⚕️ {doctor.experience}</p>
              </div>
            ))}

          {doctors.filter((doc) => selectedSpecialty === "All" || doc.specialty === selectedSpecialty).length === 0 && (
            <p className="text-gray-400 col-span-full">No doctors found for this specialty.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorsPage
