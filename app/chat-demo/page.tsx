"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Send, X } from "lucide-react";

export default function ChatPage() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [isListening, setIsListening] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color("#1a1a1a"); // Dark grey background

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Blob Object
        const geometry = new THREE.IcosahedronGeometry(1, 64); // High detail sphere
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.2,
            transmission: 0, // Not glass, but shiny plastic
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
        });

        const blob = new THREE.Mesh(geometry, material);
        scene.add(blob);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(2, 2, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x4444ff, 1);
        pointLight.position.set(-2, -2, 2);
        scene.add(pointLight);

        // Animation Variables
        const originalPositions = geometry.attributes.position.array.slice();
        const clock = new THREE.Clock();

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            const time = clock.getElapsedTime();
            const positions = geometry.attributes.position.array;

            // Wobbly effect
            for (let i = 0; i < positions.length; i += 3) {
                const x = originalPositions[i];
                const y = originalPositions[i + 1];
                const z = originalPositions[i + 2];

                // Simple noise-like movement using sine waves
                const noise =
                    Math.sin(x * 2 + time) * 0.1 +
                    Math.cos(y * 1.5 + time) * 0.1 +
                    Math.sin(z * 3 + time) * 0.1;

                // Normalize vector to keep it roughly spherical but distorted
                const vector = new THREE.Vector3(x, y, z).normalize();
                const distance = 1 + noise;

                // Apply distortion
                positions[i] = vector.x * distance;
                positions[i + 1] = vector.y * distance;
                positions[i + 2] = vector.z * distance;
            }

            geometry.attributes.position.needsUpdate = true;
            geometry.computeVertexNormals(); // Recompute normals for correct lighting

            // Gentle rotation
            blob.rotation.y += 0.002;
            blob.rotation.z += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden flex flex-col items-center justify-center font-sans">
            {/* 3D Canvas Container */}
            <div ref={mountRef} className="absolute inset-0 z-0" />

            {/* UI Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20 w-full max-w-md px-6">

                {/* Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl font-medium text-white/90 mb-12 text-center tracking-tight"
                >
                    What can I help you with?
                </motion.h1>

                {/* Input Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="w-full relative"
                >
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1.5 flex items-center shadow-2xl">
                        <div className="p-3 rounded-full bg-white/5 text-white/70 hover:bg-white/10 transition-colors cursor-pointer">
                            <Mic className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask anything..."
                            className="flex-1 bg-transparent border-none outline-none text-white px-4 placeholder:text-white/30"
                        />
                        <button className="p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Suggestions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-3 mt-8 overflow-x-auto w-full justify-center no-scrollbar"
                >
                    {["Create a campaign", "Analyze data", "Generate image"].map((text, i) => (
                        <button
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
                        >
                            {text}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
