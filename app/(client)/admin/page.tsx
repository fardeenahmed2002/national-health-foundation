"use client";

import { useEffect, useState } from "react";
import { Users, ShieldCheck, ClipboardList, Clock } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    ngos: 0,
    applications: 0,
    pending: 0,
  });

  const getStats = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get("/api/admin/stats");
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errMessage = error.response?.data?.message || "Something went wrong";
        toast.error(errMessage)
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <section className="bg-[#0E1724] text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Welcome back, <span className="text-[#BB71FF]">Admin</span> 🛡️
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Total Users" value={stats.users} icon={<Users size={24} />} />
            <Card title="Verified NGOs" value={stats.ngos} icon={<ShieldCheck size={24} />} />
            <Card title="Total Applications" value={stats.applications} icon={<ClipboardList size={24} />} />
            <Card title="Pending Approvals" value={stats.pending} icon={<Clock size={24} />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-[#1c2333] p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-[#2a324a] text-[#BB71FF] p-3 rounded-full">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-green-400">{value}</p>
    </div>
  );
};

export default AdminDashboard;
