"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalProjectGallery from "@/components/sections/HorizontalProjectGallery";
import VerticalScrollCards from "@/components/sections/VerticalScrollCards";
import HowWeHelp from "@/components/sections/HowWeHelp";

export default function TestPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check for saved authentication on mount
        const savedAuth = localStorage.getItem("kitebe_test_auth");
        if (savedAuth === "true") {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "1080") {
            localStorage.setItem("kitebe_test_auth", "true");
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("kitebe_test_auth");
        setIsAuthenticated(false);
        setPassword("");
    };

    if (isLoading) {
        return <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center text-white">Loading...</div>;
    }

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen bg-[#1C1C1C] text-white flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-md p-8 bg-white/5 rounded-2xl border border-white/10">
                    <h1 className="text-2xl font-bold mb-6 text-center">Restricted Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Enter Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                                placeholder="••••"
                                autoFocus
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Access Test Environment
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Standard Container Components */}
            <div className="pt-32 pb-20 px-6 md:px-20 lg:px-40 container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Component Playground</h1>
                        <p className="text-gray-400">Environment for testing code snippets and components.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-400 hover:text-red-300 underline"
                    >
                        Logout and Clear Storage
                    </button>
                </div>

                <div className="space-y-20">
                    {/* SECTION 1: Example Snippet Area */}
                    <TestSection title="1. Test Snippet Area" description="A blank canvas for testing new UI elements.">
                        <div className="p-10 border border-dashed border-white/20 rounded-xl flex items-center justify-center bg-white/5">
                            <p className="text-gray-500">Your test code goes here...</p>
                        </div>
                    </TestSection>

                    {/* SECTION 2: Typography Test */}
                    <TestSection title="2. Typography Check" description="Verifying font weights and headings.">
                        <div className="space-y-4 p-8 bg-[#111] rounded-xl border border-white/10">
                            <h1 className="text-5xl font-bold">Heading 1</h1>
                            <h2 className="text-4xl font-bold">Heading 2</h2>
                            <h3 className="text-3xl font-medium">Heading 3</h3>
                            <p className="text-base text-gray-400">Regular paragraph text with standard leading and color.</p>
                            <p className="text-sm text-gray-500">Small caption text for details.</p>
                        </div>
                    </TestSection>

                    {/* SECTION 3: Animation Test */}
                    <TestSection title="3. Animation Sandbox" description="Testing hover effects and transitions.">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="h-20 bg-blue-500 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center">Hover Me</div>
                            <div className="h-20 bg-purple-500 rounded-lg hover:rotate-3 transition-transform duration-300 cursor-pointer flex items-center justify-center">Tilt Me</div>
                            <div className="h-20 bg-green-500 rounded-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-shadow duration-300 cursor-pointer flex items-center justify-center">Glow Me</div>
                            <div className="h-20 bg-red-500 rounded-lg hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer flex items-center justify-center">Lift Me</div>
                        </div>
                    </TestSection>

                    {/* SECTION 4: Scroll Reveal Animation */}
                    <TestSection title="4. Scroll Reveal Animation" description="Scroll-driven text opacity reveal with custom links.">
                        <div className="py-20">
                            <ScrollRevealText />
                        </div>
                    </TestSection>
                </div>
            </div>

            {/* Full Width Sections */}
            <div className="space-y-20 pb-20">
                {/* SECTION 5: Horizontal Gallery Scroll */}
                <div>
                    <div className="px-6 md:px-20 lg:px-40 container mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">5. Horizontal Gallery Scroll</h2>
                            <p className="text-gray-500 text-sm font-mono">Sticky horizontal scroll gallery inspired by standard pinned scrolling effects.</p>
                        </div>
                    </div>
                    <HorizontalProjectGallery />
                </div>

                {/* SECTION 6: Vertical Scroll Cards */}
                <div>
                    <div className="px-6 md:px-20 lg:px-40 container mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">6. Vertical Scroll Cards</h2>
                            <p className="text-gray-500 text-sm font-mono">Sticky vertical card stack animation.</p>
                        </div>
                    </div>
                    <VerticalScrollCards />
                </div>

                {/* SECTION 7: How We Help Our Clients */}
                <div>
                    <div className="px-6 md:px-20 lg:px-40 container mx-auto mb-6">
                        <div className="border-l-2 border-white/20 pl-8 py-2">
                            <h2 className="text-2xl font-mono mb-2">7. How We Help Our Clients</h2>
                            <p className="text-gray-500 text-sm font-mono">Service offerings section with grid layout.</p>
                        </div>
                    </div>
                    <HowWeHelp />
                </div>
            </div>

            <Footer />
        </main>
    );
}

// Scroll-driven text reveal component
function ScrollRevealText() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const segments = [
        { text: "Our mission is to ", type: "text" },
        { text: "blend creativity ", type: "link", href: "#" },
        { text: "with ", type: "text" },
        { text: "technology", type: "link", href: "#" },
        { text: ", delivering exceptional results that elevate your brand and ", type: "text" },
        { text: "connect ", type: "link", href: "#" },
        { text: "you with your audience.", type: "text" }
    ];

    // Create a flat array of words to animate individually
    const words = segments.flatMap((segment) =>
        segment.text.split(" ").map(word => ({ ...segment, word }))
    );

    return (
        <div ref={containerRef} className="flex flex-col items-center text-center">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-gray-400">passion showcases</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            </div>

            {/* Main Text */}
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] max-w-5xl mx-auto flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
                {words.map((item, i) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const start = i / words.length;
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const end = start + (1 / words.length);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                    if (!item.word) return null;

                    return (
                        <motion.span
                            key={i}
                            style={{ opacity }}
                            className={item.type === "link"
                                ? "text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
                                : "text-[#d1d5dc]"}
                        >
                            {item.word}
                        </motion.span>
                    );
                })}
            </h3>
        </div>
    );
}

// Helper Component for consistent section styling
function TestSection({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    return (
        <section className="border-l-2 border-white/20 pl-8 py-2">
            <h2 className="text-2xl font-mono mb-2">{title}</h2>
            <p className="text-gray-500 mb-6 text-sm font-mono">{description}</p>
            <div>
                {children}
            </div>
        </section>
    );
}

