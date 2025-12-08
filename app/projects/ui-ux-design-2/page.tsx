"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

export default function UiUxDesignPage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Header & Hero */}
            <section className="pt-40 pb-20 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-sm uppercase tracking-widest text-gray-500">Business, UI/UX Design</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-[80px] font-medium leading-[1.1] mb-16 max-w-5xl"
                    >
                        Synapse dashboard to enhance customer service, business efficiency
                    </motion.h1>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-20 bg-[#111]"
                    >
                        <Image
                            src="/images/ui-ux/hero.png"
                            alt="Dashboard Mockup"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Project Info Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-20">
                        <div className="lg:col-span-6">
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Data", "Management", "Technology"].map((tag) => (
                                    <span key={tag} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-medium mb-6">
                                Synapse dashboard to enhance customer service a
                            </h3>
                        </div>
                        <div className="lg:col-span-6 flex flex-col justify-between">
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                Synapse seamlessly integrates with your existing systems and platforms, allowing you to consolidate your data and streamline your workflows. Whether you're managing inventory, processing orders, or tracking customer interactions, Synapse brings everything together in one intuitive interface.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <h4 className="text-sm text-gray-500 mb-2">Client</h4>
                                    <p className="text-lg font-medium">HRC.Inc</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 mb-2">Industry</h4>
                                    <p className="text-lg font-medium">Fintech</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 mb-2">Duration</h4>
                                    <p className="text-lg font-medium">3 months</p>
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-500 mb-2">Team</h4>
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#1C1C1C] overflow-hidden relative">
                                                <Image src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="Team" fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Approach */}
            <section className="py-20 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    {/* Two Images Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <div className="aspect-[4/3] bg-[#111] rounded-3xl overflow-hidden relative">
                            <Image src="/images/ui-ux/process.png" alt="Branding" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="aspect-[4/3] bg-[#111] rounded-3xl overflow-hidden relative">
                            <Image src="/images/ui-ux/approach.png" alt="Laptop Mockup" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm font-medium">Our problem</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium">Challenge & approach</h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We delve into the hurdles we faced and the strategic approaches we implemented to navigate them, ultimately paving the way for our app's success. We focused on creating a unified design system that could scale across multiple platforms while maintaining brand consistency.
                            </p>
                        </div>
                    </div>

                    {/* Large Interface Shots */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <div className="aspect-[16/10] bg-[#111] rounded-3xl overflow-hidden relative group">
                            <Image src="/images/ui-ux/interface-dark.png" alt="Interface Dark" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        </div>
                        <div className="aspect-[16/10] bg-[#111] rounded-3xl overflow-hidden relative group">
                            <Image src="/images/ui-ux/interface-light.png" alt="Interface Light" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm font-medium">Our process</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium">The way we works</h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We offer insight into the unique methodology that drives our work at Synapse, illuminating the steps we take to turn ideas into reality and deliver innovative solutions that exceed expectations.
                            </p>
                        </div>
                    </div>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                        {[
                            { step: "1-Empathize", img: "/images/ui-ux/empathize.png" },
                            { step: "2-Define", img: "/images/ui-ux/define.png" },
                            { step: "3-Ideate", img: "/images/ui-ux/ideate.png" },
                            { step: "4-Prototype", img: "/images/ui-ux/prototype.png" }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="aspect-square bg-[#111] rounded-2xl overflow-hidden relative mb-4">
                                    <Image src={item.img} alt={item.step} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <h4 className="text-lg font-medium">{item.step}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Results Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm font-medium">Our results</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium">Solution & Results</h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Discover how the Synapse app transforms business operations with its innovative features and user-friendly interface. From streamlining workflows to enhancing customer engagement.
                            </p>
                        </div>
                    </div>

                    {/* Final Visuals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <div className="aspect-[4/3] bg-[#111] rounded-3xl overflow-hidden relative">
                            <Image src="/images/ui-ux/results.png" alt="Mobile App 1" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="aspect-[4/3] bg-[#111] rounded-3xl overflow-hidden relative">
                            <Image src="/images/ui-ux/results-2.png" alt="Mobile App 2" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors mb-8 md:mb-0">
                            Visit the website
                        </button>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500 mr-4">Share this project</span>
                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
