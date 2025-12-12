"use client";

import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

interface AlignmentControlProps {
    value: "left" | "center" | "right" | "justify";
    onChange: (value: "left" | "center" | "right" | "justify") => void;
    label?: string;
}

const ALIGNMENTS: { value: "left" | "center" | "right" | "justify"; icon: React.ReactNode }[] = [
    { value: "left", icon: <AlignLeft size={14} /> },
    { value: "center", icon: <AlignCenter size={14} /> },
    { value: "right", icon: <AlignRight size={14} /> },
    { value: "justify", icon: <AlignJustify size={14} /> },
];

export default function AlignmentControl({ value, onChange, label }: AlignmentControlProps) {
    return (
        <div>
            {label && (
                <label className="block text-xs text-gray-400 mb-2 capitalize">{label}</label>
            )}
            <div className="flex gap-1">
                {ALIGNMENTS.map((alignment) => (
                    <button
                        key={alignment.value}
                        onClick={() => onChange(alignment.value)}
                        className={`flex-1 py-2 flex items-center justify-center rounded transition-colors ${value === alignment.value
                                ? "bg-blue-500 text-white"
                                : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                        title={alignment.value}
                    >
                        {alignment.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}
