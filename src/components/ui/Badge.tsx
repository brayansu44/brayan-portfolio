import type { ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "success" | "violet";

interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

const variants: Record<BadgeVariant, string> = {
    default:
        "border border-border bg-surface-elevated text-muted",

    primary:
        "border border-primary/20 bg-primary-soft text-primary",

    success:
        "border border-success/20 bg-success-soft text-success",

    violet:
        "border border-violet-brand/20 bg-violet-soft text-violet-brand",
};

export default function Badge({
    children,
    variant = "default",
    className = "",
}: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center rounded-full
        px-3 py-1
        text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}