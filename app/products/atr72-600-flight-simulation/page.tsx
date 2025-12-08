"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AtrFlightSimulationPage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-end pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2940&auto=format&fit=crop"
                        alt="ATR72-600 Flight Simulation"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-40">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-medium tracking-tight mb-6"
                    >
                        ATR72-600 Flight Simulation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                    >
                        High-fidelity flight training solutions for the next generation of pilots.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
                        <div>
                            <h2 className="text-3xl font-medium mb-6">Overview</h2>
                            <div className="w-full h-px bg-white/20 mb-8" />
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><span className="text-white block mb-1">Product Type</span> Flight Simulator</p>
                                <p><span className="text-white block mb-1">Industry</span> Aviation</p>
                                <p><span className="text-white block mb-1">Year</span> 2024</p>
                            </div>
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
                            <p>
                                Our ATR72-600 Flight Simulation system provides an unparalleled training environment for pilots. By replicating the exact cockpit layout, avionics, and flight dynamics of the real aircraft, we ensure that trainees gain the muscle memory and situational awareness required for safe operations.
                            </p>
                            <p>
                                The simulator features high-resolution visual systems, realistic weather rendering, and accurate soundscapes to create a fully immersive experience. It is designed to meet the rigorous standards of aviation training authorities and airlines worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Gallery / Features */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] overflow-hidden rounded-sm"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1559067515-bf7d799b6d42?q=80&w=2670&auto=format&fit=crop"
                                alt="Cockpit View"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-sm"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2670&auto=format&fit=crop"
                                alt="Simulation Screen"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
