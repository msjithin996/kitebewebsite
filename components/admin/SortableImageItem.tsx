"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";
import ImageUploader from "./ImageUploader";

interface SortableImageItemProps {
    id: string;
    url: string;
    index: number;
    onChange: (url: string) => void;
    onRemove: () => void;
}

export default function SortableImageItem({ id, url, index, onChange, onRemove }: SortableImageItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="relative group bg-white/5 p-2 rounded mb-2 border border-white/5">
            <div className="absolute top-2 right-2 flex gap-1 z-10">
                <button
                    {...attributes}
                    {...listeners}
                    className="p-1.5 bg-gray-700 text-white rounded cursor-grab active:cursor-grabbing hover:bg-gray-600"
                    title="Drag to Reorder"
                >
                    <GripVertical size={12} />
                </button>
                <button
                    onClick={onRemove}
                    className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600"
                    title="Remove"
                >
                    <Trash2 size={12} />
                </button>
            </div>

            <ImageUploader
                value={url}
                onChange={onChange}
                className="pr-8" // Make space for buttons
            />
        </div>
    );
}
