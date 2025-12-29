"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function DigitalFrontierSection() {
    return (
        <section className="bg-white text-black min-h-[90vh] flex items-center overflow-hidden relative" data-header-theme="dark">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Left - Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative h-[80vh] w-full"
                >
                    {/* Gradient mask to fade image at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10"></div>

                    <img
                        src="/images/ar-vr/vr-headset-white.png"
                        alt="The Digital Frontier"
                        className="w-full h-full object-contain object-center lg:object-left"
                    />
                </motion.div>

                {/* Right - Content */}
                <div className="flex flex-col justify-center h-full pb-20 lg:pl-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm tracking-[0.3em] font-medium uppercase mb-6"
                    >
                        About Us
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-12 text-black"
                    >
                        THE DIGITAL <br />
                        <span className="font-normal">FRONTIER</span>
                    </motion.h2>

                    {/* Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 mb-12"
                    >
                        {['Digital', 'Reality', 'Next'].map((item) => (
                            <span key={item} className="px-6 py-2 rounded-full border border-black/20 text-sm text-gray-600 hover:bg-black hover:text-white transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-600 text-lg leading-relaxed max-w-md mb-12"
                    >
                        We guide enterprises through the Digital Frontier, translating complex emerging technologies into tangible business value and transformative experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-8"
                    >
                        <button className="px-8 py-4 bg-black/5 hover:bg-black hover:text-white rounded-lg transition-colors font-medium text-black">
                            Learn More
                        </button>

                        <button className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors group">
                            <PlayCircle className="w-8 h-8 fill-black text-white group-hover:fill-blue-600 group-hover:text-white transition-colors" />
                            <span className="font-medium">Watch a Video</span>
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
