"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface HeroBlockStyle {
    titleColor?: string;
    overlayColor?: string;
    overlayOpacity?: number;
    imageObjectFit?: string;
    imageObjectPosition?: string;
    imageSize?: string;
}

export interface HeroBlockProps {
    imageUrl: string;
    title: string;
    style?: HeroBlockStyle;
}

export default function HeroBlock({ imageUrl, title, style }: HeroBlockProps) {
    const overlayOpacity = style?.overlayOpacity ?? 0.5;
    const overlayColor = style?.overlayColor || "#000000";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] md:h-[80vh] rounded-[32px] overflow-hidden mb-20 group mx-auto"
            style={{ width: style?.imageSize || "100%" }}
        >
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="transition-transform duration-700 group-hover:scale-105"
                    style={{
                        objectFit: (style?.imageObjectFit as any) || "cover",
                        objectPosition: style?.imageObjectPosition || "center center",
                    }}
                    priority
                />
            ) : (
                <div className="absolute inset-0 bg-gray-800" />
            )}

            {/* Dynamic Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to top, ${overlayColor} ${overlayOpacity * 80}%, ${overlayColor}20 50%, transparent)`,
                }}
            />

            {/* Aesthetic Title Overlay */}
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight"
                    style={{
                        fontFamily: '"ITC Clearface", "Times New Roman", serif',
                        color: style?.titleColor || "#FFFFFF",
                    }}
                >
                    {title}
                </motion.h1>
            </div>
        </motion.div>
    );
}
