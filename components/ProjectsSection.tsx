import {
    NextJsIcon,
    TailwindIcon,
    DjangoIcon,
    TypeScriptIcon,
    ThreeJsIcon,
    GraphQLIcon,
    WordPressIcon,
    ReactIcon,
    PostgreSQLIcon,
    ReduxIcon,
    WagtailIcon,
    LangchainIcon
} from './Icons';

const PROJECTS = [
    {
        title: "Crosstalk.ai",
        description: "SEO-optimized website serving over 30K users with multilingual support and semantic search.",
        link: "https://crosstalk.ai/",
        techStack: [
            { name: "Django", icon: DjangoIcon },
            { name: "Wagtail", icon: WagtailIcon },
            { name: "Langchain", icon: LangchainIcon },
            { name: "React", icon: ReactIcon },
            { name: "Tailwind", icon: TailwindIcon }
        ]
    },
    {
        title: "Linkt.ai",
        description: "Designed and developed using Next.js and WordPress as a headless CMS.",
        link: "https://linkt.ai/",
        techStack: [
            { name: "Next.js", icon: NextJsIcon },
            { name: "Three.js", icon: ThreeJsIcon },
            { name: "WordPress", icon: WordPressIcon },
            { name: "GraphQL", icon: GraphQLIcon },
        ]
    },
    {
        title: "Faith Assistant",
        description: "Front-end and back-end for an assistant chatbot service for churches and cities.",
        link: "https://faithassistant.com/",
        techStack: [
            { name: "Django", icon: DjangoIcon },
            { name: "React", icon: ReactIcon },
            { name: "Langchain", icon: LangchainIcon },
            { name: "PostgreSQL", icon: PostgreSQLIcon }
        ]
    },
    {
        title: "A2SV Website Clone",
        description: "Fully functional clone with token-based authentication and profile management.",
        link: "https://a2sv-website-clone.vercel.app/",
        techStack: [
            { name: "Next.js", icon: NextJsIcon },
            { name: "Redux", icon: ReduxIcon },
            { name: "TypeScript", icon: TypeScriptIcon }
        ]
    }
]

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
                        <h3 className="text-3xl font-medium group-hover:text-purple-600 transition-colors duration-300 w-fit">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="flex gap-4 items-center">
                            {project.techStack.map((stack) => (
                                <div key={stack.name} className="flex items-center justify-center" title={stack.name}>
                                    <stack.icon className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
