"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "01. Limitless\nopportunities",
        description: "At Kitebe, we believe in transforming visions into reality. Our dedicated team works tirelessly to create unique digital solutions that resonate with your audience. We ensure every project reflects our commitment to quality and innovation.",
    },
    {
        title: "02. Innovative\nsolutions",
        description: "Kitebe provides a variety of innovative services aimed at empowering your business and driving growth. Our skilled team is committed to delivering customized technology solutions that address your specific needs.",
    },
    {
        title: "03. IT\nconsulting",
        description: "Kitebe offers a range of innovative services designed to elevate your business and improve your digital footprint. Our expert team is dedicated to providing customized solutions that address your unique requirements.",
    },
];

import KitebeAnimation from "@/components/ui/KitebeAnimation";

export default function Services() {
    return (
        <section className="py-20 px-6 md:px-20 lg:px-40 bg-[#1C1C1C] text-white">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center mb-2 md:mb-2 gap-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] md:text-[56px] font-normal max-w-xl leading-tight"
                    >
                        Trust the process & make
                        your business grow
                    </motion.h2>

                    <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                        <KitebeAnimation />
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[2px] bg-white/20 mb-16 md:mb-20" />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-normal mb-6 whitespace-pre-line leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
