"use client";

import { motion } from "framer-motion";
import { AppWindow, Music, Mail, Aperture, Phone, MessageCircle, TrendingUp, Settings, Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function DarkModeShowcase() {
    return (
        <section className="bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="container mx-auto max-w-6xl">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Easy to Enable */}
                    <div className="bg-[#111] rounded-[40px] p-8 md:p-12 overflow-hidden relative min-h-[500px] flex flex-col">
                        <div className="relative z-10 mb-8">
                            <h3 className="text-2xl font-bold mb-4">Easy to enable.</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                You can turn on Dark Mode through the Control Center or automatically when it's sunset.
                            </p>
                        </div>

                        {/* Phone Partial Mockup */}
                        <div className="mt-auto relative w-full flex justify-center translate-y-6">
                            <div className="w-[300px] h-[400px] bg-black rounded-[40px] border-[8px] border-[#222] overflow-hidden relative shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-30" />
                                <div className="absolute top-2 left-6 text-xs font-bold text-white z-30">9:41</div>
                                <div className="absolute top-2 right-6 flex gap-1 z-30">
                                    <div className="w-4 h-3 bg-white rounded-sm" />
                                </div>

                                {/* Wallpaper/Homescreen Content */}
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black z-0">
                                    {/* Mock Apps Grid */}
                                    <div className="grid grid-cols-4 gap-4 p-4 mt-12 opacity-50">
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <div key={i} className="w-full aspect-square bg-white/10 rounded-xl" />
                                        ))}
                                    </div>

                                    {/* Dock */}
                                    <div className="absolute bottom-4 left-4 right-4 h-20 bg-white/5 rounded-[24px] flex items-center justify-around px-2 backdrop-blur-md">
                                        <div className="w-12 h-12 bg-green-500 rounded-xl" />
                                        <div className="w-12 h-12 bg-gray-500 rounded-xl" />
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl" />
                                        <div className="w-12 h-12 bg-red-500 rounded-xl" />
                                    </div>
                                </div>

                                {/* Notification Banner */}
                                <div className="absolute top-12 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-lg z-20 flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                                        <Moon className="w-5 h-5 text-white fill-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">DARK MODE</span>
                                            <span className="text-[10px] text-gray-500">now</span>
                                        </div>
                                        <p className="text-xs font-medium text-white leading-tight">Dark Mode is enabled until sunrise.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: System-wide */}
                    <div className="bg-[#111] rounded-[40px] p-8 md:p-12 min-h-[500px] flex flex-col items-center text-center justify-center relative">
                        <div className="max-w-md mb-12">
                            <h3 className="text-2xl font-bold mb-4">System-wide.</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                When Dark Mode is enabled, every system element and every app turns to a darker, more subtle color.
                            </p>
                        </div>

                        {/* Icons Grid */}
                        <div className="grid grid-cols-4 gap-6 md:gap-8 opacity-80">
                            {[
                                { icon: <AppWindow className="w-8 h-8" />, label: "App Store" },
                                { icon: <Music className="w-8 h-8" />, label: "Music" },
                                { icon: <Mail className="w-8 h-8" />, label: "Mail" },
                                { icon: <Aperture className="w-8 h-8" />, label: "Photos" },
                                { icon: <Phone className="w-8 h-8" />, label: "Phone" },
                                { icon: <MessageCircle className="w-8 h-8" />, label: "Messages" },
                                { icon: <TrendingUp className="w-8 h-8" />, label: "Stocks" },
                                { icon: <Settings className="w-8 h-8 rotate-90" />, label: "Settings" },
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#222] rounded-[18px] border border-white/10 flex items-center justify-center mb-2 group-hover:bg-[#333] group-hover:border-white/20 transition-all duration-300 shadow-xl">
                                        {/* Icon Inner Glow */}
                                        <div className="text-gray-300 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
