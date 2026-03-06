"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const skills = [
    { name: "C / C++", level: 80 },
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "React / Next.js", level: 80 },
    { name: "HTML / CSS", level: 90 },
    { name: "Problem Solving", level: 85 },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-20 sm:py-28 lg:py-32">
            <div className="section-divider mb-20" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase">About Me</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Get to <span className="neon-text-animated">Know Me</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left - Profile & Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Profile Photo */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0 mb-8 relative"
                        >
                            {/* Animated border ring */}
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm profile-glow animate-morph" />
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 profile-glow animate-morph" />
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-purple-500/30">
                                <Image
                                    src="/profile.jpg"
                                    alt="Dilip Kumawat"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating status badge */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-bold text-white shadow-lg shadow-green-500/30"
                            >
                                🟢 Open to Work
                            </motion.div>
                        </motion.div>

                        <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                            <p>
                                I&apos;m <span className="text-white font-semibold">Dilip Kumawat</span>,
                                a passionate Computer Science Engineering student with a deep love for
                                software development and technology.
                            </p>
                            <p>
                                My journey in tech started with curiosity about how software works,
                                and it has evolved into a full commitment to building impactful solutions.
                                I enjoy tackling challenging problems and writing clean, efficient code.
                            </p>
                            <p>
                                When I&apos;m not coding, I explore new technologies, contribute to
                                open-source projects, and continuously expand my knowledge in
                                areas like DevOps and Cloud Computing.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
                            {[
                                { label: "Projects", value: "10+", icon: "🚀" },
                                { label: "Technologies", value: "12+", icon: "⚡" },
                                { label: "GitHub Repos", value: "15+", icon: "📦" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    className="glass-card p-3 sm:p-4 text-center shimmer holo-border"
                                >
                                    <div className="text-lg mb-1">{stat.icon}</div>
                                    <div className="text-xl sm:text-2xl font-bold neon-text">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-zinc-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Skills Progress */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-5 sm:space-y-6"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 flex items-center gap-2">
                            <span className="text-2xl">🎯</span> Core Competencies
                        </h3>

                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm sm:text-base text-zinc-300 font-medium">{skill.name}</span>
                                    <motion.span
                                        className="text-sm text-purple-400 font-mono"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ delay: i * 0.15 + 0.8 }}
                                    >
                                        {skill.level}%
                                    </motion.span>
                                </div>
                                <div className="h-2.5 sm:h-3 rounded-full bg-zinc-800/80 overflow-hidden relative">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                                    >
                                        {/* Shimmer on progress bar */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmerSlide_2s_ease-in-out_infinite]" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
