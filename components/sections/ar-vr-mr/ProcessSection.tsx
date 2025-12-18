"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "STEP 1",
        title: "CREATE",
        desc: "We start by conceptualizing your virtual environment, designing assets, and mapping out the user journey.",
        image: "/images/ar-vr/process-create.png"
    },
    {
        step: "STEP 2",
        title: "PLATFORM",
        desc: "Development on robust platforms ensuring cross-device compatibility and high performance.",
        image: "/images/ar-vr/process-platform.png"
    },
    {
        step: "STEP 3",
        title: "ENGAGE",
        desc: "Launch your metaverse experience and engage with your audience in real-time virtual spaces.",
        image: "/images/ar-vr/process-engage.png"
    }
];

export default function ProcessSection() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-20">HOW WE BUILD <br /> WITH METAVERSE</h2>

                <div className="space-y-24">
                    {steps.map((item, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                            {/* Text Side */}
                            <div className="flex-1 space-y-6">
                                <span className="text-blue-500 font-bold tracking-widest text-sm">{item.step}</span>
                                <h3 className="text-3xl md:text-5xl font-bold uppercase">{item.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-white/10"
                                >
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
