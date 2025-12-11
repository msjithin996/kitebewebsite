"use client";

export interface ContentBlockProps {
    title: string;
    content: string; // Or markdown string if we want to parse it
}

export default function ContentBlock({ title, content }: ContentBlockProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-32 border-t border-white/10 pt-20">
            <div>
                <h2 className="text-3xl md:text-4xl font-normal">{title}</h2>
            </div>
            <div>
                {/* Simple splitting by newlines for paragraph spacing */}
                {content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-[#AAA] leading-relaxed mb-8 last:mb-0">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
