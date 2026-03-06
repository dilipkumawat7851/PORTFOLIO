"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2021",
        title: "Started Programming Journey",
        description:
            "Discovered the world of programming with C and C++. Solved my first coding challenges and fell in love with logical problem solving.",
        icon: "🌱",
        color: "from-green-400 to-emerald-500",
    },
    {
        year: "2022",
        title: "Dived into Web Development",
        description:
            "Learned HTML, CSS, and JavaScript from scratch. Built my first responsive websites and understood the power of the web platform.",
        icon: "🌐",
        color: "from-blue-400 to-cyan-500",
    },
    {
        year: "2023",
        title: "Building Real Projects",
        description:
            "Created full-stack projects including EventEase and Restaurant Finder. Explored React, Node.js, and database technologies.",
        icon: "🚀",
        color: "from-purple-400 to-pink-500",
    },
    {
        year: "2024",
        title: "Exploring AI & Advanced Tech",
        description:
            "Experimented with AI tools and APIs. Deepened understanding of Python, data structures, and algorithms for competitive coding.",
        icon: "🤖",
        color: "from-amber-400 to-orange-500",
    },
    {
        year: "2025+",
        title: "Career in Software Development",
        description:
            "Preparing for a professional career in software development. Exploring DevOps, cloud computing, and contributing to open-source.",
        icon: "⭐",
        color: "from-pink-400 to-rose-500",
    },
];

export default function Timeline() {
    return (
        <section id="journey" className="relative py-20 sm:py-28 lg:py-32">
            <div className="section-divider mb-20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-sm font-mono text-purple-400 tracking-wider uppercase">
                        My Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        The <span className="neon-text">Timeline</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line opacity-30" />

                    <div className="space-y-8 sm:space-y-12">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`relative flex items-start gap-4 sm:gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 z-10 shadow-lg shadow-purple-500/30 mt-1 sm:mt-0" />

                                {/* Content Card */}
                                <div className={`ml-10 sm:ml-14 md:ml-0 md:w-[calc(50%-30px)] ${i % 2 === 0 ? "md:pr-4" : "md:pl-4"}`}>
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        className="glass-card p-4 sm:p-5 lg:p-6 relative overflow-hidden group"
                                    >
                                        {/* Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-3">
                                                <span className="text-xl sm:text-2xl">{item.icon}</span>
                                                <span className={`text-xs sm:text-sm font-mono font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                                    {item.year}
                                                </span>
                                            </div>
                                            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
