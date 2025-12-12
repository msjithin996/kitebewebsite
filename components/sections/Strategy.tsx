"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Strategy() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={ref} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-end pb-20">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{ backgroundImage: 'url("/homesectionimage.jpg")' }}
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 md:px-14 lg:px-20">
                <motion.p
                    style={{ y: textY }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-3xl font-medium text-white max-w-4xl italic leading-relaxed"
                >
                    This goal reflects our growth strategy, our purpose, our core values and our culture of shared success.
                </motion.p>
            </div>
        </section>
    );
}
