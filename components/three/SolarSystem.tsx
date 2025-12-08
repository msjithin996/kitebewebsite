"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SolarSystem() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#050505");

        // Fog for depth
        scene.fog = new THREE.FogExp2("#050505", 0.02);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            60,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 50, 70);
        camera.lookAt(0, 0, 0);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040, 3); // Soft white light
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffaa00, 3, 100);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        // Sun
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // Sun Glow (Sprite)
        const spriteMaterial = new THREE.SpriteMaterial({
            map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/glow.png'),
            color: 0xffaa00,
            transparent: true,
            blending: THREE.AdditiveBlending
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(20, 20, 1);
        sun.add(sprite);

        // Planets Data
        const planetsData = [
            { name: "Mercury", size: 0.8, distance: 10, speed: 0.04, color: 0xaaaaaa },
            { name: "Venus", size: 1.2, distance: 15, speed: 0.03, color: 0xffcc00 },
            { name: "Earth", size: 1.3, distance: 20, speed: 0.025, color: 0x2233ff },
            { name: "Mars", size: 1.0, distance: 25, speed: 0.02, color: 0xff3300 },
            { name: "Jupiter", size: 3.5, distance: 35, speed: 0.01, color: 0xffaa88 },
            { name: "Saturn", size: 3.0, distance: 45, speed: 0.008, color: 0xeebb88 },
            { name: "Uranus", size: 2.0, distance: 55, speed: 0.006, color: 0x88ffff },
            { name: "Neptune", size: 1.9, distance: 65, speed: 0.005, color: 0x4444ff },
        ];

        const planets: { mesh: THREE.Mesh; distance: number; speed: number; angle: number }[] = [];
        const orbits: THREE.LineLoop[] = [];

        planetsData.forEach((data) => {
            // Planet Mesh
            const geometry = new THREE.SphereGeometry(data.size, 32, 32);
            const material = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.7,
                metalness: 0.2
            });
            const planet = new THREE.Mesh(geometry, material);

            // Random starting angle
            const angle = Math.random() * Math.PI * 2;
            planet.position.x = Math.cos(angle) * data.distance;
            planet.position.z = Math.sin(angle) * data.distance;

            scene.add(planet);
            planets.push({ mesh: planet, distance: data.distance, speed: data.speed, angle });

            // Orbit Line
            const orbitGeometry = new THREE.BufferGeometry();
            const points = [];
            for (let i = 0; i <= 64; i++) {
                const theta = (i / 64) * Math.PI * 2;
                points.push(new THREE.Vector3(Math.cos(theta) * data.distance, 0, Math.sin(theta) * data.distance));
            }
            orbitGeometry.setFromPoints(points);
            const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 });
            const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
            orbit.rotation.x = Math.PI / 2; // Keep flat? No, points are already x/z.
            // Actually points are x,0,z so it's flat on xz plane.
            scene.add(orbit);
            orbits.push(orbit);
        });

        // Saturn Rings
        const saturn = planets[5].mesh;
        const ringGeometry = new THREE.RingGeometry(4, 6, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xaa8866, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2.5;
        saturn.add(ring);


        // Stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const posArray = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 200;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starsMaterial = new THREE.PointsMaterial({ size: 0.15, color: 0xffffff, transparent: true, opacity: 0.8 });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Animation Loop
        let frameId: number;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            // Rotate Sun
            sun.rotation.y += 0.002;

            // Rotate Planets
            planets.forEach((planet) => {
                planet.angle += planet.speed;
                planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
                planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
                planet.mesh.rotation.y += 0.01;
            });

            // Rotate Stars slowly
            stars.rotation.y -= 0.0002;

            // Gentle Camera Movement
            const time = Date.now() * 0.0001;
            camera.position.y = 30 + Math.sin(time) * 5;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(frameId);
            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />
    );
}
