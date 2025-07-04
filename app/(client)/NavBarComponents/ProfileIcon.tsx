"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Context } from "@/contextApi/ContextProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
const ProfileIcon = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const { isloggedin, setIsloggedin, setUser } = useContext(Context)
    const navigate = useRouter()
    const logout = async (): Promise<void> => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post('/api/auth/logout')
            if (data.success) {
                setIsloggedin(false)
                setMenu(false)
                setUser(false)
                navigate.push('/')
            }
        } catch (error) {
            console.log((error as Error).message)
        }
    }
    return (
        <div className="flex items-center justify-center relative">
            {isloggedin ? (
                <div className="relative">
                    <Image
                        src="/user.png"
                        alt="profile"
                        width={48}
                        height={48}
                        onClick={() => setMenu((prev) => !prev)}
                        className="rounded-full border-2 border-[#11CEB6] hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    {menu && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => navigate.push('/pages/profile')}>Profile</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                                <li
                                    onClick={logout}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (

                <div className="bg-[#803abd] text-white px-4 py-2 rounded-full">
                    <Link href="/login" className="hover:underline">Login</Link> | <Link href={'/signup'} className="hover:underline">Signup</Link>
                </div>

            )}
        </div>
    );
};

export default ProfileIcon;
