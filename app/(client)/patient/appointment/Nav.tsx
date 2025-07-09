// patient/appointment/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Nav = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/patient/appointment/bookappointment", label: "Book Appointment" },
    { href: "/patient/appointment/doctors", label: "Doctors" },
  ];

  return (
    <nav className="flex flex-col gap-4 p-4 bg-[#111926] w-56 text-white">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "px-4 py-2 rounded hover:bg-[#BB71FF]",
            pathname === link.href && "bg-[#BB71FF] font-semibold"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav;
