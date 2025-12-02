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
            <h2 className="text-4xl font-bold mb-12 tracking-tight">PROJECTS</h2>
            <div className="space-y-20">
                {PROJECTS.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 space-y-6 border border-gray-200 rounded-lg hover:border-purple-600 focus:border-purple-600 transition-colors duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            {project.projectIcon && (
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
                                    <Image
                                        src={project.projectIcon}
                                        alt={`${project.title} logo`}
                                        width={100}
                                        height={100}
                                        className="h-9 w-9 object-contain"
                                    />
                                </div>
                            )}
                            <h3 className="text-3xl font-medium group-hover:text-purple-600 transition-colors duration-300">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="flex gap-4 items-center">
                            {project.techStack.map((stack) => (
                                <span key={stack.name} title={stack.name}>
                                    {typeof stack.icon === 'function' ? (
                                        <stack.icon className="w-8 h-8" />
                                    ) : (
                                        <i className={`ci ${stack.icon} ci-xl`} />
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