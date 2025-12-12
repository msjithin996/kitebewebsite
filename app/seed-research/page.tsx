"use client";

import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, CheckCircle } from "lucide-react";

export default function SeedResearchPage() {
    const [status, setStatus] = useState("idle");

    const seedData = async () => {
        setStatus("loading");
        try {
            // Data for "ar-vr-mr" slug
            await setDoc(doc(db, "projects", "ar-vr-mr"), {
                title: "Things to Look for When Designing Immersive Simulations",
                description: "A deep dive into the ergonomic and cognitive factors that define next-generation aviation training.",
                author: "Dr. Sarah Chen",
                publishedAt: "2024-11-15T12:00:00Z",
                tags: ["Design", "Simulation"],
                blocks: [
                    // 1. Hero Image (Full width, clean)
                    {
                        id: "hero-1",
                        type: "hero",
                        data: {
                            title: "",
                            imageUrl: "https://images.unsplash.com/photo-1542296332-2e44a99cfef9?q=80&w=2670&auto=format&fit=crop",
                            style: {
                                overlayOpacity: 0,
                                overlayColor: "#000000",
                                imageSize: "100%",
                            }
                        }
                    },
                    // 2. Intro Content
                    {
                        id: "intro-text",
                        type: "content",
                        data: {
                            title: "Elit ullamcorper dignissim",
                            content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Condimentum mattis pellentesque id nibh tortor id. Nisl condimentum id venenatis a condimentum.</p><br><p>Nunc sed blandit libero volutpat sed. Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.</p>",
                            style: {
                                paddingTop: "4rem",
                            }
                        }
                    },
                    // 3. Grid Images
                    {
                        id: "grid-1",
                        type: "image-grid",
                        data: {
                            images: [
                                "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2670&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop"
                            ],
                            style: {
                                imageSize: "100%",
                                gap: "2rem"
                            }
                        }
                    },
                    // 4. Middle Content
                    {
                        id: "mid-text",
                        type: "content",
                        data: {
                            title: "Hendrerit dolor magna",
                            content: "<p>Tristique sollicitudin nibh sit amet commodo. Sit amet justo donec enim diam vulputate ut pharetra. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget est lorem ipsum dolor. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.</p>",
                            style: {
                                paddingTop: "2rem",
                            }
                        }
                    },
                    // 5. Product Feature (Mocking a detailed highlight)
                    {
                        id: "feature-1",
                        type: "product-feature",
                        data: {
                            title: "Visual Fidelity",
                            description: "<p>We utilized photogrammetry and CAD data to create a sub-millimeter accurate 'Digital Twin' of the aircraft engine. This allows trainees to inspect parts, read serial numbers, and perform maintenance procedures in a completely safe virtual environment.</p>",
                            imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2670&auto=format&fit=crop",
                            reversed: true,
                            style: {
                                imageSize: "100%",
                                imageObjectFit: "cover"
                            }
                        }
                    },
                    // 6. Conclusion
                    {
                        id: "conclusion-text",
                        type: "content",
                        data: {
                            title: "Conclusion",
                            content: "<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                            style: {
                                paddingTop: "4rem",
                            }
                        }
                    }
                ]
            });

            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-8">Refill Research Content</h1>
            <p className="text-gray-400 mb-8 max-w-md text-center">
                This will overwrite the 'ar-vr-mr' article with rich mock content matching the new design.
            </p>

            {status === "idle" && (
                <button
                    onClick={seedData}
                    className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-bold"
                >
                    Update Content (ar-vr-mr)
                </button>
            )}

            {status === "loading" && <Loader2 className="animate-spin" size={32} />}

            {status === "success" && (
                <div className="text-center">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <p className="text-xl mb-4">Content Refreshed!</p>
                    <a href="/research/ar-vr-mr" className="underline text-blue-400">View Article</a>
                </div>
            )}

            {status === "error" && <p className="text-red-500">Error seeding data. Check console.</p>}
        </div>
    );
}
