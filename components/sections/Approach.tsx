
import React from 'react';

export default function Approach() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-20 lg:px-40 bg-white text-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Label */}
                    <div className="lg:col-span-3">
                        <span className="text-[15px] font-semibold uppercase tracking-widest text-[#1C1C1C]">
                            Approach
                        </span>
                    </div>

                    {/* Right Column: Main Content */}
                    <div className="lg:col-span-9">

                        {/* Heading */}
                        <div className="mb-12 md:mb-16">
                            <h2 className="text-[50px] md:text-[80px] font-medium leading-[0.95] tracking-tight text-[#1C1C1C]">
                                Method of making<br />
                                better result
                            </h2>
                        </div>

                        {/* Steps Flex Layout */}
                        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">

                            {/* Step 1 */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[32px] font-medium leading-[1.05] mb-6 text-[#1C1C1C] whitespace-pre-line tracking-tight">
                                    Problem{"\n"}discovery
                                </h3>

                                <ul className="flex flex-col gap-2 pl-0 m-0 list-none">
                                    {["Usability Studies", "User Interviews", "Stakeholder Interviews", "Competitive Research", "Insights Report", "User Journey"].map((item, i) => (
                                        <li key={i} className="text-[17px] text-[#1C1C1C] leading-[1.5] font-normal">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Arrow 1 */}
                            <div className="hidden md:flex shrink-0 items-start justify-center w-[120px] lg:w-[150px] pt-[24px] px-2">
                                <img
                                    src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/05/ax-long-arrow-icon.webp"
                                    alt=""
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Step 2 */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[32px] font-medium leading-[1.05] mb-6 text-[#1C1C1C] whitespace-pre-line tracking-tight">
                                    Design{"\n"}system ready
                                </h3>

                                <ul className="flex flex-col gap-2 pl-0 m-0 list-none">
                                    {["Thinking Workshops", "Sitemaps", "Concepts", "Designs", "Prototypes", "Usability Studies"].map((item, i) => (
                                        <li key={i} className="text-[17px] text-[#1C1C1C] leading-[1.5] font-normal">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Arrow 2 */}
                            <div className="hidden md:flex shrink-0 items-start justify-center w-[120px] lg:w-[150px] pt-[24px] px-2">
                                <img
                                    src="https://wp.ravextheme.com/redox/wp-content/uploads/2025/05/ax-long-arrow-icon.webp"
                                    alt=""
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Step 3 */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[32px] font-medium leading-[1.05] mb-6 text-[#1C1C1C] whitespace-pre-line tracking-tight">
                                    Design{"\n"}implementation
                                </h3>

                                <ul className="flex flex-col gap-2 pl-0 m-0 list-none">
                                    {["Design", "Use Cases", "User Flows", "Various User Types", "Annotations", "Interactions"].map((item, i) => (
                                        <li key={i} className="text-[17px] text-[#1C1C1C] leading-[1.5] font-normal">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
