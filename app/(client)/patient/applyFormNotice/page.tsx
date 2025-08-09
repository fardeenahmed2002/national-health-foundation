'use client'

import Link from "next/link"
const Page = () => {

    return (
        <div className="bg-[#0E1724] min-h-[calc(100vh-92px)] p-6">
            <div className="bg-[#1c2333] border-l-4 border-[#BB71FF] text-white p-6 rounded-xl max-w-3xl mx-auto mt-10 shadow-lg">
                <h2 className="text-xl font-semibold text-[#BB71FF] mb-3">⚠️ Important Notice</h2>
                <p className="text-[#cccccc] leading-7">
                    To ensure fairness and authenticity, please make sure that the patient's information provided in this application
                    <span className="text-[#BB71FF] font-bold"> exactly matches</span> the information shown on the attached medical documents (such as prescriptions or diagnosis papers).
                </p>
                <ul className="mt-4 space-y-2 text-[#cccccc] list-disc pl-5">
                    <li><span className="text-white font-bold">Full Name</span> must match exactly with the prescription.</li>
                    <li><span className="text-white font-bold">Age</span> and <span className="text-white font-bold">medical condition</span> should be consistent with the documents.</li>
                    <li>Use official documents only — handwritten or unverified sources may lead to disapproval.</li>
                    <li>Duplicate submissions for the same patient from multiple accounts may be flagged and reviewed.</li>
                </ul>
                <p className="mt-4 text-[#cccccc]">
                    Your cooperation helps us maintain trust and provide timely support to those who need it most.
                    <br />
                    <span className="text-white font-medium">Thank you for being a responsible moderator.</span>
                </p>
                <br />
                <Link href={`/patient/applyFormNotice/applyForm`} className="bg-[#BB71FF] hover:bg-[#a45eff] text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-200">
                    Apply Now
                </Link>

            </div>
        </div>

    )

}

export default Page
