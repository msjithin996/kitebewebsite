"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "AR VR MR", href: "/projects/ar-vr-mr" },
    { name: "App Development", href: "/projects/app-development" },
    { name: "Web Development", href: "/projects/web-development" },
    { name: "UI / UX", href: "/projects/ui-ux-design" },
    { name: "AI Consultancy", href: "/projects/ai-consultancy" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light'); // 'light' means white text (for dark bg), 'dark' means black text (for light bg)

    useEffect(() => {
        // Observer to detect which section is in view at the top 
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionTheme = entry.target.getAttribute("data-header-theme");
                    if (sectionTheme === "dark") {
                        setTheme("dark");
                    } else {
                        setTheme("light");
                    }
                }
            });
        };

        // We need a more granular observer that triggers when a section takes up the top area.
        // Actually, detecting which element acts as the "background" for the navbar is tricky with basic IntersectObserver.
        // A better approach: observe all sections passing through a "trigger line" at the top.
        // rootMargin: '-5% 0px -95% 0px' creates a thin strip at the top.

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: "-20px 0px -90% 0px" // Check what's at the top
        });

        const sections = document.querySelectorAll("section");
        sections.forEach((s) => observer.observe(s));

        return () => observer.disconnect();
    }, []);

    const textColor = theme === 'dark' ? 'text-black' : 'text-white';
    const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none transition-colors duration-300">
                <Link href="/" className={`text-2xl font-bold tracking-tighter pointer-events-auto transition-colors duration-300 ${textColor}`}>
                    Kitebe
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    className={`p-2 hover:opacity-80 transition-opacity group pointer-events-auto ${textColor}`}
                >
                    <div className="flex flex-col gap-1.5 items-end">
                        <span className={`w-8 h-0.5 block transition-all group-hover:w-6 ${bgColor}`} />
                        <span className={`w-5 h-0.5 block transition-all group-hover:w-8 ${bgColor}`} />
                    </div>
                    <span className="sr-only">Open menu</span>
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-[#111] text-white flex items-center justify-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 md:right-12 p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 h-full max-h-[80vh]">
                            {/* Navigation Links */}
                            <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-3xl md:text-5xl font-bold tracking-tight transition-colors ${index === 0 ? "text-white" : "text-gray-500 hover:text-gray-300"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Vertical Separator */}
                            <div className="hidden md:block w-px h-64 bg-white/20" />

                            {/* Contact Info */}
                            <div className="flex flex-col gap-8 text-sm text-gray-400 max-w-xs">
                                <div className="space-y-1 leading-relaxed">
                                    <p>Level 4, Dotspace Business Centre,</p>
                                    <p>Total Tower, Elamakara, Edappally,</p>
                                    <p>Cochin, Kerala - 682024</p>
                                </div>
                                <div className="flex gap-6 font-bold text-white">
                                    <Link href="#" className="hover:opacity-70">Fb</Link>
                                    <Link href="#" className="hover:opacity-70">Ig</Link>
                                    <Link href="#" className="hover:opacity-70">In</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
