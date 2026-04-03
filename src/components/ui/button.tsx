"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-sm tracking-wide uppercase";

    const variants = {
      primary: "bg-accent text-background hover:bg-accent-hover",
      secondary: "bg-surface-light text-foreground hover:bg-border",
      outline: "border border-border text-foreground hover:border-accent hover:text-accent",
      ghost: "text-muted hover:text-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-sm",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
