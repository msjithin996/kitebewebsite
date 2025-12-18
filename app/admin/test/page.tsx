"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalProjectGallery from "@/components/sections/HorizontalProjectGallery";
import HowWeHelp from "@/components/sections/HowWeHelp";
import NewsGrid from "@/components/sections/NewsGrid";

export default function AdminTestPage() {
    return (
        <div className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">

            {/* Featured Section: Merged Scroll Reveal & Tooltips */}
            <ScrollRevealTooltipSection />

            {/* Standard Container Components */}
            <div className="pt-16 pb-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-1">Component Playground</h1>
                        <p className="text-gray-400 text-sm">Environment for testing code snippets and components.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* SECTION 0: Quick Links */}
                    <TestSection title="0. Quick Links" description="Shortcuts to new templates and pages.">
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/projects/template"
                                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white font-mono text-xs border border-white/10 inline-flex items-center gap-2"
                            >
                                <span>↗</span> Standard Product Template
                            </Link>
                            <Link
                                href="/products/atr72-600-flight-simulation"
                                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white font-mono text-xs border border-white/10 inline-flex items-center gap-2"
                            >
                                <span>↗</span> Flight Simulation
                            </Link>
                            <Link
                                href="/products/talktribe"
                                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white font-mono text-xs border border-white/10 inline-flex items-center gap-2"
                            >
                                <span>↗</span> TalkTribe
                            </Link>
                        </div>
                    </TestSection>

                    {/* SECTION 1: Example Snippet Area */}
                    <TestSection title="1. Test Snippet Area" description="A blank canvas for testing new UI elements.">
                        <div className="p-8 border border-dashed border-white/20 rounded-xl flex items-center justify-center bg-white/5 h-full min-h-[120px]">
                            <p className="text-gray-500 text-sm">Your test code goes here...</p>
                        </div>
                    </TestSection>

                    {/* SECTION 2: Typography Test */}
                    <TestSection title="2. Typography Check" description="Verifying font weights and headings.">
                        <div className="space-y-2 p-6 bg-[#111] rounded-xl border border-white/10">
                            <h1 className="text-3xl font-bold">Heading 1</h1>
                            <h2 className="text-2xl font-bold">Heading 2</h2>
                            <h3 className="text-xl font-medium">Heading 3</h3>
                            <p className="text-sm text-gray-400">Regular paragraph text with standard leading.</p>
                        </div>
                    </TestSection>

                    {/* SECTION 3: Animation Test */}
                    <TestSection title="3. Animation Sandbox" description="Testing hover effects and transitions.">
                        <div className="grid grid-cols-4 gap-2">
                            <div className="h-16 bg-blue-500 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center text-xs">Hover</div>
                            <div className="h-16 bg-purple-500 rounded-lg hover:rotate-3 transition-transform duration-300 cursor-pointer flex items-center justify-center text-xs">Tilt</div>
                            <div className="h-16 bg-green-500 rounded-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow duration-300 cursor-pointer flex items-center justify-center text-xs">Glow</div>
                            <div className="h-16 bg-red-500 rounded-lg hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer flex items-center justify-center text-xs">Lift</div>
                        </div>
                    </TestSection>
                </div>

                {/* SECTION 4: Scroll Reveal Animation (Full Width) */}
                <TestSection title="4. Scroll Reveal Animation" description="Scroll-driven text opacity reveal.">
                    <div className="py-10">
                        <ScrollRevealText />
                    </div>
                </TestSection>
            </div>

            {/* Full Width Sections */}
            <div className="space-y-12 pb-12">
                {/* SECTION 5: Horizontal Gallery Scroll */}
                <div>
                    <div className="px-6 md:px-12 w-full max-w-7xl mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">5. Horizontal Gallery Scroll</h2>
                            <p className="text-gray-500 text-sm font-mono">Sticky horizontal scroll gallery inspired by standard pinned scrolling effects.</p>
                        </div>
                    </div>
                    <HorizontalProjectGallery />
                </div>



                {/* SECTION 7: How We Help Our Clients */}
                <div>
                    <div className="px-6 md:px-12 w-full max-w-7xl mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">7. How We Help Our Clients</h2>
                            <p className="text-gray-500 text-sm font-mono">Service offerings section with grid layout.</p>
                        </div>
                    </div>
                    <HowWeHelp />
                </div>

                {/* SECTION 8: News & NGOs Layout */}
                <div>
                    <div className="px-6 md:px-12 w-full max-w-7xl mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">8. News & NGOs Layout</h2>
                            <p className="text-gray-500 text-sm font-mono">Grid layout for NGOs and news items.</p>
                        </div>
                    </div>
                    <NewsGrid />
                </div>


            </div>
        </div>
    );
}

