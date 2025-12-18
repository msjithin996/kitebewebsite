"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        id: "01",
        title: "VIRTUAL REALITY (VR)",
        description: "Fully immersive digital environments that transport users to new worlds. Ideal for training, gaming, and simulation.",
        image: "https://images.unsplash.com/photo-1626388166548-bfb8104869c9?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "MIXED REALITY (MR)",
        description: "Blending physical and digital worlds to create new environments where physical and digital objects co-exist.",
        image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "AUGMENTED REALITY (AR)",
        description: "Overlaying digital information onto the real world to enhance perception and interaction.",
        image: "https://images.unsplash.com/photo-1633169617202-23f260a927c9?q=80&w=2670&auto=format&fit=crop",
    },
];

export default function Services() {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-20">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4"
                    >
                        Our Meta Services
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our cutting-edge solutions designed to reshape how you interact with the digital universe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-blue-500 font-mono text-xl font-bold">{service.id}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <button className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                    Learn More &rarr;
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
