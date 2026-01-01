"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AppOrigins() {
    return (
        <section className="py-24 bg-black text-white px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="container mx-auto max-w-[1400px] space-y-8">

                {/* Top Row: Visual + Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">

                    {/* Left: Complex Abstract Graphic */}
                    <div className="w-full h-[400px] lg:h-full bg-[#111] rounded-[48px] overflow-hidden relative flex items-center justify-center group border border-[#222]">
                        {/* Background Gradients/Glows */}
                        <div className="absolute inset-0 bg-[#000]">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 via-transparent to-transparent opacity-50" />
                        </div>

                        {/* Central Graphic Composition */}
                        <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">

                            {/* Layers of semi-transparent circular patterns simulating the image */}

                            {/* Layer 1: Bottom Right - Orange/Red */}
                            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tr from-orange-500 to-red-500 rounded-full mix-blend-screen opacity-80 blur-[2px]" />

                            {/* Layer 2: Top Left - Teal/Green */}
                            <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full mix-blend-screen opacity-80 blur-[2px]" />

                            {/* Layer 3: Top Right - Yellow/Gold */}
                            <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-gradient-to-bl from-yellow-300 to-amber-500 rounded-full mix-blend-screen opacity-70 blur-[2px]" />

                            {/* Layer 4: Bottom Left - Purple */}
                            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full mix-blend-screen opacity-70 blur-[2px]" />

                            {/* Layer 5: Central Overlay - The '3' or 'B' shape mask */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* This uses backdrop-filter to create the cutout effect if browser supports, or just a dark overlay */}
                                <div className="w-[80%] h-[80%] border-[2px] border-white/20 rounded-[40px] flex items-center justify-center backdrop-blur-sm bg-black/10">
                                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0 pointer-events-none opacity-40">
                                        {/* Fine wireframe lines */}
                                        <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                            </div>

                            {/* Central Arrow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <ArrowRight className="w-24 h-24 text-black stroke-[3px]" />
                            </div>

                        </div>

                        {/* Decorative Wireframe curves in corners */}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
                            <defs>
                                <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#818CF8" />
                                    <stop offset="100%" stopColor="#34D399" />
                                </linearGradient>
                            </defs>
                            <path d="M 0 100 Q 50 50 100 0" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />
                            <path d="M 0 120 Q 60 60 120 0" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />
                            <path d="M 0 140 Q 70 70 140 0" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />

                            <path d="M 300 400 Q 350 350 400 300" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />
                            <path d="M 280 400 Q 340 340 400 280" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />
                            <path d="M 260 400 Q 330 330 400 260" fill="none" stroke="url(#curveGrad)" strokeWidth="1" />
                        </svg>

                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full h-full bg-[#18181b] rounded-[48px] p-10 lg:p-16 flex flex-col justify-center items-start text-left border border-[#27272a]">
                        <h2 className="text-4xl lg:text-5xl font-light mb-12 tracking-tight text-white/90">
                            where did we<br />
                            start from?
                        </h2>

                        <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-md">
                            The path was clear; for the project to be truly challenging
                            <span className="text-green-400 mx-1.5 font-medium">
                                it had to start from a traditional & inflexible environment.
                            </span>
                            We instantly thought of "mobile banking", with all its restrictions in technical and functional terms.
                        </p>
                    </div>

                </div>

                {/* Bottom Row: Details List */}
                <div className="w-full bg-[#050505] rounded-[48px] border border-[#222] p-8 lg:p-12 min-h-[400px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center relative overflow-hidden">

                    {/* Left: Wireframe Abstract Number '3' */}
                    <div className="relative w-full h-[300px] lg:h-full flex items-center justify-center opacity-80">
                        {/* Concentric lines simulation using SVG */}
                        <svg className="w-full h-full max-w-[300px] max-h-[400px]" viewBox="0 0 200 300" fill="none">
                            <defs>
                                <linearGradient id="linesGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4F46E5" />
                                    <stop offset="50%" stopColor="#A78BFA" />
                                    <stop offset="100%" stopColor="#4F46E5" />
                                </linearGradient>
                            </defs>
                            {/* Creating the '3' shape with paths */}
                            {Array.from({ length: 15 }).map((_, i) => (
                                <g key={i}>
                                    <path
                                        d={`M 10 ${50 + i * 2} C 60 ${50 + i * 2}, 80 ${80 + i * 3}, 80 ${110 + i} 
                                           C 80 ${140 - i}, 50 ${150}, 30 ${150} 
                                           C 50 ${150}, 80 ${160 + i}, 80 ${190 - i}
                                           C 80 ${220 - i * 3}, 60 ${250 - i * 2}, 10 ${250 - i * 2}`}
                                        stroke="url(#linesGrad)"
                                        strokeWidth="0.8"
                                        className="opacity-60"
                                        style={{ transform: `scale(${1 - i * 0.02}) translateX(${i}px)`, transformOrigin: 'center' }}
                                    />
                                </g>
                            ))}
                        </svg>
                    </div>

                    {/* Right: List Items */}
                    <div className="flex flex-col gap-12 lg:gap-20 w-full max-w-3xl pr-4 lg:pr-12">

                        {/* 1. Problem */}
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-12 items-start">
                            <span className="text-xl sm:text-2xl text-gray-400 font-light">problem</span>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                                Usability is prioritized in product design, making visual creativity limited to simple and functional systems. Where and how can we be less conventional when designing, without losing sight of these axes?
                            </p>
                        </div>

                        {/* 2. Objective */}
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-12 items-start">
                            <span className="text-xl sm:text-2xl text-gray-400 font-light">objective</span>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                                Find balance between functionality and visual creativity. Define our own limits and switch between concepts.
                            </p>
                        </div>

                        {/* 3. Solution */}
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-12 items-start">
                            <span className="text-xl sm:text-2xl text-green-400 font-medium">solution</span>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                                Define particular features that aren't normally found in mobile banking apps, to merge with an innovative visual system within a usable and dynamic product
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
