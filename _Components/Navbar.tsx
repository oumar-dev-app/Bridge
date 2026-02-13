'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLink = [

  { name: "Accueil", href: "/" },
  { name: "Nos programmes", href: "/programme" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <ul className='hidden md:inline-flex w-full items-center capitalize gap-10 text-sm font-semibold text-black'>
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <li key={link.name}>
            <Link href={link.href}
              className={`hover:text-red-600  group hoverEffect ${pathname === link.href ? "text-red-500" :""}`}
            >
              {link.name}
           
            </Link>
              
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar;