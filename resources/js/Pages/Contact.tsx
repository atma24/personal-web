import { Head, useForm } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Contact() {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    return (
        <PublicLayout>
            <Head title="Contact" />

            <section className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-sm font-mono font-bold text-[#666] uppercase tracking-[0.2em]">
                    Contact
                </h2>
                <div className="industrial-divider"></div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold font-mono mb-6">Get In Touch</h3>
                        <p className="text-[#999] leading-relaxed mb-8">
                            Have a project in mind, a question, or just want to say hi? Fill out the
                            form or reach me directly.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:snowfreze@gmail.com"
                                className="flex items-center gap-4 border-2 border-[#333] p-4 bg-[#1a1a1a] transition-colors duration-200 hover:bg-white hover:text-black group"
                            >
                                <span className="font-mono text-sm text-[#666] group-hover:text-black">
                                    EMAIL
                                </span>
                                <span className="font-mono text-sm text-white group-hover:text-black">
                                    snowfreze@gmail.com
                                </span>
                            </a>
                            <a
                                href="tel:+6283815086865"
                                className="flex items-center gap-4 border-2 border-[#333] p-4 bg-[#1a1a1a] transition-colors duration-200 hover:bg-white hover:text-black group"
                            >
                                <span className="font-mono text-sm text-[#666] group-hover:text-black">
                                    PHONE
                                </span>
                                <span className="font-mono text-sm text-white group-hover:text-black">
                                    0838-1508-6865
                                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        {wasSuccessful ? (
                            <div className="border-2 border-white p-6 text-center">
                                <p className="font-mono text-sm text-white">
                                    Message sent successfully!
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-mono text-[#666] uppercase tracking-widest mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full border-2 border-[#333] bg-[#1a1a1a] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-white transition-colors"
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-500 mt-1 font-mono">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-[#666] uppercase tracking-widest mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full border-2 border-[#333] bg-[#1a1a1a] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-white transition-colors"
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-500 mt-1 font-mono">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-[#666] uppercase tracking-widest mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        rows={6}
                                        className="w-full border-2 border-[#333] bg-[#1a1a1a] text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-white transition-colors resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-red-500 mt-1 font-mono">{errors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="border-2 border-white px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-white hover:text-black disabled:opacity-50"
                                >
                                    {processing ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
