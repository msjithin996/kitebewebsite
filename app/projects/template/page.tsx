"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ProjectTemplatePage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-20">

                {/* 1. Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[60vh] md:h-[80vh] rounded-[32px] overflow-hidden mb-20 group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
                        alt="Project Hero"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Aesthetic Title Overlay */}
                    <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-6xl md:text-8xl lg:text-9xl text-white font-serif tracking-tight"
                            style={{ fontFamily: '"ITC Clearface", "Times New Roman", serif' }}
                        >
                            Mobile App
                        </motion.h1>
                    </div>
                </motion.div>

                {/* 2. Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
                    <div className="flex flex-col justify-end">
                        {/* Metadata Grid */}
                        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[#888] mb-4">Category:</h3>
                                <p className="text-lg font-medium text-white">Design</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[#888] mb-4">Services:</h3>
                                <p className="text-lg font-medium text-white">WordPress, HTML</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[#888] mb-4">Date:</h3>
                                <p className="text-lg font-medium text-white">November 22, 2023</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-[#888] mb-4">Client:</h3>
                                <p className="text-lg font-medium text-white">Acme Corp</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pt-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-[#CCC] leading-relaxed font-light"
                        >
                            Embark on a journey into the captivating realm of 3D character design, where imagination meets technology, and digital creations spring to life. In this comprehensive guide, discover the intricate process behind crafting compelling characters in three-dimensional space, from initial concept to final rendering.
                        </motion.p>
                    </div>
                </div>

                {/* 3. Dual Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1200&auto=format&fit=crop"
                            alt="Detail 1"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                            alt="Detail 2"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>

                {/* 4. Challenge Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-32 border-t border-white/10 pt-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-normal">Challenge & solutions</h2>
                    </div>
                    <div>
                        <p className="text-lg text-[#AAA] leading-relaxed mb-8">
                            Unleash your creativity as you delve into the fundamental principles of character design, mastering the art of form, proportion, and expression. Explore the dynamic interplay of shape, texture, and color, breathing depth and personality into your creations with each stroke of the digital brush.
                        </p>
                        <p className="text-lg text-[#AAA] leading-relaxed">
                            Step into the digital atelier and learn the essential techniques used by industry professionals to sculpt, model, and rig characters with precision and finesse. Harness the power of cutting-edge software tools to sculpt lifelike anatomy, refine intricate details, and imbue your characters with unique identities and emotions.
                        </p>
                    </div>
                </div>

                {/* 5. Wide Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden mb-32"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop"
                        alt="Wide Showcase"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* 6. Analytics Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-32 border-t border-white/10 pt-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-normal">Analytics & reporting</h2>
                    </div>
                    <div>
                        <p className="text-lg text-[#AAA] leading-relaxed mb-8">
                            Navigate the intricate dance between technology and artistry as you tackle the challenges of character animation, mastering the nuances of movement, gesture, and expression. Learn to breathe life into your creations, infusing them with personality and charm through dynamic posing and fluid motion.
                        </p>
                        <p className="text-lg text-[#AAA] leading-relaxed">
                            Unlock the secrets of storytelling through character design, as you craft narratives that resonate with audiences on a visceral level.
                        </p>
                    </div>
                </div>

                {/* 7. Footer / Tags */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 gap-8">
                    <div className="flex gap-3">
                        {['branding', 'development', 'digital'].map((tag) => (
                            <span key={tag} className="px-6 py-2 rounded-full border border-white/20 text-sm text-[#CCC] hover:border-white hover:text-white transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-6">
                        {/* Social Icons Placeholder - matching design */}
                        <Twitter className="w-5 h-5 text-[#888] hover:text-white cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 text-[#888] hover:text-white cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-[#888] hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-[#888] hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
