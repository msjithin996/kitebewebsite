"use client";

import { motion } from "framer-motion";

const ShapeGraphic = ({ type }: { type: 'modular' | 'macro' | 'organic' | 'colorful' }) => {
    // Modular - Purple interlocking shapes with thin green lines
    if (type === 'modular') {
        return (
            <div className="w-full h-full bg-[#8B5CF6] relative flex items-center justify-center">
                {/* Main Container for shapes */}
                <div className="w-[90%] h-[80%] relative flex gap-2">
                    {/* Left Shape */}
                    <div className="w-[55%] h-full bg-[#A78BFA] rounded-[60px] rounded-br-[100px] relative">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
                            <path d="M 20 60 C 20 20, 100 20, 100 80 S 50 140, 20 140" fill="none" stroke="#6EE7B7" strokeWidth="1.5" />
                        </svg>
                    </div>
                    {/* Right Shape */}
                    <div className="w-[45%] h-full bg-[#A78BFA] rounded-[40px] rounded-tl-[80px] relative">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 150 150">
                            <path d="M 0 40 H 100 C 130 40, 130 80, 100 80 H 0" fill="none" stroke="#6EE7B7" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    // Macro - Yellow pill shapes with red lines
    if (type === 'macro') {
        return (
            <div className="w-full h-full bg-[#F59E0B] relative flex items-center justify-center p-8 lg:p-12">
                <div className="w-full h-full flex justify-between gap-4">
                    {/* Col 1 */}
                    <div className="w-[22%] h-full bg-[#FCD34D] rounded-[40px] relative overflow-hidden">
                        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-[#EF4444]" />
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 200">
                            <path d="M 0 50 Q 25 80 50 50" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                        </svg>
                    </div>
                    {/* Col 2 */}
                    <div className="w-[22%] h-full bg-[#FCD34D] rounded-[40px] relative">
                        <div className="absolute top-[40%] left-0 w-full h-[1px] bg-[#EF4444]" />
                    </div>
                    {/* Col 3 */}
                    <div className="w-[22%] h-full bg-[#FCD34D] rounded-[40px] flex flex-col gap-2">
                        <div className="h-[40%] text-[#EF4444] border-b border-[#EF4444] w-full" />
                    </div>
                    {/* Col 4 */}
                    <div className="w-[22%] h-full bg-[#FCD34D] rounded-[40px] relative">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 200">
                            <path d="M 0 120 H 50" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                            <path d="M 25 120 V 180" fill="none" stroke="#EF4444" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    // Organic - Red fluid shapes with yellow lines
    if (type === 'organic') {
        return (
            <div className="w-full h-full bg-[#EF4444] relative flex items-center justify-center p-8 lg:p-12">
                <div className="w-full h-full flex flex-wrap content-center gap-4">
                    {/* Top Row - connected blobs */}
                    <div className="w-full h-[45%] flex gap-4">
                        <div className="w-[60%] h-full bg-[#F87171] rounded-[50px] rounded-br-none relative">
                            {/* Yellow flourish */}
                        </div>
                        <div className="w-[35%] h-full bg-[#F87171] rounded-[50px] rounded-bl-[20px]" />
                    </div>
                    {/* Bottom Row */}
                    <div className="w-full h-[45%] flex gap-4 pl-10">
                        <div className="w-[40%] h-full bg-[#F87171] rounded-[50px]" />
                        <div className="w-[50%] h-full bg-[#F87171] rounded-[50px] rounded-tl-none relative">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 150 100">
                                <path d="M 20 20 H 100" fill="none" stroke="#FDE047" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Colorful - Mixed composition
    if (type === 'colorful') {
        return (
            <div className="w-full h-full bg-[#EC4899] relative flex items-center justify-center p-8 lg:p-12">
                <div className="w-full h-full flex gap-3 relative">
                    {/* Left: Pink Block */}
                    <div className="w-[30%] h-full bg-[#F43F5E] rounded-[40px] relative">
                        <svg className="absolute inset-0" viewBox="0 0 100 200">
                            <path d="M 0 100 Q 50 50 100 100" fill="none" stroke="#FDE047" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Middle: Stacked */}
                    <div className="w-[30%] h-full flex flex-col gap-3">
                        <div className="h-[60%] bg-[#F43F5E] rounded-[40px]" />
                        <div className="h-[40%] bg-[#FBBF24] rounded-full" />
                    </div>

                    {/* Right: Purple Block */}
                    <div className="w-[40%] h-full bg-[#A78BFA] rounded-[40px] rounded-bl-[80px] relative">
                        <svg className="absolute inset-0" viewBox="0 0 100 200">
                            <path d="M 20 150 Q 50 100 80 150" fill="none" stroke="#34D399" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default function BrandIdentity() {
    return (
        <section className="py-24 bg-black text-white px-6 md:px-12 lg:px-20 xl:px-32">
            <div className="container mx-auto max-w-[1400px]">

                {/* Top Section - Brand Heading */}
                <div className="rounded-[40px] overflow-hidden bg-black grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] min-h-[500px] mb-20 border border-[#333]">

                    {/* Left: Green Brand Area */}
                    <div className="bg-[#10B981] p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-[#111] max-w-sm leading-[1.1] relative z-10">
                            creating a<br />
                            unique brand
                        </h2>
                    </div>

                    {/* Right: Abstract Visualization Grid */}
                    <div className="bg-[#050505] relative p-8 md:p-12 flex items-center justify-center">
                        {/* Container mimicking the black card with colorful blobs */}
                        <div className="w-full h-full max-w-3xl bg-black rounded-[40px] border border-[#222] overflow-hidden relative p-6 grid grid-rows-2 gap-4">

                            {/* Row 1 */}
                            <div className="flex gap-4 h-full">
                                {/* Blue Blob with 'Macro' */}
                                <div className="w-[45%] h-full bg-[#3B82F6] rounded-[50px] relative">
                                    <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-black rounded-full mix-blend-multiply opacity-20" />
                                    <span className="absolute -top-3 left-[40%] bg-[#E5E5E5] text-black px-5 py-2 rounded-full text-sm font-medium shadow-md z-10">Macro</span>
                                </div>
                                {/* Mixed Blobs */}
                                <div className="w-[55%] h-full flex gap-4 relative">
                                    <div className="w-1/2 h-full bg-[#3B82F6] rounded-full" />
                                    <div className="w-1/2 h-full bg-[#A78BFA] rounded-full" />
                                    <div className="absolute top-0 right-0 w-[80%] h-full bg-[#EF4444] rounded-[50px] rounded-bl-none z-0" />
                                    <span className="absolute top-1/2 right-[10%] -translate-y-1/2 bg-[#E5E5E5] text-black px-5 py-2 rounded-full text-sm font-medium shadow-md z-10">Colorful</span>
                                    <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#FBBF24] rounded-full z-10 translate-x-1/4 -translate-y-1/4" />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex gap-4 h-full">
                                {/* Light Blue Blob with 'Modular' */}
                                <div className="w-[30%] h-full bg-[#818CF8] rounded-[50px] rounded-tr-none relative">
                                    <span className="absolute top-[-50%] left-[20%] translate-y-[80%] bg-[#E5E5E5] text-black px-5 py-2 rounded-full text-sm font-medium shadow-md z-20">Modular</span>
                                </div>
                                {/* Pink/Orange Blob with 'Organic' */}
                                <div className="w-[30%] h-full bg-[#FCA5A5] rounded-[50px] relative">
                                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#E5E5E5] text-black px-5 py-2 rounded-full text-sm font-medium shadow-md z-10">Organic</span>
                                </div>
                                {/* Purple Blob */}
                                <div className="w-[40%] h-full bg-[#8B5CF6] rounded-[50px] rounded-tl-none relative overflow-hidden">
                                    {/* inner detail */}
                                    <div className="absolute bottom-0 right-0 w-24 h-24 border-[20px] border-[#7C3AED] rounded-full opacity-20" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Section - Detailed List */}
                <div className="bg-[#050505] rounded-[40px] border border-[#222] p-8 md:p-12 space-y-16">

                    {/* Item 1 - Modular */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
                        <div className="w-full aspect-[2/1] rounded-[40px] overflow-hidden">
                            <ShapeGraphic type="modular" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light mb-4 text-white">modular</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light max-w-sm">
                                The idea comes from the partitioning of costs that make up an integral system, parts of which can be changed or modified at any time.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 - Macro */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
                        <div className="w-full aspect-[2/1] rounded-[40px] overflow-hidden">
                            <ShapeGraphic type="macro" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light mb-4 text-white">macro</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light max-w-sm">
                                Being an app with an unconventional UI, we relied on big components for main actions and thus provide the user with a clearer path.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 - Organic */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
                        <div className="w-full aspect-[2/1] rounded-[40px] overflow-hidden">
                            <ShapeGraphic type="organic" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light mb-4 text-white">organic</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light max-w-sm">
                                We chose an organic aesthetic to represent the fluidity and automation with which the app records the user's expenses.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 - Colorful */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
                        <div className="w-full aspect-[2/1] rounded-[40px] overflow-hidden">
                            <ShapeGraphic type="colorful" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-light mb-4 text-white">colorful</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light max-w-sm">
                                For the codification of the different types of expenses and to appeal to a young audience, a colorful palette completes the app's identity.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
