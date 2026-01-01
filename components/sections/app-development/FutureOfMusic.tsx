"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, Share, Pause, SkipBack, SkipForward, Sliders, AudioLines, Hexagon } from "lucide-react"; // Using Lucide replacements
import Image from "next/image";
import { useRef } from "react";

export default function FutureOfMusic() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const phoneY = useTransform(scrollYProgress, [0, 1], [400, -400]);

    return (
        <section ref={containerRef} className="relative w-full h-[1200px] overflow-hidden bg-black text-white font-sans">

            {/* 1. Dynamic Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#b91c1c] via-[#d97706] to-[#050505] opacity-90 z-0" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent z-0" />

            {/* 2. Large Background Typography "NEBULA" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none mix-blend-overlay opacity-30">
                <h1 className="text-[35vw] font-bold leading-none tracking-tighter text-white">Kitebe</h1>
            </div>


            {/* 3. Main Content Layer */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col pt-48 pb-12">

                {/* Header Text Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight text-white drop-shadow-xl">
                        App<br />
                        Development  <br />
                    </h2>
                    <div className="flex justify-end pt-4">
                        <p className="text-xl md:text-2xl font-light leading-snug max-w-md lg:max-w-lg text-right text-white/90">
                            We partner with ambitious founders and established brands to build mobile products that define categories. From MVP to IPO, we are your technical co-founder.


                        </p>
                    </div>
                </div>

                {/* Hand Image + Phone Container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full h-full max-w-[1400px] pointer-events-none z-10 flex justify-center items-center">

                    {/* Phone Frame */}
                    <motion.div
                        style={{ y: phoneY }}
                        className="relative w-[340px] h-[700px] bg-black rounded-[50px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden z-20 top-20 rotate-[-2deg]"
                    >

                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-40 flex items-center justify-between px-4">
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute top-2 w-full px-6 flex justify-between text-[10px] font-bold text-white z-30 pt-2">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-2 bg-white rounded-[2px]" />
                                <div className="w-3 h-2 bg-white rounded-[2px]" />
                            </div>
                        </div>

                        {/* Screen Content - The Weeknd Red UI */}
                        <div className="w-full h-full relative">
                            {/* Album Art Background */}
                            <div className="absolute inset-0 bg-red-900">
                                <Image
                                    src="https://images.unsplash.com/photo-1621360841013-c768371e93cf?q=80&w=800&auto=format&fit=crop"
                                    alt=""
                                    fill
                                    className="object-cover opacity-80 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/20 to-black/90" />
                            </div>

                            {/* Top Nav */}
                            <div className="relative z-10 flex justify-between p-6 pt-14">
                                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </div>
                                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                    <Share className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-0 w-full p-6 pb-8 z-10">

                                {/* Floating Side Buttons (Inside Screen) */}
                                <div className="absolute bottom-[220px] right-4 flex flex-col gap-3">
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80">
                                        <Sliders className="w-4 h-4" />
                                    </div>
                                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80">
                                        <AudioLines className="w-4 h-4" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#ff5500] rounded-full flex items-center justify-center text-black shadow-lg shadow-orange-500/50">
                                        <Hexagon className="w-5 h-5 fill-black" />
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-1">Starboy</h2>
                                <p className="text-white/60 font-medium mb-6">The Weeknd</p>

                                {/* Progress */}
                                <div className="flex items-center gap-3 text-[10px] font-bold text-white/50 mb-6">
                                    <span>1:45</span>
                                    <div className="flex-1 h-1 bg-white/20 rounded-full relative overflow-hidden">
                                        <div className="absolute top-0 left-0 h-full w-[40%] bg-[#ff5500]" />
                                    </div>
                                    <span className="text-white">3:10</span>
                                </div>



                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* Text Labels Layer */}
                <div className="absolute inset-0 pointer-events-none z-20">



                    {/* Bottom Right List */}
                    <div className="absolute bottom-[100px] right-[15%] text-left text-sm font-medium text-slate-900 md:text-white/80 space-y-1">
                        <p>Research</p>
                        <p>Wireframing</p>
                        <p>Designing</p>
                        <p>Prototyping</p>
                    </div>




                </div>

            </div>
        </section>
    );
}
