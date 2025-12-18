"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const tabs = [
    {
        id: "innovation",
        label: "Innovation",
        title: "How VR is Transforming Our Digital World",
        description: "Virtual Reality (VR) is no longer a concept of the future—it's a reality reshaping how we interact, work, and entertain ourselves. Our cutting-edge hardware pushes the boundaries of latency and resolution.",
        image: "/images/ar-vr/neovision-helmet.png",
        date: "08 February 2025",
        author: "Henry Leonardo"
    },
    {
        id: "technology",
        label: "Technology",
        title: "Next-Gen Haptics and Neural Interfaces",
        description: "Feel the virtual world as if it were real. Our proprietary haptic feedback suits and neural link interfaces provide a level of immersion previously thought impossible.",
        image: "/images/ar-vr/service-drone.png",
        date: "12 February 2025",
        author: "Sarah Chen"
    },
    {
        id: "experience",
        label: "Experience",
        title: "Seamless Worlds Without Boundaries",
        description: "Step into persistent universes that evolve even when you're offline. Connect with millions of users in a single, shared digital expanse.",
        image: "/images/ar-vr/service-vr.png",
        date: "15 February 2025",
        author: "David Miller"
    }
];

export default function LimitlessPossibilitiesSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="bg-black text-white py-32 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Main Heading */}
                <h2 className="text-5xl md:text-7xl font-sans tracking-tight mb-24 max-w-4xl leading-tight">
                    LIMITLESS POSSIBILITIES <br />
                    WITH NEOVISION
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_400px] gap-12 lg:gap-24 items-start">

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-8 pt-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`text-left text-lg md:text-xl font-medium transition-colors duration-300 ${activeTab.id === tab.id
                                        ? "text-white"
                                        : "text-gray-600 hover:text-gray-400"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Center Image Area */}
                    <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-white/5">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab.id}
                                src={activeTab.image}
                                alt={activeTab.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col justify-between h-full pt-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <h3 className="text-3xl md:text-4xl leading-tight font-light mb-6">
                                    {activeTab.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {activeTab.description}
                                </p>

                                <button className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group mb-12">
                                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex items-center justify-between text-xs font-mono text-gray-500 uppercase tracking-widest pt-12 border-t border-white/10">
                                    <span>{activeTab.date}</span>
                                    <span>{activeTab.author}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
