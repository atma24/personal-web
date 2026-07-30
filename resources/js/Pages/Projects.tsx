import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { useState } from 'react';

interface Project {
    title: string;
    slug: string;
    description: string;
    tech_stack: string[];
    category: string;
    is_featured: boolean;
    live_url?: string;
    github_url?: string;
    image?: string;
}

interface Props {
    projects: Project[];
}

export default function Projects({ projects }: Props) {
    const [filter, setFilter] = useState<string>('all');
    const categories = ['all', ...new Set(projects.map((p) => p.category))];

    const filtered =
        filter === 'all' ? projects : projects.filter((p) => p.category === filter);

    return (
        <PublicLayout>
            <Head title="Projects" />

            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                    Projects
                </h2>
                <div className="industrial-divider"></div>

                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 font-mono text-sm font-bold border-2 transition-colors duration-200 ${
                                filter === cat
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white border-[#333] hover:border-white'
                            }`}
                        >
                            {cat === 'all' ? 'All' : cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <div
                            key={project.slug}
                            className="group border-2 border-[#333] bg-[#1a1a1a] p-6 transition-colors duration-200 hover:bg-white hover:text-black"
                        >
                            {project.image && (
                                <div className="mb-4 border-2 border-[#333] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            )}
                            <span className="inline-block border border-[#333] px-2 py-0.5 text-xs font-mono mb-3 group-hover:border-black">
                                {project.category}
                            </span>
                            <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-black">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[#999] line-clamp-3 group-hover:text-black/70">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech_stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-[#333] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider group-hover:border-black"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-6">
                                {project.live_url && (
                                    <a
                                        href={project.live_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono font-bold text-white border border-[#333] px-4 py-2 hover:bg-black hover:text-white group-hover:border-black group-hover:bg-black"
                                    >
                                        Live →
                                    </a>
                                )}
                                {project.github_url && (
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono font-bold text-white border border-[#333] px-4 py-2 hover:bg-black hover:text-white group-hover:border-black group-hover:bg-black"
                                    >
                                        Code →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
