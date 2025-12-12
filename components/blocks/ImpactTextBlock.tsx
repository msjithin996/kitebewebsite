"use client";

import { motion } from "framer-motion";

export interface ImpactTextBlockStyle {
    textColor?: string;
    highlightColor?: string;
    backgroundColor?: string;
    textAlign?: "left" | "center" | "right";
    paddingTop?: string;
    paddingBottom?: string;
}

export interface ImpactTextBlockProps {
    content: string;
    highlightSubstring?: string;
    style?: ImpactTextBlockStyle;
}

export default function ImpactTextBlock({ content, highlightSubstring, style }: ImpactTextBlockProps) {
    // Basic highlighting logic
    const parts = highlightSubstring ? content.split(highlightSubstring) : [content];

    return (
        <section
            className="text-black"
            style={{
                backgroundColor: style?.backgroundColor || "#FFFFFF",
                paddingTop: style?.paddingTop || "8rem",
                paddingBottom: style?.paddingBottom || "8rem",
            }}
        >
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight"
                    style={{
                        color: style?.textColor || "#000000",
                        textAlign: style?.textAlign || "left",
                    }}
                >
                    {highlightSubstring ? (
                        <>
                            {parts[0]}
                            <span
                                className="transition-colors hover:opacity-80 duration-500 cursor-default"
                                style={{ color: style?.highlightColor || "#9CA3AF" }}
                            >
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

