"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
    {
        id: "01",
        title: "DIGITAL TWIN\nDEVELOPMENT",
        description: "We build digital twins of physical assets, environments, and systems, enabling real-time visualization, monitoring, analysis, and optimization. These solutions help organizations improve performance, predict issues, and make data-driven decisions.",
        image: "/images/ar-vr/digital-twin.png"
    },
    {
        id: "02",
        title: "INDUSTRY 4.0\nAPPLICATIONS",
        description: "Our Industry 4.0 solutions integrate AR/VR, IoT data, AI, and real-time analytics to modernize manufacturing and industrial processes. We support smart factories with virtual training, real-time visualization, and predictive monitoring.",
        image: "/images/ar-vr/industry-4-0.png"
    },
    {
        id: "03",
        title: "3D SIMULATION &\nVISUALIZATION",
        description: "We develop high-fidelity 3D simulations for complex systems, including flight 3D simulations using black box data, enabling realistic analysis, training, and scenario reconstruction.",
        image: "/images/ar-vr/3d-simulation.png"
    },
    {
        id: "04",
        title: "METAVERSE &\nVIRTUAL ECOSYSTEMS",
        description: "We design and deploy metaverse experiences, virtual spaces, and persistent digital environments for education, collaboration, events, and brand engagement.",
        image: "/images/ar-vr/metaverse-new.png"
    },
    {
        id: "05",
        title: "TRAINING &\nSKILL DEVELOPMENT",
        description: "We create immersive training solutions using AR and VR for safety training, technical skills, onboarding, and remote assistance, reducing cost and increasing learning effectiveness.",
        image: "/images/ar-vr/vr-training.png"
    },
    {
        id: "06",
        title: "DATA-DRIVEN\nIMMERSIVE SOLUTIONS",
        description: "By integrating real-time data, sensors, and analytics into immersive environments, we deliver interactive dashboards, simulations, and visualization tools that transform complex data into intuitive experiences.",
        image: "/images/ar-vr/data-driven.png"
    },
    {
        id: "07",
        title: "CREATIVE &\nCULTURAL XR",
        description: "Beyond enterprise applications, we explore art, poetry, storytelling, and experimental XR projects, blending technology with creativity to push the boundaries of immersive media.",
        image: "/images/ar-vr/creative-xr.png"
    }
];

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="bg-[#111] text-white py-32 overflow-hidden">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-20 px-6">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white uppercase">WHAT WE DO IN <br /> AR / VR / XR</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    We deliver comprehensive immersive technology solutions across diverse domains.
                </p>
            </div>

            {/* Slider Container with Top/Bottom Borders */}
            <div className="border-y border-white relative">
                {/* Draggable Area */}
                <div ref={containerRef} className="overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing">
                    <div className="flex min-w-max">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} isLast={index === services.length - 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, isLast }: { service: any, isLast: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex-shrink-0 w-[85vw] md:w-[600px] h-[600px] group overflow-hidden bg-[#111] transition-all duration-500 border-r border-white`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Layer */}
            <div className={`absolute inset-0 transition-all duration-700 ease-out ${isHovered ? 'bg-[#000]' : 'p-12'}`}>
                <div className={`relative w-full h-full overflow-hidden ${isHovered ? 'opacity-40' : ''}`}>
                    <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                        style={{ objectPosition: 'center' }}
                    />
                    {isHovered && <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />}
                </div>
            </div>

            {/* Content Layer */}
            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end pointer-events-none">
                <span className="text-blue-400 font-mono text-xl mb-3 block">{service.id}</span>
                <h3 className="text-4xl font-bold uppercase tracking-wide mb-4">{service.title}</h3>

                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
