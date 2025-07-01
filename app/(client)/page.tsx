import React from 'react'
import Home from './pages/home/Home'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      main home page
      <Home />
      links :
      <Link href={'/pages/about-us'}> about us </Link>
      <Link href={'/pages/contact-us'}> contact </Link>
    </div>
  )
}

export default page
