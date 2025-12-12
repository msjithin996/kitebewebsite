"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

interface ImageUploaderProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
    className?: string;
}

export default function ImageUploader({ value, onChange, label, className = "" }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(value);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const processFile = async (file: File) => {
        // Preview immediately
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        setUploading(true);
        try {
            // Create unique filename
            const timestamp = Date.now();
            const filename = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
            const storageRef = ref(storage, `uploads/${timestamp}_${filename}`);

            // Upload
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);

            onChange(downloadURL);
            setPreview(downloadURL);
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Failed to upload image.");
            // Revert preview on error if it was a blob
            setPreview(value);
        } finally {
            setUploading(false);
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            processFile(file);
        }
    };

    const handleClear = () => {
        onChange("");
        setPreview("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className={`space-y-2 ${className}`}>
            {label && <label className="block text-xs text-gray-400 capitalize">{label}</label>}

            <div className="flex gap-4 items-start">
                {/* Preview Area or Drop Zone */}
                <div
                    className={`relative group w-24 h-24 bg-black/30 border rounded overflow-hidden flex-shrink-0 flex items-center justify-center transition-all cursor-pointer 
                        ${isDragging ? "border-blue-500 bg-blue-500/10" : "border-white/10"}
                    `}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {preview ? (
                        <>
                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs text-white">Change</span>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClear();
                                }}
                                className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                title="Remove Image"
                            >
                                <X size={12} />
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-gray-500">
                            <ImageIcon size={24} className="mb-1" />
                            <span className="text-[10px] text-center px-1">{isDragging ? "Drop Here" : "Drag & Drop"}</span>
                        </div>
                    )}

                    {uploading && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
                            <Loader2 className="animate-spin text-white" size={20} />
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="flex-1 space-y-2">
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploading}
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded text-sm text-gray-300 transition-colors w-full justify-center border border-white/10"
                        >
                            <Upload size={14} />
                            {uploading ? "Uploading..." : "Click to Upload"}
                        </button>
                    </div>
                    {/* Fallback URL Input */}
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                            setPreview(e.target.value);
                        }}
                        placeholder="Or paste URL..."
                        className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs text-gray-400 focus:text-white focus:border-blue-500 outline-none"
                    />
                </div>
            </div>
        </div>
    );
}
