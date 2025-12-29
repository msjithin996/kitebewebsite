"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AvistaExperience from "@/components/sections/AvistaExperience";
import Approach from "@/components/sections/Approach";
import AboutCover from "@/components/sections/AboutCover";
import AboutVisualSection from "@/components/sections/AboutVisualSection";
import ApproachAndPhilosophy from "@/components/sections/ApproachAndPhilosophy";

const TextCollapseLine = ({ words }: { words: string[] }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // We want the words to start spaced out (large gap) and collapse to normal spacing (small gap)
    // "Right to left" movement for the trailing words.
    // Adjust the range [100, 12] to control the "spread" amount.
    // Reduced max gap to prevent massive overflow
    const gap = useTransform(scrollYProgress, [0, 1], ["50px", "10px"]);

    return (
        <div ref={containerRef} className="flex w-full overflow-hidden">
            <motion.div style={{ gap }} className="flex w-full flex-wrap lg:flex-nowrap">
                {words.map((word, i) => (
                    <span key={i} className="text-2xl md:text-4xl lg:text-[48px] font-medium leading-tight whitespace-normal lg:whitespace-nowrap">
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

            {/* New Cover Section */}
            <AboutCover />

            {/* The Requested Animation Section */}
            <section className="py-20 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden">
                <div className="container mx-auto flex flex-col gap-4 md:gap-8">
                    {/* Line 1 */}
                    <TextCollapseLine words={["PASSIONATELY", "PUSHING", "THE", "BOUNDARIES", "OF"]} />

                    {/* Line 2 */}
                    <TextCollapseLine words={["CREATIVE", "EXCELLENCE.", "REDEFINING", "POSSIBILITIES", "IN"]} />

                    {/* Line 3 */}
                    <TextCollapseLine words={["THE", "REALMS", "OF", "DESIGN."]} />
                </div>
            </section>

            {/* Visual Section from Screenshots */}
            <AboutVisualSection />

            {/* Avista Experience Grid */}
            <AvistaExperience />

            {/* Approach Section */}
            <Approach />

            <ApproachAndPhilosophy />

            {/* Additional Content from User Snippet */}
            <section className="py-20 px-6 md:px-20 lg:px-40 bg-white text-black">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div /> {/* Spacer */}
                    <div>
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12">
                            Whether it's crafting a visually stunning brand identity, designing immersive digital experiences, or developing strategic marketing campaigns, we approach each project with meticulous attention to detail and an unwavering dedication to quality.
                        </p>

                        {/* Button from snippet */}
                        <a href="#" className="group inline-flex items-center gap-4 text-black border-b border-black/30 pb-2 hover:border-black transition-colors">
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
