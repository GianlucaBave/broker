import { Metadata } from "next";
import { BuyPageContent } from "@/components/buy/buy-page-content";

export const metadata: Metadata = {
    title: "Institutional Buyer Access | Valex Flow",
    description: "Access curated pre-IPO and secondary opportunities. Join our vetted network.",
};

export default function BuyPage() {
    return <BuyPageContent />;
}
