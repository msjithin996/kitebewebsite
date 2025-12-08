"use client";

import { useRef, useState } from "react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Globe, Layout, Server, Database, Zap, Search, Lock, Code, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Frontend Engineering",
        icon: <Layout className="w-6 h-6 text-white" />,
        description: "Pixel-perfect, responsive interfaces built with modern frameworks like React and Next.js.",
        tags: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "Backend Architecture",
        icon: <Server className="w-6 h-6 text-white" />,
        description: "Scalable, secure server-side solutions that power your business logic and data management.",
        tags: ["Node.js", "Python", "PostgreSQL"]
    },
    {
        title: "E-Commerce",
        icon: <Globe className="w-6 h-6 text-white" />,
        description: "High-conversion online stores with seamless checkout experiences and inventory management.",
        tags: ["Shopify", "WooCommerce", "Stripe"]
    },
];

const features = [
    {
        title: "Performance",
        icon: <Zap className="w-5 h-5" />,
        desc: "Core Web Vitals optimization for lightning-fast load times."
    },
    {
        title: "SEO Ready",
        icon: <Search className="w-5 h-5" />,
        desc: "Semantic HTML and SSR for maximum search engine visibility."
    },
    {
        title: "Security",
        icon: <Lock className="w-5 h-5" />,
        desc: "SSL, firewalls, and best practices to keep data safe."
    },
    {
        title: "Clean Code",
        icon: <Code className="w-5 h-5" />,
        desc: "Maintainable, documented, and scalable codebases."
    }
];

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Vercel", "Docker"];

const GridBlock = ({ i, scrollY }: { i: number; scrollY: MotionValue<number> }) => {
    const COLS = 40;
    const row = Math.floor(i / COLS);
    const col = i % COLS;

    // Deterministic random based on index
    const random = (seed: number) => ((Math.sin(seed) * 10000) % 1 + 1) % 1;

    // Terrain generation:
    // Custom height map to match the reference image "blocky" look.
    // Values represent number of blocks from the bottom.
    // Expanded to 40 columns for finer control.
    const columnHeights = [
        2, 2, 3, 3, 1, 1, 3, 3, 4, 4,
        3, 3, 5, 5, 4, 4, 6, 6, 5, 5,
        7, 7, 6, 6, 8, 8, 6, 6, 9, 9,
        8, 8, 10, 10, 9, 9, 11, 11, 10, 10
    ];

    const height = columnHeights[col] || 0;
    const threshold = 20 - height; // Adjusted for 20 rows

    // Add some noise to the edge
    const isEdge = row === threshold;
    const noise = random(i) > 0.5;

    // Main terrain
    const isBottom = row > threshold || (isEdge && noise);

    // Floating blocks: Specific clusters to match reference
    // Cluster 1: Top right area (adjusted for new grid size)
    const isCluster1 = col >= 24 && col <= 36 && row >= 2 && row <= 8;
    const isFloating = (isCluster1 && random(i) > 0.7) || (row < threshold - 4 && random(i + 1000) > 0.98);

    // Parallax effect for floating blocks
    const fallDistance = random(i + 2000) * 400 + 100;
    const y = useTransform(scrollY, [0, 1000], [0, fallDistance]);

    if (isBottom) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: "#1C1C1C"
                }}
                transition={{
                    duration: 0.5,
                    delay: random(i) * 1.5,
                    ease: "easeOut"
                }}
                className="w-full h-full"
            />
        );
    }

    if (isFloating) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    backgroundColor: "#1C1C1C"
                }}
                style={{ y }}
                transition={{
                    duration: 0.5,
                    delay: random(i) * 1 + 0.5,
                    ease: "easeOut"
                }}
                className="w-full h-full"
            />
        );
    }

    return <div className="w-full h-full" />;
};

const SparseGridBlock = ({ i, scrollYProgress }: { i: number; scrollYProgress: MotionValue<number> }) => {
    // Deterministic random based on index
    const random = (seed: number) => ((Math.sin(seed) * 10000) % 1 + 1) % 1;

    // Only 3% of blocks are floating
    const isFloating = random(i) > 0.97;

    // Parallax effect
    const fallDistance = random(i + 2000) * 200 + 50;
    const y = useTransform(scrollYProgress, [0, 1], [0, fallDistance]);

    if (isFloating) {
        return (
            <motion.div
                style={{ y }}
                className="w-full h-full bg-white/5 rounded-sm"
            />
        );
    }
    return <div className="w-full h-full" />;
};

const SparseGridBackground = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 grid grid-cols-12 md:grid-cols-40 grid-rows-20 gap-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 800 }).map((_, i) => (
                <SparseGridBlock key={i} i={i} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );

};

