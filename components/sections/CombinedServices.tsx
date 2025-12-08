"use client";

import { motion } from "framer-motion";
import VerticalScrollCards from "./VerticalScrollCards";
import Products from "./Products";

export default function CombinedServices() {
    return (
        <motion.div
            initial={{ backgroundColor: "#1C1C1C", color: "#1C1C1C" }}
            whileInView={{ backgroundColor: "#ffffff", color: "#000000" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.1 }}
            className="w-full"
        >
            <VerticalScrollCards />
            <Products />
        </motion.div>
    );
}