// Scroll-driven text reveal component
function ScrollRevealText() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const segments = [
        { text: "Our mission is to ", type: "text" },
        { text: "blend creativity ", type: "link", href: "#" },
        { text: "with ", type: "text" },
        { text: "technology", type: "link", href: "#" },
        { text: ", delivering exceptional results that elevate your brand and ", type: "text" },
        { text: "connect ", type: "link", href: "#" },
        { text: "you with your audience.", type: "text" }
    ];

    // Create a flat array of words to animate individually
    const words = segments.flatMap((segment) =>
        segment.text.split(" ").map(word => ({ ...segment, word }))
    );

    return (
        <div ref={containerRef} className="flex flex-col items-center text-center">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">passion showcases</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            </div>

            {/* Main Text */}
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] max-w-5xl mx-auto flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
                {words.map((item, i) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const start = i / words.length;
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const end = start + (1 / words.length);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                    if (!item.word) return null;

                    return (
                        <motion.span
                            key={i}
                            style={{ opacity }}
                            className={item.type === "link"
                                ? "text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
                                : "text-[#d1d5dc]"}
                        >
                            {item.word}
                        </motion.span>
                    );
                })}
            </h3>
        </div>
    );
}

// Helper Component for consistent section styling
function TestSection({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return (
        <section className="border-l-2 border-white/20 pl-8 py-2">
            <h2 className="text-2xl font-mono mb-2">{title}</h2>
            <p className="text-gray-500 mb-6 text-sm font-mono">{description}</p>
            <div>
                {children}
            </div>
        </section>
    );
}

// Tooltip Text Block Component - Interactive text with colored tooltips
interface TooltipWord {
    text: string;
    color: string;
    title: string;
    description: string;
}

const gradient = "linear-gradient(90deg, #e1f549, #c6f56e, #a8f489, #85f39f, #57f1b3, #16edc2, #33e5c9, #44ddd0, #50d5d6, #5acddc, #62c4e2, #69bce8, #7eb0ec, #95a1ef, #a892f2, #b781f4, #c776e4, #da72ba, #ec698d, #ff5959)";

const tooltipWords: TooltipWord[] = [
    {
        text: "innovative concepts",
        color: "#4ADE80",
        title: "Innovative Concepts",
        description: "Pioneering new ways to visualize information and engage audiences with creative display solutions."
    },
    {
        text: "break-through technology",
        color: "#60A5FA",
        title: "Break-through Technology",
        description: "Cutting-edge hardware and software solutions that push the boundaries of what's possible."
    },
    {
        text: "natural user interfaces",
        color: "#F87171",
        title: "NUI",
        description: "Touchless and intuitive control systems that feel magical and respond to human intent."
    },
    {
        text: "interactivity",
        color: "#FACC15",
        title: "Interactivity",
        description: "Deep engagement through gesture, motion, and touch, transforming passive viewing into active participation."
    }
];

function ScrollRevealTooltipSection() {
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    const handleMouseEnter = (word: string) => setActiveTooltip(word);
    const handleMouseLeave = () => setActiveTooltip(null);

    // Prepare content
    const normalizedRawSegments: { type: "text" | "tooltip"; value?: string; word?: TooltipWord }[] = [
        { type: "text", value: "We employ an expert combination of " },
        { type: "tooltip", word: tooltipWords[0] }, // innovative concepts
        { type: "text", value: " of display, " },
        { type: "tooltip", word: tooltipWords[1] }, // break-through technology
        { type: "text", value: ", " },
        { type: "tooltip", word: tooltipWords[2] }, // natural user interfaces
        { type: "text", value: ", and " },
        { type: "tooltip", word: tooltipWords[3] }, // interactivity
        { type: "text", value: " of gesture and motion to ensure that we are primed for varied needs and demands." },
    ];

    type WordItem =
        | { type: "text"; text: string }
        | { type: "tooltip"; text: string; color: string; title: string; description: string };

    const words: WordItem[] = normalizedRawSegments.flatMap(segment => {
        if (segment.type === "tooltip" && segment.word) {
            const item: WordItem = { type: "tooltip", ...segment.word };
            return [item];
        }
        if (segment.type === "text" && segment.value) {
            return segment.value.split(/(\s+)/).map(s => ({ type: "text", text: s } as WordItem));
        }
        return [];
    }).filter((w): w is WordItem => w.text !== "" && w.text !== undefined);

    return (
        <section className="bg-black py-24 px-6 md:px-12 w-full flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-[900px] mx-auto text-center">
                {/* Section Label */}
                <h3 className="text-sm font-normal uppercase tracking-[0.05em] text-[#cccccc] mb-8 font-sans">
                    Who We Are
                </h3>

                {/* Main Text */}
                <div className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] text-white font-serif flex flex-wrap justify-center gap-x-[0.25em] gap-y-2"
                    style={{ fontFamily: '"ITC Clearface", "Times New Roman", serif' }}>

                    {words.map((item, i) => (
                        <AnimatedWord
                            key={i}
                            item={item}
                            index={i}
                            activeTooltip={activeTooltip}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-[50px]">
                    <a
                        href="#"
                        className="inline-block px-7 py-[14px] border border-white text-white text-[13px] font-semibold uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors duration-300 no-underline font-sans"
                    >
                        Get Involved
                    </a>
                </div>
            </div>
        </section>
    );
}

// Extracted Component
const AnimatedWord = ({
    item,
    index,
    activeTooltip,
    onMouseEnter,
    onMouseLeave
}: {
    item: { type: "text"; text: string } | { type: "tooltip"; text: string; color: string; title: string; description: string };
    index: number;
    activeTooltip: string | null;
    onMouseEnter: (text: string) => void;
    onMouseLeave: () => void;
}) => {
    // Simple fade-in effect on mount/view
    const isText = item.type === "text";

    if (isText) {
        return (
            <motion.span
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.01 }}
            >
                {item.text}
            </motion.span>
        );
    }

    const isActive = activeTooltip === item.text;
    return (
        <motion.span
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.01 }}
            className="relative inline-block group"
        >
            <span
                onMouseEnter={() => onMouseEnter(item.text)}
                onMouseLeave={onMouseLeave}
                className="cursor-pointer transition-opacity duration-200 hover:opacity-80 inline"
                style={{
                    backgroundImage: gradient,
                    backgroundAttachment: "fixed", // Keep cool gradient effect
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                }}
            >
                {item.text}
            </span>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                    className="absolute z-50 bottom-full left-1/2 mb-3 w-[280px] p-5 bg-[#1a1a1a] border border-[#333] text-white rounded-[4px] shadow-2xl text-left"
                    style={{ pointerEvents: 'none' }}
                >
                    <span className="font-bold text-xs uppercase tracking-widest mb-2 block font-sans" style={{ color: "#85f39f" }}>
                        {item.title}
                    </span>
                    <span className="text-sm text-[#ddd] leading-[1.4] block font-sans font-normal">
                        {item.description}
                    </span>
                </motion.div>
            )}
        </motion.span>
    );
};
