"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
}

export default function Reveal({
    children,
    className = "",
    delay = 0,
    y = 24,
    once = true,
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y,
                    }
            }
            whileInView={
                shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                    }
            }
            viewport={{
                once,
                amount: 0.15,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}