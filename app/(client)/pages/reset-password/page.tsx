"use client"
import Loader from "@/components/Loader"
import axios from "axios"
import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Eye, EyeOff } from "lucide-react"

type Passwrords = {
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
}
export default function ResetPasswordPage() {
    const [formData, setFormData] = useState<Passwrords>({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.put(`/api/auth/reset-password`, {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword
            })
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                setFormData({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                })
                setViewPassword(false)
            }
        } catch (error: unknown) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                const errMessage = error.response?.data?.message;
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
        <div className="flex items-center justify-center bg-[#0E1724] px-4">
            <div className="w-full max-w-md bg-[#1c2333] p-6 rounded-2xl shadow-lg my-[58px]">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <div className="flex justify-between">
                            <label className="block text-sm text-gray-300 mb-1">Current Password</label>
                            <label className="block text-sm text-gray-300 mb-1 cursor-pointer"
                                onClick={() => { setViewPassword((prev) => !prev) }}>
                                {viewPassword ? <Eye /> : <EyeOff />}
                            </label>
                        </div>

                        <input
                            type={viewPassword ? `text` : `password`}
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl bg-[#2a324a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-1">New Password</label>
                        <input
                            type={viewPassword ? `text` : `password`}
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl bg-[#2a324a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-300 mb-1">Confirm New Password</label>
                        <input
                            type={viewPassword ? `text` : `password`}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-xl bg-[#2a324a] text-white focus:outline-none focus:ring-2 focus:ring-[#BB71FF]"
                            required
                        />
                    </div>

                    {loading ? (
                        <button
                            type="submit"
                            className="w-full bg-[#BB71FF] hover:bg-[#a45eff] transition text-white font-medium py-2 rounded-xl mt-4"
                        >
                            <Loader />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full bg-[#BB71FF] hover:bg-[#a45eff] transition text-white font-medium py-2 rounded-xl mt-4"
                        >
                            Update Password
                        </button>
                    )}

                </form>
            </div >
            <ToastContainer position="top-center" />
        </div >
    )
}
