import React from 'react';

export interface BentoGridBlockProps {
    topLeftImage: string;
    topRightImage: string;
    topRightTitle: string;
    topRightSubtitle: string;
    bottomImage: string;
    style?: {
        backgroundColor?: string;
        textColor?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
}

export default function BentoGridBlock({
    topLeftImage,
    topRightImage,
    topRightTitle,
    topRightSubtitle,
    bottomImage,
    style = {}
}: BentoGridBlockProps) {
    return (
        <section
            className="w-full px-4 md:px-8 py-8"
            style={{
                backgroundColor: style.backgroundColor || 'transparent',
                paddingTop: style.paddingTop || '2rem',
                paddingBottom: style.paddingBottom || '2rem',
                color: style.textColor || '#FFFFFF',
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px] mb-4">
                {/* Top Left: Specific product grouping image */}
                <div className="relative w-full h-[300px] md:h-full rounded-2xl overflow-hidden bg-gray-800">
                    {topLeftImage && (
                        <img
                            src={topLeftImage}
                            alt="Product grouping"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Top Right: Face with overlay text */}
                <div className="relative w-full h-[300px] md:h-full rounded-2xl overflow-hidden bg-gray-800">
                    {topRightImage && (
                        <img
                            src={topRightImage}
                            alt="Portrait"
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                        {topRightSubtitle && (
                            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 text-white/80">
                                {topRightSubtitle}
                            </span>
                        )}
                        {topRightTitle && (
                            <h3 className="text-2xl md:text-4xl font-light text-white leading-tight max-w-md font-serif">
                                {topRightTitle}
                            </h3>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Row: Full width Phone mockup */}
            <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-800">
                {bottomImage && (
                    <img
                        src={bottomImage}
                        alt="Device mockup"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        </section>
    );
}
