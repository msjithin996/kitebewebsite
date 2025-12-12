"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const cards = [
    {
        id: 1,
        title: "Discovery & Problem Solving",
        description: "We bring together research from markets, stakeholders and customers to turn an organisations problems into opportunities. Our deep dive into data and user behavior ensures we're solving the right problems.",
        icon: "/icons/discovery.png",
        imageSmall: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop", // Meeting/Discovery
        imageBig: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop", // Team working
        bg: "bg-[#F5F5F7]", // Light Gray
        text: "text-black",
        accent: "bg-black text-white"
    },
    {
        id: 2,
        title: "Validating Ideas & Service Propositions",
        description: "Our human-centric design approach involves testing propositions and solutions with customers to make good ideas even better. We validate assumptions early to ensure the organisation invests in the right product roadmap.",
        icon: "/icons/validation.png",
        imageSmall: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2940&auto=format&fit=crop", // Prototyping/Design
        imageBig: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2725&auto=format&fit=crop", // Design workshop
        bg: "bg-[#e1f549]", // Lime Green/Yellow
        text: "text-black",
        accent: "bg-black text-white"
    },
    {
        id: 3,
        title: "Agile Engineering",
        description: "Whether our technologists are working as consultants or as an engineering team in our studio, our multi-disciplinary approach ensures the design intent is realised throughout the delivery lifecycle with robust, scalable code.",
        icon: "/icons/engineering.png",
        imageSmall: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop", // Coding/Matrix
        imageBig: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop", // Coding laptop
        bg: "bg-[#a8f489]", // Light Green
        text: "text-black",
        accent: "bg-black text-white"
    },
    {
        id: 4,
        title: "Growth & Ongoing Support",
        description: "Our partnership doesn't end at launch. We provide continuous data monitoring, iterative improvements, and support to ensure your product scales and evolves with your business needs.",
        icon: "/icons/growth.png",
        imageSmall: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop", // Analytics/Data
        imageBig: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Growth/Graph
        bg: "bg-[#056e5b]", // Dark Teal
        text: "text-white",
        accent: "bg-white text-black"
    },
];

export default function VerticalScrollCards() {
    // We'll create a tall container to allow scrolling
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0); // Start with first card active

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map scroll progress to card index
        const index = Math.min(Math.floor(latest * cards.length), cards.length - 1);
        setActiveIndex(index);
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-neutral-950">
            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col bg-white overflow-hidden">

                {/* Header Section - Split Layout (Compact) */}
                <div className="shrink-0 py-4 lg:py-6 bg-white z-10 border-b border-black/5">
                    <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-6 lg:gap-10 items-end">
                        <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight text-black flex-1">
                            Our comprehensive approach to digital transformation.
                        </h2>
                        <div className="flex-1 lg:max-w-md pb-1">
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                From initial discovery to final delivery, we ensure every step creates value for your business.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Accordion Container - Full Width */}
                <div className="flex-1 flex flex-col w-full h-full min-h-0">
                    {cards.map((card, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={card.id}
                                className={`relative w-full overflow-hidden transition-colors duration-500 ease-in-out ${card.bg} ${card.text} min-h-[60px] md:min-h-[80px]`}
                                animate={{
                                    flex: isActive ? 10 : 1,
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <div className="h-full flex flex-col relative">
                                    {/* Header / Clickable Area */}
                                    <div className={`py-3 md:py-5 cursor-pointer ${isActive ? 'border-b border-black/5' : ''}`}>
                                        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center gap-4 md:gap-6">
                                            <div className="w-8 h-8 md:w-10 md:h-10 relative shrink-0">
                                                <Image src={card.icon} alt="" fill className="object-contain" />
                                            </div>
                                            <h3 className="text-lg md:text-2xl font-medium whitespace-nowrap truncate">{card.title}</h3>
                                        </div>
                                    </div>

                                    {/* Body Content */}
                                    <motion.div
                                        className="flex-1 py-4 md:py-8 overflow-hidden"
                                        animate={{ opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                    >
                                        <div className="container mx-auto px-4 md:px-8 lg:px-12 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                            {/* Left: Text & Button */}
                                            <div className="max-w-xl h-full flex flex-col justify-center">
                                                <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-10 line-clamp-4 md:line-clamp-none">
                                                    {card.description}
                                                </p>

                                                <button className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-105 shrink-0 ${card.accent}`}>
                                                    <svg className="w-5 h-5 md:w-6 md:h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Right: Images */}
                                            <div className="relative h-[200px] md:h-full w-full min-h-[200px] hidden md:block">
                                                <div className="absolute top-0 right-0 w-[60%] h-[90%] z-0">
                                                    <Image src={card.imageBig} alt="" fill className="object-cover rounded-lg shadow-xl" />
                                                </div>
                                                <div className="absolute bottom-4 left-4 lg:left-10 w-[45%] h-[60%] z-10">
                                                    <Image src={card.imageSmall} alt="" fill className="object-cover rounded-lg shadow-2xl border-4 border-white/10" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Card({ card, index, total }: { card: typeof cards[0], index: number, total: number }) {
    // This sub-component is deprecated in favor of the implementation above
    return null;
}
