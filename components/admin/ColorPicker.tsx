"use client";

import { useState, useRef, useEffect } from "react";

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    label?: string;
}

const PRESET_COLORS = [
    "#FFFFFF", "#000000", "#1C1C1C", "#111111",
    "#EF4444", "#F97316", "#FACC15", "#22C55E",
    "#3B82F6", "#8B5CF6", "#EC4899", "#6B7280",
];

export default function ColorPicker({ value, onChange, label }: ColorPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || "#FFFFFF");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setInputValue(value || "#FFFFFF");
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (/^#[0-9A-Fa-f]{6}$/.test(newValue)) {
            onChange(newValue);
        }
    };

    const handlePresetClick = (color: string) => {
        setInputValue(color);
        onChange(color);
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} className="relative">
            {label && (
                <label className="block text-xs text-gray-400 mb-1 capitalize">{label}</label>
            )}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-black/30 border border-white/10 rounded p-2 cursor-pointer hover:border-white/20 transition-colors"
            >
                <div
                    className="w-6 h-6 rounded border border-white/20"
                    style={{ backgroundColor: value || "#FFFFFF" }}
                />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-transparent text-sm text-white flex-1 outline-none font-mono"
                    placeholder="#FFFFFF"
                />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl z-50 w-full">
                    {/* Color Input */}
                    <input
                        type="color"
                        value={value || "#FFFFFF"}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            onChange(e.target.value);
                        }}
                        className="w-full h-8 rounded cursor-pointer mb-3"
                    />

                    {/* Preset Colors */}
                    <div className="grid grid-cols-6 gap-1">
                        {PRESET_COLORS.map((color) => (
                            <button
                                key={color}
                                onClick={() => handlePresetClick(color)}
                                className={`w-6 h-6 rounded border transition-all hover:scale-110 ${value === color ? "border-blue-500 ring-1 ring-blue-500" : "border-white/20"
                                    }`}
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>

                    {/* Transparent Option */}
                    <button
                        onClick={() => handlePresetClick("transparent")}
                        className="mt-2 w-full text-xs text-gray-400 hover:text-white py-1 transition-colors"
                    >
                        Transparent
                    </button>
                </div>
            )}
        </div>
    );
}
