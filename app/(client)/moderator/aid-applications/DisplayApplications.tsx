import { Ellipsis } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
    app: {
        fullName: string
        phoneNumber: string
        condition: string
        urgencylevel: string
        fund: string
        _id: string
    }
}

const DisplayApplications = ({ app }: Props) => {
    const route = useRouter()
    return (
        <div className="bg-[#1c2333] w-full rounded-2xl p-6 shadow-lg space-y-3">
            <div className='flex justify-between'>
                <p>
                    <span className="text-[#BB71FF] font-semibold">Name:</span>{' '}
                    {app.fullName}
                </p>
                <div className="relative group inline-block">
                    <p>
                        <Ellipsis className="text-white cursor-pointer"
                            onClick={() => route.push(`/moderator/aid-applications/details/${app._id}`)} />
                    </p>
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#BB71FF] text-white text-xs px-2 py-1 rounded shadow z-10">
                        details
                    </span>
                </div>

            </div>

            <p>
                <span className="text-[#BB71FF] font-semibold">Contact Number:</span>{' '}
                {app.phoneNumber}
            </p>
            <p>
                <span className="text-[#BB71FF] font-semibold">Condition:</span>{' '}
                {app.condition}
            </p>
            <p>
                <span className="text-[#BB71FF] font-semibold">Urgency Level:</span>{' '}
                {app.urgencylevel}
            </p>
            <p>
                <span className="text-[#BB71FF] font-semibold">Fund Needed:</span>{' '}
                ৳{app.fund}
            </p>
        </div>
    )
}

export default DisplayApplications
