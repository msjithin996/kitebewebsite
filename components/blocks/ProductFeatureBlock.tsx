"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ProductFeatureBlockStyle {
    titleColor?: string;
    textColor?: string;
    backgroundColor?: string;
    buttonColor?: string;
    imageObjectFit?: string;
    imageObjectPosition?: string;
    imageSize?: string;
}

export interface ProductFeatureBlockProps {
    title: string;
    description: string;
    imageUrl: string;
    reversed?: boolean;
    buttonText?: string;
    buttonLink?: string;
    style?: ProductFeatureBlockStyle;
}

export default function ProductFeatureBlock({ title, description, imageUrl, reversed = false, buttonText, buttonLink, style }: ProductFeatureBlockProps) {
    return (
        <section
            className="py-20 overflow-hidden"
            style={{ backgroundColor: style?.backgroundColor || "transparent" }}
        >
            <div className="container mx-auto px-6">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-white/5 mx-auto"
                            style={{ width: style?.imageSize || "100%" }}
                        >
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    fill
                                    style={{
                                        objectFit: (style?.imageObjectFit as any) || "cover",
                                        objectPosition: style?.imageObjectPosition || "center center",
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gray-800" />
                            )}
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
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                                style={{ color: style?.titleColor || "#FFFFFF" }}
                            >
                                {title}
                            </h2>
                            <div className="w-20 h-1 bg-blue-500 mb-8" />
                            <div
                                className="text-lg md:text-xl leading-relaxed mb-8 prose prose-invert max-w-none"
                                style={{ color: style?.textColor || "#9CA3AF" }}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />

                            {buttonText && buttonLink && (
                                <a
                                    href={buttonLink}
                                    className="inline-block border-b pb-1 text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                                    style={{
                                        color: style?.buttonColor || "#FFFFFF",
                                        borderColor: style?.buttonColor || "#FFFFFF",
                                    }}
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
