"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import KitebeAnimation from "@/components/ui/KitebeAnimation";

export default function Services() {
    return (
        <section className="py-20 px-6 md:px-20 lg:px-40 bg-[#1C1C1C] text-white">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center mb-2 md:mb-2 gap-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] md:text-[56px] font-normal max-w-xl leading-tight"
                    >
                        Trust the process & make
                        your business grow
                    </motion.h2>

                    <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                        <KitebeAnimation />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] bg-white/20 mb-16 md:mb-20" />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Limitless Opportunities */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#E2E2F5] text-black rounded-[3rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[400px] md:min-h-[500px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-normal leading-tight z-10">
                            01. Limitless<br />opportunities
                        </h3>

                        <div className="relative z-10 mt-auto max-w-[80%]">
                            <p className="text-sm md:text-base leading-relaxed opacity-80">
                                At Kitebe, we believe in transforming visions into reality. Our dedicated team works tirelessly to create unique digital solutions that resonate with your audience.
                            </p>
                        </div>

                        {/* Decorative Image for Card 1 */}
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 md:w-[60%] md:h-[60%] pointer-events-none">
                            <Image
                                src="https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2069&auto=format&fit=crop"
                                alt="Growth"
                                fill
                                className="object-contain object-bottom-right drop-shadow-2xl translate-x-10 translate-y-10"
                            />
                        </div>
                    </motion.div>

                    {/* Card 2: Innovative Solutions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#1E1E24] text-white rounded-[3rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                            02. Innovative<br />solutions
                        </h3>

                        <div className="mt-auto">
                            <p className="text-sm md:text-base leading-relaxed text-gray-400">
                                Kitebe provides a variety of innovative services aimed at empowering your business and driving growth. Our skilled team is committed to delivering customized technology solutions that address your specific needs.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: IT Consulting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#1E1E24] text-white rounded-[3rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px]"
                    >
                        <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                            03. IT<br />consulting
                        </h3>

                        <div className="mt-auto">
                            <p className="text-sm md:text-base leading-relaxed text-gray-400">
                                Kitebe offers a range of innovative services designed to elevate your business and improve your digital footprint. Our expert team is dedicated to providing customized solutions that address your unique requirements.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
