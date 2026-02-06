import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Process | Valex Flow",
    description: "How we execute private market transactions with discretion and speed.",
};

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold/30">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Execution Protocol</h1>

                <div className="max-w-4xl mx-auto space-y-12">
                    {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex gap-6 md:gap-10">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full border border-gold/50 bg-gold/10 text-gold flex items-center justify-center font-bold text-xl">
                                    {step}
                                </div>
                                {step !== 4 && <div className="w-px h-full bg-white/10 my-4" />}
                            </div>
                            <div className="pb-12">
                                <h3 className="text-2xl font-bold mb-4">Step {step}: {
                                    step === 1 ? "Confidential Assessment" :
                                        step === 2 ? "Data-Driven Valuation" :
                                            step === 3 ? "Targeted Placement" : "Settlement & Transfer"
                                }</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    {step === 1 && "We begin with a secure consultation to understand your position, liquidity goals, and timeline. An NDA is signed immediately."}
                                    {step === 2 && "Our AI models analyze secondary market prints, sector trends, and company-specific KPIs to establish a realistic clearing price."}
                                    {step === 3 && "We silently market the block to our curated network of institutional buyers. No public listings. No noise."}
                                    {step === 4 && "We coordinate with company counsel and transfer agents to handle the legal paperwork and facilitate the secure exchange of funds."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
