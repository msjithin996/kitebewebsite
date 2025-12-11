"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface ImageGridBlockProps {
    images: string[];
}

export default function ImageGridBlock({ images }: ImageGridBlockProps) {
    if (images.length === 1) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden mb-32"
            >
                <Image
                    src={images[0]}
                    alt="Project Detail"
                    fill
                    className="object-cover"
                />
            </motion.div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {images.map((src, index) => (
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
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            ))}
        </div>
    );
}
