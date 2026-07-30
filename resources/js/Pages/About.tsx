import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface Skill {
    name: string;
    category: string;
    icon_slug?: string;
}

interface Education {
    institution: string;
    major: string;
    period: string;
}

interface Props {
    skills: Skill[];
    educations: Education[];
}

export default function About({ skills, educations }: Props) {
    const hardSkills = skills.filter((s) => s.category === 'hard');
    const softSkills = skills.filter((s) => s.category === 'soft');

    return (
        <PublicLayout>
            <Head title="About" />

            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                    About
                </h2>
                <div className="industrial-divider"></div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold font-mono mb-6">Abdul Rauf Fansuri</h3>
                        <p className="text-[#999] leading-relaxed mb-4">
                            Mahasiswa aktif Program Studi Teknologi Rekayasa Informatika Industri di
                            Politeknik Manufaktur Bandung. Memiliki ketertarikan dan kompetensi pada
                            integrasi sistem otomatisasi, pengembangan perangkat lunak, serta analisis data.
                        </p>
                        <p className="text-[#999] leading-relaxed">
                            Saya terbiasa mengelola database menggunakan PostgreSQL, mengotomatisasi alur
                            kerja menggunakan n8n, hingga membangun model machine learning yang efisien.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-6">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {educations.map((edu, i) => (
                                <div
                                    key={i}
                                    className="border-2 border-[#333] p-6 bg-[#1a1a1a]"
                                >
                                    <h4 className="font-mono font-bold text-white">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-sm text-[#999] mt-1">{edu.major}</p>
                                    <p className="text-xs font-mono text-[#666] mt-2">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-2 border-[#333]">
                <div className="max-w-6xl mx-auto px-6 py-24">
                    <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                        Skills
                    </h2>
                    <div className="industrial-divider"></div>

                    <div className="mb-12">
                        <h3 className="text-xs font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-4">
                            Hard Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {hardSkills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="border-2 border-[#333] px-5 py-3 font-mono text-sm font-bold bg-[#1a1a1a] transition-colors duration-200 hover:bg-white hover:text-black"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-4">
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="border-2 border-[#333] px-5 py-3 font-mono text-sm font-bold bg-[#1a1a1a] transition-colors duration-200 hover:bg-white hover:text-black"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
