"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Award, Hexagon } from "lucide-react";

const features = [
    {
        icon: Award,
        title: "TOP QUALITY",
        description: "We deliver premium grade AR/VR experiences, ensuring the highest fidelity and performance for all users.",
    },
    {
        icon: Globe,
        title: "GLOBALLY RENOWNED",
        description: "Recognized worldwide for our innovative approach to metaverse infrastructure and digital twin technology.",
    },
    {
        icon: Shield,
        title: "MULTIPLE SECURITY",
        description: "Built with enterprise-grade security protocols to protect your data and digital assets within the metaverse.",
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Title */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
                        <div className="relative z-10">
                            <span className="text-blue-500 font-mono tracking-widest text-sm mb-4 block">THE ADVANTAGE</span>
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight uppercase">
                                Why <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                    Choose Us
                                </span>
                            </h2>
                            <div className="mt-8 relative w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0" />
                                <Hexagon size={40} className="text-white/50" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Features */}
                    <div className="lg:w-1/2 space-y-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 relative">
                                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                                        <feature.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
