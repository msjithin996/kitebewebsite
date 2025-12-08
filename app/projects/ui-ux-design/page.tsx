"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

export default function UiUxDesignPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#DB0000] selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-10 px-6 md:px-20 lg:px-40 min-h-[70vh] flex flex-col justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-[#DB0000]/20 to-transparent opacity-50" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-[80%]">
                        <Image
                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
                            alt="Abstract Design"
                            fill
                            className="object-cover opacity-60 mix-blend-screen rounded-l-3xl"
                        />
                    </div>
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <h1 className="text-[100px] md:text-[150px] font-bold leading-[0.8] tracking-tighter mb-4">
                            UI/UX<br />
                            Design
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-12 px-6 md:px-20 lg:px-40 relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full border border-[#DB0000] text-[#DB0000] text-xs uppercase tracking-widest mb-8">
                                Capability
                            </span>
                            <h3 className="text-2xl md:text-4xl font-light leading-tight mb-12">
                                At Kitebe, we don't just design screens. We engineer user journeys.
                                <span className="text-gray-500"> Dark, edgy, or clean and minimal — we craft interfaces that align perfectly with your brand's DNA and business goals.</span>
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Strategy", value: "Research & Insights" },
                                { label: "Design", value: "UI & Visuals" },
                                { label: "Experience", value: "UX & Interaction" },
                                { label: "System", value: "Scalable Assets" }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5">
                                    <h4 className="text-lg font-bold mb-1">{item.label}</h4>
                                    <p className="text-gray-500 text-sm uppercase">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-20 px-6 md:px-20 lg:px-40 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-10 pointer-events-none">
                    <span className="text-[20vw] font-bold text-[#222] leading-none">process</span>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="mb-20">
                        <span className="inline-block px-4 py-1 rounded-full border border-[#DB0000] text-[#DB0000] text-xs uppercase tracking-widest mb-8">
                            Our Approach
                        </span>
                        <p className="text-2xl text-gray-400 max-w-3xl">
                            We follow a battle-tested framework to ensure every pixel serves a purpose. From chaos to clarity, we guide your product to launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { phase: "Phase 01", title: "Discovery", desc: "Research, User Personas, & Competitor Analysis", color: "bg-white text-black" },
                            { phase: "Phase 02", title: "Wireframe", desc: "Information Architecture & User Flows", color: "bg-[#111] border border-white/10" },
                            { phase: "Phase 03", title: "Design", desc: "High-Fidelity UI, Motion, & Prototyping", color: "bg-[#111] border border-white/10" },
                            { phase: "Phase 04", title: "Handoff", desc: "Design Systems & Developer Documentation", color: "bg-[#DB0000] text-white" }
                        ].map((step, i) => (
                            <div key={i} className={`p-8 rounded-3xl h-[300px] flex flex-col justify-between ${step.color}`}>
                                <span className="text-xs opacity-60 uppercase tracking-widest">{step.phase}</span>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-sm opacity-70">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography & Colors - Design System Showcase */}
            <section className="py-20 px-6 md:px-20 lg:px-40 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container mx-auto">
                    <h2 className="text-[10vw] font-bold leading-none text-[#222] mb-12 text-left select-none tracking-tighter">
                        design<span className="text-[#1a1a1a]">systems</span>
                    </h2>
                    <p className="text-left text-gray-400 max-w-2xl mb-20 text-xl leading-relaxed">
                        Scalability isn't an afterthought. We architect atomic design systems that serve as the single source of truth—ensuring consistency, accelerating development, and future-proofing your product.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Typography Card */}
                        <div className="bg-[#111] rounded-[40px] p-12 border border-white/5 relative overflow-hidden min-h-[500px] flex flex-col">
                            <div className="absolute bottom-[-20px] left-[-20px] text-[300px] font-bold leading-none text-white/5 select-none pointer-events-none">Aa</div>
                            <div className="relative z-10 text-right self-end mb-auto">
                                <h3 className="text-3xl font-bold mb-4">DM Sans</h3>
                                <p className="text-gray-500 text-sm max-w-[250px]">We select and pair fonts that embody your brand's voice, ensuring readability and impact across all devices.</p>
                            </div>
                            <div className="relative z-10 mt-12">
                                <p className="text-3xl font-light leading-relaxed text-white/90 break-words font-mono">
                                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                                </p>
                                <p className="text-3xl font-light leading-relaxed text-white/90 mt-4 font-mono">
                                    01 23 45 67 89
                                </p>
                            </div>
                        </div>

                        {/* Colors Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white text-black p-8 rounded-3xl flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold block">Primary</span>
                                    <span className="text-sm opacity-60 font-mono">#FFFFFF</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-black/10 bg-white" />
                            </div>
                            <div className="bg-[#E9E9E9] text-black p-8 rounded-3xl flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold block">Secondary</span>
                                    <span className="text-sm opacity-60 font-mono">#E9E9E9</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-black/10 bg-[#E9E9E9]" />
                            </div>
                            <div className="bg-[#DB0000] text-white p-8 rounded-3xl flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold block">Accent</span>
                                    <span className="text-sm opacity-80 font-mono">#DB0000</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-[#DB0000]" />
                            </div>
                            <div className="bg-black text-white border border-white/10 p-8 rounded-3xl flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold block">Neutral</span>
                                    <span className="text-sm opacity-60 font-mono">#000000</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities List */}
            <section className="py-20 px-6 md:px-20 lg:px-40 bg-white text-black">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <span className="inline-block px-4 py-1 rounded-full border border-[#DB0000] text-[#DB0000] text-xs uppercase tracking-widest mb-6">
                                Expertise
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                                Not just pretty.<br />
                                <span className="text-gray-400">Functional.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {[
                            {
                                title: "User Research",
                                desc: "Understanding your users deeply to build products they actually need. We dig into data, behavior, and motivations.",
                                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                            },
                            {
                                title: "Interaction Design",
                                desc: "Creating fluid, intuitive interactions that make your app feel alive and responsive.",
                                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                            },
                            {
                                title: "Prototyping",
                                desc: "High-fidelity prototypes to validate ideas and test flows before writing a single line of code.",
                                img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop"
                            },
                            {
                                title: "Visual Design",
                                desc: "World-class aesthetics that elevate your brand perception and stand out in the market.",
                                img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative border-t border-gray-200 py-16 transition-all hover:bg-gray-50">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                                    <h3 className="text-4xl md:text-6xl font-bold mb-4 md:mb-0 group-hover:translate-x-4 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-gray-500 max-w-md text-lg md:text-right group-hover:text-black transition-colors">{item.desc}</p>
                                </div>

                                {/* Hover Image Reveal */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
            </section>

            {/* Not Just Another Studio */}
            <section className="py-20 px-6 md:px-20 lg:px-40 bg-white text-black">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
                        <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight max-w-3xl mb-8 lg:mb-0">
                            We are not just<br />
                            another web<br />
                            studio.
                        </h2>
                        <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                            We build digital tools that make businesses sharper, faster, and impossible to ignore.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { title: "Team Power", desc: "A tight crew where strategy, design, and code move as one.", bg: "bg-black text-white" },
                            { title: "Business Impact", desc: "We don't sell pretty websites. We create digital products that cut costs.", bg: "bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop')] bg-cover text-white" },
                            { title: "Clarity", desc: "You'll always know what we do, why we do it, and how it moves your business.", bg: "bg-[url('/images/ui-ux/glasstexture.png')] bg-cover bg-center text-black" },
                            { title: "Edge", desc: "We push brands out of the comfort zone. That's where growth starts.", bg: "bg-[#E5E5E5] text-black" }
                        ].map((card, i) => (
                            <div key={i} className={`p-8 rounded-3xl aspect-square flex flex-col justify-end ${card.bg} relative overflow-hidden group`}>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                    <p className="text-xs opacity-80 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 md:px-20 lg:px-40 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/ui-ux/redtexture.jpg')] bg-cover bg-center" />

                <div className="container mx-auto relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
                        Your success is not<br />
                        a dream — it's a system.
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-white text-black p-8 rounded-3xl max-w-sm text-left">
                            <h3 className="text-2xl font-bold mb-2">You bring the vision</h3>
                            <p className="text-gray-600 text-sm">You know where you want to go, what your business can become.</p>
                        </div>
                        <div className="bg-black text-white p-8 rounded-3xl max-w-sm text-left">
                            <h3 className="text-2xl font-bold mb-2">We bring the execution</h3>
                            <p className="text-gray-400 text-sm">We turn your ideas into reality with precision, speed, and bold design.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
