import { Metadata } from "next";
import { SellPageContent } from "@/components/sell/sell-page-content";

export const metadata: Metadata = {
    title: "Sell Private Shares | Valex Flow",
    description: "Discreet liquidity for founders and employees. Get a data-driven valuation.",
};

export default function SellPage() {
    return <SellPageContent />;
}