const CaveBlock = ({ i }: { i: number }) => {
    const COLS = 40;
    const row = Math.floor(i / COLS);
    const col = i % COLS;

    const random = (seed: number) => ((Math.sin(seed) * 10000) % 1 + 1) % 1;

    // Define the "cave" shape (boundary between white and black)
    // We want white on top-left, black on bottom-right.
    // So we define the row index where black starts for each column.
    // Higher index = lower on screen.
    // Left side (col 0) -> Start black at row 15 (mostly white)
    // Right side (col 39) -> Start black at row 5 (mostly black)

    // Jagged diagonal logic
    // We use a combination of linear slope and sine waves for a "natural" blocky look
    const slope = 16 - (col / COLS) * 14; // Goes from 16 down to 2
    const wave = Math.sin(col * 0.5) * 2; // Sine wave variation
    const noise = (random(col) * 3) - 1.5; // Random noise

    const threshold = Math.floor(slope + wave + noise);

    const isBlack = row >= threshold;

    // Add some floating blocks in the white area (near the boundary)
    const isFloater = !isBlack && row >= threshold - 3 && random(i) > 0.85;

    if (isBlack || isFloater) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: random(i) * 0.1 }}
                className="w-full h-full bg-[#111] border-[0.5px] border-[#222]"
            />
        );
    }
    return null;
};

const CaveGridBackground = () => {
    return (
        <div className="absolute inset-0 z-0 grid grid-cols-12 md:grid-cols-40 grid-rows-20 gap-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 800 }).map((_, i) => (
                <CaveBlock key={i} i={i} />
            ))}
        </div>
    );
};

