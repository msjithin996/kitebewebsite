"use client";

import { Plus } from "lucide-react";
import Image from "next/image";

export default function AppElements() {
    return (
        <section className="bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-[600px]">

                    {/* Left Column */}
                    <div className="flex flex-col items-start gap-12">

                        {/* Search Pill */}
                        <div className="bg-[#1a1a1a] px-5 py-2.5 rounded-full border border-white/5">
                            <span className="text-gray-400 text-sm">what difference?</span>
                        </div>

                        {/* Text Block */}
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-md">
                            I'm tired of boring interfaces that are impossible to implement.
                            Based on AI and smart picks I want to make an app that will create an amazing experience for the user
                        </p>

                        {/* Topic Card */}
                        <div className="relative w-[300px] aspect-[4/5] rounded-[40px] overflow-hidden group cursor-pointer mt-4">
                            <Image
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                                alt="Topic Cover"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Red Overlay/Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-500/40 to-transparent mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                                <div className="mb-auto mt-4 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">TOPIC</span>
                                </div>

                                <h3 className="text-2xl font-bold leading-tight mb-8">
                                    Feminism<br />
                                    in the IT-industry
                                </h3>

                                <div className="w-full h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors">
                                    <span className="text-sm font-medium">Listen</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-between items-end relative h-full">

                        {/* Top Right: Elements Label */}
                        <div className="flex flex-col items-center gap-4 self-end lg:mr-20">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center font-thin text-3xl">
                                <Plus className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <span className="text-gray-400 text-sm">Elements</span>
                        </div>

                        {/* Bottom Right: Avatar Pills */}
                        <div className="flex flex-col items-end gap-6 mt-20 lg:mt-auto">

                            {/* Pill 1: Pink Border + Waveform */}
                            <div className="relative h-16 bg-[#111] rounded-full border-2 border-pink-400/50 flex items-center p-1 pr-6 gap-3">
                                <div className="flex -space-x-3 items-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#111] relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="User 1" fill className="object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-[#111] relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User 2" fill className="object-cover" />
                                    </div>
                                </div>
                                {/* Orange Waveform Icon */}
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center absolute -top-2 -right-2 border-4 border-[#050505]">
                                    <div className="flex gap-[2px] items-center h-3">
                                        <div className="w-[2px] h-full bg-white rounded-full animate-pulse" />
                                        <div className="w-[2px] h-[60%] bg-white rounded-full" />
                                        <div className="w-[2px] h-[80%] bg-white rounded-full animate-pulse delay-75" />
                                    </div>
                                </div>
                            </div>

                            {/* Pill 2: Dark + SOON Badge */}
                            <div className="relative h-16 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center p-1 pr-6 gap-3 mr-12">
                                <div className="flex -space-x-3 items-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="User 3" fill className="object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User 4" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="px-2 py-0.5 bg-blue-200 text-blue-900 text-[10px] font-bold rounded-full absolute -top-2 -right-2 border-4 border-[#050505]">
                                    SOON
                                </div>
                            </div>

                            {/* Pill 3: Three Avatars */}
                            <div className="relative h-16 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center p-1 px-1 gap-0">
                                <div className="flex -space-x-1 items-center px-1">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative overflow-hidden grayscale opacity-60">
                                        <Image src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" alt="User 5" fill className="object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative overflow-hidden grayscale">
                                        <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" alt="User 6" fill className="object-cover" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] relative overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="User 7" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
