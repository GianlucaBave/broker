import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                    // Variants
                    variant === "primary" && "bg-accent text-primary hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:scale-[1.02] font-bold",
                    variant === "secondary" && "bg-secondary text-white hover:bg-secondary/90 hover:shadow-lg hover:scale-[1.02]",
                    variant === "outline" && "border border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary",
                    variant === "ghost" && "text-white/70 hover:text-white hover:bg-white/5",

                    // Sizes
                    size === "sm" && "h-9 px-4 text-sm",
                    size === "md" && "h-11 px-6 text-base",
                    size === "lg" && "h-14 px-8 text-lg",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
