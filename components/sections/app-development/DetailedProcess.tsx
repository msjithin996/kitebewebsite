"use client";

import { motion } from "framer-motion";
import { Hexagon, Search, Lightbulb } from "lucide-react";

export default function DetailedProcess() {
    const steps = [
        {
            icon: <Hexagon className="w-6 h-6 text-[#ef4444]" />,
            title: "Strategy",
            desc: "We studied standard music apps and found a lack of interactivity. Our goal: create an immersive, AI-powered player beyond basic controls.",
            tags: ["Identify Problem", "Set Goals", "User Needs", "Competitor Analysis", "Journey Mapping"]
        },
        {
            icon: <Search className="w-6 h-6 text-[#ef4444]" />,
            title: "Discovery",
            desc: "Through prototyping, we prioritized three innovations—a 3D audio sphere, real-time stem splitting, and voice/hum search.",
            tags: ["Ideation", "Sketching", "Feature", "Branding", "Inspiration"]
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-[#ef4444]" />,
            title: "Solution",
            desc: "The result is Nebula: featuring spatial sound control, instant instrument isolation, and intelligent search, all wrapped in a cohesive visual identity.",
            tags: ["Core Features", "Wireframing", "UI Design", "Prototyping", "Iteration"]
        }
    ];

    return (
        <section className="bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="container mx-auto max-w-6xl">

                {/* Header Row */}
                <div className="flex justify-between items-start mb-20 text-sm md:text-base text-gray-500 font-medium">
                    <div>
                        <span className="block mb-1">02 /</span>
                        <span>The Process</span>
                    </div>
                    <div className="text-right">
                        <span className="block mb-1">4 Weeks of</span>
                        <span>twisting and turning</span>
                    </div>
                </div>

                {/* Steps List */}
                <div className="flex flex-col">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group flex flex-col lg:flex-row gap-10 lg:gap-20 py-16 border-t border-white/10 first:border-0"
                        >
                            {/* Icon Column */}
                            <div className="shrink-0">
                                <div className="w-16 h-16 rounded-full bg-[#111] border border-white/5 flex items-center justify-center group-hover:border-[#ef4444]/30 transition-colors duration-300">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:w-1/2">
                                <h3 className="text-4xl md:text-5xl font-medium mb-6">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Tags Column */}
                            <div className="lg:w-1/2 flex items-start lg:justify-end">
                                <div className="flex flex-wrap gap-3 lg:justify-end max-w-md">
                                    {step.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-5 py-2.5 rounded-full bg-[#1a1a1a] text-sm text-gray-300 border border-white/5 hover:bg-[#222] hover:border-white/10 transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Border */}
                <div className="w-full h-px bg-white/10 mt-4" />

            </div>
        </section>
    );
}
