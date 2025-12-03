import { ExternalLink } from 'lucide-react';

const CAREER_DATA = [
    {
        id: 1,
        period: '05/2024 — Present',
        title: 'Full-Stack Engineer',
        company: 'Manifest Automation',
        companyUrl: 'https://manifestautomation.com/',
        description: 'Developed AI Agent automation workflows using OpenAI Agents SDK for e-commerce store. Built SEO-optimized website for the Crosstalk app serving over 30K users using Wagtail CMS, Tailwind CSS, Django and React. Implemented multilingual support, semantic search, and LLM-driven spam filtering.',
        isCurrent: true,
    },
    {
        id: 2,
        period: '01/2024 — 09/2024',
        title: 'Full Stack Engineer',
        company: 'Impact Careers',
        companyUrl: 'https://impactcareers.com/',
        description: 'Built employer admin side for managing job posts. Created LLM based resume and cover letter generator. Implemented job matching feature using Pinecone and Open AI\'s text embedding models. Utilized multi-agent architecture using Crew AI.',
        isCurrent: false,
    },
    {
        id: 3,
        period: '06/2023 — 02/2024',
        title: 'Frontend Engineer',
        company: 'Linkt',
        companyUrl: 'https://linkt.ai/',
        description: 'Designed and developed linkt.ai using Next.js, Typescript, Tailwindcss, Three.js and WordPress as a headless CMS. Implemented blog feature using GraphQL.',
        isCurrent: false,
    },
    {
        id: 4,
        period: '08/2023 — 11/2023',
        title: 'Frontend Web Developer Intern',
        company: 'Africa To Silicon Valley',
        companyUrl: 'https://a2sv.org/',
        description: 'Built 40% of the project and led the triad team to successfully clone the A2SV website. Implemented token based authentication and a fully functional profile edit section.',
        isCurrent: false,
    },
];

export default function CareerSection() {
    return (
        <section id="career">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 tracking-tight">CAREER</h2>
            <div className="border-l-2 border-gray-100 dark:border-gray-800 ml-2 sm:ml-3 space-y-10 sm:space-y-16">
                {CAREER_DATA.map((job) => (
                    <div key={job.id} className="relative pl-8 sm:pl-12 group w-fit">
                        <div className={`absolute -left-[9px] top-2 h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary dark:group-hover:bg-primary ${job.isCurrent ? 'bg-black dark:bg-white' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                        <span className="text-xs sm:text-sm font-mono text-gray-400 mb-2 block">{job.period}</span>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2">{job.title}</h3>
                        <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 text-sm sm:text-base hover:text-purple-600 hover:underline transition-colors duration-300 inline-flex items-center gap-2"
                        >
                            {job.company}
                            <ExternalLink size={16} />
                        </a>
                        <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl leading-relaxed text-sm sm:text-base">{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
