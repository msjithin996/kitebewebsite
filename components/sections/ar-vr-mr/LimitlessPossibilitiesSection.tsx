"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const tabs = [
    {
        id: "strategy",
        label: "Strategy",
        title: "Strategic Immersive Consulting",
        description: "We define the roadmap for your spatial computing journey. Our experts analyze use cases, tech feasibility, and ROI to ensure your immersive initiatives align with business goals.",
        image: "/images/ar-vr/limitless-strategy-real.png",
        date: "01",
        author: "Consulting"
    },
    {
        id: "development",
        label: "Development",
        title: "High-Fidelity Engineering",
        description: "Our diverse team of engineers builds robust, scalable AR/VR applications using top-tier engines. We focus on performance optimization to deliver butter-smooth experiences on any hardware.",
        image: "/images/ar-vr/limitless-development-real.png",
        date: "02",
        author: "Engineering"
    },
    {
        id: "deployment",
        label: "Deployment",
        title: "Enterprise Scale Integration",
        description: "We ensure seamless integration of immersive solutions into your existing IT infrastructure. From MDM setup to security protocols, we handle full-scale deployment.",
        image: "/images/ar-vr/limitless-deployment.png",
        date: "03",
        author: "Operations"
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
                    WITH IMMERSIVE TECH
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
