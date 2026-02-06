import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Difference } from "@/components/home/difference";
import { Intelligence } from "@/components/home/intelligence";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Difference />
      <Intelligence />

      {/* Trust Indicators Section */}
      <section className="py-20 bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-10">Trusted Relationship Network</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-50">
            {/* Placeholders for logos */}
            {["Global Secondary Fund", "Leading Tech Family Office", "Tier-1 VC Fund", "Sovereign Wealth Partner"].map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20" />
                <span className="text-lg font-serif font-bold text-white/80">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Unlock Liquidity?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Begin your confidential assessment today. Whether buying or selling, we ensure optimal execution.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-10 h-14 shadow-2xl shadow-gold/20">
              Begin Confidential Assessment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
