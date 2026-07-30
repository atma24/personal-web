import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Project {
    title: string;
    slug: string;
    description: string;
    tech_stack: string[];
    category: string;
    is_featured: boolean;
    image?: string;
}

interface Skill {
    name: string;
    category: string;
    proficiency: number;
    icon_slug?: string;
}

interface Props {
    projects: Project[];
    skills: Skill[];
}

export default function Home({ projects, skills }: Props) {
    const featuredProjects = projects.filter((p) => p.is_featured).slice(0, 3);
    const projectCount = projects.length;
    const skillCount = skills.length;

    return (
        <PublicLayout>
            <Head title="Home" />

            <section className="relative min-h-screen flex items-center justify-center grid-overlay border-b-2 border-[#333]">
                <div className="text-center px-6">
                    <h1 className="text-[96px] md:text-[140px] font-bold font-mono leading-none tracking-tight text-white">
                        RAUF
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-[#999] max-w-xl mx-auto">
                        Mahasiswa TRIN, Politeknik Manufaktur Bandung
                    </p>

                    <div className="mt-12 flex justify-center gap-6 flex-wrap">
                        <div className="border-2 border-[#333] px-8 py-6 text-center w-40">
                            <p className="text-3xl font-bold font-mono text-white">{projectCount}</p>
                            <p className="text-xs text-[#666] uppercase tracking-widest mt-1">Projects</p>
                        </div>
                        <div className="border-2 border-[#333] px-8 py-6 text-center w-40">
                            <p className="text-3xl font-bold font-mono text-white">{skillCount}</p>
                            <p className="text-xs text-[#666] uppercase tracking-widest mt-1">Skills</p>
                        </div>
                        <div className="border-2 border-[#333] px-8 py-6 text-center w-40">
                            <p className="text-3xl font-bold font-mono text-white">3+</p>
                            <p className="text-xs text-[#666] uppercase tracking-widest mt-1">Experience</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                    Featured Projects
                </h2>
                <div className="industrial-divider"></div>

                {featuredProjects.length === 0 && (
                    <p className="text-[#666] font-mono text-sm">No featured projects yet.</p>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={route('projects')}
                            className="group block border-2 border-[#333] bg-[#1a1a1a] p-6 transition-colors duration-200 hover:bg-white hover:text-black"
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
                            <p className="text-sm text-[#999] line-clamp-2 group-hover:text-black/70">
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
                        </Link>
                    ))}
                </div>
            </section>

            <section className="border-t-2 border-[#333]">
                <div className="max-w-6xl mx-auto px-6 py-24">
                    <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                        Skills
                    </h2>
                    <div className="industrial-divider"></div>

                    {(['hard', 'soft'] as const).map((cat) => {
                        const catSkills = skills.filter((s) => s.category === cat);
                        if (catSkills.length === 0) return null;
                        return (
                            <div key={cat} className="mb-12 last:mb-0">
                                <h3 className="text-xs font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-4">
                                    {cat === 'hard' ? 'Hard Skills' : 'Soft Skills'}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {catSkills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="border-2 border-[#333] px-5 py-3 font-mono text-sm font-bold bg-[#1a1a1a] transition-colors duration-200 hover:bg-white hover:text-black"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="border-t-2 border-[#333]">
                <div className="max-w-6xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-2xl font-bold font-mono mb-4">
                        Get In Touch
                    </h2>
                    <div className="industrial-divider"></div>
                    <p className="text-[#999] mb-8 max-w-md mx-auto">
                        Have a project in mind or just want to say hi?
                    </p>
                    <a
                        href="mailto:snowfreze@gmail.com"
                        className="inline-block border-2 border-white px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-white hover:text-black"
                    >
                        snowfreze@gmail.com
                    </a>
                </div>
            </section>
        </PublicLayout>
    );
}
