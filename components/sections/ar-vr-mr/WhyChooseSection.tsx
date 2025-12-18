"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, BadgeCheck } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                        WHY <br />
                        CHOOSE <br />
                        KITEBE
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md">
                        We blend creativity with technology to build immersive experiences that define the future.
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="flex gap-6">
                        <div className="p-4 bg-white/5 rounded-full h-fit text-blue-400">
                            <BadgeCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-2">Top Quality</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We deliver premium quality immersive experiences with high-fidelity graphics and seamless interactions.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="p-4 bg-white/5 rounded-full h-fit text-purple-400">
                            <Globe size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-2">Globally Renowned</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Recognized by leaders in the industry for pushing the boundaries of what's possible in the metaverse.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="p-4 bg-white/5 rounded-full h-fit text-green-400">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-2">Multiple Security</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Enterprise-grade security protocols ensuring your data and virtual assets are protected at all times.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
