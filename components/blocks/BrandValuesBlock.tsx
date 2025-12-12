"use client";

import { motion } from "framer-motion";

export interface BrandValueItem {
    title: string;
    description: string;
    subtext?: string;
}

export interface BrandValuesBlockStyle {
    titleColor?: string;
    textColor?: string;
    backgroundColor?: string;
}

export interface BrandValuesBlockProps {
    title: string;
    subtitle?: string;
    values: BrandValueItem[];
    style?: BrandValuesBlockStyle;
}

export default function BrandValuesBlock({ title, subtitle, values, style }: BrandValuesBlockProps) {
    return (
        <section
            className="py-24"
            style={{
                backgroundColor: style?.backgroundColor || "#e5e5e0",
                color: style?.textColor || "#1a1a1a",
            }}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Sticky Title */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="block text-sm tracking-[0.2em] font-medium uppercase mb-4 text-gray-500"
                        >
                            {subtitle || "BRAND VALUE"}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4"
                            style={{ color: style?.titleColor || "inherit" }}
                        >
                            {title}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-serif text-gray-600"
                        >
                            品牌价值
                        </motion.div>
                    </div>

                    {/* Right Column - Values List */}
                    <div className="lg:col-span-6 lg:col-start-7 space-y-16 mt-12 lg:mt-0">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-800 font-bold text-sm mb-2 leading-relaxed">
                                    {item.description}
                                </p>
                                {item.subtext && (
                                    <p className="text-gray-400 text-xs uppercase tracking-widest leading-relaxed">
                                        {item.subtext}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
