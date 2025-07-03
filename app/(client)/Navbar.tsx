import React from 'react'
import Image from 'next/image'
import NavLinks from './NavBarComponents/NavLinks'
import ProfileIcon from './NavBarComponents/ProfileIcon'
const Navbar = () => {
  return (
    <div className='bg-[#111926] flex flex-row align-middle items-center justify-center gap-[50px] border-1 border-b-[#BB71FF]'>
      <div className='flex flex-row'>
        <Image src={'/logo.png'} alt='logo' width={90} height={90} className='rounded-full ' />
        <Image src={'/name.png'} alt='logo' width={300} height={90} className='' />
      </div>

      <div>
        <NavLinks />
      </div>
      <div>
        <ProfileIcon/>
      </div>
    </div>
  )
}

export default Navbar
