"use client";

import { motion } from "framer-motion";

export default function CharacterSection() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-tight">
                    Create Meta Character <br /> With Face Scanning
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden border border-white/10">
                <img
                    src="/images/ar-vr/character-scan.png"
                    alt="Face Scanning"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-blue-500/50 absolute top-[50%] animate-scan shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                </div>

                {/* Overlay Text/UI Elements matching the futuristic scan look could go here */}
                <div className="absolute top-10 left-10 p-4 bg-black/60 backdrop-blur-md rounded border border-white/10">
                    <p className="text-xs text-blue-400 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        SCANNING...
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 90%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 4s linear infinite;
                }
            `}</style>
        </section>
    );
}
