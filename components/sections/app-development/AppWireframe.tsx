"use client";

import { motion } from "framer-motion";
import { Bell, Search, Send, Plus, Wallet, MoreHorizontal, Home, Activity, Grid, User as UserIcon } from "lucide-react";

export default function AppWireframe() {
    return (
        <section className="bg-white py-24 px-4 overflow-hidden min-h-[900px] flex items-center justify-center">

            {/* Main Interactive Container - Fixed Width to ensure alignment */}
            <div className="relative w-[1200px] h-[800px] flex justify-center items-center scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 transition-transform origin-center">

                {/* Background Dots */}
                <div className="absolute inset-[-50%] pointer-events-none opacity-[0.4]"
                    style={{ backgroundImage: 'radial-gradient(#e2e8f0 2px, transparent 2px)', backgroundSize: '30px 30px' }} />


                {/* === LEFT LABELS === */}

                {/* 1. Profile & Actions -> Points to Header (approx 90px from top) */}
                <div className="absolute left-[100px] top-[90px] w-[250px] text-right hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Profile & Actions</span>
                    <span className="text-sm font-medium text-slate-700 block">User Header</span>
                    {/* Line */}
                    <div className="absolute top-1/2 right-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 right-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[50%] translate-y-[-50%]" />
                </div>

                {/* 2. Quick Access -> Points to Search (approx 160px from top) */}
                <div className="absolute left-[100px] top-[160px] w-[250px] text-right hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Quick Access</span>
                    <span className="text-sm font-medium text-slate-700 block">Search & Filter</span>
                    {/* Line */}
                    <div className="absolute top-1/2 right-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 right-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[50%] translate-y-[-50%]" />
                </div>

                {/* 3. Data Vid -> Points to Bottom List (approx 680px from top) */}
                <div className="absolute left-[100px] top-[680px] w-[250px] text-right hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Data Vid</span>
                    <span className="text-sm font-medium text-slate-700 block">Financial Overview</span>
                    {/* Line */}
                    <div className="absolute top-1/2 right-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 right-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[50%] translate-y-[-50%]" />
                </div>


                {/* === PHONE MOCKUP (Centered) === */}
                <div className="relative z-10 w-[380px] h-[780px] bg-white rounded-[60px] border-[14px] border-[#0f172a] shadow-2xl overflow-hidden flex flex-col shrink-0 mx-auto">

                    {/* Notch & Status */}
                    <div className="absolute top-0 left-0 w-full h-8 z-30 flex justify-between px-8 pt-3">
                        <span className="text-[11px] font-bold text-slate-900">9:41</span>
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-[#0f172a] rounded-b-3xl z-30" />

                    {/* Content */}
                    <div className="flex-1 px-7 pt-16 flex flex-col gap-8 bg-white pb-6">

                        {/* Header (Target 1) */}
                        <div className="flex justify-between items-center h-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100" />
                                <div className="flex flex-col gap-2">
                                    <div className="w-24 h-3 bg-slate-100 rounded-full" />
                                    <div className="w-16 h-2 bg-slate-50 rounded-full" />
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center">
                                <Bell className="w-5 h-5 text-slate-400" />
                            </div>
                        </div>

                        {/* Search (Target 2) */}
                        <div className="w-full h-12 rounded-full border border-slate-100 flex items-center px-4 gap-3 shadow-sm bg-white">
                            <Search className="w-5 h-5 text-slate-300" />
                            <div className="w-32 h-3 bg-slate-50 rounded-full" />
                        </div>

                        {/* Main Card (Target 4 - Right Side) */}
                        <div className="w-full aspect-[4/3] rounded-3xl border border-slate-100 p-6 flex flex-col justify-between shadow-sm bg-white">
                            <div className="flex justify-between items-start">
                                <div className="w-24 h-3 bg-slate-200 rounded-full" />
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                                </div>
                            </div>
                            <div className="w-32 h-8 bg-slate-800 rounded-lg mt-2" />
                            <div className="mt-auto h-32 w-full pt-4"></div>
                        </div>

                        {/* Action Buttons (Target 5 - Right Side) */}
                        <div className="flex justify-between gap-2">
                            {[
                                { icon: <Send size={20} />, label: "Send" },
                                { icon: <Plus size={20} />, label: "Add" },
                                { icon: <Wallet size={20} />, label: "Pays" },
                                { icon: <MoreHorizontal size={20} />, label: "More" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm bg-white">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-medium text-slate-500">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* List Item (Target 3 - Left Side) */}
                        <div className="w-full p-4 rounded-2xl border border-slate-100 flex items-center gap-4 bg-slate-50/50 mt-auto">
                            <div className="w-12 h-12 rounded-full bg-slate-100" />
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="w-28 h-3 bg-slate-200 rounded-full" />
                                <div className="w-16 h-2 bg-slate-100 rounded-full" />
                            </div>
                            <div className="w-12 h-3 bg-slate-200 rounded-full" />
                        </div>

                    </div>

                    {/* Navigation (Target 6 - Right Side) */}
                    <div className="h-20 bg-white border-t border-slate-50 px-8 flex items-center justify-between z-20">
                        <Home className="w-6 h-6 text-slate-800" />
                        <Activity className="w-6 h-6 text-slate-300" />
                        <Grid className="w-6 h-6 text-slate-300" />
                        <UserIcon className="w-6 h-6 text-slate-300" />
                    </div>

                </div>


                {/* === RIGHT LABELS === */}

                {/* 4. Interaction -> Points to Main Card (approx 300px from top) */}
                <div className="absolute right-[100px] top-[300px] w-[250px] text-left hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Interaction</span>
                    <span className="text-sm font-medium text-slate-700 block">Primary Actions</span>
                    {/* Line */}
                    <div className="absolute top-1/2 left-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 left-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[-50%] translate-y-[-50%]" />
                </div>

                {/* 5. Content -> Points to Action Buttons (approx 520px from top) */}
                <div className="absolute right-[100px] top-[520px] w-[250px] text-left hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Content</span>
                    <span className="text-sm font-medium text-slate-700 block">Transaction History</span>
                    {/* Line */}
                    <div className="absolute top-1/2 left-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 left-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[-50%] translate-y-[-50%]" />
                </div>

                {/* 6. Navigation -> Points to Tab Bar (approx 740px from top) */}
                <div className="absolute right-[100px] top-[740px] w-[250px] text-left hidden lg:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Navigation</span>
                    <span className="text-sm font-medium text-slate-700 block">Tab Bar</span>
                    {/* Line */}
                    <div className="absolute top-1/2 left-[-60px] w-[60px] h-[1px] bg-slate-200" />
                    <div className="absolute top-1/2 left-[-60px] w-1.5 h-1.5 rounded-full bg-slate-300 translate-x-[-50%] translate-y-[-50%]" />
                </div>

            </div>
        </section>
    );
}
