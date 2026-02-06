import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Valex Flow",
    description: "The team bridging the gap between private assets and institutional capital.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold/30">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">The Valex Flow Standard</h1>
                    <p className="text-xl text-white/60">
                        Founded by veterans of investment banking and data science, we saw a broken market.
                        Private liquidity was opaque, slow, and riddled with middlemen. We built Valex Flow to bring
                        institutional rigor and algorithmic precision to the secondary asset class.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-charcoal border border-white/5 rounded-xl p-6 text-center">
                            <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-1">Partner Name</h3>
                            <p className="text-gold text-sm mb-4">Managing Partner</p>
                            <p className="text-white/50 text-sm">Ex-Goldman Sachs, 15+ years in private markets execution.</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
