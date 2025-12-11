"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TwoColumnTextBlockProps {
    title: string;
    content: string;
    buttonText?: string;
    buttonLink?: string;
}

export default function TwoColumnTextBlock({ title, content, buttonText, buttonLink }: TwoColumnTextBlockProps) {
    return (
        <section className="py-24 bg-[#111] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Left Column - Sticky Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-medium text-white mb-8"
                        >
                            {title}
                        </motion.h2>

                        {buttonText && buttonLink && (
                            <Link
                                href={buttonLink}
                                className="inline-flex items-center gap-2 text-white border-b border-white pb-1 group hover:opacity-80 transition-opacity"
                            >
                                {buttonText}
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 lg:col-start-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-invert prose-lg max-w-none text-gray-400"
                        >
                            {content.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
