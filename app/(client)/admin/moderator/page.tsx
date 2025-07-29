"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loader from "@/components/Loader";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
type FormData = {
    name: string,
    email: string,
    phone: string,
    address: string,
    password: string,
    curaId: string
}
const AssignModeratorPage = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "cura.mdr.XXX@gmail.com",
        phone: "",
        address: "",
        password: "",
        curaId: "MDR-",
    })
    const [loading, setLoading] = useState<boolean>(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post("/api/admin/assign-moderator", {
                name: form.name,
                email: form.email,
                phone: form.phone,
                address: form.address,
                password: form.password,
                curaId: form.curaId,
                role: "moderator",
            })

            if (data.success) {
                toast.success("Moderator assigned successfully!")
                setLoading(false)
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    password: "",
                    curaId: "",
                })
            }
        } catch (error: unknown) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                const errMessage = error.response?.data?.message || "Something went wrong";
                toast.error(errMessage)
                setLoading(false)
            } else {
                toast.error("An unexpected error occurred");
            }
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <section className="bg-[#0E1724] text-white w-full px-4 py-8">
            <form
                onSubmit={handleSubmit}
                className="bg-[#1c2333] p-8 rounded-xl max-w-3xl w-full mx-auto space-y-6"
            >
                <h1 className="text-3xl font-bold mb-6 text-[#BB71FF] text-center">
                    Assign Moderator
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 text-gray-300">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="Enter full name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="Enter email address"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="Enter phone number"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="Enter address"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">Password</label>
                        <input
                            type="text"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="Enter password"
                            autoComplete="off"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">Cura ID</label>
                        <input
                            type="text"
                            name="curaId"
                            value={form.curaId}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded bg-[#2a324a] text-white outline-none"
                            placeholder="CuraLink ID"

                        />
                    </div>
                </div>
                <div>
                    {loading ? (<button
                        type="submit"
                        className="w-full bg-[#BB71FF] hover:bg-[#a45eff] text-white py-3 rounded text-lg font-semibold"
                    >
                        <Loader />
                    </button>) : (<button
                        type="submit"
                        className="w-full bg-[#BB71FF] hover:bg-[#a45eff] text-white py-3 rounded text-lg font-semibold"
                    >
                        Assign Moderator
                    </button>)}
                </div>
            </form>
            <ToastContainer position="top-center" />
        </section>
    );
};

export default AssignModeratorPage;
