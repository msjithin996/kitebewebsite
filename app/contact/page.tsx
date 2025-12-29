"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const TimeDisplay = ({ timezone, label }: { timezone: string, label: string }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</span>
            <span className="text-xl font-mono text-white">{time}</span>
        </div>
    );
};

export default function ContactPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-hidden" ref={containerRef}>
            <Navbar />

            {/* Background Gradient */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 md:px-20 lg:px-40 pt-40 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[80vh]">

                    {/* Left: Sticky Content */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-40">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-12"
                            >
                                Let’s Start Working<br />
                                Together. Get in Touch<br />
                                with Us!
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-12 mb-12"
                            >
                                <TimeDisplay timezone="Europe/London" label="London" />
                                <TimeDisplay timezone="Asia/Kolkata" label="India" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-6 text-gray-400"
                            >
                                <p className="max-w-md text-lg leading-relaxed">
                                    We operate globally, bridging the gap between creativity and technology.
                                    Whether you&apos;re in the UK or India, we&apos;re just a message away.
                                </p>

                                <div className="flex flex-col gap-4 pt-8">
                                    <a href="mailto:hello@kitebe.com" className="hover:text-white transition-colors">hello@kitebe.com</a>
                                    <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Form & Offices */}
                    <div className="flex flex-col gap-32 pt-20 lg:pt-0">
                        {/* Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12 p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
                        >
                            <div className="space-y-8">
                                <div className="group">
                                    <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">What&apos;s your name?</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:border-white outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
                                </div>
                                <div className="group">
                                    <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">Your email address?</label>
                                    <input type="email" suppressHydrationWarning={true} className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:border-white outline-none transition-all placeholder:text-white/10" placeholder="john@example.com" />
                                </div>
                                <div className="group">
                                    <label className="block text-sm text-gray-500 mb-2 group-focus-within:text-white transition-colors">Tell us about your project</label>
                                    <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-2xl focus:border-white outline-none transition-all placeholder:text-white/10 resize-none" placeholder="I have an idea..." />
                                </div>
                            </div>

                            <button className="w-full py-6 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 group">
                                <span>Send Message</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </button>
                        </motion.form>

                        {/* Offices */}
                        <div className="grid grid-cols-1 gap-8">
                            <div className="group p-8 border-l border-white/10 hover:border-white/50 transition-colors pl-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <h3 className="text-2xl font-medium">Cochin, India</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    Level 4, Dotspace Business Centre, Total Tower,<br />
                                    Elamakara, Edappally, Cochin, Kerala - 682024
                                </p>
                            </div>
                            <div className="group p-8 border-l border-white/10 hover:border-white/50 transition-colors pl-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                    <h3 className="text-2xl font-medium">London, UK</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    45 Creative Quarter, Shoreditch<br />
                                    London, E1 6JE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
