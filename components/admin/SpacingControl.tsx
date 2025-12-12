"use client";

interface SpacingControlProps {
    label: string;
    value: { top?: string; bottom?: string };
    onChange: (value: { top?: string; bottom?: string }) => void;
}

const SPACING_PRESETS = [
    { label: "None", value: "0" },
    { label: "S", value: "1rem" },
    { label: "M", value: "2rem" },
    { label: "L", value: "4rem" },
    { label: "XL", value: "6rem" },
];

export default function SpacingControl({ label, value, onChange }: SpacingControlProps) {
    const handleChange = (key: "top" | "bottom", newValue: string) => {
        onChange({ ...value, [key]: newValue });
    };

    return (
        <div>
            <label className="block text-xs text-gray-400 mb-2 capitalize">{label}</label>
            <div className="space-y-3">
                {/* Top Spacing */}
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-12">Top</span>
                    <div className="flex-1 flex gap-1">
                        {SPACING_PRESETS.map((preset) => (
                            <button
                                key={`top-${preset.value}`}
                                onClick={() => handleChange("top", preset.value)}
                                className={`flex-1 py-1 text-xs rounded transition-colors ${value.top === preset.value
                                        ? "bg-blue-500 text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Spacing */}
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-12">Bottom</span>
                    <div className="flex-1 flex gap-1">
                        {SPACING_PRESETS.map((preset) => (
                            <button
                                key={`bottom-${preset.value}`}
                                onClick={() => handleChange("bottom", preset.value)}
                                className={`flex-1 py-1 text-xs rounded transition-colors ${value.bottom === preset.value
                                        ? "bg-blue-500 text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                {preset.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
