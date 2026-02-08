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
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">About Valex Flow</h1>
                    <p className="text-xl text-white/60">
                        Bridging the gap between rigorous financial strategy and creative product development.
                        We transform complex market insights into tangbile liquidity solutions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-charcoal border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                        {/* Profile Image */}
                        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-2 border-gold/20 shadow-2xl relative">
                            <img
                                src="https://my-portfolio-roan-kappa-80.vercel.app/profile.jpg"
                                alt="Gianluca Bavelloni"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bio */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Gianluca Bavelloni</h2>
                            <p className="text-gold font-medium mb-6 uppercase tracking-wider text-sm">Founder & Managing Partner</p>

                            <div className="space-y-4 text-white/70 leading-relaxed font-light">
                                <p>
                                    MSc in Business Analytics at ESADE. Gianluca combines deep financial expertise with advanced AI engineering, having developed machine learning models for top European banks like <strong>Banco Sabadell</strong> and <strong>CaixaBank</strong>.
                                </p>
                                <p>
                                    He now applies this institutional rigor to Valex Flow, building the predictive engines that bridge the gap between private sellers and institutional capital with algorithmic precision.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                                <a href="mailto:contact.valexflow@gmail.com" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm">
                                    Contact Me
                                </a>
                                <a href="https://www.linkedin.com/in/gianluca-bavelloni/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
