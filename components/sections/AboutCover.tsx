
import React from 'react';

export default function AboutCover() {
    return (
        <section className="pt-40 pb-20 px-6 md:px-20 lg:px-40 bg-white text-black min-h-[80vh] flex flex-col justify-end">
            <div className="container mx-auto">
                {/* Huge Title */}
                <div className="mb-8 overflow-hidden">
                    <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-[#1C1C1C] text-center md:text-left select-none">
                        SINCE 2012
                    </h1>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-black/10 mb-16"></div>

                {/* Bottom Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Label */}
                    <div className="lg:col-span-3">
                        <span className="text-[13px] font-semibold uppercase tracking-widest text-[#1C1C1C]">
                            About Studio
                        </span>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-9">
                        <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-medium leading-[1.0] tracking-tight text-[#1C1C1C] max-w-5xl">
                            Crafting digital products with a unique — vision of making user experience better.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
