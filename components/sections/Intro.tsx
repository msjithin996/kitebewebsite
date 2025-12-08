"use client";

import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="pt-20 md:pt-32 pb-10 md:pb-16 px-6 md:px-20 lg:px-40 bg-[#1C1C1C] text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-12">
                <div className="pt-2">
                    <h2 className="text-[32px] font-normal text-white mb-4">
                        Our Experties
                    </h2>
                    <p className="text-[21px] text-gray-400 italic leading-relaxed max-w-xs">
                        Shaping tomorrow,<br />
                        one smart step at a time.
                    </p>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[40px] md:text-[56px] font-normal leading-tight mb-8 tracking-tight"
                    >
                        We transform businesses with bold, future-ready strategies.
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[40px] md:text-[56px] text-gray-500 font-normal leading-tight tracking-tight"
                    >
                        Because real growth starts with smarter company moves.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
