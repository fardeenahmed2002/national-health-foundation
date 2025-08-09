"use client"

import Loader from '@/components/Loader'
import { Context } from '@/contextApi/ContextProvider'
import axios from 'axios'
import { useParams, useSearchParams } from 'next/navigation'
import { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const page = () => {
    const { id } = useParams() as { id: string }
    const { user } = useContext(Context)
    const searchParamns = useSearchParams()
    const [loading, setLoading] = useState<boolean>(false)

    const name = searchParamns?.get('name')
    const condition = searchParamns?.get('condition')
    const age = searchParamns?.get('age')
    const fund = searchParamns?.get('fund')
    const urgency = searchParamns?.get('urgency')

    const post = async (): Promise<void> => {
        try {
            setLoading(true)
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`/api/moderator/post-approved-application`, {
                name,
                condition,
                age,
                fund,
                urgency,
                applicationId: id
            })
            if (data.success) {
                toast.success(data.message)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMsg = error.response?.data?.message
                toast.error(errorMsg)
            }

        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-[#0E1724] min-h-[calc(100vh-92px)] py-10 px-4 flex justify-center items-start">
            <div className='flex flex-col'>
                <div
                    className="bg-[#1c2333] text-[#cccccc] rounded-xl shadow-lg p-8 space-y-4 overflow-auto"
                    style={{ width: "970px", height: "300px" }}
                >
                    <p className="leading-7 text-[#cccccc] text-base">
                        This is to inform you that <strong className="text-white">{name}</strong>, aged <strong className="text-white">{age}</strong>, has been diagnosed with a serious medical condition: <strong className="text-white">{condition}</strong>. After a careful review and evaluation, it has been determined that the patient is in need of financial assistance amounting to <strong className="text-white">৳{fund}</strong> to proceed with the necessary treatment and care.

                        <br /><br />
                        Based on the information provided and the severity of the case, the urgency level has been assessed as <strong className="text-[#BB71FF]">{urgency}</strong>. We kindly request the NGO to consider extending support for this patient as early as possible to ensure timely medical intervention.

                        <br /><br />
                        This application has been reviewed and approved by <strong className="text-white">{user?.name}</strong> on behalf of the CuraLink Moderation Team.
                    </p>
                </div> <br />

                {loading ? (
                    <button
                        className="w-[130px] px-5 py-2 rounded-lg bg-[#BB71FF] hover:bg-[#a45eff] text-white font-semibold shadow-md transition"
                    >
                        <Loader />
                    </button>
                ) : (
                    <button
                        onClick={() => post()}
                        className="w-[130px] px-5 py-2 rounded-lg bg-[#BB71FF] hover:bg-[#a45eff] text-white font-semibold shadow-md transition"
                    >
                        Post
                    </button>
                )}
            </div>
            <ToastContainer position="top-center" />
        </div>
    )
}

export default page
