"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { toast } from "react-toastify";
import Image from "next/image";
type FormData = {
    fullName: string,
    age: number | string,
    condition: string,
    description: string
}
const MedicalAidForm = () => {
    const [form, setForm] = useState<FormData>({
        fullName: "",
        age: "",
        condition: "",
        description: "",
    })

    const [loading, setLoading] = useState(false);
    const [prescriptionImage, setPrescriptionImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const prescriptionImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPrescriptionImage(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setLoading(false);
        toast.success('Application Publish Successfully')
        setForm({
            fullName: "",
            age: "",
            condition: "",
            description: "",
        })
        console.log(prescriptionImage)
        setPrescriptionImage(null)
        setPreview(null)
    }

    return (
        <section className="bg-[#0E1724] text-white py-12 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto bg-[#111926] p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#BB71FF]">
                    Medical Aid Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={form.fullName}
                            onChange={handleChange}
                            className="flex-1 p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                            required
                        />
                        <input
                            type="number"
                            min={0}
                            name="age"
                            placeholder="Age"
                            value={form.age}
                            onChange={handleChange}
                            className="w-[150px] p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="condition"
                        placeholder="Medical Condition"
                        value={form.condition}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                        required
                    />

                    <div className="flex flex-col md:flex-row gap-6">

                        <div className="w-full md:w-1/2 h-[360px] relative">
                            {preview ? (
                                <Image
                                    src={preview}
                                    width={400}
                                    height={360}
                                    alt="Prescription Preview"
                                    className="object-cover rounded-xl shadow-md"
                                />
                            ) : (
                                <div className="w-full h-full border border-dashed border-gray-500 rounded-xl flex items-center justify-center text-gray-400 bg-[#1c2333]">
                                    Prescription Image
                                </div>
                            )}
                            <label className="absolute top-2 left-2 flex items-center gap-2 px-3 py-1.5 bg-white bg-opacity-80 text-green-700 rounded-md text-sm shadow cursor-pointer hover:bg-opacity-100 transition">
                                <Upload size={18} />
                                <span>Select Image</span>
                                <input
                                    type="file"
                                    name="prescriptionImage"
                                    accept="image/*"
                                    onChange={prescriptionImg}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        <div className="w-full md:w-1/2">
                            <textarea
                                name="description"
                                placeholder="Describe your issue in detail"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full h-[360px] p-4 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF] resize-none"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#BB71FF] hover:bg-purple-600 py-3 px-6 rounded-full text-white font-semibold transition-all"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default MedicalAidForm;
