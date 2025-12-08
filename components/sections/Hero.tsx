"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                {/* Replace with actual image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/heroimage.jpg")' }}
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-9 h-full flex flex-col justify-end pb-50">
                <motion.div
                    style={{ y }}
                    className="flex flex-row items-stretch justify-end gap-6 md:gap-8"
                >
                    {/* Vertical Separator */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-[2px] bg-white/50 hidden md:block origin-bottom"
                    />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-[81px] font-medium leading-tight text-left"
                    >
                        Bridging imagination <br />
                        and reality.
                    </motion.h1>
                </motion.div>
            </div>
        </section>
    );
}
