"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarLink({ href, label }) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);
    return (
        <Link href={href} className={isActive ? "active" : ""}>{label}</Link>
    )
}