export default function WebDevelopmentPage() {
    const { scrollY } = useScroll();

    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black overflow-hidden">
            <Navbar />

            {/* New Falling Bricks Hero Section */}
            <section className="relative min-h-screen bg-[#E6E6E6] text-black overflow-hidden flex flex-col justify-between">
                {/* Grid Background for the effect */}
                <div className="absolute inset-0 z-0 grid grid-cols-12 md:grid-cols-40 grid-rows-20 gap-0 pointer-events-none">
                    {Array.from({ length: 800 }).map((_, i) => (
                        <GridBlock key={i} i={i} scrollY={scrollY} />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-40 pt-32">

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                        Web<br />
                        Development
                    </h1>
                    <p className="text-xl text-gray-600 max-w-md mb-12">
                        Cutting-edge SEO strategies with data-driven marketing to boost your visibility.
                    </p>
                </div>

                {/* Bottom Text */}
                <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-40 pb-20 flex justify-end items-end h-full pointer-events-none">
                    <p className="text-gray-400 max-w-sm text-right text-sm leading-relaxed pointer-events-auto">
                        We combine deep SEO expertise, smart strategy, and data-driven insights to help your brand rise higher, get discovered faster.
                    </p>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-20 lg:px-40 min-h-[80vh] flex flex-col justify-center">
                <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <span className="h-px w-12 bg-white/50" />
                            <span className="text-sm uppercase tracking-widest text-gray-300">Web Engineering</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8"
                        >
                            The web, <br />
                            <span className="text-gray-500">reimagined.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-lg leading-relaxed"
                        >
                            We build digital platforms that are as beautiful as they are functional. Fast, secure, and scalable solutions for the modern web.
                        </motion.p>
                    </div>

                    {/* Abstract Browser Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative perspective-1000"
                    >
                        <div className="relative w-full aspect-[4/3] bg-[#111] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                            {/* Browser Chrome */}
                            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                <div className="ml-4 flex-1 h-4 bg-white/5 rounded-sm" />
                            </div>
                            {/* Content */}
                            <div className="p-8 grid grid-cols-3 gap-4">
                                <div className="col-span-2 h-32 bg-white/5 rounded-sm animate-pulse" />
                                <div className="col-span-1 h-32 bg-white/5 rounded-sm" />
                                <div className="col-span-1 h-40 bg-white/5 rounded-sm" />
                                <div className="col-span-2 h-40 bg-white/5 rounded-sm" />
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#222] border border-white/10 rounded-lg p-4 shadow-xl hidden md:block">
                            <div className="w-full h-2 bg-white/10 rounded-full mb-3" />
                            <div className="w-2/3 h-2 bg-white/10 rounded-full mb-6" />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-12 bg-white/5 rounded" />
                                <div className="h-12 bg-white/5 rounded" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intelligent Solutions Section */}
            <section className="relative py-32 px-6 md:px-20 lg:px-40 bg-[#1C1C1C] border-b border-white/10 overflow-hidden">
                <SparseGridBackground />
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                        {/* Left Column */}
                        <div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest mb-8 block">[ about ]</span>
                            <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-16">
                                Explore limitless possibilities with our intelligent solutions
                            </h2>

                            <div className="flex items-end gap-6">
                                <span className="text-8xl md:text-9xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                                    270k
                                </span>
                                <p className="text-gray-400 max-w-[150px] mb-4">
                                    AI Solutions for our clients
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Antigravity is a leading web agency committed to transforming businesses through cutting-edge digital solutions. We specialize in delivering tailored strategies that drive innovation, optimize processes, and unlock new opportunities for growth.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                With a team of experts in engineering, design, and advanced analytics, we help companies harness the power of the web to solve complex challenges and gain a competitive edge. From predictive analytics to intelligent automation, we empower organizations to thrive in the digital age.
                            </p>

                            <button className="group w-fit flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                                <span>Explore more</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            {
                                title: "Modern Frameworks",
                                desc: "Emphasize the expertise and knowledge of your team in developing and implementing modern stacks.",
                                icon: "/icons/abstract-1.svg"
                            },
                            {
                                title: "Tailored solutions",
                                desc: "Mention your ability to customize solutions based on specific business requirements.",
                                icon: "/icons/abstract-2.svg"
                            },
                            {
                                title: "Cutting-edge technology",
                                desc: "Highlight your use of the latest tools and techniques in web development.",
                                icon: "/icons/abstract-3.svg"
                            },
                            {
                                title: "Modern development",
                                desc: "Showcase successful case studies or client testimonials that demonstrate effectiveness.",
                                icon: "/icons/abstract-4.svg"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="relative w-32 h-32 mb-8">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain mix-blend-screen"
                                    />
                                </div>
                                <h3 className="text-xl font-medium mb-4 text-white group-hover:text-gray-300 transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-32 px-6 md:px-20 lg:px-40 overflow-hidden">
                <SparseGridBackground />
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1C1C1C] p-10 hover:bg-[#222] transition-colors duration-500 group"
                            >
                                <div className="mb-8 p-3 bg-white/5 w-fit rounded-sm group-hover:bg-white/10 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-8 text-sm h-12">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-black text-white py-24 px-6 md:px-20 lg:px-40 border-t border-white/10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
                        {/* Left Content */}
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 uppercase tracking-widest mb-8 block">[ OUR MISSION & VISION ]</span>
                            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] mb-12">
                                We design, build, and scale digital products that make an impact
                            </h2>
                            <div className="h-px w-full bg-white/20 mb-12" />
                            <p className="text-gray-400 leading-relaxed max-w-lg text-lg">
                                Our multidisciplinary team of designers, developers, and strategists helps brands elevate their digital presence. From user-focused websites to scalable web apps — we combine creativity and technology to deliver measurable growth.
                            </p>
                        </div>

                        {/* Right Images */}
                        <div className="relative">
                            <div className="absolute top-0 right-0 z-20">
                                <div className="w-24 h-16 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="pt-24 relative">
                                <div className="relative h-[450px] w-[70%] grayscale hover:grayscale-0 transition-all duration-700 z-0">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                                        alt="Office Studio"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[450px] w-[70%] ml-auto -mt-52 grayscale hover:grayscale-0 transition-all duration-700 z-10 border-[8px] border-black">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
                                        alt="Workspace Detail"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >

            {/* Visual & Features */}
            < section className="py-0 border-t border-white/10" >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                    <div className="relative h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/10 group overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                            alt="Code on Screen"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="flex flex-col justify-center p-12 md:p-24 bg-[#1C1C1C]">
                        <h2 className="text-[32px] md:text-[48px] font-normal mb-12 leading-tight">
                            Built for speed, <br />
                            designed for scale.
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            {features.map((feat, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 mb-3 text-white">
                                        {feat.icon}
                                        <h4 className="text-lg font-medium">{feat.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Tech Stack Marquee */}
            < section className="py-24 border-t border-white/10 overflow-hidden" >
                <div className="container mx-auto mb-12 px-6 md:px-20 lg:px-40">
                    <p className="text-sm uppercase tracking-widest text-gray-500">Our Stack</p>
                </div>
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {/* Double the list for seamless loop */}
                        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                            <span key={index} className="text-4xl md:text-6xl font-medium text-white/20 hover:text-white/80 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section >

            {/* CTA */}
            < section className="py-40 px-6 md:px-20 lg:px-40 border-t border-white/10 text-center" >
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-[40px] md:text-[56px] font-normal mb-8 leading-tight">
                        Need a new website?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Let's build a platform that drives real growth.
                    </p>
                    <button className="group relative inline-flex items-center gap-4 px-8 py-4 border border-white rounded-full text-lg font-medium overflow-hidden hover:bg-white hover:text-black transition-all duration-300">
                        <span className="relative z-10">Get Started</span>
                        <ArrowUpRight className="w-5 h-5 relative z-10" />
                    </button>
                </div>
            </section >

            <Footer />
        </main >
    );
}
