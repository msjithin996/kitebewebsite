"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function KitebeAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const container = containerRef.current;
        if (!container) return;

        // ==========================================
        // BASE CONFIG VARIABLES
        // ==========================================
        const CONFIG = {
            textYPosition: 1,
            textSize: 1.7,
            startOffset: 60,
            scrollHeight: 60,
            particleCount: 4000,
            particleSize: 0.15,
            animationSpeed: 0.5,
            sphereRadius: 7,
            textZPosition: 1,
        };

        // Device-specific adjustments
        const adjustConfigForDevice = () => {
            const isMobile = window.innerWidth < 768;
            const adjustedConfig = { ...CONFIG };

            if (isMobile) {
                adjustedConfig.textSize = 1.7;
                adjustedConfig.particleCount = 2500;
                adjustedConfig.particleSize = 0.2;
                adjustedConfig.sphereRadius = 7.5;
                adjustedConfig.textZPosition = 0.5;
            } else {
                adjustedConfig.textSize = 2.6;
                adjustedConfig.particleCount = 4000;
                adjustedConfig.particleSize = 0.15;
                adjustedConfig.sphereRadius = 10;
                adjustedConfig.textZPosition = 1;
            }
            return adjustedConfig;
        };

        Object.assign(CONFIG, adjustConfigForDevice());

        let scrollPosition = 0;
        const maxScroll = 100;

        // Scene setup
        const scene = new THREE.Scene();
        const width = container.clientWidth;
        const height = container.clientHeight;
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.z = 20;

        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
        } catch (e) {
            console.error("Failed to initialize WebGLRenderer:", e);
            return;
        }

        const canvas = renderer.domElement;
        canvas.classList.add("kitebe-canvas");
        // Ensure canvas fits container
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        container.appendChild(canvas);

        // Global variables for animation
        let particleSystem: THREE.Points;
        let particlePositions: Float32Array;
        let particleTargets: Float32Array;
        let colors: Float32Array;
        let spherePositions: Float32Array;
        let transformProgress = 0;

        const createSpherePositions = () => {
            const radius = CONFIG.sphereRadius;
            const count = CONFIG.particleCount;

            particlePositions = new Float32Array(count * 3);
            particleTargets = new Float32Array(count * 3);
            colors = new Float32Array(count * 3);
            spherePositions = new Float32Array(count * 3);

            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                const phi = Math.acos(1 - 2 * (i + 0.5) / count);
                const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

                spherePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                spherePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                spherePositions[i3 + 2] = radius * Math.cos(phi);

                particlePositions[i3] = spherePositions[i3];
                particlePositions[i3 + 1] = spherePositions[i3 + 1];
                particlePositions[i3 + 2] = spherePositions[i3 + 2];

                const hue = 0.6 + Math.random() * 0.1;
                const sat = 0.4 + Math.random() * 0.2;
                const light = 0.6 + Math.random() * 0.4;

                const hueToRgb = (p: number, q: number, t: number) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };

                const q = light < 0.5 ? light * (1 + sat) : light + sat - light * sat;
                const p = 2 * light - q;

                colors[i3] = hueToRgb(p, q, hue + 1 / 3);
                colors[i3 + 1] = hueToRgb(p, q, hue);
                colors[i3 + 2] = hueToRgb(p, q, hue - 1 / 3);
            }
        };

        const createParticles = () => {
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: CONFIG.particleSize,
                sizeAttenuation: true,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
            });

            particleSystem = new THREE.Points(geometry, material);
            scene.add(particleSystem);
        };

        interface Point {
            x: number;
            y: number;
            z: number;
            isEdge: boolean;
        }

        const createTextTargets = () => {
            const canvas2d = document.createElement("canvas");
            const ctx = canvas2d.getContext("2d");
            if (!ctx) return;

            canvas2d.width = 1024;
            canvas2d.height = 256;

            ctx.clearRect(0, 0, canvas2d.width, canvas2d.height);
            ctx.fillStyle = "black";
            ctx.font = "bold 180px Arial, Helvetica, sans-serif";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
            ctx.shadowBlur = 0;
            ctx.lineJoin = "round";

            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas2d.width, canvas2d.height);
            ctx.fillStyle = "black";
            ctx.fillText("kitebe", canvas2d.width / 2, canvas2d.height / 2);

            const imageData = ctx.getImageData(0, 0, canvas2d.width, canvas2d.height).data;
            const textPoints: Point[] = [];

            let minX = canvas2d.width, maxX = 0, minY = canvas2d.height, maxY = 0;
            const sampleGridForBounds = 10;

            for (let y = 0; y < canvas2d.height; y += sampleGridForBounds) {
                for (let x = 0; x < canvas2d.width; x += sampleGridForBounds) {
                    const pixelIndex = (y * canvas2d.width + x) * 4;
                    if (imageData[pixelIndex] < 128) {
                        minX = Math.min(minX, x);
                        maxX = Math.max(maxX, x);
                        minY = Math.min(minY, y);
                        maxY = Math.max(maxY, y);
                    }
                }
            }

            minX = Math.max(0, minX - 10);
            maxX = Math.min(canvas2d.width, maxX + 10);
            minY = Math.max(0, minY - 10);
            maxY = Math.min(canvas2d.height, maxY + 10);

            const sampleStep = 2;
            const normalizeX = (value: number) => ((value / canvas2d.width) - 0.5) * 18;
            const normalizeY = (value: number) => -((value / canvas2d.height) - 0.5) * 5;

            for (let y = minY; y <= maxY; y += sampleStep) {
                for (let x = minX; x <= maxX; x += sampleStep) {
                    const pixelIndex = (y * canvas2d.width + x) * 4;
                    if (imageData[pixelIndex] < 128) {
                        const point = {
                            x: normalizeX(x),
                            y: normalizeY(y),
                            z: CONFIG.textZPosition,
                        };

                        let isEdge = false;
                        const edgeCheckRadius = 1;
                        for (let dy = -edgeCheckRadius; dy <= edgeCheckRadius && !isEdge; dy++) {
                            for (let dx = -edgeCheckRadius; dx <= edgeCheckRadius && !isEdge; dx++) {
                                if (dx === 0 && dy === 0) continue;
                                const nx = x + dx;
                                const ny = y + dy;
                                if (nx >= 0 && nx < canvas2d.width && ny >= 0 && ny < canvas2d.height) {
                                    const neighborIndex = (ny * canvas2d.width + nx) * 4;
                                    if (imageData[neighborIndex] >= 128) isEdge = true;
                                }
                            }
                        }

                        textPoints.push({ ...point, isEdge });
                    }
                }
            }

            textPoints.sort((a, b) => (a.isEdge === b.isEdge ? 0 : a.isEdge ? -1 : 1));

            const edgePointCount = textPoints.filter((p) => p.isEdge).length;
            const edgeRatio = 0.65;
            const desiredEdgePoints = Math.floor(CONFIG.particleCount * edgeRatio);
            let finalPoints: Point[] = [];

            if (edgePointCount <= desiredEdgePoints) {
                const edgePoints = textPoints.filter((p) => p.isEdge);
                finalPoints = [...edgePoints];
                const interiorPoints = textPoints.filter((p) => !p.isEdge);
                const interiorNeeded = CONFIG.particleCount - edgePoints.length;

                if (interiorPoints.length < interiorNeeded) {
                    while (finalPoints.length < CONFIG.particleCount) {
                        const randIndex = Math.floor(Math.random() * interiorPoints.length);
                        const basePoint = interiorPoints[randIndex];
                        finalPoints.push({
                            ...basePoint,
                            x: basePoint.x + (Math.random() - 0.5) * 0.05,
                            y: basePoint.y + (Math.random() - 0.5) * 0.05,
                            z: basePoint.z + (Math.random() - 0.5) * 0.05,
                            isEdge: false,
                        });
                    }
                } else {
                    while (finalPoints.length < CONFIG.particleCount && interiorPoints.length > 0) {
                        const randIndex = Math.floor(Math.random() * interiorPoints.length);
                        finalPoints.push(interiorPoints.splice(randIndex, 1)[0]);
                    }
                }
            } else {
                const edgePoints = textPoints.filter((p) => p.isEdge);
                for (let i = 0; i < desiredEdgePoints; i++) {
                    const randIndex = Math.floor(Math.random() * edgePoints.length);
                    finalPoints.push(edgePoints.splice(randIndex, 1)[0]);
                }
                const interiorPoints = textPoints.filter((p) => !p.isEdge);
                const interiorNeeded = CONFIG.particleCount - finalPoints.length;
                for (let i = 0; i < interiorNeeded; i++) {
                    if (interiorPoints.length > 0) {
                        const randIndex = Math.floor(Math.random() * interiorPoints.length);
                        finalPoints.push(interiorPoints.splice(randIndex, 1)[0]);
                    } else {
                        const randIndex = Math.floor(Math.random() * finalPoints.length);
                        const basePoint = finalPoints[randIndex];
                        finalPoints.push({
                            ...basePoint,
                            x: basePoint.x + (Math.random() - 0.5) * 0.05,
                            y: basePoint.y + (Math.random() - 0.5) * 0.05,
                            z: basePoint.z + (Math.random() - 0.5) * 0.05,
                        });
                    }
                }
            }

            for (let i = 0; i < finalPoints.length; i++) {
                const i3 = i * 3;
                const point = finalPoints[i];
                particleTargets[i3] = point.x * CONFIG.textSize;
                particleTargets[i3 + 1] = (point.y + CONFIG.textYPosition) * CONFIG.textSize;
                particleTargets[i3 + 2] = point.isEdge
                    ? point.z + (Math.random() - 0.5) * 0.3
                    : point.z + (Math.random() - 0.5) * 0.15;
            }
        };

        // Scroll handling
        let ticking = false;
        const handlePageScroll = () => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const startTriggerPoint = windowHeight * (CONFIG.startOffset / 100);
            const animationHeight = windowHeight * (CONFIG.scrollHeight / 100);

            let progress = 0;
            if (rect.top <= startTriggerPoint) {
                const scrolledPastTrigger = startTriggerPoint - rect.top;
                progress = Math.max(0, Math.min(1, scrolledPastTrigger / animationHeight));
            }

            scrollPosition = progress * maxScroll;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(handlePageScroll);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        // Animation loop
        const clock = new THREE.Clock();
        let animationId: number;

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            if (particleSystem) {
                transformProgress = scrollPosition / maxScroll;
                const positions = particleSystem.geometry.attributes.position.array as Float32Array;

                for (let i = 0; i < CONFIG.particleCount; i++) {
                    const i3 = i * 3;
                    const easeProgress = transformProgress < 0.5
                        ? 4 * Math.pow(transformProgress, 3)
                        : 1 - Math.pow(-2 * transformProgress + 2, 3) / 2;

                    positions[i3] = spherePositions[i3] * (1 - easeProgress) + particleTargets[i3] * easeProgress;
                    positions[i3 + 1] = spherePositions[i3 + 1] * (1 - easeProgress) + particleTargets[i3 + 1] * easeProgress;
                    positions[i3 + 2] = spherePositions[i3 + 2] * (1 - easeProgress) + particleTargets[i3 + 2] * easeProgress;

                    if (transformProgress > 0.95) {
                        const vibrationAmount = 0.01 * (1 - (transformProgress - 0.95) / 0.05);
                        positions[i3] += Math.sin(elapsedTime * 2 + i * 0.02) * vibrationAmount;
                        positions[i3 + 1] += Math.cos(elapsedTime * 2 + i * 0.02) * vibrationAmount;
                    }
                }

                particleSystem.geometry.attributes.position.needsUpdate = true;
                particleSystem.rotation.y = Math.sin(elapsedTime * CONFIG.animationSpeed) * 0.3;
            }

            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };

        // Resize handling
        const handleResize = () => {
            if (!container) return;
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);

            // Re-run config adjustment if needed (simplified for React)
            Object.assign(CONFIG, adjustConfigForDevice());
        };
        window.addEventListener("resize", handleResize);

        // Init
        createSpherePositions();
        createParticles();
        createTextTargets();
        animate();
        handlePageScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            if (container && canvas) container.removeChild(canvas);
            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, []);

    return (
        <div className="kitebe-wrapper w-full h-full min-h-[400px] relative">
            <div ref={containerRef} className="kitebe-container w-full h-full absolute inset-0" id="kitebe-container">
            </div>
        </div>
    );
}
