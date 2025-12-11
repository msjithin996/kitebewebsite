"use client";

import { motion } from "framer-motion";

export interface ImpactTextBlockProps {
    content: string;
    highlightSubstring?: string;
}

export default function ImpactTextBlock({ content, highlightSubstring }: ImpactTextBlockProps) {
    // Basic highlighting logic
    const parts = highlightSubstring ? content.split(highlightSubstring) : [content];

    return (
        <section className="py-32 bg-white text-black">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight"
                >
                    {highlightSubstring ? (
                        <>
                            {parts[0]}
                            <span className="text-gray-400 transition-colors hover:text-black duration-500 cursor-default">
                                {highlightSubstring}
                            </span>
                            {parts[1]}
                        </>
                    ) : (
                        content
                    )}
                </motion.div>
            </div>
        </section>
    );
}
