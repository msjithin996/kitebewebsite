"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface CaseStudy {
    id: string;
    category: string;
    title: string;
    date: string;
    slug: string;
}

export default function CaseStudies() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [studies, setStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                // Fetch all projects and filter for research type
                const q = query(collection(db, "projects"));

                const querySnapshot = await getDocs(q);
                const fetchedStudies = querySnapshot.docs
                    .map(doc => {
                        const data = doc.data();

                        // Extract metadata from blocks if available
                        const headerBlock = data.blocks?.find((b: any) => b.type === "research-header");
                        const headerData = headerBlock?.data || {};

                        // Determine date (prefer header date, fallback to createdAt)
                        let dateStr = headerData.date || "";
                        let timestamp = 0;

                        if (!dateStr && data.createdAt) {
                            // Handle ISO string or Firestore Timestamp
                            const d = new Date(data.createdAt.seconds ? data.createdAt.seconds * 1000 : data.createdAt);
                            timestamp = d.getTime();
                            const day = String(d.getDate()).padStart(2, '0');
                            const month = String(d.getMonth() + 1).padStart(2, '0');
                            const year = d.getFullYear();
                            dateStr = `${day}.${month}.${year}`;
                        } else if (dateStr) {
                            timestamp = new Date(dateStr).getTime();
                        }

                        // Ensure date is formatted DD.MM.YYYY even if it came from header as YYYY-MM-DD
                        try {
                            if (dateStr.includes('-')) {
                                const d = new Date(dateStr);
                                if (!isNaN(d.getTime())) {
                                    const day = String(d.getDate()).padStart(2, '0');
                                    const month = String(d.getMonth() + 1).padStart(2, '0');
                                    const year = d.getFullYear();
                                    dateStr = `${day}.${month}.${year}`;
                                }
                            }
                        } catch (e) { }

                        return {
                            id: doc.id,
                            category: headerData.category || data.category || "Research",
                            title: headerData.title || data.title || "Untitled Research",
                            date: dateStr,
                            timestamp: timestamp,
                            slug: data.slug || doc.id,
                            type: data.postType // Use 'postType' as saved by PostEditor
                        };
                    })
                    .filter(item => item.type === "research")
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .slice(0, 10);

                console.log("Fetched studies:", fetchedStudies);
                setStudies(fetchedStudies);
            } catch (error) {
                console.error("Error fetching research studies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudies();
    }, []);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -380 : 380;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(updateScrollButtons, 300);
        }
    };

    if (loading) {
        return (
            <section className="pt-8 pb-24 px-6 md:px-20 lg:px-40 bg-white overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex items-start justify-between mb-12">
                        <h2 className="text-4xl md:text-6xl tracking-tight opacity-50">
                            Loading research...
                        </h2>
                    </div>
                </div>
            </section>
        )
    }

    if (studies.length === 0) return null;

    return (
        <section className="pt-8 pb-24 px-6 md:px-20 lg:px-40 bg-white overflow-hidden">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl tracking-tight"
                    >
                        <span className="font-serif italic font-normal text-black">Our</span>{" "}
                        <span className="font-bold text-black">research studies</span>
                    </motion.h2>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                                ? "border-[#0d3028] text-[#0d3028] hover:bg-[#0d3028] hover:text-white"
                                : "border-gray-300 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                                ? "border-[#0d3028] text-[#0d3028] hover:bg-[#0d3028] hover:text-white"
                                : "border-gray-300 text-gray-300 cursor-not-allowed"
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={updateScrollButtons}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {studies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="min-w-[280px] md:min-w-[320px] snap-start"
                        >
                            <Link href={`/research/${study.slug}`} className="block group">
                                <div className="bg-[#0d3028] hover:bg-[#0f3a30] rounded-2xl p-6 h-[280px] flex flex-col justify-between transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/20">
                                    {/* Category Tag */}
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-[#1a4a40] text-[#8BC4B0] text-xs rounded-full mb-4">
                                            {study.category}
                                        </span>
                                        <h3 className="text-white text-lg font-medium leading-snug line-clamp-3">
                                            {study.title}
                                        </h3>
                                    </div>

                                    {/* Bottom: Date + Arrow */}
                                    <div className="flex items-end justify-between mt-auto pt-6">
                                        <span className="text-[#8BC4B0]/70 text-sm">{study.date}</span>
                                        <div className="w-10 h-10 rounded-full bg-[#1a4a40] flex items-center justify-center text-[#8BC4B0] group-hover:bg-[#8BC4B0] group-hover:text-[#0d3028] transition-colors">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
