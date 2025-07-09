"use client";

import React, { useState } from "react";
import { doctors } from "../doctors/[id]/doctors";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
type FormData = {
  patientName: string,
  age: (number | string),
  gender: string,
  date: string,
  reason: string,
  doctor: string
}
const BookAppointmentPage = () => {
  const [formData, setFormData] = useState<FormData>({
    patientName: "",
    age: "",
    gender: "",
    date: "",
    reason: "",
    doctor: "",
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      console.log("Appointment Submitted:", formData);
      axios.defaults.withCredentials = true
      const { data } = await axios.post(`/api/patient`, {
        patientName: formData.patientName,
        age: formData.age,
        gender: formData.gender,
        date: formData.date,
        reason: formData.reason,
        doctor: formData.doctor
      })
      if (data.success) {
        toast.success('posted successfully')
        setLoading(false)
        setFormData({
          patientName: "",
          age: "",
          gender: "",
          date: "",
          reason: "",
          doctor: "",
        })
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errMessage = error.response?.data?.message || "Something went wrong";
        toast.error(errMessage)
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  return (
    <section className="bg-[#0E1724] px-6 text-white">
      <div className="max-w-3xl mx-auto bg-[#111926] p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#BB71FF]">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="patientName"
              placeholder="Full Name"
              value={formData.patientName}
              onChange={handleChange}
              className="flex-1 p-3 bg-[#1c2333] border border-[#2a324a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
              required
              autoComplete="off"
            />
            <input
              type="number"
              min={0}
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-[150px] p-3 bg-[#1c2333] border border-[#2a324a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
              required
              autoComplete="off"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[100px] p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
              required
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
              required
            />
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc) => {
                return <option key={doc.name}>{doc.name}</option>
              })}
            </select>
          </div>

          <textarea
            name="reason"
            rows={4}
            placeholder="Describe your symptoms or reason for visit"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-4 bg-[#1c2333] border border-[#2a324a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BB71FF] resize-none"
            required
          />

          {loading ? (<button
            type="submit"
            className="w-full bg-[#BB71FF] hover:bg-purple-600 py-3 px-6 rounded-full text-white font-semibold transition-all"
          >
            <Loader />
          </button>) : (<button
            type="submit"
            className="w-full bg-[#BB71FF] hover:bg-purple-600 py-3 px-6 rounded-full text-white font-semibold transition-all"
          >
            Submit Appointment
          </button>)}

        </form>
      </div>
    </section>
  );
};

export default BookAppointmentPage;
