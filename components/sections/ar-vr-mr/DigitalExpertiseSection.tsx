"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DigitalExpertiseSection() {
    return (
        <section className="bg-black text-white py-32 px-6">
            <div className="max-w-[1400px] mx-auto">

                {/* Heading */}
                <h2 className="text-5xl md:text-8xl font-serif tracking-tight mb-20 text-white">
                    Digital Expertise
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">

                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] overflow-hidden bg-gray-900 aspect-[4/3] w-full"
                    >
                        <img
                            src="/images/ar-vr/digital-expertise.png"
                            alt="Digital Expertise Surreal Landscape"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right - Content */}
                    <div className="flex flex-col justify-center lg:pl-12">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl md:text-5xl font-light leading-tight mb-12"
                        >
                            Step into the future of art with Dttio. We provide cutting-edge digital services.
                        </motion.h3>

                        <div className="flex gap-8 items-start border-l border-white/20 pl-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                                    Our innovative solutions are designed to enhance your artistic journey and connect you with a wider audience.
                                </p>

                                <button className="group flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors text-lg">
                                    Read more <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
