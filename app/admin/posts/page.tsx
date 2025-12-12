"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, Calendar, FileText, Briefcase } from "lucide-react";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface Post {
    id: string;
    title: string;
    slug: string;
    postType?: "project" | "research";
    createdAt?: any;
    updatedAt?: any;
    blocks?: any[];
}

export default function ProjectsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const postsRef = collection(db, "projects");
            // Fetch all posts without ordering to ensure we get legacy posts missing createdAt
            const snapshot = await getDocs(postsRef);

            const postsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Post[];

            // Filter for projects (include undefined for legacy posts)
            const projectPosts = postsData.filter(p => !p.postType || p.postType === "project");

            // Sort client-side: Newest first, with posts missing createdAt at the bottom
            projectPosts.sort((a, b) => {
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA;
            });

            setPosts(projectPosts);
        } catch (error) {
            console.error("Error fetching projects:", error);
            alert("Failed to fetch projects. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (postId: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        setDeleting(postId);
        try {
            await deleteDoc(doc(db, "projects", postId));
            setPosts(posts.filter(p => p.id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Failed to delete post");
        } finally {
            setDeleting(null);
        }
    };

    return (
        <div className="min-h-screen p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Projects</h1>
                    <p className="text-gray-400 mt-1">Manage your portfolio projects</p>
                </div>
                <Link
                    href="/admin/posts/new?type=project"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                >
                    <Plus size={20} />
                    Create New Project
                </Link>
            </div>

            {/* Posts List */}
            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full" />
                </div>
            ) : posts.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                    <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">No projects yet</h3>
                    <p className="text-gray-400 mb-6">Create your first project to get started</p>
                    <Link
                        href="/admin/posts/new?type=project"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                    >
                        <Plus size={20} />
                        Create New Project
                    </Link>
                </div>
            ) : (
                <div className="grid gap-4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between group hover:bg-white/[0.07] transition-colors"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-white mb-1">
                                    {post.title || "Untitled Project"}
                                </h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <FileText size={14} />
                                        {post.blocks?.length || 0} blocks
                                    </span>
                                    <span className="text-gray-600">•</span>
                                    <span className="font-mono text-xs bg-white/10 px-2 py-0.5 rounded">
                                        /{post.slug || post.id}
                                    </span>
                                    {post.postType && (
                                        <>
                                            <span className="text-gray-600">•</span>
                                            <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase">
                                                {post.postType}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link
                                    href={`/projects/${post.slug || post.id}`}
                                    target="_blank"
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                    title="View"
                                >
                                    <Eye size={18} />
                                </Link>
                                <Link
                                    href={`/admin/posts/${post.id}`}
                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                                    title="Edit"
                                >
                                    <Edit size={18} />
                                </Link>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    disabled={deleting === post.id}
                                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                                    title="Delete"
                                >
                                    {deleting === post.id ? (
                                        <div className="animate-spin w-4 h-4 border-2 border-red-400/20 border-t-red-400 rounded-full" />
                                    ) : (
                                        <Trash2 size={18} />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
