"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProductFeatureBlockProps {
    title: string;
    description: string;
    imageUrl: string;
    reversed?: boolean;
    buttonText?: string;
    buttonLink?: string;
}

export default function ProductFeatureBlock({ title, description, imageUrl, reversed = false, buttonText, buttonLink }: ProductFeatureBlockProps) {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square md:aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-white/5"
                        >
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                {title}
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-8" />
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                                {description}
                            </p>

                            {buttonText && buttonLink && (
                                <a
                                    href={buttonLink}
                                    className="inline-block text-white border-b border-white pb-1 text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                                >
                                    {buttonText}
                                </a>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
