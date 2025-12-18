"use client";

import { motion } from "framer-motion";
import { PauseCircle } from "lucide-react";
import { useRef } from "react";

const items = [
    {
        title: "Immersive 8K Cinema",
        description: "Experience content like never before with high-fidelity visuals that transport you directly into the scene. Our cinema solutions redefine personal entertainment.",
        image: "/images/ar-vr/ent-immersive.png",
        badge: null,
        icon: <PauseCircle className="text-white w-6 h-6 fill-current" />
    },
    {
        title: "Spatial Content Gallery",
        description: "Explore a dynamic collection of spatial assets. Interact with 3D models, videos, and panoramic experiences in a seamless virtual environment.",
        image: "/images/ar-vr/ent-gallery.png",
        badge: "Spatial Gallery",
        icon: null
    },
    {
        title: "Virtual Environments",
        description: "Immerse yourself in breathtaking digital landscapes. From serene mountain tops to futuristic cityscapes, escape to worlds beyond reality.",
        image: "/images/ar-vr/ent-environment.png",
        badge: "Environments",
        icon: null
    }
];

export default function EntertainmentSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-white text-black py-32 overflow-hidden">
            {/* Intro Text - Centered Container */}
            <div className="max-w-[1400px] mx-auto px-6 mb-16">
                <div className="max-w-4xl">
                    <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                        We create breathtaking immersive entertainment experiences that defy reality. From private holographic cinemas to interactive spatial galleries, our solutions transport users into new worlds with unparalleled visual fidelity and audio immersion. Redefine how your audience consumes content.
                    </p>
                </div>
            </div>

            {/* Horizontal Scrolling Card Section - Full Width Right */}
            <div className="relative w-full">

                {/* Slider - Dynamic Left Padding to align with container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                    style={{
                        paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))',
                        paddingRight: '1.5rem', // Optional right padding for the very end
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-[90vw] md:w-[600px] flex flex-col gap-6 snap-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Icon (Pause Button style) */}
                                {item.icon && (
                                    <div className="absolute bottom-6 right-6">
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                                            {item.icon}
                                        </button>
                                    </div>
                                )}

                                {/* Badge (Pill style) */}
                                {item.badge && (
                                    <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-medium">
                                        {item.badge}
                                    </div>
                                )}
                            </motion.div>

                            <div className="space-y-2 max-w-lg">
                                <h4 className="font-semibold text-lg leading-snug">
                                    {item.title} <span className="text-gray-500 font-normal">{item.description}</span>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons - Aligned with container right edge */}
                <div className="max-w-[1400px] mx-auto px-6 mt-8 flex justify-end gap-4">
                    <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
                    </button>
                    <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <ArrowRightIcon className="w-5 h-5 text-gray-800" />
                    </button>
                </div>

            </div>
        </section>
    );
}

const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 18l-6-6 6-6" />
    </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18l6-6-6-6" />
    </svg>
)
