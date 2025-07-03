"use client";
import React, { useState } from "react";
type FormData = {
    fullName: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    role: string,
}

const PatientSignupPage = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: 'patient'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // You can now send data to your API
    };

    return (
        <div className="min-h-screen bg-[#111926] text-white flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-[#0E1724] p-8 rounded-2xl shadow-xl w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Patient Signup</h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2a3a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2a3a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2a3a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2a3a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2a3a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition-all"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default PatientSignupPage;
