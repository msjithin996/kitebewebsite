"use client";

import { motion } from "framer-motion";
import { Plus, Play, SkipBack, SkipForward, Repeat, Shuffle, Search, Heart, Mic } from "lucide-react";
import Image from "next/image";

export default function ProjectShowcase() {
    return (
        <section className="bg-[#050505] text-white overflow-hidden py-10 md:py-20 flex flex-col items-center">

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-[1440px]">

                {/* 1. Header - LEFT ALIGNED as requested */}
                <div className="flex flex-col items-start text-left mb-16 md:mb-24 scale-90 md:scale-100 max-w-4xl lg:ml-80">
                    <h2 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[80px] leading-[0.95] tracking-tight font-medium">
                        <span className="text-[#555] block">Say goodbye to boring</span>
                        <div className="text-[#555]">
                            and <span className="text-[#555]">awkward interfaces</span>
                        </div>

                        <div className="text-white flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 md:mt-4">
                            <span>and start a new life</span>
                            <div className="inline-flex gap-2 relative -top-1 md:-top-2">
                                <span className="px-3 py-1 bg-[#222] rounded-full text-[#999] text-xs md:text-sm border border-white/5 font-normal">audio</span>
                                <span className="px-3 py-1 bg-[#222] rounded-full text-[#999] text-xs md:text-sm border border-white/5 font-normal">radio</span>
                            </div>
                        </div>

                        <div className="text-white flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="inline-flex px-3 py-1 bg-[#222] rounded-full text-[#999] text-xs md:text-sm border border-white/5 font-normal relative -top-1 md:-top-2">podcasts</span>
                            <span>with Mooun ®</span>
                        </div>
                    </h2>
                </div>


                {/* 2. Main Content Layout: Phone on Left, Text on Right */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-32 relative">

                    {/* LEFT COLUMN: Large Phone Mockup */}
                    <div className="relative w-full max-w-[500px] flex justify-center">
                        <div className="relative w-[340px] md:w-[450px] h-[680px] md:h-[900px] transition-transform duration-700 ease-out">

                            {/* Phone Image Container */}
                            <div className="relative w-full h-full bg-[#111] rounded-[55px] md:rounded-[68px] border-[8px] md:border-[10px] border-[#2f2f2f] shadow-2xl overflow-hidden z-20 rotate-[-8deg] lg:rotate-[-6deg]">

                                {/* Dynamic Island */}
                                <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[30px] md:h-[36px] bg-black rounded-full z-40 flex items-center justify-end px-2">
                                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                                </div>
                                <div className="absolute top-8 left-8 md:top-10 md:left-10 text-white font-semibold text-sm z-30">9:41</div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-black flex flex-col pt-16 md:pt-20 px-6 md:px-8 pb-8 text-white relative">

                                    {/* App Header */}
                                    <div className="flex justify-between items-center mb-6 md:mb-10">
                                        <div className="flex items-center gap-3">
                                            {/* Logo Icon */}
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl rotate-45 flex items-center justify-center shadow-lg">
                                                <div className="w-2 h-2 bg-black rounded-full" />
                                            </div>
                                            <span className="text-sm md:text-base font-semibold tracking-widest uppercase ml-1">MOOUN</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                                            <Search className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Greeting */}
                                    <div className="flex justify-between items-end mb-8 md:mb-10">
                                        <h3 className="text-[28px] md:text-[34px] font-light text-[#999]">
                                            Hey, <span className="text-white font-normal">Margo</span>
                                            <div className="inline-block w-8 h-8 rounded-full bg-[#333] ml-3 overflow-hidden align-middle relative top-[-4px]">
                                                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" fill className="object-cover" />
                                            </div>
                                        </h3>

                                        <div className="bg-[#2a1b2a] px-3 py-1.5 rounded-full flex items-center gap-2 border border-purple-500/20">
                                            <span className="text-pink-400 text-xs font-bold">215</span>
                                            <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[8px] text-black font-bold">C</div>
                                        </div>
                                    </div>

                                    {/* Player Card - RED GRADIENT */}
                                    <div className="w-full bg-gradient-to-r from-[#e11d48] to-[#fb923c] rounded-[32px] p-6 relative overflow-hidden mb-8 md:mb-10 shadow-2xl shadow-red-900/30">
                                        <div className="flex justify-between items-start mb-16 md:mb-20">
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-xl overflow-hidden shadow-lg relative z-10">
                                                <Image src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" alt="Art" fill className="object-cover" />
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                                <div className="w-3 h-3 bg-white rounded-full" />
                                            </div>
                                        </div>

                                        <div className="relative z-10">
                                            <h4 className="text-xl md:text-2xl font-semibold mb-1">Call out my name</h4>
                                            <p className="text-white/80 text-sm mb-4 md:mb-6">The Weeknd</p>

                                            <div className="w-full h-1 bg-black/20 rounded-full mb-3 md:mb-4">
                                                <div className="w-[40%] h-full bg-white rounded-full flex items-center justify-end">
                                                    <div className="w-3 h-3 bg-white rounded-full shadow-md" />
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs font-medium text-white/70 mb-6 md:mb-8">
                                                <span>1:35</span>
                                                <span>3:05</span>
                                            </div>

                                            <div className="flex justify-between items-center px-2">
                                                <Shuffle className="w-5 h-5 text-white/80" />
                                                <SkipBack className="w-6 h-6 fill-white text-white" />
                                                <Play className="w-8 h-8 fill-white text-white rotate-90 md:rotate-0" />
                                                <SkipForward className="w-6 h-6 fill-white text-white" />
                                                <Repeat className="w-5 h-5 text-white transform rotate-180" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Playlist Stripes */}
                                    <div className="flex gap-4 overflow-hidden mb-4 md:mb-6">
                                        <div className="w-[140px] md:w-[160px] h-[180px] md:h-[220px] rounded-[30px] overflow-hidden relative shrink-0">
                                            <Image src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=300&auto=format&fit=crop" alt="P1" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                                            <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
                                                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                                            </div>
                                        </div>
                                        <div className="w-[140px] md:w-[160px] h-[180px] md:h-[220px] rounded-[30px] overflow-hidden relative shrink-0">
                                            <Image src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop" alt="P2" fill className="object-cover" />
                                            <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply" />
                                            <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
                                                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                                            </div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center">
                                                <span className="font-serif text-2xl text-red-200 tracking-widest block">SIMMER</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg font-medium mb-1">Favorite Playlist</p>
                                    <p className="text-xs text-gray-500 mb-6">48 tracks</p>

                                    {/* Bottom Action Bar */}
                                    <div className="mt-auto h-[60px] md:h-[70px] bg-[#1a1a1a] rounded-full flex items-center justify-between px-2 pl-6 mb-2">
                                        <span className="text-sm font-medium text-gray-300">Go to Playlist</span>
                                        <div className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] bg-[#222] rounded-full flex items-center justify-center rotate-[-15deg]">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white text-white" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* RIGHT COLUMN: Static Info Text */}
                    <div className="flex flex-col items-start max-w-[320px] md:max-w-sm pt-0 lg:pt-32">

                        {/* Circle Plus Icon */}
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-4 font-thin text-2xl pb-1">+</div>
                            <span className="text-sm font-medium text-white">Introduction</span>
                        </div>

                        {/* About Badge */}
                        <div className="mb-6">
                            <span className="px-4 py-1.5 bg-[#222] rounded-[8px] text-[#888] text-xs font-medium">about</span>
                        </div>

                        {/* Text Content */}
                        <p className="text-lg md:text-xl text-[#999] leading-relaxed font-light mb-20">
                            Welcome to a new musical future.
                            <span className="text-white font-normal block mt-1"> Mooun ® is a project that looks at</span>
                            old things in a new way. Now listening to music is more convenient and interactive, podcasts are more accessible, and radio is more accurate
                        </p>

                        {/* Bottom Star Graphic */}
                        <div className="mt-auto opacity-80 self-start">
                            <svg width="60" height="60" viewBox="0 0 100 100" className="animate-[spin_20s_linear_infinite]">
                                {/* Custom path for the 4-petal shape */}
                                <path d="M50 0 C 65 35, 65 35, 100 50 C 65 65, 65 65, 50 100 C 35 65, 35 65, 0 50 C 35 35, 35 35, 50 0 Z"
                                    fill="none" stroke="white" strokeWidth="1" />
                                <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.5" className="opacity-50" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" className="opacity-50" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
