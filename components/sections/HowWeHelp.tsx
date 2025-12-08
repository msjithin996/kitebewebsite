"use client";

import { motion } from "framer-motion";

const items = [
    {
        title: "Discovery & Problem Solving",
        description: "We bring together research from markets, stakeholders and customers to turn an organisations problems into opportunities",
    },
    {
        title: "Validating ideas & Service Propositions",
        description: "Our human-centric design approach involves testing propositions and solutions with customers to make good ideas even better and ensure the organisation invests in the right product roadmap",
    },
    {
        title: "Agile Engineering",
        description: "Whether our technologists are working as consultants to an in-house team or as and engineering team in our studio, our multi disciplinary approach ensures the design intent is realised throughout the delivery lifecycle",
    },
];

export default function HowWeHelp() {
    return (
        <section className="py-24 px-6 md:px-20 lg:px-40">
            <div className="container mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-medium mb-6 tracking-tight"
                    >
                        How we help our clients
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl opacity-60 max-w-3xl"
                    >
                        We are defined by our intentions to provide next-generation reality experiences for diverse products and brands.
                    </motion.p>
                </div>

                <div className="flex flex-col">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="group border-t border-current py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-normal">
                                {item.title}
                            </h3>
                            <p className="opacity-60 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                    {/* Bottom border for the last item */}
                    <div className="border-t border-current" />
                </div>
            </div>
        </section>
    );
}
