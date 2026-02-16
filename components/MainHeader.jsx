import Link from 'next/link';
import NavbarLink from './NavbarLink';

const nabarLinks = [
    { href: "/news", label: "News" },
    { href: "/archive", label: "Archive" },

];

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    {nabarLinks.map((link) => (
                        <li key={link.href}>
                            <NavbarLink href={link.href} label={link.label} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}