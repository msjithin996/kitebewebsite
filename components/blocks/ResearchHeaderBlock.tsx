import React from "react";
import { Calendar, User, Twitter, Linkedin, Github, Globe } from "lucide-react";
import Link from "next/link";

export interface ResearchHeaderBlockProps {
    title: string;
    description: string;
    date: string;
    category: string;
    metadata?: Array<{ label: string; value: string }>;
    author: {
        name: string;
        role?: string;
        avatar?: string;
        bio?: string;
        socials?: Array<{
            platform: "twitter" | "linkedin" | "github" | "website";
            url: string;
        }>;
    };
    style?: {
        titleColor?: string;
        textColor?: string;
        backgroundColor?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
}

const SocialIcon = ({ platform, size = 16 }: { platform: string, size?: number }) => {
    switch (platform.toLowerCase()) {
        case "twitter": return <Twitter size={size} />;
        case "linkedin": return <Linkedin size={size} />;
        case "github": return <Github size={size} />;
        case "website": return <Globe size={size} />;
        default: return <Globe size={size} />;
    }
};

export default function ResearchHeaderBlock({
    title = "Research Title",
    description = "Research description goes here...",
    date = "2024-01-01",
    category = "Research",
    metadata = [],
    author = { name: "Author Name" },
    style
}: ResearchHeaderBlockProps) {
    const {
        titleColor = "#FFFFFF",
        textColor = "#9CA3AF",
        backgroundColor = "transparent",
        paddingTop = "4rem",
        paddingBottom = "4rem",
    } = style || {};

    return (
        <div
            className="w-full relative"
            style={{
                backgroundColor,
                paddingTop,
                paddingBottom
            }}
        >
            <div className="container mx-auto px-6 md:px-20 lg:px-40 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-24 relative">
                {/* Left Column: Main Header Content */}
                <div>
                    {/* Meta Header */}
                    <div className="flex items-center gap-4 mb-8 text-sm">
                        <span className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full uppercase font-medium tracking-wider text-xs border border-blue-500/20">
                            {category}
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </h1>

                    {/* Intro Description */}
                    <div
                        className="rich-text rich-text-invert max-w-none opacity-90"
                        style={{ color: textColor }}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>

                {/* Right Column: Sticky Sidebar (Metadata & Author) */}
                <div className="lg:block relative">
                    <div className="lg:sticky lg:top-8 space-y-10 border-t lg:border-t-0 p-8 lg:p-0 border-white/10 mt-12 lg:mt-0">
                        {/* Date */}
                        <div>
                            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                Date
                            </h4>
                            <p className="text-white font-medium flex items-center gap-2">
                                {/* <Calendar size={14} className="opacity-50" /> */}
                                {date}
                            </p>
                        </div>

                        {/* Category */}
                        <div>
                            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                Category
                            </h4>
                            <p className="text-white font-medium uppercase">{category}</p>
                        </div>

                        {/* Dynamic Metadata Fields (e.g. Reading Time) */}
                        {metadata && metadata.length > 0 && (
                            <div className="space-y-6">
                                {metadata.map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                                            {item.label}
                                        </h4>
                                        <p className="text-white font-medium">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Author Section */}
                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
                                Author
                            </h4>
                            <div className="flex items-start gap-4">
                                {author.avatar && (
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10">
                                        <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div>
                                    <h5 className="font-bold text-white text-base leading-none mb-1">{author.name}</h5>
                                    {author.role && (
                                        <span className="text-gray-500 text-xs block mb-2">
                                            {author.role}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
