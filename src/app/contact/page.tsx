import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Valex Flow",
    description: "Get in touch with our brokerage team.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-navy text-white selection:bg-gold/30">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">Get in Touch</h1>
                        <p className="text-xl text-white/60 mb-12">
                            For general inquiries or partnership proposals. <br />
                            For buy/sell requests, please use our dedicated secure portals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-gold" />
                                <span className="text-lg">hello@valexflow.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-gold" />
                                <span className="text-lg">+1 (212) 555-0199</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-gold" />
                                <span className="text-lg">10 Hudson Yards, New York, NY 10001</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-charcoal p-8 rounded-2xl border border-white/5">
                        <form className="space-y-4">
                            <Input placeholder="Your Name" />
                            <Input placeholder="Email Address" type="email" />
                            <textarea
                                className="w-full min-h-[150px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                                placeholder="How can we help?"
                            />
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
