"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselItem {
    imageUrl: string;
    title: string;
    subtitle?: string;
}

export interface CarouselBlockProps {
    title: string;
    items: CarouselItem[];
}

export default function CarouselBlock({ title, items }: CarouselBlockProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 relative group/carousel">
            <div className="flex items-end justify-between mb-8 px-4 md:px-0">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <div className="flex gap-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="min-w-[280px] md:min-w-[320px] aspect-[3/4] relative rounded-xl overflow-hidden snap-start cursor-pointer group"
                    >
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h4>
                            {item.subtitle && (
                                <p className="text-sm text-gray-300">{item.subtitle}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
