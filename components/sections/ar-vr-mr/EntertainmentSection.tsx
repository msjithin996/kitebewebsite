"use client";

import { motion } from "framer-motion";
import { PauseCircle } from "lucide-react";
import { useRef } from "react";

const items = [
    {
        id: "01",
        title: "Digital Twin Development",
        description: "We build digital twins of physical assets, environments, and systems, enabling real-time visualization, monitoring, analysis, and optimization.",
        image: "/images/ar-vr/digital-twin.png",
        badge: "01",
        icon: null
    },
    {
        id: "02",
        title: "Industry 4.0 Applications",
        description: "Integration of AR/VR, IoT data, AI, and real-time analytics to modernize manufacturing. We support smart factories with virtual training and predictive monitoring.",
        image: "/images/ar-vr/industry-4-0.png",
        badge: "02",
        icon: null
    },
    {
        id: "03",
        title: "3D Simulation & Visualization",
        description: "High-fidelity 3D simulations for complex systems, including flight simulations using black box data, enabling realistic analysis and training.",
        image: "/images/ar-vr/hero-ar-industrial.png",
        badge: "03",
        icon: null
    },
    {
        id: "04",
        title: "Metaverse & Virtual Ecosystems",
        description: "Design and deployment of metaverse experiences, virtual spaces, and persistent digital environments for education, collaboration, and brand engagement.",
        image: "/images/ar-vr/ent-environment.png",
        badge: "04",
        icon: null
    },
    {
        id: "05",
        title: "Training & Skill Development",
        description: "Immersive training solutions using AR and VR for safety, technical skills, onboarding, and remote assistance, reducing costs and increasing effectiveness.",
        image: "/images/ar-vr/vr-training.png",
        badge: "05",
        icon: null
    },
    {
        id: "06",
        title: "Data-Driven Immersive Solutions",
        description: "Interactive dashboards and visualization tools that transform complex data into intuitive experiences by integrating real-time sensors and analytics.",
        image: "/images/ar-vr/limitless-deployment-real-v2.png",
        badge: "06",
        icon: null
    },
    {
        id: "07",
        title: "Creative & Cultural XR",
        description: "Exploration of art, poetry, storytelling, and experimental XR projects, blending technology with creativity to push the boundaries of immersive media.",
        image: "/images/ar-vr/creative-xr.png",
        badge: "07",
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
        <section className="bg-white text-black py-32 overflow-hidden" data-header-theme="dark">
            {/* Intro Text - Centered Container */}
            <div className="max-w-[1400px] mx-auto px-6 mb-16">
                <div className="max-w-4xl">
                    <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-400">WHAT WE DO</h2>
                    <p className="text-xl md:text-3xl text-black leading-tight font-light">
                        We deliver comprehensive immersive technology solutions across diverse domains, translating complex emerging technologies into tangible business value.
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
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-black text-xs font-bold font-mono">
                                        {item.badge}
                                    </div>
                                )}
                            </motion.div>

                            <div className="space-y-2 max-w-lg">
                                <h4 className="font-semibold text-2xl leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    {item.description}
                                </p>
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
