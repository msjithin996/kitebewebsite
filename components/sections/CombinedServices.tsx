"use client";

import { motion } from "framer-motion";
import VerticalScrollCards from "./VerticalScrollCards";
import Products from "./Products";
import CaseStudies from "./CaseStudies";

export default function CombinedServices() {
    return (
        <div className="w-full bg-white text-black">
            <VerticalScrollCards />
            <Products />
            <CaseStudies />
        </div>
    );
}
