"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, GripVertical } from "lucide-react";
import BlockRenderer, { Block } from "@/components/blocks/BlockRenderer";

interface SortableBlockWrapperProps {
    block: Block;
    index: number;
    isSelected: boolean;
    onClick: () => void;
    onRemove: () => void;
}

export default function SortableBlockWrapper({ block, index, isSelected, onClick, onRemove }: SortableBlockWrapperProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: block.id! });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`relative group mb-8 transition-colors ${isSelected ? 'ring-2 ring-blue-500 rounded-[34px]' : 'hover:ring-1 hover:ring-white/20 hover:rounded-[34px]'}`}
        >
            {/* Block Actions Overlay */}
            <div className={`absolute -top-3 -right-3 flex gap-1 z-40 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {/* Drag Handle */}
                <button
                    {...attributes}
                    {...listeners}
                    className="p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 mr-1 cursor-grab active:cursor-grabbing touch-none"
                    title="Drag to Reorder"
                >
                    <GripVertical size={14} />
                </button>

                {/* Remove Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); onRemove(); }}
                    className="p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
                    title="Remove"
                >
                    <Trash2 size={14} />
                </button>
            </div>

            {/* Render Component (Pointer events none to prevent internal interaction, but allow click/selection on wrapper) */}
            <div className="pointer-events-none" onClick={onClick}>
                <BlockRenderer blocks={[block]} />
            </div>

            {/* Click area for selection that sits behind the overlay but above the block content */}
            <div
                onClick={onClick}
                className="absolute inset-0 z-30 bg-transparent cursor-pointer"
                aria-label="Select Block"
            />
        </div>
    );
}
