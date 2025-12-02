'use client';
import Link from 'next/link';
import { User, Folder, Mail, Briefcase } from 'lucide-react';
import { useState } from 'react';

const MENU_ITEMS = [
    {
        id: 'about',
        href: '/',
        label: 'About',
        icon: User
    },
    {
        id: 'career',
        href: '#career',
        label: 'Career',
        icon: Briefcase
    },
    {
        id: 'projects',
        href: '#projects',
        label: 'Projects',
        icon: Folder
    },
    {
        id: 'contact',
        href: '#contact',
        label: 'Contact',
        icon: Mail
    }
]

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('about');
    const handleSelectSection = (section: string) => {
        setActiveSection(section);
    };
    return (
        <aside className="sticky left-0 top-24 w-48 flex flex-col justify-between h-1/2">
            <nav className="flex flex-col gap-6 transition-colors duration-300">
                {MENU_ITEMS.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => handleSelectSection(item.id)}
                        className={`flex items-center gap-4 p-2 transition-colors group ${activeSection === item.id ? 'text-purple-600' : 'text-gray-500 hover:text-black'}`}
                    >
                        <item.icon size={20} strokeWidth={1.5} className={`transition-colors ${activeSection === item.id ? 'stroke-purple-600' : 'group-hover:stroke-black'}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
