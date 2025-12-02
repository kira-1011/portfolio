import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SOCIAL_LINKS = [
    {
        name: 'Email',
        href: 'mailto:kirubel.s.tadesse@gmail.com',
        icon: Mail
    },
    {
        name: 'GitHub',
        href: 'https://github.com/kira-1011/',
        icon: Github
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kirubel-sentayehu-2ab782170/',
        icon: Linkedin
    },
    {
        name: 'X',
        href: 'https://x.com/KiraS1011',
        icon: Twitter
    }
]

export default function AboutSection() {
    return (
        <section id="home" className="flex flex-col justify-center">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-8">
                        FULL STACK<br />ENGINEER.
                    </h1>

                    <div className="space-y-4 sm:space-y-6 max-w-2xl">
                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                            <span className="text-black font-medium">I'm Kirubel Sentayehu,</span> a full stack engineer who enjoys creating applications that are easy to use and impactful.
                        </p>

                        <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                            I focus on solving challenges and turning ideas into feasible solutions that make a difference. With consistent improvement, My goal to bring creativity and meaningful contributions to every project I work on.
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 text-gray-400 pt-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-600 transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon size={24} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
