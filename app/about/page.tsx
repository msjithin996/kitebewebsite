"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextCollapseLine = ({ words }: { words: string[] }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // We want the words to start spaced out (large gap) and collapse to normal spacing (small gap)
    // "Right to left" movement for the trailing words.
    // Adjust the range [100, 12] to control the "spread" amount.
    // 100px gap -> 12px gap (approx normal space)
    const gap = useTransform(scrollYProgress, [0, 1], ["150px", "12px"]);

    return (
        <div ref={containerRef} className="flex w-full overflow-hidden">
            <motion.div style={{ gap }} className="flex w-full">
                {words.map((word, i) => (
                    <span key={i} className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-tight whitespace-nowrap">
                        {word}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Simple Hero */}
            <section className="pt-40 pb-20 px-6 md:px-20 lg:px-40 border-b border-white/10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-medium mb-8">About Us</h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Our team of experts combines creativity, technology, and strategy to craft innovative digital experiences tailored to your needs.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/about-us-image.png"
                            alt="About Us"
                            className="w-full max-w-md object-contain opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* The Requested Animation Section */}
            <section className="py-40 px-6 md:px-20 lg:px-40 overflow-hidden">
                <div className="container mx-auto flex flex-col gap-4 md:gap-8">
                    {/* Line 1 */}
                    <TextCollapseLine words={["PASSIONATELY", "PUSHING", "THE", "BOUNDARIES", "OF"]} />

                    {/* Line 2 */}
                    <TextCollapseLine words={["CREATIVE", "EXCELLENCE.", "REDEFINING", "POSSIBILITIES", "IN"]} />

                    {/* Line 3 */}
                    <TextCollapseLine words={["THE", "REALMS", "OF", "DESIGN."]} />
                </div>
            </section>

            {/* Additional Content from User Snippet */}
            <section className="py-20 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div /> {/* Spacer */}
                    <div>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
                            Whether it's crafting a visually stunning brand identity, designing immersive digital experiences, or developing strategic marketing campaigns, we approach each project with meticulous attention to detail and an unwavering dedication to quality.
                        </p>

                        {/* Button from snippet */}
                        <a href="#" className="group inline-flex items-center gap-4 text-white border-b border-white/30 pb-2 hover:border-white transition-colors">
                            <span className="uppercase tracking-widest text-sm">Learn More</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
