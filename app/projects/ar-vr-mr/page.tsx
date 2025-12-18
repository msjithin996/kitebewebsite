"use client";

import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/ar-vr-mr/HeroSection";
import DigitalFrontierSection from "@/components/sections/ar-vr-mr/DigitalFrontierSection";
import ServicesSection from "@/components/sections/ar-vr-mr/ServicesSection";
import LimitlessPossibilitiesSection from "@/components/sections/ar-vr-mr/LimitlessPossibilitiesSection";
import DigitalExpertiseSection from "@/components/sections/ar-vr-mr/DigitalExpertiseSection";
import EntertainmentSection from "@/components/sections/ar-vr-mr/EntertainmentSection";
import Navbar from "@/components/ui/Navbar";

export default function ArVrMrServicePage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            {/* Navbar Component */}
            <Navbar />

            <HeroSection />
            <DigitalFrontierSection />
            <ServicesSection />
            <LimitlessPossibilitiesSection />
            <DigitalExpertiseSection />
            <EntertainmentSection />
            <Footer />
        </main>
    );
}
