"use client";
import React from "react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#111926] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#0E1724] p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        <p className="text-gray-400 text-center mb-8">Select your role to begin registration</p>

        <div className="grid gap-6">
          {[
            { label: "Patient / Aid Seeker", path: "/signup/patient" },
            { label: "NGO / Organization", path: "/signup/ngo" },
            { label: "Doctor / Medical Volunteer", path: "/signup/doctor" },
          ].map((role, i) => (
            <Link
              key={i}
              href={role.path}
              className="bg-[#BB71FF] hover:bg-purple-600 text-white text-center font-semibold py-4 rounded-xl shadow-md transition"
            >
              {role.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
