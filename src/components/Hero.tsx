"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = [
    "Software Developer",
    "Tech Enthusiast",
    "Problem Solver",
    "Full Stack Builder",
    "Code Architect",
];

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = titles[titleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
        } else if (!isDeleting && charIndex === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((i) => (i + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
        >
            {/* Animated gradient orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-32 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 -right-32 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-[100px]"
            />

            {/* Decorative rotating ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-[0.04] pointer-events-none">
                <div className="w-full h-full border border-purple-500 rounded-full animate-spin-slow" />
                <div className="absolute inset-12 border border-blue-500 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
                <div className="absolute inset-24 border border-pink-500/50 rounded-full animate-spin-slow" style={{ animationDuration: "40s" }} />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 sm:mb-8 rounded-full border border-purple-500/20 bg-purple-500/5 text-sm text-purple-300 shimmer"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                </motion.div>

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl text-zinc-400 font-mono mb-3 sm:mb-4"
                >
                    Hello, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
                >
                    <span className="neon-text-animated">Dilip</span>{" "}
                    <span className="text-white hover-glitch">Kumawat</span>
                </motion.h1>

                {/* Typing title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-zinc-300 mb-6 sm:mb-8 min-h-[2.5rem]"
                >
                    <span className="text-purple-500/60 font-mono">&gt; </span>
                    <span>{titles[titleIndex].substring(0, charIndex)}</span>
                    <span className="typing-cursor" />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
                >
                    CSE student passionate about building elegant software solutions.
                    Turning complex problems into clean, efficient code.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-glow w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                        ⚡ View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-glow w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-purple-500/30 text-zinc-300 font-semibold text-sm sm:text-base hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
                    >
                        📬 Contact Me
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-12 sm:mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 sm:w-6 sm:h-10 mx-auto border-2 border-zinc-600 rounded-full flex items-start justify-center p-1.5"
                    >
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4], height: [4, 8, 4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 bg-purple-400 rounded-full"
                        />
                    </motion.div>
                    <p className="text-xs text-zinc-600 mt-2 font-mono">scroll down</p>
                </motion.div>
            </div>
        </section>
    );
}
