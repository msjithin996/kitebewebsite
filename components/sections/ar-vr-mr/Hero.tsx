"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="block text-blue-400 font-mono tracking-widest text-sm mb-4 uppercase">You are in</span>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
                        AGE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            OF META
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                        Experience the next evolution of digital interaction. Where reality meets imagination, and boundaries dissolve into infinite possibilities.
                    </p>
                </motion.div>

                {/* Hero Image / Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full aspect-[16/9] max-h-[600px] bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Placeholder for futuristic VR/Meta image */}
                        <div className="text-center">
                            <div className="text-6xl mb-4">🕶️ 🌐 🧠</div>
                            <p className="text-gray-500 font-mono text-sm">IMMERSIVE REALITY SIMULATION</p>
                        </div>
                    </div>
                    <Image
                        src="https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=2670&auto=format&fit=crop"
                        alt="Metaverse Experience"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                    />
                </motion.div>
            </div>

            {/* Decorative Box Border (from reference description "square border") */}
            <div className="absolute top-20 right-20 w-32 h-32 border-t-2 border-r-2 border-white/20 hidden md:block" />
            <div className="absolute bottom-20 left-20 w-32 h-32 border-b-2 border-l-2 border-white/20 hidden md:block" />
        </section>
    );
}
