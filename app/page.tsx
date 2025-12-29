import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Strategy from "@/components/sections/Strategy";
import Expertise from "@/components/sections/Expertise";
import CombinedServices from "@/components/sections/CombinedServices";
import News from "@/components/sections/News";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black">
            {/* Main content wrapper */}
            <Navbar />
            <Hero />
            <Intro />
            <Projects />
            <Services />
            <Strategy />
            <Expertise />
            <CombinedServices />
            <News />
            <Footer />
        </main>
    );
}
