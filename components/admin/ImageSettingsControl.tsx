"use client";

import { Layout, Maximize2, Move } from "lucide-react";

interface ImageSettings {
    size?: string;
    objectFit?: string;
    objectPosition?: string;
}

interface ImageSettingsControlProps {
    settings: ImageSettings;
    onChange: (newSettings: ImageSettings) => void;
}

const SIZE_OPTIONS = [
    { label: "Full (100%)", value: "100%" },
    { label: "Large (75%)", value: "75%" },
    { label: "Medium (50%)", value: "50%" },
    { label: "Small (25%)", value: "25%" },
    { label: "Auto", value: "auto" },
];

const POSITION_OPTIONS = [
    { label: "Center Center", value: "center center" },
    { label: "Top Left", value: "left top" },
    { label: "Top Center", value: "center top" },
    { label: "Top Right", value: "right top" },
    { label: "Center Left", value: "left center" },
    { label: "Center Right", value: "right center" },
    { label: "Bottom Left", value: "left bottom" },
    { label: "Bottom Center", value: "center bottom" },
    { label: "Bottom Right", value: "right bottom" },
];

const DISPLAY_SIZE_OPTIONS = [
    { label: "Cover", value: "cover" },
    { label: "Contain", value: "contain" },
    { label: "Fill", value: "fill" },
    { label: "None", value: "none" },
];


export default function ImageSettingsControl({ settings, onChange }: ImageSettingsControlProps) {
    const handleChange = (key: keyof ImageSettings, value: string) => {
        onChange({ ...settings, [key]: value });
    };

    return (
        <div className="space-y-4 pt-4 border-t border-white/5">
            <h4 className="text-xs font-semibold uppercase text-gray-500 mb-3">Image</h4>

            {/* Image Size */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                    <Maximize2 size={14} />
                    <span className="text-xs">Image Size</span>
                </div>
                <select
                    value={settings.size || "100%"}
                    onChange={(e) => handleChange("size", e.target.value)}
                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500 w-32"
                >
                    {SIZE_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>

            {/* Position */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                    <Move size={14} />
                    <span className="text-xs">Position</span>
                </div>
                <select
                    value={settings.objectPosition || "center center"}
                    onChange={(e) => handleChange("objectPosition", e.target.value)}
                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500 w-32"
                >
                    {POSITION_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>

            {/* Display Size (Object Fit) */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                    <Layout size={14} />
                    <span className="text-xs">Display Size</span>
                </div>
                <select
                    value={settings.objectFit || "cover"}
                    onChange={(e) => handleChange("objectFit", e.target.value)}
                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-xs text-white outline-none focus:border-blue-500 w-32"
                >
                    {DISPLAY_SIZE_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
