"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Sample Data derived from visual inspection of the uploaded image
const projects = [
    {
        id: 1,
        title: "Future Focused Studio",
        category: "MAGAZINE, UX",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200", // Placeholder dark UI
        bgColor: "bg-[#2A2A2A]",
    },
    {
        id: 2,
        title: "Reach Your Astrologer",
        category: "MAGAZINE, UX",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200", // Placeholder app UI
        bgColor: "bg-[#1E1E2E]",
    },
    {
        id: 3,
        title: "Creative Pulse Rising",
        category: "MAGAZINE, PRODUCT",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", // Placeholder dashboard UI
        bgColor: "bg-[#111111]",
    },
    {
        id: 4,
        title: "Visionary Platforms",
        category: "BRANDING, IDENTITY",
        imageUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200", // Placeholder space/dark bg
        bgColor: "bg-[#0F172A]",
    }
];

export default function HorizontalProjectGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex items-center h-screen overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-10 md:px-40">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative h-[60vh] w-[80vw] md:w-[60vw] lg:w-[45vw] shrink-0 rounded-3xl overflow-hidden ${project.bgColor} group`}
                        >
                            {/* Inner Image Container */}
                            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <p className="text-gray-400 text-xs md:text-sm tracking-widest uppercase mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl md:text-4xl text-white font-medium">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                </div>
            </div>
        </section>
    );
}
