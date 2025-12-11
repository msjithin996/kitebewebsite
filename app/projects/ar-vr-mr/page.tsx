"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Box, Layers, Smartphone, Zap, Eye } from "lucide-react";

const capabilities = [
    {
        title: "Augmented Reality",
        icon: <Smartphone className="w-8 h-8 mb-6 text-white" />,
        description: "Overlay digital information onto the real world to enhance operational efficiency, navigation, and retail experiences.",
        features: ["Product Visualization", "Wayfinding", "Remote Assistance"]
    },
    {
        title: "Virtual Reality",
        icon: <Box className="w-8 h-8 mb-6 text-white" />,
        description: "Transport users to entirely new worlds. Ideal for high-risk training, immersive gaming, and architectural walkthroughs.",
        features: ["Safety Training", "Virtual Tours", "Simulation"]
    },
    {
        title: "Mixed Reality",
        icon: <Layers className="w-8 h-8 mb-6 text-white" />,
        description: "The ultimate blend. Physical and digital objects co-exist and interact in real-time, enabling complex spatial computing tasks.",
        features: ["Spatial Design", "Interactive Learning", "Holographic collab"]
    },
];

const processSteps = [
    { num: "01", title: "Discovery", desc: "We map your physical reality to digital goals." },
    { num: "02", title: "Spatial Design", desc: "3D modeling and UI/UX for 360-degree environments." },
    { num: "03", title: "Development", desc: "Engineering interactions using Unity & Unreal Engine." },
    { num: "04", title: "Deployment", desc: "Hardware setup, app store launch, and on-site integration." },
];

const techStack = ["Unity", "Unreal Engine", "ARKit", "ARCore", "Vuforia", "WebXR", "Oculus", "Hololens"];



export default function ArVrMrServicePage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black overflow-hidden">
            <Navbar />


            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-20 lg:px-40 min-h-[70vh] flex flex-col justify-end border-b border-white/10">
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="h-px w-12 bg-white/50" />
                        <span className="text-sm uppercase tracking-widest text-gray-300">Service Offering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[81px] font-medium tracking-tight leading-[1.1] mb-12"
                    >
                        AR / VR / MR
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-[24px] md:text-[32px] text-gray-400 max-w-4xl leading-tight"
                    >
                        We engineer immersive realities that solve complex business problems. From training simulations to next-gen marketing, we bridge the physical and digital divide.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section - Minimalist */}
            <section className="py-20 px-6 md:px-20 lg:px-40 border-b border-white/10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { label: "Retention Rate", value: "4x", desc: "Compared to traditional learning" },
                        { label: "Engagement", value: "270%", desc: "Increase in user interaction time" },
                        { label: "Error Reduction", value: "40%", desc: "In high-risk operational tasks" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-5xl md:text-6xl font-light mb-2">{stat.value}</h3>
                            <p className="text-lg font-medium mb-1 text-white">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Spectrum (Capabilities) */}
            <section className="py-32 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-12 mb-20">
                        <div>
                            <h2 className="text-[40px] md:text-[56px] font-normal leading-tight">
                                The Reality Spectrum
                            </h2>
                        </div>
                        <div className="pt-4">
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Choosing the right medium is half the battle. We help you navigate the XR landscape to find the perfect fit for your objectives.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/10 hover:border-white/30 transition-colors duration-500 flex flex-col h-full"
                            >
                                <div className="mb-auto">
                                    {cap.icon}
                                    <h3 className="text-2xl font-medium mb-6">{cap.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">{cap.description}</p>
                                </div>
                                <ul className="space-y-3 border-t border-white/10 pt-8">
                                    {cap.features.map((feat, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm text-gray-300">
                                            <span className="w-1 h-1 bg-white rounded-full mr-3" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Section - Clean Layout */}
            <section className="py-0">
                {/* Block 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] border-t border-white/10">
                    <div className="relative h-[50vh] md:h-auto order-2 md:order-1 border-r border-white/10">
                        <Image
                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop"
                            alt="VR Training"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-12 md:p-24 order-1 md:order-2">
                        <Zap className="w-10 h-10 mb-8 text-white" />
                        <h3 className="text-[32px] md:text-[40px] font-normal mb-6 leading-tight">Immersive Training</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Replace thick manuals with interactive experiences. We build VR simulations that allow employees to practice dangerous or complex tasks in a safe, controlled environment.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">01</span> Muscle Memory Development
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">02</span> Scenario Randomization
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">03</span> Performance Analytics
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] border-t border-white/10">
                    <div className="flex flex-col justify-center p-12 md:p-24 border-r border-white/10">
                        <Eye className="w-10 h-10 mb-8 text-white" />
                        <h3 className="text-[32px] md:text-[40px] font-normal mb-6 leading-tight">Virtual Showrooms</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Bring your products to your customers, wherever they are. High-fidelity 3D models allow users to inspect, configure, and visualize products in their own space using WebAR.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">01</span> No App Required (WebAR)
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">02</span> Real-time Configuration
                            </li>
                            <li className="flex items-center gap-4 text-gray-300">
                                <span className="text-white font-mono text-sm">03</span> Direct Path to Purchase
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[50vh] md:h-auto">
                        <Image
                            src="https://images.unsplash.com/photo-1633210655365-651987a77052?q=80&w=2670&auto=format&fit=crop"
                            alt="AR Showroom"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-6 md:px-20 lg:px-40 border-t border-white/10">
                <div className="container mx-auto">
                    <h2 className="text-[40px] md:text-[56px] font-normal mb-20 text-center">From Concept to Immersion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="text-6xl md:text-8xl font-bold text-white/10 mb-6 select-none group-hover:text-white/20 transition-colors">{step.num}</div>
                                <h3 className="text-xl font-medium mb-4 absolute top-8 left-0">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mt-8">{step.desc}</p>
                                {index !== processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-white/10 translate-x-1/2" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6 md:px-20 lg:px-40 border-t border-white/10">
                <div className="container mx-auto text-center">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-12">Powered By</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60">
                        {techStack.map((tech, index) => (
                            <span key={index} className="text-xl md:text-2xl font-normal text-white cursor-default hover:opacity-100 transition-opacity">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 px-6 md:px-20 lg:px-40 border-t border-white/10 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-[40px] md:text-[56px] font-normal mb-8 leading-tight">
                        Ready to break the <br /> fourth wall?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Let's discuss how spatial computing can transform your business.
                    </p>
                    <button className="group relative inline-flex items-center gap-4 px-8 py-4 border border-white rounded-full text-lg font-medium overflow-hidden hover:bg-white hover:text-black transition-all duration-300">
                        <span className="relative z-10">Start a Project</span>
                        <ArrowUpRight className="w-5 h-5 relative z-10" />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
