import Link from 'next/link'

const NavLinks = () => {
    return (
        <div className="flex space-x-6 text-white bg-[#111926] p-4">
            <Link href="/">
                <a className="hover:text-green-400">Home</a>
            </Link>
            <Link href="/about-us">
                <a className="hover:text-green-400">About Us</a>
            </Link>
            <Link href="/how-it-works">
                <a className="hover:text-green-400">How It Works</a>
            </Link>
            <Link href="/contact-us">
                <a className="hover:text-green-400">Contact</a>
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
