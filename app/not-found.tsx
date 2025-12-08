"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black">
      {/* Logo */}
      <div className="absolute top-6 left-6 md:left-12 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white mix-blend-difference">
            Kitebe
        </Link>
      </div>

      {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-[#111] select-none mix-blend-difference">
                        404
                    </h1>
                    {/* Floating Zero */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[300px] md:h-[300px] border-[1px] border-white/20 rounded-full"
                        animate={{
                            rotateX: [0, 180, 360],
                            rotateY: [0, 180, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="absolute inset-0 border-[1px] border-white/10 rounded-full rotate-45" />
                        <div className="absolute inset-0 border-[1px] border-white/10 rounded-full -rotate-45" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="space-y-8 -mt-12 md:-mt-24 relative z-20"
                >
                    <h2 className="text-2xl md:text-4xl font-light tracking-wide">
                        Gravity Failure
                    </h2>

                    <p className="text-gray-500 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                        The coordinates you entered point to a void. <br className="hidden md:block" />
                        Let's get you back to solid ground.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Return Home</span>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
        </div>
    );
}
