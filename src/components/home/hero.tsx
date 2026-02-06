"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <section
            ref={targetRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy"
        >
            {/* Abstract Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,26,47,0.4)_0%,_#0A1A2F_100%)] z-10" />
                {/* Animated Particles / Flow Lines Implementation would go here. Using CSS placeholder for demo */}
                <div className="absolute inset-0 opacity-20">
                    <motion.div
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-30"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/10 blur-[100px] rounded-full mix-blend-screen" />
                </div>
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-20 container mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                >
                    <Lock className="w-3 h-3 text-gold" />
                    <span className="text-xs uppercase tracking-widest text-white/80">Private Secondary Market</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Unlock Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
                        Private Share Value
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Valex Flow connects private shareholders with institutional capital.
                    Discreet, data-driven execution for founders, employees, and early investors.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/sell">
                        <Button size="lg" className="min-w-[200px] group">
                            I am a Seller
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/buy">
                        <Button variant="outline" size="lg" className="min-w-[200px]">
                            I am a Buyer
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 flex items-center justify-center gap-8 text-white/30 grayscale opacity-70"
                >
                    {/* Trust Indicators Placeholders */}
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-sm font-medium">Bank-Grade Security</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">$500M+ Transaction Volume</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
