import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function AboutVisualSection() {
    return (
        <section className="bg-[#1C1C1C] py-20 px-6 md:px-20 lg:px-40" id="about-visuals">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                {/* Left Column: Top Laptop, Bottom Text */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[600px]">
                    <div className="relative w-full aspect-[4/3] bg-[#111]">
                        <Image
                            src="/images/about/about-laptop.png"
                            alt="Strategy & Design"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-12 lg:mt-auto">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
                            Since 2012, we have provided strategy, design & development to innovative organizations around the world — from major consumer brands to early stage startups. Through our collaboration and design-driven leadership we’ve helped launch and grow digital-first brands, products and businesses.
                        </p>

                        <div className="relative w-32 h-32 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer overflow-hidden transition-all hover:bg-white hover:text-black">
                            <div className="text-center text-xs font-medium tracking-widest z-10 group-hover:text-black transition-colors">
                                VIEW<br />ALL WORK
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Column: Tall Woman Image */}
                <div className="lg:col-span-4 lg:pt-12"> {/* Slight offset from top if needed, or align? Visual looks aligned top. */}
                    <div className="relative w-full aspect-[3/4] h-auto bg-[#111]">
                        <Image
                            src="/images/about/about-woman.png"
                            alt="Collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Column: Bottom Street Image */}
                <div className="lg:col-span-4 flex flex-col justify-end">
                    <div className="relative w-full aspect-[4/5] bg-[#111] mt-20 lg:mt-60">
                        <Image
                            src="/images/about/about-street.png"
                            alt="Global Reach"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <div className="w-12 h-12 bg-black rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
                            <ArrowUp className="w-5 h-5 font-light" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
