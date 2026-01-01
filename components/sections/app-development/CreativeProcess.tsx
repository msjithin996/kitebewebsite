"use client";

import { motion } from "framer-motion";

export default function CreativeProcess() {
    return (
        <section className="py-32 px-6 md:px-20 lg:px-40 bg-black text-white border-t border-white/10">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-medium mb-16">Creative Process</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1: Modular Strategy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Graphic */}
                        <div className="relative aspect-square w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] p-4">
                            {/* Abstract Shapes */}
                            <div className="absolute inset-0 flex">
                                <div className="w-1/2 h-full bg-[#A78BFA]/20 rounded-l-[40px]" />
                                <div className="w-1/2 h-full bg-transparent rounded-r-[40px]" />
                            </div>
                            <svg className="absolute inset-0 w-full h-full text-[#A78BFA]" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M50 0 V100 M0 50 H100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                                <path d="M30 30 Q50 50 30 70 T30 30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                            </svg>
                            {/* Custom Shape approximation of the image */}
                            <div className="absolute top-4 left-4 right-1/2 bottom-1/2 bg-[#7C3AED] rounded-[30px] rounded-br-none" />
                            <div className="absolute top-1/2 left-1/2 right-4 bottom-4 bg-[#4C1D95]/30 rounded-[30px] rounded-tl-none backdrop-blur-sm" />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-medium mb-3">Modular Strategy</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We break down complex requirements into independent, reusable modules. This ensures flexibility, easier maintenance, and scalability at any level.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Macro Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Graphic */}
                        <div className="relative aspect-square w-full rounded-[40px] overflow-hidden bg-[#FFC107] p-8 flex items-center justify-center gap-2">
                            {/* Three Pillars */}
                            <div className="h-full w-1/3 bg-[#FFD54F] rounded-[50px] border-2 border-black/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                            </div>
                            <div className="h-full w-1/3 bg-[#FFCA28] rounded-[50px] border-2 border-black/5 relative overflow-hidden scale-y-110">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                {/* Connecting line */}
                                <div className="absolute top-1/2 left-[-50%] right-[-50%] h-[2px] bg-black/10" />
                            </div>
                            <div className="h-full w-1/3 bg-[#FFD54F] rounded-[50px] border-2 border-black/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                            </div>

                            {/* Thin red line overlay from image */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                                <path d="M20 40 Q50 60 80 40" fill="none" stroke="#EF4444" strokeWidth="1" opacity="0.6" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-medium mb-3">Macro Design</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Building an unconventional UI requires a solid macro structure. We focus on the bigger picture, defining layouts that prioritize user flow and clarity.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Organic Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Graphic */}
                        <div className="relative aspect-square w-full rounded-[40px] overflow-hidden bg-[#FF4757] p-8">
                            {/* Organic Shapes */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-[#FF6B81] rounded-[40px] rotate-3 relative">
                                    <div className="absolute inset-0 rounded-[40px] border border-white/20" />
                                </div>
                            </div>

                            {/* Looping Line */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                <path
                                    d="M20 80 C 20 50, 20 20, 50 20 C 80 20, 80 50, 80 80"
                                    fill="none"
                                    stroke="#FFEAA7"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <circle cx="80" cy="80" r="3" fill="#FFEAA7" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-medium mb-3">Organic Flow</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We focus on organic motion to connect the journey. Every interaction feels natural, fluid, and responsive, mimicking real-world physics.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Colorful Execution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Graphic */}
                        <div className="relative aspect-square w-full rounded-[40px] overflow-hidden bg-[#111] border border-white/10 p-4">
                            {/* Wireframe Shapes */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                {/* Shape 1 - Red */}
                                <rect x="10" y="20" width="30" height="60" rx="15" fill="none" stroke="#FF4757" strokeWidth="1.5" />

                                {/* Shape 2 - Green */}
                                <rect x="35" y="10" width="30" height="60" rx="15" fill="none" stroke="#2ED573" strokeWidth="1.5" />

                                {/* Shape 3 - Blue */}
                                <rect x="60" y="30" width="30" height="50" rx="15" fill="none" stroke="#3742FA" strokeWidth="1.5" />

                                {/* Connecting Lines */}
                                <path d="M25 50 H75" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                            </svg>

                            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-500">
                                EXEC_V1.0
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-2xl font-medium mb-3">Colorful Execution</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                For the codification of the visual layers of experience, we append vivid palettes and bold contrasts to bring the application’s personality to life.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
