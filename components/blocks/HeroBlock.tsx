"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface HeroBlockProps {
    imageUrl: string;
    title: string;
}

export default function HeroBlock({ imageUrl, title }: HeroBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[60vh] md:h-[80vh] rounded-[32px] overflow-hidden mb-20 group"
        >
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Aesthetic Title Overlay */}
            <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl text-white font-serif tracking-tight"
                    style={{ fontFamily: '"ITC Clearface", "Times New Roman", serif' }}
                >
                    {title}
                </motion.h1>
            </div>
        </motion.div>
    );
}
