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

// Utility to force light-mode styles on blocks (Preserved)
const forceLightMode = (blocks: Block[]): Block[] => {
    return blocks.map(block => {
        const newBlock = JSON.parse(JSON.stringify(block));
        if (!newBlock.data.style) newBlock.data.style = {};

        // Content: remove padding tokens that block renderer might add
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

    // EXTRACT HEADER DATA
    // Find the 'research-header' block to drive the page layout
    const headerBlock = article.blocks?.find(b => b.type === "research-header");
    const headerData = (headerBlock?.data || {}) as any;

    // Use header block data, falling back to article top-level fields
    const displayTitle = headerData.title || article.title;
    const displayDescription = headerData.description || article.description;
    const displayDate = headerData.date || (article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' }) : "");
    const displayCategory = headerData.category || article.tags?.[0] || "Research";
    const displayReadingTime = headerData.metadata?.find((m: any) => m.label.toLowerCase() === "read time")?.value || "5 min";
    const displayAuthor = headerData.author || { name: article.author || "Unknown" };
    const displayMetadata = headerData.metadata || [];

    // FILTER CONTENT BLOCKS
    // Exclude the header block from the renderer to prevent double printing
    const contentBlocks = (article.blocks || []).filter(b => b.type !== "research-header");
    const lightBlocks = forceLightMode(contentBlocks);

    return (
        <main className="min-h-screen bg-[#F9F9F5] text-[#111] selection:bg-black selection:text-white font-sans">
            <div className="bg-[#1C1C1C]">
                <Navbar />
            </div>

            <div className="max-w-[1400px] mx-auto pt-24 pb-32 px-6 lg:px-12">
                {/* Back Button */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/20 px-4 py-2 hover:bg-black hover:text-white transition-colors">
                        <ArrowLeft size={16} /> Go Back
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_25px_260px] gap-0">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="pr-0 lg:pr-16">
                        {/* Title Section (Driven by Header Block Data) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <div className="mb-8 flex items-center gap-4">
                                <span className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-full uppercase font-bold tracking-wider text-[10px] border border-blue-600/20">
                                    {displayCategory}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium tracking-tight leading-[1] mb-8 text-[#111]">
                                {displayTitle}
                            </h1>

                            {displayDescription && (
                                <div
                                    className="rich-text max-w-none text-gray-600 mb-12"
                                    dangerouslySetInnerHTML={{ __html: displayDescription }}
                                />
                            )}
                        </motion.div>

                        {/* Blocks Display (Excluding Header) */}
                        <div className="blog-light-mode space-y-12">
                            <style jsx global>{`
                                .blog-light-mode .container { padding: 0 !important; max-width: 100% !important; margin: 0 !important; }
                                .blog-light-mode h2 { font-size: 2rem !important; margin-bottom: 1.5rem !important; color: #111 !important; }
                                .blog-light-mode p { font-size: 1.125rem !important; line-height: 1.8 !important; color: #333 !important; }
                            `}</style>
                            <BlockRenderer blocks={lightBlocks} />
                        </div>
                    </div>

                    {/* CENTER: Vertical Divider */}
                    <div className="hidden lg:block relative">
                        <div className="absolute top-0 bottom-0 left-[12px] w-px bg-black/10"></div>
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar (Driven by Header Block Data) */}
                    <aside className="mt-12 lg:mt-0 lg:pl-8">
                        <div className="lg:sticky lg:top-32 space-y-10">

                            {/* Date */}
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Date</p>
                                <p className="font-medium text-sm">{displayDate}</p>
                            </div>

                            {/* Dynamic Metadata */}
                            {displayMetadata.map((meta: any, idx: number) => (
                                <div key={idx}>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">{meta.label}</p>
                                    <p className="font-medium text-sm">{meta.value}</p>
                                </div>
                            ))}

                            {/* Author */}
                            <div className="pt-8 border-t border-black/10">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Author</p>
                                <div className="flex items-start gap-4">
                                    {displayAuthor.avatar && (
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-black/5">
                                            <img src={displayAuthor.avatar} alt={displayAuthor.name} className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold text-sm text-[#111] mb-1">{displayAuthor.name}</h4>
                                        {displayAuthor.role && <p className="text-xs text-gray-500 mb-2">{displayAuthor.role}</p>}
                                        {displayAuthor.bio && (
                                            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mb-3">{displayAuthor.bio}</p>
                                        )}
                                        {displayAuthor.socials && displayAuthor.socials.length > 0 && (
                                            <div className="flex gap-2">
                                                {displayAuthor.socials.map((s: any, i: number) => (
                                                    <Link key={i} href={s.url || '#'} className="text-gray-400 hover:text-black transition-colors" target="_blank" title={s.platform}>
                                                        {s.platform === 'twitter' && <Twitter size={14} />}
                                                        {s.platform === 'linkedin' && <Linkedin size={14} />}
                                                        {s.platform === 'facebook' && <Facebook size={14} />}
                                                        {!['twitter', 'linkedin', 'facebook'].includes(s.platform) && <div className="w-3 h-3 bg-gray-400 rounded-full" />}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

            <div className="bg-[#1C1C1C] text-white">
                <Footer />
            </div>
        </main>
    );
}
