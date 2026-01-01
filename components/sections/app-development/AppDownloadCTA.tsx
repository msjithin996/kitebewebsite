"use client";

import { motion } from "framer-motion";

export default function AppDownloadCTA() {
    return (
        <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-20">
            <div className="container mx-auto flex flex-col items-center text-center">

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[1.1]">
                    Change your life <br className="hidden md:block" />
                    with challenges
                </h2>

                {/* Subtext */}
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-20 font-medium leading-relaxed">
                    75 Hard is a transformative program designed to build <br className="hidden md:block" />
                    mental toughness and improve health.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

                    {/* App Store Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#151515] text-white p-10 rounded-[40px] h-[320px] flex flex-col justify-between items-start text-left shadow-2xl cursor-pointer"
                    >
                        {/* Apple Icon */}
                        <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.42-1.75-2.51-3.08-7.04-1.28-10.16 0.88-1.54 2.48-2.51 4.18-2.54 1.3-.03 2.52.88 3.3.88.78 0 2.22-1.09 3.75-0.93 0.63.03 2.43.25 3.57 1.94-0.1 0.05-2.12 1.25-2.1 3.76s1.67 3.01 1.76 3.05zm-4.32-15.08c0.69-0.84 1.15-2.02 1.04-3.19-1.02.04-2.27.68-2.99 1.54-0.65.75-1.2 1.98-1.05 3.13 1.14.09 2.31-0.61 3-1.48z" />
                        </svg>

                        <div>
                            <span className="block text-xl font-medium text-gray-400 mb-1">Open</span>
                            <span className="block text-3xl font-bold tracking-tight">App Store</span>
                        </div>
                    </motion.div>

                    {/* Google Play Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#151515] text-white p-10 rounded-[40px] h-[320px] flex flex-col justify-between items-start text-left shadow-2xl cursor-pointer"
                    >
                        {/* Play Store Icon */}
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3.85902V20.141C5 20.84 5.79054 21.2482 6.36863 20.8477L11.5318 17.2721L17.5 13.1332L6.37568 3.14917C5.79726 2.74706 5 3.15546 5 3.85902Z" fill="#fff" fillOpacity="0.5" />
                            <path d="M18.6667 14.1843L12.3333 17.8281L11.5318 17.2721L17.5 13.1332L18.6667 14.1843Z" fill="#fff" fillOpacity="0.6" />
                            {/* Simplified Triangle Shape for clean look matching reference */}
                            <path d="M4 4L20 12L4 20V4Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" />
                            <path d="M4 4L14 12" stroke="white" strokeWidth="2" />
                        </svg>

                        <div>
                            <span className="block text-xl font-medium text-gray-400 mb-1">Open</span>
                            <span className="block text-3xl font-bold tracking-tight">Google Play</span>
                        </div>
                    </motion.div>

                    {/* Scan/QR Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#151515] text-white p-10 rounded-[40px] h-[320px] flex flex-col justify-between items-start text-left shadow-2xl cursor-pointer"
                    >
                        {/* Dot Matrix Pattern */}
                        <div className="w-[72px] h-[72px] grid grid-cols-6 gap-1.5 p-1">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className={`rounded-full bg-white ${i % 2 === 0 || i > 25 ? 'opacity-30' : 'opacity-90'} w-full h-full`} />
                            ))}
                        </div>

                        <div>
                            <span className="block text-xl font-medium text-gray-400 mb-1">Scan</span>
                            <span className="block text-3xl font-bold tracking-tight">to download</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
