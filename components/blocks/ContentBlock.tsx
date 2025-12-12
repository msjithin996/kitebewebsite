"use client";

export interface ContentBlockStyle {
    titleColor?: string;
    textColor?: string;
    backgroundColor?: string;
    textAlign?: "left" | "center" | "right" | "justify";
    paddingTop?: string;
    paddingBottom?: string;
}

export interface ContentBlockProps {
    title: string;
    content: string; // HTML string from RichTextEditor
    style?: ContentBlockStyle;
}

export default function ContentBlock({ title, content, style }: ContentBlockProps) {
    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-32 border-t border-white/10 pt-20"
            style={{
                backgroundColor: style?.backgroundColor || "transparent",
                paddingTop: style?.paddingTop,
                paddingBottom: style?.paddingBottom,
                textAlign: style?.textAlign || "left",
            }}
        >
            <div>
                <h2
                    className="text-3xl md:text-4xl font-normal"
                    style={{ color: style?.titleColor || "#FFFFFF" }}
                >
                    {title}
                </h2>
            </div>
            <div>
                {/* Render HTML content from RichTextEditor */}
                <div
                    className="text-lg leading-relaxed prose prose-invert max-w-none"
                    style={{ color: style?.textColor || "#AAAAAA" }}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}

