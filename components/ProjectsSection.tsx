import Image from 'next/image';
import LangchainIcon from './LangchainIcon';

const PROJECTS = [
    {
        title: "Crosstalk.ai",
        description: "AI-powered Bible engagement platform serving 100K+ users across 190 countries. Features include interactive chat, prayer wall, spiritual assessments, and a curated knowledge base with 100K+ answers. Built with multilingual support, semantic search, and LLM-driven content moderation.",
        link: "https://crosstalk.ai/",
        projectIcon: "/crosstalk-logo.png",
        techStack: [
            { name: "Django", icon: "ci-django" },
            { name: "React", icon: "ci-react" },
            { name: "Langchain", icon: LangchainIcon },
            { name: "Tailwind", icon: "ci-tailwindcss" },
            { name: "PostgreSQL", icon: "ci-postgresql" }
        ]
    },
    {
        title: "Linkt.ai",
        description: "AI-powered sales platform that transforms go-to-market strategies with intelligent agents. Features signal monitoring, agentic search for lead generation, and automated outreach helping sales teams book 10x more meetings and achieve 3x revenue growth.",
        link: "https://linkt.ai/",
        projectIcon: "/linkt-logo.svg",
        techStack: [
            { name: "Next.js", icon: "ci-nextjs" },
            { name: "Three.js", icon: "ci-threejs" },
            { name: "WordPress", icon: "ci-wordpress" },
            { name: "GraphQL", icon: "ci-graphql" },
        ]
    },
    {
        title: "Faith Assistant",
        description: "Customizable AI assistant platform for churches and faith-based organizations. Enables communities to create their own faith-focused chatbots with personalized responses, helping members engage with spiritual content and receive guidance 24/7.",
        link: "https://faithassistant.com/",
        projectIcon: "/faithassistant-logo.svg",
        techStack: [
            { name: "Django", icon: "ci-django" },
            { name: "React", icon: "ci-react" },
            { name: "Langchain", icon: LangchainIcon },
            { name: "PostgreSQL", icon: "ci-postgresql" }
        ]
    },
    {
        title: "A2SV Website Clone",
        description: "Full-stack clone of the Africa to Silicon Valley website an organization that upskills high-potential university students and connects them with top tech companies. Includes token-based authentication, profile management, success stories, and blog functionality.",
        link: "https://a2sv-website-clone.vercel.app/",
        projectIcon: "/a2sv-logo.svg",
        techStack: [
            { name: "Next.js", icon: "ci-nextjs" },
            { name: "TypeScript", icon: "ci-typescript" },
            { name: "Redux", icon: "ci-redux" },
        ]
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 tracking-tight">PROJECTS</h2>
            <div className="space-y-12 sm:space-y-20">
                {PROJECTS.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 sm:p-6 space-y-4 sm:space-y-6 border border-gray-200 dark:border-gray-800 rounded-lg  dark:hover:border-purple-600 hover:border-purple-600 focus:border-purple-600 transition-colors duration-300 group"
                    >
                        <div className="flex items-center gap-3 sm:gap-4">
                            {project.projectIcon && (
                                <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-zinc-700/50 shrink-0">
                                    <Image
                                        src={project.projectIcon}
                                        alt={`${project.title} logo`}
                                        width={100}
                                        height={100}
                                        className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-purple-600 transition-colors duration-300">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                            {project.techStack.map((stack) => (
                                <span key={stack.name} title={stack.name}>
                                    {typeof stack.icon === 'function' ? (
                                        <stack.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                    ) : (
                                        <i className={`ci ${stack.icon} ci-lg sm:ci-xl dark:[&>path]:fill-white`} />
                                    )}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}