import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy border-t border-white/10 py-12 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                VALEX<span className="font-light text-gold">FLOW</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Intelligent liquidity solutions for private assets.
                            Connecting shareholders with institutional capital through data and discretion.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-bold mb-4 text-gold text-sm uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2 text-sm text-white/50">
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 text-gold text-sm uppercase tracking-wider">Contact</h4>
                            <ul className="space-y-2 text-sm text-white/50">
                                <li><a href="mailto:contact.valexflow@gmail.com" className="hover:text-white transition-colors">contact.valexflow@gmail.com</a></li>
                                <li><a href="tel:+393665424379" className="hover:text-white transition-colors">+39 366 542 4379</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} Valex Flow. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a href="mailto:contact.valexflow@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-gold">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
