"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

interface TooltipWord {
    text: string;
    color: string;
    title: string;
    description: string;
}

type WordItem =
    | { type: "text"; text: string }
    | { type: "tooltip"; text: string; color: string; title: string; description: string };

const gradient = "linear-gradient(90deg, #e1f549, #c6f56e, #a8f489, #85f39f, #57f1b3, #16edc2, #33e5c9, #44ddd0, #50d5d6, #5acddc, #62c4e2, #69bce8, #7eb0ec, #95a1ef, #a892f2, #b781f4, #c776e4, #da72ba, #ec698d, #ff5959)";

const tooltipWords: TooltipWord[] = [
    {
        text: "innovative",
        color: "#4ADE80",
        title: "Innovative Concepts",
        description: "Pioneering new ways to visualize information and engage audiences with creative display solutions."
    },
    {
        text: "break-through",
        color: "#60A5FA",
        title: "Break-through Technology",
        description: "Cutting-edge hardware and software solutions that push the boundaries of what's possible."
    },
    {
        text: "natural user",
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

const AnimatedWord = ({
    item,
    index,
    total,
    scrollYProgress,
    activeTooltip,
    onMouseEnter,
    onMouseLeave
}: {
    item: WordItem;
    index: number;
    total: number;
    scrollYProgress: any;
    activeTooltip: string | null;
    onMouseEnter: (text: string) => void;
    onMouseLeave: () => void;
}) => {
    // Determine opacity based on index
    const start = index / total;
    const end = start + (1 / total);
    // Move hooks to top level of this component
    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

    if (item.type === "text") {
        return (
            <motion.span
                style={{ opacity }}
                className="text-[#4b5563]"
            >
                {item.text}
            </motion.span>
        );
    }

    const isActive = activeTooltip === item.text;
    return (
        <motion.span
            style={{ opacity }}
            className="relative inline-block group"
        >
            <span
                onMouseEnter={() => onMouseEnter(item.text)}
                onMouseLeave={onMouseLeave}
                className="cursor-pointer transition-opacity duration-200 hover:opacity-80 inline"
                style={{
                    backgroundImage: gradient,
                    backgroundAttachment: "fixed",
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
                    className="absolute z-50 bottom-full left-1/2 mb-3 w-[280px] p-5 bg-[#1a1a1a] border border-[#333] text-white rounded-[4px] shadow-2xl"
                    style={{ pointerEvents: 'none' }}
                >
                    <span className="font-bold text-xs uppercase tracking-widest mb-2 block font-sans tracking-normal text-left" style={{ color: "#85f39f" }}>
                        {item.title}
                    </span>
                    <span className="text-sm text-[#ddd] leading-[1.4] block font-sans font-normal text-left tracking-normal">
                        {item.description}
                    </span>
                </motion.div>
            )}
        </motion.span>
    );
};

export default function Expertise() {
    const containerRef = useRef(null);
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.5", "end 0.6"],
    });

    const handleMouseEnter = (word: string) => setActiveTooltip(word);
    const handleMouseLeave = () => setActiveTooltip(null);

    type Segment =
        | { type: "text"; value: string; word?: undefined }
        | { type: "tooltip"; word: TooltipWord; value?: undefined };

    const rawSegments: Segment[] = [
        { type: "text", value: "We employ an expert combination of " },
        { type: "tooltip", word: tooltipWords[0] }, // innovative
        { type: "text", value: " concepts of display, " },
        { type: "tooltip", word: tooltipWords[1] }, // break-through
        { type: "text", value: " technology, " },
        { type: "tooltip", word: tooltipWords[2] }, // natural user
        { type: "text", value: " interfaces, and " },
        { type: "tooltip", word: tooltipWords[3] }, // interactivity
        { type: "text", value: " of gesture and motion to ensure that we are primed for varied needs and demands." },
    ];

    const words: WordItem[] = rawSegments.flatMap(segment => {
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
        <section ref={containerRef} className="relative bg-[#1C1C1C] text-white px-6 md:px-20 lg:px-40">
            <div className="container mx-auto relative flex justify-between gap-12">
                {/* Text Content - Scrolls naturally */}
                <div className="max-w-5xl w-full py-32 md:py-40">
                    <div className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-wrap gap-x-[0.25em] gap-y-2 font-serif"
                        style={{ fontFamily: '"ITC Clearface", "Times New Roman", serif' }}>
                        {words.map((item, i) => (
                            <AnimatedWord
                                key={i}
                                item={item}
                                index={i}
                                total={words.length}
                                scrollYProgress={scrollYProgress}
                                activeTooltip={activeTooltip}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </div>
                </div>

                {/* Moving Arrow Indicator - Sticky Sidebar */}
                <div className="hidden md:flex flex-col items-center justify-center h-screen sticky top-0 flex-shrink-0">
                    <div className="h-[60vh] w-px bg-white/20 relative overflow-hidden">
                        <motion.div
                            style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            className="absolute left-1/2 -translate-x-1/2 w-auto h-auto text-white"
                        >
                            <ArrowDown className="w-6 h-6" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
