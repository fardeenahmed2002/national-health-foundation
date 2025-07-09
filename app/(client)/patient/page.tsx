"use client";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "@/contextApi/ContextProvider";
import { CalendarDays, ClipboardList, DollarSign } from "lucide-react";

type Appointment = {
  _id: string;
  doctor: string;
  date: string;
  serialNumber: number;
  patientName: string;
  reason: string;
};

const Dashboard = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const { user } = useContext(Context);

  const getLatestAppointment = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get("/api/patient");
      if (data.success && data.appointment.length > 0) {
        setAppointment(data.appointment[0]);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errMessage =
          error.response?.data?.message || "Something went wrong";
        toast.error(errMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    getLatestAppointment();
  }, []);

  return (
    <section className="bg-[#0E1724] text-white min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Welcome back, <span className="text-[#BB71FF]">{user?.name}</span> 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Appointment */}
        <div className="bg-[#1c2333] p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#2a324a] text-[#BB71FF] p-3 rounded-full">
              <ClipboardList size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Upcoming Appointment
            </h3>
          </div>
          {appointment ? (
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-gray-400">👨‍⚕️ Doctor:</span>{" "}
                {appointment.doctor}
              </p>
              <p>
                <span className="text-gray-400">📅 Date:</span>{" "}
                {appointment.date}
              </p>
              <p>
                <span className="text-gray-400">🔢 Serial:</span>{" "}
                #{appointment.serialNumber}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No appointment found.</p>
          )}
        </div>

        {/* Card 2: Fund Collected */}
        <div className="bg-[#1c2333] p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#2a324a] text-[#BB71FF] p-3 rounded-full">
              <DollarSign size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">Fund Collected</h3>
          </div>
          <p className="text-2xl font-bold text-green-400">$20</p>
        </div>

        {/* Card 3: Next Visit */}
        <div className="bg-[#1c2333] p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#2a324a] text-[#BB71FF] p-3 rounded-full">
              <CalendarDays size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white">Next Visit</h3>
          </div>
          <p className="text-sm text-gray-300">July 28, 2025</p>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
