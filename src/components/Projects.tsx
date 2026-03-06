"use client";

import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    gradient: string;
    emoji: string;
}

const projects: Project[] = [
    {
        title: "EventEase",
        description:
            "A comprehensive event management platform that simplifies organizing, managing, and attending events with an intuitive interface.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/dilipkumawat7851",
        live: "#",
        gradient: "from-blue-500 to-cyan-400",
        emoji: "🎪",
    },
    {
        title: "Restaurant Finder",
        description:
            "A responsive website helping users discover nearby restaurants with filters for cuisine, ratings, and location-based search.",
        tech: ["HTML", "CSS", "JavaScript", "API"],
        github: "https://github.com/dilipkumawat7851",
        live: "#",
        gradient: "from-orange-500 to-amber-400",
        emoji: "🍽️",
    },
    {
        title: "AI Tools Experiments",
        description:
            "A collection of experimental projects exploring AI and machine learning APIs, including GPT integrations and image generation tools.",
        tech: ["Python", "OpenAI API", "Flask"],
        github: "https://github.com/dilipkumawat7851",
        gradient: "from-purple-500 to-pink-500",
        emoji: "🤖",
    },
    {
        title: "Coding Practice Hub",
        description:
            "A curated repository of data structures and algorithms solutions with optimized approaches and detailed explanations.",
        tech: ["C++", "Python", "DSA"],
        github: "https://github.com/dilipkumawat7851",
        gradient: "from-green-500 to-emerald-400",
        emoji: "💻",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

export default function Projects() {
    return (
        <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
            <div className="section-divider mb-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Featured <span className="neon-text-animated">Projects</span>
                    </h2>
                    <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        A selection of projects that showcase my skills and passion
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid sm:grid-cols-2 gap-5 sm:gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="glass-card group overflow-hidden relative shimmer holo-border"
                        >
                            {/* Top gradient bar */}
                            <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                            {/* Scan line effect */}
                            <div className="scan-line" />

                            {/* Hover glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                            <div className="p-5 sm:p-6 lg:p-8 relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <motion.span
                                            className="text-3xl sm:text-4xl mb-3 block"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        >
                                            {project.emoji}
                                        </motion.span>
                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <motion.svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-700 group-hover:text-purple-500/40 transition-colors"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </motion.svg>
                                </div>

                                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <motion.span
                                            key={t}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-zinc-400 border border-white/5 hover:border-purple-500/30 hover:text-purple-300 transition-all cursor-default"
                                        >
                                            {t}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4, scale: 1.05 }}
                                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </motion.a>
                                    {project.live && (
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 4, scale: 1.05 }}
                                            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
