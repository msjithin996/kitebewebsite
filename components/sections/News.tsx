"use client";

import { motion } from "framer-motion";

export default function News() {
    return (
        <section className="pt-8 pb-20 px-6 md:px-20 lg:px-40 bg-white text-black" data-header-theme="dark">

            {/* Scrolling Marquee Section */}
            <div className="-mx-6 md:-mx-20 lg:-mx-40 relative overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 5, // Adjust the duration as needed
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-[60px] md:text-[90px] lg:text-[160px] font-semibold text-gray-800 px-8 opacity-80 leading-none">
                            Our team of experts combines creativity, technology, and strategy to craft innovative digital experiences tailored to your needs. —
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
