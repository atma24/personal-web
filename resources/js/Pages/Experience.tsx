import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

interface ExperienceItem {
    type: string;
    title: string;
    role?: string;
    company?: string;
    description: string;
    start_date: string;
    end_date?: string | null;
}

interface Props {
    experiences: ExperienceItem[];
}

export default function Experience({ experiences }: Props) {
    const formatDate = (d: string) => {
        const date = new Date(d);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const work = experiences.filter((e) => e.type === 'work');
    const org = experiences.filter((e) => e.type === 'organization');

    return (
        <PublicLayout>
            <Head title="Experience" />

            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                    Experience
                </h2>
                <div className="industrial-divider"></div>

                {work.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-xs font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-6">
                            Work Experience
                        </h3>
                        <div className="space-y-6">
                            {work.map((exp, i) => (
                                <div
                                    key={i}
                                    className="border-l-2 border-[#333] pl-6 hover:border-white transition-colors duration-200"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-mono font-bold text-white text-lg">
                                                {exp.title}
                                            </h4>
                                            {exp.role && (
                                                <p className="text-sm text-[#999] mt-1">{exp.role}</p>
                                            )}
                                            {exp.company && (
                                                <p className="text-xs font-mono text-[#666] mt-1">
                                                    {exp.company}
                                                </p>
                                            )}
                                        </div>
                                        <span className="text-xs font-mono text-[#666] whitespace-nowrap ml-4">
                                            {formatDate(exp.start_date)} —{' '}
                                            {exp.end_date ? formatDate(exp.end_date) : 'Now'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#999] mt-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {org.length > 0 && (
                    <div>
                        <h3 className="text-xs font-mono font-bold text-[#666] uppercase tracking-[0.2em] mb-6">
                            Organization
                        </h3>
                        <div className="space-y-6">
                            {org.map((exp, i) => (
                                <div
                                    key={i}
                                    className="border-l-2 border-[#333] pl-6 hover:border-white transition-colors duration-200"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-mono font-bold text-white text-lg">
                                                {exp.title}
                                            </h4>
                                            {exp.role && (
                                                <p className="text-sm text-[#999] mt-1">{exp.role}</p>
                                            )}
                                        </div>
                                        <span className="text-xs font-mono text-[#666] whitespace-nowrap ml-4">
                                            {formatDate(exp.start_date)} —{' '}
                                            {exp.end_date ? formatDate(exp.end_date) : 'Now'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#999] mt-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </PublicLayout>
    );
}
