import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className="flex space-x-6 text-white bg-[#111926] p-4">
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
      {/* <Link href="/faq">
        <a className="hover:text-green-400">FAQ</a>
      </Link>
      <Link href="/apply">
        <a className="hover:text-green-400">Apply for Help</a>
      </Link>
      <Link href="/donate">
        <a className="hover:text-green-400">Donate</a>
      </Link>
      <Link href="/login">
        <a className="hover:text-green-400">Login</a>
      </Link> */}
    </div>
  )
}

export default NavLinks
