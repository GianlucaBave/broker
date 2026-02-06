"use client";

import { motion } from "framer-motion";
import { Lock, Cpu, Handshake, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Lock,
        title: "Confidential Inquiry",
        description: "Connect with us discreetly. Your interest is never broadcasted, preserving your anonymity and cap table integrity.",
    },
    {
        icon: Cpu,
        title: "AI-Priced & Curated",
        description: "Our proprietary models analyze private market data to determine fair value and match you with pre-vetted institutional buyers.",
    },
    {
        icon: Handshake,
        title: "Expert-Led Closing",
        description: "We handle the entire transaction lifecycle, from negotiation to transfer, ensuring a seamless and compliant close.",
    },
];

export function Difference() {
    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Valex Flow Difference</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Traditional brokerage meets modern intelligence. A streamlined path to liquidity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-teal/0 via-teal/30 to-teal/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-neutral-dark border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/50 shadow-lg shadow-black/20">
                                <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                                <step.icon className="w-10 h-10 text-secondary group-hover:text-accent transition-colors duration-500" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary border border-white/10 flex items-center justify-center text-sm font-bold text-muted">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
