"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        step: "STEP 1",
        title: "CREATE",
        description: "We define the immersive environment, building 3D assets and spatial audio to construct a believable world.",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2670&auto=format&fit=crop", // VR headset
    },
    {
        step: "STEP 2",
        title: "PLATFORM",
        description: "We integrate the assets into a robust engine (Unity/Unreal) optimized for real-time rendering and interaction.",
        image: "https://images.unsplash.com/photo-1614726365723-49cfaem5690b?q=80&w=2669&auto=format&fit=crop", // Cyber room
    },
    {
        step: "STEP 3",
        title: "ENGAGE",
        description: "Users dive in. We enable multi-user synchronization, haptic feedback, and intuitive controls for deep presence.",
        image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=2670&auto=format&fit=crop", // Playing VR
    },
];

export default function Process() {
    return (
        <section className="bg-[#050505] text-white py-24 px-6 md:px-20 border-t border-white/5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
                        How We Build <br />
                        <span className="text-gray-500">With Metaverse</span>
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {steps.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-10 items-center border-b border-white/10 pb-12 last:border-0 last:pb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }} // Odd items from left
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/3 space-y-4"
                            >
                                <span className="text-blue-500 font-bold tracking-widest text-sm">{item.step}</span>
                                <h3 className="text-3xl font-bold uppercase">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{item.description}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }} // Odd items image from right
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-2/3 w-full"
                            >
                                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
