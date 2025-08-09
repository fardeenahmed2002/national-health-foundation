"use client"

import React, { useState } from "react"
import { Upload } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Image from "next/image"
import axios from "axios"

type FormData = {
    fullName: string,
    age: string,
    condition: string,
    description: string,
    gender: string,
    address: string,
    phoneNumber: string,
    fund: string,
    paymentMethod: string,
    paymentNumber: string,
    receiverName: string,
    relation: string,
    urgencylevel: string
}
const MedicalAidForm = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        age: "",
        condition: "",
        description: "",
        gender: "",
        address: "",
        phoneNumber: "",
        fund: "",
        paymentMethod: "",
        paymentNumber: "",
        receiverName: "",
        relation: "",
        urgencylevel: ""
    })

    const [loading, setLoading] = useState(false)
    const [prescriptionImage, setPrescriptionImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const prescriptionImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setPrescriptionImage(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            setLoading(true)
            axios.defaults.withCredentials = true
            const form = new FormData()
            form.append(`fullName`, formData.fullName)
            form.append(`age`, formData.age)
            form.append(`condition`, formData.condition)
            form.append(`description`, formData.description)
            form.append(`phoneNumber`, formData.phoneNumber)
            form.append(`gender`, formData.gender)
            form.append(`address`, formData.address)
            form.append(`fund`, formData.fund)
            form.append(`paymentMethod`, formData.paymentMethod)
            form.append(`paymentNumber`, formData.paymentNumber)
            form.append(`receiverName`, formData.receiverName)
            form.append(`relation`, formData.relation)
            form.append(`urgencylevel`, formData.urgencylevel)
            if (prescriptionImage) {
                form.append("prescriptionImage", prescriptionImage);
            }
            const { data } = await axios.post(`/api/patient/postApplication`, form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (data.success) {
                toast.success('Application Publish Successfully')
                setFormData({
                    fullName: "",
                    age: "",
                    condition: "",
                    description: "",
                    gender: "",
                    address: "",
                    phoneNumber: "",
                    fund: "",
                    paymentMethod: "",
                    paymentNumber: "",
                    receiverName: "",
                    relation: "",
                    urgencylevel: ""
                })
                setPrescriptionImage(null)
                setPreview(null)
                setLoading(false)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setLoading(false)
                const errorMsg = error.response?.data?.message
                toast.error(errorMsg)
            }
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <section className="bg-[#0E1724] text-white py-12 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto bg-[#111926] p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#BB71FF]">
                    Medical Aid Application Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="flex flex-col md:flex-row gap-6">

                        <div className="w-1/3">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                                required
                            />
                        </div>

                        <div className="w-1/3">
                            <input
                                type="number"
                                min={0}
                                name="age"
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                                required
                            />
                        </div>

                        <div className="w-1/3">
                            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Contact Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-1/3">
                            <input
                                type="text"
                                name="condition"
                                placeholder="Medical Condition"
                                value={formData.condition}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                                required
                            />
                        </div>
                        <div className="w-1/3">
                            <select name="urgencylevel" value={formData.urgencylevel} onChange={handleChange} className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]" required>
                                <option value="">Urgency Level</option>
                                <option value="Normal">Normal ( within 7 days )</option>
                                <option value="Urgent">Urgent ( within 3 days )</option>
                                <option value="Emergency">Emergency ( within 24 hrs )</option>
                            </select>
                        </div>
                        <div className="w-1/3">
                            <input
                                type="number"
                                min={0}
                                name="fund"
                                placeholder="Fund Amount"
                                value={formData.fund}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-1/4">
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]" required>
                                <option value="">Payment Method</option>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Rocket">Rocket</option>
                            </select>
                        </div>
                        <div className="w-1/4">
                            <input
                                type="text"
                                name="paymentNumber"
                                placeholder="Payment Number"
                                value={formData.paymentNumber}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                                required
                            />
                        </div>
                        <div className="w-1/4">
                            <input
                                type="text"
                                name="receiverName"
                                placeholder="Receiver Name"
                                value={formData.receiverName}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                                required
                            />
                        </div>
                        <div className="w-1/4">
                            <input
                                type="text"
                                name="relation"
                                placeholder="Relation to Patient"
                                value={formData.relation}
                                onChange={handleChange}
                                className="w-full p-3 bg-[#1c2333] border border-[#2a324a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#49B3DB]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">

                        <div className="w-full md:w-1/2 h-[360px] relative">
                            {preview ? (
                                <Image
                                    src={preview}
                                    fill
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
                                value={formData.description}
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
            <ToastContainer position="top-center" />
        </section>
    );
};

export default MedicalAidForm;
