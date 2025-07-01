import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='bg-[#111926]'>
      <div className='flex flex-row'>
        <Image src={'/logo.png'} alt='logo' width={90} height={90} className='rounded-full '/>
        <Image src={'/name.png'} alt='logo' width={300} height={90} className=''/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Navbar
