"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";

interface CaseStudy {
    category: string;
    title: string;
    date: string;
    link: string;
}

const caseStudies: CaseStudy[] = [
    {
        category: "AR/VR Solutions",
        title: "Immersive training simulation for aviation maintenance",
        date: "15.11.2024",
        link: "/research/ar-vr-mr",
    },
    {
        category: "App Development",
        title: "Enterprise mobile application for logistics management",
        date: "28.10.2024",
        link: "/research/app-development",
    },
    {
        category: "AI Consultancy",
        title: "AI-powered predictive analytics platform implementation",
        date: "12.09.2024",
        link: "/research/ai-consultancy",
    },
    {
        category: "UI/UX Design",
        title: "Complete brand redesign for leading fintech startup",
        date: "05.08.2024",
        link: "/research/ui-ux-design",
    },
    {
        category: "Web Development",
        title: "High-performance e-commerce platform with custom CMS",
        date: "22.07.2024",
        link: "/research/web-development",
    },
];

export default function CaseStudies() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -380 : 380;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(updateScrollButtons, 300);
        }
    };

    return (
        <section className="pt-8 pb-24 px-6 md:px-20 lg:px-40 bg-white overflow-hidden">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl tracking-tight"
                    >
                        <span className="font-serif italic font-normal text-black">Our</span>{" "}
                        <span className="font-bold text-black">research studies</span>
                    </motion.h2>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                                ? "border-[#0d3028] text-[#0d3028] hover:bg-[#0d3028] hover:text-white"
                                : "border-gray-300 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                                ? "border-[#0d3028] text-[#0d3028] hover:bg-[#0d3028] hover:text-white"
                                : "border-gray-300 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={updateScrollButtons}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="min-w-[280px] md:min-w-[320px] snap-start"
                        >
                            <Link href={study.link} className="block group">
                                <div className="bg-[#0d3028] hover:bg-[#0f3a30] rounded-2xl p-6 h-[280px] flex flex-col justify-between transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/20">
                                    {/* Category Tag */}
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#1a4a40] text-[#8BC4B0] text-xs rounded-full mb-4">
                                            {study.category}
                                        </span>
                                        <h3 className="text-white text-lg font-medium leading-snug">
                                            {study.title}
                                        </h3>
                                    </div>

                                    {/* Bottom: Date + Arrow */}
                                    <div className="flex items-end justify-between mt-auto pt-6">
                                        <span className="text-[#8BC4B0]/70 text-sm">{study.date}</span>
                                        <div className="w-10 h-10 rounded-full bg-[#1a4a40] flex items-center justify-center text-[#8BC4B0] group-hover:bg-[#8BC4B0] group-hover:text-[#0d3028] transition-colors">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
