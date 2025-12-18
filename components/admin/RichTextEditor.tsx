"use client";

import { useRef, useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import ImageExtension from "@tiptap/extension-image";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Link as LinkIcon,
    List,
    ListOrdered,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Heading1,
    Heading2,
    Heading3,
    Palette,
    Image as ImageIcon,
    Loader2
} from "lucide-react";

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    label?: string;
    placeholder?: string;
}

export default function RichTextEditor({ value, onChange, label, placeholder }: RichTextEditorProps) {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "text-blue-400 underline",
                },
            }),
            ImageExtension.configure({
                inline: true,
                allowBase64: true,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph", "image"],
            }),
            Underline,
            TextStyle,
            Color,
        ],
        content: value,
        immediatelyRender: false,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-invert prose-sm max-w-none focus:outline-none min-h-[120px] p-3 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5 marker:text-white",
            },
        },
    });

    // Sync external value changes
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            // Only update if content is meaningfully different to avoid cursor jumps
            if (value === "" && editor.getHTML() === "<p></p>") return;
            editor.commands.setContent(value);
        }
    }, [value, editor]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !editor) return;

        setUploading(true);
        try {
            const timestamp = Date.now();
            const filename = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
            const storageRef = ref(storage, `uploads/${timestamp}_${filename}`);

            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);

            editor.chain().focus().setImage({ src: url }).run();
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Failed to upload image");
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    if (!editor) {
        return null;
    }

    const setLink = () => {
        const url = window.prompt("Enter URL:");
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };

    const addImage = () => {
        fileInputRef.current?.click();
    };

    const ToolbarButton = ({
        onClick,
        isActive,
        children,
        title,
        disabled = false
    }: {
        onClick: () => void;
        isActive?: boolean;
        children: React.ReactNode;
        title: string;
        disabled?: boolean;
    }) => (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`p-1.5 rounded transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-400 hover:bg-white/10 hover:text-white"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {children}
        </button>
    );

    return (
        <div>
            {label && (
                <label className="block text-xs text-gray-400 mb-2 capitalize">{label}</label>
            )}

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
            />

            {/* Toolbar */}
            <div className="bg-black/50 border border-white/10 rounded-t flex flex-wrap gap-0.5 p-1 relative sticky top-0 z-10">
                {/* Text Formatting */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive("bold")}
                    title="Bold"
                >
                    <Bold size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive("italic")}
                    title="Italic"
                >
                    <Italic size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={editor.isActive("underline")}
                    title="Underline"
                >
                    <UnderlineIcon size={14} />
                </ToolbarButton>

                <div className="w-px h-6 bg-white/10 mx-1" />

                {/* Headings */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={editor.isActive("heading", { level: 1 })}
                    title="Heading 1"
                >
                    <Heading1 size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor.isActive("heading", { level: 2 })}
                    title="Heading 2"
                >
                    <Heading2 size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editor.isActive("heading", { level: 3 })}
                    title="Heading 3"
                >
                    <Heading3 size={14} />
                </ToolbarButton>

                <div className="w-px h-6 bg-white/10 mx-1" />

                {/* Lists */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive("bulletList")}
                    title="Bullet List"
                >
                    <List size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive("orderedList")}
                    title="Numbered List"
                >
                    <ListOrdered size={14} />
                </ToolbarButton>

                <div className="w-px h-6 bg-white/10 mx-1" />

                {/* Alignment */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    isActive={editor.isActive({ textAlign: "left" })}
                    title="Align Left"
                >
                    <AlignLeft size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    isActive={editor.isActive({ textAlign: "center" })}
                    title="Align Center"
                >
                    <AlignCenter size={14} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    isActive={editor.isActive({ textAlign: "right" })}
                    title="Align Right"
                >
                    <AlignRight size={14} />
                </ToolbarButton>

                <div className="w-px h-6 bg-white/10 mx-1" />

                {/* Link */}
                <ToolbarButton
                    onClick={setLink}
                    isActive={editor.isActive("link")}
                    title="Add Link"
                >
                    <LinkIcon size={14} />
                </ToolbarButton>

                <ToolbarButton
                    onClick={addImage}
                    isActive={editor.isActive("image")}
                    title="Add Image"
                    disabled={uploading}
                >
                    {uploading ? <Loader2 size={14} className="animate-spin" /> : <ImageIcon size={14} />}
                </ToolbarButton>

                {/* Color */}
                <div className="relative">
                    <ToolbarButton
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        title="Text Color"
                    >
                        <Palette size={14} />
                    </ToolbarButton>
                    {showColorPicker && (
                        <div className="absolute top-full left-0 mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
                            <input
                                type="color"
                                onChange={(e) => {
                                    editor.chain().focus().setColor(e.target.value).run();
                                    setShowColorPicker(false);
                                }}
                                className="w-8 h-8 cursor-pointer"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Editor Content */}
            <div className="bg-black/30 border border-t-0 border-white/10 rounded-b">
                <style jsx global>{`
                    .ProseMirror ul {
                        list-style-type: disc !important;
                        padding-left: 1.5rem !important;
                        margin: 1rem 0 !important;
                    }
                    .ProseMirror ol {
                        list-style-type: decimal !important;
                        padding-left: 1.5rem !important;
                        margin: 1rem 0 !important;
                    }
                    .ProseMirror h1 {
                        font-size: 2.25rem !important;
                        font-weight: 800 !important;
                        margin-top: 1.5rem !important;
                        margin-bottom: 1rem !important;
                        line-height: 1.2 !important;
                    }
                    .ProseMirror h2 {
                        font-size: 1.75rem !important;
                        font-weight: 700 !important;
                        margin-top: 1.5rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                    .ProseMirror h3 {
                        font-size: 1.5rem !important;
                        font-weight: 600 !important;
                        margin-top: 1.25rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    .ProseMirror p {
                        margin-bottom: 1rem !important;
                    }
                `}</style>
                <EditorContent editor={editor} />
            </div>

        </div>
    );
}
