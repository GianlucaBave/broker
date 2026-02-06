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
import { ShieldCheck, Lock, Activity } from "lucide-react";

// Form Schema
const sellerFormSchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    securityType: z.enum(["common", "preferred", "options", "warrants"]),
    dealSize: z.string().min(1, "Estimated size is required"),
    role: z.enum(["founder", "employee", "investor", "other"]),
    email: z.string().email("Invalid email address"),
});

type SellerFormData = z.infer<typeof sellerFormSchema>;

export function SellPageContent() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SellerFormData>({
        resolver: zodResolver(sellerFormSchema),
    });

    const onSubmit = async (data: SellerFormData) => {
        console.log("Seller Inquiry:", data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Inquiry received. A broker will contact you securely.");
        reset();
    };

    return (
        <main className="min-h-screen bg-primary text-white selection:bg-secondary/30 flex flex-col">
            <Navbar />

            <section className="flex-grow pt-32 pb-20 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6 text-secondary">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-widest">Confidential Liquidity</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Liquidity Without <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Compromise</span>
                            </h1>

                            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                                Connect with pre-vetted institutional buyers without alerting the market.
                                We protect your anonymity and your company's cap table integrity throughout the entire process.
                            </p>

                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Lock className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Total Anonymity</h3>
                                        <p className="text-sm text-muted">Your identity is shielded until a validated match is found.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                        <Activity className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Market-Calibrated Pricing</h3>
                                        <p className="text-sm text-muted">Real-time data ensures you don't leave money on the table.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-neutral-dark/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-6">Secure Inquiry</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Company Name</label>
                                    <Input {...register("companyName")} placeholder="e.g. SpaceX, Stripe, Databricks" />
                                    {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName.message}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-muted mb-1">Security Type</label>
                                        <Select {...register("securityType")}>
                                            <option value="common">Common Stock</option>
                                            <option value="preferred">Preferred Stock</option>
                                            <option value="options">Options</option>
                                            <option value="warrants">Warrants</option>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-muted mb-1">Your Role</label>
                                        <Select {...register("role")}>
                                            <option value="founder">Founder</option>
                                            <option value="employee">Early Employee</option>
                                            <option value="investor">Angel/VC</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Estimated Deal Size ($)</label>
                                    <Input {...register("dealSize")} placeholder="e.g. 500k, 2M, 10M+" />
                                    {errors.dealSize && <p className="text-red-400 text-xs mt-1">{errors.dealSize.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-muted mb-1">Work Email</label>
                                    <Input {...register("email")} type="email" placeholder="you@company.com" />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" disabled={isSubmitting} variant="primary" className="w-full h-14 text-lg">
                                        {isSubmitting ? "Encrypting & Sending..." : "Request Valuation"}
                                    </Button>
                                    <p className="text-xs text-muted text-center mt-4">
                                        By submitting, you agree to our privacy policy. Your data is encrypted end-to-end.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
