"use client";
import React, { useContext, useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import Loader from "@/components/Loader"
import { toast } from "react-toastify"
import { Context } from "@/contextApi/ContextProvider";
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
    })
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useRouter()
    const { getuserdata, setIsloggedin } = useContext(Context)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        setLoading(true)

        try {
            const { data } = await axios.post('/api/auth/signup', {
                name: formData.fullName,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
                address: formData.address,
                role: formData.role
            })
            if (data.success) {
                setIsloggedin(true)
                getuserdata()
                toast.success(data.message)
                navigate.push('/patient')
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

                {
                    loading ? (
                        <button
                            type="submit"
                            className="mt-6 w-full bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition-all"
                        >
                            <Loader />
                        </button>
                    )
                        :
                        (<button
                            type="submit"
                            className="mt-6 w-full bg-[#BB71FF] hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition-all"
                        >
                            Sign Up
                        </button>
                        )
                }
                <p className="mt-4 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <span
                        className="text-[#BB71FF] cursor-pointer hover:underline"
                        onClick={() => navigate.push("/login")}
                    >
                        Log in
                    </span>
                </p>
            </form>
        </div>
    );
};

export default PatientSignupPage;
