"use client"
import React, { useState } from "react"
import { ImageIcon, Pencil, PenLine, Trash2 } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import axios from "axios"
import Loader from "@/components/Loader"
import 'react-toastify/dist/ReactToastify.css';

export default function NoticePage() {
    const [formData, setFormData] = useState({
        title: "",
        content: ""
    })
    
    const [image, setImage] = useState<null | File>(null)
    const [preview, setPreview] = useState<null | string>(null)
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImage(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        if (!formData.title || !formData.content || !image) {
            setLoading(false)
            toast.error(`All fields are required`)
            return
        }

        try {
            const form = new FormData()
            form.append("title", formData.title)
            form.append("content", formData.content)
            form.append("image", image)

            const { data } = await axios.post("/api/admin/notice", form, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true
            })

            if (data.success) {
                setFormData({ title: "", content: "" })
                setImage(null)
                setPreview(null)
                toast.success("Notice posted successfully!")
            } else {
                toast.error(data.message || "Something went wrong")
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
        <section className="py-14 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">

                <div className="md:w-1/2 relative flex items-center justify-center bg-white/10 p-6">
                    {preview ? (
                        <img src={preview} alt="Preview" className="rounded-xl object-cover w-full h-80 md:h-full" />
                    ) : (
                        <div className="w-full h-80 md:h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-300">
                            No Image Selected
                        </div>
                    )}

                    <label className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-md text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:bg-white">
                        <ImageIcon size={16} />
                        Upload
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                    <label className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-md text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:bg-white"
                        onClick={() => setPreview(null)}>
                        <Trash2 size={16} />
                        Remove
                    </label>
                </div>

                <div className="md:w-1/2 p-8 text-white space-y-6">
                    <h2 className="text-3xl font-bold flex items-center gap-2">
                        <Pencil size={24} />
                        Post a Notice
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <PenLine className="absolute top-3 left-3 text-white" size={18} />
                            <input
                                type="text"
                                name="title"
                                placeholder="Notice Title"
                                value={formData.title}
                                onChange={handleChange}
                                className="pl-10 pr-4 py-2 w-full border bg-transparent border-white/30 rounded-lg shadow-sm placeholder-white/60"
                                autoComplete="off"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                name="content"
                                placeholder="Write your notice here..."
                                value={formData.content}
                                onChange={handleChange}
                                className="pl-4 pr-4 pt-2 w-full h-40 resize-none border bg-transparent border-white/30 rounded-lg shadow-sm placeholder-white/60"
                                autoComplete="off"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-2 rounded-xl font-semibold transition-all shadow-md"
                            disabled={loading}
                        >
                            {loading ? <Loader /> : <>Post Notice</>}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </section>

    )
}
