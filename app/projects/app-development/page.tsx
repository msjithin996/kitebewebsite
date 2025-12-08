"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Smartphone, Globe, Code, Zap, Shield, Layout, Bell, Fingerprint, Play, SkipBack, SkipForward, Heart, Menu, Cpu, PlayCircle, MapPin, Thermometer, Sun, Lock, Wifi, Power } from "lucide-react";

const ecosystems = [
    {
        title: "iOS",
        subtitle: "Apple Ecosystem",
        icon: <Smartphone className="w-6 h-6 text-white" />,
        desc: "Native Swift applications that feel right at home on every iPhone and iPad.",
        color: "bg-white/5"
    },
    {
        title: "Android",
        subtitle: "Google Play",
        icon: <Code className="w-6 h-6 text-white" />,
        desc: "Kotlin-first development ensuring performance across the fragmented device landscape.",
        color: "bg-white/5"
    },
    {
        title: "Hybrid",
        subtitle: "Universal",
        icon: <Globe className="w-6 h-6 text-white" />,
        desc: "React Native & Flutter solutions for rapid deployment on both platforms.",
        color: "bg-white/5"
    },
];

const techStack = ["SwiftUI", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL"];

import { useState, useEffect } from "react";
import { Pause, Heart as HeartIcon, Menu as MenuIcon, Shuffle, Repeat, ListMusic, Volume2, ChevronDown, MoreHorizontal } from "lucide-react";

const SmartHomeCard = () => {
    const [temp, setTemp] = useState(72);
    const [lights, setLights] = useState(true);
    const [locked, setLocked] = useState(true);

    return (
        <div className="relative w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h3 className="text-2xl font-medium text-white">Living Room</h3>
                    <p className="text-gray-400 text-sm">Active Devices: 4</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-green-500" />
                </div>
            </div>

            {/* Controls Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Lights */}
                <div
                    onClick={() => setLights(!lights)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${lights ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-white/5 border-white/5'}`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <Sun className={`w-6 h-6 ${lights ? 'text-yellow-400' : 'text-gray-500'}`} />
                        <div className={`w-8 h-5 rounded-full p-1 transition-colors ${lights ? 'bg-yellow-500' : 'bg-gray-600'}`}>
                            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${lights ? 'translate-x-3' : ''}`} />
                        </div>
                    </div>
                    <span className="text-white font-medium">Smart Lights</span>
                    <p className="text-xs text-gray-400 mt-1">{lights ? 'On • 80%' : 'Off'}</p>
                </div>

                {/* Lock */}
                <div
                    onClick={() => setLocked(!locked)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${locked ? 'bg-red-500/20 border-red-500/50' : 'bg-green-500/20 border-green-500/50'}`}
                >
                    <div className="flex justify-between items-start mb-4">
                        <Lock className={`w-6 h-6 ${locked ? 'text-red-400' : 'text-green-400'}`} />
                        <div className={`w-8 h-5 rounded-full p-1 transition-colors ${locked ? 'bg-red-500' : 'bg-green-500'}`}>
                            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${locked ? 'translate-x-3' : ''}`} />
                        </div>
                    </div>
                    <span className="text-white font-medium">Front Door</span>
                    <p className="text-xs text-gray-400 mt-1">{locked ? 'Locked' : 'Unlocked'}</p>
                </div>
            </div>

            {/* Temperature Slider */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <Thermometer className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <span className="text-white font-medium block">Climate</span>
                            <span className="text-xs text-gray-400">Cooling</span>
                        </div>
                    </div>
                    <span className="text-3xl font-light text-white">{temp}°</span>
                </div>
                <div className="relative h-12 bg-black/40 rounded-full flex items-center px-2">
                    <button onClick={() => setTemp(t => t - 1)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">-</button>
                    <div className="flex-1 mx-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 transition-all" style={{ width: `${(temp - 60) * 3.33}%` }} />
                    </div>
                    <button onClick={() => setTemp(t => t + 1)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">+</button>
                </div>
            </div>
        </div>
    );
};

const PhonePlayer = () => {
    const [isBooting, setIsBooting] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    const tracks = [
        {
            title: "The Artist Brothers",
            artist: "Greatest Hits Vol. 1",
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
            duration: 181,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            title: "Midnight City",
            artist: "Neon Dreams",
            image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop",
            duration: 245,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            title: "Ocean Waves",
            artist: "Calm Collective",
            image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2670&auto=format&fit=crop",
            duration: 192,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBooting(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isBooting) return;
        const newAudio = new Audio(tracks[currentTrack].audioUrl);
        setAudio(newAudio);
        setProgress(0);

        if (isPlaying) {
            newAudio.play().catch(() => setIsPlaying(false));
        }

        return () => {
            newAudio.pause();
            newAudio.src = "";
        };
    }, [currentTrack, isBooting]);

    useEffect(() => {
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(() => setIsPlaying(false));
        } else {
            audio.pause();
        }

        const handleTimeUpdate = () => {
            const duration = audio.duration || tracks[currentTrack].duration;
            setProgress((audio.currentTime / duration) * 100);
        };

        const handleEnded = () => {
            setCurrentTrack((c) => (c + 1) % tracks.length);
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [audio, isPlaying]);

    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const track = tracks[currentTrack];
    const currentSeconds = audio ? audio.currentTime : 0;
    const durationSeconds = audio?.duration || track.duration;
    const remainingTime = durationSeconds - currentSeconds;

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audio) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const newProgress = (x / width);
        const newTime = newProgress * (audio.duration || track.duration);

        audio.currentTime = newTime;
        setProgress(newProgress * 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[600px] border-[8px] border-[#2a2a2a] rounded-[40px] bg-[#000] shadow-2xl overflow-hidden select-none"
        >
            <div className="absolute top-0 left-0 right-0 h-full bg-black rounded-[32px] overflow-hidden">
                <AnimatePresence mode="wait">
                    {isBooting ? (
                        <motion.div
                            key="boot"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-black flex items-center justify-center z-30"
                        >
                            <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.15 3.66-.89 2.93.5 3.46 3.03 3.46 3.03s-1.9 1.2-1.9 4.17c.05 2.7 2.35 3.76 2.35 3.76s-1.28 3.25-2.65 5.16zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.16 2.29-2.05 4.27-3.74 4.25z" />
                            </svg>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="ui"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="h-full bg-gradient-to-b from-[#4A6E64] to-[#2C423C] text-white p-6 flex flex-col"
                        >
                            {/* Header Removed for more space */}
                            <div className="pt-6" />

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col items-center justify-center relative mb-8">
                                {/* Song Info */}
                                <div className="text-center mb-8 z-10">
                                    <motion.h4
                                        key={track.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-2xl font-medium mb-1"
                                    >
                                        {track.title}
                                    </motion.h4>
                                    <motion.p
                                        key={track.artist}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-white/60 text-sm"
                                    >
                                        {track.artist}
                                    </motion.p>
                                </div>

                                {/* Time */}
                                <div className="flex items-center gap-2 text-xs text-[#EBCBAE] font-medium mb-8 z-10">
                                    <span>{formatTime(currentSeconds)}</span>
                                    <span className="opacity-50">|</span>
                                    <span className="opacity-50">{formatTime(durationSeconds)}</span>
                                </div>

                                {/* Circular Progress & Album Art */}
                                <div className="relative w-64 h-64 flex items-center justify-center">
                                    {/* Progress Ring */}
                                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="120"
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <circle
                                            cx="128"
                                            cy="128"
                                            r="120"
                                            stroke="#EBCBAE"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray={2 * Math.PI * 120}
                                            strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    {/* Progress Knob */}
                                    <div
                                        className="absolute w-full h-full pointer-events-none"
                                        style={{ transform: `rotate(${(progress / 100) * 360}deg)` }}
                                    >
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#EBCBAE] rounded-full shadow-lg" />
                                    </div>

                                    {/* Album Art */}
                                    <div className="w-48 h-48 rounded-full overflow-hidden relative shadow-2xl border-4 border-white/10">
                                        <motion.div
                                            key={currentTrack}
                                            initial={{ scale: 1.1, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full relative"
                                        >
                                            <Image
                                                src={track.image}
                                                alt="Album Art"
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="mb-12">
                                <div className="flex justify-between items-center px-2 mb-12">
                                    <button className="text-white/50 hover:text-white transition-colors">
                                        <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">-</div>
                                    </button>

                                    <button
                                        onClick={() => {
                                            setCurrentTrack((c) => (c - 1 + tracks.length) % tracks.length);
                                            setProgress(0);
                                        }}
                                        className="text-white/70 hover:text-white transition-colors active:scale-90"
                                    >
                                        <SkipBack className="w-6 h-6 fill-current" />
                                    </button>

                                    <div className="relative">
                                        {!hasInteracted && !isPlaying && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: [0, -5, 0] }}
                                                transition={{
                                                    opacity: { duration: 0.5 },
                                                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                                                }}
                                                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[#2C423C] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl whitespace-nowrap z-10 pointer-events-none"
                                            >
                                                Tap to Play
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                                            </motion.div>
                                        )}
                                        <button
                                            onClick={() => {
                                                setIsPlaying(!isPlaying);
                                                setHasInteracted(true);
                                            }}
                                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#2C423C] shadow-xl hover:scale-105 active:scale-95 transition-all"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-6 h-6 fill-current" />
                                            ) : (
                                                <Play className="w-6 h-6 fill-current ml-1" />
                                            )}
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setCurrentTrack((c) => (c + 1) % tracks.length);
                                            setProgress(0);
                                        }}
                                        className="text-white/70 hover:text-white transition-colors active:scale-90"
                                    >
                                        <SkipForward className="w-6 h-6 fill-current" />
                                    </button>

                                    <button onClick={() => setIsLiked(!isLiked)} className="transition-transform active:scale-90">
                                        <HeartIcon className={`w-6 h-6 transition-colors ${isLiked ? 'fill-[#EBCBAE] text-[#EBCBAE]' : 'text-white/50'}`} />
                                    </button>
                                </div>


                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#2a2a2a] rounded-b-2xl z-40" />
        </motion.div>
    );
};

export const SimplePhone = () => (
    <div className="relative w-[300px] h-[600px] border-[8px] border-[#2a2a2a] rounded-[40px] bg-black shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#2a2a2a] rounded-b-2xl z-20" />
        {/* Screen Content */}
        <div className="w-full h-full bg-[#111] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-50" />
            <Image
                src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2558&auto=format&fit=crop"
                alt="App Screen"
                fill
                className="object-cover opacity-60 grayscale"
            />
            {/* UI Elements Overlay */}
            <div className="absolute inset-0 p-6 pt-14 flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md" />
                    <div className="h-4 w-2/3 bg-white/20 backdrop-blur-md rounded-full" />
                </div>
                <div className="space-y-3">
                    <div className="h-32 w-full bg-white/10 backdrop-blur-md rounded-2xl" />
                    <div className="h-32 w-full bg-white/10 backdrop-blur-md rounded-2xl" />
                </div>
            </div>
        </div>
    </div>
);

export default function AppDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#1C1C1C] text-white selection:bg-white selection:text-black overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-20 lg:px-40 min-h-[60vh] flex flex-col justify-center border-b border-white/10">
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="h-px w-12 bg-white/50" />
                        <span className="text-sm uppercase tracking-widest text-gray-300">Mobile Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8"
                    >
                        Your Vision. <br />
                        <span className="text-gray-500">Engineered.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-md leading-relaxed"
                    >
                        We partner with ambitious founders and established brands to build mobile products that define categories. From MVP to IPO, we are your technical co-founder.
                    </motion.p>
                </div>
            </section>



            {/* Idea to Software Section */}
            <section className="py-32 px-6 md:px-20 lg:px-40 bg-black overflow-hidden border-t border-white/10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
                        {/* Left Column */}
                        <div className="flex flex-col justify-between h-full py-12">
                            <div>
                                <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mb-4">
                                    YOUR<br />PARTNER
                                </h2>
                                <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] text-right lg:pr-12">
                                    IN GROWTH
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-20 text-xs text-gray-500 leading-relaxed max-w-md hidden lg:grid">
                                <p>
                                    We don't just write code; we build businesses. Our team aligns with your KPIs to ensure every feature drives user acquisition and retention.
                                </p>
                                <p>
                                    Whether you need a rapid prototype to secure funding or a robust platform for millions of users, we scale with you.
                                </p>
                            </div>
                        </div>

                        {/* Center Column - Phone */}
                        <div className="flex justify-center relative z-10">
                            <PhonePlayer />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-between h-full py-12 text-right">
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm ml-auto mb-20 uppercase tracking-wide">
                                WE ARE NOT JUST DEVELOPERS; WE ARE <span className="text-white font-bold">YOUR PRODUCT TEAM</span>. WE TRANSLATE YOUR BUSINESS GOALS INTO <span className="text-white font-bold">SCALABLE MOBILE SOLUTIONS</span> THAT USERS LOVE.
                            </p>

                            <div>
                                <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] text-[#333] mb-4">
                                    FROM CONCEPT
                                </h2>
                                <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] text-[#333]">
                                    TO LAUNCH
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-[#1C1C1C] border-t border-white/10 overflow-hidden">
                <div className="container mx-auto pt-32 px-6 md:px-20 lg:px-40 mb-24">
                    <h2 className="text-6xl md:text-8xl font-serif mb-2">About</h2>
                    <h2 className="text-6xl md:text-8xl font-serif mb-12">Process</h2>

                    <div className="h-px w-full bg-white/20 mb-12" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-3">
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 leading-relaxed">PRODUCT<br />OVERVIEW</h3>
                        </div>
                        <div className="lg:col-span-9">
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our collaborative process ensures transparency at every step. We transform your abstract concepts into tangible, high-performance mobile applications, keeping you in the loop from day one.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Flow Chart - Full Width */}
                <div className="pb-32 flex flex-col gap-20">
                    {/* Row 1 */}
                    <div className="flex items-center gap-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] justify-start">
                        {[
                            { text: "User Research", variant: "black" },
                            { text: "Benchmark", variant: "white" },
                            { text: "Architecture & Flow", variant: "black" },
                            { text: "Wireframe", variant: "white" }
                        ].map((item, i, arr) => (
                            <div key={i} className={`flex items-center gap-6 flex-shrink-0 ${i === 0 ? '-ml-12' : ''}`}>
                                <div className={`
                                    px-12 py-8 rounded-full text-xl font-medium whitespace-nowrap shadow-2xl min-w-[320px] text-center
                                    ${item.variant === 'black' ? 'bg-[#111] text-white border border-white/10' : 'bg-white text-black border border-white/10'}
                                `}>
                                    {item.text}
                                </div>
                                {i !== arr.length - 1 && (
                                    <div className="w-24 flex items-center justify-between">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                        <div className="flex-1 border-t-2 border-dotted border-gray-600 mx-1" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Spacer for right padding */}
                        <div className="w-6 md:w-20 lg:w-40 flex-shrink-0" />
                    </div>

                    {/* Row 2 - Shifted Right for Stagger */}
                    <div className="flex items-center gap-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] justify-end">
                        {/* Spacer for left padding */}
                        <div className="w-6 md:w-20 lg:w-40 flex-shrink-0" />
                        {[
                            { text: "Usability Test", variant: "black" },
                            { text: "Design System", variant: "white" },
                            { text: "Final Design", variant: "black" },
                            { text: "Hand-off", variant: "white" }
                        ].map((item, i, arr) => (
                            <div key={i} className={`flex items-center gap-6 flex-shrink-0 ${i === arr.length - 1 ? '-mr-12' : ''}`}>
                                <div className={`
                                    px-12 py-8 rounded-full text-xl font-medium whitespace-nowrap shadow-2xl min-w-[320px] text-center
                                    ${item.variant === 'black' ? 'bg-[#111] text-white border border-white/10' : 'bg-white text-black border border-white/10'}
                                `}>
                                    {item.text}
                                </div>
                                {i !== arr.length - 1 && (
                                    <div className="w-24 flex items-center justify-between">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                        <div className="flex-1 border-t-2 border-dotted border-gray-600 mx-1" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance & Scale Section */}
            <section className="py-0 border-t border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
                    <div className="relative h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/10 group overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2674&auto=format&fit=crop"
                            alt="Mobile Engineering"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="flex flex-col justify-center p-12 md:p-24 bg-[#1C1C1C]">
                        <h2 className="text-[32px] md:text-[48px] font-normal mb-12 leading-tight">
                            Enterprise-grade <br />
                            engineering.
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            {[
                                {
                                    title: "Native Performance",
                                    desc: "Direct hardware access ensuring 60fps animations and instant response times.",
                                    icon: <Zap className="w-5 h-5" />
                                },
                                {
                                    title: "Offline First",
                                    desc: "Robust local databases that keep your app working perfectly without signal.",
                                    icon: <Layout className="w-5 h-5" />
                                },
                                {
                                    title: "Bank-Grade Security",
                                    desc: "Biometric authentication and keychain encryption for total data protection.",
                                    icon: <Shield className="w-5 h-5" />
                                },
                                {
                                    title: "Haptic Feedback",
                                    desc: "Subtle tactile responses that make every interaction feel physical and real.",
                                    icon: <Fingerprint className="w-5 h-5" />
                                }
                            ].map((feat, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 mb-3 text-white">
                                        {feat.icon}
                                        <h4 className="text-lg font-medium">{feat.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interface Craftsmanship */}
            <section className="py-32 px-6 md:px-20 lg:px-40 bg-black relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="mb-24">
                        <h2 className="text-5xl md:text-7xl font-medium mb-8">Interface <br /> Craftsmanship</h2>
                        <div className="h-1 w-20 bg-white mb-8" />
                        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                            We design for your users. Every swipe, tap, and pinch is calibrated to create an emotional connection between your customer and your brand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative h-[500px] bg-[#111] rounded-[40px] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium mb-4">Fluid Motion</h3>
                                <p className="text-gray-500 leading-relaxed">Animations that follow the laws of physics, making digital objects feel real and responsive.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />

                            {/* Visual */}
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-32">
                                <motion.div
                                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-50"
                                />
                                <motion.div
                                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full border border-white/20 rounded-full backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative h-[500px] bg-[#111] rounded-[40px] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium mb-4">Depth & Layering</h3>
                                <p className="text-gray-500 leading-relaxed">Using Z-axis to create hierarchy and focus, guiding the user's eye naturally through the interface.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700" />

                            {/* Visual */}
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-40" style={{ perspective: "1000px" }}>
                                <motion.div
                                    animate={{ rotateX: [0, 20, 0], rotateY: [0, 20, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
                                />
                                <motion.div
                                    animate={{ rotateX: [0, 20, 0], rotateY: [0, 20, 0], z: 40 }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md scale-90 translate-z-10"
                                />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative h-[500px] bg-[#111] rounded-[40px] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-medium mb-4">Glassmorphism</h3>
                                <p className="text-gray-500 leading-relaxed">Modern, translucent materials that blur the line between content and background.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700" />

                            {/* Visual */}
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-40">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-xl" />
                                <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl" />
                                <div className="absolute inset-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond the Screen Section */}
            <section className="py-32 px-6 md:px-20 lg:px-40 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-5xl md:text-7xl font-medium mb-8">Beyond the <br /> Screen</h2>
                            <div className="h-1 w-20 bg-blue-500 mb-8" />
                            <p className="text-gray-400 text-xl leading-relaxed mb-12">
                                Modern apps don't just live on a phone—they interact with the real world. We help your product connect with IoT devices, wearables, and smart environments.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-white text-lg font-medium mb-2">IoT Protocols</h4>
                                    <p className="text-gray-500 text-sm">MQTT, CoAP, Zigbee integration patterns.</p>
                                </div>
                                <div>
                                    <h4 className="text-white text-lg font-medium mb-2">Low Latency</h4>
                                    <p className="text-gray-500 text-sm">Sub-100ms response times for real-time control.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            {/* Interactive Smart Home Card */}
                            <SmartHomeCard />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystems (Widgets Style) */}
            <section className="py-32 px-6 md:px-20 lg:px-40 border-t border-white/10">
                <div className="container mx-auto">
                    <h2 className="text-[40px] md:text-[56px] font-normal mb-16">Ecosystems</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ecosystems.map((eco, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-3xl border border-white/10 ${eco.color} hover:bg-white/10 transition-colors duration-500`}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-3 bg-white/10 rounded-2xl">
                                        {eco.icon}
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{eco.subtitle}</p>
                                    <h3 className="text-3xl font-medium mb-4">{eco.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{eco.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-24 border-t border-white/10 overflow-hidden">
                <div className="container mx-auto mb-12 px-6 md:px-20 lg:px-40">
                    <p className="text-sm uppercase tracking-widest text-gray-500">The Toolbelt</p>
                </div>
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {/* Double the list for seamless loop */}
                        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                            <span key={index} className="text-4xl md:text-6xl font-medium text-white/20 hover:text-white/80 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 px-6 md:px-20 lg:px-40 border-t border-white/10 text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-[40px] md:text-[56px] font-normal mb-8 leading-tight">
                        Got a vision?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Let's build something that lives on everyone's home screen.
                    </p>
                    <button className="group relative inline-flex items-center gap-4 px-8 py-4 border border-white rounded-full text-lg font-medium overflow-hidden hover:bg-white hover:text-black transition-all duration-300">
                        <span className="relative z-10">Launch App</span>
                        <ArrowUpRight className="w-5 h-5 relative z-10" />
                    </button>
                </div>
            </section>

            <Footer />
        </main >
    );
}
