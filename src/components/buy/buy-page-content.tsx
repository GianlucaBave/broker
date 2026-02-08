"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select-native";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Diamond, Search, BarChart3 } from "lucide-react";

const buyerFormSchema = z.object({
    fundName: z.string().min(2, "Fund/Entity name is required"),
    aum: z.string().min(1, "AUM is required"),
    focusArea: z.string().min(2, "Focus area is required"),
    email: z.string().email("Invalid email address"),
});

type BuyerFormData = z.infer<typeof buyerFormSchema>;

export function BuyPageContent() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<BuyerFormData>({
        resolver: zodResolver(buyerFormSchema),
    });

    const onSubmit = async (data: BuyerFormData) => {
        console.log("Buyer Inquiry:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Application received. Our team will review your credentials.");
        reset();
    };

    return (
        <main className="min-h-screen bg-neutral-dark text-white selection:bg-accent/30 flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Right Column: Form (Swapped for visual variety vs Sell page) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-primary/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl order-2 lg:order-1"
                        >
                            <h2 className="text-2xl font-bold mb-6">Institutional Access Request</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Fund / Institution Name</label>
                                    <Input {...register("fundName")} placeholder="e.g. Acme Capital, Family Office" />
                                    {errors.fundName && <p className="text-red-400 text-xs mt-1">{errors.fundName.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Assets Under Management (AUM)</label>
                                    <Select {...register("aum")}>
                                        <option value="">Select Range</option>
                                        <option value="<50M">&lt; $50M</option>
                                        <option value="50M-100M">$50M - $100M</option>
                                        <option value="100M-500M">$100M - $500M</option>
                                        <option value="500M+">$500M+</option>
                                    </Select>
                                    {errors.aum && <p className="text-red-400 text-xs mt-1">{errors.aum.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Focus Sectors / Mandate</label>
                                    <Input {...register("focusArea")} placeholder="e.g. Late-stage SaaS, AI, Fintech" />
                                    {errors.focusArea && <p className="text-red-400 text-xs mt-1">{errors.focusArea.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Corporate Email</label>
                                    <Input {...register("email")} type="email" placeholder="partner@fund.com" />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" disabled={isSubmitting} variant="secondary" className="w-full h-14 text-lg">
                                        {isSubmitting ? "Processing..." : "Apply for Access"}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Left Column: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-2 mb-6 text-accent">
                                <Diamond className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-widest">Exclusive Deal Flow</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Access Coveted <br />
                                <span className="text-white">Pre-IPO Assets</span>
                            </h1>

                            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                                Valex Flow provides qualified institutional buyers with a curated stream of off-market secondary opportunities, based on deep market data.
                            </p>

                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Search className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Vetted Counterparties</h3>
                                        <p className="text-sm text-muted">Direct access to verified shareholders, not broker chains.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <BarChart3 className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Structured Blocks</h3>
                                        <p className="text-sm text-muted">We aggregate smaller positions into institutional-grade blocks.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
