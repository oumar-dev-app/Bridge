'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLink = [

    { name: "Accueil", href: "/" },
    { name: "Nos programmes", href: "/programme" },
    { name: "About", href: "/about" },
];

function FooterLink() {
    const pathname = usePathname();
    return (
        <div className=' space-y-3'>
            {navLink.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <div key={link.name}>
                        <Link href={link.href}
                            className={`hover:text-red-500  font-semibold text-sm group hoverEffect ${pathname === link.href ? "text-red-500" : ""}`}
                        >
                            {link.name}

                        </Link>

                    </div>
                )
            })}
        </div>
    )
}



export default FooterLink;