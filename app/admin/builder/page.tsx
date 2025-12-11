"use client";

import { useState } from "react";
import { Plus, Save, Trash2, ArrowUp, ArrowDown, Layout } from "lucide-react";
import BlockRenderer, { Block } from "@/components/blocks/BlockRenderer";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Default configurations for new blocks
const BLOCK_TEMPLATES: Record<string, Block> = {
    hero: {
        type: "hero",
        data: {
            title: "New Project",
            imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
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
            ]
        }
    },
    content: {
        type: "content",
        data: {
            title: "Section Title",
            content: "Content paragraph goes here."
        }
    },
    "image-grid": {
        type: "image-grid",
        data: {
            images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3"]
        }
    },
    // New Components
    "two-column-text": {
        type: "two-column-text",
        data: {
            title: "Overview",
            content: "Detailed overview of the project goes here...",
            buttonText: "Read More",
            buttonLink: "#"
        }
    },
    "product-feature": {
        type: "product-feature",
        data: {
            title: "Feature Highlight",
            description: "Describe the key feature of this product...",
            imageUrl: "https://images.unsplash.com/photo-1555421689-d68471e18963",
            reversed: false,
            buttonText: "Shop Now",
            buttonLink: "#"
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
            ]
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
            ]
        }
    },
    "impact-text": {
        type: "impact-text",
        data: {
            content: "We design and develop market-defining brands through award-winning deliverables.",
            highlightSubstring: "market-defining brands"
        }
    }
};

export default function BuilderPage() {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedBlockIndex, setSelectedBlockIndex] = useState<number | null>(null);
    const [slug, setSlug] = useState("new-project");
    const [saving, setSaving] = useState(false);

    const addBlock = (type: string) => {
        const template = BLOCK_TEMPLATES[type];
        if (template) {
            // Deep copy to avoid reference issues
            const newBlock = JSON.parse(JSON.stringify(template));
            setBlocks([...blocks, newBlock]);
            setSelectedBlockIndex(blocks.length); // Select the new block
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

    const saveProject = async () => {
        if (!slug) return alert("Please enter a project slug");
        setSaving(true);
        try {
            await setDoc(doc(db, "projects", slug), {
                title: "New Project",
                blocks: blocks,
                updatedAt: new Date().toISOString()
            });
            alert("Project saved successfully!");
        } catch (error: any) {
            console.error(error);
            alert("Error saving: " + error.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-[#111] text-white overflow-hidden">
            {/* Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#1a1a1a]">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-sm uppercase tracking-widest">Builder</span>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="bg-black/50 border border-white/10 rounded px-3 py-1 text-sm focus:outline-none focus:border-white/40"
                        placeholder="project-slug"
                    />
                </div>
                <button
                    onClick={saveProject}
                    disabled={saving}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded text-sm font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                    <Save size={16} />
                    {saving ? "Saving..." : "Save Project"}
                </button>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar: Components */}
                <div className="w-64 bg-[#1a1a1a] border-r border-white/10 flex flex-col">
                    <div className="p-4 border-b border-white/5">
                        <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">Components</h3>
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
                                {blocks.map((block, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedBlockIndex(index)}
                                        className={`relative group mb-8 transition-all ${selectedBlockIndex === index ? 'ring-2 ring-blue-500 rounded-[34px]' : 'hover:ring-1 hover:ring-white/20 hover:rounded-[34px]'}`}
                                    >
                                        {/* Block Actions Overlay */}
                                        <div className={`absolute -top-3 -right-3 flex gap-1 z-50 ${selectedBlockIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); moveBlock(index, -1); }}
                                                className="p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 mr-1"
                                                title="Move Up"
                                            >
                                                <ArrowUp size={14} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); moveBlock(index, 1); }}
                                                className="p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 mr-1"
                                                title="Move Down"
                                            >
                                                <ArrowDown size={14} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); removeBlock(index); }}
                                                className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
                                                title="Remove"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        {/* Render Component (Pointer events none to prevent internal interaction interfering with selection) */}
                                        <div className="pointer-events-none">
                                            <BlockRenderer blocks={[block]} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar: Properties */}
                <div className="w-80 bg-[#1a1a1a] border-l border-white/10 flex flex-col">
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
                </div>
            </div>
        </div>
    );
}

// Simple Auto-Form for Properties
function PropertyEditor({ block, onChange }: { block: Block; onChange: (data: any) => void }) {
    const handleChange = (key: string, value: any) => {
        onChange({ ...block.data, [key]: value });
    };

    return (
        <div className="space-y-6">
            <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs inline-block mb-2 uppercase font-bold">
                {block.type}
            </div>

            {Object.entries(block.data).map(([key, value]) => {
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
                                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 size={12} />
                                        </button>

                                        <input
                                            type="text"
                                            value={item.title}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].title = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                            placeholder="Item Title"
                                        />
                                        <input
                                            type="text"
                                            value={item.subtitle || ""}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].subtitle = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                            placeholder="Item Subtitle"
                                        />
                                        <input
                                            type="text"
                                            value={item.imageUrl}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].imageUrl = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                            placeholder="Image URL"
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={() => handleChange(key, [...value, { title: "New Item", subtitle: "Description", imageUrl: "https://via.placeholder.com/300" }])}
                                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                                >
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
                                        <button
                                            onClick={() => {
                                                const newItems = [...value];
                                                newItems.splice(idx, 1);
                                                handleChange(key, newItems);
                                            }}
                                            className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 size={12} />
                                        </button>

                                        <input
                                            type="text"
                                            value={item.title}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].title = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                            placeholder="Value Title"
                                        />
                                        <textarea
                                            value={item.description}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].description = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none min-h-[60px]"
                                            placeholder="Description"
                                        />
                                        <input
                                            type="text"
                                            value={item.subtext || ""}
                                            onChange={(e) => {
                                                const newItems = [...value];
                                                newItems[idx].subtext = e.target.value;
                                                handleChange(key, newItems);
                                            }}
                                            className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-white placeholder:text-gray-600 focus:border-blue-500 outline-none"
                                            placeholder="Subtext (Optional)"
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={() => handleChange(key, [...value, { title: "New Value", description: "Description goes here...", subtext: "Brand Value" }])}
                                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2"
                                >
                                    <Plus size={12} /> Add Value
                                </button>
                            </div>
                        </div>
                    );
                }

                if (Array.isArray(value) && key === 'images') {
                    // Simple text area for image URLs array
                    return (
                        <div key={key}>
                            <label className="block text-xs text-gray-400 mb-1 capitalize">{key} (One URL per line)</label>
                            <textarea
                                value={value.join('\n')}
                                onChange={(e) => handleChange(key, e.target.value.split('\n'))}
                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-blue-500 outline-none min-h-[100px]"
                            />
                        </div>
                    )
                }

                if (typeof value === 'boolean') {
                    return (
                        <div key={key} className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleChange(key, e.target.checked)}
                                className="w-4 h-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500 bg-gray-700"
                            />
                            <label className="text-xs text-gray-400 capitalize select-none">{key}</label>
                        </div>
                    );
                }

                return (
                    <div key={key}>
                        <label className="block text-xs text-gray-400 mb-1 capitalize">{key}</label>
                        {key === 'description' || key === 'content' ? (
                            <textarea
                                value={value as string}
                                onChange={(e) => handleChange(key, e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-blue-500 outline-none min-h-[100px]"
                            />
                        ) : (
                            <input
                                type="text"
                                value={value as string}
                                onChange={(e) => handleChange(key, e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
