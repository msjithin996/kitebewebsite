"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ImageGridBlockStyle {
    gap?: string;
    borderRadius?: string;
    imageObjectFit?: string;
    imageObjectPosition?: string;
    imageSize?: string;
}

export interface ImageGridBlockProps {
    images: string[];
    style?: ImageGridBlockStyle;
}

export default function ImageGridBlock({ images = [], style }: ImageGridBlockProps) {
    // Filter out empty strings to avoid next/image errors
    const validImages = images.filter(img => img && img.trim() !== "");

    if (validImages.length === 0) {
        return null;
    }

    const imageStyle = {
        objectFit: (style?.imageObjectFit as any) || "cover",
        objectPosition: style?.imageObjectPosition || "center center",
    };

    if (validImages.length === 1) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden mb-32 mx-auto"
                style={{ width: style?.imageSize || "100%" }}
            >
                <Image
                    src={validImages[0]}
                    alt="Project Detail"
                    fill
                    style={imageStyle}
                />
            </motion.div>
        );
    }

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 mx-auto"
            style={{ width: style?.imageSize || "100%" }}
        >
            {validImages.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden"
                >
                    <Image
                        src={src}
                        alt={`Detail ${index + 1}`}
                        fill
                        className="hover:scale-105 transition-transform duration-700"
                        style={imageStyle}
                    />
                </motion.div>
            ))}
        </div>
    );
}
