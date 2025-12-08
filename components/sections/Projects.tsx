"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "AR/VR/MR",
        image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2670&auto=format&fit=crop",
        link: "/projects/ar-vr-mr"
    },
    {
        id: 2,
        title: "APP DEVELOPMENT",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
        link: "/projects/app-development"
    },
    {
        id: 3,
        title: "WEB DEVELOPMENT",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        link: "/projects/web-development"
    },
    {
        id: 4,
        title: "UI/UX DESIGN",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        link: "/projects/ui-ux-design"
    },
    {
        id: 5,
        title: "AI CONSULTANCY",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        link: "/projects/ai-consultancy"
    },
];

export default function Projects() {
    const scrollRef = useRef(null);

    return (
        <section className="pt-0 pb-20 bg-[#1C1C1C] text-white overflow-hidden">

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pl-6 md:pl-20 lg:pl-40 pr-0 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex-shrink-0 w-[85vw] md:w-[600px] aspect-[16/10] snap-center group cursor-pointer overflow-hidden rounded-sm"
                    >
                        <Link href={project.link} className="block w-full h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Custom Scrollbar/Indicators could go here if needed */}
            <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="w-2 h-2 bg-white/20 rounded-full" />
                <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
        </section>
    );
}
