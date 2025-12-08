"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TalkTribePage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-end pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
                        alt="TalkTribe AI Chatbot"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-40">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-medium tracking-tight mb-6"
                    >
                        TalkTribe
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                    >
                        Have meaningful conversations with AI. Your intelligent companion for learning, creativity, and everyday tasks.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 md:px-20 lg:px-40">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
                        <div>
                            <h2 className="text-3xl font-medium mb-6">Overview</h2>
                            <div className="w-full h-px bg-white/20 mb-8" />
                            <div className="space-y-4 text-gray-400 text-sm">
                                <p><span className="text-white block mb-1">Product Type</span> AI Chat Application</p>
                                <p><span className="text-white block mb-1">Industry</span> Technology / AI</p>
                                <p><span className="text-white block mb-1">Year</span> 2024</p>
                            </div>
                        </div>

                        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
                            <p>
                                TalkTribe is an advanced AI chatbot application designed to provide intelligent, context-aware conversations. Whether you need help with brainstorming ideas, learning new concepts, writing content, or simply having an engaging conversation, TalkTribe is your go-to companion.
                            </p>
                            <p>
                                Built with cutting-edge natural language processing technology, TalkTribe understands context, remembers your conversation history, and adapts to your communication style. It's like having a knowledgeable friend available 24/7.
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="mt-32">
                        <h2 className="text-3xl font-medium mb-12">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Natural Conversations",
                                    description: "Engage in human-like conversations with AI that truly understands context and nuance."
                                },
                                {
                                    title: "Multi-Purpose Assistant",
                                    description: "From creative writing to code debugging, TalkTribe helps with a wide range of tasks."
                                },
                                {
                                    title: "Personalized Experience",
                                    description: "The AI learns your preferences and adapts its responses to match your style."
                                },
                                {
                                    title: "Secure & Private",
                                    description: "Your conversations are encrypted and never shared. Your privacy is our priority."
                                },
                                {
                                    title: "Cross-Platform",
                                    description: "Access TalkTribe on web, iOS, and Android. Your conversations sync everywhere."
                                },
                                {
                                    title: "Real-time Responses",
                                    description: "Get instant, thoughtful responses powered by state-of-the-art AI technology."
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                                >
                                    <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* How It Works Section */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Column - Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] aspect-[4/3] shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop"
                                        alt="TalkTribe Dashboard Interface"
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />

                                    {/* Video Button */}
                                    <button className="absolute bottom-8 right-8 flex items-center gap-3 bg-white text-black pl-2 pr-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-all hover:scale-105">
                                        <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                                <path d="M5 3l14 9-14 9V3z" />
                                            </svg>
                                        </span>
                                        Watch video
                                    </button>
                                </div>
                            </motion.div>

                            {/* Right Column - Text */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-sm font-mono text-gray-400 mb-6 block">( how it_works )</span>
                                <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-12">
                                    How to Use the<br />
                                    TalkTribe Chatbot<br />
                                    Effectively
                                </h2>

                                <div className="space-y-10">
                                    {[
                                        {
                                            title: "Natural Language Processing (NLP)",
                                            description: "TalkTribe uses advanced NLP algorithms to understand and interpret your input, enabling it to respond in a human-like manner."
                                        },
                                        {
                                            title: "User Intent Recognition",
                                            description: "The chatbot identifies the intent behind your queries, providing relevant answers or performing the right tasks instantly."
                                        },
                                        {
                                            title: "Natural and Rich Responses",
                                            description: "Generate responses with natural language, including formatted text, code blocks, and other elements for informative interactions."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center mt-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                                                <p className="text-gray-400 leading-relaxed text-sm max-w-md">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-14 px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2 group">
                                    EXPLORE_MORE
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Gallery / Screenshots */}
                    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] overflow-hidden rounded-sm"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1675557009875-436f7a7c7f4c?q=80&w=2670&auto=format&fit=crop"
                                alt="AI Chat Interface"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-sm"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?q=80&w=2832&auto=format&fit=crop"
                                alt="AI Technology"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to start chatting?</h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
                                Join thousands of users who are already having intelligent conversations with TalkTribe.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                            >
                                Try TalkTribe Now
                                <span>→</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
