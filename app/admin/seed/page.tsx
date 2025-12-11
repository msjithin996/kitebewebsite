"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const SAMPLE_PROJECT = {
    title: "Mobile App",
    tags: ["UI/UX", "Development", "Mobile"],
    blocks: [
        {
            type: "hero",
            data: {
                imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
                title: "Mobile App"
            }
        },
        {
            type: "intro",
            data: {
                title: "Mobile App",
                description: "This project represents a breakthrough in mobile user experience. We focused on natural gestures, fluid animations, and a dark-mode-first aesthetic to create something truly immersive.",
                metadata: [
                    { label: "Client", value: "Acme Corp" },
                    { label: "Services", value: "App Design, React Native" },
                    { label: "Date", value: "Nov 2023" },
                    { label: "Team", value: "Design & Dev" }
                ]
            }
        },
        {
            type: "content",
            data: {
                title: "The Challenge",
                content: "The main challenge was to integrate complex data visualization into a small screen without overwhelming the user.\n\nWe iterated through dozens of prototypes to find the perfect balance between density and readability."
            }
        },
        {
            type: "image-grid",
            data: {
                images: [
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1555421689-d68471e18963?q=80&w=1974&auto=format&fit=crop"
                ]
            }
        },
        {
            type: "content",
            data: {
                title: "The Solution",
                content: "Our solution involved a cards-based interface that allows users to 'stack' their tasks and view them in a priority queue."
            }
        }
    ]
};

export default function SeedPage() {
    const [status, setStatus] = useState("Ready to seed");

    const handleSeed = async () => {
        setStatus("Seeding...");
        try {
            await setDoc(doc(db, "projects", "mobile-app"), SAMPLE_PROJECT);
            setStatus("Success! Project 'mobile-app' created.");
        } catch (error: any) {
            console.error(error);
            setStatus("Error: " + error.message);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-8">Database Seeder</h1>
            <p className="mb-4 text-gray-400">This will write a sample project to <code>projects/mobile-app</code>.</p>

            <button
                onClick={handleSeed}
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
                Seed Database
            </button>

            <p className="mt-8 text-green-400 font-mono">{status}</p>
        </div>
    );
}
