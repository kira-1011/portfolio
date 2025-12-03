'use client';
import { Link as ScrollLink } from 'react-scroll';
import { User, Folder, Mail, Briefcase, Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

const MENU_ITEMS = [
    {
        id: 'about',
        label: 'About',
        icon: User
    },
    {
        id: 'career',
        label: 'Career',
        icon: Briefcase
    },
    {
        id: 'projects',
        label: 'Projects',
        icon: Folder
    },
    {
        id: 'contact',
        label: 'Contact',
        icon: Mail
    }
]

export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between w-full">
                <span className="text-lg font-bold">KS</span>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-600 hover:text-black transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {MENU_ITEMS.map((item) => (
                            <ScrollLink
                                key={item.id}
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={300}
                                onClick={() => setIsMobileMenuOpen(false)}
                                activeClass="text-primary [&>svg]:stroke-primary"
                                className="flex items-center gap-4 p-2 transition-colors cursor-pointer text-gray-500 hover:text-black group"
                            >
                                <item.icon size={20} strokeWidth={1} className="transition-colors group-hover:stroke-black" />
                                <span className="text-sm">{item.label}</span>
                            </ScrollLink>
                        ))}
                    </nav>
                    
                    {/* Mobile Download Resume Button */}
                    <a
                        href="/Kirubel-Resume-2025.pdf"
                        download
                        className="btn-primary mt-8 w-full justify-center group"
                    >
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                        Resume
                    </a>
                </div>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block sticky left-0 top-24 w-48 flex-col justify-between h-1/2">
                <nav className="flex flex-col gap-6 transition-colors duration-300">
                    {MENU_ITEMS.map((item) => (
                        <ScrollLink
                            key={item.id}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            activeClass="!text-primary [&>svg]:!stroke-primary"
                            className="flex items-center gap-4 p-2 transition-colors cursor-pointer text-gray-500 hover:text-black group"
                        >
                            <item.icon size={20} strokeWidth={1} className="transition-colors group-hover:stroke-black" />
                            <span className="text-sm">{item.label}</span>
                        </ScrollLink>
                    ))}
                </nav>
                
                {/* Desktop Download Resume Button */}
                <a
                    href="/Kirubel-Resume-2025.pdf"
                    download
                    className="btn-primary w-fit mt-12 group"
                >
                    <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                    Resume
                </a>
            </aside>
        </>
    );
}
