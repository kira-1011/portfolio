export default function CareerSection() {
    return (
        <section id="career">
            <h2 className="text-4xl font-bold mb-12 tracking-tight">CAREER</h2>
            <div className="border-l-2 border-gray-100 ml-3 space-y-16">
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-black border-4 border-white"></div>
                    <span className="text-sm font-mono text-gray-400 mb-2 block">05/2024 — Present</span>
                    <h3 className="text-2xl font-medium mb-2">Full-Stack Engineer</h3>
                    <p className="text-gray-500">Manifest Automation</p>
                    <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
                        Developed AI Agent automation workflows using OpenAI Agents SDK for e-commerce store. Built SEO-optimized website for the Crosstalk app serving over 30K users using Wagtail CMS, Tailwind CSS, Django and React. Implemented multilingual support, semantic search, and LLM-driven spam filtering.
                    </p>
                </div>
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-200 border-4 border-white"></div>
                    <span className="text-sm font-mono text-gray-400 mb-2 block">01/2024 — 09/2024</span>
                    <h3 className="text-2xl font-medium mb-2">Full Stack Engineer</h3>
                    <p className="text-gray-500">LEX560</p>
                    <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
                        Built employer admin side for managing job posts. Created LLM based resume and cover letter generator. Implemented job matching feature using Pinecone and Open AI's text embedding models. Utilized multi-agent architecture using Crew AI.
                    </p>
                </div>
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-200 border-4 border-white"></div>
                    <span className="text-sm font-mono text-gray-400 mb-2 block">06/2023 — 02/2024</span>
                    <h3 className="text-2xl font-medium mb-2">Frontend Engineer</h3>
                    <p className="text-gray-500">Linkt</p>
                    <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
                        Designed and developed linkt.ai using Next.js, Typescript, Tailwindcss, Three.js and WordPress as a headless CMS. Implemented blog feature using GraphQL.
                    </p>
                </div>
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gray-200 border-4 border-white"></div>
                    <span className="text-sm font-mono text-gray-400 mb-2 block">08/2023 — 11/2023</span>
                    <h3 className="text-2xl font-medium mb-2">Frontend Web Developer Intern</h3>
                    <p className="text-gray-500">Africa To Silicon Valley</p>
                    <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
                        Built 40% of the project and led the triad team to successfully clone the A2SV website. Implemented token based authentication and a fully functional profile edit section.
                    </p>
                </div>
            </div>
        </section>
    );
}
