"use client";

import { motion } from "framer-motion";

export interface IntroBlockStyle {
    titleColor?: string;
    textColor?: string;
    backgroundColor?: string;
}

export interface IntroBlockProps {
    title: string;
    description: string;
    metadata: { label: string; value: string }[];
    style?: IntroBlockStyle;
}

export default function IntroBlock({ title, description, metadata, style }: IntroBlockProps) {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32"
            style={{ backgroundColor: style?.backgroundColor || "transparent" }}
        >
            <div className="flex flex-col justify-end">
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                    {metadata.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-xs uppercase tracking-widest text-[#888] mb-4">{item.label}:</h3>
                            <p
                                className="text-lg font-medium"
                                style={{ color: style?.titleColor || "#FFFFFF" }}
                            >
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:pt-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl leading-relaxed font-light"
                    style={{ color: style?.textColor || "#CCCCCC" }}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}

