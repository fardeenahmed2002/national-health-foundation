"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileIcon = () => {
    const [isloggedin, setIsloggedin] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(false);

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
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                                <li
                                    onClick={() => {
                                        setIsloggedin(false);
                                        setMenu(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    href="#"
                    onClick={() => setIsloggedin(true)}
                    className="bg-[#803abd] text-white px-4 py-2 rounded-full hover:bg-[#BC71FF] transition-all"
                >
                    Login
                </Link>
            )}
        </div>
    );
};

export default ProfileIcon;
