"use client";

import { ArrowUpRight } from "lucide-react";

export default function NewsGrid() {
    return (
        <section className="py-20 px-6 md:px-20 lg:px-40 bg-white text-black border-t border-black/10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* NGOs Section */}
                <div>
                    <h2 className="text-3xl font-medium mb-2">NGOs</h2>
                    <p className="text-sm text-gray-600 mb-8">Proud to collaborate with NGOs for a better tomorrow.</p>

                    <div className="space-y-4">
                        <div className="border-b border-gray-300 py-4">
                            <h3 className="font-medium">The Good Foundation</h3>
                        </div>
                        <div className="border-b border-gray-300 py-4">
                            <h3 className="font-medium">Hope For All</h3>
                        </div>
                        <div className="border-b border-gray-300 py-4">
                            <h3 className="font-medium">Green Earth Initiative</h3>
                        </div>
                    </div>
                </div>

                {/* In News Section */}
                <div>
                    <h2 className="text-3xl font-medium mb-2">In News</h2>
                    <p className="text-sm text-gray-600 mb-8">The latest updates and stories about us.</p>

                    <div className="space-y-6">
                        <a href="#" className="block group">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Press Release</p>
                                    <h3 className="font-medium group-hover:underline">Kitebe expands to new markets</h3>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
                            </div>
                        </a>

                        <a href="#" className="block group">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Award</p>
                                    <h3 className="font-medium group-hover:underline">Best Digital Agency 2024</h3>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
                            </div>
                        </a>

                        <a href="#" className="block group">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Article</p>
                                    <h3 className="font-medium group-hover:underline">The future of immersive tech</h3>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
