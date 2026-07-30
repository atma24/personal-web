import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
    const { url } = usePage();

    const links = [
        { href: route('home'), label: 'Home' },
        { href: route('about'), label: 'About' },
        { href: route('projects'), label: 'Projects' },
        { href: route('experience'), label: 'Experience' },
        { href: route('contact'), label: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <nav className="border-b-2 border-[#333]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href={route('home')}
                            className="text-lg font-mono font-bold tracking-wider text-white hover:text-white/80 transition-colors"
                        >
                            RAUF
                        </Link>
                        <div className="flex gap-0">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-5 py-2 text-sm font-medium border-2 transition-colors duration-200 ${
                                        url === link.href
                                            ? 'bg-white text-black border-white'
                                            : 'bg-transparent text-white border-transparent hover:border-white'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="border-t-2 border-[#333] py-8">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm font-mono text-[#666]">
                        &copy; 2026 Abdul Rauf Fansuri
                    </p>
                </div>
            </footer>
        </div>
    );
}
