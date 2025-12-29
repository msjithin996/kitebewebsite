"use client";

import { useState, useEffect } from "react";
import { Plus, Save, Trash2, ArrowUp, ArrowDown, Layout, Copy, Palette, Type, ArrowLeft } from "lucide-react";
import BlockRenderer, { Block } from "@/components/blocks/BlockRenderer";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ColorPicker from "@/components/admin/ColorPicker";
import SpacingControl from "@/components/admin/SpacingControl";
import AlignmentControl from "@/components/admin/AlignmentControl";
import RichTextEditor from "@/components/admin/RichTextEditor";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ImageUploader from "./ImageUploader";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableBlockWrapper from "./SortableBlockWrapper";
import SortableImageItem from "./SortableImageItem";
import ImageSettingsControl from "@/components/admin/ImageSettingsControl";

// Default configurations for new blocks
const BLOCK_TEMPLATES: Record<string, Block> = {
    hero: {
        type: "hero",
        data: {
            title: "New Project",
            imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
            style: {
                titleColor: "#FFFFFF",
                overlayColor: "#000000",
                overlayOpacity: 0.5,
            }
        }
    },
    intro: {
        type: "intro",
        data: {
            title: "Project Title",
            description: "Project description goes here...",
            metadata: [
                { label: "Client", value: "Client Name" },
                { label: "Year", value: "2024" }
            ],
            style: {
                titleColor: "#FFFFFF",
                textColor: "#AAAAAA",
                backgroundColor: "transparent",
            }
        }
    },
    content: {
        type: "content",
        data: {
            title: "Section Title",
            content: "<p>Content paragraph goes here.</p>",
            style: {
                titleColor: "#FFFFFF",
                textColor: "#AAAAAA",
                backgroundColor: "transparent",
                textAlign: "left" as const,
                paddingTop: "2rem",
                paddingBottom: "2rem",
            }
        }
    },
    "image-grid": {
        type: "image-grid",
        data: {
            images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3"],
            style: {
                gap: "1rem",
                borderRadius: "0.5rem",
            }
        }
    },
    "two-column-text": {
        type: "two-column-text",
        data: {
            title: "Overview",
            content: "<p>Detailed overview of the project goes here...</p>",
            buttonText: "Read More",
            buttonLink: "#",
            style: {
                titleColor: "#FFFFFF",
                textColor: "#9CA3AF",
                backgroundColor: "#111111",
                buttonColor: "#FFFFFF",
                paddingTop: "6rem",
                paddingBottom: "6rem",
            }
        }
    },
    "product-feature": {
        type: "product-feature",
        data: {
            title: "Feature Highlight",
            description: "<p>Describe the key feature of this product...</p>",
            imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e18963",
            reversed: false,
            buttonText: "Shop Now",
            buttonLink: "#",
            style: {
                titleColor: "#FFFFFF",
                textColor: "#9CA3AF",
                backgroundColor: "#1C1C1C",
                buttonColor: "#FFFFFF",
            }
        }
    },
    "carousel": {
        type: "carousel",
        data: {
            title: "Related Projects",
            items: [
                { title: "Project A", subtitle: "Design", imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e18963" },
                { title: "Project B", subtitle: "Dev", imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3" },
                { title: "Project C", subtitle: "Mobile", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f" }
            ],
            style: {
                titleColor: "#FFFFFF",
                backgroundColor: "transparent",
            }
        }
    },
    "brand-values": {
        type: "brand-values",
        data: {
            title: "Brand Value",
            subtitle: "Our Core",
            values: [
                { title: "Functional Value", description: "It is a fashionable lifestyle brand...", subtext: "Brand functional value" },
                { title: "Symbolic Value", description: "The urban new rich class with a spirit...", subtext: "Brand symbolic value" },
                { title: "Emotional Value", description: "Live in fast-paced city, enjoy slow-paced life.", subtext: "Brand emotional value" }
            ],
            style: {
                titleColor: "#FFFFFF",
                textColor: "#9CA3AF",
                backgroundColor: "#000000",
            }
        }
    },
    "impact-text": {
        type: "impact-text",
        data: {
            content: "We design and develop market-defining brands through award-winning deliverables.",
            highlightSubstring: "market-defining brands",
            style: {
                textColor: "#FFFFFF",
                highlightColor: "#3B82F6",
                backgroundColor: "transparent",
                textAlign: "center" as const,
                paddingTop: "4rem",
                paddingBottom: "4rem",
            }
        }
    },
    "research-header": {
        type: "research-header",
        data: {
            title: "Research Title",
            description: "A brief description of the research...",
            date: new Date().toISOString().split('T')[0],
            category: "Research",
            metadata: [
                { label: "Read Time", value: "5 min" }
            ],
            author: {
                name: "Author Name",
                role: "Researcher",
                avatar: "",
                bio: "Short bio about the author.",
                socials: [
                    { platform: "twitter", url: "https://twitter.com" },
                    { platform: "linkedin", url: "https://linkedin.com" }
                ]
            },
            style: {
                titleColor: "#FFFFFF",
                textColor: "#9CA3AF",
                backgroundColor: "transparent",
                paddingTop: "4rem",
                paddingBottom: "4rem",
            }
        }
    },
    "article-section": {
        type: "article-section",
        data: {
            title: "Section Title",
            content: "<p>Write your article content here...</p>",
            style: {
                titleColor: "#FFFFFF",
                textColor: "#CCCCCC",
                backgroundColor: "transparent",
                paddingTop: "2rem",
                paddingBottom: "2rem",
            }
        }
    },
    "bento-grid": {
        type: "bento-grid",
        data: {
            topLeftImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
            topRightImage: "https://images.unsplash.com/photo-1621645558197-293678782fe2",
            topRightTitle: "A more confident you",
            topRightSubtitle: "HOW WILL",
            bottomImage: "https://images.unsplash.com/photo-1616348436168-de43ad0db179",
            style: {
                textColor: "#FFFFFF",
                backgroundColor: "#111111",
                paddingTop: "4rem",
                paddingBottom: "4rem",
            }
        }
    }
};

interface PostEditorProps {
    postId?: string; // If provided, we're editing an existing post
}

export default function PostEditor({ postId }: PostEditorProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedBlockIndex, setSelectedBlockIndex] = useState<number | null>(null);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [postType, setPostType] = useState<"project" | "research">("project");
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(!!postId);
    const [activeSidebarTab, setActiveSidebarTab] = useState<"components" | "layers">("components");
    const isEditing = !!postId;

    // Initialize postType from URL params for new posts
    useEffect(() => {
        if (!isEditing) {
            const type = searchParams.get("type");
            if (type === "research" || type === "project") {
                setPostType(type);
            }
        }
    }, [isEditing, searchParams]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setBlocks((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over?.id);

                // Update selected index if necessary
                if (selectedBlockIndex === oldIndex) setSelectedBlockIndex(newIndex);
                else if (selectedBlockIndex === newIndex) setSelectedBlockIndex(oldIndex); // Roughly correct, handling selection during drag is tricky

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    // Load existing post data if editing
    useEffect(() => {
        if (postId) {
            loadPost(postId);
        }
    }, [postId]);

    const loadPost = async (id: string) => {
        try {
            const docRef = doc(db, "projects", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setTitle(data.title || "Untitled Post");
                setPostType(data.postType || "project");
                setSlug(id);
                // Ensure all blocks have unique IDs
                const loadedBlocks = (data.blocks || []).map((b: Block) => ({
                    ...b,
                    id: b.id || Math.random().toString(36).substr(2, 9)
                }));
                setBlocks(loadedBlocks);
            }
        } catch (error) {
            console.error("Error loading post:", error);
        } finally {
            setLoading(false);
        }
    };

    // Sync Post Title with Research Header Block
    useEffect(() => {
        if (postType === "research") {
            setBlocks(prevBlocks => prevBlocks.map(block => {
                if (block.type === "research-header" && block.data.title !== title) {
                    return {
                        ...block,
                        data: { ...block.data, title: title }
                    };
                }
                return block;
            }));
        }
    }, [title, postType]);

    // Auto-generate slug from title
    useEffect(() => {
        if (!isEditing && title) {
            const generatedSlug = title
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .substring(0, 50);
            setSlug(generatedSlug);
        }
    }, [title, isEditing]);

    const addBlock = (type: string) => {
        const template = BLOCK_TEMPLATES[type];
        if (template) {
            const newBlock = JSON.parse(JSON.stringify(template));
            newBlock.id = Math.random().toString(36).substr(2, 9);

            // If adding a research header, sync with current title immediately
            if (type === "research-header" && title) {
                newBlock.data.title = title;
            }

            setBlocks([...blocks, newBlock]);
            setSelectedBlockIndex(blocks.length);
        }
    };

    const removeBlock = (index: number) => {
        const newBlocks = [...blocks];
        newBlocks.splice(index, 1);
        setBlocks(newBlocks);
        if (selectedBlockIndex === index) setSelectedBlockIndex(null);
    };

    const moveBlock = (index: number, direction: -1 | 1) => {
        if (index + direction < 0 || index + direction >= blocks.length) return;
        const newBlocks = [...blocks];
        const temp = newBlocks[index];
        newBlocks[index] = newBlocks[index + direction];
        newBlocks[index + direction] = temp;
        setBlocks(newBlocks);
        setSelectedBlockIndex(index + direction);
    };

    const updateBlockData = (index: number, newData: any) => {
        const newBlocks = [...blocks];
        newBlocks[index] = { ...newBlocks[index], data: newData };
        setBlocks(newBlocks);
    };

    const savePost = async () => {
        if (!slug) return alert("Please enter a slug");
        if (!title) return alert("Please enter a title");

        setSaving(true);
        try {
            const docId = isEditing ? postId : slug;

            // Check if slug already exists for NEW posts
            if (!isEditing) {
                const docRef = doc(db, "projects", docId!);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    alert(`A post with the ID/URL "${docId}" already exists. Please change the title or custom URL.`);
                    setSaving(false);
                    return;
                }
            }

            await setDoc(doc(db, "projects", docId!), {
                title,
                slug: docId,
                blocks,
                postType,
                updatedAt: new Date().toISOString(),
                ...(!isEditing && { createdAt: new Date().toISOString() }),
            });
            if (postType === "research") {
                router.push("/admin/research");
            } else {
                router.push("/admin/posts");
            }
        } catch (error: any) {
            console.error(error);
            alert("Error saving: " + error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-[#111]">
                <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full" />
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col bg-[#111] text-white overflow-hidden">
            {/* Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#1a1a1a]">
                <div className="flex items-center gap-4">
                    <Link
                        href={postType === "research" ? "/admin/research" : "/admin/posts"}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        title={postType === "research" ? "Back to Research" : "Back to Projects"}
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div className="flex flex-col gap-1">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-lg font-medium text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all min-w-[300px]"
                            placeholder="Enter Post Title Here..."
                        />
                        <div className="flex items-center gap-2 text-xs text-gray-500 px-1">
                            <span>/projects/</span>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="bg-transparent border-b border-transparent hover:border-white/20 focus:border-blue-500 focus:outline-none text-gray-400 focus:text-white transition-colors w-64"
                                placeholder="url-slug"
                                disabled={isEditing}
                            />
                        </div>
                    </div>
                </div>

                {/* Post Type Selector */}
                <select
                    value={postType}
                    onChange={(e) => setPostType(e.target.value as "project" | "research")}
                    className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 mr-4"
                >
                    <option value="project">Project</option>
                    <option value="research">Research/Blog</option>
                </select>

                <button
                    onClick={savePost}
                    disabled={saving}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                >
                    <Save size={16} />
                    {saving ? "Saving..." : isEditing ? "Update Post" : "Save Post"}
                </button>
            </div>


            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar: Components */}
                {/* Left Sidebar: Components & Layers */}
                <div className="w-64 bg-[#1a1a1a] border-r border-white/10 flex flex-col">
                    {/* Sidebar Tabs */}
                    <div className="flex border-b border-white/10">
                        <button
                            onClick={() => setActiveSidebarTab("components")}
                            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider ${activeSidebarTab === "components" ? "bg-white/5 text-white border-b-2 border-blue-500" : "text-gray-500 hover:text-white"}`}
                        >
                            Components
                        </button>
                        <button
                            onClick={() => setActiveSidebarTab("layers")}
                            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider ${activeSidebarTab === "layers" ? "bg-white/5 text-white border-b-2 border-blue-500" : "text-gray-500 hover:text-white"}`}
                        >
                            Layers
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {activeSidebarTab === "components" ? (
                            <div className="p-4">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Add Block</h3>
                                <div className="space-y-2">
                                    {Object.keys(BLOCK_TEMPLATES).map(type => (
                                        <button
                                            key={type}
                                            onClick={() => addBlock(type)}
                                            className="w-full flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 transition-colors text-left group"
                                        >
                                            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-400 group-hover:text-white">
                                                <Plus size={16} />
                                            </div>
                                            <span className="text-sm capitalize">{type.replace('-', ' ')}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="p-4">
                                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Active Layers</h3>
                                <div className="space-y-2">
                                    {blocks.length === 0 ? (
                                        <p className="text-xs text-gray-600 text-center py-4">No blocks added yet.</p>
                                    ) : (
                                        blocks.map((block, index) => (
                                            <div
                                                key={block.id || index}
                                                onClick={() => setSelectedBlockIndex(index)}
                                                className={`flex items-center justify-between p-2 rounded border ${selectedBlockIndex === index ? 'bg-blue-500/10 border-blue-500/50' : 'bg-white/5 border-transparent hover:border-white/10'}`}
                                            >
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <div className="w-5 h-5 rounded flex items-center justify-center bg-gray-800 text-gray-400">
                                                        <span className="text-[10px] font-bold">{index + 1}</span>
                                                    </div>
                                                    <span className="text-sm capitalize truncate w-24">{block.type.replace('-', ' ')}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); moveBlock(index, -1); }}
                                                        disabled={index === 0}
                                                        className="p-1 text-gray-400 hover:text-white disabled:opacity-30"
                                                        title="Move Up"
                                                    >
                                                        <ArrowUp size={14} />
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); moveBlock(index, 1); }}
                                                        disabled={index === blocks.length - 1}
                                                        className="p-1 text-gray-400 hover:text-white disabled:opacity-30"
                                                        title="Move Down"
                                                    >
                                                        <ArrowDown size={14} />
                                                    </button>
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); removeBlock(index); }}
                                                        className="p-1 text-red-500 hover:text-red-400 ml-1"
                                                        title="Remove"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Center Canvas: Live Preview */}
                <div className="flex-1 bg-black overflow-y-auto p-8 relative">
                    <div className="max-w-6xl mx-auto min-h-screen bg-[#1C1C1C] rounded-xl border border-white/10 shadow-2xl relative">
                        {blocks.length === 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                <div className="text-center">
                                    <Layout size={48} className="mx-auto mb-4 opacity-50" />
                                    <p>Canvas is empty. Add a component from the left.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="p-8 pb-32">
                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                >
                                    <SortableContext
                                        items={blocks.map(b => b.id!)}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {blocks.map((block, index) => (
                                            <SortableBlockWrapper
                                                key={block.id}
                                                block={block}
                                                index={index}
                                                isSelected={selectedBlockIndex === index}
                                                onClick={() => setSelectedBlockIndex(index)}
                                                onRemove={() => removeBlock(index)}
                                            />
                                        ))}
                                    </SortableContext>
                                </DndContext>
                            </div>
                        )}
                    </div>
                </div >

                {/* Right Sidebar: Properties */}
                < div className="w-80 bg-[#1a1a1a] border-l border-white/10 flex flex-col" >
                    <div className="p-4 border-b border-white/5">
                        <h3 className="text-xs font-semibold uppercase text-gray-500">Properties</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {selectedBlockIndex !== null && blocks[selectedBlockIndex] ? (
                            <PropertyEditor
                                block={blocks[selectedBlockIndex]}
                                onChange={(newData) => updateBlockData(selectedBlockIndex, newData)}
                            />
                        ) : (
                            <p className="text-gray-600 text-sm text-center mt-10">Select a block to edit its properties.</p>
                        )}
                    </div>
                </div >
            </div >
        </div >
    );
}

// Enhanced Property Editor with Tabs
function PropertyEditor({ block, onChange }: { block: Block; onChange: (data: any) => void }) {
    const [activeTab, setActiveTab] = useState<"content" | "style">("content");
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleImageDragEnd(event: DragEndEvent, items: string[], key: string) {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = items.indexOf(active.id as string);
            const newIndex = items.indexOf(over?.id as string);
            // Fallback if ID is distinct from URL or if strictly using URLs
            if (oldIndex !== -1 && newIndex !== -1) {
                const newOrdering = arrayMove(items, oldIndex, newIndex);
                handleChange(key, newOrdering);
            }
        }
    }

    const handleChange = (key: string, value: any) => {
        onChange({ ...block.data, [key]: value });
    };

    const handleStyleChange = (styleKey: string, value: any) => {
        const currentStyle = (block.data as any).style || {};
        onChange({ ...block.data, style: { ...currentStyle, [styleKey]: value } });
    };

    const style = (block.data as any).style || {};

    // Separate content fields from style
    const contentFields = Object.entries(block.data).filter(([key]) => {
        if (key === "style") return false;
        // Hide title for ResearchHeaderBlock as it's synced with main title
        if (block.type === "research-header" && key === "title") return false;
        return true;
    });

    return (
        <div className="space-y-4">
            {/* Block Type Badge */}
            <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs inline-block uppercase font-bold">
                {block.type}
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10">
                <button
                    onClick={() => setActiveTab("content")}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "content"
                        ? "text-white border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <Type size={14} />
                    Content
                </button>
                <button
                    onClick={() => setActiveTab("style")}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${activeTab === "style"
                        ? "text-white border-b-2 border-blue-500"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <Palette size={14} />
                    Style
                </button>
            </div>

            {/* Content Tab */}
            {activeTab === "content" && (
                <div className="space-y-6">
                    {contentFields.map(([key, value]) => {
                        // Handle Metadata Array
                        if (key === 'metadata' && Array.isArray(value)) {
                            return (
                                <div key={key}>
                                    <label className="block text-xs text-gray-400 mb-2 capitalize">{key}</label>
                                    <div className="space-y-2">
                                        {value.map((item: any, idx: number) => (
                                            <div key={idx} className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={item.label}
                                                    onChange={(e) => {
                                                        const newMeta = [...value];
                                                        newMeta[idx].label = e.target.value;
                                                        handleChange(key, newMeta);
                                                    }}
                                                    className="w-1/3 bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                                    placeholder="Label"
                                                />
                                                <input
                                                    type="text"
                                                    value={item.value}
                                                    onChange={(e) => {
                                                        const newMeta = [...value];
                                                        newMeta[idx].value = e.target.value;
                                                        handleChange(key, newMeta);
                                                    }}
                                                    className="flex-1 bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                                    placeholder="Value"
                                                />
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => handleChange(key, [...value, { label: "", value: "" }])}
                                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                                        >
                                            <Plus size={12} /> Add Field
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        // Handle Carousel Items Array
                        if (key === 'items' && Array.isArray(value)) {
                            return (
                                <div key={key} className="border-t border-white/10 pt-4 mt-4">
                                    <label className="block text-xs text-gray-400 mb-2 capitalize font-bold">{key}</label>
                                    <div className="space-y-4">
                                        {value.map((item: any, idx: number) => (
                                            <div key={idx} className="bg-white/5 p-3 rounded space-y-2 relative group">
                                                <button
                                                    onClick={() => {
                                                        const newItems = [...value];
                                                        newItems.splice(idx, 1);
                                                        handleChange(key, newItems);
                                                    }}
                                                    className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                                >
                                                    <Trash2 size={12} />
                                                </button>
                                                <input type="text" value={item.title} onChange={(e) => { const newItems = [...value]; newItems[idx].title = e.target.value; handleChange(key, newItems); }} className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white" placeholder="Item Title" />
                                                <input type="text" value={item.subtitle || ""} onChange={(e) => { const newItems = [...value]; newItems[idx].subtitle = e.target.value; handleChange(key, newItems); }} className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white" placeholder="Item Subtitle" />

                                                <ImageUploader
                                                    value={item.imageUrl}
                                                    onChange={(url: string) => {
                                                        const newItems = [...value];
                                                        newItems[idx].imageUrl = url;
                                                        handleChange(key, newItems);
                                                    }}
                                                    label="Item Image"
                                                />
                                            </div>
                                        ))}
                                        <button onClick={() => handleChange(key, [...value, { title: "New Item", subtitle: "Description", imageUrl: "https://via.placeholder.com/300" }])} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2">
                                            <Plus size={12} /> Add Item
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        // Handle Brand Values Array
                        if (key === 'values' && Array.isArray(value)) {
                            return (
                                <div key={key} className="border-t border-white/10 pt-4 mt-4">
                                    <label className="block text-xs text-gray-400 mb-2 capitalize font-bold">{key}</label>
                                    <div className="space-y-4">
                                        {value.map((item: any, idx: number) => (
                                            <div key={idx} className="bg-white/5 p-3 rounded space-y-2 relative group">
                                                <button onClick={() => { const newItems = [...value]; newItems.splice(idx, 1); handleChange(key, newItems); }} className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Trash2 size={12} />
                                                </button>
                                                <input type="text" value={item.title} onChange={(e) => { const newItems = [...value]; newItems[idx].title = e.target.value; handleChange(key, newItems); }} className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white" placeholder="Value Title" />
                                                <textarea value={item.description} onChange={(e) => { const newItems = [...value]; newItems[idx].description = e.target.value; handleChange(key, newItems); }} className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white min-h-[60px]" placeholder="Description" />
                                                <input type="text" value={item.subtext || ""} onChange={(e) => { const newItems = [...value]; newItems[idx].subtext = e.target.value; handleChange(key, newItems); }} className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white" placeholder="Subtext (Optional)" />
                                            </div>
                                        ))}
                                        <button onClick={() => handleChange(key, [...value, { title: "New Value", description: "Description goes here...", subtext: "Brand Value" }])} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2">
                                            <Plus size={12} /> Add Value
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        if (Array.isArray(value) && key === 'images') {
                            return (
                                <div key={key} className="border-t border-white/10 pt-4 mt-4">
                                    <label className="block text-xs text-gray-400 mb-2 capitalize font-bold">{key}</label>
                                    <div className="space-y-4">
                                        <DndContext
                                            sensors={sensors}
                                            collisionDetection={closestCenter}
                                            onDragEnd={(e) => handleImageDragEnd(e, value, key)}
                                        >
                                            <SortableContext
                                                items={value}
                                                strategy={verticalListSortingStrategy}
                                            >
                                                {value.map((url: string, idx: number) => (
                                                    <SortableImageItem
                                                        key={url}
                                                        id={url}
                                                        url={url}
                                                        index={idx}
                                                        onChange={(newUrl) => {
                                                            const newImages = [...value];
                                                            newImages[idx] = newUrl;
                                                            handleChange(key, newImages);
                                                        }}
                                                        onRemove={() => {
                                                            const newImages = [...value];
                                                            newImages.splice(idx, 1);
                                                            handleChange(key, newImages);
                                                        }}
                                                    />
                                                ))}
                                            </SortableContext>
                                        </DndContext>
                                        <button onClick={() => handleChange(key, [...value, "https://via.placeholder.com/300"])} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2">
                                            <Plus size={12} /> Add Image
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        if (typeof value === 'boolean') {
                            return (
                                <div key={key} className="flex items-center gap-3">
                                    <input type="checkbox" checked={value} onChange={(e) => handleChange(key, e.target.checked)} className="w-4 h-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 bg-gray-700" />
                                    <label className="text-xs text-gray-400 capitalize select-none">{key}</label>
                                </div>
                            );
                        }

                        // Rich Text Editor for content/description fields
                        if (key === 'content' || key === 'description') {
                            return (
                                <div key={key}>
                                    <RichTextEditor
                                        label={key}
                                        value={value as string}
                                        onChange={(html) => handleChange(key, html)}
                                    />
                                </div>
                            );
                        }

                        // Image Uploader for generic image fields
                        if (key.toLowerCase().includes('image') || key === 'avatar') {
                            return (
                                <div key={key}>
                                    <ImageUploader
                                        label={key}
                                        value={value as string}
                                        onChange={(url: string) => handleChange(key, url)}
                                    />
                                </div>
                            );
                        }

                        // Metadata Array Handling
                        if (key === 'metadata' && Array.isArray(value)) {
                            return (
                                <div key={key} className="border-t border-white/10 pt-4 mt-4 mb-4">
                                    <label className="block text-xs text-gray-400 mb-2 capitalize font-bold">Metadata Fields</label>
                                    <div className="space-y-2">
                                        {(value as any[]).map((item, idx) => (
                                            <div key={idx} className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={item.label}
                                                    onChange={(e) => {
                                                        const newMetadata = [...value];
                                                        newMetadata[idx] = { ...newMetadata[idx], label: e.target.value };
                                                        handleChange(key, newMetadata);
                                                    }}
                                                    className="w-1/3 bg-black/30 border border-white/10 rounded p-2 text-white text-xs"
                                                    placeholder="Label"
                                                />
                                                <input
                                                    type="text"
                                                    value={item.value}
                                                    onChange={(e) => {
                                                        const newMetadata = [...value];
                                                        newMetadata[idx] = { ...newMetadata[idx], value: e.target.value };
                                                        handleChange(key, newMetadata);
                                                    }}
                                                    className="flex-1 bg-black/30 border border-white/10 rounded p-2 text-white text-xs"
                                                    placeholder="Value"
                                                />
                                                <button
                                                    onClick={() => {
                                                        const newMetadata = [...value];
                                                        newMetadata.splice(idx, 1);
                                                        handleChange(key, newMetadata);
                                                    }}
                                                    className="text-red-500 hover:text-red-400 p-1"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => {
                                                const newMetadata = [...value];
                                                newMetadata.push({ label: "", value: "" });
                                                handleChange(key, newMetadata);
                                            }}
                                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs"
                                        >
                                            <Plus size={12} /> Add Field
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        // Author Object Handling
                        if (key === 'author' && typeof value === 'object') {
                            const author = value as any;
                            return (
                                <div key={key} className="border-t border-white/10 pt-4 mt-4">
                                    <label className="block text-xs text-gray-400 mb-2 capitalize font-bold">Author Details</label>
                                    <div className="space-y-4 text-xs">
                                        <div>
                                            <label className="block mb-1 text-gray-500">Name</label>
                                            <input
                                                type="text"
                                                value={author?.name || ""}
                                                onChange={(e) => handleChange(key, { ...author, name: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-gray-500">Role</label>
                                            <input
                                                type="text"
                                                value={author?.role || ""}
                                                onChange={(e) => handleChange(key, { ...author, role: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-gray-500">Bio</label>
                                            <textarea
                                                value={author?.bio || ""}
                                                onChange={(e) => handleChange(key, { ...author, bio: e.target.value })}
                                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-white min-h-[60px]"
                                            />
                                        </div>
                                        <ImageUploader
                                            label="Author Avatar"
                                            value={author?.avatar || ""}
                                            onChange={(url) => handleChange(key, { ...author, avatar: url })}
                                        />

                                        {/* Socials */}
                                        <div className="mt-4">
                                            <label className="block mb-2 text-gray-500 font-semibold">Social Links</label>
                                            <div className="space-y-2">
                                                {(author?.socials || []).map((social: any, idx: number) => (
                                                    <div key={idx} className="flex gap-2">
                                                        <select
                                                            value={social.platform}
                                                            onChange={(e) => {
                                                                const newSocials = [...(author.socials || [])];
                                                                newSocials[idx].platform = e.target.value;
                                                                handleChange(key, { ...author, socials: newSocials });
                                                            }}
                                                            className="w-1/3 bg-black/30 border border-white/10 rounded p-2 text-white text-xs"
                                                        >
                                                            <option value="twitter">Twitter</option>
                                                            <option value="linkedin">LinkedIn</option>
                                                            <option value="github">GitHub</option>
                                                            <option value="website">Website</option>
                                                        </select>
                                                        <input
                                                            type="text"
                                                            value={social.url}
                                                            onChange={(e) => {
                                                                const newSocials = [...(author.socials || [])];
                                                                newSocials[idx].url = e.target.value;
                                                                handleChange(key, { ...author, socials: newSocials });
                                                            }}
                                                            className="flex-1 bg-black/30 border border-white/10 rounded p-2 text-white text-xs"
                                                            placeholder="URL"
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                const newSocials = [...(author.socials || [])];
                                                                newSocials.splice(idx, 1);
                                                                handleChange(key, { ...author, socials: newSocials });
                                                            }}
                                                            className="text-red-500 hover:text-red-400 p-1"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    onClick={() => {
                                                        const newSocials = [...(author.socials || [])];
                                                        newSocials.push({ platform: "website", url: "" });
                                                        handleChange(key, { ...author, socials: newSocials });
                                                    }}
                                                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs"
                                                >
                                                    <Plus size={12} /> Add Social Link
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Date Picker
                        if (key === 'date') {
                            return (
                                <div key={key}>
                                    <label className="block text-xs text-gray-400 mb-1 capitalize">{key}</label>
                                    <input
                                        type="date"
                                        value={value as string}
                                        onChange={(e) => handleChange(key, e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                                    />
                                </div>
                            );
                        }

                        return (
                            <div key={key}>
                                <label className="block text-xs text-gray-400 mb-1 capitalize">{key}</label>
                                <input
                                    type="text"
                                    value={value as string}
                                    onChange={(e) => handleChange(key, e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Style Tab */}
            {activeTab === "style" && (
                <div className="space-y-6">
                    {/* Colors Section */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold uppercase text-gray-500 border-b border-white/10 pb-2">Colors</h4>

                        {style.titleColor !== undefined && (
                            <ColorPicker
                                label="Title Color"
                                value={style.titleColor}
                                onChange={(color) => handleStyleChange("titleColor", color)}
                            />
                        )}
                        {style.textColor !== undefined && (
                            <ColorPicker
                                label="Text Color"
                                value={style.textColor}
                                onChange={(color) => handleStyleChange("textColor", color)}
                            />
                        )}
                        {style.backgroundColor !== undefined && (
                            <ColorPicker
                                label="Background Color"
                                value={style.backgroundColor}
                                onChange={(color) => handleStyleChange("backgroundColor", color)}
                            />
                        )}
                        {style.buttonColor !== undefined && (
                            <ColorPicker
                                label="Button Color"
                                value={style.buttonColor}
                                onChange={(color) => handleStyleChange("buttonColor", color)}
                            />
                        )}
                        {style.highlightColor !== undefined && (
                            <ColorPicker
                                label="Highlight Color"
                                value={style.highlightColor}
                                onChange={(color) => handleStyleChange("highlightColor", color)}
                            />
                        )}
                        {style.overlayColor !== undefined && (
                            <ColorPicker
                                label="Overlay Color"
                                value={style.overlayColor}
                                onChange={(color) => handleStyleChange("overlayColor", color)}
                            />
                        )}
                    </div>

                    {/* Layout Section */}
                    {(style.textAlign !== undefined || style.paddingTop !== undefined) && (
                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase text-gray-500 border-b border-white/10 pb-2">Layout</h4>

                            {style.textAlign !== undefined && (
                                <AlignmentControl
                                    label="Text Alignment"
                                    value={style.textAlign}
                                    onChange={(align) => handleStyleChange("textAlign", align)}
                                />
                            )}

                            {(style.paddingTop !== undefined || style.paddingBottom !== undefined) && (
                                <SpacingControl
                                    label="Padding"
                                    value={{ top: style.paddingTop, bottom: style.paddingBottom }}
                                    onChange={(spacing) => {
                                        if (spacing.top !== undefined) handleStyleChange("paddingTop", spacing.top);
                                        if (spacing.bottom !== undefined) handleStyleChange("paddingBottom", spacing.bottom);
                                    }}
                                />
                            )}
                        </div>
                    )}


                    {/* Image Settings (Hero, Product Feature, Image Grid, Carousel) */}
                    {["hero", "product-feature", "image-grid", "carousel"].includes(block.type) && (
                        <ImageSettingsControl
                            settings={{
                                size: style.imageSize,
                                objectFit: style.imageObjectFit,
                                objectPosition: style.imageObjectPosition,
                            }}
                            onChange={(newSettings) => {
                                if (newSettings.size) handleStyleChange("imageSize", newSettings.size);
                                if (newSettings.objectFit) handleStyleChange("imageObjectFit", newSettings.objectFit);
                                if (newSettings.objectPosition) handleStyleChange("imageObjectPosition", newSettings.objectPosition);
                            }}
                        />
                    )}

                    {/* Overlay Opacity (for Hero) */}
                    {style.overlayOpacity !== undefined && (
                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase text-gray-500 border-b border-white/10 pb-2">Effects</h4>
                            <div>
                                <label className="block text-xs text-gray-400 mb-2">Overlay Opacity: {Math.round((style.overlayOpacity || 0) * 100)}%</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={style.overlayOpacity}
                                    onChange={(e) => handleStyleChange("overlayOpacity", parseFloat(e.target.value))}
                                    className="w-full accent-blue-500"
                                />
                            </div>
                        </div>
                    )}

                    {/* If no style properties exist */}
                    {Object.keys(style).length === 0 && (
                        <p className="text-gray-500 text-sm text-center py-8">No style options available for this block type.</p>
                    )}
                </div>
            )}
        </div>
    );
}

