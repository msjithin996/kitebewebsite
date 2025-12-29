
import React from 'react';
import { Headset, Star } from "lucide-react";

export default function AvistaExperience() {
    return (
        <section className="py-20 px-6 md:px-20 lg:px-40 bg-[#1C1C1C] text-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                <div className="px-4 py-2 border border-white/20 rounded-full text-sm uppercase tracking-wider text-gray-300">
                    Avista Experience •
                </div>
                <h2 className="text-3xl md:text-5xl font-normal max-w-4xl text-right leading-tight">
                    We focus on simplicity— delivering<br className="hidden md:block" />
                    solutions built on efficiency, speed,<br className="hidden md:block" />
                    and clear functionality.
                </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)] lg:auto-rows-auto">

                {/* Col 1: 32+ Years (Tall) */}
                <div className="lg:col-span-3 lg:row-span-2 bg-[#111] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
                    <div>
                        <h3 className="text-[90px] font-medium leading-none tracking-tighter">32+</h3>
                        <div className="flex items-center gap-4 mt-2">
                            <div className="h-px bg-white/20 w-12"></div>
                            <p className="text-gray-400 text-lg leading-tight">Years of<br />experience</p>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <div className="border-t border-white/10 pt-6 mb-6">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We focus on simplicity— delivering solutions built on efficiency, speed, and clear functionality.
                            </p>
                        </div>
                        <div className="h-40 w-full rounded-2xl overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                alt="Experience"
                                className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Col 2 & 3: Middle Section */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Top: Rating Card */}
                    <div className="flex-1 bg-[#111] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
                        {/* Background Gradient/Mesh effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                        <div className="relative z-10 max-w-xs">
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We offer end-to-end creative solutions that make brands unforgettable.
                            </p>
                        </div>

                        {/* Center N Logo Watermark */}
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                            <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M20 20 V80 L60 20 V80 M80 20 V80" stroke="white" strokeWidth="20" />
                                {/* Just a rough placeholder for a logo shape */}
                                <text x="50" y="80" fontSize="80" textAnchor="middle" fill="white">N</text>
                            </svg>
                        </div>

                        <div className="relative z-10 flex justify-end items-end mt-8">
                            <div className="text-right">
                                <div className="flex gap-1 justify-end text-white mb-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-5 h-5 fill-white text-white" />
                                    ))}
                                </div>
                                <div className="text-6xl font-medium tracking-tight">4.9/5</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Splits */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 min-h-[220px]">
                        {/* Stats List */}
                        <div className="sm:col-span-2 bg-[#111] rounded-3xl p-8 flex flex-col justify-center gap-5">
                            {[
                                { label: 'Solutions', val: '100%' },
                                { label: 'Strategy', val: '90%' },
                                { label: 'UX/UI Design', val: '84%' },
                                { label: 'Development', val: '70%' }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-center text-sm md:text-base">
                                    <span className="text-gray-400 font-medium">{s.label}</span>
                                    <span className="font-bold text-white">{s.val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Support Card */}
                        <div className="bg-black rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-white/5">
                            <div className="w-14 h-14 bg-[#222] rounded-full flex items-center justify-center mb-4 text-white">
                                <Headset className="w-6 h-6" />
                            </div>
                            <h4 className="text-3xl font-medium mb-1">24/7</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-wide">Priority Support</p>
                        </div>
                    </div>
                </div>

                {/* Col 4: Collaborative Process (Tall) */}
                <div className="lg:col-span-4 bg-[#111] rounded-3xl relative overflow-hidden group min-h-[400px] lg:min-h-full">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                        alt="Collaborative Process"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <div className="absolute top-10 left-10 z-10">
                        <h3 className="text-3xl font-bold leading-tight">Collaborative<br />Process</h3>
                    </div>

                    <div className="absolute bottom-10 right-10 left-10 text-right z-10">
                        <p className="text-gray-200 text-base font-medium leading-relaxed ml-auto max-w-[240px]">
                            We collaborate closely, ensuring shared goals drive meaningful results together.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
