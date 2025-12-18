"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Disc, Ship } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-[#0F1420] text-white overflow-hidden font-sans">
            {/* Top Navigation Bar - Absolute to span across */}


            <div className="grid grid-cols-1 lg:grid-cols-[28%_44%_28%] h-screen pt-20">

                {/* COLUMN 1: Branding & Info */}
                <div className="flex flex-col justify-between p-8 lg:p-6 xl:p-10 border-r border-white/10 relative">
                    <div className="mt-20">
                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl lg:text-[2.2vw] font-bold tracking-tighter mb-12 font-mono leading-tight"
                        >
                            <span className="block whitespace-nowrap">AUGMENTED REALITY</span>
                            <span className="block whitespace-nowrap">VIRTUAL REALITY</span>
                            <span className="block whitespace-nowrap">EXTENDED REALITY</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl tracking-widest font-thin mb-8">
                                IMMERSIVE TECH - <span className="font-mono">V500001</span>
                            </h2>

                            <div className="space-y-4 max-w-xs text-sm text-gray-400 leading-relaxed">
                                <p className="font-bold text-gray-200">Future of Interaction</p>
                                <p>
                                    Create high-fidelity immersive experiences that blur the line between the physical and digital worlds for varied industries.
                                </p>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 px-8 py-3 border border-white/20 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            Discover
                        </motion.button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 text-gray-500 mt-auto pt-12">
                        <Disc size={18} className="hover:text-white cursor-pointer transition-colors" />
                        <Ship size={18} className="hover:text-white cursor-pointer transition-colors" />
                        <Twitter size={18} className="hover:text-white cursor-pointer transition-colors" />
                        <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

                {/* COLUMN 2: Main Hero Image */}
                <div className="relative border-r border-white/10 overflow-hidden bg-[#151a2e]">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="w-full h-full relative"
                    >
                        {/* Background glow effect behind the head */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                        <img
                            src="/images/ar-vr/hero-v2.png"
                            alt="AiMEE Main Character"
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Gradient overlay at bottom to blend if needed */}
                        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0F1420] to-transparent"></div>
                    </motion.div>
                </div>

                {/* COLUMN 3: Secondary Feature & Navigation */}
                <div className="flex flex-col justify-between p-8 lg:p-12 relative bg-[#0F1420]">

                    {/* Secondary Image Carousel */}
                    <div className="w-full aspect-[4/5] relative mb-12 mt-12 group">
                        {/* Arrows */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer">
                            <ArrowLeftIcon />
                        </div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 cursor-pointer">
                            <ArrowRightIcon />
                        </div>

                        <div className="w-full h-full rounded-full lg:rounded-none lg:rounded-t-full overflow-hidden border border-white/5 relative">
                            <img
                                src="/images/ar-vr/hero-character-secondary.png"
                                alt="Secondary Character"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-light tracking-wide uppercase leading-tight"
                        >
                            High Tech, <br />
                            Higher Fashion
                        </motion.h3>

                        <p className="text-sm text-gray-400 leading-relaxed">
                            Experience the next generation of spatial computing. We build robust platforms that redefine how users interact with digital content.
                        </p>

                        <div className="flex items-end justify-between pt-8">
                            <span className="text-2xl font-mono text-gray-500">01/09</span>

                            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <RotateIcon />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// Custom Icons to match the specific sharp aesthetics
const ArrowLeftIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white w-8 h-8">
        <path d="M15 18l-6-6 6-6" />
    </svg>
)

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white w-8 h-8">
        <path d="M9 18l6-6-6-6" />
    </svg>
)

const RotateIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
    </svg>
)
