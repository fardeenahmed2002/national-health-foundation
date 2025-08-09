"use client"
import Skeleton from '@/components/Skeleton'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DisplayApplications from './DisplayApplications'
import SearchBar from './SearchBar'
import Urgency from './Urgency'

type Application = {
    fullName: string
    phoneNumber: string
    condition: string
    urgencylevel: string
    fund: string,
    _id: string
}

const Page = () => {
    const [applications, setApplications] = useState<Application[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [searchText, setSearchText] = useState<string>('')
    const [urgency, setUrgency] = useState<string>('')
    const [fund, setFund] = useState<string>('0')

    const getApplications = async (searchValue = '', urgency = '', fund = '') => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.get(`/api/moderator/aid-applications`, {
                params: {
                    search: searchValue,
                    urgency: urgency,
                    fund: fund
                }
            })
            if (data.success) {
                setApplications(data.allApplications)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMsg = error.response?.data?.message
                toast.error(errorMsg)
            }
        } finally {
            setLoading(false)
        }
    }
    const deBouncedSearch = debounce((searchItems: string, urgent: string, neededFund: string) => {
        getApplications(searchItems, urgent, neededFund)
    }, 500)

    useEffect(() => {
        getApplications()
    }, [])

    useEffect(() => {
        deBouncedSearch(searchText, urgency, fund)
        return () => deBouncedSearch.cancel()
    }, [searchText, urgency, fund])

    return (
        <div className="bg-[#0E1724] h-[515px] text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h1 className="text-2xl font-bold text-[#BB71FF]">Aid Applications</h1>
                    <SearchBar searchText={searchText} setSearchText={setSearchText} />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 space-y-6 bg-[#1c2333] p-4 rounded-xl shadow md:h-[330px]">

                        <div>
                            <div className='flex justify-between'>
                                <h2 className="text-[#BB71FF] font-semibold mb-2">Urgency Level</h2>
                                <X onClick={() => setUrgency('')} className='cursor-pointer' />
                            </div>
                            <Urgency urgency={urgency} setUrgency={setUrgency} />
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <h2 className="text-[#BB71FF] font-semibold mb-2">Fund Needed (৳)</h2>
                                <X onClick={() => setFund('0')} className='cursor-pointer' />
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="100000"
                                step="5000"
                                className="w-full accent-[#BB71FF]"
                                value={fund}
                                onChange={(e) => setFund(e.target.value)}
                            />
                            <p className='text-center text-[#BB71FF]'>{fund}</p>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 max-h-[calc(100vh-180px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#BB71FF]/50 scrollbar-track-[#1c2333]">
                        {loading ? (
                            Array(applications.length || 5).fill(null).map((_, i) => {
                                return <div key={i}>
                                    <Skeleton />
                                    <br />
                                </div>
                            })
                        ) : applications.length === 0 ? (
                            <div className="text-center text-gray-400 py-10">
                                No applications found.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6">
                                {applications.map((app, i) => (
                                    <DisplayApplications key={i} app={app} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    )

}

export default Page
