"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Link from "next/link";

const products = [
    {
        id: "01",
        title: "ATR72-600 Flight Simulation",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2940&auto=format&fit=crop",
        type: "image",
        link: "/products/atr72-600-flight-simulation"
    },
    {
        id: "02",
        title: "Medical Equipment Training",
        image: "https://images.unsplash.com/photo-1576091160550-2187d80a18f3?q=80&w=2670&auto=format&fit=crop",
        type: "image",
        link: "#"
    },
    {
        id: "03",
        title: "ApnaQ",
        image: "",
        type: "custom",
        color: "bg-[#1a2b4b]", // Dark blue color
        link: "#"
    },
];

export default function Products() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="pt-24 pb-8 px-6 md:px-20 lg:px-40 overflow-hidden" data-header-theme="dark">
            <div className="container mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-medium mb-6 tracking-tight"
                    >
                        Products & Collaborations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl opacity-60 max-w-3xl"
                    >
                        We are defined by our intentions to provide next-generation reality experiences for diverse products and brands.
                    </motion.p>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[40vw] snap-start"
                        >
                            <Link href={product.link} className="block w-full h-full">
                                <div className="relative aspect-[16/10] overflow-hidden mb-6 group">
                                    {product.type === "image" ? (
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${product.color} flex items-center justify-center`}>
                                            <span className="text-white text-6xl font-bold tracking-tighter">apnaQ</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="opacity-40 text-sm font-medium">{product.id}/</span>
                                    <h3 className="text-xl md:text-2xl opacity-60 font-normal">{product.title}</h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mt-4">
                    <div className="w-1.5 h-1.5 bg-current rounded-full" />
                    <div className="w-1.5 h-1.5 bg-current opacity-20 rounded-full" />
                </div>
            </div>
        </section>
    );
}
