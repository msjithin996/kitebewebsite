"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Expertise() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.5", "end 0.6"],
    });

    const segments = [
        { text: "We employ an expert combination of ", type: "text" },
        { text: "innovative concepts ", type: "highlight" },
        { text: "of ", type: "text" },
        { text: "display, ", type: "highlight" },
        { text: "break-through technology, ", type: "highlight" },
        { text: "natural user interfaces, and ", type: "highlight" },
        { text: "interactivity of gesture ", type: "highlight" },
        { text: "and ", type: "text" },
        { text: "motion ", type: "highlight" },
        { text: "to ensure that we are primed for varied needs and demands.", type: "text" }
    ];

    const words = segments.flatMap((segment) =>
        segment.text.split(" ").filter(Boolean).map(word => ({ ...segment, word }))
    );

    return (
        <section ref={containerRef} className="relative bg-[#1C1C1C] text-white px-6 md:px-20 lg:px-40">
            <div className="container mx-auto relative flex justify-between gap-12">
                {/* Text Content - Scrolls naturally */}
                <div className="max-w-5xl w-full py-32 md:py-40">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight flex flex-wrap gap-x-[0.25em] gap-y-2">
                        {words.map((item, i) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const start = i / words.length;
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const end = start + (1 / words.length);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                            return (
                                <motion.span
                                    key={i}
                                    style={{ opacity }}
                                    className={item.type === "highlight"
                                        ? "text-white"
                                        : "text-[#4b5563]"}
                                >
                                    {item.word}
                                </motion.span>
                            );
                        })}
                    </h2>
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
