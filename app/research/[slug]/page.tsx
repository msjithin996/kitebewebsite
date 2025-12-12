"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import BlockRenderer, { Block } from "@/components/blocks/BlockRenderer";
import { ArrowLeft, Loader2, Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectData {
    title: string;
    description?: string;
    blocks: Block[];
    tags?: string[];
    author?: string;
    publishedAt?: string;
}

// Utility to force light-mode styles on blocks
const forceLightMode = (blocks: Block[]): Block[] => {
    return blocks.map(block => {
        const newBlock = JSON.parse(JSON.stringify(block));

        if (!newBlock.data.style) newBlock.data.style = {};

        // Content: remove padding tokens that block renderer might add, we want standard prose flow
        if (newBlock.type === "content") {
            newBlock.data.style.titleColor = "#111111";
            newBlock.data.style.textColor = "#333333";
            newBlock.data.style.backgroundColor = "transparent";
            newBlock.data.style.paddingTop = "0";
            newBlock.data.style.paddingBottom = "0";
        }

        // Product Feature
        if (newBlock.type === "product-feature") {
            newBlock.data.style.titleColor = "#111111";
            newBlock.data.style.textColor = "#333333";
            newBlock.data.style.buttonColor = "#111111";
            newBlock.data.style.backgroundColor = "transparent";
        }

        // Carousel
        if (newBlock.type === "carousel") {
            newBlock.data.style.titleColor = "#111111";
            newBlock.data.style.backgroundColor = "transparent";
        }

        // Hero: Ensure it's just an image
        if (newBlock.type === "hero") {
            newBlock.data.style.overlayOpacity = 0;
            newBlock.data.style.titleColor = "transparent";
            newBlock.data.style.titleColor = "rgba(0,0,0,0)";
        }

        return newBlock;
    });
};

export default function ResearchArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArticle() {
            if (!slug) return;

            // FALLBACK: Hardcoded data for 'ar-vr-mr' (Updated with new data structure)
            if (slug === 'ar-vr-mr') {
                setArticle({
                    title: "Things to Look for When Designing Immersive Simulations",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                    author: "Guy Hawkins",
                    publishedAt: "2024-11-15T12:00:00Z",
                    tags: ["Design", "Branding"],
                    blocks: [
                        {
                            id: "hero-1",
                            type: "hero",
                            data: {
                                title: "",
                                imageUrl: "https://images.unsplash.com/photo-1542296332-2e44a99cfef9?q=80&w=2670&auto=format&fit=crop",
                                style: { overlayOpacity: 0, overlayColor: "#000000", imageSize: "100%" }
                            }
                        },
                        {
                            id: "body-text-1",
                            type: "content",
                            data: {
                                title: "Elit ullamcorper dignissim",
                                content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae. Dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p><p>Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum. Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra.</p>",
                                style: {}
                            }
                        },
                        {
                            id: "body-text-2",
                            type: "content",
                            data: {
                                title: "Hendrerit dolor magna",
                                content: "<p>Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.</p>",
                                style: {}
                            }
                        }
                    ]
                });
                setLoading(false);
                return;
            }

            try {
                const docRef = doc(db, "projects", slug as string);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setArticle(docSnap.data() as ProjectData);
                } else {
                    setError("Article not found");
                }
            } catch (err) {
                console.error("Error fetching article:", err);
                setError("Failed to load article");
            } finally {
                setLoading(false);
            }
        }

        fetchArticle();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F9F9F5] flex items-center justify-center text-black">
                <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
            </div>
        );
    }

    if (error || !article) {
        return <div className="min-h-screen bg-[#F9F9F5]" />;
    }

    const lightBlocks = forceLightMode(article.blocks || []);

    return (
        <main className="min-h-screen bg-[#F9F9F5] text-[#111] selection:bg-black selection:text-white font-sans">
            {/* Dark Navbar */}
            <div className="bg-[#1C1C1C]">
                <Navbar />
            </div>

            <div className="max-w-[1400px] mx-auto pt-24 pb-32 px-6 lg:px-12">

                {/* Back Button */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/20 px-4 py-2 hover:bg-black hover:text-white transition-colors">
                        Go Back
                    </Link>
                </div>

                {/* Unified Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_25px_240px] gap-0">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="pr-0 lg:pr-16">
                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.95] mb-8">
                                {article.title}
                            </h1>
                            {article.description && (
                                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                                    {article.description}
                                </p>
                            )}
                        </motion.div>

                        {/* Blocks Display (Image, Text, etc) */}
                        <div className="blog-light-mode space-y-12">
                            <style jsx global>{`
                                .blog-light-mode {
                                    /* Tame the blocks to fit the flow */
                                    .container { padding: 0 !important; max-width: 100% !important; margin: 0 !important; }
                                    
                                    /* Image sizing */
                                    img { border-radius: 4px; }
                                    
                                    /* Typography Overrides */
                                    h2 { font-size: 2rem !important; margin-bottom: 1.5rem !important; color: #111 !important; font-weight: 500 !important; letter-spacing: -0.02em; }
                                    p { font-size: 1.125rem !important; line-height: 1.8 !important; color: #444 !important; margin-bottom: 1.5rem !important; }
                                    
                                    /* Reset backgrounds */
                                    [class*="bg-white/5"] { background-color: transparent !important; padding: 0 !important; }
                                    
                                    /* Grid cleanups for ContentBlock */
                                    .grid { display: block !important; }
                                    .border-t { border-top: none !important; }
                                    .pt-20 { padding-top: 0 !important; }
                                }
                            `}</style>
                            <BlockRenderer blocks={lightBlocks} />
                        </div>
                    </div>

                    {/* CENTER: Vertical Divider */}
                    <div className="hidden lg:block relative">
                        <div className="absolute top-0 bottom-0 left-[12px] w-px bg-black/10"></div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <aside className="mt-12 lg:mt-0 lg:pl-8">
                        <div className="lg:sticky lg:top-32 space-y-10">

                            {/* Meta Data Box */}
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Date</p>
                                    <p className="font-medium text-sm">
                                        {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' }) : "16 June 2022"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Category</p>
                                    <p className="font-medium text-sm uppercase tracking-wide">{article.tags?.[0] || "Design, Branding"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Reading Time</p>
                                    <p className="font-medium text-sm uppercase tracking-wide">10 Min</p>
                                </div>
                            </div>

                            {/* Author Box (Rendered lower down naturally by spacing) */}
                            <div className="pt-20 lg:pt-[450px]"> {/* Push down to match image height roughly */}
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Author</p>
                                <h4 className="font-bold text-lg mb-2">{article.author || "Guy Hawkins"}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                    Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra.
                                </p>
                                <div className="flex gap-3">
                                    <div className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors cursor-pointer"><Facebook size={12} /></div>
                                    <div className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors cursor-pointer"><Twitter size={12} /></div>
                                    <div className="p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-colors cursor-pointer"><Linkedin size={12} /></div>
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#1C1C1C] text-white">
                <Footer />
            </div>
        </main>
    );
}
