"use client";

import { motion } from "framer-motion";

const PhoneFrame = ({
    width,
    height,
    rotate,
    children,
    delay = 0,
    label
}: {
    width: number;
    height: number;
    rotate: number;
    children: React.ReactNode;
    delay?: number;
    label: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: rotate + 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: rotate }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay, ease: "backOut" }}
            className="flex flex-col items-center gap-6"
        >
            <div
                style={{
                    width,
                    height,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                className="relative bg-[#050505] rounded-[40px] border-[8px] border-[#1a1a1a] overflow-hidden flex flex-col shrink-0"
            >
                {/* Glossy Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30" />

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-[#1a1a1a] rounded-b-xl z-20" />

                {/* Screen */}
                <div className="w-full h-full relative z-10 overflow-hidden bg-[#050505]">
                    {children}
                </div>
            </div>

            {/* Label */}
            <span className="text-sm font-mono text-gray-400 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                {label}
            </span>
        </motion.div>
    );
};

export default function OurWork() {
    return (
        <section className="py-40 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl md:text-7xl font-medium mb-12 pl-10">App Evolution</h2>

                <div className="relative w-full min-h-[700px] flex items-center justify-center">

                    {/* Connecting Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" viewBox="0 0 1400 700" preserveAspectRatio="none">
                        <path
                            d="M 50 450 C 350 450, 450 250, 700 250 S 1050 450, 1350 350"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="opacity-50"
                        />
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#fff" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Phones Arrangement */}
                    <div className="hidden lg:flex items-center justify-between w-full h-full relative z-10 px-0 max-w-[1400px]">

                        {/* 1. Wireframe / Sketch - Far Left */}
                        <div className="relative mt-32 self-end">
                            <PhoneFrame width={240} height={480} rotate={-12} delay={0.1} label="01. Wireframe">
                                <div className="w-full h-full bg-[#111] p-6 flex flex-col gap-4">
                                    {/* Blueprint/Sketch Style */}
                                    <div className="w-full h-32 border-2 border-dashed border-gray-700 rounded-xl flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border-2 border-gray-700" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 w-2/3 bg-gray-800 rounded" />
                                        <div className="h-4 w-full bg-gray-800 rounded" />
                                        <div className="h-4 w-full bg-gray-800 rounded" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mt-4">
                                        <div className="h-24 border-2 border-dashed border-gray-700 rounded-xl" />
                                        <div className="h-24 border-2 border-dashed border-gray-700 rounded-xl" />
                                    </div>
                                </div>
                            </PhoneFrame>
                        </div>

                        {/* 2. UI Design */}
                        <div className="relative mb-20">
                            <PhoneFrame width={240} height={480} rotate={-5} delay={0.2} label="02. UI Design">
                                <div className="w-full h-full bg-[#0F172A] p-6 flex flex-col gap-4 overflow-hidden relative">
                                    {/* Glassmorphism Background */}
                                    <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#3B82F6]/20 to-transparent" />

                                    {/* Header Card */}
                                    <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/20 relative overflow-hidden">
                                        <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-white/10 rounded-full blur-xl" />
                                    </div>

                                    {/* List Items with Color */}
                                    <div className="space-y-3">
                                        <div className="h-16 w-full bg-[#1e293b] rounded-xl flex items-center px-4 gap-3 border border-white/5">
                                            <div className="w-8 h-8 rounded-lg bg-[#EC4899]/20 flex items-center justify-center text-[#EC4899]">
                                                <div className="w-3 h-3 rounded-full bg-current" />
                                            </div>
                                            <div className="flex-1 h-2 bg-white/10 rounded-full" />
                                        </div>
                                        <div className="h-16 w-full bg-[#1e293b] rounded-xl flex items-center px-4 gap-3 border border-white/5">
                                            <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                                                <div className="w-3 h-3 rounded-full bg-current" />
                                            </div>
                                            <div className="flex-1 h-2 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </PhoneFrame>
                        </div>

                        {/* 3. Logic / Development */}
                        <div className="relative mt-20">
                            <PhoneFrame width={240} height={480} rotate={5} delay={0.3} label="03. Development">
                                <div className="w-full h-full bg-[#1e1e1e] p-4 pt-10 font-mono text-[10px] leading-relaxed relative overflow-hidden">
                                    {/* Matrix / Code Effect */}
                                    <div className="text-blue-400">import</div> <div className="text-white inline">React</div> <div className="text-blue-400 inline">from</div> <div className="text-orange-400 inline">'react'</div>;
                                    <br />
                                    <div className="text-purple-400 mt-2">function</div> <div className="text-yellow-300 inline">App</div>() {'{'}
                                    <div className="pl-4">
                                        <div className="text-purple-400">const</div> [data, setData] = <div className="text-blue-300 inline">useState</div>(null);
                                        <br />
                                        <div className="text-green-400">// Fetching API...</div>
                                        <div className="text-purple-400">return</div> (
                                        <div className="pl-4 text-gray-400">
                                            &lt;<div className="text-blue-300 inline">View</div>&gt;<br />
                                            &nbsp;&nbsp;&lt;<div className="text-blue-300 inline">Header</div> /&gt;<br />
                                            &nbsp;&nbsp;&lt;<div className="text-blue-300 inline">List</div> items={'{'}data{'}'} /&gt;<br />
                                            &lt;/<div className="text-blue-300 inline">View</div>&gt;
                                        </div>
                                        );
                                    </div>
                                    {'}'}

                                    {/* Cursor */}
                                    <div className="w-2 h-4 bg-blue-500 animate-pulse inline-block ml-1" />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent pointer-events-none" />
                                </div>
                            </PhoneFrame>
                        </div>

                        {/* 4. Final Product - Far Right */}
                        <div className="relative mb-12 self-start">
                            <PhoneFrame width={240} height={480} rotate={12} delay={0.4} label="04. Launch">
                                <div className="w-full h-full bg-black relative">
                                    {/* Full Vibrant UI */}
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    </div>

                                    {/* Floating Cards UI */}
                                    <div className="absolute bottom-0 w-full p-6 flex flex-col gap-4">
                                        <div className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400" />
                                                <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded-full font-bold">LIVE</span>
                                            </div>
                                            <div className="h-2 w-2/3 bg-white/40 rounded-full mb-2" />
                                            <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                                        </div>

                                        <button className="w-full py-3 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors">
                                            Open App
                                        </button>
                                    </div>
                                </div>
                            </PhoneFrame>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
}
