"use client"

import React from "react";
import {
    CalendarDays,
    FileText,
    FlaskConical,
    CreditCard,
    MessageCircle,
    User
} from "lucide-react"

type DashboardCardProps = {
    icon: React.ReactNode
    title: string
    value: string
}
const Dashboard = () => {
    return (
        <section className="bg-[#0E1724] text-white min-h-screen py-10 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold mb-8">
                    Welcome back, <span className="text-[#BB71FF]">Rahim</span> 👋
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <DashboardCard
                        icon={<CalendarDays size={28} />}
                        title="Upcoming Appointment"
                        value="July 10, 11:30 AM"
                    />
                    <DashboardCard
                        icon={<FileText size={28} />}
                        title="Active Prescriptions"
                        value="3 Ongoing"
                    />
                    <DashboardCard
                        icon={<FlaskConical size={28} />}
                        title="Lab Results"
                        value="1 New"
                    />
                    <DashboardCard
                        icon={<CreditCard size={28} />}
                        title="Billing"
                        value="$120 Due"
                    />
                    <DashboardCard
                        icon={<MessageCircle size={28} />}
                        title="Messages"
                        value="2 Unread"
                    />
                    <DashboardCard
                        icon={<User size={28} />}
                        title="Profile"
                        value="View & Edit"
                    />
                </div>

                <div className="bg-[#111926] p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-[#49B3DB] mb-4">
                        Upcoming Appointment
                    </h3>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <p><span className="font-semibold">Doctor:</span> Dr. Karim</p>
                            <p><span className="font-semibold">Date:</span> July 10, 2025</p>
                            <p><span className="font-semibold">Time:</span> 11:30 AM</p>
                            <p><span className="font-semibold">Mode:</span> Video Call</p>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0">
                            <button className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700">View</button>
                            <button className="px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700">Reschedule</button>
                            <button className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const DashboardCard = ({ icon, title, value }: DashboardCardProps) => {
    return (
        <div className="bg-[#111926] p-5 rounded-xl shadow flex items-center gap-4 hover:bg-[#1a2233] transition">
            <div className="text-[#BB71FF] bg-[#1e263c] p-3 rounded-full">
                {icon}
            </div>
            <div>
                <h4 className="text-md font-semibold">{title}</h4>
                <p className="text-sm text-gray-300">{value}</p>
            </div>
        </div>
    );
};

export default Dashboard
