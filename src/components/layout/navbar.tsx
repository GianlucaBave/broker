"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Process", href: "/process" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled ? "bg-navy/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="z-50 group">
                        <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-gold transition-colors duration-300">
                            VALEX<span className="font-light text-gold">FLOW</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 ml-4">
                            <Link href="/sell">
                                <Button variant="ghost" size="sm" className="border border-white/20">
                                    Seller
                                </Button>
                            </Link>
                            <Link href="/buy">
                                <Button variant="primary" size="sm">
                                    Buyer Access
                                </Button>
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-3xl flex flex-col justify-center items-center gap-12 p-6 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl md:text-5xl font-light text-white hover:text-gold transition-colors tracking-tight"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-6 w-full max-w-xs mt-8"
                        >
                            <Link href="/sell" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button size="lg" className="w-full h-14 text-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold/50 transition-all duration-300">
                                    Seller Access
                                </Button>
                            </Link>
                            <Link href="/buy" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button size="lg" className="w-full h-14 text-lg bg-gold text-navy hover:bg-white hover:text-navy transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                    Buyer Access
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
