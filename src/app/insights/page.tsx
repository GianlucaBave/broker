import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Market Insights | Valex Flow",
    description: "Data-driven analysis of the secondary market and private valuations.",
};

const articles = [
    {
        title: "The State of Late-Stage SaaS Valuations in Q1 2026",
        category: "Market Trends",
        date: "Feb 12, 2026",
    },
    {
        title: "Understanding ROFR: How to Navigate Company Restrictions",
        category: "Education",
        date: "Jan 28, 2026",
    },
    {
        title: "Why Family Offices Are Allocating More to Secondaries",
        category: "Capital Flow",
        date: "Jan 15, 2026",
    },
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold/30">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-12">Market Intelligence</h1>

                <div className="grid gap-6">
                    {articles.map((article, i) => (
                        <Link key={i} href="#" className="group block bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-8 transition-colors">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-teal text-xs font-bold uppercase tracking-wider mb-2 block">{article.category}</span>
                                    <h2 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{article.title}</h2>
                                    <p className="text-white/40 text-sm">{article.date}</p>
                                </div>
                                <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-gold transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
