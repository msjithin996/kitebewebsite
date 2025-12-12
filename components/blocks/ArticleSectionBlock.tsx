"use client";

import { motion } from "framer-motion";

export interface ArticleSectionBlockStyle {
    titleColor?: string;
    textColor?: string;
    backgroundColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
}

export interface ArticleSectionBlockProps {
    title: string;
    content: string; // HTML from RichTextEditor
    style?: ArticleSectionBlockStyle;
}

export default function ArticleSectionBlock({ title, content, style }: ArticleSectionBlockProps) {
    const {
        titleColor = "#FFFFFF",
        textColor = "#CCCCCC",
        backgroundColor = "transparent",
        paddingTop = "4rem",
        paddingBottom = "4rem",
    } = style || {};

    return (
        <section
            className="w-full"
            style={{
                backgroundColor,
                paddingTop,
                paddingBottom
            }}
        >
            <div className="max-w-3xl mx-auto px-6">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 tracking-tight"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </motion.h2>
                )}

                <div
                    className="prose prose-invert prose-lg max-w-none leading-relaxed"
                    style={{ color: textColor }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
}
