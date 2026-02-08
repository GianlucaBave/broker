"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";

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
            {/* Particle Network Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/20 z-10" /> {/* Overlay for text readability */}
                <ParticleBackground />
                <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,_rgba(10,26,47,0.6)_0%,_#0A1A2F_100%)]" />
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
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "silk-like" feel
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Unlock Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
                        Private Share Value
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Institutional Access. Private Liquidity. Discreet Execution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/sell">
                        <Button size="lg" className="min-w-[200px] h-14 text-lg bg-gold text-navy hover:bg-gold/90 border-none font-semibold shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                            I am a Seller
                        </Button>
                    </Link>
                    <Link href="/buy">
                        <Button variant="outline" size="lg" className="min-w-[200px] h-14 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                            I am a Buyer
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
