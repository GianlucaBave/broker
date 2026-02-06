"use client";

import { motion } from "framer-motion";
import { Network, Database, LineChart } from "lucide-react";

export function Intelligence() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20">
                            <Network className="w-4 h-4 text-teal" />
                            <span className="text-xs font-bold text-teal uppercase tracking-widest">Powered by Intelligence</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Data-Driven <br />
                            <span className="text-teal">Secondary Execution</span>
                        </h2>

                        <p className="text-lg text-white/70 mb-8 leading-relaxed">
                            We combine human expertise with machine intelligence to analyze private market data, identify fair value, and pinpoint the optimal buyers for every transaction.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: "Smart Price Discovery", desc: "Real-time regression models based on latest secondary print data.", icon: LineChart },
                                { title: "Buyer Matching Engine", desc: "Algorithmic mapping of buyer mandates to seller assets.", icon: Database },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                        <p className="text-white/50 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual Content (Animated Graph Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="aspect-square md:aspect-video rounded-2xl bg-navy/50 border border-white/10 backdrop-blur-sm relative overflow-hidden shadow-2xl p-8 flex items-center justify-center">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-4">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                            </div>

                            {/* Animated Graph Illustration */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <svg className="w-full h-full text-teal" viewBox="0 0 400 200">
                                    <path
                                        d="M 20 180 Q 100 130 150 150 T 250 80 T 380 40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 20 180 Q 100 130 150 150 T 250 80 T 380 40"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-[0_0_10px_rgba(0,212,170,0.5)]"
                                    />
                                    {/* Nodes */}
                                    <circle cx="20" cy="180" r="4" fill="#635BFF" />
                                    <circle cx="150" cy="150" r="4" fill="#635BFF" />
                                    <circle cx="250" cy="80" r="4" fill="#635BFF" />
                                    <circle cx="380" cy="40" r="6" fill="#00D4AA" className="animate-pulse" />

                                    <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#0A2540" />
                                            <stop offset="100%" stopColor="#00D4AA" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Floating Data Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/4 left-10 bg-navy/90 border border-white/20 p-3 rounded-lg backdrop-blur shadow-xl"
                                >
                                    <div className="text-xs text-white/50 mb-1">Valuation Update</div>
                                    <div className="text-sm font-bold text-white">+24.5%</div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-1/4 right-10 bg-navy/90 border border-white/20 p-3 rounded-lg backdrop-blur shadow-xl"
                                >
                                    <div className="text-xs text-white/50 mb-1">Buyer Interest</div>
                                    <div className="text-sm font-bold text-white">High Demand</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
