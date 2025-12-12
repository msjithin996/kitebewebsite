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
            className="w-full"
            style={{
                backgroundColor,
                paddingTop,
                paddingBottom
            }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Meta Header */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full uppercase font-medium tracking-wider text-xs border border-blue-500/20">
                        {category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                </div>

                {/* Main Content */}
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
                    style={{ color: titleColor }}
                >
                    {title}
                </h1>

                <div
                    className="text-xl md:text-2xl leading-relaxed max-w-3xl mb-8 border-l-4 border-gray-800 pl-6"
                    style={{ color: textColor }}
                >
                    {description}
                </div>

                {/* Dynamic Metadata Fields */}
                {metadata && metadata.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-t border-white/5 pt-6">
                        {metadata.map((item, idx) => (
                            <div key={idx}>
                                <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                                    {item.label}
                                </h4>
                                <p className="text-white font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Author Section */}
                <div className="flex items-start gap-4 pt-8 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex-shrink-0 border border-white/10">
                        {author.avatar ? (
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                <User size={24} />
                            </div>
                        )}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-bold text-white text-lg">{author.name}</h4>
                            {author.role && (
                                <span className="text-gray-500 text-sm bg-white/5 px-2 py-0.5 rounded">
                                    {author.role}
                                </span>
                            )}
                        </div>

                        {author.bio && (
                            <p className="text-gray-400 text-sm mb-3 max-w-xl">
                                {author.bio}
                            </p>
                        )}

                        {author.socials && author.socials.length > 0 && (
                            <div className="flex items-center gap-3">
                                {author.socials.map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        className="text-gray-500 hover:text-white transition-colors p-1"
                                        title={social.platform}
                                    >
                                        <SocialIcon platform={social.platform} size={18} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
