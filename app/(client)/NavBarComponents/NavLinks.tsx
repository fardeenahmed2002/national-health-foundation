"use client"
import Link from 'next/link'
import { Context } from '@/contextApi/ContextProvider'
import { useContext } from 'react'
const NavLinks = () => {
  const { isloggedin, user } = useContext(Context)
  return (
    <div className="text-white bg-[#111926] p-4">
      {!isloggedin && (
        <div className='flex flex-row space-x-6'>
          <Link href="/" className="hover:text-[#BC71FF]">
            Home
          </Link>
          <Link href="/pages/about-us" className="hover:text-[#BC71FF]">
            About Us
          </Link>
          <Link href="/pages/how-it-works" className="hover:text-[#BC71FF]">
            How It Works
          </Link>
          <Link href="/pages/contact-us" className="hover:text-[#BC71FF]">
            Contact
          </Link>
          <Link href="/pages/health-resources" className="hover:text-[#BC71FF]">
            Health Resources
          </Link>
          <Link href="/pages/notice" className="hover:text-[#BC71FF]">
            Notice
          </Link>
        </div>
      )}
      {user?.isPatient && (
        <div className='flex flex-row space-x-6'>
          <Link href="/patient" className="hover:text-[#BC71FF]">
            Home
          </Link>
          <Link href="/patient/applyForm" className="hover:text-[#BC71FF]">
            Apply for Aid
          </Link>
          <Link href="/patient/appointment" className="hover:text-[#BC71FF]">
            Book Appointment
          </Link>
        </div>
      )}
      {user?.isAdmin && (
        <div className='flex flex-row space-x-6'>
          <Link href={'/admin'} className='hover:text-[#BC71FF]'>Home</Link>
          <Link href={'/admin/moderator'} className='hover:text-[#BC71FF]'>Assign Moderator</Link>
          <Link href={'/admin/notice'} className='hover:text-[#BC71FF]'>Post a notice</Link>
        </div>
      )}

    </div>
  )
}

export default NavLinks
