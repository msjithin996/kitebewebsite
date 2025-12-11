"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import BlockRenderer, { Block } from "@/components/blocks/BlockRenderer";
import { Facebook, Instagram, Linkedin, Twitter, Loader2 } from "lucide-react";

interface ProjectData {
    title: string;
    blocks: Block[];
    tags?: string[];
}

export default function ProjectDynamicPage() {
    const { slug } = useParams();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProject() {
            if (!slug) return;

            try {
                // Determine the document ID. Assuming the slug IS the document ID.
                const docRef = doc(db, "projects", slug as string);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProject(docSnap.data() as ProjectData);
                } else {
                    setError("Project not found");
                }
            } catch (err) {
                console.error("Error fetching project:", err);
                setError("Failed to load project");
            } finally {
                setLoading(false);
            }
        }

        fetchProject();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center text-white">
                <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-gray-400">{error || "Project not found"}</p>
                <a href="/" className="mt-8 text-sm underline hover:text-gray-300">Return Home</a>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            <Navbar />

            {/* Removed parent container to allow full-width blocks */}
            <div className="pt-32 pb-20">
                {/* DEBUG: View Raw Data */}
                <pre className="bg-gray-800 p-4 rounded mb-8 text-xs overflow-auto max-h-60 text-green-400 container mx-auto" style={{ display: 'none' }}>
                    {JSON.stringify(project, null, 2)}
                </pre>

                <BlockRenderer blocks={project.blocks || []} />
            </div>

            {/* Restored Footer/Contact Section with Container */}
            <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 gap-8 mt-32">
                    <div className="flex gap-3">
                        {project.tags?.map((tag) => (
                            <span key={tag} className="px-6 py-2 rounded-full border border-white/20 text-sm text-[#CCC] hover:border-white hover:text-white transition-colors cursor-default">
                                {tag}
                            </span>
                        )) || (
                                <span className="text-gray-600 text-sm">No tags</span>
                            )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
