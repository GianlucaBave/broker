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
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 grayscale opacity-50 hover:opacity-80 transition-opacity duration-500">
              {[
                { name: "Insight Partners", initial: "I" },
                { name: "Accel", initial: "A" },
                { name: "Index Ventures", initial: "I" },
                { name: "Lightspeed", initial: "L" },
                { name: "General Atlantic", initial: "G" },
                { name: "NEA", initial: "N" },
                { name: "Bessemer", initial: "B" },
                { name: "Khosla Ventures", initial: "K" },
                { name: "Insight Partners", initial: "I" }, // Duplicate for seamless loop
                { name: "Accel", initial: "A" },
                { name: "Index Ventures", initial: "I" },
                { name: "Lightspeed", initial: "L" },
                { name: "General Atlantic", initial: "G" },
                { name: "NEA", initial: "N" },
                { name: "Bessemer", initial: "B" },
                { name: "Khosla Ventures", initial: "K" }
              ].map((fund, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-serif text-white/60 text-lg">
                    {fund.initial}
                  </div>
                  <span className="text-lg font-medium text-white/50 tracking-wide font-serif">{fund.name}</span>
                </div>
              ))}
            </div>

            {/* Infinite Marquee of Boutique Funds */}
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
