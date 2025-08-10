"use client"

import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Skeleton from './Skeleton'
import Image from 'next/image'

type DetailsType = {
  _id: string,
  fullName: string
  age: string
  gender: string
  address: string
  phoneNumber: string
  condition: string
  description: string
  prescriptionImage: string
  fund: string
  paymentMethod: string
  paymentNumber: string
  receiverName: string
  relation: string
  urgencylevel: string
}

const Page = () => {
  const { id } = useParams() as { id: string }
  const [fullData, setFullData] = useState<DetailsType | null>(null)

  const getFullDetails = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.get(`/api/moderator/aid-applications-by-id/${id}`)
      if (data.success) {
        setFullData(data.details)
      }
    } catch (error) {
      console.error("Error fetching details", error)
    }
  }

  useEffect(() => {
    if (id) getFullDetails()
  }, [id])


  return (
    <div className="bg-[#0E1724] min-h-screen py-10 px-4 text-white">
      <div className="max-w-5xl mx-auto bg-[#1c2333] rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-[#BB71FF] mb-6 text-center">
          Aid Request Details
        </h2>
        {fullData ?
          (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 w-full">
                <Image
                  src={fullData.prescriptionImage}
                  alt="Prescription"
                  width={800} // Adjust based on your layout
                  height={600} // Adjust based on your layout
                  className="w-full h-auto rounded-xl border border-[#BB71FF]/30 object-cover"
                />
              </div>

              <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <Field label="Full Name" value={fullData.fullName} />
                <Field label="Age" value={fullData.age} />
                <Field label="Gender" value={fullData.gender} />
                <Field label="Phone" value={fullData.phoneNumber} />
                <Field label="Address" value={fullData.address} />
                <Field label="Urgency" value={fullData.urgencylevel} />
                <Field label="Condition" value={fullData.condition} />
                <Field label="Fund Needed" value={fullData.fund + ' ৳'} />
                <Field label="Payment Method" value={fullData.paymentMethod} />
                <Field label="Payment Number" value={fullData.paymentNumber} />
                <Field label="Receiver Name" value={fullData.receiverName} />
                <Field label="Relation" value={fullData.relation} />

                <div className="sm:col-span-2">

                  <p className="text-gray-300 text-sm mb-1">Description</p>
                  <p className="text-white bg-[#2a324a] p-3 rounded-xl">{fullData.description}</p>

                </div>

                <div className="flex justify-between gap-4 ml-[190px]">

                  <Link href={{
                    pathname: `/moderator/aid-applications/appoved/${fullData._id}`,
                    query: {
                      name: fullData.fullName,
                      condition: fullData.condition,
                      age: fullData.age,
                      fund: fullData.fund,
                      urgency: fullData.urgencylevel
                    }
                  }} className='px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition duration-200 cursor-pointer'>

                    Approve

                  </Link>

                  <Link href={``} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md transition duration-200">

                    Reject

                  </Link>

                </div>

              </div>
            </div>
          ) : (
            <Skeleton />
          )}
      </div>
    </div>
  )
}

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-300 text-xs mb-1">{label}</p>
    <p className="text-white font-medium bg-[#2a324a] px-3 py-2 rounded-xl">{value}</p>
  </div>
)

export default Page
