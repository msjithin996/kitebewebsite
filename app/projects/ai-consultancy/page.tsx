"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BarChart3, Brain, Globe, Layers, Zap } from "lucide-react";

export default function AiConsultancyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white overflow-hidden font-sans">
            <Navbar />

            {/* ... existing sections ... */}

            {/* (This is just context, I will target the specific insertion point below) */}


            {/* New Hero Section (Verta Style) */}
            <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/aihero.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
                </div>

                {/* Middle Text - Floating */}
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-6 md:px-12 pointer-events-none hidden md:flex z-20">
                    <span className="text-xs text-gray-400 tracking-widest uppercase opacity-60">We don't predict the future</span>
                    <span className="text-xs text-gray-400 tracking-widest uppercase opacity-60">We build it for you</span>
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 py-12">
                    {/* Spacer for Navbar */}
                    <div className="h-20" />

                    {/* Bottom Content */}
                    <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-12 md:pb-24">
                        {/* Left: Headline */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.95]"
                            >
                                Go beyond automation.<br />
                                Step into intelligence.
                            </motion.h1>
                        </div>

                        {/* Right: Description & Buttons */}
                        <div className="flex flex-col gap-8 max-w-xl lg:ml-auto">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-gray-300 leading-relaxed"
                            >
                                Automation gets tasks done. Intelligence moves your business forward. We get teams thinking faster, building better, and staying ahead.
                            </motion.p>

                        </div>
                    </div>
                </div>
            </section>




            {/* Algorithms Meet Aesthetics */}
            <section className="py-24 px-6 md:px-20 lg:px-40 bg-[#0f0f0f]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
                            Where Algorithms<br />
                            Meet Aesthetics
                        </h2>
                        <div className="mt-8 lg:mt-0 max-w-sm">
                            <div className="px-4 py-2 border border-white/10 rounded-full inline-block mb-6 text-xs uppercase tracking-widest">About Us</div>
                            <p className="text-gray-400 leading-relaxed">
                                At Ion, we blend the precision of machine intelligence with the soul of design. Our AI-powered systems don't just optimize — they create, adapt, and elevate visual experiences.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Generative Visuals Card */}
                        <div className="lg:col-span-4 bg-[#111] rounded-[40px] p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-xs uppercase tracking-widest text-gray-500 mb-6 block">Generative Visuals</span>
                                <div className="flex gap-4 mb-6">
                                    <span className="text-sm font-mono text-gray-500">02</span>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                                        Streamline workflows with smart tools that reduce manual effort and increase output.
                                    </p>
                                </div>
                            </div>

                            {/* Graph Visualization */}
                            <div className="relative h-32 w-full my-8">
                                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <path
                                        d="M0,100 C50,50 100,120 150,80 C200,40 250,90 300,60 L300,150 L0,150 Z"
                                        fill="url(#gradient)"
                                        className="opacity-20"
                                    />
                                    <path
                                        d="M0,100 C50,50 100,120 150,80 C200,40 250,90 300,60"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Bottom Tags */}
                            <div className="flex gap-3 relative z-10">
                                {['Smart', 'Visuals', 'Driven'].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Predictive Design Analytics Card */}
                        <div className="lg:col-span-8 relative h-[500px] rounded-[40px] overflow-hidden group">
                            <Image
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                alt="Predictive Design"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-12 right-12 text-right">
                                <h3 className="text-4xl font-bold mb-2 leading-tight">PREDICTIVE DESIGN<br />ANALYTICS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Powers Creative */}
            <section className="py-24 px-6 md:px-20 lg:px-40 bg-black">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                                Where AI Powers<br />
                                the Creative
                            </h2>
                        </div>
                        <div className="max-w-md text-right">
                            <p className="text-gray-400 leading-relaxed">
                                Ion is where artificial intelligence meets imagination. We harness the speed, logic, and scalability of AI to supercharge human creativity.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Vertical Image */}
                        <div className="lg:col-span-3 flex flex-col gap-8">
                            <div className="relative h-full w-full rounded-[30px] overflow-hidden min-h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                    alt="AI Creative"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>

                        {/* Middle Column: Stats & Systems */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#161616] p-6 rounded-[24px] border border-white/5 flex flex-col justify-center aspect-square">
                                    <span className="text-3xl font-bold text-white mb-2">10.5x</span>
                                    <span className="text-gray-500 text-xs leading-tight">Automated<br />processes</span>
                                </div>
                                <div className="bg-[#161616] p-6 rounded-[24px] border border-white/5 flex flex-col justify-center aspect-square">
                                    <span className="text-3xl font-bold text-white mb-2">98%</span>
                                    <span className="text-gray-500 text-xs leading-tight">Trusted by<br />businesses</span>
                                </div>
                            </div>

                            {/* Navigation Numbers */}
                            <div className="flex gap-6 text-sm font-mono text-gray-500 py-2">
                                <span className="text-white">01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                            </div>

                            {/* Creative Systems Card */}
                            <div className="bg-[#161616] p-8 rounded-[30px] border border-white/5 flex-1 flex flex-col justify-center">
                                <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">Creative Systems</span>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Design adaptive websites and campaigns tailored to individual user behavior.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Content & Wide Image */}
                        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                            <div className="pl-4">
                                <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">Generative Visual Content</span>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                                    Unleash limitless creativity with AI-generated graphics, 3D visuals, and motion design. Our generative systems produce visuals that are not only eye-catching but data-driven.
                                </p>
                                <button className="px-6 py-3 bg-[#222] text-white text-sm rounded-lg hover:bg-[#333] transition-colors border border-white/10">
                                    Learn More
                                </button>
                            </div>

                            <div className="relative h-[200px] w-full rounded-[30px] overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
                                    alt="Generative Art"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transforming Ideas Section */}
            <section className="py-24 px-6 md:px-20 lg:px-40 bg-white text-black relative z-10">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
                        <div className="max-w-sm">
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                An agency is an organization or entity that provides a specific service on behalf of another party. In many cases, agencies act as intermediaries.
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="px-8 py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                                    Learn More
                                </button>
                                <button className="w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="max-w-2xl text-right">
                            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                                Transforming <span className="inline-block align-middle"><Globe className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} /></span><br />
                                ideas into visually<br />
                                stunning realities
                            </h2>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Card */}
                        <div className="relative p-1 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 rounded-[40px] overflow-hidden">
                            <div className="bg-white rounded-[36px] p-8 md:p-12 h-full flex flex-col justify-between relative">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-4 py-2 border border-gray-200 rounded-full text-sm">Our Service</span>
                                        <span className="px-4 py-2 border border-gray-200 rounded-full text-sm">2024</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                        720+ projects<br />launched
                                    </h3>
                                    <p className="text-gray-500 mb-8">We work in detail for every project, trust me.</p>
                                    <button className="px-8 py-4 border border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                                        Get Started Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right List */}
                        <div className="flex flex-col gap-4">
                            {[
                                { title: "Web Design", desc: "We don't believe in one-size-fits-all solutions. Our design process starts with understanding your brand.", active: false },
                                { title: "Graphic Design", desc: "In a world where mobile devices dominate, having a well-designed app is essential for engaging customers.", active: true },
                                { title: "Motion Graphic", desc: "Whether you're looking to enhance your marketing videos or create stunning visual content.", active: false },
                                { title: "Illustration", desc: "We specialize in crafting unique, eye-catching illustrations that elevate your brand.", active: false }
                            ].map((item, i) => (
                                <div key={i} className={`p-8 rounded-[30px] flex flex-col md:flex-row gap-8 items-start transition-all ${item.active ? 'bg-[#6B4BCC] text-white' : 'bg-gray-50 text-black hover:bg-gray-100'}`}>
                                    <div className="whitespace-nowrap">
                                        <span className={`px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 ${item.active ? 'bg-white/20' : 'bg-white text-black'}`}>
                                            {item.title}
                                            <ArrowUpRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${item.active ? 'text-white/80' : 'text-gray-500'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
