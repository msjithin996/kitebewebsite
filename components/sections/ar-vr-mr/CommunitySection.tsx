"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CommunitySection() {
    return (
        <section className="relative bg-black text-white h-[80vh] flex flex-col items-center justify-center overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1626387346567-c878967e163b?q=80&w=2670&auto=format&fit=crop"
                    alt="VR Community"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-6">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-none">
                    JOIN OUR <br /> METAVERSE COMMUNITY
                </h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                    <Link
                        href="/contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        GET STARTED
                        <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                    </Link>
                    <Link
                        href="/community"
                        className="group flex items-center gap-2 px-8 py-4 border border-white/30 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
                    >
                        DISCORD
                    </Link>
                </div>

                <div className="mt-24">
                    <p className="text-gray-400 text-sm tracking-widest uppercase">Let's Collaborate</p>
                    <a href="mailto:hello@kitebe.in" className="text-4xl md:text-6xl font-bold underline decoration-1 underline-offset-8 mt-4 block hover:text-blue-400 transition-colors">
                        DROP US A LINE
                    </a>
                </div>
            </div>
        </section>
    );
}
