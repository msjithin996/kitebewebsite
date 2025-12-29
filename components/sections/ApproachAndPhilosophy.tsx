import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ApproachAndPhilosophy() {
    const items = [
        {
            icon: '/images/about/icons/perfection.png',
            title: 'Perfection',
            desc: 'From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the highest standards of quality.'
        },
        {
            icon: '/images/about/icons/innovative.png',
            title: 'Innovative',
            desc: 'We stay ahead of design trends, offering modern and visually impactful solutions that set your brand apart.'
        },
        {
            icon: '/images/about/icons/expertise.png',
            title: 'Expertise',
            desc: 'We are passionate about integrating the latest technologies and trends, including interactive animations and mobile-first strategies.'
        },
        {
            icon: '/images/about/icons/full-cycle.png',
            title: 'Full-Cycle services',
            desc: 'From web design to development, branding, SEO, and UX/UI, we provide a full range of services that cover all your digital needs.'
        },
        {
            icon: '/images/about/icons/client-success.png',
            title: 'Client Success',
            desc: 'Our clients consistently see improved engagement, conversion rates, and business growth.'
        }
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-20 lg:px-40 text-black" data-header-theme="dark">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-xl">
                    Approach and<br />philosophy
                </h2>

                <div className="flex flex-col gap-2 text-sm md:text-base text-gray-800 font-medium">
                    <p>Design</p>
                    <p>Development</p>
                    <p>Mastership</p>
                </div>

                <div>
                    <a href="/contact" className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all">
                        Let's Chat
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* List */}
            <div className="flex flex-col">
                <div className="h-px bg-black w-full" />

                {items.map((item, index) => (
                    <div key={index}>
                        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            {/* Icon */}
                            <div className="md:col-span-2">
                                <div className="relative w-16 h-16 md:w-20 md:h-20">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-7">
                                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        <div className="h-px bg-black w-full" />
                    </div>
                ))}
            </div>

        </section>
    );
}
