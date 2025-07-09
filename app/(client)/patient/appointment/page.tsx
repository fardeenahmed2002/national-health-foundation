"use client";

import React from "react";

const AppointmentPage = () => {
  return (
    <div className="space-y-6 text-white">
      <h1 className="text-3xl font-bold">Welcome to the Appointment Dashboard</h1>

      <p className="text-gray-300">
        This is your central hub for managing healthcare appointments. You can view available
        doctors, schedule new appointments, and track appointment statuses — all in one place.
      </p>

      <div className="bg-[#1c2333] border border-[#2a324a] p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-purple-400">What you can do here:</h2>
        <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
          <li>Browse verified doctors by specialty and location</li>
          <li>Book appointments with available time slots</li>
          <li>Track and manage your upcoming visits</li>
          <li>Get reminders and updates about appointments</li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 italic">
        Use the sidebar on the left to navigate to specific sections.
      </p>
    </div>
  );
};

export default AppointmentPage;
